// 模拟考试：全真模拟卷（计时作答 → 自动判分选择/填空 → 解答自评 → 成绩单）
import { S } from '../store.js';
import { el, setMd, toast, modal, today, uid } from '../util.js';

export async function mocks(main) {
  main.append(el('div', { class: 'page-head' },
    el('h1', {}, '模拟考试'),
    el('span', { class: 'sub' }, '全真模拟卷 · 180 分钟 · 选择自动判分 · 填空按指定格式匹配')));
  const grid = el('div', { class: 'grid c2' });
  main.append(grid);
  for (const mock of S.content.mocks) {
    const results = S.db.mockResults.filter(r => r.mockId === mock.id);
    const best = results.length ? Math.max(...results.map(r => r.score)) : null;
    grid.append(el('div', { class: 'card' },
      el('h3', {}, el('span', { class: 'dot' }), mock.title),
      el('div', { style: 'color:var(--ink2);font-size:13px;margin-bottom:12px' },
        `${mock.sections.map(s => `${s.type}${s.problems.length}题`).join(' + ')} · 满分 150 · 限时 ${mock.duration} 分钟`),
      el('div', { style: 'display:flex;gap:8px;flex-wrap:wrap;align-items:center' },
        el('button', { class: 'btn primary', onclick: () => location.hash = '#/mocks/' + mock.id }, S.db.mockAttempts[mock.id] ? '▶ 继续考试' : '▶ 开始考试'),
        best !== null ? el('span', { class: 'tag st-done' }, `历史最高 ${best} 分`) : el('span', { style: 'color:var(--ink3);font-size:12.5px' }, '暂未作答')),
      results.length ? el('div', { style: 'margin-top:10px' },
        ...results.slice(-3).reverse().map(r => el('div', { class: 'task-row' },
          el('span', { class: 't-title' }, `得分 ${r.score}（选${r.choice}+填${r.blank}+解${r.solve}）`),
          el('span', { class: 't-date' }, r.date)))) : null));
  }
}

