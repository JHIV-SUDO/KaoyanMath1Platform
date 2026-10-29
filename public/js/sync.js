// 账号与同步客户端：本机记录始终是工作副本，云端是它的同步副本。
// 语义与 service/server.mjs、cloud/backend/index.ts 一致：revision + 稳定 requestId + 回执查询。
// Web（server.js）使用 fetch + localStorage 令牌；Android 通过 AndroidPlatform.syncRequest 桥（令牌保存在 Java 侧）。

const TOKEN_KEY = 'kaoyan-auth:token';
const OWNER_KEY = 'kaoyan-sync:local-owner';
const DEFAULT_SERVICE = 'https://app-2uzt75.v2.appdeploy.ai/';

function metaKey(user, service) {
  return `kaoyan-sync:meta:${encodeURIComponent(service)}:${encodeURIComponent(user?.userId || '')}`;
}
function metaGet(user, service) {
  try { return JSON.parse(localStorage.getItem(metaKey(user, service)) || 'null'); } catch { return null; }
}
function metaSet(user, service, meta) {
  try {
    const key = metaKey(user, service);
    if (meta) localStorage.setItem(key, JSON.stringify(meta));
    else localStorage.removeItem(key);
  } catch { /* 隐私模式下忽略 */ }
}

// 同源部署探测：本应用与同步服务一起部署时（service/server.mjs），接口就在当前 origin。
// 未登录访问 /api/auth/me 返回 JSON 401；本地开发服务器（server.js）则回退 HTML。
let sameOriginService;
async function detectSameOrigin() {
  if (sameOriginService !== undefined) return sameOriginService;
  try {
    const r = await fetch('/api/auth/me', { headers: { 'Accept': 'application/json' } });
    sameOriginService = r.status === 401;
  } catch { sameOriginService = false; }
  return sameOriginService;
}

