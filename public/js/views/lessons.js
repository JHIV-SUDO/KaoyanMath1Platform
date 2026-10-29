// 课程讲义：列表 + 阅读器
import { S } from '../store.js';
import { el, setMd, renderMath, toast, $, $$ } from '../util.js';
import { learningLinks } from '../learning-links.js';

const SUBJECTS = { gaoshu: '高等数学', xiandai: '线性代数', gailv: '概率统计' };
const ST_LABEL = ['未学', '学习中', '已学'];

/* ---------------- 列表 ---------------- */
export async function lessonsList(main) {
  let cur = 'gaoshu';
  const tabs = el('div', { class: 'subject-tab' });
  const list = el('div', {});
  main.append(
    el('div', { class: 'page-head' },
      el('h1', {}, '课程讲义'),
      el('span', { class: 'sub' }, '概念 → 定理 → 例题 → 随堂练习')),
    tabs, list);
  const drawTabs = () => {
    tabs.innerHTML = '';
    for (const [k, v] of Object.entries(SUBJECTS)) {
      const lessons = S.lessonList(k);
      const done = lessons.filter(l => S.db.lessonStatus[l.id]?.status === 2).length;
      tabs.append(el('span', { class: 'chip' + (cur === k ? ' on' : ''), onclick: () => { cur = k; drawTabs(); drawList(); } },
        `${v} ${done}/${lessons.length}`));
    }
    const all = S.lessonList();
    tabs.append(el('span', { class: 'chip' + (cur === 'all' ? ' on' : ''), onclick: () => { cur = 'all'; drawTabs(); drawList(); } }, `全部 ${all.length} 讲`));
  };
  const drawList = () => {
    list.innerHTML = '';
    const lessons = S.lessonList(cur === 'all' ? null : cur);
    if (!lessons.length) { list.append(el('div', { class: 'card empty' }, '该科目讲义编写中…')); return; }
    const grid = el('div', { class: 'grid c2' });
    for (const L of lessons) {
      const st = S.db.lessonStatus[L.id] ?? { status: 0 };
      const card = el('div', { class: 'card', style: 'cursor:pointer', onclick: () => location.hash = '#/lessons/' + L.id },
        el('div', { style: 'display:flex;align-items:center;gap:10px;margin-bottom:8px' },
          el('span', { style: 'background:linear-gradient(135deg,var(--accent),var(--accent2));color:#fff;border-radius:10px;padding:2px 10px;font-size:12px;font-weight:700' }, L.subtitle),
          el('b', { style: 'font-size:15px' }, L.title),
          el('span', { style: 'flex:1' }),
          el('span', { class: 'tag lv-' + '基础', style: 'background:' + (st.status === 2 ? '#e7f5ec' : st.status === 1 ? '#fef3e2' : '#eef1f9'), color: st.status === 2 ? '#15803d' : st.status === 1 ? '#b45309' : '#5b6478' }, ST_LABEL[st.status] || '未学')),
        el('div', { style: 'color:var(--ink2);font-size:12.8px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden' },
          L.goal.slice(0, 2).join('；')),
        el('div', { style: 'display:flex;gap:14px;margin-top:10px;color:var(--ink3);font-size:12px' },
          el('span', {}, `⏱ 建议 ${L.hours} 课时`),
          el('span', {}, `💡 ${L.concepts.length} 概念 · ${L.theorems.length} 定理`),
          el('span', {}, `📝 ${L.examples.length} 例题 · ${L.exercises.length} 练习`),
          st.minutes ? el('span', {}, `累计 ${st.minutes} 分钟`) : null));
      grid.append(card);
    }
    list.append(grid);
  };
  drawTabs(); drawList();
}

