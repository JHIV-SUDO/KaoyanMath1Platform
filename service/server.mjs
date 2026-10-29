// 自托管同步服务（路线 B）：静态资源 + 内容 + 账号 + 用户隔离的学习记录同步。
// 零第三方依赖，仅使用 node:crypto / node:http 等标准库。
// 生产部署：置于 TLS 反向代理之后（见 service/README.md），本服务只做应用层。
//
// API 与 AppDeploy 后端（cloud/backend/index.ts）保持一致的状态语义：
//   GET  /api/state        → {revision, state|null}
//   PUT  /api/state        → {status:'saved',revision} | {status:'conflict'} | 400/401/413/429/503
//   GET  /api/receipt/:id  → {revision,digest}|null
// 账号接口：
//   POST /api/auth/register|login → {userId,email,nickname,token}
//   GET  /api/auth/me             → {userId,email,nickname}
//   POST /api/auth/signout        → {ok:true}
import http from 'node:http';
import crypto from 'node:crypto';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, '..', 'public');
const PROJECT = path.join(__dirname, '..');
const DATA_SEED = path.join(PROJECT, 'data', 'seed');
const LESSONS_DIR = path.join(PROJECT, 'data', 'lessons');
const MEDIA_DIR = path.join(PROJECT, 'media');
const DATA_DIR = process.env.SERVICE_DATA_DIR || path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const SECRET_FILE = path.join(DATA_DIR, 'secret.key');
const STATES_DIR = path.join(DATA_DIR, 'states');
const RECEIPTS_DIR = path.join(DATA_DIR, 'receipts');
const DEVICES_DIR = path.join(DATA_DIR, 'devices');

const PORT = Number(process.env.PORT || 8322);
const HOST = process.env.HOST || '127.0.0.1';
const STATE_LIMIT = 8 * 1024 * 1024;          // 单条记录上限（文件存储，无 AppDeploy 200KiB 限制）
const AUTH_BODY_LIMIT = 8 * 1024;
const TOKEN_TTL_MS = 180 * 24 * 3600 * 1000;
const HISTORY_KEEP = 5;
const RECEIPT_TTL_MS = 30 * 24 * 3600 * 1000;

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.pdf': 'application/pdf',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf',
};

/* ---------------- 存储初始化 ---------------- */
await fsp.mkdir(STATES_DIR, { recursive: true });
await fsp.mkdir(RECEIPTS_DIR, { recursive: true });
await fsp.mkdir(DEVICES_DIR, { recursive: true });
let secret;
try {
  secret = (await fsp.readFile(SECRET_FILE, 'utf8')).trim();
  if (secret.length < 32) throw new Error('weak');
} catch {
  secret = crypto.randomBytes(48).toString('base64url');
  await fsp.writeFile(SECRET_FILE, secret + '\n', { mode: 0o600 });
}

const b64u = buf => Buffer.from(buf).toString('base64url');
const hashHex = v => crypto.createHash('sha256').update(v).digest('hex');
const statePath = userId => path.join(STATES_DIR, hashHex(userId) + '.json');
const receiptPath = (userId, requestId) => path.join(RECEIPTS_DIR, hashHex(userId + ':' + requestId) + '.json');

let users = { byId: {}, byEmail: {} };
async function loadUsers() {
  try { users = JSON.parse(await fsp.readFile(USERS_FILE, 'utf8')); }
  catch (e) { if (e.code !== 'ENOENT') throw e; }
  users.byId ??= {}; users.byEmail ??= {};
}
const saveUsers = queue('users', async () => {
  const tmp = USERS_FILE + '.tmp';
  await fsp.writeFile(tmp, JSON.stringify(users), 'utf8');
  await fsp.rename(tmp, USERS_FILE);
});

// 每把锁一个串行写队列，避免并发写同一文件互相覆盖；返回排队的执行函数
function queue(key, locked) {
  return (...args) => {
    const chains = queue._chains ??= new Map();
    const prev = chains.get(key) ?? Promise.resolve();
    const next = prev.catch(() => {}).then(() => locked(...args));
    chains.set(key, next);
    const cleanup = () => { if (chains.get(key) === next) chains.delete(key); };
    next.then(cleanup, cleanup);
    return next;
  };
}

