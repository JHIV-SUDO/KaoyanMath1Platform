// 错题本：艾宾浩斯间隔复习
import { S } from '../store.js';
import { el, setMd, toast, today } from '../util.js';

const REASONS = ['概念不清', '计算错误', '方法不会', '审题失误', '时间不够', '未分类'];

export async function mistakes(main) {
  render(main);
}
async function render(main) {
  main.innerHTML = '';
  const db = S.db;
  const due = S.dueMistakes();
  const later = db.mistakes.filter(m => m.due > today());

  main.append(el('div', { class: 'page-head' },
    el('h1', {}, '错题本'),
    el('span', { class: 'sub' }, `共 ${db.mistakes.length} 题 · 今日待复习 ${due.length} 题 · 间隔复习周期 1/3/7/14/30 天`)),
    el('button', { class: 'btn small', style: 'margin-bottom:12px', onclick: addManual }, '＋ 手动添加错题'));

  if (!db.mistakes.length) {
    main.append(el('div', { class: 'card empty' }, '错题本还是空的。刷题时标记“做错了/不会”的题会自动收录到这里。'));
    return;
  }

  // 今日复习队列
  const queueCard = el('div', { class: 'card', style: 'margin-bottom:16px' });
  queueCard.append(el('h3', {}, el('span', { class: 'dot' }), `今日复习队列（${due.length}）`));
  if (!due.length) queueCard.append(el('div', { class: 'empty' }, '✅ 今日复习任务已完成！'));
  for (const m of due) queueCard.append(reviewRow(m));
  main.append(queueCard);

  // 全部错题表
  const allCard = el('div', { class: 'card' });
  allCard.append(el('h3', {}, el('span', { class: 'dot' }), '全部错题'));
  const tb = el('table', {},
    el('thead', {}, el('tr', {}, el('th', {}, '来源'), el('th', {}, '位置'), el('th', {}, '错因'), el('th', {}, '添加'), el('th', {}, '下次复习'), el('th', {}, '阶段'), el('th', {}, '操作'))),
    el('tbody', {}, ...[...due, ...later].map(m => el('tr', {},
      el('td', { style: 'max-width:260px;font-size:12.5px' }, m.source),
      el('td', {}, m.ref),
      el('td', {}, m.reason),
      el('td', {}, m.added),
      el('td', {}, m.due),
      el('td', {}, `第${m.stage + 1}轮`),
      el('td', {},
        el('button', { class: 'btn small', onclick: () => editMistake(m, render.bind(null, main)) }, '编辑'),
        el('button', { class: 'btn small bad', onclick: () => { if (confirm('删除该错题？')) { db.mistakes.splice(db.mistakes.indexOf(m), 1); S.touch(); render(main); } } }, '删'))))));
  allCard.append(tb);
  main.append(allCard);

  function reviewRow(m) {
    const row = el('div', { class: 'problem-card' });
    row.append(el('div', { class: 'p-head' },
      el('span', { class: 'p-no' }, m.ref),
      el('span', { class: 'tag', style: 'background:#eef1f9' }, m.reason),
      el('span', { style: 'flex:1' }),
      el('span', { style: 'font-size:11.5px;color:var(--ink3)' }, `第${m.stage + 1}轮 · ${m.source}`)));
    const description = m.desc || (m.bookId && S.content.bookQuestions?.find(q => q.id === m.bookId)?.problem);
    if (description) { const d = el('div', {}); setMd(d, description); row.append(d); }
    if (m.bookId) row.append(el('a', { href: '#/practice/book/' + encodeURIComponent(m.bookId), style: 'font-size:13px;color:var(--accent)' }, '查看原题与解析'));
    row.append(el('div', { class: 'p-actions' },
      el('button', { class: 'btn small ok', onclick: () => { S.reviewMistake(m.id, true); toast('👍 记住了，下次复习：' + m.due); render(main); } }, '✓ 记住了'),
      el('button', { class: 'btn small bad', onclick: () => { S.reviewMistake(m.id, false); toast('已重置到第1轮，明天再来', false); render(main); } }, '✗ 没记住')));
    return row;
  }

  function editMistake(m, done) {
    const wrap = el('div', {},
      el('div', { class: 'form-row' }, el('label', {}, '来源'), el('input', { value: m.source, id: 'm-source' })),
      el('div', { class: 'form-row' }, el('label', {}, '位置'), el('input', { value: m.ref, id: 'm-ref' })),
      el('div', { class: 'form-row' }, el('label', {}, '错因'),
        el('select', { id: 'm-reason' }, ...REASONS.map(r => el('option', { selected: m.reason === r }, r)))),
      el('label', { style: 'font-size:13px;color:var(--ink2)' }, '题目描述'),
      el('textarea', { id: 'm-desc' }, m.desc || ''));
    const { modal } = window.__x || {};
    import('../util.js').then(({ modal }) => {
      const md = modal('编辑错题', wrap, [
        el('button', { class: 'btn', onclick: () => md.close() }, '取消'),
        el('button', { class: 'btn primary', onclick: () => {
          m.source = document.getElementById('m-source').value;
          m.ref = document.getElementById('m-ref').value;
          m.reason = document.getElementById('m-reason').value;
          m.desc = document.getElementById('m-desc').value;
          S.touch(); md.close(); done();
        } }, '保存')]);
    });
  }

  function addManual() {
    const wrap = el('div', {},
      el('div', { class: 'form-row' }, el('label', {}, '来源'), el('input', { id: 'am-source', placeholder: '如：1000题强化篇 高数第3章' })),
      el('div', { class: 'form-row' }, el('label', {}, '位置'), el('input', { id: 'am-ref', placeholder: '如：第12题' })),
      el('div', { class: 'form-row' }, el('label', {}, '错因'),
        el('select', { id: 'am-reason' }, ...REASONS.map(r => el('option', {}, r)))),
      el('label', { style: 'font-size:13px;color:var(--ink2)' }, '题目/错误描述'),
      el('textarea', { id: 'am-desc', placeholder: '记录题目要点或自己的错误思路' }));
    import('../util.js').then(({ modal }) => {
      const md = modal('添加错题', wrap, [
        el('button', { class: 'btn', onclick: () => md.close() }, '取消'),
        el('button', { class: 'btn primary', onclick: () => {
          const ref = document.getElementById('am-ref').value.trim();
          if (!ref) return toast('请填写位置', false);
          S.addMistake({
            source: document.getElementById('am-source').value || '手动添加',
            ref, reason: document.getElementById('am-reason').value,
            desc: document.getElementById('am-desc').value,
          });
          md.close(); toast('已添加'); render(main);
        } }, '保存')]);
    });
  }
}