/* ---------------- 阅读器 ---------------- */
export async function lessonReader(main, id) {
  const L = S.lesson(id);
  if (!L) { main.append(el('div', { class: 'card empty' }, '讲义不存在')); return; }
  const idx = S.lessonList(null).findIndex(x => x.id === id);
  const all = S.lessonList(null);
  const prev = all[idx - 1], next = all[idx + 1];

  const head = el('div', { class: 'lesson-layout' });
  main.append(head);

  head.append(
    el('div', { class: 'lesson-meta' },
      el('a', { href: '#/lessons', style: 'color:var(--accent)' }, '← 返回课程列表'),
      el('span', {}, SUBJECTS[L.subject]),
      el('span', {}, '·'),
      el('span', {}, `${L.subtitle} ${L.title}`),
      el('span', {}, `· 建议 ${L.hours} 课时`)),
    el('h1', { style: 'font-size:24px;margin-bottom:6px' }, `${L.subtitle}　${L.title}`),
    statusRow(L),
  );

  // 学习目标
  head.append(secTitle('🎯', '学习目标'));
  const goalCard = el('div', { class: 'concept-card' });
  setMd(goalCard, L.goal.map(g => `- ${g}`).join('\n'));
  head.append(goalCard);

  // 概念
  head.append(secTitle('📖', '概念精讲'));
  for (const c of L.concepts) {
    const card = el('div', { class: 'concept-card' }, el('b', {}, c.name), el('div', { style: 'margin-top:6px' }));
    setMd(card.lastChild, c.body);
    head.append(card);
  }

  // 定理
  head.append(secTitle('📐', '定理与公式'));
  for (const t of L.theorems) {
    const card = el('div', { class: 'theorem-card' });
    card.append(el('b', {}, t.name), el('div', { style: 'margin-top:4px' }));
    setMd(card.children[1], t.statement);
    if (t.conditions) {
      const cd = el('div', { class: 'cond' }, '⚠ 使用前提：');
      setMd(cd, t.conditions);
      card.append(cd);
    }
    if (t.remark) {
      const rm = el('div', { class: 'rmk' }, '💬 ');
      setMd(rm, t.remark);
      card.append(rm);
    }
    head.append(card);
  }

  // 例题
  head.append(secTitle('✍️', '例题精讲'));
  for (const e of L.examples) {
    head.append(exampleCard(e));
  }

  // 方法总结
  head.append(secTitle('🧭', '方法总结'));
  const mCard = el('div', { class: 'concept-card' });
  setMd(mCard, L.methods.map(m => `- ${m}`).join('\n'));
  head.append(mCard);

  // 易错
  head.append(secTitle('⚠️', '易错警示'));
  for (const p of L.pitfalls) {
    const pc = el('div', { class: 'pitfall-card' });
    setMd(pc, p);
    head.append(pc);
  }

  // 练习
  head.append(secTitle('📝', '随堂练习'));
  const prWrap = el('div', {});
  head.append(prWrap);
  drawExercises(prWrap, L);

  head.append(secTitle('🧭', '继续学习（App 内）'));
  const links = el('div', { class: 'card learning-links' });
  for (const link of learningLinks(L)) {
    links.append(el('a', { href: link.hash },
      el('b', {}, link.title), el('span', {}, ' · ' + link.detail)));
  }
  head.append(links);

  // 授权仓库知识笔记（R01/R05/R08 吸收内容；来源仅作元数据，全部在 App 内阅读）
  const notes = (S.content.repoNotes || []).filter(n => Array.isArray(n.relatedLessons) && (!n.relatedLessons.length || n.relatedLessons.includes(L.id)));
  if (notes.length) {
    head.append(secTitle('📚', `扩展笔记（${notes.length}）`));
    const search = el('input', { type: 'search', placeholder: '搜索标题、主题、正文或笔记 ID', 'aria-label': '搜索扩展笔记', style: 'width:100%;max-width:520px;margin:0 0 10px' });
    const noteList = el('div', {});
    const pageSize = 20;
    let page = 0;
    let matches = notes;
    const drawNotes = () => {
      noteList.innerHTML = '';
      const pages = Math.max(1, Math.ceil(matches.length / pageSize));
      page = Math.max(0, Math.min(page, pages - 1));
      const visible = matches.slice(page * pageSize, (page + 1) * pageSize);
      for (const n of visible) {
        const fold = el('details', { class: 'fold', id: n.id });
        fold.append(el('summary', {}, `${n.kind ? n.kind + ' · ' : ''}${n.topic || n.title}`));
        const body = el('div', { class: 'fold-body' });
        let rendered = false;
        fold.addEventListener('toggle', () => {
          if (fold.open && !rendered) {
            setMd(body, n.text);
            body.append(el('p', { style: 'font-size:12px;color:var(--ink3)' }, `笔记 ID：${n.id} · 来源：${n.repo} · ${n.source}`));
            rendered = true;
          }
        });
        fold.append(body);
        noteList.append(fold);
      }
      if (pages > 1) noteList.append(el('div', { style: 'display:flex;gap:10px;align-items:center;margin:12px 0' },
        el('button', { class: 'btn small', disabled: page === 0, onclick: () => { page--; drawNotes(); } }, '上一页'),
        el('span', {}, `第 ${page + 1} / ${pages} 页 · ${matches.length} 条`),
        el('button', { class: 'btn small', disabled: page === pages - 1, onclick: () => { page++; drawNotes(); } }, '下一页')));
      if (!matches.length) noteList.append(el('p', { class: 'empty' }, '没有匹配的笔记'));
    };
    search.addEventListener('input', () => {
      const q = search.value.trim().toLocaleLowerCase();
      matches = notes.filter(n => [n.id, n.title, n.topic, n.text].some(value => String(value || '').toLocaleLowerCase().includes(q)));
      page = 0;
      drawNotes();
    });
    head.append(search, noteList);
    drawNotes();
  }

  // 底部导航
  head.append(el('div', { class: 'lesson-nav' },
    prev ? el('button', { class: 'btn', onclick: () => location.hash = '#/lessons/' + prev.id }, `← ${prev.subtitle} ${prev.title}`) : el('span'),
    next ? el('button', { class: 'btn primary', onclick: () => location.hash = '#/lessons/' + next.id }, `${next.subtitle} ${next.title} →`) : el('button', { class: 'btn primary', onclick: () => location.hash = '#/practice' }, '去做练习 →')));
}

