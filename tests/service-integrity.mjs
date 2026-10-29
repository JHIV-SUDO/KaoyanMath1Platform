import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';

const source = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const temp = `D:/ClaudeWorkspace/Temp/KaoyanMath1-service-integrity-${randomUUID()}`;
const root = path.join(temp, 'project');
const data = path.join(temp, 'data');
const marker = path.join(temp, 'fail-state.flag');
const dropResponse = path.join(temp, 'drop-response.flag');
const hook = path.join(temp, 'fault-hook.mjs');
const port = 8398;
await fs.mkdir(path.join(root, 'service'), { recursive: true });
await fs.mkdir(path.join(root, 'data'), { recursive: true });
await fs.mkdir(path.join(root, 'media'), { recursive: true });
await fs.copyFile(path.join(source, 'service/server.mjs'), path.join(root, 'service/server.mjs'));
await fs.cp(path.join(source, 'data/seed'), path.join(root, 'data/seed'), { recursive: true });
await fs.cp(path.join(source, 'data/lessons'), path.join(root, 'data/lessons'), { recursive: true });
await fs.writeFile(path.join(root, 'media/jichu30.pdf'), '%PDF-test-resource-0123456789');
await fs.writeFile(path.join(root, 'service/canary.txt'), 'outside-media-canary');
await fs.writeFile(hook, `import fsp from 'node:fs/promises';\nimport { existsSync, unlinkSync } from 'node:fs';\nimport http from 'node:http';\nconst rename=fsp.rename.bind(fsp);\nfsp.rename=async (from,to)=>{if(String(to).replaceAll('\\\\','/').includes('/states/')&&existsSync(process.env.FAIL_STATE_MARKER))throw Object.assign(new Error('injected state rename failure'),{code:'EIO'});return rename(from,to)};\nconst end=http.ServerResponse.prototype.end;\nhttp.ServerResponse.prototype.end=function(...args){const drop=this.req?.method==='PUT'&&this.req?.url==='/api/state'&&existsSync(process.env.DROP_RESPONSE_MARKER);if(drop)unlinkSync(process.env.DROP_RESPONSE_MARKER);const result=end.apply(this,args);if(drop)setImmediate(()=>this.socket?.destroy());return result};\n`);
const server = spawn(process.execPath, ['--import', pathToFileURL(hook).href, path.join(root, 'service/server.mjs')], {
  env: { ...process.env, PORT: String(port), HOST: '127.0.0.1', SERVICE_DATA_DIR: data, FAIL_STATE_MARKER: marker, DROP_RESPONSE_MARKER: dropResponse },
  stdio: ['ignore', 'ignore', 'pipe'],
});
let errors = '';
server.stderr.on('data', b => { errors += b; });
const base = `http://127.0.0.1:${port}`;
async function api(method, route, token, body, extraHeaders = {}) {
  const response = await fetch(base + route, { method, headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}), ...(body === undefined ? {} : { 'Content-Type': 'application/json' }), ...extraHeaders }, body: body === undefined ? undefined : JSON.stringify(body), signal: AbortSignal.timeout(8000) });
  const text = await response.text();
  let data; try { data = JSON.parse(text); } catch { data = null; }
  return { status: response.status, data, text, headers: response.headers };
}
try {
  for (let i = 0; i < 100; i++) {
    try { if ((await api('GET', '/api/health')).status === 200) break; } catch {}
    if (i === 99) throw new Error(`service did not start: ${errors}`);
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  const reg = await api('POST', '/api/auth/register', null, { email: 'integrity@test.invalid', password: 'IntegrityPass123' });
  assert.equal(reg.status, 201);
  const token = reg.data.token;

  for (const p of ['/media/%2e%2e%2fservice%2fcanary.txt', '/media/%2e%2e%5cservice%5ccanary.txt', '/media/%252e%252e%252fservice%252fcanary.txt']) {
    assert.ok([400, 403, 404].includes((await api('GET', p)).status), `traversal should be denied: ${p}`);
  }
  assert.equal((await api('GET', '/media/jichu30.pdf', null, undefined, { Range: 'bytes=5-10' })).status, 206);
  const ranged = await api('GET', '/media/jichu30.pdf', null, undefined, { Range: 'bytes=-6' });
  assert.equal(ranged.status, 206);
  assert.equal(ranged.headers.get('content-range'), 'bytes 23-28/29');
  assert.equal(ranged.text, '456789');

  const state0 = { version: 1, settings: { nickname: 'base' } };
  const initial = await api('PUT', '/api/state', token, { requestId: randomUUID(), expected: 0, state: state0 });
  assert.equal(initial.data.revision, 1);
  for (const invalid of [
    { version: 1, settings: null }, { version: 1, settings: [] }, { version: 1, lessonStatus: [] },
    { version: 1, mistakes: {} }, { version: 1, mockResults: {} }, { version: 1, plan: [] },
  ]) assert.equal((await api('PUT', '/api/state', token, { requestId: randomUUID(), expected: 1, state: invalid })).status, 400);
  assert.equal((await api('GET', '/api/state', token)).data.revision, 1, 'invalid states must not advance revision');

  await fs.writeFile(marker, 'fail before commit');
  const precommitId = randomUUID();
  assert.equal((await api('PUT', '/api/state', token, { requestId: precommitId, expected: 1, state: { version: 1, settings: { nickname: 'failed' } } })).status, 500);
  await fs.unlink(marker);
  assert.equal((await api('GET', '/api/state', token)).data.revision, 1);

  const body = { requestId: randomUUID(), expected: 1, state: { version: 1, settings: { nickname: 'committed' } } };
  // Drop the response only after the atomic state commit has completed.
  await fs.writeFile(dropResponse, 'drop once');
  await fetch(base + '/api/state', { method: 'PUT', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).catch(() => {});
  assert.equal((await api('GET', '/api/state', token)).data.revision, 2);
  const replay = await api('PUT', '/api/state', token, body);
  assert.equal(replay.status, 200);
  assert.equal(replay.data.status, 'saved');
  const receipt = await api('GET', '/api/receipt/' + body.requestId, token);
  assert.equal(receipt.data.revision, 2);
  assert.equal((await api('PUT', '/api/state', token, body)).data.revision, 2);
  assert.equal((await api('PUT', '/api/state', token, { ...body, state: { version: 1, settings: { nickname: 'tampered' } } })).status, 409);
  console.log('service-integrity: media boundary/ranges, nested validation, atomic receipt recovery and replay passed');
} finally {
  server.kill();
  if (server.exitCode === null) await Promise.race([new Promise(resolve => server.once('exit', resolve)), new Promise(resolve => setTimeout(resolve, 2000))]);
  await fs.rm(temp, { recursive: true, force: true });
}
