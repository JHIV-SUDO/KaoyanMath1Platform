// 拓展学习入口：全部指向 App 内部内容（讲义、知识地球、公式、练习），不提供外部学习链接。
// 外部来源（授权仓库、原书 PDF）只作为"来源说明"元数据保留，不承担学习入口功能。
import { S } from './store.js';

const INTERNAL_BY_SUBJECT = {
  gaoshu: [
    { hash: '#/formulas', title: '公式速查 · 高等数学', detail: '按章节检索公式与适用条件' },
    { hash: '#/knowledge', title: '知识地球 · 高数章节', detail: '概念、定理与题型关系' },
    { hash: '#/practice', title: '练习题库 · 高数', detail: '讲义练习与书籍原题' },
  ],
  xiandai: [
    { hash: '#/formulas', title: '公式速查 · 线性代数', detail: '行列式、矩阵、二次型公式' },
    { hash: '#/knowledge', title: '知识地球 · 线代章节', detail: '概念、定理与题型关系' },
    { hash: '#/practice', title: '练习题库 · 线代', detail: '讲义练习与书籍原题' },
  ],
  gailv: [
    { hash: '#/formulas', title: '公式速查 · 概率统计', detail: '分布、数字特征、统计量' },
    { hash: '#/knowledge', title: '知识地球 · 概率章节', detail: '概念、定理与题型关系' },
    { hash: '#/practice', title: '练习题库 · 概率', detail: '讲义练习与书籍原题' },
  ],
};

// 与本讲最相关的 App 内目的地：相邻讲义 + 本学科工具
export function learningLinks(lesson) {
  const same = S.lessonList(lesson.subject);
  const idx = same.findIndex(l => l.id === lesson.id);
  const near = [same[idx - 1], same[idx + 1]].filter(Boolean)
    .map(l => ({ hash: '#/lessons/' + l.id, title: `相邻讲义 · ${l.subtitle || ''}${l.title}`, detail: '继续本学科学习路线' }));
  return [...near, ...(INTERNAL_BY_SUBJECT[lesson.subject] || INTERNAL_BY_SUBJECT.gaoshu)];
}

// 资料阅读器的"学习入口"卡片内容（App 内部导航）
export function inAppLearningEntry() {
  return [
    { hash: '#/lessons', title: '课程讲义', detail: '32 讲：概念、定理、例题与随堂练习' },
    { hash: '#/practice', title: '练习题库', detail: '讲义练习与书籍原题，自动判分' },
    { hash: '#/knowledge', title: '知识地球', detail: '学科 → 章节 → 概念 → 题型关系' },
    { hash: '#/formulas', title: '公式速查', detail: '检索公式、条件与关联例题' },
  ];
}