function secTitle(icon, text) {
  return el('div', { class: 'sec-title' }, el('span', { class: 'ico' }, icon), text);
}

function statusRow(L) {
  const st = S.db.lessonStatus[L.id] ?? { status: 0, minutes: 0 };
  const row = el('div', { style: 'display:flex;gap:8px;align-items:center;margin-bottom:14px;flex-wrap:wrap' });
  const mk = (val, label) => el('button', {
    class: 'status-btn' + (st.status === val ? ' on' : ''),
    onclick: () => { S.setLessonStatus(L.id, val); toast(`已标记：${label}`); statusRowRefresh(); },
  }, label);
  function statusRowRefresh() {
    const s = S.db.lessonStatus[L.id] ?? { status: 0 };
    $$('button', row).forEach(b => b.classList.remove('on'));
    if (s.status === 1) row.children[1].classList.add('on');
    if (s.status === 2) row.children[2].classList.add('on');
  }
  row.append(el('span', { style: 'color:var(--ink3);font-size:12.5px' }, '学习状态：'),
    mk(1, '▶ 学习中'), mk(2, '✓ 已学完'));
  row.append(el('button', { class: 'btn small', onclick: () => {
    const rec = S.db.lessonStatus[L.id] ??= { status: 0, minutes: 0 };
    S.addMinutes(L.id, 45);
    toast('已记录 45 分钟学习时长');
  } }, '⏱ 记录 45 分钟'));
  return row;
}

function exampleCard(e) {
  const card = el('div', { class: 'example-card' });
  card.append(el('div', { class: 'ex-head' },
    el('span', {}, e.title),
    el('span', { class: 'tag lv-' + (e.level || '基础') }, e.level || '基础')));
  const prob = el('div', {});
  setMd(prob, e.problem);
  card.append(prob);
  const fold = el('details', { class: 'fold' }, el('summary', {}, '查看解答'));
  const body = el('div', { class: 'fold-body' });
  (e.solution || []).forEach(step => {
    const p = el('div', {});
    setMd(p, step);
    body.append(p);
  });
  fold.append(body);
  card.append(fold);
  if (e.tip) {
    const tip = el('div', { class: 'tip-line' });
    setMd(tip, '💡 ' + e.tip);
    card.append(tip);
  }
  return card;
}

function drawExercises(wrap, L) {
  wrap.innerHTML = '';
  for (const ex of L.exercises) {
    const key = S.practiceKey(L.id, ex.no);
    const rec = S.db.practice[key];
    const card = el('div', { class: 'problem-card' });
    card.append(el('div', { class: 'p-head' },
      el('span', { class: 'p-no' }, `练习 ${ex.no}`),
      el('span', { class: 'tag lv-' + (ex.level || '基础') }, ex.level || '基础'),
      el('span', { style: 'flex:1' }),
      rec?.result === 'right' ? el('span', { class: 'tag st-done' }, '✓ 已做对') :
      rec?.result === 'wrong' ? el('span', { class: 'tag st-wrong' }, '✗ 曾做错') : null));
    const prob = el('div', {});
    setMd(prob, ex.problem);
    card.append(prob);
    const fold = el('details', { class: 'fold' }, el('summary', {}, '查看答案与解析'));
    const body = el('div', { class: 'fold-body' });
    const ansP = el('div', { style: 'font-weight:700;margin-bottom:6px' });
    setMd(ansP, '答案：' + ex.answer);
    body.append(ansP);
    const solP = el('div', {});
    setMd(solP, ex.solution);
    body.append(solP);
    fold.append(body);
    card.append(fold);
    // 先自己做出答案的按钮（在折叠前）
    const actions = el('div', { class: 'p-actions' },
      el('span', { style: 'font-size:12px;color:var(--ink3);align-self:center' }, '先独立完成，再看答案，然后自评：'),
      el('button', { class: 'status-btn s-done' + (rec?.result === 'right' ? ' on' : ''), onclick: (ev) => { S.markPractice(L.id, ex.no, 'right'); refresh(); } }, '✓ 我做对了'),
      el('button', { class: 'status-btn s-wrong' + (rec?.result === 'wrong' ? ' on' : ''), onclick: (ev) => { S.markPractice(L.id, ex.no, 'wrong'); refresh(); } }, '✗ 做错了'));
    card.append(actions);
    wrap.append(card);
  }
  function refresh() { drawExercises(wrap, L); }
}
