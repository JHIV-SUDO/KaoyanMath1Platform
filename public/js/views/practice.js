// 练习题库：讲义练习和书籍条目聚合刷题（支持筛选与自评）
import { S } from '../store.js';
import { el, setMd, toast } from '../util.js';

const SUBJECTS = { gaoshu: '高等数学', xiandai: '线性代数', gailv: '概率统计', mixed: '综合' };

export async function practice(main, arg = '') {
  // 聚合全部练习
  const all = [];
  for (const L of S.lessonList(null)) {
    for (const ex of L.exercises || []) {
      all.push({ kind: 'lesson', source: 'lesson', module: L.title, lesson: L, ex, key: S.practiceKey(L.id, ex.no), rec: S.db.practice[S.practiceKey(L.id, ex.no)] });
    }
  }
  for (const question of S.content.bookQuestions || []) {
    const lesson = S.lesson(question.lessonId) || { id: null, subject: question.subject, title: question.module, subtitle: question.source };
    all.push({ kind: 'book', source: question.category || (question.id.startsWith('zy1000-') ? 'book1000' : 'book30'), module: question.module,
      lesson, question, ex: { level: question.level }, key: 'book#' + question.id });
  }
  const selectedBook = arg.startsWith('book/') ? arg.slice(5) : '';
  let fSubject = 'all', fLevel = 'all', fStatus = 'all', fSource = 'all', fModule = 'all', page = 0;
  const tabs = el('div', { class: 'subject-tab' });
  const list = el('div', {});
  const summary = el('span', { class: 'sub' });

  main.append(
    el('div', { class: 'page-head' },
      el('h1', {}, '练习题库'),
      summary),
    selectedBook ? el('a', { href: '#/practice', style: 'display:block;margin-bottom:10px' }, '← 返回全部题目') : '',
    tabs, list);

  const drawTabs = () => {
    tabs.innerHTML = '';
    const mk = (k, label) => el('span', { class: 'chip' + (fSubject === k ? ' on' : ''), onclick: () => { fSubject = k; fModule = 'all'; page = 0; drawTabs(); draw(); } }, label);
    tabs.append(mk('all', '全部'), mk('gaoshu', '高数'), mk('xiandai', '线代'), mk('gailv', '概率'), mk('mixed', '综合'));
    tabs.append(el('span', { style: 'width:14px' }));
    for (const [k, label] of [['all', '全部难度'], ['基础', '基础'], ['强化', '强化'], ['冲刺', '冲刺']])
      tabs.append(el('span', { class: 'chip' + (fLevel === k ? ' on' : ''), onclick: () => { fLevel = k; page = 0; drawTabs(); draw(); } }, label));
    tabs.append(el('span', { style: 'width:14px' }));
    for (const [k, label] of [['all', '全部状态'], ['undone', '未做'], ['right', '最近做对'], ['wrong', '最近做错'], ['everWrong', '曾做错']])
      tabs.append(el('span', { class: 'chip' + (fStatus === k ? ' on' : ''), onclick: () => { fStatus = k; page = 0; drawTabs(); draw(); } }, label));
    tabs.append(el('span', { style: 'width:14px' }));
    for (const [k, label] of [['all', '全部来源'], ['lesson', '讲义练习'], ['book1000', '1000题'], ['book30', '30讲例题']])
      tabs.append(el('span', { class: 'chip' + (fSource === k ? ' on' : ''), onclick: () => { fSource = k; page = 0; drawTabs(); draw(); } }, label));
    const modules = [...new Set(all.filter(x => fSubject === 'all' || x.lesson.subject === fSubject).map(x => x.module))];
    tabs.append(el('select', { 'aria-label': '按模块筛选', onchange: e => { fModule = e.target.value; page = 0; draw(); } },
      el('option', { value: 'all', selected: fModule === 'all' }, '全部模块'),
      ...modules.map(module => el('option', { value: module, selected: fModule === module }, module))));
  };

  const draw = () => {
    for (const item of all) item.rec = S.db.practice[item.key];
    const doneN = all.filter(x => x.rec?.result).length;
    const rightN = all.filter(x => x.rec?.result === 'right').length;
    const lessonCount = all.filter(item => item.kind === 'lesson').length;
    summary.textContent = `共 ${all.length} 条 · 随堂 ${lessonCount} · 书籍 ${all.length - lessonCount} · 已做 ${doneN} · 正确率 ${doneN ? Math.round(100 * rightN / doneN) + '%' : '—'} · 做错自动进错题本`;
    list.innerHTML = '';
    const filtered = all.filter(x =>
      (fSubject === 'all' || x.lesson.subject === fSubject) &&
      (fSource === 'all' || x.source === fSource) &&
      (fModule === 'all' || x.module === fModule) &&
      (!selectedBook || x.question?.id === selectedBook) &&
      (fLevel === 'all' || (x.ex.level || '基础') === fLevel) &&
      (fStatus === 'all' ||
        (fStatus === 'undone' && !x.rec?.result) ||
        (fStatus === 'right' && x.rec?.result === 'right') ||
        (fStatus === 'wrong' && x.rec?.result === 'wrong') ||
        (fStatus === 'everWrong' && (x.rec?.everWrong || x.rec?.result === 'wrong'))));
    if (!filtered.length) { list.append(el('div', { class: 'card empty' }, '没有符合条件的题目')); return; }
    // 随机排序按钮
    const head = el('div', { style: 'display:flex;gap:8px;margin-bottom:8px' },
      el('span', { style: 'color:var(--ink3);font-size:12.5px;align-self:center' }, `命中 ${filtered.length} 题`),
      el('span', { style: 'flex:1' }),
      el('button', { class: 'btn small', onclick: () => { shuffle(filtered); page = 0; draw2(filtered); } }, '🔀 打乱顺序'));
    list.append(head);
    draw2(filtered);
  };
  function draw2(items) {
    // 移除旧的卡片（保留 head）
    while (list.children.length > 1) list.lastChild.remove();
    const pages = Math.ceil(items.length / 20);
    page = Math.max(0, Math.min(page, pages - 1));
    for (const it of items.slice(page * 20, page * 20 + 20))
      list.append(it.kind === 'book' ? bookProblemCard(it, draw) : problemCard(it, draw));
    if (pages > 1) list.append(el('div', { style: 'display:flex;gap:10px;align-items:center;margin:16px 0' },
      el('button', { class: 'btn small', disabled: page === 0, onclick: () => { page--; draw2(items); } }, '上一页'),
      el('span', {}, `第 ${page + 1} / ${pages} 页`),
      el('button', { class: 'btn small', disabled: page === pages - 1, onclick: () => { page++; draw2(items); } }, '下一页')));
  }

  drawTabs(); draw();
}

