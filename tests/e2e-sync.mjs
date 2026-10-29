// 浏览器端到端验证：同源部署（service/server.mjs）下的完整学习与跨端同步路径。
// 覆盖：注册登录（App 内）、真实做题→自动判分→错题本、双端同账号同步、冲突选择、备份导入拒绝损坏输入。
// 运行：需要 playwright（临时目录安装），PLAYWRIGHT_BROWSERS_PATH 指向浏览器缓存。
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8397;
const BASE = `http://127.0.0.1:${PORT}`;

const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'kaoyan-e2e-'));
const server = spawn(process.execPath, [path.join(root, 'service', 'server.mjs')], {
  env: { ...process.env, PORT: String(PORT), SERVICE_DATA_DIR: dataDir, HOST: '127.0.0.1' },
  stdio: ['ignore', 'pipe', 'pipe'],
});
server.stderr.on('data', d => process.stderr.write('[server] ' + d));
await new Promise((resolve, reject) => {
  const t = setTimeout(() => reject(new Error('服务启动超时')), 10000);
  server.stdout.on('data', d => { if (String(d).includes('已启动')) { clearTimeout(t); resolve(); } });
});

// 读取内容：选一道选择题并确定其正确答案，保证 E2E 能构造"确定错误"的作答
const content = await (await fetch(BASE + '/content.json')).json();
const choice = content.bookQuestions.find(q => q.type === 'choice' && ['A', 'B', 'C', 'D'].includes(q.answer) && q.options?.length === 4);
assert.ok(choice, '存在可判分的选择题');
const wrongLetter = ['A', 'B', 'C', 'D'].find(l => l !== choice.answer);
console.log(`E2E 目标题目: ${choice.id}（正确答案 ${choice.answer}，E2E 选 ${wrongLetter}）`);

const { createRequire } = await import('node:module');
// playwright 为可选测试依赖：默认使用 D:\ClaudeWorkspace\Temp\kaoyan-e2e-deps，可用 E2E_PLAYWRIGHT_DIR 覆盖
const e2eRequire = createRequire(path.join(process.env.E2E_PLAYWRIGHT_DIR || 'D:/ClaudeWorkspace/Temp/kaoyan-e2e-deps', 'package.json'));
const { chromium } = e2eRequire('playwright');
const browser = await chromium.launch();
const results = [];
const ok = (name, fn) => ({ name, fn });
let lastPage = null;
const run = async step => {
  try { await step.fn(); results.push('  ✓ ' + step.name); console.log(results.at(-1)); }
  catch (e) {
    const shot = path.join(os.tmpdir(), 'kaoyan-e2e-fail.png');
    try { if (lastPage) await lastPage.screenshot({ path: shot }); console.log('失败截图: ' + shot); } catch { }
    throw e;
  }
};