export async function mockExam(main, mockId) {
  const mock = S.content.mocks.find(m => m.id === mockId);
  if (!mock) { main.append(el('div', { class: 'card empty' }, '模拟卷不存在')); return; }
  const attempt = S.db.mockAttempts[mockId] ??= { answers: {}, start: Date.now() };
  const state = { answers: attempt.answers, start: attempt.start, submitted: false };
  S.touch();
  let remain = Math.max(0, Math.ceil((state.start + mock.duration * 60000 - Date.now()) / 1000));

  const timerEl = el('div', { style: 'font-weight:800;font-size:22px' }, `${String(Math.floor(remain / 60)).padStart(2, '0')}:${String(remain % 60).padStart(2, '0')}`);
  const bar = el('div', { class: 'mock-timer' },
    el('span', {}, '⏱'),
    timerEl,
    el('span', { style: 'font-size:12px;opacity:.7;font-family:inherit' }, mock.title),
    el('span', { style: 'flex:1' }),
    el('button', { class: 'btn small warn', onclick: confirmSubmit }, '提前交卷'),
    el('button', { class: 'btn small ok', onclick: confirmSubmit }, '交卷'));
  main.append(bar);

  const timer = setInterval(() => {
    if (!timerEl.isConnected) { clearInterval(timer); return; }
    remain = Math.max(0, Math.ceil((state.start + mock.duration * 60000 - Date.now()) / 1000));
    const mm = String(Math.floor(remain / 60)).padStart(2, '0');
    const ss = String(remain % 60).padStart(2, '0');
    timerEl.textContent = `${mm}:${ss}`;
    timerEl.style.color = remain < 600 ? '#fca5a5' : '#fff';
    if (remain <= 0) { clearInterval(timer); toast('时间到，自动交卷', false); submit(); }
  }, 1000);

  const paper = el('div', { class: 'lesson-layout', style: 'max-width:920px' });
  main.append(paper);

  for (const sec of mock.sections) {
    const sectionScore = sec.problems.reduce((sum, q) => sum + (q.score ?? sec.scoreEach), 0);
    const scoreLabel = sec.scoreEach ? `每题 ${sec.scoreEach} 分，` : '';
    paper.append(el('div', { class: 'sec-title' }, el('span', { class: 'ico' }, sec.type), `${sec.type}题（${scoreLabel}共 ${sectionScore} 分）`));
    for (const q of sec.problems) {
      paper.append(mockQuestion(sec, q));
    }
  }
  paper.append(el('div', { style: 'text-align:center;margin:24px 0' },
    el('button', { class: 'btn primary', style: 'padding:10px 40px;font-size:15px', onclick: confirmSubmit }, '✓ 交卷并查看成绩')));
  if (remain <= 0) setTimeout(() => { toast('时间到，自动交卷', false); submit(); }, 0);

  function mockQuestion(sec, q) {
    const card = el('div', { class: 'mock-q', id: 'q-' + q.no });
    card.append(el('div', { class: 'p-head' }, el('span', { class: 'p-no' }, `第 ${q.no} 题`),
      el('span', { class: 'tag lv-' + (q.level || '基础') }, q.level || '基础'),
      el('span', { style: 'flex:1' }), el('span', { style: 'font-size:12px;color:var(--ink3)' }, `${q.score || sec.scoreEach} 分`)));
    const prob = el('div', {}); setMd(prob, q.problem); card.append(prob);
    if (sec.type === '选择') {
      const opts = el('div', { class: 'opts' });
      for (const [i, opt] of q.options.entries()) {
        const label = el('label', {});
        const radio = el('input', { type: 'radio', name: 'q' + q.no, checked: state.answers[q.no] === 'ABCD'[i], onchange: () => { state.answers[q.no] = 'ABCD'[i]; S.touch(); } });
        const txt = el('span', {}); setMd(txt, opt);
        label.append(radio, txt); opts.append(label);
      }
      card.append(opts);
    } else {
      const inp = el('textarea', { placeholder: sec.type === '填空' ? '在此填写答案' : '可写下关键步骤便于对照解析', style: 'min-height:' + (sec.type === '填空' ? '40px' : '90px') }, state.answers[q.no] || '');
      inp.addEventListener('input', () => { state.answers[q.no] = inp.value; S.touch(); });
      card.append(inp);
    }
    return card;
  }

  function confirmSubmit() {
    const unanswered = [];
    for (const sec of mock.sections) for (const q of sec.problems) if (!state.answers[q.no]) unanswered.push(q.no);
    const m = modal('确认交卷',
      el('div', {}, unanswered.length
        ? `还有 ${unanswered.length} 题未作答：第 ${unanswered.join('、')} 题。确定交卷吗？`
        : '全部题目已作答，确定交卷吗？'),
      [el('button', { class: 'btn', onclick: () => m.close() }, '再检查一下'),
        el('button', { class: 'btn primary', onclick: () => { m.close(); submit(); } }, '确认交卷')]);
  }

  function submit() {
    if (state.submitted) return;
    state.submitted = true;
    clearInterval(timer);
    const durationMin = Math.round((Date.now() - state.start) / 60000);
    // 判分
    let choice = 0, blank = 0, solve = 0;
    const perProblem = {};
    for (const sec of mock.sections) {
      for (const q of sec.problems) {
        const ans = state.answers[q.no] || '';
        let got = null;
        if (sec.type === '选择') { got = ans === q.answer ? sec.scoreEach : 0; choice += got; }
        else if (sec.type === '填空') { got = normEq(ans, q.answer) ? sec.scoreEach : 0; blank += got; }
        perProblem[q.no] = { ans, got, ref: q.answer };
      }
    }
    // 解答题自评
    const solveSec = mock.sections.find(s => s.type === '解答');
    const m2rows = [];
    const m = modal('解答题自评', el('div', {},
      el('p', { style: 'color:var(--ink2);margin-bottom:10px' }, '选择已判分，填空按指定格式匹配。请对照参考答案为每道解答题打分（0 至满分）：'),
      ...solveSec.problems.map(q => {
        const row = el('div', { class: 'form-row' });
        row.append(el('label', { style: 'width:120px' }, `第 ${q.no} 题 (${q.score}分)`));
        const inp = el('input', { type: 'number', min: 0, max: q.score, value: 0 });
        inp.dataset.no = q.no; inp.dataset.max = q.score;
        row.append(inp);
        const view = el('button', { class: 'btn small', onclick: () => showSolution(q) }, '看解析');
        row.append(view);
        m2rows.push(inp);
        return row;
      })),
      [el('button', { class: 'btn primary', onclick: () => { finish(); m.close(); } }, '生成成绩单')]);
    m.mask.addEventListener('click', e => { if (e.target === m.mask) e.stopImmediatePropagation(); }, true);

    function showSolution(q) {
      modal(`第 ${q.no} 题解析`, (() => { const d = el('div', { class: 'md' }); setMd(d, q.solution); return d; })(),
        [el('button', { class: 'btn primary', onclick() { this.closest('.modal-mask').remove(); } }, '关闭')]);
    }

    function finish() {
      const seen = new Set();
      for (const inp of m2rows) {
        const no = inp.dataset.no, max = Number(inp.dataset.max);
        const v = Math.max(0, Math.min(max, Number(inp.value) || 0));
        if (seen.has(no)) continue; seen.add(no);
        perProblem[no] = { ans: state.answers[no] || '', got: v, ref: solveSec.problems.find(x => x.no == no).answer };
        solve += v;
      }
      const score = choice + blank + solve;
      const result = { id: uid(), mockId: mock.id, date: today(), score, choice, blank, solve, durationMin, perProblem };
      delete S.db.mockAttempts[mockId];
      S.mockSave(result);
      showResult(result);
    }

    function showResult(r) {
      main.innerHTML = '';
      main.append(el('div', { class: 'page-head' }, el('h1', {}, `${mock.title} · 成绩单`)));
      const pass = r.score >= 90;
      main.append(el('div', { class: 'card', style: 'text-align:center;margin-bottom:16px' },
        el('div', { style: 'font-size:56px;font-weight:800;font-family:var(--mono);color:' + (pass ? '#16a34a' : '#dc2626') }, String(r.score)),
        el('div', { style: 'font-size:13px;color:var(--ink3)' }, `满分 150 · 用时 ${r.durationMin} 分钟 · 选择 ${r.choice}/50 · 填空 ${r.blank}/30 · 解答 ${r.solve}/70`),
        el('div', { style: 'margin-top:8px;font-size:14px' }, pass ? '💪 保持节奏，继续查漏补缺！' : '📌 把错题加入错题本，针对性回炉！')));
      // 逐题回顾
      const wrap = el('div', {});
      main.append(wrap);
      for (const sec of mock.sections) {
        wrap.append(el('h3', { style: 'margin:14px 0 6px' }, sec.type + '题'));
        for (const q of sec.problems) {
          const rec = r.perProblem[q.no] ?? {};
          const ok = sec.type === '解答' ? (rec.got ?? 0) >= (q.score * 0.8) : rec.got > 0;
          const card = el('div', { class: 'problem-card' });
          card.append(el('div', { class: 'p-head' },
            el('span', { class: 'p-no' }, `第 ${q.no} 题`),
            el('span', { class: 'tag ' + (ok ? 'st-done' : 'st-wrong') }, sec.type === '解答' ? `${rec.got ?? '—'}/${q.score} 分` : `${rec.got ?? 0}/${sec.scoreEach} 分`),
            el('span', { style: 'flex:1' }),
            el('button', { class: 'btn small', onclick: () => S.addMistake({ source: `${mock.title}`, ref: `第${q.no}题`, desc: q.problem }) }, '＋ 收入错题本')));
          const prob = el('div', {}); setMd(prob, q.problem); card.append(prob);
          const myAns = el('div', { style: 'margin-top:6px;font-size:13px' });
          setMd(myAns, `**我的答案：** ${rec.ans || '（未作答）'}　**参考答案：** ${q.answer}`);
          card.append(myAns);
          const fold = el('details', { class: 'fold' }, el('summary', {}, '查看解析'));
          const bd = el('div', { class: 'fold-body' }); setMd(bd, q.solution); fold.append(bd);
          card.append(fold);
          wrap.append(card);
        }
      }
      main.append(el('div', { style: 'text-align:center;margin-top:16px' },
        el('button', { class: 'btn', onclick: () => location.hash = '#/mocks' }, '返回模拟考试'),
        el('button', { class: 'btn primary', onclick: () => location.hash = '#/mistakes' }, '去复习错题')));
    }
  }
}

function normEq(a, b) {
  const n = (s) => String(s ?? '').toLowerCase().replace(/\s|，/g, '').replace(/（/g, '(').replace(/）/g, ')').replace(/[。.;；]$/, '');
  return n(a) === n(b);
}
