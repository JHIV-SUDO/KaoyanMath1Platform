// 真题管理：历年真题分数记录 + 计时器
import { S } from '../store.js';
import { el, toast, today } from '../util.js';

export async function exams(main) {
  const list = S.content.exams;
  let doneN = list.filter(e => S.db.exams[e.year]?.done).length;
  const doneCount = el('span', {}, String(doneN));

  const timerCard = el('div', { class: 'card', style: 'margin-bottom:16px' });
  timerCard.append(el('h3', {}, el('span', { class: 'dot' }), '考试计时器（180 分钟）'));
  const tDisplay = el('div', { style: 'font-size:44px;font-weight:800;font-family:var(--mono);text-align:center;margin:6px 0' }, '03:00:00');
  let tRemain = 180 * 60, tHandle = null;
  const startBtn = el('button', { class: 'btn primary', onclick: () => {
    if (tHandle) return;
    tHandle = setInterval(() => {
      tRemain--;
      const h = String(Math.floor(tRemain / 3600)).padStart(2, '0');
      const m = String(Math.floor(tRemain % 3600 / 60)).padStart(2, '0');
      const s = String(tRemain % 60).padStart(2, '0');
      tDisplay.textContent = `${h}:${m}:${s}`;
      tDisplay.style.color = tRemain < 600 ? 'var(--bad)' : 'var(--ink)';
      if (tRemain <= 0) { clearInterval(tHandle); tHandle = null; toast('时间到！', false); }
    }, 1000);
    startBtn.textContent = '计时中…';
  } }, '▶ 开始计时');
  const resetBtn = el('button', { class: 'btn', onclick: () => { clearInterval(tHandle); tHandle = null; tRemain = 180 * 60; tDisplay.textContent = '03:00:00'; tDisplay.style.color = ''; startBtn.textContent = '▶ 开始计时'; } }, '重置');
  timerCard.append(tDisplay, el('div', { style: 'display:flex;gap:10px;justify-content:center' }, startBtn, resetBtn));
  main.append(
    el('div', { class: 'page-head' },
      el('h1', {}, '真题管理'),
      el('span', { class: 'sub' }, '1987–2026 历年真题完成度 ', doneCount, `/${list.length} · 真题进度与成绩记录 · 原卷暂未内置`)),
    timerCard);

  const card = el('div', { class: 'card' });
  const tb = el('table', {},
    el('thead', {}, el('tr', {}, el('th', {}, '年份'), el('th', {}, '题型结构'), el('th', {}, '状态'), el('th', {}, '得分'), el('th', {}, '备注'), el('th', {}, '操作'))),
    el('tbody', {}, ...list.map(e => {
      const rec = S.db.exams[e.year] ??= { done: false, score: null, notes: '' };
      const available = (S.content.books.media || []).some(item => item.key === `exam-${e.year}.pdf`);
      const status = el('button', { class: 'status-btn' + (rec.done ? ' s-done on' : ''), onclick: () => {
        rec.done = !rec.done;
        S.touch();
        status.className = 'status-btn' + (rec.done ? ' s-done on' : '');
        status.textContent = rec.done ? '✓ 已完成' : '未完成';
        doneN += rec.done ? 1 : -1;
        doneCount.textContent = String(doneN);
      } }, rec.done ? '✓ 已完成' : '未完成');
      return el('tr', {},
        el('td', { style: 'font-weight:700' }, e.year + (e.year >= 2026 ? '（最新）' : '')),
        el('td', { style: 'font-size:12px;color:var(--ink2)' }, e.structure),
        el('td', {}, status),
        el('td', {}, el('input', { type: 'number', value: rec.score ?? '', style: 'width:76px', placeholder: '分数', onchange: (ev) => { rec.score = ev.target.value === '' ? null : Number(ev.target.value); S.touch(); } })),
        el('td', {}, el('input', { value: rec.notes || '', style: 'width:100%', placeholder: '错题/薄弱点记录', onchange: (ev) => { rec.notes = ev.target.value; S.touch(); } })),
        el('td', {}, examPDFBtn(e.year, available)));
    })));
  card.append(tb);
  main.append(card);
  return () => { if (tHandle) clearInterval(tHandle); tHandle = null; };
}

function examPDFBtn(year, available) {
  if (!available) return el('span', { style: 'font-size:12px;color:var(--ink3)' }, '暂无内置真题PDF');
  const btn = el('button', { class: 'btn small' }, '📄 打开PDF');
  btn.onclick = () => { location.hash = `#/resources/exam-${year}.pdf?page=1`; };
  return btn;
}