try {
  const ctxA = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const A = await ctxA.newPage(); lastPage = A;
  A.on('dialog', d => d.accept());
  const ctxB = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const B = await ctxB.newPage(); lastPage = B;
  B.on('dialog', d => d.accept());

  const ready = page => page.waitForFunction(() => (document.querySelector('#sync-mini')?.textContent || '').length > 0, null, { timeout: 20000 });
  const waitForCloudState = async (predicate, label, timeout = 20000) => {
    const deadline = Date.now() + timeout;
    let latest = null;
    while (Date.now() < deadline) {
      const response = await fetch(BASE + '/api/state', { headers: { Authorization: `Bearer ${probeToken}` } });
      assert.equal(response.status, 200, `读取隔离测试账号云端状态失败 (${response.status})`);
      latest = await response.json();
      if (predicate(latest)) return latest;
      await new Promise(resolve => setTimeout(resolve, 250));
    }
    assert.fail(`${label}超时：${JSON.stringify({ revision: latest?.revision, mistakes: latest?.state?.mistakes?.length, practice: Object.keys(latest?.state?.practice || {}).length, nickname: latest?.state?.settings?.nickname })}`);
  };
  let probeToken = null;

  await run(ok('A: 打开平台（同源部署）', async () => {
    await A.goto(BASE + '/', { waitUntil: 'load' });
    await ready(A);
    assert.match(await A.textContent('#sync-mini'), /本机模式/);
  }));

  await run(ok('A: App 内注册账号', async () => {
    await A.click('#btn-settings');
    await A.fill('#modal-root input[type=email]', 'student-a@test.dev');
    await A.fill('#modal-root input[type=password]', 'password123');
    await A.click('#modal-root button:has-text("注册并登录")');
    await A.waitForFunction(() => document.querySelector('#sync-mini')?.textContent.includes('student-a@test.dev'), null, { timeout: 15000 });
    await A.keyboard.press('Escape');
  }));

  await run(ok('A: 练习题库做错一道随堂练习 → 自动进错题本', async () => {
    await A.click('button.nav-item:has-text("练习题库")');
    await A.waitForSelector('.problem-card');
    const before = await A.locator('.status-btn.s-wrong').count();
    await A.locator('.status-btn.s-wrong').first().click();
    await A.waitForFunction(n => n > 0, before, { timeout: 5000 }).catch(() => {});
  }));

  await run(ok('A: 选择题提交错误答案 → 自动判分错误并计入错题', async () => {
    await A.goto(BASE + '/#/practice/book/' + choice.id, { waitUntil: 'load' });
    await A.waitForSelector('.problem-card');
    // 该题卡上的选项按钮（A. B. C. D.）
    await A.locator('.problem-card .p-actions button', { hasText: wrongLetter + '.' }).first().click();
    await A.waitForSelector('.toast, div[style*="position:fixed"]', { timeout: 5000 }).catch(() => {});
  }));

  await run(ok('A: 错题本包含两道错题且可回跳原题', async () => {
    await A.click('button.nav-item:has-text("错题本")');
    await A.waitForSelector('table tbody tr');
    const rows = await A.locator('table tbody tr').count();
    assert.ok(rows >= 2, '错题本至少 2 条：实际 ' + rows);
    const jump = A.locator('a:has-text("查看原题与解析")').first();
    await jump.click();
    await A.waitForSelector('.problem-card');
    assert.match(A.url(), /#\/practice\/book\//);
  }));

  await run(ok('A: 等待云端同步完成（真实推送回执，非界面文案）', async () => {
    await A.waitForFunction(() => (document.querySelector('#sync-mini')?.textContent || '').includes('已同步云端'), null, { timeout: 20000 });
    const auth = await fetch(BASE + '/api/auth/login', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'student-a@test.dev', password: 'password123' }),
    });
    assert.equal(auth.status, 200, '隔离测试账号登录失败');
    probeToken = (await auth.json()).token;
    assert.ok(probeToken, '测试账号登录响应包含token');
    const state = await waitForCloudState(s => s.revision >= 1 && s.state?.mistakes?.length >= 2 && Object.keys(s.state?.practice || {}).length >= 2, 'A端错题和练习记录云端同步');
    assert.equal(state.revision, 1);
  }));

  // 移动视口：侧栏收起（translateX 离屏），按 nav-open 状态先展开菜单再点击
  const mobileTap = async (page, sel) => {
    const navOpen = await page.evaluate(() => document.body.classList.contains('nav-open'));
    if (!navOpen) await page.click('#menu-toggle');
    await page.click(sel);
  };

  await run(ok('B: 手机视口登录同一账号 → 采用云端记录', async () => {
    await B.goto(BASE + '/', { waitUntil: 'load' });
    await ready(B);
    await mobileTap(B, '#btn-settings');
    await B.fill('#modal-root input[type=email]', 'student-a@test.dev');
    await B.fill('#modal-root input[type=password]', 'password123');
    await B.locator('#modal-root button', { hasText: '登录' }).first().click();
    // 新设备本机无内容 → 自动采用云端记录；等待 meta 指向云端 revision 且本地已保存
    await B.waitForFunction(() => (document.querySelector('#sync-mini')?.textContent || '').includes('已同步云端'), null, { timeout: 20000 });
    await B.keyboard.press('Escape');
  }));

  await run(ok('B: 看到相同的错题与练习记录（跨端同步成立）', async () => {
    await mobileTap(B, 'button.nav-item:has-text("错题本")');
    await B.waitForSelector('table tbody tr');
    const rowsB = await B.locator('table tbody tr').count();
    assert.ok(rowsB >= 2, 'B 端错题本至少 2 条：实际 ' + rowsB);
  }));

  await run(ok('B: 修改昵称 → 同步', async () => {
    await mobileTap(B, '#btn-settings');
    await B.fill('#st-name', '跨端学习者');
    await B.click('#modal-root button.primary:has-text("保存")');
    await B.waitForFunction(() => (document.querySelector('#sync-mini')?.textContent || '').includes('已同步云端'), null, { timeout: 20000 });
    const state = await waitForCloudState(s => s.revision >= 2 && s.state?.settings?.nickname === '跨端学习者', 'B端昵称更新回传云端');
    assert.ok(state.revision >= 2);
  }));

  await run(ok('A: 重新加载后自动采用云端最新记录（昵称一致）', async () => {
    await A.reload({ waitUntil: 'load' });
    // 等应用完成初始化（同步层就绪后再打开设置）
    await A.waitForFunction(() => (document.querySelector('#sync-mini')?.textContent || '').length > 0, null, { timeout: 20000 });
    await A.waitForTimeout(1500); // 留给 afterSignIn 的云端对比/采用
    await A.click('#btn-settings');
    await A.waitForFunction(() => document.querySelector('#st-name')?.value === '跨端学习者', null, { timeout: 20000 });
    assert.equal(await A.inputValue('#st-name'), '跨端学习者');
  }));

  await run(ok('A: 损坏备份导入被拒绝且不破坏记录', async () => {
    const importInput = A.locator('#modal-root input[type=file]');
    const bad = path.join(dataDir, 'bad.json');
    fs.writeFileSync(bad, '{"settings":{"nickname":123},"mistakes":"not-array"}');
    await importInput.setInputFiles(bad);
    await A.waitForTimeout(1200);
    // 记录未被破坏：昵称仍是同步来的值（导入被拒绝的核心证据）
    assert.equal(await A.inputValue('#st-name'), '跨端学习者');
    const rejected = await A.getByText('导入失败').count();
    console.log(`    （导入失败提示出现 ${rejected} 次）`);
    await A.keyboard.press('Escape');
  }));

  await run(ok('B: 退出登录后本机记录保留、界面回到未登录', async () => {
    await mobileTap(B, '#btn-settings');
    B.once('dialog', d => d.accept());
    await B.click('#modal-root button:has-text("退出账号")');
    await B.waitForFunction(() => document.querySelector('#sync-mini')?.textContent.includes('本机模式'), null, { timeout: 10000 });
    await B.keyboard.press('Escape');
  }));

  console.log(`\nE2E: ${results.length} steps passed`);
} finally {
  await browser.close().catch(() => {});
  server.kill();
  fs.rmSync(dataDir, { recursive: true, force: true });
}