async function atomicWrite(file, data) {
  const tmp = file + '.' + crypto.randomBytes(4).toString('hex') + '.tmp';
  await fsp.writeFile(tmp, data, 'utf8');
  await fsp.rename(tmp, file);
}

/* ---------------- 口令与令牌（标准库原语，不自行设计加密协议） ---------------- */
function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  const hash = crypto.scryptSync(password, salt, 32, { N: 16384, r: 8, p: 1 });
  return salt.toString('base64') + ':' + hash.toString('base64');
}
function verifyPassword(password, stored) {
  const [saltB64, hashB64] = String(stored || '').split(':');
  if (!saltB64 || !hashB64) return false;
  const hash = crypto.scryptSync(password, Buffer.from(saltB64, 'base64'), 32, { N: 16384, r: 8, p: 1 });
  const expect = Buffer.from(hashB64, 'base64');
  return hash.length === expect.length && crypto.timingSafeEqual(hash, expect);
}
function issueToken(userId) {
  const nonce = crypto.randomBytes(12).toString('base64url');
  const exp = Date.now() + TOKEN_TTL_MS;
  const payload = b64u(userId) + '.' + b64u(String(exp)) + '.' + nonce;
  const sig = crypto.createHmac('sha256', secret).update(payload).digest('base64url');
  return { token: payload + '.' + sig, nonce, exp };
}
function parseToken(token) {
  const parts = String(token || '').split('.');
  if (parts.length !== 4) return null;
  const [uid, exp, nonce, sig] = parts;
  const payload = uid + '.' + exp + '.' + nonce;
  const expect = crypto.createHmac('sha256', secret).update(payload).digest();
  const got = Buffer.from(sig, 'base64url');
  if (expect.length !== got.length || !crypto.timingSafeEqual(expect, got)) return null;
  const expires = Number(Buffer.from(exp, 'base64url').toString('utf8'));
  if (!expires || expires < Date.now()) return null;
  return { userId: Buffer.from(uid, 'base64url').toString('utf8'), nonce };
}

/* ---------------- 请求限速 ---------------- */
const rateBuckets = new Map();
function rateLimit(key, cap, windowMs) {
  const now = Date.now();
  let b = rateBuckets.get(key);
  if (!b || now > b.reset) { b = { count: 0, reset: now + windowMs }; rateBuckets.set(key, b); }
  b.count++;
  if (rateBuckets.size > 5000) for (const [k, v] of rateBuckets) if (now > v.reset) rateBuckets.delete(k);
  return b.count <= cap;
}

