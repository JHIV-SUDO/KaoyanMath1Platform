// 入口：导航、路由、设置
import { S } from './store.js';
import { Sync } from './sync.js';
import { el, $, $$, toast, daysBetween, modal, today } from './util.js';
import * as views from './views/index.js';

const NAV = [
  { group: '学习' },
  { hash: '/dashboard', label: '仪表盘', icon: 'M3 12l9-9 9 9M5 10v10h14V10' },
  { hash: '/lessons', label: '课程讲义', icon: 'M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5V4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5z', badge: () => S.dueMistakes().length ? '' : '' },
  { hash: '/knowledge', label: '知识地球', icon: 'M12 22a10 10 0 100-20 10 10 0 000 20zM2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20' },
  { hash: '/syllabus', label: '考纲总览', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { hash: '/formulas', label: '公式速查', icon: 'M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z' },
  { group: '刷题' },
  { hash: '/practice', label: '练习题库', icon: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11', badge: () => { const n = S.dueMistakes().length; return n ? String(n) : ''; } },
  { hash: '/drill', label: '1000题追踪', icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8' },
  { hash: '/mocks', label: '模拟考试', icon: 'M12 8v4l3 3M12 3a9 9 0 100 18 9 9 0 000-18z' },
  { hash: '/mistakes', label: '错题本', icon: 'M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z', badge: () => { const n = S.dueMistakes().length; return n ? String(n) : ''; } },
  { hash: '/exams', label: '真题管理', icon: 'M8 3H7a2 2 0 00-2 2v5a2 2 0 01-2 2 2 2 0 012 2v5c0 1.1.9 2 2 2h1M16 21h1a2 2 0 002-2v-5c0-1.1.9-2 2-2a2 2 0 01-2-2V5a2 2 0 00-2-2h-1' },
  { group: '规划' },
  { hash: '/plan', label: '学习计划', icon: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z' },
  { hash: '/resources', label: '资料阅读器', icon: 'M1 1v4h1m17-4v4h-1M5 9l3 3 3-3M2 5h20v14H2z' },
  { hash: '/stats', label: '数据统计', icon: 'M18 20V10M12 20V4M6 20v-6' },
];

function renderNav(current) {
  const nav = $('#nav'); nav.innerHTML = '';
  for (const item of NAV) {
    if (item.group) { nav.append(el('div', { class: 'nav-group' }, item.group)); continue; }
    const a = el('button', { type: 'button', class: 'nav-item' + (current === item.hash ? ' active' : ''), onclick: () => { setNavOpen(false); location.hash = '#' + item.hash; } },
      el('span', { html: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${item.icon}"/></svg>` }),
      el('span', {}, item.label));
    const b = item.badge?.();
    if (b) a.append(el('span', { class: 'badge' }, b));
    nav.append(a);
  }
  // 倒计时
  const d = Math.max(0, daysBetween(today(), S.db.settings.examDate));
  $('#countdown-mini').innerHTML = `距初试 <b>${d}</b> 天`;
}

function setNavOpen(open) {
  document.body.classList.toggle('nav-open', open);
  $('#menu-toggle').setAttribute('aria-expanded', String(open));
}

export function refreshNav() { renderNav((location.hash || '#/dashboard').slice(1).split('/').slice(0, 2).join('/') === '' ? '/dashboard' : '#' + (location.hash.slice(1).split('/').slice(0, 2).join('/')).replace(/^(\/\w+)(\/.*)?$/, '$1')); }

let routeSequence = 0;
async function route() {
  const sequence = ++routeSequence;
  let h = location.hash || '#/dashboard';
  const parts = h.slice(2).split('/'); // '' after #
  const name = parts[0] || 'dashboard';
  renderNav('/' + name);
  const main = $('#main');
  try {
    const arg = decodeURIComponent(parts.slice(1).join('/'));
    if (window.CloudPlatform?.ensureForRoute) {
      views.clearCurrentView();
      main.replaceChildren(el('div', { class: 'loading' }, '正在载入内容…'));
      await window.CloudPlatform.ensureForRoute(name);
      if (sequence !== routeSequence) return;
    }
    await views.render(main, name, arg);
  } catch (e) {
    console.error(e);
    if (sequence === routeSequence) main.replaceChildren(el('div', { class: 'card' }, el('h3', {}, '视图加载失败'), el('p', {}, e.message)));
  }
}

/* ---------- 账号与同步 ---------- */
function syncStatusText() {
  const map = { off: '', idle: '', pending: '待同步', saving: '同步中', synced: '已同步', error: '同步异常', conflict: '需处理' };
  const t = map[Sync.status] || '';
  return Sync.message || (t ? `状态：${t}` : '');
}

function accountSection() {
  if (window.CloudPlatform) return el('div', {},
    el('p', {}, `云端账号：${window.CloudPlatform.user?.email || window.CloudPlatform.user?.name || '已登录'}`),
    el('p', { style: 'font-size:12px;color:var(--ink3)' }, '手机与电脑使用同一账号同步，未确认的更改会保留草稿。'),
    el('button', { class: 'btn small', onclick: () => window.CloudPlatform.signOut() }, '退出账号'));
  let managedCloud = false;
  try { managedCloud = new URL(Sync.serviceUrl()).hostname.endsWith('.appdeploy.ai'); } catch { /* custom same-origin service */ }
  if (!Sync.user && !S.capabilities?.selfHostedAuth && managedCloud) return el('div', {},
    el('b', {}, '手机与电脑同步学习'),
    el('p', { style: 'font-size:13px;color:var(--ink2)' }, '进入应用内云端，使用同一账号学习。本机记录保留在当前设备，可随时导出备份。'),
    el('button', { class: 'btn primary', onclick: () => {
      if (window.AndroidPlatform?.openCloud) window.AndroidPlatform.openCloud();
      else location.assign(Sync.serviceUrl());
    } }, '进入云端并登录'));
  const box = el('div', {});
  const draw = () => {
    box.replaceChildren();
    box.append(el('div', { class: 'form-row' }, el('label', {}, '账号与同步')));
    const st = el('p', { style: 'color:var(--ink3);font-size:12.5px;margin:2px 0 8px', role: 'status' });
    box.append(st);
    const redraw = () => { st.textContent = syncStatusText() || (Sync.user ? `已登录 ${Sync.user.email}` : '未登录：学习记录仅保存在本机'); };
    Sync.onUpdate(redraw);
    redraw();
    if (!Sync.user) {
      const email = el('input', { type: 'email', placeholder: '邮箱', autocomplete: 'email', style: 'flex:1;min-width:0' });
      const pass = el('input', { type: 'password', placeholder: '密码（至少8位）', autocomplete: 'current-password', style: 'flex:1;min-width:0' });
      const loginBtn = el('button', { class: 'btn small primary', onclick: () => act('login') }, '登录');
      const regBtn = el('button', { class: 'btn small', onclick: () => act('register') }, '注册并登录');
      const act = async kind => {
        for (const b of [loginBtn, regBtn]) b.disabled = true;
        try {
          if (kind === 'login') await Sync.login(email.value.trim(), pass.value);
          else await Sync.register(email.value.trim(), pass.value);
          toast('账号已登录，记录开始同步');
          draw();
        } catch (e) { toast(e.message, false); }
        finally { for (const b of [loginBtn, regBtn]) b.disabled = false; }
      };
      box.append(el('div', { class: 'form-row' }, email, pass));
      box.append(el('div', { class: 'form-row' }, loginBtn, regBtn));
      const svc = el('input', { value: Sync.serviceUrl(), 'aria-label': '同步服务地址', style: 'flex:1;min-width:0;font-size:12px' });
      box.append(el('div', { class: 'form-row' }, el('span', { style: 'font-size:12px;color:var(--ink3)' }, '服务地址'), svc,
        el('button', { class: 'btn small ghost', onclick: () => { try {
          if (!svc.value.trim() && !Sync.android()) { Sync.setServiceUrl(''); toast('已改用同源部署服务'); }
          else { Sync.setServiceUrl(svc.value); toast('同步服务地址已更新'); }
          draw();
        } catch (e) { toast(e.message, false); } } }, '保存')));
    } else {
      box.append(el('div', { class: 'form-row' },
        el('button', { class: 'btn small', onclick: async () => {
          if (Sync._pending) await Sync.reconcile(); else { Sync.status = 'pending'; Sync.notifyChange(true); }
          toast('已检查云端同步');
        } }, '立即同步'),
        el('button', { class: 'btn small ghost', onclick: async () => {
          if ((Sync.status === 'pending' || Sync._pending) && !confirm('还有未同步的更改，确定退出账号吗？')) return;
          await Sync.signout(); draw();
        } }, '退出账号')));
    }
  };
  draw();
  return box;
}

/** 云端与本机都有记录时的冲突选择；返回 'cloud' | 'local' | 'later' */
function conflictDialog(cloudState, cloudRevision) {
  return new Promise(resolve => {
    const localCopy = JSON.stringify(S.db, null, 2);
    const body = el('div', {},
      el('p', {}, '云端账号与本机都有一份学习记录。请选择保留哪一份；另一份会有备份。'),
      el('p', { style: 'font-size:12.5px;color:var(--ink3)' },
        `本机：${(S.db.mistakes || []).length} 条错题 · ${Object.keys(S.db.practice || {}).length} 次练习记录　|　云端：${(cloudState.mistakes || []).length} 条错题 · ${Object.keys(cloudState.practice || {}).length} 次练习记录`));
    const m = modal('同步冲突', body, [
      el('button', { class: 'btn', onclick: () => { m.close(); resolve('later'); } }, '稍后再说'),
      el('button', { class: 'btn', onclick: () => {
        const blob = new Blob([localCopy], { type: 'application/json' });
        const a = el('a', { href: URL.createObjectURL(blob), download: `kaoyan-local-backup-${today()}.json` });
        a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
        m.close(); resolve('cloud');
      } }, '使用云端（先导出本机备份）'),
      el('button', { class: 'btn primary', onclick: () => { m.close(); resolve('local'); } }, '上传本机记录'),
    ]);
  });
}

function openSettings() {
  setNavOpen(false);
  const db = S.db;
  const body = el('div', {},
    accountSection(),
    el('div', { class: 'divider' }),
    el('div', { class: 'form-row' }, el('label', {}, '昵称'), el('input', { id: 'st-name', value: db.settings.nickname || '' })),
    el('div', { class: 'form-row' }, el('label', {}, '初试日期'), el('input', { id: 'st-exam', type: 'date', value: db.settings.examDate })),
    el('div', { class: 'form-row' }, el('label', {}, '每日目标(分)'), el('input', { id: 'st-target', type: 'number', value: db.settings.dailyTargetMinutes ?? 180 })),
    el('div', { class: 'divider' }),
    el('div', { class: 'form-row' }, el('label', {}, '数据备份'), el('button', { class: 'btn small', onclick: exportData }, '导出 JSON'),
      window.AndroidPlatform?.chooseBackup
        ? el('button', { class: 'btn small', onclick: () => { window.__kaoyanImportBackup = importText; window.AndroidPlatform.chooseBackup(); } }, '导入 JSON')
        : el('label', { class: 'btn small', style: 'cursor:pointer' }, '导入 JSON', el('input', { type: 'file', accept: '.json,application/json,text/plain', style: 'display:none', onchange: importData }))),
    el('p', { style: 'color:var(--ink3);font-size:12px' }, window.AndroidPlatform ? '学习数据保存在手机本机，导出可作备份。' : '数据保存在本地 data/db.json，导出可作备份。'),
  );
  const m = modal('设置', body, [
    el('button', { class: 'btn', onclick: () => m.close() }, '取消'),
    el('button', { class: 'btn primary', onclick: () => {
      db.settings.nickname = $('#st-name').value || '研友';
      db.settings.examDate = $('#st-exam').value || db.settings.examDate;
      db.settings.dailyTargetMinutes = Number($('#st-target').value) || 180;
      S.touch(); m.close(); toast('已保存'); route();
    } }, '保存'),
  ]);

  function exportData() {
    const json = JSON.stringify(db, null, 2);
    const filename = `kaoyan-math1-backup-${today()}.json`;
    if (window.AndroidPlatform) {
      window.AndroidPlatform.exportBackup(json, filename);
      return;
    }
    const blob = new Blob([json], { type: 'application/json' });
    const a = el('a', { href: URL.createObjectURL(blob), download: filename });
    a.click();
  }
  function importData(ev) {
    const f = ev.target.files[0]; if (!f) return;
    const rd = new FileReader();
    rd.onload = () => importText(rd.result);
    rd.onerror = () => toast('导入失败：无法读取所选文件', false);
    rd.readAsText(f);
  }
  function importText(text) {
      try {
        const obj = JSON.parse(text);
        if (!S.isValidState(obj)) throw new Error('备份结构不完整或无效');
        S.adoptState(obj); toast('导入成功，已保存'); m.close(); route();
      } catch (e) { toast('导入失败：' + e.message, false); }
  }
}

async function start() {
  await S.bootstrap();
  // 账号与同步：仅在非 AppDeploy 云端模式下启用（cloud.js 有自己的同步层）
  if (!window.CloudPlatform) {
    Sync.attach(S);
    Sync.onAdopt = async state => { S.adoptState(state); route(); };
    Sync.onConflict = conflictDialog;
    Sync.confirmUpload = () => confirm(`把本机学习记录上传到账号 ${Sync.user?.email || ''} 吗？本机记录将继续保留。`);
    const mini = $('#sync-mini');
    const drawMini = () => {
      if (!Sync.user) { mini.textContent = '本机模式 · 可登录同步'; return; }
      const map = { pending: '待同步…', saving: '同步中…', synced: '已同步云端', error: '同步异常', conflict: '同步需处理' };
      mini.textContent = `${Sync.user.email} · ${map[Sync.status] || ''}`;
    };
    Sync.onUpdate(drawMini);
    drawMini();
    const user = await Sync.restoreSession();
    if (user) { Sync.afterSignIn().catch(e => console.warn('同步初始化', e)); drawMini(); }
  } else if ($('#sync-mini')) $('#sync-mini').remove();
  $('#menu-toggle').addEventListener('click', () => setNavOpen(!document.body.classList.contains('nav-open')));
  $('#nav-scrim').addEventListener('click', () => setNavOpen(false));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setNavOpen(false); });
  $('#btn-settings').addEventListener('click', openSettings);
  window.addEventListener('hashchange', route);
  if (!location.hash) location.hash = '#/dashboard';
  route();
}
start().catch(e => {
  console.error(e);
  $('#main').replaceChildren(el('div', { class: 'card' }, el('h3', {}, '无法加载学习数据'), el('p', {}, '原有数据未被清空，请检查本地数据后重试。')));
});
