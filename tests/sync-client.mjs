import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const moduleUrl = pathToFileURL(path.resolve('public/js/sync.js')).href;
const instances = [];
class Storage {
  data = new Map();
  getItem(k) { return this.data.get(k) ?? null; }
  setItem(k, v) { this.data.set(k, String(v)); }
  removeItem(k) { this.data.delete(k); }
}
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function setup(transport) {
  globalThis.localStorage = new Storage();
  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { onLine: true } });
  Object.defineProperty(globalThis, 'crypto', { configurable: true, value: { randomUUID: (() => { let n = 0; return () => `request-${++n}`; })() } });
  globalThis.window = {};
  const { Sync } = await import(`${moduleUrl}?case=${Math.random()}`);
  Sync.android = () => false;
  Sync.user = { userId: 'u1', email: 'u1@test.invalid' };
  Sync.transport = transport;
  Sync.attach({ db: { nickname: 'old' } });
  instances.push(Sync);
  return Sync;
}
const saved = (revision = 1) => ({ status: 200, data: { status: 'saved', revision } });
const stateGet = ({ status = 200, revision = 0, state = null } = {}) => ({ status, data: { revision, state } });
const checks = [];
async function check(name, run) { await run(); for (const instance of instances) { clearTimeout(instance._timer); instance._timer = null; } checks.push(name); }

await check('慢请求期间编辑会保持dirty并补发最新状态', async () => {
  let release; const puts = [];
  const Sync = await setup(async (method, route, body) => {
    if (method === 'PUT') { puts.push(body); if (puts.length === 1) await new Promise(r => { release = r; }); return saved(puts.length); }
    return stateGet();
  });
  Sync.notifyChange(true); await delay(5);
  Sync._db.db.nickname = 'new'; Sync.notifyChange();
  release(); await delay(30);
  assert.equal(puts.length, 2); assert.equal(puts[0].state.nickname, 'old'); assert.equal(puts[1].state.nickname, 'new');
  assert.equal(Sync.status, 'synced');
});

await check('失败后编辑不会改写原请求payload', async () => {
  const puts = [];
  const Sync = await setup(async (method, route, body) => { if (method === 'PUT') { puts.push(body); return puts.length === 1 ? { status: 503, data: null } : saved(1); } return stateGet(); });
  Sync.notifyChange(true); await delay(5); const original = structuredClone(Sync._pending);
  Sync._db.db.nickname = 'new'; Sync.notifyChange();
  assert.deepEqual(Sync._pending, original);
  await Sync.flush(); assert.deepEqual(puts[1], { requestId: original.requestId, expected: original.expected, state: original.state });
});

await check('receipt确认后为期间的新编辑创建补发请求', async () => {
  let release; const puts = [];
  const Sync = await setup(async (method, route, body) => { if (method === 'PUT') { puts.push(body); if (puts.length === 1) await new Promise(r => { release = r; }); return saved(puts.length); } if (route.startsWith('/api/receipt/')) return { status: 200, data: { revision: 1 } }; return stateGet(); });
  Sync.notifyChange(true); await delay(5); Sync._db.db.nickname = 'new'; Sync.notifyChange();
  release(); await delay(20); assert.equal(puts.length, 2); assert.notEqual(puts[0].requestId, puts[1].requestId); assert.equal(puts[1].state.nickname, 'new');
});

await check('刷新恢复原pending快照和稳定ID', async () => {
  let request; const first = await setup(async (method, route, body) => { if (method === 'PUT') { request = body; return { status: 503, data: null }; } return stateGet(); });
  first.notifyChange(true); await delay(5); const stored = structuredClone(first._pending);
  const disk = localStorage;
  const second = await setup(async () => stateGet()); globalThis.localStorage = disk; second.user = first.user; second._db = first._db;
  second._scope = null;
  let checked; second.transport = async (method, route) => { checked = route; return { status: 200, data: null }; };
  await second.afterSignIn(); assert.equal(checked, `/api/receipt/${stored.requestId}`); assert.deepEqual(second._pending, stored);
});

await check('确定4xx清掉请求身份但保留dirty', async () => {
  const Sync = await setup(async () => ({ status: 400, data: { error: 'bad payload' } }));
  Sync.notifyChange(true); await delay(10); assert.equal(Sync._pending, null); assert.equal(Sync.status, 'error');
  assert.equal(JSON.parse([...localStorage.data.values()][0]).dirty, true);
});

await check('conflict期间notifyChange不解除保护', async () => {
  const Sync = await setup(async () => stateGet()); Sync.status = 'conflict'; Sync.notifyChange(true);
  assert.equal(Sync.status, 'conflict'); assert.equal(JSON.parse([...localStorage.data.values()][0]).conflict, true);
});

await check('不同用户的pending元数据互相隔离', async () => {
  const Sync = await setup(async () => ({ status: 503, data: null })); Sync.notifyChange(true); await delay(5);
  const savedPending = structuredClone(Sync._pending); Sync.user = { userId: 'u2', email: 'u2@test.invalid' }; Sync._scope = null;
  Sync.transport = async (method, route) => route === '/api/state' ? stateGet() : { status: 200, data: null };
  await Sync.afterSignIn(); assert.notDeepEqual(Sync._pending, savedPending);
});

await check('Android恢复登录走异步桥且不调用旧同步接口', async () => {
  const { Sync } = await import(`${moduleUrl}?restore=${Math.random()}`);
  instances.push(Sync);
  let calls = 0;
  globalThis.window.AndroidPlatform = { syncRequest() { throw Error('legacy sync bridge called'); } };
  globalThis.window.__kaoyanSyncRequest = async (method, route) => {
    calls++; assert.equal(method, 'GET'); assert.equal(route, '/api/auth/me');
    return JSON.stringify({ status: 200, body: '{"userId":"android-user","email":"a@test.invalid"}' });
  };
  Sync.android = () => true;
  const user = await Sync.restoreSession();
  assert.equal(calls, 1); assert.equal(user.userId, 'android-user');
});

console.log(`sync-client: ${checks.length} checks passed (${checks.join(', ')})`);