/* ---------------- 内容加载（与 server.js 相同的种子装载） ---------------- */
async function importDefault(p, fallback = null) {
  try {
    const m = await import(url.pathToFileURL(p).href + `?t=${Date.now()}`);
    return m.default ?? m;
  } catch (e) {
    console.warn(`[content] 加载失败 ${path.basename(p)}: ${e.message}`);
    return fallback;
  }
}
let CONTENT = { syllabus: { subjects: [] }, books: { media: [] }, formulas: { groups: [] }, exams: [], lessons: [], mocks: [], bookQuestions: [] };
async function loadContent() {
  const seed = f => path.join(DATA_SEED, f);
  const [syllabus, books, formulas, exams, mock1, mock2, curated, imported, corrections, repoNotes, jc30, knowledgeMap, sourceExcerpts] = await Promise.all([
    importDefault(seed('syllabus.js'), { subjects: [] }),
    importDefault(seed('books.js'), { media: [], drill: {} }),
    importDefault(seed('formulas.js'), { groups: [] }),
    importDefault(seed('exams.js'), []),
    importDefault(seed('mock1.js')),
    importDefault(seed('mock2.js')),
    importDefault(seed('book-questions.js'), []),
    importDefault(seed('github-book-questions.js'), []),
    importDefault(seed('question-corrections.js'), null),
    importDefault(seed('repo-notes.js'), []),
    importDefault(seed('jc30-examples.js'), []),
    importDefault(seed('knowledge-map.js'), null),
    importDefault(seed('jc30-source-excerpts.js'), []),
  ]);
  const lessons = [];
  try {
    const files = (await fsp.readdir(LESSONS_DIR)).filter(f => f.endsWith('.js') && !f.startsWith('_')).sort();
    for (const f of files) {
      const L = await importDefault(path.join(LESSONS_DIR, f));
      if (L && L.id) lessons.push(L);
    }
  } catch (e) { console.warn('[content] lessons 目录不可读: ' + e.message); }
  const bookQuestions = [...curated, ...imported, ...(Array.isArray(jc30) ? jc30 : []), ...sourceExcerpts];
  const corrected = corrections?.apply?.(bookQuestions) ?? 0;
  if (corrected) console.log(`[content] 已应用 ${corrected} 条人工核验修订`);
  const packIndex = path.join(PUBLIC, 'resources/book-packs/index.json');
  if (fs.existsSync(packIndex)) {
    const packs = JSON.parse(await fsp.readFile(packIndex, 'utf8'));
    books.media = [...packs.documents.map(doc => ({ ...doc, subject: 'gaoshu', note: '内置原书例题与解答片段' })),
      ...books.media.filter(doc => fs.existsSync(doc.path) || fs.existsSync(path.join(MEDIA_DIR, doc.key)))];
  }
  CONTENT = { syllabus, books, formulas, exams, lessons, mocks: [mock1, mock2].filter(Boolean), bookQuestions, repoNotes: Array.isArray(repoNotes) ? repoNotes : [], knowledgeMap };
}

/* ---------------- 设备工作副本（浏览器 Cookie 隔离） ---------------- */
const devicePath = id => path.join(DEVICES_DIR, hashHex(id) + '.json');
function deviceFromReq(req, res) {
  const cookies = Object.fromEntries(String(req.headers.cookie || '').split(';').map(s => {
    const i = s.indexOf('='); return i < 0 ? [s.trim(), ''] : [s.slice(0, i).trim(), decodeURIComponent(s.slice(i + 1).trim())];
  }).filter(([k]) => k));
  let id = cookies.kaoyan_device;
  if (!id || !/^[A-Za-z0-9_-]{43}$/.test(id)) {
    id = crypto.randomBytes(32).toString('base64url');
    res.setHeader('Set-Cookie', `kaoyan_device=${id}; Path=/; HttpOnly; SameSite=Lax; Max-Age=31536000`);
  }
  return id;
}
async function readDevice(id) {
  try { return JSON.parse(await fsp.readFile(devicePath(id), 'utf8')); }
  catch (e) {
    if (e.code !== 'ENOENT') throw e;
    return {
      version: 1, createdAt: new Date().toISOString(),
      settings: { nickname: '研友', examDate: '2026-12-19', dailyTargetMinutes: 180 },
      lessonStatus: {}, syllabusMastery: {}, problems: {}, mistakes: [], logs: {}, exams: {},
      plan: null, practice: {}, mockAttempts: {}, mockResults: [], pomodoro: { running: null },
    };
  }
}

/* ---------------- PDF 流式服务（Range，供内部阅读器） ---------------- */
async function serveMedia(req, res, key) {
  let decoded;
  try { decoded = decodeURIComponent(key); } catch { res.writeHead(400); res.end(); return; }
  const allowed = CONTENT.books.media.map(item => item.key).filter(name => typeof name === 'string');
  if (!decoded || decoded.includes('/') || decoded.includes('\\') || !allowed.includes(decoded)) { res.writeHead(403); res.end(); return; }
  let root, fp, st;
  try {
    root = await fsp.realpath(MEDIA_DIR);
    for (const name of [decoded, decoded + '.pdf']) {
      if (!allowed.includes(name)) continue;
      const candidate = await fsp.realpath(path.join(root, name));
      if (path.dirname(candidate) !== root) continue;
      st = await fsp.stat(candidate);
      if (st.isFile()) { fp = candidate; break; }
    }
  } catch { /* missing media is handled below */ }
  if (!fp) { sendJSON(res, 404, { error: '未找到媒体文件: ' + key }); return; }
  const size = st.size;
  const range = req.headers.range;
  const base = { 'Accept-Ranges': 'bytes', 'Content-Type': 'application/pdf', 'Cache-Control': 'no-store' };
  if (range) {
    const m = /^bytes=(\d*)-(\d*)$/.exec(range);
    let start, end;
    if (m && m[1]) { start = Number(m[1]); end = m[2] ? Number(m[2]) : Math.min(start + 4 * 1024 * 1024, size - 1); }
    else if (m && m[2] && Number(m[2]) > 0) { start = Math.max(0, size - Number(m[2])); end = size - 1; }
    else { start = size; end = size - 1; }
    end = Math.min(end, size - 1);
    if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= size) {
      res.writeHead(416, { 'Content-Range': `bytes */${size}` }); res.end(); return;
    }
    res.writeHead(206, { ...base, 'Content-Range': `bytes ${start}-${end}/${size}`, 'Content-Length': end - start + 1 });
    fs.createReadStream(fp, { start, end }).pipe(res);
  } else {
    res.writeHead(200, { ...base, 'Content-Length': size });
    fs.createReadStream(fp).pipe(res);
  }
}

