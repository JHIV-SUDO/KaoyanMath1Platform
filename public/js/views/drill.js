// 1000题追踪：内置题库目录 + 学习进度；保留旧手工记录与笔记。
// 内置题默认直接可练（跳到单题页），无需手填题号。
import { S } from '../store.js';
import { el, setMd, toast } from '../util.js';

const SUBJECTS = { gaoshu: '高数', xiandai: '线代', gailv: '概率', mixed: '综合' };
const STS = [
  { k: 'todo', label: '未做', cls: 's-todo' },
  { k: 'done', label: '会', cls: 's-done' },
  { k: 'wrong', label: '不会', cls: 's-wrong' },
  { k: 'redo', label: '重做', cls: 's-redo' },
];

const normTitle = s => String(s || '').replace(/[（(]/g, '(').replace(/[）)]/g, ')').replace(/[—–\-]/g, '').replace(/\s/g, '');
const normShort = s => normTitle(s).replace(/^第\d+章/, '').replace(/[、，]/g, '');

export async function drill(main) {
  // 内置题按 章 归组：category(book1000/booknote/zy1000) → module 归一化匹配 books.drill 章节标题
  const drillData = S.content.books.drill;
  const hasShitiPdf = (S.content.books.media || []).some(item => item.key === 'shiti.pdf');
  const chapters = [];
  for (const [pian, groups] of Object.entries(drillData)) {
    for (const g of groups) for (const ch of g.chapters) chapters.push({ pian, group: g, ch });
  }
  const chapterByNorm = new Map(chapters.map(c => [normTitle(c.ch.title), c]));
  const chapterByShort = new Map(chapters.map(c => [normShort(c.ch.title), c]));
  const entryByChapter = new Map(chapters.map(c => [c.ch, c]));
  const chapterByPian = new Map(); // pian+norm → chapter，优先本篇匹配
  const chapterByPianShort = new Map();
  for (const c of chapters) {
    chapterByPian.set(c.pian + '|' + normTitle(c.ch.title), c);
    chapterByPianShort.set(c.pian + '|' + normShort(c.ch.title), c);
  }
  const grouped = new Map(); // chapter → questions
  const ungrouped = [];
  const pianOf = q => /强化/.test(q.id + (q.source || '') + (q.category || '')) ? '强化篇'
    : /综合|测试卷/.test(q.module + (q.category || '')) ? '综合篇' : '基础篇';
  for (const q of S.content.bookQuestions || []) {
    if (!/^(book1000-|booknote-|zy1000-|jc30-)/.test(q.id)) { ungrouped.push(q); continue; }
    const pian = pianOf(q);
    const hit = chapterByPian.get(pian + '|' + normTitle(q.module))
      ?? chapterByPianShort.get(pian + '|' + normShort(q.module))
      ?? chapterByNorm.get(normTitle(q.module))
      ?? chapterByShort.get(normShort(q.module));
    if (hit) { (grouped.get(hit) ?? grouped.set(hit, []).get(hit)).push(q); }
    else ungrouped.push(q);
  }
  const pianList = Object.keys(drillData);
  let curPian = pianList[0];
  const tabs = el('div', { class: 'subject-tab' });
  const body = el('div', {});
  main.append(
    el('div', { class: 'page-head' },
      el('h1', {}, '1000题追踪'),
      el('span', { class: 'sub' }, hasShitiPdf
        ? '内置题目直接练习，无需导入；页码对应原资料，可跳转阅读器；旧手工记录保留在每章下方'
        : '内置题目直接练习，无需导入；原资料页码仅作参考；旧手工记录保留在每章下方')),
    tabs, body);

  const statOf = list => {
    const done = list.filter(q => S.db.practice['book#' + q.id]?.result === 'right').length;
    const wrong = list.filter(q => S.db.practice['book#' + q.id]?.result === 'wrong').length;
    return { done, wrong, total: list.length };
  };

  const drawTabs = () => {
    tabs.innerHTML = '';
    for (const p of pianList) {
      const chs = chapters.filter(c => c.pian === p);
      let done = 0, total = 0;
      for (const c of chs) { const st = statOf(grouped.get(c) || []); done += st.done + st.wrong; total += st.total; }
      tabs.append(el('span', { class: 'chip' + (curPian === p ? ' on' : ''), onclick: () => { curPian = p; drawTabs(); drawBody(); } }, `${p} ${done}/${total}`));
    }
  };

  const drawBody = () => {
    body.innerHTML = '';
    let empty = true;
    for (const group of drillData[curPian]) {
      body.append(el('h3', { style: 'margin:14px 0 8px;font-size:15px' },
        el('span', { class: 'tag', style: 'background:#eef1f9' }, SUBJECTS[group.subject] || group.label), ' ', group.label));
      for (const ch of group.chapters) {
        const list = grouped.get(entryByChapter.get(ch)) || [];
        if (!list.length && !(S.db.problems[ch.id] || []).length) continue;
        empty = false;
        body.append(chapterCard(group, ch, list, drawTabs));
      }
    }
    if (empty) body.append(el('div', { class: 'card empty' }, '该篇章暂无内置题目。可在练习题库查看全部来源。'));
  };

  function chapterCard(group, ch, list, refreshTop) {
    const st = statOf(list);
    const legacy = S.drillProblems(ch.id);
    const card = el('div', { class: 'card', style: 'margin-bottom:12px' });
    const pageLabel = `📄 P${ch.pages[0]}${ch.pages[1] !== ch.pages[0] ? '-' + ch.pages[1] : ''}`;
    card.append(el('div', { style: 'display:flex;align-items:center;gap:10px;flex-wrap:wrap' },
      el('b', { style: 'font-size:14.5px' }, ch.title),
      hasShitiPdf
        ? el('button', { type: 'button', class: 'tag', style: 'background:#f0f3ff;color:var(--accent);cursor:pointer;border:0', title: '在阅读器中打开原资料', onclick: () => openPDF('shiti.pdf', ch.pages[0]) }, pageLabel)
        : el('span', { class: 'tag', style: 'background:#f3f4f6;color:var(--ink3)' , title: '当前资料目录未内置试题册PDF，页码仅作参考' }, `${pageLabel} · 页码参考`),
      el('span', { style: 'flex:1' }),
      el('span', { style: 'font-size:12px;color:var(--ink3)' },
        list.length ? `内置 ${st.total} 题 · 做对 ${st.done} · 做错 ${st.wrong}` : '无内置题目')));
    if (list.length) card.append(el('div', { class: 'bar', style: 'margin:8px 0' }, el('i', { style: `width:${Math.round((st.done + st.wrong) * 100 / Math.max(st.total, 1))}%` })));

    // 内置题列表：默认折叠，展开显示逐题状态与做题入口
    if (list.length) {
      const fold = el('details', { class: 'fold' }, el('summary', {}, `展开 ${st.total} 道内置题目`));
      const grid = el('div', { style: 'display:flex;flex-wrap:wrap;gap:6px;margin:8px 0' });
      for (const q of list) {
        const rec = S.db.practice['book#' + q.id];
        const cls = rec?.result === 'right' ? 's-done' : rec?.result === 'wrong' ? 's-wrong' : 's-todo';
        grid.append(el('a', {
          class: `status-btn ${cls}` + (rec ? ' on' : ''),
          href: '#/practice/book/' + encodeURIComponent(q.id),
          title: `${q.number || ''} ${q.type === 'choice' ? '选择题' : q.type === 'fill' ? '填空题' : '解答题'}${rec ? ' · 最近' + (rec.result === 'right' ? '做对' : '做错') : ''}`,
          style: 'text-decoration:none;display:inline-flex;min-width:44px;justify-content:center',
        }, String(q.number || q.id.slice(-3))));
      }
      fold.append(grid);
      fold.append(el('div', { style: 'font-size:11.5px;color:var(--ink3)' }, '点击题号直接做题并查看解析；做错自动进错题本。'));
      card.append(fold);
    }

    // 旧手工记录：保留状态循环与笔记（可见按钮添加，不依赖右键）
    const noteMode = { on: false };
    if (legacy.length || list.length) {
      const legacyWrap = el('div', {});
      const drawLegacy = () => {
        legacyWrap.innerHTML = '';
        if (!legacy.length) return;
        const grid = el('div', { style: 'display:flex;flex-wrap:wrap;gap:6px;margin-top:4px' });
        for (const p of legacy) {
          const s = STS.find(x => x.k === p.status) ?? STS[0];
          grid.append(el('button', {
            class: `status-btn ${s.cls}` + (p.status !== 'todo' ? ' on' : ''),
            title: `手工记录 ${p.no}: ${s.label}${p.note ? ' · ' + p.note : ''}`,
            onclick: () => {
              if (noteMode.on) return notePrompt(ch, p, drawLegacy);
              const order = ['todo', 'done', 'wrong', 'redo'];
              const next = order[(order.indexOf(p.status) + 1) % order.length];
              S.setDrillStatus(ch.id, p.id, next);
              if (next === 'wrong') S.addMistake({ source: `1000题·${curPian}·${group.label}·${ch.title}`, ref: `第${p.no}题`, desc: `（见试题册 P${ch.pages[0]}）` });
              drawLegacy();
            },
          }, p.no + (p.star ? ' ★' : '')));
        }
        legacyWrap.append(el('div', { style: 'font-size:11.5px;color:var(--ink3);margin-top:6px' },
          '手工记录：点击循环状态（未做→会→不会→重做）', noteMode.on ? ' · 笔记模式已开启，点击题号编辑笔记' : ' · “不会”自动进错题本'));
        legacyWrap.append(grid);
      };
      const legacyHead = el('div', { style: 'display:flex;gap:8px;align-items:center;margin-top:10px' },
        el('span', { style: 'font-size:12px;color:var(--ink3)' }, legacy.length ? `旧手工记录 ${legacy.length} 条` : '添加手工记录'),
        el('span', { style: 'flex:1' }),
        el('button', { class: 'btn small ghost', onclick: () => { noteMode.on = !noteMode.on; drawLegacy(); btn.textContent = noteMode.on ? '✓ 完成笔记' : '✎ 笔记/收藏'; } }, '✎ 笔记/收藏'));
      const legacyAdd = el('div', { style: 'display:flex;gap:8px;flex-wrap:wrap;margin-top:6px' });
      const inp = el('input', { placeholder: legacy.length ? '补充手工题号，如 21-30' : '输入题号，如 1-20 或 1,3,5', 'aria-label': '手工题号', style: 'flex:1;min-width:180px', onkeydown: e => { if (e.key === 'Enter') add(); } });
      function add() {
        const nums = parseNums(inp.value);
        if (!nums.length) return toast('请输入有效题号，如 1-20', false);
        const n = S.addDrillProblems(ch.id, nums);
        toast(`已添加 ${n} 条手工记录`);
        drawLegacy(); refreshTop();
      }
      legacyAdd.append(inp, el('button', { class: 'btn small', onclick: add }, '＋ 添加'));
      if (legacy.length || true) card.append(el('details', { class: 'fold' }, el('summary', {}, '手工记录与笔记（旧数据保留）'),
        el('div', { style: 'margin-top:6px' }, legacyHead, legacyAdd, (drawLegacy(), legacyWrap))));
    }
    return card;
  }

  function notePrompt(ch, p, done) {
    const v = prompt(`题 ${p.no} 笔记（可空）`, p.note || '');
    if (v !== null) { p.note = v; p.star = p.star || Boolean(v.trim()); S.touch(); }
    done();
  }

  // 未归组但属于书籍题库的题目提示入口
  if (ungrouped.length) {
    main.append(el('div', { class: 'card', style: 'margin-top:14px' },
      el('h3', {}, `其他书籍条目（${ungrouped.length}）`),
      el('p', { style: 'color:var(--ink2);font-size:13px' }, '包含零基础例题、强化篇笔记等未按篇章归组的条目，可在练习题库按来源筛选查看。'),
      el('a', { href: '#/practice', class: 'btn small' }, '前往练习题库')));
  }

  drawTabs(); drawBody();
}

function parseNums(s) {
  if (!s) return [];
  const out = [];
  for (const part of s.split(/[,，\s]+/)) {
    const m = /^(\d+)-(\d+)$/.exec(part);
    if (m) { for (let i = +m[1]; i <= +m[2] && i - m[1] < 200; i++) out.push(String(i)); continue; }
    if (/^\d+$/.test(part)) out.push(part);
  }
  return out;
}

export function openPDF(fileKey, page) {
  location.hash = `#/resources/${encodeURIComponent(fileKey)}?page=${page}`;
}
