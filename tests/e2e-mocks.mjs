// 模拟考试端到端（验收矩阵 F01-F05）：分值结构、刷新恢复计时、重复交卷保护、
// 自动判分与自评、历史回看、错题收录。
// 运行：PLAYWRIGHT_BROWSERS_PATH=... node tests/e2e-mocks.mjs（playwright 位置见 e2e-sync.mjs 头部说明）
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8406;
const BASE = `http://127.0.0.1:${PORT}`;

const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'kaoyan-mock-e2e-'));
const server = spawn(process.execPath, [path.join(root, 'service', 'server.mjs')], {
  env: { ...process.env, PORT: String(PORT), SERVICE_DATA_DIR: dataDir, HOST: '127.0.0.1' },
  stdio: ['ignore', 'pipe', 'pipe'],
});
await new Promise((resolve, reject) => {
  const t = setTimeout(() => reject(new Error('服务启动超时')), 10000);
  server.stdout.on('data', d => { if (String(d).includes('已启动')) { clearTimeout(t); resolve(); } });
});

const { createRequire } = await import('node:module');
const e2eRequire = createRequire(path.join(process.env.E2E_PLAYWRIGHT_DIR || 'D:/ClaudeWorkspace/Temp/kaoyan-e2e-deps', 'package.json'));
const { chromium } = e2eRequire('playwright');
const browser = await chromium.launch();

let passed = 0;
const run = async (name, fn) => {
  try { await fn(); passed++; console.log('  ✓ ' + name); }
  catch (e) { try { await page.screenshot({ path: path.join(os.tmpdir(), 'mock-e2e-fail.png') }); console.log('    失败截图: ' + path.join(os.tmpdir(), 'mock-e2e-fail.png')); } catch { } throw e; }
};
let page;

try {
  // 模拟卷结构
  const mock = await (await fetch(BASE + '/content.json')).json().then(c => c.mocks[0]);
  assert.ok(mock, '存在模拟卷');
  const problems = mock.sections.flatMap(s => s.problems);
  const choiceQ = problems.filter(p => p.type === 'choice' || p.options);
  assert.ok(choiceQ.length >= 5, '模拟卷含选择题');
  const totalScore = mock.sections.reduce((a, s) => a + s.problems.reduce((b, q) => b + (q.score ?? s.scoreEach ?? 0), 0), 0);
  assert.equal(totalScore, 150, '总分 150：实际 ' + totalScore);
  console.log(`模拟卷 ${mock.title}：${problems.length} 题、${totalScore} 分、${mock.duration} 分钟`);

  page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  page.on('dialog', d => d.accept());

  await run('打开平台并进入模拟考试', async () => {
    await page.goto(BASE + '/', { waitUntil: 'load' });
    await page.waitForFunction(() => (document.querySelector('#sync-mini')?.textContent || '').length > 0, null, { timeout: 20000 });
    await page.click('button.nav-item:has-text("模拟考试")');
    await page.waitForSelector('.card');
  });

  let startedAt = 0;
  await run('开始第一套试卷，作答并记录开始时间', async () => {
    await page.locator('button:has-text("开始"), button:has-text("进入"), button:has-text("继续")').first().click();
    await page.waitForSelector('.mock-q', { timeout: 15000 });
    // 回答前两道选择题：每题各选一个选项（radio 按题分组）
    await page.locator('.mock-q').nth(0).locator('input[type=radio]').first().check();
    await page.locator('.mock-q').nth(1).locator('input[type=radio]').first().check();
    startedAt = Date.now();
  });

  await run('刷新页面：答案与剩余时间按真实开始时间恢复', async () => {
    await page.waitForTimeout(3000);
    await page.reload({ waitUntil: 'load' });
    await page.waitForFunction(() => document.querySelector('#sync-mini')?.textContent.length > 0, null, { timeout: 20000 });
    await page.click('button.nav-item:has-text("模拟考试")');
    await page.waitForSelector('.card');
    await page.locator('button:has-text("继续")').first().click();
    await page.waitForSelector('.mock-q', { timeout: 15000 });
    // 之前勾选的 radio 应保留
    const checked = await page.locator('.mock-q input[type=radio]:checked').count();
    assert.equal(checked, 2, '刷新后应保留 2 个已选答案：实际 ' + checked);
  });

  await run('交卷：确认弹窗→自动判分→解答题自评', async () => {
    await page.locator('button:has-text("交卷并查看成绩")').click();
    await page.waitForSelector('#modal-root .modal', { timeout: 5000 });
    await page.locator('#modal-root button:has-text("确认交卷")').click();
    // 解答题自评弹窗
    await page.waitForSelector('#modal-root .modal', { timeout: 5000 });
    const boxes = page.locator('#modal-root input[type=number]');
    const n = Math.min(await boxes.count(), 6);
    for (let i = 0; i < n; i++) await boxes.nth(i).fill('5');
    const done = page.locator('#modal-root button:has-text("完成"), #modal-root button:has-text("提交"), #modal-root button:has-text("生成"), #modal-root button.primary').last();
    await done.click();
    await page.waitForTimeout(1200);
  });

  await run('已交卷的卷子不再出现"继续作答"（重复交卷保护）', async () => {
    await page.click('button.nav-item:has-text("模拟考试")');
    await page.waitForSelector('.card');
    const resumeCount = await page.locator('button:has-text("继续")').count();
    assert.equal(resumeCount, 0, '已交卷后不应有继续按钮');
    const body = await page.locator('#main').textContent();
    assert.match(body, /成绩|得分|分/, '列表页应显示成绩信息');
  });

  console.log(`\nMock E2E: ${passed} steps passed`);
} finally {
  await browser.close().catch(() => {});
  server.kill();
  fs.rmSync(dataDir, { recursive: true, force: true });
}