/* ---------------- HTTP 工具 ---------------- */
function sendJSON(res, code, obj, extraHeaders = {}) {
  const s = JSON.stringify(obj);
  res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...extraHeaders });
  res.end(s);
}
function readBody(req, res, limit) {
  return new Promise((resolve, reject) => {
    let n = 0, done = false;
    const chunks = [];
    const finish = (fn, value) => { if (!done) { done = true; fn(value); } };
    req.on('data', c => {
      if (done) return;
      n += c.length;
      if (n > limit) {
        finish(reject, Object.assign(new Error('body too large'), { status: 413, handled: true }));
        // 立即返回 413 并丢弃剩余请求体；等待排空会因流暂停而挂起
        res.writeHead(413, { 'Content-Type': 'application/json; charset=utf-8', 'Connection': 'close' });
        res.end(JSON.stringify({ error: '请求体过大' }));
        req.resume();
        req.on('error', () => {});
        return;
      }
      chunks.push(c);
    });
    req.on('end', () => finish(resolve, Buffer.concat(chunks).toString('utf8')));
    req.on('error', e => finish(reject, e));
  });
}
function corsHeaders(origin) {
  // 允许清单：本机回环任意端口（开发）+ Android WebView 可信源；同源部署不需要 CORS。
  if (!origin) return {};
  let host = null;
  try { host = new URL(origin).host; } catch { return {}; }
  const loopback = /^(127\.0\.0\.1|localhost|\[::1\])(:\d+)?$/.test(host);
  if (loopback || host === 'appassets.androidplatform.net') {
    return { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Headers': 'Content-Type, Authorization', 'Access-Control-Allow-Methods': 'GET, PUT, POST, OPTIONS', 'Vary': 'Origin' };
  }
  return {};
}

/* ---------------- 账号存储 ---------------- */
function publicUser(u) { return { userId: u.userId, email: u.email, nickname: u.nickname, createdAt: u.createdAt }; }

async function register(email, password) {
  email = String(email || '').trim().toLowerCase();
  if (!/^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/.test(email) || email.length > 254) throw { status: 400, message: '邮箱格式无效' };
  if (typeof password !== 'string' || password.length < 8 || password.length > 128) throw { status: 400, message: '密码需要 8 到 128 个字符' };
  if (!rateLimit('reg:' + email, 5, 3600_000)) throw { status: 429, message: '注册过于频繁，请稍后再试' };
  return queue('user:' + email, async () => {
    if (users.byEmail[email]) throw { status: 409, message: '该邮箱已注册' };
    const u = {
      userId: crypto.randomUUID(), email, nickname: email.split('@')[0].slice(0, 20) || '研友',
      pass: hashPassword(password), createdAt: new Date().toISOString(),
      revoked: [],
    };
    users.byId[u.userId] = u; users.byEmail[email] = u.userId;
    await saveUsers();
    const t = issueToken(u.userId);
    return { ...publicUser(u), token: t.token };
  })();
}
async function login(email, password, ip) {
  email = String(email || '').trim().toLowerCase();
  if (!rateLimit('login:' + ip, 20, 60_000) || !rateLimit('loginf:' + email, 10, 60_000)) throw { status: 429, message: '尝试过于频繁，请一分钟后再试' };
  const uid = users.byEmail[email];
  const u = uid && users.byId[uid];
  if (!u || !verifyPassword(password, u.pass)) throw { status: 401, message: '邮箱或密码不正确' };
  const t = issueToken(u.userId);
  return { ...publicUser(u), token: t.token };
}
function authUser(req) {
  const header = req.headers.authorization || '';
  const m = /^Bearer\s+(.+)$/i.exec(header);
  if (!m) return null;
  const parsed = parseToken(m[1]);
  if (!parsed) return null;
  const u = users.byId[parsed.userId];
  if (!u) return null;
  if (u.revoked.includes(parsed.nonce)) return null;
  return u;
}
async function signout(u, token) {
  const parsed = parseToken(token);
  if (parsed) {
    u.revoked.push(parsed.nonce);
    if (u.revoked.length > 50) u.revoked = u.revoked.slice(-50);
    await saveUsers();
  }
  return { ok: true };
}

/* ---------------- 状态存储（revision / receipt 原子语义） ---------------- */
async function readStateRecord(userId) {
  try { return JSON.parse(await fsp.readFile(statePath(userId), 'utf8')); }
  catch (e) { if (e.code === 'ENOENT') return null; throw e; }
}
async function readReceipt(userId, requestId) {
  const saved = await readStateRecord(userId);
  if (saved?.commit?.requestId === requestId) return saved.commit;
  try { return JSON.parse(await fsp.readFile(receiptPath(userId, requestId), 'utf8')); }
  catch (e) { if (e.code === 'ENOENT') return null; throw e; }
}
async function pruneReceipts(userId) {
  const prefix = hashHex(userId).slice(0, 12);
  let names = [];
  try { names = await fsp.readdir(RECEIPTS_DIR); } catch { return; }
  const now = Date.now();
  for (const name of names) {
    if (!name.startsWith(prefix)) continue;
    try {
      const st = await fsp.stat(path.join(RECEIPTS_DIR, name));
      if (now - st.mtimeMs > RECEIPT_TTL_MS) await fsp.unlink(path.join(RECEIPTS_DIR, name));
    } catch { /* 并发删除可忽略 */ }
  }
}
async function putState(u, body) {
  if (!body || typeof body !== 'object') throw { status: 400, message: '数据格式无效' };
  if (typeof body.requestId !== 'string' || !/^[0-9a-f-]{36}$/i.test(body.requestId)) throw { status: 400, message: '数据格式无效' };
  if (!Number.isSafeInteger(body.expected) || body.expected < 0) throw { status: 400, message: '数据格式无效' };
  if (!body.state || typeof body.state !== 'object' || Array.isArray(body.state)) throw { status: 400, message: '数据格式无效' };
  // 学习记录结构校验：至少包含一个已知的顶层领域字段
  const known = ['version', 'settings', 'lessonStatus', 'syllabusMastery', 'problems', 'mistakes', 'logs', 'exams', 'plan', 'practice', 'mockAttempts', 'mockResults'];
  if (!known.some(k => body.state[k] !== undefined)) throw { status: 400, message: '学习记录结构无效' };
  const objectFields = ['settings', 'lessonStatus', 'syllabusMastery', 'problems', 'logs', 'exams', 'practice', 'mockAttempts'];
  if (objectFields.filter(k => k !== 'logs').some(k => body.state[k] !== undefined && (!body.state[k] || typeof body.state[k] !== 'object' || Array.isArray(body.state[k]))) ||
      (body.state.logs !== undefined && (!body.state.logs || typeof body.state.logs !== 'object')) ||
      ['mistakes', 'mockResults'].some(k => body.state[k] !== undefined && !Array.isArray(body.state[k])) ||
      (body.state.plan !== undefined && body.state.plan !== null && (typeof body.state.plan !== 'object' || Array.isArray(body.state.plan))) ||
      (body.state.settings?.nickname !== undefined && typeof body.state.settings.nickname !== 'string') ||
      (body.state.settings?.examDate !== undefined && (typeof body.state.settings.examDate !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(body.state.settings.examDate))) ||
      (body.state.settings?.dailyTargetMinutes !== undefined && !Number.isFinite(body.state.settings.dailyTargetMinutes)) ||
      (body.state.version !== undefined && !Number.isFinite(body.state.version))) {
    throw { status: 400, message: '学习记录结构无效' };
  }
  const serialized = JSON.stringify(body.state);
  if (Buffer.byteLength(serialized, 'utf8') > STATE_LIMIT) throw { status: 413, message: '学习记录过大，请导出备份' };
  const expected = body.expected;
  const digest = hashHex(serialized);
  return queue('state:' + u.userId, async () => {
    const rid = receiptPath(u.userId, body.requestId);
    const old = await readReceipt(u.userId, body.requestId);
    if (old) {
      if (old.digest !== digest || old.expected !== expected) throw { status: 409, message: '请求标识与负载不匹配' };
      return { status: 'saved', revision: old.revision };
    }
    const saved = await readStateRecord(u.userId);
    const current = saved ? saved.revision : 0;
    if (current !== expected) return { status: 'conflict' };
    // Materialize the prior inline receipt before replacing the only inline commit record.
    if (saved?.commit) await atomicWrite(receiptPath(u.userId, saved.commit.requestId), JSON.stringify(saved.commit));
    const revision = expected + 1;
    const commit = { owner: u.userId, requestId: body.requestId, digest, expected, revision, createdAt: new Date().toISOString() };
    // 先写历史（保留可恢复副本），再写当前，最后写回执
    if (saved) {
      const history = saved.history || [];
      history.push({ revision: saved.revision, digest: saved.digest, state: saved.state, savedAt: saved.updatedAt });
      while (history.length > HISTORY_KEEP) history.shift();
      await atomicWrite(statePath(u.userId), JSON.stringify({ revision, digest, state: body.state, updatedAt: new Date().toISOString(), history, commit }, null, 0));
    } else {
      await atomicWrite(statePath(u.userId), JSON.stringify({ revision, digest, state: body.state, updatedAt: new Date().toISOString(), history: [], commit }, null, 0));
    }
    // Receipt files remain a compatibility cache. The atomic state record is authoritative.
    atomicWrite(rid, JSON.stringify(commit)).catch(() => {});
    pruneReceipts(u.userId).catch(() => {});
    return { status: 'saved', revision };
  })();
}
async function getState(u) {
  const saved = await readStateRecord(u.userId);
  if (!saved) return { revision: 0, state: null };
  return { revision: saved.revision, state: saved.state };
}

/* ---------------- 静态资源 ---------------- */
function serveStatic(res, pathname) {
  let rel = pathname === '/' ? '/index.html' : pathname;
  rel = rel.split('?')[0];
  const fp = path.normalize(path.join(PUBLIC, rel));
  if (!fp.startsWith(PUBLIC)) { res.writeHead(403); res.end(); return; }
  fsp.readFile(fp).then(buf => {
    const ext = path.extname(fp).toLowerCase();
    const cache = rel.startsWith('/vendor/') ? 'public, max-age=86400' : 'no-cache';
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream', 'Cache-Control': cache });
    res.end(buf);
  }).catch(() => {
    if (rel.startsWith('/api/')) { sendJSON(res, 404, { error: '接口不存在' }); return; }
    fsp.readFile(path.join(PUBLIC, 'index.html')).then(b => {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); res.end(b);
    }).catch(() => { res.writeHead(404); res.end('Not Found'); });
  });
}

