// 学习计划：根据讲义与剩余天数自动生成三阶段计划
import { S } from '../store.js';
import { el, toast, today, daysBetween, addDays, fmtDate } from '../util.js';

export async function plan(main) {
  main.replaceChildren();
  const db = S.db;
  main.append(el('div', { class: 'page-head' },
    el('h1', {}, '学习计划'),
    el('span', { class: 'sub' }, '依据讲义课程与初试日期自动排期，可手动增删任务')));

  const bar = el('div', { style: 'display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;align-items:center' },
    el('label', { style: 'font-size:13px;color:var(--ink2)' }, '开始日期'),
    el('input', { type: 'date', id: 'plan-start', value: today() }),
    el('label', { style: 'font-size:13px;color:var(--ink2)' }, '初试日期'),
    el('input', { type: 'date', id: 'plan-exam', value: db.settings.examDate }),
    el('button', { class: 'btn primary', onclick: generate }, db.plan ? '🔄 重新生成计划' : '✨ 生成默认计划'),
    db.plan ? el('button', { class: 'btn bad', onclick: () => { if (confirm('清空计划？')) { db.plan = null; S.touch(); plan(main); } } }, '清空计划') : null);
  main.append(bar);

  if (!db.plan) {
    main.append(el('div', { class: 'card empty' }, '点击“生成默认计划”，将自动把 32 讲课程、模拟卷与真题复习排入基础/强化/冲刺三阶段。'));
    return;
  }
  render(main);

  function generate() {
    const start = document.getElementById('plan-start').value;
    const exam = document.getElementById('plan-exam').value;
    if (!start || !exam || daysBetween(start, exam) < 1) return toast('初试日期必须晚于开始日期', false);
    if (db.plan && !confirm('重新生成会替换现有计划，继续吗？')) return;
    const totalDays = Math.max(3, daysBetween(start, exam));
    // 阶段划分
    let phases;
    if (totalDays > 150) phases = [['基础阶段', 0.4], ['强化阶段', 0.4], ['冲刺阶段', 0.2]];
    else if (totalDays > 90) phases = [['基础阶段', 0.3], ['强化阶段', 0.45], ['冲刺阶段', 0.25]];
    else if (totalDays > 45) phases = [['强化阶段', 0.55], ['冲刺阶段', 0.45]];
    else phases = [['冲刺阶段', 1]];
    const lessons = S.lessonList(null);
    const baseTasks = lessons.map(l => ({ title: `${l.subtitle} ${l.title}`, hours: l.hours, ref: '#/lessons/' + l.id, subject: l.subject }));
    const sprintTasks = [
      ...S.content.mocks.map(m => ({ title: `模拟考：${m.title}（180分钟）`, hours: 3, ref: '#/mocks/' + m.id })),
      { title: '近十年真题限时模拟（每天一套，按真题页排期）', hours: 20, ref: '#/exams' },
      { title: '公式手册过三遍', hours: 3, ref: '#/formulas' },
      { title: '错题本清零复盘', hours: 6, ref: '#/mistakes' },
      { title: '1000题二刷错题', hours: 10, ref: '#/drill' },
    ];
    db.plan = { createdAt: today(), examDate: exam, phases: [] };
    let cursor = new Date(start + 'T00:00:00');
    const phaseDefs = [];
    let acc = 0;
    for (const [name, frac] of phases) {
      const d = Math.max(2, Math.round(totalDays * frac));
      phaseDefs.push({ name, start: new Date(cursor), end: new Date(cursor.getTime() + (d - 1) * 86400000) });
      cursor = new Date(cursor.getTime() + d * 86400000);
    }
    // 修正最后阶段结束到 exam 前一天
    phaseDefs[phaseDefs.length - 1].end = new Date(new Date(exam + 'T00:00:00') - 86400000);
    // 讲义任务按科目顺序轮转分配到前两个阶段；冲刺任务放最后阶段
    const studyPhaseIdx = phaseDefs.length - 1; // 冲刺
    const pool = [...baseTasks];
    // 总小时 → 每天任务量
    const assign = (tasks, phase, subjectRound = true) => {
      const days = Math.max(1, Math.round((phase.end - phase.start) / 86400000) + 1);
      const totalH = tasks.reduce((a, t) => a + t.hours, 0);
      const perDay = totalH / days;
      const out = [];
      let pi = 0, usedH = 0, dayIdx = 0;
      const dayPlan = Array.from({ length: days }, () => ({ items: [], hours: 0 }));
      for (const t of tasks) {
        // 找到剩余容量最接近 perDay 的天（简单顺序填装）
        while (dayIdx < days && dayPlan[dayIdx].hours >= perDay * 1.35) dayIdx++;
        const di = Math.min(dayIdx, days - 1);
        dayPlan[di].items.push(t);
        dayPlan[di].hours += t.hours;
      }
      dayPlan.forEach((dp, i) => {
        if (!dp.items.length) return;
        const date = addDays(today(phase.start), i);
        out.push({
          id: 't' + Math.random().toString(36).slice(2, 8),
          title: dp.items.map(x => x.title).join(' ＋ '),
          date, done: false,
          ref: dp.items[0].ref,
        });
      });
      return out;
    };
    const phasesOut = phaseDefs.map((pd, i) => ({ name: pd.name, start: today(pd.start), end: today(pd.end), tasks: [] }));
    if (phaseDefs.length >= 3) {
      const n1 = Math.round(pool.length * 0.45), n2 = pool.length - n1;
      phasesOut[0].tasks = assign(pool.slice(0, n1), phaseDefs[0]);
      phasesOut[1].tasks = assign(pool.slice(n1), phaseDefs[1]);
      phasesOut[2].tasks = assign(sprintTasks, phaseDefs[2]);
    } else if (phaseDefs.length === 2) {
      const n1 = Math.round(pool.length * 0.6);
      phasesOut[0].tasks = assign(pool.slice(0, n1), phaseDefs[0]);
      phasesOut[1].tasks = assign([...pool.slice(n1), ...sprintTasks], phaseDefs[1]);
    } else {
      phasesOut[0].tasks = assign([...pool, ...sprintTasks], phaseDefs[0]);
    }
    db.plan.phases = phasesOut;
    S.touch();
    toast('计划已生成');
    plan(main);
  }
}

