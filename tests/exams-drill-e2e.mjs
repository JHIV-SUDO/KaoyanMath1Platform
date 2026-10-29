// 隔离浏览器回归：缺失 PDF 的可用性、内置题入口、真题状态持久化与页面计时器清理。
// 运行：node tests/exams-drill-e2e.mjs；Playwright 默认从 D:/ClaudeWorkspace/Temp/kaoyan-e2e-deps 加载。
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
const dataRoot = 'D:/ClaudeWorkspace/Temp';
fs.mkdirSync(dataRoot, { recursive: true });
const dataDir = fs.mkdtempSync(path.join(dataRoot, 'kaoyan-exams-drill-e2e-'));
const getPort = async () => new Promise((resolve, reject) => {
  const probe = net.createServer();
  probe.once('error', reject);
  probe.listen(0, '127.0.0.1', () => {
    const port = probe.address().port;
    probe.close(error => error ? reject(error) : resolve(port));
  });
});
const port = await getPort();
const base = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, [path.join(root, 'service', 'server.mjs')], {
  env: { ...process.env, PORT: String(port), SERVICE_DATA_DIR: dataDir, HOST: '127.0.0.1' },
  stdio: ['ignore', 'pipe', 'pipe'],
});
server.stderr.on('data', data => process.stderr.write('[isolated-service] ' + data));
let browser;
try {
  const deadline = Date.now() + 15000;
  let response;
  while (Date.now() < deadline) {
    try {
      response = await fetch(base + '/content.json');
      if (response.ok) break;
    } catch { /* service still starting */ }
    await new Promise(resolve => setTimeout(resolve, 150));
  }
  assert.ok(response?.ok, '独立测试服务启动并提供内容');
  const content = await response.json();
  // 本机可能挂载原始 B 盘 PDF。只在浏览器的 bootstrap 内容目录中剔除未打包文件，
  // 模拟 Android/云端包的内置资源清单，同时让隔离 service 继续负责状态读写。
  const deployedMedia = content.books.media.filter(item => item.key !== 'shiti.pdf' && !/^exam-\d{4}\.pdf$/.test(item.key));
  const yearWithoutPdf = content.exams[0]?.year;
  assert.ok(yearWithoutPdf, '至少有一个未内置PDF的真题年份');

  browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  await context.addInitScript(({ deployedMedia }) => {
    const nativeSetInterval = window.setInterval.bind(window);
    const nativeClearInterval = window.clearInterval.bind(window);
    window.__e2eTrackedIntervals = [];
    window.__e2eClearedIntervals = [];
    window.setInterval = (callback, delay, ...args) => {
      const id = nativeSetInterval(callback, delay, ...args);
      if (delay === 1000) window.__e2eTrackedIntervals.push(id);
      return id;
    };
    window.clearInterval = id => {
      if (window.__e2eTrackedIntervals.includes(id)) window.__e2eClearedIntervals.push(id);
      return nativeClearInterval(id);
    };
    const nativeFetch = window.fetch.bind(window);
    window.fetch = async (...args) => {
      const response = await nativeFetch(...args);
      const requestUrl = new URL(typeof args[0] === 'string' ? args[0] : args[0].url, location.href);
      if (requestUrl.pathname !== '/api/bootstrap') return response;
      const payload = await response.clone().json();
      payload.content.books.media = deployedMedia;
      return new Response(JSON.stringify(payload), { status: response.status, statusText: response.statusText, headers: response.headers });
    };
  }, { deployedMedia });
  const page = await context.newPage();
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));

  await page.goto(`${base}/#/drill`, { waitUntil: 'load' });
  await page.locator('#main h1').waitFor({ state: 'visible' });
  await page.locator('#main .card').first().waitFor({ state: 'visible' });
  assert.equal(await page.locator('#main button[title="在阅读器中打开原资料"]').count(), 0, '缺失试题册时没有可点击的失效页码');
  const drillText = await page.locator('#main').innerText();
  assert.match(drillText, /页码参考/, `缺失PDF时仍显示不可交互的页码参考：${drillText.slice(0, 500)}`);
  const firstQuestion = page.locator('#main a[href^="#/practice/book/"]').first();
  await page.locator('#main details.fold').first().locator('summary').click();
  await firstQuestion.waitFor({ state: 'visible' });
  await firstQuestion.click();
  await page.locator('#main .problem-card').waitFor({ state: 'visible' });
  assert.match(page.url(), /#\/practice\/book\//);
  console.log('✓ 1000题目录缺少 shiti.pdf 时页码为参考文本，内置题仍可打开');

  await page.goto(`${base}/#/exams`, { waitUntil: 'load' });
  const yearRow = page.locator('#main tbody tr').filter({ hasText: String(yearWithoutPdf) }).first();
  await yearRow.waitFor({ state: 'visible' });
  await yearRow.getByText('暂无内置真题PDF', { exact: true }).waitFor({ state: 'visible' });
  assert.equal(await yearRow.getByRole('button', { name: '📄 打开PDF' }).count(), 0, '缺失真题PDF时没有失效打开按钮');
  const statusButton = yearRow.locator('button.status-btn');
  assert.equal((await statusButton.textContent()).trim(), '未完成');
  const header = page.locator('#main .page-head .sub');
  const oldCount = Number((await header.textContent()).match(/完成度\s+(\d+)\//)?.[1]);
  assert.ok(Number.isFinite(oldCount), '页面显示已完成计数');
  const stateSave = page.waitForResponse(response => response.url().endsWith('/api/state') && response.request().method() === 'PUT', { timeout: 5000 });
  await statusButton.click();
  await page.getByText('✓ 已完成', { exact: true }).waitFor({ state: 'visible' });
  await page.waitForFunction(n => document.querySelector('#main .page-head .sub')?.textContent.includes(`完成度 ${n + 1}/`), oldCount);
  const stateSaveResponse = await stateSave;
  assert.equal(stateSaveResponse.status(), 200, '真题完成标记保存请求成功');
  const deviceCookie = (await context.cookies(base)).find(cookie => cookie.name === 'kaoyan_device');
  assert.ok(deviceCookie, '隔离浏览器获得本机设备 cookie');
  const readDeviceState = async () => (await (await fetch(base + '/api/bootstrap', { headers: { Cookie: `kaoyan_device=${deviceCookie.value}` } })).json()).db?.exams?.[yearWithoutPdf];
  const saveDeadline = Date.now() + 10000;
  let savedExam = null;
  while (Date.now() < saveDeadline) {
    savedExam = await readDeviceState();
    if (savedExam?.done === true) break;
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  assert.equal(savedExam?.done, true, '隔离 service 已持久化真题完成状态');
  await page.reload({ waitUntil: 'load' });
  await page.waitForFunction(() => Boolean(document.querySelector('#main tbody tr')));
  const refreshedRow = page.locator('#main tbody tr').filter({ hasText: String(yearWithoutPdf) }).first();
  const persistedExam = await readDeviceState();
  assert.equal(persistedExam?.done, true, `刷新后 service 状态保留：${JSON.stringify(persistedExam)}`);
  assert.match(await refreshedRow.locator('button.status-btn').innerText(), /已完成/, `刷新后按钮状态：${await refreshedRow.innerText()}`);
  await page.waitForFunction(n => document.querySelector('#main .page-head .sub')?.textContent.includes(`完成度 ${n + 1}/`), oldCount);
  console.log(`✓ ${yearWithoutPdf} 年真题状态即时更新、保存并在刷新后保留`);

  const beforeTimer = await page.evaluate(() => window.__e2eTrackedIntervals.length);
  await page.getByRole('button', { name: '▶ 开始计时' }).click();
  await page.getByRole('button', { name: '计时中…' }).waitFor({ state: 'visible' });
  const timerId = await page.evaluate(count => window.__e2eTrackedIntervals[count], beforeTimer);
  assert.notEqual(timerId, undefined, '点击开始后注册了本页计时器');
  await page.evaluate(() => { location.hash = '#/drill'; });
  await page.waitForFunction(() => location.hash === '#/drill' && document.querySelector('#main h1')?.textContent === '1000题追踪');
  assert.equal(await page.evaluate(id => window.__e2eClearedIntervals.includes(id), timerId), true, '离开真题页时清理了本页计时器');
  assert.deepEqual(pageErrors, [], '流程没有未捕获的页面异常');
  console.log('✓ 离开真题页时清理计时器，全流程无 pageerror');
  await context.close();
} finally {
  await browser?.close().catch(() => {});
  server.kill();
  await new Promise(resolve => {
    if (server.exitCode !== null) return resolve();
    server.once('exit', resolve);
    setTimeout(resolve, 3000).unref();
  });
  fs.rmSync(dataDir, { recursive: true, force: true });
}
