// 同步服务端到端测试：真实 HTTP 进程 + 隔离数据目录。
// 覆盖：注册/登录/会话、用户隔离、revision 冲突、requestId 幂等与重放、
//       回执查询、大小与结构校验、401/409/413/429、退出登录、历史可恢复。
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'kaoyan-sync-test-'));
const PORT = 8392;
const BASE = `http://127.0.0.1:${PORT}`;

const server = spawn(process.execPath, [path.join(root, 'service', 'server.mjs')], {
  env: { ...process.env, PORT: String(PORT), SERVICE_DATA_DIR: dataDir, HOST: '127.0.0.1' },
  stdio: ['ignore', 'pipe', 'pipe'],
});
server.stderr.on('data', d => process.stderr.write('[server] ' + d));
await new Promise((resolve, reject) => {
  const timer = setTimeout(() => reject(new Error('服务启动超时')), 10000);
  server.stdout.on('data', d => { if (String(d).includes('已启动')) { clearTimeout(timer); resolve(); } });
  server.on('exit', code => reject(new Error('服务提前退出: ' + code)));
});

let deviceCookie = null;
async function api(method, p, { token, body } = {}) {
  const r = await fetch(BASE + p, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: 'Bearer ' + token } : {}),
      ...(deviceCookie ? { Cookie: deviceCookie } : {}),
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const setCookie = r.headers.get('set-cookie');
  if (setCookie) deviceCookie = setCookie.split(';')[0];
  let data = null;
  try { data = await r.json(); } catch { /* empty body */ }
  return { status: r.status, data };
}

const uuid = () => crypto.randomUUID();
let passed = 0;
const ok = name => { passed++; console.log('  ✓ ' + name); };

