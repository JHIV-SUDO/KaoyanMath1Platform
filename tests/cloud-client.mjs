import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { registerHooks } from 'node:module';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const filename = fileURLToPath(import.meta.url);
if (process.argv[2] !== '--worker') {
  for (const scenario of ['retry-before-commit', 'receipt-after-commit', 'new-edit-in-flight', 'receipt-check-in-flight-edit', 'revision-conflict']) {
    const result = spawnSync(process.execPath, [filename, '--worker', scenario], { encoding: 'utf8', timeout: 15000 });
    assert.equal(result.status, 0, `${scenario}\n${result.stdout}\n${result.stderr}`);
    process.stdout.write(result.stdout);
  }
  console.log('Cloud client sync recovery: 5 isolated SDK scenarios passed');
} else {
  await runScenario(process.argv[3]);
}

async function runScenario(scenario) {
  let revision = 0;
  let savedReceipt = null;
  const writes = [];
  let releaseFirstWrite;
  let firstWriteStarted;
  let releaseReceipt;
  let receiptStarted;
  let receiptGetCount = 0;
  const firstWrite = new Promise(resolve => { firstWriteStarted = resolve; });
  const receiptRequestStarted = new Promise(resolve => { receiptStarted = resolve; });
  const state = value => ({ version: 1, settings: { nickname: value } });
  const storage = new Map();
  if (scenario === 'receipt-check-in-flight-edit') {
    const a = state('A');
    storage.set('kaoyan-sync:isolated-test-user', JSON.stringify({
      revision: 0,
      latest: { id: 1, state: JSON.stringify(a) },
      pending: { requestId: 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', expected: 0, state: JSON.stringify(a), editId: 1 },
    }));
  }

  globalThis.__cloudTestApi = {
    get: async route => {
      if (route === '/api/state') return { status: 200, data: { revision, state: revision ? state(`remote-${revision}`) : null } };
      if (route.startsWith('/api/receipt/')) {
        receiptGetCount++;
        if (scenario === 'receipt-check-in-flight-edit') {
          receiptStarted();
          return new Promise(resolve => { releaseReceipt = () => resolve({ status: 200, data: savedReceipt }); });
        }
        return { status: 200, data: savedReceipt };
      }
      throw new Error(`unexpected GET ${route}`);
    },
    put: async (route, payload) => {
      assert.equal(route, '/api/state');
      writes.push(structuredClone(payload));
      if (scenario === 'new-edit-in-flight' && writes.length === 1) {
        firstWriteStarted();
        return new Promise(resolve => { releaseFirstWrite = () => { revision = 1; resolve({ status: 200, data: { status: 'saved', revision } }); }; });
      }
      if (scenario === 'retry-before-commit' && writes.length === 1) throw new Error('unknown request outcome before commit');
      if (scenario === 'receipt-after-commit' && writes.length === 1) {
        revision = 1;
        savedReceipt = { revision: 1, digest: 'test-digest' };
        throw new Error('unknown request outcome after commit');
      }
      if (scenario === 'revision-conflict' && writes.length === 1) throw new Error('unknown request outcome before another device commit');
      if (scenario === 'revision-conflict' && route === '/api/state') throw new Error('client must not overwrite changed revision');
      if (scenario === 'retry-before-commit' && writes.length === 2) revision = 1;
      if (scenario === 'new-edit-in-flight' && writes.length === 2) revision = 2;
      return { status: 200, data: { status: 'saved', revision } };
    },
  };
  globalThis.__cloudTestAuth = { getUser: async () => ({ userId: 'isolated-test-user', email: 'test@example.invalid' }), isSignedIn: () => true, signOut: async () => {} };

  class Element {
    constructor(tagName = 'div') { this.tagName = tagName; this.children = []; this.handlers = {}; this.attributes = {}; this.hidden = false; this.textContent = ''; this.style = {}; }
    append(...nodes) { this.children.push(...nodes); }
    replaceChildren(...nodes) { this.children = [...nodes]; }
    setAttribute(name, value) { this.attributes[name] = value; }
    addEventListener(name, handler) { this.handlers[name] = handler; }
    async click() { return this.onclick?.() ?? this.handlers.click?.(); }
    querySelector(selector) {
      if (this.className === 'cloud-gate' && selector === '.cloud-message') return (this.message ||= new Element('p'));
      if (this.className === 'cloud-gate' && selector === 'button') return (this.loginButton ||= new Element('button'));
      return null;
    }
  }
  const elements = [];
  const sidebarFoot = new Element('footer');
  const document = {
    body: new Element('body'),
    createElement(tag) { const element = new Element(tag); elements.push(element); return element; },
    querySelector(selector) { return selector === '.sidebar-foot' ? sidebarFoot : null; },
    addEventListener() {},
  };
  globalThis.document = document;
  globalThis.localStorage = { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value), removeItem: key => storage.delete(key) };
  Object.defineProperty(globalThis, 'navigator', { value: { onLine: true }, configurable: true });
  globalThis.confirm = () => false;
  globalThis.crypto ||= (await import('node:crypto')).webcrypto;
  globalThis.window = {
    fetch: async () => ({ ok: true, json: async () => ({ contentParts: [] }) }),
    addEventListener() {}, dispatchEvent() {},
  };
  globalThis.__cloudTestStore = { S: { db: null } };

  registerHooks({
    resolve(specifier, context, next) {
      if (specifier === '@appdeploy/client') return { url: 'mock:appdeploy', shortCircuit: true };
      if (specifier === 'katex') return { url: 'mock:katex', shortCircuit: true };
      if (specifier === 'katex/contrib/auto-render') return { url: 'mock:auto-render', shortCircuit: true };
      if (specifier.endsWith('.css') || specifier.includes('pdf.worker.min.mjs?url')) return { url: `mock:asset:${specifier}`, shortCircuit: true };
      if (specifier === './platform/js/app.js' || specifier === './platform/js/store.js') return { url: specifier.endsWith('store.js') ? 'mock:store' : 'mock:app', shortCircuit: true };
      return next(specifier, context);
    },
    load(url, context, next) {
      if (url === 'mock:appdeploy') return { format: 'module', shortCircuit: true, source: 'export const api=globalThis.__cloudTestApi; export const auth=globalThis.__cloudTestAuth;' };
      if (url === 'mock:katex') return { format: 'module', shortCircuit: true, source: 'export default {};' };
      if (url === 'mock:auto-render') return { format: 'module', shortCircuit: true, source: 'export default function(){};' };
      if (url === 'mock:store') return { format: 'module', shortCircuit: true, source: 'export const S=globalThis.__cloudTestStore.S;' };
      if (url === 'mock:app' || url.startsWith('mock:asset:')) return { format: 'module', shortCircuit: true, source: 'export default "";' };
      return next(url, context);
    },
  });

  const project = path.dirname(path.dirname(filename));
  await import(pathToFileURL(path.join(project, 'cloud/src/cloud.js')).href + `?test=${scenario}`);
  await waitFor(() => window.CloudPlatform && sidebarFoot.children.length >= 2, 'cloud platform bootstrap');
  const status = () => sidebarFoot.children[0].textContent;
  const banner = () => elements.find(element => element.className === 'cloud-banner');
  const check = async () => {
    const button = banner().children.find(element => element.textContent === '检查同步状态');
    assert.ok(button, 'retry/check action is visible');
    await button.click();
  };

  if (scenario === 'retry-before-commit') {
    const a = state('A');
    window.CloudPlatform.save(a);
    await waitFor(() => writes.length === 1 && status().includes('仍未确定'), 'first unknown write');
    const pending = JSON.parse(storage.get('kaoyan-sync:isolated-test-user')).pending;
    assert.equal(typeof pending.state, 'string');
    await check();
    await waitFor(() => writes.length === 2 && status() === '已同步云端', 'safe retry acknowledgment');
    assert.equal(writes[1].requestId, writes[0].requestId);
    assert.equal(writes[1].expected, writes[0].expected);
    assert.deepEqual(writes[1].state, a);
    assert.equal(storage.has('kaoyan-sync:isolated-test-user'), false);
  } else if (scenario === 'receipt-after-commit') {
    window.CloudPlatform.save(state('A'));
    await waitFor(() => writes.length === 1 && status().includes('仍未确定'), 'unknown committed write');
    await check();
    await waitFor(() => status() === '已同步云端', 'receipt confirmation');
    assert.equal(writes.length, 1, 'a receipt confirms the original submission without another write');
    assert.equal(storage.has('kaoyan-sync:isolated-test-user'), false);
  } else if (scenario === 'new-edit-in-flight') {
    const a = state('A'), b = state('B');
    window.CloudPlatform.save(a);
    await Promise.race([firstWrite, timeout('first PUT start')]);
    window.CloudPlatform.save(b);
    releaseFirstWrite();
    await waitFor(() => writes.length === 2 && status() === '已同步云端', 'newer edit uploaded');
    assert.deepEqual(writes[0].state, a);
    assert.deepEqual(writes[1].state, b);
    assert.equal(writes[0].expected, 0);
    assert.equal(writes[1].expected, 1);
    assert.notEqual(writes[0].requestId, writes[1].requestId);
    assert.equal(storage.has('kaoyan-sync:isolated-test-user'), false, 'A acknowledgment must not erase B before B is uploaded');
  } else if (scenario === 'receipt-check-in-flight-edit') {
    const b = state('B');
    await Promise.race([receiptRequestStarted, timeout('startup receipt check')]);
    window.CloudPlatform.save(b);
    const checkButton = banner().children.find(element => element.textContent === '检查同步状态');
    assert.ok(checkButton);
    await checkButton.click();
    await checkButton.click();
    assert.equal(receiptGetCount, 1, 'repeated checks while reconciliation is in flight are ignored');
    revision = 1;
    savedReceipt = { revision: 1, digest: 'original-a' };
    releaseReceipt();
    await waitFor(() => writes.length === 1 && status() === '已同步云端', 'new edit after receipt confirmation');
    assert.equal(receiptGetCount, 1);
    assert.equal(writes[0].expected, 1);
    assert.deepEqual(writes[0].state, b);
    assert.notEqual(writes[0].requestId, 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa');
    assert.equal(storage.has('kaoyan-sync:isolated-test-user'), false);
  } else if (scenario === 'revision-conflict') {
    const a = state('A');
    window.CloudPlatform.save(a);
    await waitFor(() => writes.length === 1 && status().includes('仍未确定'), 'unknown write before conflicting remote revision');
    revision = 1;
    await check();
    await waitFor(() => status().includes('冲突'), 'conflict reported');
    assert.equal(writes.length, 1, 'a changed revision must not be overwritten by retry');
    const draft = JSON.parse(storage.get('kaoyan-sync:isolated-test-user'));
    assert.equal(draft.latest.state, JSON.stringify(a));
    assert.equal(draft.pending.requestId, writes[0].requestId);
    assert.ok(banner().children.some(element => element.textContent === '导出草稿'));
  } else throw new Error(`unknown scenario ${scenario}`);
  console.log(`${scenario}: passed (${status()})`);
}

async function waitFor(predicate, message) {
  const end = Date.now() + 4000;
  while (Date.now() < end) {
    if (predicate()) return;
    await new Promise(resolve => setTimeout(resolve, 20));
  }
  throw new Error(`timed out waiting for ${message}`);
}

function timeout(message) { return new Promise((_, reject) => setTimeout(() => reject(new Error(`timed out waiting for ${message}`)), 4000)); }
