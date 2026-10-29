// 公式速查
import { S } from '../store.js';
import { el, setMd } from '../util.js';

export async function formulas(main) {
  const groups = S.content.formulas.groups;
  let cur = 'all';
  const tabs = el('div', { class: 'subject-tab' });
  const body = el('div', { class: 'grid c2' });
  main.append(
    el('div', { class: 'page-head' },
      el('h1', {}, '公式速查'),
      el('span', { class: 'sub' }, '三大科目核心公式 · 点击分类筛选 · 考前快速过一遍')),
    tabs, body);

  const drawTabs = () => {
    tabs.innerHTML = '';
    const opts = [['all', '全部'], ['gaoshu', '高等数学'], ['xiandai', '线性代数'], ['gailv', '概率统计']];
    for (const [k, v] of opts) {
      tabs.append(el('span', { class: 'chip' + (cur === k ? ' on' : ''), onclick: () => { cur = k; drawTabs(); drawBody(); } }, v));
    }
  };
  const drawBody = () => {
    body.innerHTML = '';
    for (const g of groups) {
      if (cur !== 'all' && g.subject !== cur) continue;
      const card = el('div', { class: 'card' });
      card.append(el('h3', {}, el('span', { class: 'dot' }), g.name));
      for (const it of g.items) {
        const box = el('div', { style: 'margin:10px 0' });
        const t = el('div', { style: 'font-size:12.5px;color:var(--ink3)' }, it.title);
        const tex = el('div', {});
        setMd(tex, it.tex);
        box.append(t, tex);
        card.append(box);
      }
      body.append(card);
    }
  };
  drawTabs(); drawBody();
}
