// 数据统计
import { S } from '../store.js';
import { el, barChart, pieChart, today } from '../util.js';

export async function stats(main) {
  const db = S.db;
  const lessons = S.lessonList();
  // 近30天时长
  const last30 = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    last30.push({ label: `${d.getMonth() + 1}/${d.getDate()}`, value: db.logs[today(d)]?.minutes || 0 });
  }
  const totalMin = Object.values(db.logs).reduce((a, x) => a + (x.minutes || 0), 0);

  // 讲义进度（按科目）
  const subjProg = ['gaoshu', 'xiandai', 'gailv'].map(s => {
    const ls = lessons.filter(l => l.subject === s);
    const done = ls.filter(l => db.lessonStatus[l.id]?.status === 2).length;
    const learning = ls.filter(l => db.lessonStatus[l.id]?.status === 1).length;
    return { label: s, done, learning, total: ls.length };
  });
  const names = { gaoshu: '高等数学', xiandai: '线性代数', gailv: '概率统计' };

  // 练习正确率（按科目）
  const exBySub = { gaoshu: [0, 0], xiandai: [0, 0], gailv: [0, 0] }; // [right, wrong]
  for (const L of lessons) for (const ex of L.exercises || []) {
    const r = db.practice[S.practiceKey(L.id, ex.no)]?.result;
    if (r === 'right') exBySub[L.subject][0]++;
    else if (r === 'wrong') exBySub[L.subject][1]++;
  }

  // 错题原因
  const reasonCnt = {};
  for (const m of db.mistakes) reasonCnt[m.reason] = (reasonCnt[m.reason] || 0) + 1;

  // 考纲掌握
  const masCnt = { '未开始': 0, '学习中': 0, '已掌握': 0 };
  for (const sub of S.content.syllabus.subjects) for (const ch of sub.chapters) {
    masCnt[['未开始', '学习中', '已掌握'][db.syllabusMastery[ch.id] ?? 0]]++;
  }

  // 模拟考成绩
  const mockScores = db.mockResults.slice(-10).map(r => ({ label: r.date.slice(5), value: r.score }));

  main.append(el('div', { class: 'page-head' },
    el('h1', {}, '数据统计'),
    el('span', { class: 'sub' }, `累计学习 ${Math.floor(totalMin / 60)} 小时 ${totalMin % 60} 分钟`)));

  main.append(el('div', { class: 'grid c2' },
    el('div', { class: 'card' }, el('h3', {}, el('span', { class: 'dot' }), '近 30 天学习时长（分钟）'),
      el('div', { class: 'chart-wrap', html: barChart(last30, { w: 640, h: 200 }) })),
    el('div', { class: 'card' }, el('h3', {}, el('span', { class: 'dot' }), '考纲章节掌握情况'),
      el('div', { class: 'chart-wrap', html: pieChart(Object.entries(masCnt).map(([label, value]) => ({ label, value }))) })),
    el('div', { class: 'card' }, el('h3', {}, el('span', { class: 'dot' }), '随堂练习正确率（按科目）'),
      el('div', { style: 'display:flex;flex-direction:column;gap:12px;margin-top:6px' },
        ...Object.entries(exBySub).map(([s, [r, w]]) => {
          const tot = r + w;
          return el('div', {},
            el('div', { style: 'display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px' },
              el('span', {}, names[s]), el('span', { style: 'color:var(--ink3)' }, tot ? `${r}/${tot} · ${Math.round(100 * r / tot)}%` : '未开始')),
            el('div', { class: 'bar' }, el('i', { style: `width:${tot ? Math.round(100 * r / tot) : 0}%` })));
        }))),
    el('div', { class: 'card' }, el('h3', {}, el('span', { class: 'dot' }), '错题原因分布'),
      el('div', { class: 'chart-wrap', html: pieChart(Object.entries(reasonCnt).map(([label, value]) => ({ label, value }))) }))));

  // 讲义进度明细
  main.append(el('div', { class: 'card', style: 'margin-top:16px' },
    el('h3', {}, el('span', { class: 'dot' }), '讲义进度明细'),
    el('table', {},
      el('thead', {}, el('tr', {}, el('th', {}, '科目'), el('th', {}, '已学'), el('th', {}, '学习中'), el('th', {}, '总数'), el('th', {}, '进度'))),
      el('tbody', {}, ...subjProg.map(s => el('tr', {},
        el('td', {}, names[s.label]),
        el('td', {}, String(s.done)),
        el('td', {}, String(s.learning)),
        el('td', {}, String(s.total)),
        el('td', { style: 'min-width:160px' }, el('div', { class: 'bar' }, el('i', { style: `width:${s.total ? Math.round(100 * (s.done + 0.5 * s.learning) / s.total) : 0}%` })))))))));

  if (mockScores.length) {
    main.append(el('div', { class: 'card', style: 'margin-top:16px' },
      el('h3', {}, el('span', { class: 'dot' }), '模拟考成绩走势（满分150）'),
      el('div', { class: 'chart-wrap', html: barChart(mockScores, { w: 640, h: 200, color: '#7c3aed' }) })));
  }
}
