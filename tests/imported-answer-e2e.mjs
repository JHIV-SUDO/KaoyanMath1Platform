// 隔离的浏览器回归：来源答案判分边界提示、错题本记录，以及已精讲题不显示提示。
// 运行：node tests/imported-answer-e2e.mjs；Playwright 默认从 D:/ClaudeWorkspace/Temp/kaoyan-e2e-deps 加载。
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
const dataDir = fs.mkdtempSync(path.join(dataRoot, 'kaoyan-imported-answer-e2e-'));
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
  let contentResponse;
  while (Date.now() < deadline) {
    try {
      contentResponse = await fetch(base + '/content.json');
      if (contentResponse.ok) break;
    } catch { /* service still starting */ }
    await new Promise(resolve => setTimeout(resolve, 150));
  }
  assert.ok(contentResponse?.ok, '独立测试服务启动并提供内容');
  const content = await contentResponse.json();
  const imported = content.bookQuestions.find(q => q.sourceFile && !q.analysis && !q.sourceExcerpt && q.reviewStatus !== 'source-page' &&
    q.type === 'choice' && ['A', 'B', 'C', 'D'].includes(q.answer) && q.options?.length === 4);
  assert.ok(imported, '存在有来源文件、使用来源答案判分的导入选择题');
  const curated = content.bookQuestions.find(q => q.analysis && q.type === 'choice' &&
    ['A', 'B', 'C', 'D'].includes(q.answer) && q.options?.length === 4);
  assert.ok(curated, '存在已精讲选择题作为不显示提示的对照');

  browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  const warning = '判分依据来源答案，尚未标记为独立核验';

  await page.goto(`${base}/#/practice/book/${encodeURIComponent(imported.id)}`, { waitUntil: 'load' });
  const importedCard = page.locator('.problem-card').first();
  await importedCard.waitFor({ state: 'visible' });
  await assert.doesNotReject(() => page.getByText(warning, { exact: true }).waitFor({ state: 'visible' }), '导入题显示来源答案判分边界');
  const wrongLetter = ['A', 'B', 'C', 'D'].find(letter => letter !== imported.answer);
  await importedCard.locator('.p-actions button', { hasText: `${wrongLetter}.` }).click();
  await page.getByText('回答错误，已加入错题本').waitFor({ state: 'visible' });
  await page.goto(`${base}/#/mistakes`, { waitUntil: 'load' });
  await page.locator(`a[href="#/practice/book/${encodeURIComponent(imported.id)}"]`).first().waitFor({ state: 'visible' });
  console.log(`✓ ${imported.id}: 显示来源答案提示，故意答错后进入错题本`);

  await page.goto(`${base}/#/practice/book/${encodeURIComponent(curated.id)}`, { waitUntil: 'load' });
  const curatedCard = page.locator('.problem-card').first();
  await curatedCard.waitFor({ state: 'visible' });
  assert.equal(await curatedCard.getByText(warning, { exact: true }).count(), 0, '已精讲题不显示来源答案边界提示');
  console.log(`✓ ${curated.id}: 已精讲选择题不显示该提示`);
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
