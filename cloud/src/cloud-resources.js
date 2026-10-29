import { el } from '../util.js';
import { allLearningLinks } from '../learning-links.js';

export async function resources(main) {
  const card = el('div', { class: 'card' },
    el('h2', {}, '在线拓展资料'),
    el('p', {}, '这些官方课程和可视化讲解可以直接打开，课程为英文。'),
    el('p', {}, '平台已集成 32 讲、随堂练习和模拟卷，可通过课程讲义或知识地球学习。'));
  for (const item of allLearningLinks()) {
    card.append(el('p', {},
      el('a', { href: item.url, target: '_blank', rel: 'noopener noreferrer' }, item.title),
      el('span', { style: 'color:var(--ink3);font-size:12px' }, ' · ' + item.detail)));
  }
  main.append(el('div', { class: 'page-head' }, el('h1', {}, '学习资料')), card,
    el('div', { class: 'card' }, '电脑本地的 PDF 未上传到云端；可在电脑版的本地资料阅读器中继续查看。'));
}
