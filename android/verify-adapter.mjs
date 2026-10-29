import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const calls = [];
const timers = new Map();
let timerId = 0;
const window = {
  AndroidPlatform: { request: (method, path, body) => {
    calls.push({ method, path, body });
    return JSON.stringify({ status: method === 'PUT' ? 200 : 404, body: '{"ok":true}' });
  }, syncRequestAsync: (id, method, path, body) => {
    calls.push({ id, method, path, body, async: true });
    window.__kaoyanSyncComplete(id, JSON.stringify({ status: 201, body: '{"userId":"synthetic"}' }));
  }, cancelSyncRequest: id => calls.push({ id, cancel: true }) },
  fetch: async url => `native:${url}`,
};
const source = await readFile(new URL('./assets/android-adapter.js', import.meta.url), 'utf8');
const activity = await readFile(new URL('./src/com/kaoyan/mathone/MainActivity.java', import.meta.url), 'utf8');
assert.match(activity, /@JavascriptInterface public void syncRequestAsync\(/);
assert.match(activity, /@JavascriptInterface public void cancelSyncRequest\(/);
assert.match(activity, /data\.remove\("token"\)/, 'native auth token must not be returned to JavaScript');
assert.match(activity, /@JavascriptInterface public boolean openCloud\(/);
assert.match(activity, /if \(path\.endsWith\("\.pdf"\)\) return "application\/pdf";/, 'bundled PDF resources must use the PDF MIME type');
assert.match(activity, /if \(!openCloud\(\)\) openLocal\(\);/, 'startup prefers the configured cloud and falls back locally');
assert.match(activity, /modeButton\.setText\(cloudMode \? "本机" : "云端"\)/, 'mode toggle label follows the active local/cloud mode');
assert.match(activity, /settings\.setAllowFileAccess\(false\)/);
vm.runInNewContext(source, { window, location: { href: 'https://appassets.androidplatform.net/', origin: 'https://appassets.androidplatform.net' }, URL, Response, Promise, Map, Date, Math,
  setTimeout: fn => { const id = ++timerId; timers.set(id, fn); return id; }, clearTimeout: id => timers.delete(id) });
assert.equal((await window.fetch('/api/bootstrap')).status, 404);
assert.deepEqual(await (await window.fetch('/api/state', { method: 'PUT', body: '{"x":1}' })).json(), { ok: true });
assert.deepEqual(calls, [{ method: 'GET', path: '/api/bootstrap', body: '' }, { method: 'PUT', path: '/api/state', body: '{"x":1}' }]);
assert.equal(await window.fetch('/css/app.css'), 'native:/css/app.css');
const asyncResponse = JSON.parse(await window.__kaoyanSyncRequest('POST', '/api/auth/register', '{"email":"synthetic"}'));
assert.equal(asyncResponse.status, 201);
assert.equal(calls.at(-1).async, true);
assert.equal(calls.at(-1).path, '/api/auth/register');
assert.equal(timers.size, 0, 'successful callback clears its timeout');
window.AndroidPlatform.syncRequestAsync = () => {};
const timeoutPromise = window.__kaoyanSyncRequest('GET', '/api/auth/me', '');
const [timeoutId, onTimeout] = timers.entries().next().value;
timers.delete(timeoutId); onTimeout();
assert.equal(JSON.parse(await timeoutPromise).status, 0);
assert.deepEqual(calls.at(-1), { id: calls.at(-1).id, cancel: true });
console.log('Android adapter checks passed');