export function bookProblemCard({ question: q, rec }, onChange) {
  const card = el('div', { class: 'problem-card' });
  card.append(el('div', { class: 'p-head' },
    el('span', { class: 'p-no' }, `${q.source} · ${q.number}`),
    el('span', { class: 'tag lv-' + q.level }, q.level),
    q.reviewStatus === 'source-page' ? el('span', { class: 'tag' }, '原书页材料 · 未独立核验') : null,
    el('span', { style: 'flex:1' }),
    q.lessonId ? el('a', { href: '#/lessons/' + q.lessonId, style: 'font-size:12px;color:var(--ink3)' }, q.module) : el('span', { style: 'font-size:12px;color:var(--ink3)' }, q.module),
    rec?.result === 'right' ? el('span', { class: 'tag st-done' }, '✓ 对') : rec?.result === 'wrong' ? el('span', { class: 'tag st-wrong' }, '✗ 错') : null));
  const problem = el('div'); setMd(problem, q.problem); card.append(problem);
  if (q.figure) {
    const { figure, preview } = zoomableFigure('/' + q.figure.replace(/^\/+/, ''), q.figureAlt || `题目 ${q.number} 配图`);
    card.append(figure, preview);
  }
  if (q.renderWarning) card.append(el('p', { style: 'color:var(--ink3)' }, q.renderWarning));
  if (q.sourceFile && !q.analysis && !q.sourceExcerpt && q.reviewStatus !== 'source-page' && ['choice', 'fill'].includes(q.type)) {
    card.append(el('p', { class: 'source-answer-boundary', style: 'font-size:12px;color:var(--ink3)' }, '判分依据来源答案，尚未标记为独立核验'));
  }
  const grade = response => {
    const norm = v => String(v ?? '').replace(/\s/g, '').replace(/[()（）]/g, '').toUpperCase();
    const right = norm(response) === norm(q.answer);
    S.markBookQuestion(q.id, right ? 'right' : 'wrong', response);
    toast(right ? '回答正确' : '回答错误，已加入错题本', right);
    onChange?.();
  };
  if (q.type === 'choice') {
    const options = el('div', { class: 'p-actions' });
    q.options.forEach((option, i) => {
      const text = el('span'); setMd(text, option);
      options.append(el('button', { class: 'btn small', onclick: () => grade('ABCD'[i]) }, el('b', {}, 'ABCD'[i] + '. '), text));
    });
    card.append(options);
  } else if (q.type === 'fill') {
    const input = el('input', { 'aria-label': '填写答案', placeholder: '填写答案', style: 'max-width:200px' });
    card.append(el('div', { class: 'p-actions' }, input, el('button', { class: 'btn small primary', onclick: () => { if (input.value.trim()) grade(input.value); } }, '提交答案')));
  } else {
    card.append(el('div', { class: 'p-actions' },
      el('button', { class: 'status-btn s-done', onclick: () => { S.markBookQuestion(q.id, 'right'); onChange?.(); } }, '✓ 做对了'),
      el('button', { class: 'status-btn s-wrong', onclick: () => { S.markBookQuestion(q.id, 'wrong'); onChange?.(); } }, '✗ 做错了')));
  }
  const fold = el('details', { class: 'fold' }, el('summary', {}, '查看答案与分层解析'));
  const body = el('div', { class: 'fold-body' });
  const add = (title, text) => { const section = el('div', { style: 'margin:10px 0' }, el('b', {}, title)); const content = el('div'); setMd(content, text); section.append(content); body.append(section); };
  if (q.answer) add('答案', q.type === 'choice' ? q.answer + ' · ' + q.options['ABCD'.indexOf(q.answer)] : q.answer);
  if (q.analysis) {
    add('命题视角（教学推断）', q.analysis.intent);
    add('观察与切入', q.analysis.clue);
    add('分步解答', q.analysis.steps.map((step, i) => `${i + 1}. ${step}`).join('\n'));
    add('易错点', q.analysis.trap);
    add('检验', q.analysis.check);
    add('方法迁移', q.analysis.transfer);
  }
  if (q.sourceSolution) add('原资料解析', q.sourceSolution);
  if (q.studyNote) {
    const topics = Array.isArray(q.studyNote.topics) ? q.studyNote.topics.join('、') : String(q.studyNote.topics || '');
    if (topics) add('关联考点', topics);
    if (q.studyNote.reasoning) add('作者笔记 · 解题思路', q.studyNote.reasoning);
    if (q.studyNote.warning) add('作者笔记 · 复盘提示', q.studyNote.warning);
    body.append(el('p', { style: 'font-size:12px;color:var(--ink3)' }, '作者笔记保留原有解法，尚未逐题独立校验。'));
  }
  if (!q.analysis && !q.sourceSolution && !q.sourceExcerpt) body.append(el('p', { style: 'color:var(--ink3)' }, '该题来源暂未提供解析，请结合课程内容自评。'));
  const solutionLocation = q.solutionPage ? (q.reviewStatus === 'source-page' ? `；原书解析页估计为第 ${q.solutionPage} 页，未人工核对` : `；解析对照第 ${q.solutionPage} 页`) : '';
  const pages = q.sourcePage ? `，原资料 PDF 第 ${q.sourcePage} 页${solutionLocation}` : '';
  body.append(el('div', { style: 'font-size:12px;color:var(--ink3)' }, `题目来源：${q.source}${pages}。`));
  fold.append(body); card.append(fold);
  if (q.sourceExcerpt?.document || q.sourceExcerpt?.pages?.length) {
    const source = el('details', { class: 'fold source-excerpt' }, el('summary', {}, '原题与原书解答（原书扫描）'));
    const sourceBody = el('div', { class: 'fold-body' });
    source.addEventListener('toggle', () => {
      if (!source.open) {
        sourceBody.querySelectorAll('dialog[open]').forEach(dialog => dialog.close());
        sourceBody.replaceChildren();
        return;
      }
      sourceBody.replaceChildren(el('p', { style: 'font-size:12px;color:var(--ink3)' }, `以下为原书页面扫描；素材已集成，内容尚未标记为人工数学核验。${q.sourceExcerpt.containsAdjacentSource ? '扫描范围可能包含相邻原书讲解。' : ''}`));
      if (q.sourceReview?.required) sourceBody.append(el('p', { class: 'warn-box' }, `原书扫描锚点需人工确认：${q.sourceReview.reason}`));

      const doc = q.sourceExcerpt.document;
      if (doc && window.CloudPlatform) {
        const firstPage = Number.isInteger(doc.firstPage) && doc.firstPage > 0 ? doc.firstPage : 1;
        sourceBody.append(el('a', { class: 'btn small primary', href: `#/resources/${encodeURIComponent(doc.key)}?page=${firstPage}` },
          `在 App 内打开原书题解 PDF（第 ${firstPage} 页起，共 ${doc.pageCount || '?'} 页）`));
      } else if (q.sourceExcerpt.pages?.length) {
        let pageIndex = 0;
        const drawSourcePage = () => {
          const page = q.sourceExcerpt.pages[pageIndex];
          const controls = el('div', { style: 'display:flex;gap:10px;align-items:center;justify-content:center;margin:8px 0' },
            el('button', { class: 'btn small', disabled: pageIndex === 0, onclick: () => { pageIndex--; drawSourcePage(); } }, '上一页'),
            el('span', {}, `${pageIndex + 1} / ${q.sourceExcerpt.pages.length}`),
            el('button', { class: 'btn small', disabled: pageIndex === q.sourceExcerpt.pages.length - 1, onclick: () => { pageIndex++; drawSourcePage(); } }, '下一页'));
          const { figure, preview } = zoomableFigure(page.image, page.alt || `原书扫描，PDF第 ${page.page} 页`, 760);
          figure.append(el('figcaption', { style: 'font-size:12px;color:var(--ink3);text-align:center' }, `原书 PDF 第 ${page.page} 页`));
          sourceBody.replaceChildren(...[...sourceBody.childNodes].slice(0, q.sourceReview?.required ? 2 : 1), controls, figure, preview);
        };
        drawSourcePage();
      } else sourceBody.append(el('p', { class: 'empty' }, '当前版本未内置该题原书扫描页。'));
    });
    source.append(sourceBody);
    card.append(source);
  }
  return card;
}