export const Sync = {
  user: null,
  status: 'off',            // off | idle | pending | saving | synced | error | conflict
  message: '',
  revision: 0,
  _db: null,                // 引用 S，避免循环 import
  _pending: null,           // 固定 requestId、expected、版本和不可变 state 快照
  _version: 0,
  _scope: null,
  _timer: null,
  _saving: false,
  _listeners: new Set(),
  onConflict: null,         // async (cloudState, cloudRevision) => 'cloud'|'local'|'later'
  onAdopt: null,            // async (state) => void  由宿主提供：替换 S.db 并重渲染

  android() { return typeof window.AndroidPlatform?.syncRequest === 'function'; },

  serviceUrl() {
    if (this.android()) return window.AndroidPlatform.syncUrl();
    return localStorage.getItem('kaoyan-auth:service') || (sameOriginService ? '' : DEFAULT_SERVICE);
  },
  setServiceUrl(url) {
    url = String(url || '').trim().replace(/\/+$/, '');
    if (url && !/^https:\/\/[^\s]+$/.test(url)) throw new Error('同步地址必须以 https:// 开头（同源部署可留空）');
    if (this.android()) window.AndroidPlatform.setSyncUrl(url);
    else { if (url) localStorage.setItem('kaoyan-auth:service', url); else { localStorage.removeItem('kaoyan-auth:service'); sameOriginService = undefined; } }
  },

  /* ---------- 传输 ---------- */
  async transport(method, path, bodyObj) {
    if (this.android()) {
      const body = bodyObj === undefined ? '' : JSON.stringify(bodyObj);
      const raw = typeof window.__kaoyanSyncRequest === 'function'
        ? await window.__kaoyanSyncRequest(method, path, body)
        : window.AndroidPlatform.syncRequest(method, path, body);
      const r = JSON.parse(raw);
      return { status: r.status, data: r.body ? JSON.parse(r.body) : null };
    }
    let base = localStorage.getItem('kaoyan-auth:service');
    if (!base) base = (await detectSameOrigin()) ? '' : DEFAULT_SERVICE;
    const token = localStorage.getItem(TOKEN_KEY);
    const r = await fetch(base + path, {
      method,
      headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: 'Bearer ' + token } : {}) },
      body: bodyObj === undefined ? undefined : JSON.stringify(bodyObj),
    });
    let data = null;
    try { data = await r.json(); } catch { /* 空响应 */ }
    return { status: r.status, data };
  },

  /* ---------- 状态广播 ---------- */
  notify(message = '') {
    if (message) this.message = message;
    this._listeners.forEach(f => f(this.publicStatus()));
  },
  onUpdate(fn) { this._listeners.add(fn); },
  publicStatus() {
    return { signedIn: Boolean(this.user), email: this.user?.email || '', nickname: this.user?.nickname || '', status: this.status, message: this.message };
  },

  /* ---------- 会话 ---------- */
  async login(email, password) {
    const r = await this.transport('POST', '/api/auth/login', { email, password });
    if (r.status !== 200) throw new Error(r.data?.error || `登录失败 (${r.status})`);
    if (!this.android()) localStorage.setItem(TOKEN_KEY, r.data.token);
    this.user = { userId: r.data.userId, email: r.data.email, nickname: r.data.nickname };
    this.revision = 0;
    await this.afterSignIn();
    return this.user;
  },
  async register(email, password) {
    const r = await this.transport('POST', '/api/auth/register', { email, password });
    if (r.status !== 201) throw new Error(r.data?.error || `注册失败 (${r.status})`);
    if (!this.android()) localStorage.setItem(TOKEN_KEY, r.data.token);
    this.user = { userId: r.data.userId, email: r.data.email, nickname: r.data.nickname };
    await this.afterSignIn();
    return this.user;
  },
  async signout() {
    try { await this.transport('POST', '/api/auth/signout'); } catch { /* 令牌失效也无妨 */ }
    if (!this.android()) localStorage.removeItem(TOKEN_KEY);
    clearTimeout(this._timer);
    this.user = null; this.status = 'off'; this._pending = null; this.revision = 0; this._scope = null; this._version = 0;
    this.notify('已退出账号，本机记录保留');
  },
  async restoreSession() {
    if (this.android()) {
      try {
        const r = await this.transport('GET', '/api/auth/me');
        if (r.status !== 200) return null;
        this.user = r.data;
      } catch { return null; }
    } else {
      if (!localStorage.getItem(TOKEN_KEY)) return null;
      try {
        const r = await this.transport('GET', '/api/auth/me');
        if (r.status !== 200) { localStorage.removeItem(TOKEN_KEY); return null; }
        this.user = r.data;
      } catch { return null; }
    }
    return this.user;
  },

  /* ---------- 初始化与冲突 ---------- */
  attach(store) {
    this._db = store;
  },
  async afterSignIn() {
    const service = this.serviceUrl();
    const scope = metaKey(this.user, service);
    const meta = metaGet(this.user, service);
    const owner = localStorage.getItem(OWNER_KEY);
    if (owner && owner !== scope) {
      this._scope = scope; this._pending = meta?.pending || null; this._version = meta?.version || 0;
      this.revision = meta?.revision || 0; this.status = 'conflict';
      this.notify('本机仍有其他账号的未同步记录，请先切回原账号确认同步'); return;
    }
    if (this._scope !== scope) {
      this._scope = scope;
      this._pending = meta?.pending || null;
      this._version = meta?.version || 0;
      this.revision = meta?.revision || 0;
    }
    if (meta?.conflict) { this.status = 'conflict'; this.notify('同步已暂停：处理前不会覆盖任何一端记录'); return; }
    if (meta?.dirty) {
      if (this._pending) {
        const result = await this.reconcile();
        if (result !== 'confirmed') {
          this.status = 'pending'; this.notify('存在未确认的本机更改，保留原请求并继续确认');
          return;
        }
        if (!metaGet(this.user, service)?.dirty) return;
      }
      this.status = 'pending'; this.notify('正在上传本机未同步更改');
      await this.flush();
      return;
    }
    this.status = 'saving';
    this.notify('正在检查云端记录…');
    let cloud;
    try {
      cloud = await this.transport('GET', '/api/state');
    } catch {
      this.status = 'error'; this.notify('网络异常：暂时无法读取云端记录，本机记录不受影响');
      return;
    }
    if (cloud.status === 401) {
      this.status = 'error'; this.notify('登录已过期，请重新登录');
      return;
    }
    const cloudRevision = cloud.data?.revision ?? 0;
    const cloudState = cloud.data?.state ?? null;
    const local = this._db.db;
    const localEmpty = local && !(local.mistakes || []).length && !Object.keys(local.practice || {}).length
      && !Object.keys(local.lessonStatus || {}).length && !Object.keys(local.problems || {}).length
      && !Object.keys(local.logs || {}).length;

    if (!cloudState) {
      // 云端为空：若本机有内容，先征求同意再上传（明确迁移，不静默）
      if (!localEmpty) {
        const okPush = this.confirmUpload ? await this.confirmUpload(this.user) : true;
        if (okPush) { this.revision = 0; metaSet(this.user, service, { revision: 0, version: this._version, dirty: true }); this.status = 'pending'; this.notify('本机记录将上传到此账号'); this.notifyChange(true); return; }
      }
      this.revision = cloudRevision; metaSet(this.user, service, { revision: cloudRevision, version: this._version, dirty: false });
      this.status = 'synced'; this.notify('账号就绪：云端暂无记录');
      return;
    }
    const metaRevision = meta?.revision;
    if (metaRevision === cloudRevision) {
      // 已知状态一致
      this.revision = cloudRevision; this.status = 'synced'; this.notify('已与本账号同步');
      return;
    }
    if (metaRevision === undefined || metaRevision === null) {
      if (localEmpty && this.onAdopt) {
        // 新设备且本机无学习内容：直接采用云端，无需人工裁决
        this._skipNext = true;
        await this.onAdopt(cloudState);
        this.revision = cloudRevision;
        metaSet(this.user, service, { revision: cloudRevision, version: this._version, dirty: false });
        this.status = 'synced'; this.notify('已采用云端记录');
        return;
      }
      // 本机从未与该账号同步过且云端已有记录 → 明确选择，不静默覆盖
      this.status = 'conflict';
      const decision = this.onConflict ? await this.onConflict(cloudState, cloudRevision) : 'later';
      await this.applyDecision(decision, cloudState, cloudRevision);
      return;
    }
    if (metaRevision < cloudRevision) {
      // 云端更新：本机没有未同步更改时直接采用云端；有未同步更改才需要人工裁决
      if (!this._pending && !meta.dirty && this.onAdopt) {
        this._skipNext = true;
        await this.onAdopt(cloudState);
        this.revision = cloudRevision;
        metaSet(this.user, service, { revision: cloudRevision, version: this._version, dirty: false });
        this.status = 'synced'; this.notify('已采用云端最新记录');
      } else {
        metaSet(this.user, service, { revision: this.revision, version: this._version, dirty: true, pending: this._pending, conflict: true });
        this.status = 'conflict'; this.notify('云端与本机都有新更改，需要处理');
        if (this.onConflict) {
          const decision = await this.onConflict(cloudState, cloudRevision);
          await this.applyDecision(decision, cloudState, cloudRevision);
        }
      }
      return;
    }
    // 本机比云端新（metaRevision > cloudRevision，可能是云端被重置）→ 推送本机
    this.revision = cloudRevision;
    this.status = 'pending'; this.notifyChange(true);
  },
  async applyDecision(decision, cloudState, cloudRevision) {
    if (decision === 'cloud' && this.onAdopt) {
      this._skipNext = true;
      await this.onAdopt(cloudState);
      this.revision = cloudRevision;
      metaSet(this.user, this.serviceUrl(), { revision: cloudRevision, version: this._version, dirty: false });
      this.status = 'synced'; this.notify('已采用云端记录');
    } else if (decision === 'local') {
      this.revision = cloudRevision;
      metaSet(this.user, this.serviceUrl(), { revision: cloudRevision, version: this._version, dirty: true });
      this.status = 'pending'; this.notifyChange(true);
      this.notify('将上传本机记录（云端旧版本保留在服务端历史中）');
    } else {
      metaSet(this.user, this.serviceUrl(), { revision: this.revision, version: this._version, dirty: true, pending: this._pending, conflict: true });
      this.status = 'conflict'; this.notify('同步已暂停：处理前不会覆盖任何一端记录');
    }
  },

  /* ---------- 推送 ---------- */
  notifyChange(immediate = false) {
    if (!this.user) return;
    if (this._skipNext) { this._skipNext = false; return; }
    clearTimeout(this._timer);
    this._version++;
    const meta = metaGet(this.user, this.serviceUrl()) || {};
    metaSet(this.user, this.serviceUrl(), { ...meta, revision: this.revision, version: this._version, dirty: true, pending: this._pending, conflict: this.status === 'conflict' || meta.conflict === true });
    if (this.status === 'conflict') { this.notify(); return; }
    try { localStorage.setItem(OWNER_KEY, metaKey(this.user, this.serviceUrl())); } catch { /* 本机记录仍保留 */ }
    if (immediate) this.flush();
    else this._timer = setTimeout(() => this.flush(), 2500);
  },
  async flush() {
    if (!this.user || this._saving || this.status === 'conflict') return;
    const db = this._db.db;
    if (!db) return;
    if (!this._pending && !metaGet(this.user, this.serviceUrl())?.dirty) return;
    if (!this._pending) {
      if (!navigator.onLine && !this.android()) { this.status = 'pending'; this.notify('当前离线：更改已保存在本机，联网后自动同步'); return; }
      this._pending = { requestId: crypto.randomUUID(), expected: this.revision, version: this._version, state: JSON.parse(JSON.stringify(db)) };
      metaSet(this.user, this.serviceUrl(), { revision: this.revision, version: this._version, dirty: true, pending: this._pending });
    }
    this._saving = true;
    this.status = 'saving'; this.notify();
    const saveUserId = this.user.userId;
    const saveService = this.serviceUrl();
    try {
      const pending = this._pending;
      const payload = { requestId: pending.requestId, expected: pending.expected, state: pending.state };
      const r = await this.transport('PUT', '/api/state', payload);
      if (this.user?.userId !== saveUserId || this.serviceUrl() !== saveService) return;
      if (r.status === 200 && r.data?.status === 'saved') {
        this.revision = r.data.revision;
        if (this._pending === pending) this._pending = null;
        const dirty = this._version !== pending.version;
        metaSet(this.user, this.serviceUrl(), { revision: this.revision, version: this._version, dirty, pending: this._pending });
        if (!dirty) localStorage.removeItem(OWNER_KEY);
        this.status = dirty ? 'pending' : 'synced'; this.notify();
        if (dirty) this._timer = setTimeout(() => this.flush(), 0);
      } else if (r.status === 200 && r.data?.status === 'conflict') {
        if (this._pending === pending) this._pending = null;
        metaSet(this.user, this.serviceUrl(), { revision: this.revision, version: this._version, dirty: true, conflict: true });
        this.status = 'conflict'; this.notify('其他设备更新了云端记录，需要处理');
        const cloud = await this.transport('GET', '/api/state').catch(() => null);
        if (cloud?.data?.state && this.onConflict) {
          const decision = await this.onConflict(cloud.data.state, cloud.data.revision);
          await this.applyDecision(decision, cloud.data.state, cloud.data.revision);
        }
      } else if (r.status === 401) {
        this.status = 'error'; this.notify('登录已过期，请重新登录');
      } else if (r.status === 413) {
        this._pending = null; this.status = 'error'; metaSet(this.user, this.serviceUrl(), { revision: this.revision, version: this._version, dirty: true }); this.notify('记录过大无法同步：请导出备份并清理旧数据');
      } else if (r.status === 429) {
        this.status = 'pending'; this.notify('保存过于频繁，稍后自动重试');
        this._timer = setTimeout(() => this.flush(), 5000);
      } else {
        if (r.status >= 400 && r.status < 500) {
          this._pending = null;
          metaSet(this.user, this.serviceUrl(), { revision: this.revision, version: this._version, dirty: true });
          this.status = 'error'; this.notify(r.data?.error || `同步请求被拒绝 (${r.status})`);
        } else { this.status = 'pending'; this.notify('同步结果未确定，已保留原请求'); }
      }
    } catch {
      this.status = 'pending'; this.notify('网络异常：更改已保存在本机，恢复后自动同步');
    } finally {
      this._saving = false;
    }
  },
  async reconcile() {
    // 结果未定：查询回执，避免盲目重发新请求
    if (!this._pending) return 'none';
    const pending = this._pending;
    try {
      const r = await this.transport('GET', '/api/receipt/' + pending.requestId);
      if (r.status === 200 && r.data?.revision) {
        this.revision = r.data.revision;
        if (this._pending === pending) this._pending = null;
        const dirty = this._version !== pending.version;
        metaSet(this.user, this.serviceUrl(), { revision: this.revision, version: this._version, dirty, pending: this._pending });
        if (!dirty) localStorage.removeItem(OWNER_KEY);
        this.status = dirty ? 'pending' : 'synced'; this.notify(dirty ? '旧请求已确认，正在补发新更改' : '同步已确认');
        if (dirty) this._timer = setTimeout(() => this.flush(), 0);
        return 'confirmed';
      }
      if (r.status === 200 && r.data === null) {
        this.status = 'pending';
        this.notify('尚无该请求回执，保留原请求标识和内容待重试');
        this._timer = setTimeout(() => this.flush(), 0);
        return 'unknown';
      }
    } catch { this.notify('暂时无法确认同步结果，稍后重试'); }
    return 'unknown';
  },
};
