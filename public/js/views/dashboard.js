// 仪表盘
import { S } from '../store.js';
import { el, ring, daysBetween, today, barChart, setMd, toast, fmtDate } from '../util.js';

export async function dashboard(main) {
  main.replaceChildren();
  const db = S.db;
  const days = Math.max(0, daysBetween(today(), db.settings.examDate));

  // 各项进度
  const lessons = S.lessonList();
  const learned = lessons.filter(l => (db.lessonStatus[l.id]?.status ?? 0) === 2).length;
  const learning = lessons.filter(l => (db.lessonStatus[l.id]?.status ?? 0) === 1).length;
  const lessonExercises = lessons.reduce((a, l) => a + (l.exercises?.length || 0), 0);
  const bookEntries = S.content.bookQuestionCount ?? S.content.bookQuestions?.length ?? 0;
  const totalEx = lessonExercises + bookEntries;
  const doneEx = Object.values(db.practice).filter(p => p.result).length;
  const planTasks = db.plan ? db.plan.phases.flatMap(p => p.tasks) : [];
  const planDone = planTasks.filter(t => t.done).length;
  const dueM = S.dueMistakes();

  // 近14天学习时长
  const last14 = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const iso = today(d);
    last14.push({ label: `${d.getMonth() + 1}/${d.getDate()}`, value: db.logs[iso]?.minutes || 0 });
  }
  const todayMin = db.logs[today()]?.minutes || 0;
  const weekMin = last14.slice(-7).reduce((a, x) => a + x.value, 0);
  // 连续打卡
  let streak = 0;
  for (let i = 0; ; i++) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const iso = today(d);
    if (db.logs[iso]?.minutes > 0) streak++; else if (i > 0) break; else break;
  }
  // 正确率
  const pVals = Object.values(db.practice).filter(p => p.result);
  const rightN = pVals.filter(p => p.result === 'right').length;
  const acc = pVals.length ? Math.round(100 * rightN / pVals.length) : null;

  // 今日计划任务
  const t = today();
  const todayTasks = planTasks.filter(task => task.date === t && !task.done);
  const overdue = planTasks.filter(task => task.date < t && !task.done);

  const quickItems = [
    { icon: '📖', label: '继续学习讲义', hash: '#/lessons', desc: learning ? `${learning} 讲进行中` : `${lessons.length} 讲可学` },
    { icon: '✏️', label: '去刷题', hash: '#/practice', desc: `${lessonExercises} 道随堂练习 · ${bookEntries} 条书籍题库` },
    { icon: '⏱️', label: '模拟考试', hash: '#/mocks', desc: `${S.content.mocks.length} 套全真模拟卷` },
    { icon: '🔁', label: '错题复习', hash: '#/mistakes', desc: dueM.length ? `今日待复习 ${dueM.length} 题` : '暂无到期错题' },
  ];

  if (!window.CloudPlatform) {
    main.append(el('div', { class: 'card', style: 'margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap' },
      el('div', {}, el('b', {}, '手机与电脑同步学习'),
        el('div', { style: 'color:var(--ink2);font-size:13px;margin-top:4px' }, '当前是本机记录。进入云端并在两台设备登录同一账号后同步。')),
      el('a', { class: 'btn primary', href: 'https://app-2uzt75.v2.appdeploy.ai/', target: window.AndroidPlatform ? '_self' : '_blank', rel: 'noopener noreferrer' }, '进入云端学习')));
  }

  main.append(
    // 头部横幅
    el('div', { class: 'card', style: 'background:linear-gradient(120deg,#1c2440,#2b3a6b);color:#fff;border:none;margin-bottom:16px;display:flex;align-items:center;gap:20px;flex-wrap:wrap' },
      el('div', { style: 'flex:1;min-width:240px' },
        el('h1', { style: 'font-size:21px;margin-bottom:4px' }, `你好，${db.settings.nickname} 👋`),
        el('div', { style: 'opacity:.75;font-size:13px' }, `坚持每天进步，数学一没有奇迹只有轨迹。`)),
      el('div', { style: 'text-align:center;padding:0 18px' },
        el('div', { style: 'font-size:12px;opacity:.7' }, '距离初试'),
        el('div', { style: 'font-size:40px;font-weight:800;font-family:var(--mono);line-height:1.1' }, String(days)),
        el('div', { style: 'font-size:12px;opacity:.7' }, `天 · ${db.settings.examDate}`)),
      el('div', { style: 'text-align:center;padding:0 18px;border-left:1px solid rgba(255,255,255,.15)' },
        el('div', { style: 'font-size:12px;opacity:.7' }, '今日学习'),
        el('div', { style: 'font-size:40px;font-weight:800;font-family:var(--mono);line-height:1.1' }, String(todayMin)),
        el('div', { style: 'font-size:12px;opacity:.7' }, `分钟 / 目标 ${db.settings.dailyTargetMinutes}`)),
    ),
    // 快捷入口
    el('div', { class: 'grid c4' }, ...quickItems.map(q =>
      el('div', { class: 'card', style: 'cursor:pointer', onclick: () => location.hash = q.hash },
        el('div', { style: 'font-size:22px' }, q.icon),
        el('div', { style: 'font-weight:700;margin-top:6px' }, q.label),
        el('div', { style: 'color:var(--ink3);font-size:12px' }, q.desc)))),
    el('div', { class: 'grid c3', style: 'margin-top:16px' },
      // 讲义进度
      el('div', { class: 'card', style: 'display:flex;gap:16px;align-items:center' },
        el('div', { html: ring(lessons.length ? (learned + learning * 0.5) / lessons.length : 0) }),
        el('div', { class: 'kpi' },
          el('div', { class: 'k' }, '讲义课程进度'),
          el('div', { class: 'v' }, `${learned + learning * 0.5 < 0 ? 0 : Math.round((learned + learning * 0.5) * 10) / 10}/${lessons.length} 讲`),
          el('div', { style: 'font-size:12px;color:var(--ink3)' }, `已学 ${learned} · 进行中 ${learning}`),
          el('button', { class: 'btn small', style: 'margin-top:6px', onclick: () => location.hash = '#/lessons' }, '进入课程'))),
      // 练习进度
      el('div', { class: 'card', style: 'display:flex;gap:16px;align-items:center' },
        el('div', { html: ring(totalEx ? doneEx / totalEx : 0) }),
        el('div', { class: 'kpi' },
          el('div', { class: 'k' }, '练习完成度'),
          el('div', { class: 'v' }, `${doneEx}/${totalEx} 题`),
          el('div', { style: 'font-size:12px;color:var(--ink3)' }, acc === null ? '还没有做题记录' : `正确率 ${acc}%`),
          el('button', { class: 'btn small', style: 'margin-top:6px', onclick: () => location.hash = '#/practice' }, '开始练习'))),
      // 计划进度
      el('div', { class: 'card', style: 'display:flex;gap:16px;align-items:center' },
        el('div', { html: ring(planTasks.length ? planDone / planTasks.length : 0) }),
        el('div', { class: 'kpi' },
          el('div', { class: 'k' }, '学习计划完成'),
          el('div', { class: 'v' }, `${planDone}/${planTasks.length} 项`),
          el('div', { style: 'font-size:12px;color:var(--ink3)' }, db.plan ? '' : '尚未生成计划'),
          el('button', { class: 'btn small', style: 'margin-top:6px', onclick: () => location.hash = '#/plan' }, db.plan ? '查看计划' : '生成计划')))),
    el('div', { class: 'grid c2', style: 'margin-top:16px' },
      // 学习时长图
      el('div', { class: 'card' },
        el('h3', {}, el('span', { class: 'dot' }), '近 14 天学习时长'),
        el('div', { style: 'font-size:12px;color:var(--ink3);margin-bottom:8px' }, `本周 ${weekMin} 分钟 · 连续学习 ${streak} 天`),
        el('div', { class: 'chart-wrap', html: barChart(last14, { w: 620, h: 190 }) })),
      // 今日待办
      el('div', { class: 'card' },
        el('h3', {}, el('span', { class: 'dot' }), '今日待办'),
        todayTasks.length === 0 && overdue.length === 0
          ? el('div', { class: 'empty' }, db.plan ? '今天没有计划任务，自由安排 💪' : '还没有生成学习计划')
          : el('div', {},
            ...overdue.slice(0, 5).map(task => el('div', { class: 'task-row done' },
              el('input', { type: 'checkbox', onchange: () => { task.done = true; S.touch(); dashboard(main); } }),
              el('span', { class: 't-title' }, task.title),
              el('span', { class: 't-date' }, `逾期 ${fmtDate(task.date)}`))),
            ...todayTasks.map(task => el('div', { class: 'task-row' },
              el('input', { type: 'checkbox', onchange: () => { task.done = true; S.touch(); location.hash = task.ref ? task.ref : '#/plan'; } }),
              el('span', { class: 't-title' }, task.title),
              el('span', { class: 't-date' }, '今天')))),
        el('div', { class: 'divider' }),
        el('h3', { style: 'margin:8px 0' }, el('span', { class: 'dot' }), '快速记录学习时长'),
        quickLog())));

  function quickLog() {
    const wrap = el('div', { style: 'display:flex;gap:8px;flex-wrap:wrap;align-items:center' });
    const input = el('input', { type: 'number', placeholder: '分钟', style: 'width:90px', value: 60 });
    const content = el('input', { placeholder: '内容（可选），如：高数第1讲+例题', style: 'flex:1;min-width:180px' });
    const btn = el('button', { class: 'btn primary small', onclick: () => {
      const m = Number(input.value) || 0;
      if (m <= 0) return toast('请输入有效分钟数', false);
      S.logMinutes(m, content.value); toast(`已记录 ${m} 分钟`); dashboard(main);
    } }, '打卡');
    wrap.append(input, content, btn);
    return wrap;
  }
}