function zoomableFigure(src, alt, maxHeight = 320) {
  const url = src.startsWith('/') ? src : '/' + src.replace(/^\/+/, '');
  const image = el('img', { src: url, alt, loading: 'lazy', decoding: 'async', style: `display:block;max-width:100%;max-height:${maxHeight}px;object-fit:contain;margin:12px auto` });
  const button = el('button', { type: 'button', class: 'btn ghost', 'aria-label': `放大：${alt}`, style: 'display:block;max-width:100%;margin:auto;padding:0', onclick: () => preview.showModal() }, image);
  const figure = el('figure', { style: 'margin:12px 0' }, button);
  const preview = el('dialog', { 'aria-label': `图片预览：${alt}`, style: 'padding:12px;max-width:96vw;max-height:96vh;border:0;border-radius:12px' });
  preview.append(el('img', { src: url, alt, style: 'display:block;max-width:90vw;max-height:88vh;object-fit:contain' }));
  preview.addEventListener('click', () => preview.close());
  return { figure, preview };
}

export function problemCard({ lesson, ex, key, rec }, onChange) {
  const card = el('div', { class: 'problem-card' });
  card.append(el('div', { class: 'p-head' },
    el('span', { class: 'p-no' }, `${SUBJECTS[lesson.subject]} · ${lesson.subtitle} · 练习 ${ex.no}`),
    el('span', { class: 'tag lv-' + (ex.level || '基础') }, ex.level || '基础'),
    el('span', { style: 'flex:1' }),
    el('a', { href: '#/lessons/' + lesson.id, style: 'font-size:12px;color:var(--ink3)' }, lesson.title),
    rec?.result === 'right' ? el('span', { class: 'tag st-done' }, '✓ 对') :
      rec?.result === 'wrong' ? el('span', { class: 'tag st-wrong' }, '✗ 错') : null));
  const prob = el('div', {});
  setMd(prob, ex.problem);
  card.append(prob);
  const fold = el('details', { class: 'fold' }, el('summary', {}, '查看答案与解析'));
  const body = el('div', { class: 'fold-body' });
  const ans = el('div', { style: 'font-weight:700;margin-bottom:6px' });
  setMd(ans, '答案：' + ex.answer);
  body.append(ans);
  const sol = el('div', {});
  setMd(sol, ex.solution);
  body.append(sol);
  fold.append(body);
  card.append(fold);
  card.append(el('div', { class: 'p-actions' },
    el('button', { class: 'status-btn s-done' + (rec?.result === 'right' ? ' on' : ''), onclick: () => { S.markPractice(lesson.id, ex.no, 'right'); onChange?.(); } }, '✓ 做对了'),
    el('button', { class: 'status-btn s-wrong' + (rec?.result === 'wrong' ? ' on' : ''), onclick: () => { S.markPractice(lesson.id, ex.no, 'wrong'); onChange?.(); } }, '✗ 做错了')));
  return card;
}

function shuffle(arr) { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } }
