// 考纲总览
import { S } from '../store.js';
import { el, setMd, toast } from '../util.js';

const MAS_LABEL = ['未开始', '学习中', '已掌握'];

export async function syllabus(main) {
  const cont = S.content.syllabus;
  let cur = cont.subjects[0].id;
  const tabs = el('div', { class: 'subject-tab' });
  const body = el('div', {});
  main.append(
    el('div', { class: 'page-head' },
      el('h1', {}, '考纲总览'),
      el('span', { class: 'sub' }, `${cont.year} 年考试大纲 · 满分 150 / 180 分钟 · ${cont.structure.map(s => `${s.item} ${s.ratio}`).join('，')}`)),
    el('div', { class: 'warn-box' }, '本页依据 2026 年考纲整理，尚未逐项核对 2027 年正式考纲。'),
    el('div', { class: 'warn-box' }, cont.questionTypes),
    tabs, body);

  const drawTabs = () => {
    tabs.innerHTML = '';
    for (const sub of cont.subjects) {
      const done = sub.chapters.filter(c => (S.db.syllabusMastery[c.id] ?? 0) === 2).length;
      tabs.append(el('span', { class: 'chip' + (cur === sub.id ? ' on' : ''), onclick: () => { cur = sub.id; drawTabs(); drawBody(); } },
        `${sub.name}（${sub.ratio}）${done}/${sub.chapters.length}`));
    }
  };

  const drawBody = () => {
    body.innerHTML = '';
    const sub = cont.subjects.find(s => s.id === cur);
    for (const ch of sub.chapters) {
      const mas = S.db.syllabusMastery[ch.id] ?? 0;
      const card = el('div', { class: 'card', style: 'margin-bottom:14px' });
      card.append(el('div', { style: 'display:flex;align-items:center;gap:10px;flex-wrap:wrap' },
        el('b', { style: 'font-size:15.5px' }, ch.name),
        el('span', { style: 'flex:1' }),
        ...MAS_LABEL.map((lb, i) => el('button', {
          class: 'status-btn' + (mas === i ? ' on' : ''),
          onclick: (ev) => {
            S.db.syllabusMastery[ch.id] = i; S.touch();
            drawBody(); drawTabs();
          },
        }, lb))));
      card.append(el('div', { class: 'divider' }));
      // 考试内容
      const cTitle = el('b', { style: 'color:var(--accent)' }, '考试内容');
      card.append(cTitle);
      const cw = el('div', { style: 'margin-top:4px' });
      setMd(cw, ch.contents.map(c => '- ' + c).join('\n'));
      card.append(cw);
      // 考试要求
      card.append(el('b', { style: 'color:var(--accent2)', style: 'display:block;margin-top:10px;color:var(--accent2)' }, '考试要求'));
      const rw = el('div', {});
      setMd(rw, ch.requirements.map(r => '- ' + r).join('\n'));
      card.append(rw);
      // 关联讲义
      const related = S.lessonList().filter(l => Array.isArray(l.syllabusRef) ? l.syllabusRef.includes(ch.id) : l.syllabusRef === ch.id);
      if (related.length) {
        card.append(el('div', { style: 'margin-top:10px;font-size:13px' },
          el('span', { style: 'color:var(--ink3)' }, '关联讲义：'),
          ...related.map(l => el('a', { href: '#/lessons/' + l.id, style: 'color:var(--accent);margin-right:10px' }, `${l.subtitle} ${l.title}`))));
      }
      body.append(card);
    }
  };

  drawTabs(); drawBody();
}
