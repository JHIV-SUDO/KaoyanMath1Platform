import { api, auth } from '@appdeploy/client';
import katex from 'katex';
import renderMathInElement from 'katex/contrib/auto-render';
import 'katex/dist/katex.min.css';
import './cloud.css';
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

window.katex = katex;
window.renderMathInElement = renderMathInElement;

const gate = document.createElement('div');
gate.className = 'cloud-gate';
gate.innerHTML = '<div class="cloud-card"><div class="cloud-mark">∑</div><h1>考研数学一</h1><p>登录后，手机和电脑使用同一个账号同步学习记录。</p><button type="button">登录并开始学习</button><p class="cloud-message" role="status"></p></div>';
document.body.append(gate);
const message = gate.querySelector('.cloud-message');
const button = gate.querySelector('button');
const banner = document.createElement('div');
banner.className = 'cloud-banner';
banner.hidden = true;
document.body.append(banner);

let user, localKey, revision = 0, latest = null, pending = null, hold = false, saving = false, timer, lockHeld = false;
let editId = 0, reconciling = false;
const nativeFetch = window.fetch.bind(window);
const syncStatus = document.createElement('p');
syncStatus.className = 'cloud-sync-status';
syncStatus.setAttribute('role', 'status');
syncStatus.setAttribute('aria-live', 'polite');

function setSyncStatus(text) { syncStatus.textContent = text; }

function defaultState() {
  return { version: 1, createdAt: new Date().toISOString(), settings: { nickname: '研友', examDate: '2026-12-19', dailyTargetMinutes: 180 }, lessonStatus: {}, syllabusMastery: {}, problems: {}, mistakes: [], logs: {}, exams: {}, plan: null, practice: {}, mockAttempts: {}, mockResults: [], pomodoro: { running: null } };
}

function saveDraft() {
  try {
    if (latest || pending) localStorage.setItem(localKey, JSON.stringify({ revision, latest, pending }));
    else localStorage.removeItem(localKey);
  } catch (_) { show('浏览器无法保存本地草稿，请尽快导出备份。'); }
}