async function render(main) {
  main.querySelectorAll('.phase-card, .plan-today').forEach(n => n.remove());
  const db = S.db;
  const t = today();
  // 今日任务横幅
  const todayTasks = db.plan.phases.flatMap(p => p.tasks).filter(x => x.date === t);
  if (todayTasks.length) {
    main.append(el('div', { class: 'today-flag plan-today' },
      el('b', {}, '📌 今天的任务：'),
      ...todayTasks.map(x => el('span', { style: 'margin-left:10px' },
        el('input', { type: 'checkbox', checked: x.done, onchange: () => { x.done = !x.done; S.touch(); render(main); } }), ' ',
        el('a', { href: x.ref || '#/plan', style: x.done ? 'text-decoration:line-through;color:var(--ink3)' : '' }, x.title)))));
  }
  const cls = ['', 'p2', 'p3'];
  db.plan.phases.forEach((ph, i) => {
    const done = ph.tasks.filter(x => x.done).length;
    const card = el('div', { class: `card phase-card ${cls[i % 3]}` });
    card.append(el('h3', {}, `${ph.name}`,
      el('span', { style: 'font-size:12px;color:var(--ink3);font-weight:400' }, `　${ph.start} ~ ${ph.end}`),
      el('span', { style: 'flex:1' }),
      el('span', { style: 'font-size:12.5px;color:var(--ink2)' }, `${done}/${ph.tasks.length} 完成`)));
    card.append(el('div', { class: 'bar', style: 'margin-bottom:10px' }, el('i', { style: `width:${ph.tasks.length ? Math.round(100 * done / ph.tasks.length) : 0}%` })));
    for (const task of ph.tasks) {
      card.append(el('div', { class: 'task-row' + (task.done ? ' done' : '') },
        el('input', { type: 'checkbox', checked: !!task.done, onchange: () => { task.done = !task.done; S.touch(); render(main); } }),
        el('a', { class: 't-title', href: task.ref || '#/plan', style: 'color:inherit;text-decoration:none' }, task.title),
        el('span', { class: 't-date' }, fmtDate(task.date)),
        el('button', { class: 'btn small', title: '删除任务', onclick: () => { ph.tasks.splice(ph.tasks.indexOf(task), 1); S.touch(); render(main); } }, '×')));
    }
    // 添加自定义任务
    const inp = el('input', { placeholder: '添加自定义任务，回车确认', style: 'margin-top:8px;width:100%' });
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter' && inp.value.trim()) {
        ph.tasks.push({ id: 'c' + Math.random().toString(36).slice(2, 8), title: inp.value.trim(), date: ph.start, done: false, ref: '' });
        S.touch(); render(main);
      }
    });
    card.append(inp);
    main.append(card);
  });
}
