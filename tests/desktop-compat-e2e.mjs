// 浏览器回归：旧服务缺题库时加载同源内置内容；新服务不重复加载。
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import net from 'node:net';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const requireFromE2E = createRequire(path.join(process.env.E2E_PLAYWRIGHT_DIR || 'D:/ClaudeWorkspace/Temp/kaoyan-e2e-deps', 'package.json'));
const { chromium } = requireFromE2E('playwright');
const dataRoot = path.resolve('D:/ClaudeWorkspace/Temp');
fs.mkdirSync(dataRoot, { recursive: true });
const dataDir = fs.mkdtempSync(path.join(dataRoot, 'kaoyan-desktop-compat-e2e-'));
const port = await new Promise((resolve, reject) => {
  const socket = net.createServer();
  socket.once('error', reject);
  socket.listen(0, '127.0.0.1', () => {
    const result = socket.address().port;
    socket.close(error => error ? reject(error) : resolve(result));
  });
});
const base = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, [path.join(root, 'service/server.mjs')], {
  env: { ...process.env, HOST: '127.0.0.1', PORT: String(port), SERVICE_DATA_DIR: dataDir },
  stdio: ['ignore', 'pipe', 'pipe'],
});
server.stderr.on('data', data => process.stderr.write('[isolated-service] ' + data));
let browser;
try {
  const deadline = Date.now() + 15000;
  let ready = false;
  while (Date.now() < deadline) {
    try { if ((await fetch(base + '/api/health')).ok) { ready = true; break; } } catch { /* 启动中 */ }
    await new Promise(resolve => setTimeout(resolve, 150));
  }
  assert.ok(ready, '隔离服务必须启动');
  browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  await context.addInitScript(() => {
    const nativeFetch = window.fetch.bind(window);
    window.fetch = async (...args) => {
      const response = await nativeFetch(...args);
      const url = new URL(typeof args[0] === 'string' ? args[0] : args[0].url, location.href);
      if (url.pathname !== '/api/bootstrap') return response;
      const payload = await response.clone().json();
      delete payload.content.bookQuestions;
      delete payload.content.repoNotes;
      delete payload.content.knowledgeMap;
      payload.content.books.media = payload.content.books.media.filter(item => !item.resourceUrl?.startsWith('/resources/book-packs/'));
      return new Response(JSON.stringify(payload), { status: response.status, statusText: response.statusText, headers: response.headers });
    };
  });
  const page = await context.newPage();
  const errors = [];
  let compatibilityRequests = 0;
  page.on('pageerror', error => errors.push(error.message));
  page.on('request', request => { if (request.url().includes('/desktop-compat-content.json')) compatibilityRequests++; });
  await page.goto(`${base}/#/dashboard`);
  await page.getByText('171 道随堂练习 · 2186 条书籍题库', { exact: true }).waitFor({ state: 'visible' });
  assert.equal(compatibilityRequests, 1, '旧服务只加载一次内置兼容内容');
  const content = await page.evaluate(async () => {
    const { S } = await import('/js/store.js');
    return { questions: S.content.bookQuestions.length, notes: S.content.repoNotes.length,
      entities: S.content.knowledgeMap?.entities?.length, pdfs: S.content.books.media.filter(item => item.resourceUrl?.startsWith('/resources/book-packs/')).length };
  });
  assert.deepEqual(content, { questions: 2186, notes: 833, entities: 464, pdfs: 18 });
  await page.evaluate(() => { location.hash = '#/practice'; });
  await page.locator('#main .page-head .sub').getByText('共 2357 条', { exact: false }).waitFor({ state: 'visible' });
  await page.locator('.chip').getByText('1000题', { exact: true }).click();
  assert.ok(await page.locator('.problem-card').count() > 0, '1000题筛选后有内置题');
  await page.locator('.chip').getByText('30讲例题', { exact: true }).click();
  assert.ok(await page.locator('.problem-card').count() > 0, '30讲筛选后有内置题');
  await page.evaluate(() => { location.hash = '#/practice/book/jc30-l01-019'; });
  await page.locator('.source-excerpt summary').click();
  await page.waitForFunction(() => {
    const image = document.querySelector('.source-excerpt img');
    return image?.complete && image.naturalWidth > 0;
  });
  assert.deepEqual(errors, [], '旧服务兼容流程无页面错误');
  console.log('✓ 模拟旧服务：2357 条、双来源筛选、原书扫描页与笔记均可用');
  await context.close();

  const fresh = await browser.newContext();
  const freshPage = await fresh.newPage();
  let freshRequests = 0;
  freshPage.on('request', request => { if (request.url().includes('/desktop-compat-content.json')) freshRequests++; });
  await freshPage.goto(`${base}/#/practice`);
  await freshPage.locator('#main .page-head .sub').getByText('共 2357 条', { exact: false }).waitFor({ state: 'visible' });
  assert.equal(freshRequests, 0, '新服务已有题库时不得重复加载兼容数据');
  console.log('✓ 新服务：直接使用已加载题库，不请求兼容文件');
  await fresh.close();
} finally {
  await browser?.close().catch(() => {});
  server.kill();
  await new Promise(resolve => {
    if (server.exitCode !== null) return resolve();
    server.once('exit', resolve);
    setTimeout(resolve, 3000).unref();
  });
  if (path.dirname(path.resolve(dataDir)) !== dataRoot) throw new Error('隔离目录不在临时目录内');
  fs.rmSync(dataDir, { recursive: true, force: true });
}