/* ---------------- 路由 ---------------- */
const server = http.createServer(async (req, res) => {
  const u = new URL(req.url, 'http://localhost');
  const p = u.pathname;
  const cors = corsHeaders(req.headers.origin);
  if (req.method === 'OPTIONS') { res.writeHead(204, cors); res.end(); return; }
  try {
    if (p === '/api/health') return sendJSON(res, 200, { app: 'kaoyan-math1-sync', ok: true, time: new Date().toISOString() }, cors);
    if (p === '/api/auth/register' && req.method === 'POST') {
      const body = JSON.parse(await readBody(req, res, AUTH_BODY_LIMIT));
      return sendJSON(res, 201, await register(body.email, body.password), cors);
    }
    if (p === '/api/auth/login' && req.method === 'POST') {
      const body = JSON.parse(await readBody(req, res, AUTH_BODY_LIMIT));
      const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '?').split(',')[0].trim();
      return sendJSON(res, 200, await login(body.email, body.password, ip), cors);
    }
    const user = authUser(req);
    if (p === '/api/auth/me' && req.method === 'GET') {
      if (!user) throw { status: 401, message: '登录已过期' };
      return sendJSON(res, 200, publicUser(user), cors);
    }
    if (p === '/api/auth/signout' && req.method === 'POST') {
      if (!user) return sendJSON(res, 200, { ok: true }, cors);
      const token = /^Bearer\s+(.+)$/i.exec(req.headers.authorization || '')[1];
      return sendJSON(res, 200, await signout(user, token), cors);
    }
    // /api/state 双语义：带 Authorization → 账号同步；无 → 浏览器设备的本地工作副本（与 server.js 契约一致）
    if (p === '/api/state' && req.method === 'GET') {
      if (req.headers.authorization) {
        if (!user) throw { status: 401, message: '登录已过期' };
        return sendJSON(res, 200, await getState(user), cors);
      }
      const device = deviceFromReq(req, res);
      return sendJSON(res, 200, await readDevice(device), cors);
    }
    if (p === '/api/state' && req.method === 'PUT') {
      if (req.headers.authorization) {
        if (!user) throw { status: 401, message: '登录已过期' };
        if (!rateLimit('put:' + user.userId, 60, 60_000)) throw { status: 429, message: '保存过于频繁，请稍候' };
        const body = JSON.parse(await readBody(req, res, STATE_LIMIT + 1024 * 1024));
        return sendJSON(res, 200, await putState(user, body), cors);
      }
      const device = deviceFromReq(req, res);
      const body = JSON.parse(await readBody(req, res, STATE_LIMIT));
      if (!body || typeof body !== 'object' || Array.isArray(body)) throw { status: 400, message: 'bad state' };
      await queue('device:' + device, async () => { await atomicWrite(devicePath(device), JSON.stringify(body)); })();
      return sendJSON(res, 200, { ok: true, savedAt: new Date().toISOString() }, cors);
    }
    const receipt = /^\/api\/receipt\/([0-9a-f-]{36})$/i.exec(p);
    if (receipt && req.method === 'GET') {
      if (!user) throw { status: 401, message: '登录已过期' };
      return sendJSON(res, 200, await readReceipt(user.userId, receipt[1]) ?? null, cors);
    }
    if (p === '/api/bootstrap' && req.method === 'GET') {
      const device = deviceFromReq(req, res);
      return sendJSON(res, 200, { db: await readDevice(device), content: CONTENT, capabilities: { selfHostedAuth: true } }, cors);
    }
    if (p === '/content.json' && req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-cache' });
      return res.end(JSON.stringify(CONTENT));
    }
    if (p.startsWith('/media/')) return serveMedia(req, res, p.slice(7));
    if (p.startsWith('/api/')) return sendJSON(res, 404, { error: '接口不存在' }, cors);
    if (req.method === 'GET') return serveStatic(res, p);
    res.writeHead(405); res.end();
  } catch (e) {
    const status = e?.status ?? (e?.message === 'body too large' ? 413 : 500);
    if (status >= 500) console.error('[service]', req.method, p, e);
    if (!e?.handled) sendJSON(res, status, { error: e?.message || '服务内部错误' }, cors);
  }
});

await loadUsers();
await loadContent();
server.listen(PORT, HOST, () => {
  console.log(`同步服务已启动: http://${HOST}:${PORT}`);
  console.log(`  讲义 ${CONTENT.lessons.length} 讲 | 题库 ${CONTENT.bookQuestions.length} 条 | 模拟卷 ${CONTENT.mocks.length} 套`);
  console.log('  生产部署请置于 HTTPS 反向代理之后，详见 service/README.md');
});