try {
  // 健康检查
  const health = await api('GET', '/api/health');
  assert.equal(health.status, 200); assert.equal(health.data.ok, true);
  ok('健康检查');

  // 注册与登录
  const reg = await api('POST', '/api/auth/register', { body: { email: 'A@test.dev', password: 'password123' } });
  assert.equal(reg.status, 201); assert.ok(reg.data.token); assert.ok(reg.data.userId);
  const tokenA = reg.data.token, uidA = reg.data.userId;
  const dup = await api('POST', '/api/auth/register', { body: { email: 'a@test.dev', password: 'password123' } });
  assert.equal(dup.status, 409); ok('重复邮箱拒绝（大小写归一）');
  const badLogin = await api('POST', '/api/auth/login', { body: { email: 'A@test.dev', password: 'wrong-password' } });
  assert.equal(badLogin.status, 401);
  const log = await api('POST', '/api/auth/login', { body: { email: 'A@test.dev', password: 'password123' } });
  assert.equal(log.status, 200); assert.ok(log.data.token); ok('错误密码拒绝 / 正确密码登录');

  // 弱口令与坏邮箱
  assert.equal((await api('POST', '/api/auth/register', { body: { email: 'bad', password: 'password123' } })).status, 400);
  assert.equal((await api('POST', '/api/auth/register', { body: { email: 'x@y.dev', password: 'short' } })).status, 400);
  ok('注册输入校验');

  // 未认证：账号语义拒绝伪令牌；无 Authorization 头是设备工作副本语义（200）
  assert.equal((await api('GET', '/api/state', { token: 'garbage.token.here.x' })).status, 401);
  const deviceState = await api('GET', '/api/state');
  assert.equal(deviceState.status, 200);
  assert.equal(deviceState.data.version, 1);
  const boot = await api('GET', '/api/bootstrap');
  assert.equal(boot.status, 200);
  assert.ok(boot.data.content.lessons.length >= 32);
  assert.ok(Array.isArray(boot.data.content.bookQuestions) && boot.data.content.bookQuestions.length > 1000);
  ok('未认证/伪令牌拒绝；设备工作副本与内容服务正常');

  // 设备工作副本保存（与 server.js 契约一致）
  const devPut = await api('PUT', '/api/state', { body: { version: 1, settings: { nickname: '设备甲' }, lessonStatus: {}, syllabusMastery: {}, problems: {}, mistakes: [], logs: {}, exams: {}, plan: null, practice: {}, mockAttempts: {}, mockResults: [] } });
  assert.equal(devPut.status, 200);
  assert.equal((await api('GET', '/api/state')).data.settings.nickname, '设备甲');
  ok('设备工作副本保存/读取');

  // 用户隔离
  const regB = await api('POST', '/api/auth/register', { body: { email: 'B@test.dev', password: 'password456' } });
  const tokenB = regB.data.token;
  assert.deepEqual((await api('GET', '/api/state', { token: tokenA })).data, { revision: 0, state: null });
  assert.deepEqual((await api('GET', '/api/state', { token: tokenB })).data, { revision: 0, state: null });
  ok('新用户状态为空且互相隔离');

  // 保存 / revision / 幂等重放
  const rid1 = uuid();
  const put1 = await api('PUT', '/api/state', { token: tokenA, body: { requestId: rid1, expected: 0, state: { version: 1, settings: { nickname: '甲' } } } });
  assert.deepEqual(put1.data, { status: 'saved', revision: 1 });
  const replay = await api('PUT', '/api/state', { token: tokenA, body: { requestId: rid1, expected: 0, state: { version: 1, settings: { nickname: '甲' } } } });
  assert.deepEqual(replay.data, { status: 'saved', revision: 1 });
  const replayTampered = await api('PUT', '/api/state', { token: tokenA, body: { requestId: rid1, expected: 0, state: { version: 1, settings: { nickname: '篡改' } } } });
  assert.equal(replayTampered.status, 409); ok('requestId 幂等重放 / 篡改负载拒绝');

  // 回执
  const receipt = await api('GET', '/api/receipt/' + rid1, { token: tokenA });
  assert.equal(receipt.data.revision, 1); assert.ok(receipt.data.digest);
  const otherReceipt = await api('GET', '/api/receipt/' + rid1, { token: tokenB });
  assert.equal(otherReceipt.data, null); ok('回执可查且不跨用户');

  // 冲突
  const stale = await api('PUT', '/api/state', { token: tokenA, body: { requestId: uuid(), expected: 0, state: { version: 1, settings: {} } } });
  assert.equal(stale.data.status, 'conflict');
  assert.equal((await api('GET', '/api/state', { token: tokenA })).data.revision, 1); ok('过期 expected 返回 conflict 且未覆盖');

  // B 用户写入不影响 A
  await api('PUT', '/api/state', { token: tokenB, body: { requestId: uuid(), expected: 0, state: { version: 1, mistakes: [] } } });
  const stateA = await api('GET', '/api/state', { token: tokenA });
  assert.equal(stateA.data.state.settings.nickname, '甲'); ok('跨用户写入不串数据');

  // 正常推进 revision
  const put2 = await api('PUT', '/api/state', { token: tokenA, body: { requestId: uuid(), expected: 1, state: { version: 1, settings: { nickname: '甲2' }, practice: { k: { result: 'right' } } } } });
  assert.equal(put2.data.revision, 2);

  // 结构/大小校验
  assert.equal((await api('PUT', '/api/state', { token: tokenA, body: { requestId: uuid(), expected: 2, state: [] } })).status, 400);
  assert.equal((await api('PUT', '/api/state', { token: tokenA, body: { requestId: uuid(), expected: 2, state: { junk: true } } })).status, 400);
  assert.equal((await api('PUT', '/api/state', { token: tokenA, body: { requestId: 'not-a-uuid', expected: 2, state: { version: 1 } } })).status, 400);
  assert.equal((await api('PUT', '/api/state', { token: tokenA, body: { requestId: uuid(), expected: 2, state: { version: 1, blob: 'x'.repeat(9 * 1024 * 1024) } } })).status, 413);
  ok('结构校验 400 / 超限 413');

  // 大记录（临界内）成功且完整
  const big = '数学' .repeat(400000); // ~2.4MB UTF-8
  const putBig = await api('PUT', '/api/state', { token: tokenB, body: { requestId: uuid(), expected: 1, state: { version: 1, settings: {}, note: big } } });
  assert.equal(putBig.data.status, 'saved');
  const backBig = await api('GET', '/api/state', { token: tokenB });
  assert.equal(backBig.data.state.note, big); ok('MB 级记录完整往返');

  // 历史可恢复
  const raw = JSON.parse(fs.readFileSync(path.join(dataDir, 'states', fs.readdirSync(path.join(dataDir, 'states'))[0]), 'utf8'));
  assert.ok(raw.history.length >= 1); assert.ok(raw.history[0].state);
  ok('服务端保留历史版本');

  // 退出登录后令牌失效
  const me = await api('GET', '/api/auth/me', { token: tokenA });
  assert.equal(me.data.userId, uidA);
  await api('POST', '/api/auth/signout', { token: tokenA });
  assert.equal((await api('GET', '/api/state', { token: tokenA })).status, 401);
  assert.equal((await api('GET', '/api/auth/me', { token: tokenB })).status, 200); ok('退出仅吊销当前令牌');

  // 登录限速（同 IP 高频）
  let saw429 = false;
  for (let i = 0; i < 25 && !saw429; i++) {
    const r = await api('POST', '/api/auth/login', { body: { email: 'bflood@test.dev', password: 'password123' } });
    if (r.status === 429) saw429 = true;
  }
  assert.ok(saw429); ok('登录限速 429');

  // 静态资源与未知 API
  const index = await fetch(BASE + '/');
  assert.equal(index.status, 200); assert.match(await index.text(), /考研数学一/);
  assert.equal((await api('GET', '/api/nope')).status, 404);
  ok('静态托管与未知接口 404');

  console.log(`\nSync service: ${passed} checks passed (${dataDir})`);
} finally {
  server.kill();
  fs.rmSync(dataDir, { recursive: true, force: true });
}