function downloadDraft() {
  if (!latest && !pending) return;
  const blob = new Blob([latest?.state || pending.state], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = '考研数学学习记录-未同步.json';
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

function show(text, canCheck = false) {
  banner.hidden = false;
  banner.replaceChildren();
  const label = document.createElement('span');
  label.textContent = text;
  banner.append(label);
  if (latest || pending) {
    const exportButton = document.createElement('button');
    exportButton.textContent = '导出草稿';
    exportButton.onclick = downloadDraft;
    banner.append(exportButton);
    const reloadButton = document.createElement('button');
    reloadButton.textContent = '使用云端记录';
    reloadButton.onclick = async () => {
      if (!confirm('当前设备的未同步更改将被移出当前学习界面。请先导出草稿，确定使用云端记录吗？')) return;
      try {
        const result = await api.get('/api/state');
        revision = result.data.revision;
        latest = null; pending = null; hold = false; saveDraft();
        setSyncStatus('已同步云端');
        const { S } = await import('./platform/js/store.js');
        S.db = result.data.state || defaultState();
        banner.hidden = true;
        window.dispatchEvent(new Event('hashchange'));
      } catch (_) { show('暂时无法读取云端记录，请稍后重试。', true); }
    };
    banner.append(reloadButton);
  }
  if (canCheck && pending) {
    const checkButton = document.createElement('button');
    checkButton.textContent = '检查同步状态';
    checkButton.onclick = reconcile;
    banner.append(checkButton);
  }
}

async function reconcile() {
  if (!pending || reconciling || saving) return;
  const attempt = pending;
  reconciling = true;
  setSyncStatus('正在核对云端提交状态…');
  try {
    const result = await api.get('/api/receipt/' + attempt.requestId);
    if (pending !== attempt) return;
    const remote = await api.get('/api/state');
    if (pending !== attempt) return;
    if (result.data) {
      if (remote.data.revision !== result.data.revision) {
        hold = true; saveDraft(); setSyncStatus('同步冲突，草稿已保留'); show('其他设备已有新记录。请导出本机草稿后选择云端记录。'); return;
      }
      acknowledge(attempt, result.data.revision);
      return;
    }
    if (remote.data.revision !== attempt.expected) {
      hold = true; saveDraft(); setSyncStatus('同步冲突，草稿已保留'); show('云端记录已变化，提交结果仍未确认。请导出草稿后选择云端记录。'); return;
    }
    hold = false;
    await submit(attempt);
  } catch (_) {
    if (pending === attempt) { hold = true; saveDraft(); setSyncStatus('同步结果仍未确定，草稿已保留'); show('暂时无法确认同步结果，草稿已保留。', true); }
  } finally { reconciling = false; }
}

function acknowledge(attempt, savedRevision) {
  if (pending !== attempt) return;
  revision = savedRevision;
  if (latest?.id === attempt.editId) latest = null;
  pending = null; hold = false; saveDraft();
  setSyncStatus(latest ? '较早版本已同步，新更改等待同步' : '已同步云端');
  if (latest) schedule(); else banner.hidden = true;
}

async function submit(attempt) {
  if (saving || pending !== attempt) return;
  saving = true;
  setSyncStatus('正在同步云端…');
  try {
    const result = await api.put('/api/state', { requestId: attempt.requestId, expected: attempt.expected, state: JSON.parse(attempt.state) });
    if (pending !== attempt) return;
    if (result.data.status === 'saved') {
      acknowledge(attempt, result.data.revision);
    } else if (result.data.status === 'conflict') {
      pending = null; hold = true; saveDraft(); setSyncStatus('同步冲突，草稿已保留');
      show('其他设备已有新记录。请导出本机草稿后选择云端记录。');
    } else {
      hold = true; saveDraft(); setSyncStatus('同步结果仍未确定，草稿已保留'); show('同步结果暂未确定，草稿已保留。', true);
    }
  } catch (_) {
    if (pending === attempt) { hold = true; saveDraft(); setSyncStatus('同步结果仍未确定，草稿已保留'); show('网络或云端异常，草稿已保留，请检查同步状态。', true); }
  } finally {
    saving = false;
    if (latest && !hold) schedule();
  }
}

async function flush() {
  if (hold || saving || reconciling || !latest) return;
  if (!navigator.onLine) { setSyncStatus('网络不可用，草稿已保留'); show('当前网络不可用，联网后将自动同步。'); return; }
  if (!pending) {
    pending = { requestId: crypto.randomUUID(), expected: revision, state: latest.state, editId: latest.id };
    saveDraft();
  }
  await submit(pending);
}

function schedule() { clearTimeout(timer); timer = setTimeout(flush, 400); }
window.addEventListener('online', () => { if (latest && !hold) schedule(); });

async function start() {
  user = await auth.getUser();
  if (!user) { gate.hidden = false; return; }
  setSyncStatus('正在读取云端记录…');
  localKey = 'kaoyan-sync:' + user.userId;
  if (navigator.locks && !lockHeld) {
    const acquired = new Promise(resolve => {
      navigator.locks.request(localKey, { ifAvailable: true }, async lock => {
        resolve(Boolean(lock));
        if (lock) await new Promise(() => {});
      });
    });
    if (!await acquired) throw new Error('请先关闭同一浏览器中已打开的学习平台标签页');
    lockHeld = true;
  }
  let draft = null;
  try { draft = JSON.parse(localStorage.getItem(localKey) || 'null'); } catch (_) {}
  const remote = await api.get('/api/state');
  revision = remote.data.revision;
  let state = remote.data.state || defaultState();
  if (draft?.latest || draft?.pending) {
    revision = draft.revision;
    latest = typeof draft.latest === 'string' ? { id: ++editId, state: draft.latest } : draft.latest;
    if (latest?.id) editId = Math.max(editId, latest.id);
    pending = draft.pending;
    if (pending && !pending.editId) pending.editId = latest?.state === pending.state ? latest.id : null;
    if (pending && !latest) latest = { id: pending.editId || ++editId, state: pending.state };
    state = JSON.parse(latest?.state || pending.state);
    if (pending) { hold = true; setSyncStatus('发现未确认的同步请求，草稿已保留'); show('发现未确认的同步请求，草稿已保留。', true); }
    else if (revision !== remote.data.revision) { hold = true; setSyncStatus('同步冲突，草稿已保留'); show('其他设备已有新记录。请导出本机草稿后选择云端记录。'); }
    else { setSyncStatus('有未同步更改'); schedule(); }
  } else {
    setSyncStatus('已同步云端');
  }
  const contentResponse = await nativeFetch('/content.json');
  if (!contentResponse.ok) throw new Error('课程内容暂时不可用');
  const content = await contentResponse.json();
  const contentLoads = new Map();
  const ensureContent = kind => {
    if (!contentLoads.has(kind)) {
      const task = Promise.all((content.contentParts || []).filter(part => part.kind === kind).map(async part => {
        const response = await nativeFetch(part.url);
        if (!response.ok) throw new Error('内容暂时无法载入，请重试');
        return response.json();
      })).then(parts => { content[kind] = parts.flat(); });
      contentLoads.set(kind, task.catch(cause => { contentLoads.delete(kind); throw cause; }));
    }
    return contentLoads.get(kind);
  };
  window.CloudPlatform = {
    bootstrap: async () => ({ db: state, content }),
    user: { userId: user.userId, email: user.email, name: user.name },
    save: db => { latest = { id: ++editId, state: JSON.stringify(db) }; saveDraft(); setSyncStatus('有未同步更改'); if (!hold) schedule(); },
    loadThree: () => Promise.all([import('three'), import('three/addons/controls/OrbitControls.js')]),
    loadPdfJs: async () => {
      const pdfjs = await import('pdfjs-dist');
      pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;
      return pdfjs;
    },
    ensureForRoute: async name => {
      if (['practice', 'drill', 'mistakes'].includes(name)) await ensureContent('bookQuestions');
      if (name === 'lessons') await ensureContent('repoNotes');
    },
  };
  const signout = document.createElement('button');
  signout.className = 'btn ghost small';
  signout.textContent = '退出账号';
  signout.onclick = async () => {
    if ((latest || pending) && !confirm('还有未同步的草稿。请先导出备份，确定退出吗？')) return;
    await auth.signOut(); location.reload();
  };
  window.CloudPlatform.signOut = signout.onclick;
  document.querySelector('.sidebar-foot').append(syncStatus, signout);
  gate.hidden = true;
  await import('./platform/js/app.js');
  if (pending) reconcile();
  document.addEventListener('visibilitychange', async () => {
    if (document.hidden || latest || pending || saving || hold) return;
    try {
      const before = revision;
      const next = await api.get('/api/state');
      if (latest || pending || saving || hold || revision !== before) return;
      if (next.data.revision !== revision) {
        revision = next.data.revision;
        const { S } = await import('./platform/js/store.js');
        S.db = next.data.state || defaultState();
        window.dispatchEvent(new Event('hashchange'));
      }
    } catch (_) { setSyncStatus('暂时无法读取云端状态'); show('暂时无法读取云端最新记录。'); }
  });
}

button.addEventListener('click', async () => {
  try {
    button.disabled = true;
    message.textContent = '';
    if (!auth.isSignedIn()) await auth.signIn();
    await start();
  } catch (e) {
    message.textContent = e?.code === 'popup_blocked' ? '请允许浏览器打开登录窗口。' : e?.message?.startsWith('请先关闭') ? e.message : '登录或加载失败，请检查网络后重试。';
  } finally { button.disabled = false; }
});

start().catch(e => { gate.hidden = false; message.textContent = e?.message?.startsWith('请先关闭') ? e.message : '连接云端失败，请检查网络后重试。'; });
