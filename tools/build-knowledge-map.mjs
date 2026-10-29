#!/usr/bin/env node
// 构建 W06 立体知识架构数据层：data/seed/knowledge-map.js
// 读取 data/lessons/*.js、data/seed/syllabus.js、data/seed/repo-notes.js、书籍题种子，
// 确定性生成 { entities, edges }（无时间戳、排序固定 → 可重跑且字节级幂等）。
//
// 关系依据（均为标准教学顺序或数据中的真实文本，不编造内容）：
// - prerequisite 章节链：考研数学一考纲章节编号与同济版教材顺序（极限先于微分、微分先于积分等）。
// - prerequisite 概念/定理链：引用讲义中真实存在的 (讲id, kind, name)，按公认教学先后排列。
// - applies：方法/定理 → 题型，条件 = 讲次相关 + 主题词命中（主题词表见 QTYPE_RULES）。
// - cross：跨学科且确定性高的联系（雅可比行列式、概率密度积分、依概率收敛等），逐条注明依据。
import { createHash } from 'node:crypto';
import { readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sha1 = s => createHash('sha1').update(s, 'utf8').digest('hex').slice(0, 8);
const SUBJECT_IDS = ['gaoshu', 'xiandai', 'gailv'];

async function importSeed(rel) {
  return (await import(pathToFileURL(path.join(ROOT, 'data', rel)).href)).default;
}

/* ---------------- 文本工具：取首段 ≤160 字（摘要一律来自真实源文本） ---------------- */
function firstPara(raw, cap = 160) {
  const text = String(raw ?? '').trim();
  if (!text) return '';
  const paras = text.split(/\n{2,}/).map(s => s.trim()).filter(Boolean);
  let p = (paras[0] ?? text)
    .replace(/^\s*[-*]\s+/gm, '')
    .replace(/\s*\n\s*/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
  let out = p.length > cap ? p.slice(0, cap).replace(/[$([{、，,:：;；-]+$/, '').trimEnd() + '…' : p;
  if (((out.match(/\$/g) || []).length) % 2 === 1) {
    const i = out.lastIndexOf('$');
    out = out.slice(0, i).trimEnd().replace(/[$([{、，,:：;；-]+$/, '') + '…';
  }
  return out;
}

/* ---------------- 读取源数据 ---------------- */
const lessons = [];
for (const f of readdirSync(path.join(ROOT, 'data', 'lessons')).filter(f => f.endsWith('.js') && !f.startsWith('_')).sort()) {
  const L = await importSeed('lessons/' + f);
  if (L?.id) lessons.push(L);
}
if (lessons.length !== 32) throw new Error(`期望 32 讲，读到 ${lessons.length}`);
const syllabus = await importSeed('seed/syllabus.js');
const repoNotes = await importSeed('seed/repo-notes.js');
const bookQuestions = [...(await importSeed('seed/book-questions.js')), ...(await importSeed('seed/github-book-questions.js'))];

const lessonsBySubject = Object.fromEntries(SUBJECT_IDS.map(s => [s, lessons.filter(l => l.subject === s)]));
const chapterById = new Map();
for (const s of syllabus.subjects) for (const c of s.chapters) chapterById.set(c.id, { subject: s, chapter: c });
const refsOf = lesson => (Array.isArray(lesson.syllabusRef) ? lesson.syllabusRef : [lesson.syllabusRef]).filter(Boolean);

/* ---------------- 实体 ---------------- */
const entities = [];
const idOf = new Map(); // 解析键 -> 实体 id

// 1) 学科（来自考纲 syllabus，摘要由考纲结构数据组成）
for (const s of syllabus.subjects) {
  const group = lessonsBySubject[s.id] ?? [];
  const structure = syllabus.structure?.find(x => x.item === s.name);
  entities.push({
    id: 'k-subject-' + s.id,
    kind: 'subject',
    name: s.name,
    subject: s.id,
    lessons: group.map(l => l.id),
    summary: `考研数学一三大科目之一${structure ? `（${structure.ratio}）` : ''}；考纲共 ${s.chapters.length} 章，从「${s.chapters[0]?.name ?? ''}」到「${s.chapters[s.chapters.length - 1]?.name ?? ''}」。`,
    source: 'data/seed/syllabus.js',
  });
}

// 2) 考纲章节（summary 取考纲 contents 首段）
for (const s of syllabus.subjects) {
  for (const c of s.chapters) {
    entities.push({
      id: 'k-chapter-' + c.id,
      kind: 'chapter',
      name: c.name,
      subject: s.id,
      lessons: (lessonsBySubject[s.id] ?? []).filter(l => refsOf(l).includes(c.id)).map(l => l.id),
      summary: firstPara(c.contents?.[0] ?? ''),
      source: 'data/seed/syllabus.js',
    });
  }
}

// 3) 概念 / 定理：直接来自每讲 concepts/theorems，id = 讲id + sha1(讲id|名称) 前 8 位
for (const lesson of lessons) {
  for (const c of lesson.concepts ?? []) {
    const id = `k-concept-${lesson.id}-${sha1(lesson.id + '|' + c.name)}`;
    idOf.set(`${lesson.id}|concept|${c.name}`, id);
    entities.push({ id, kind: 'concept', name: c.name, subject: lesson.subject, lessons: [lesson.id], summary: firstPara(c.body), source: `data/lessons/${lesson.id}.js` });
  }
  for (const t of lesson.theorems ?? []) {
    const id = `k-theorem-${lesson.id}-${sha1(lesson.id + '|' + t.name)}`;
    idOf.set(`${lesson.id}|theorem|${t.name}`, id);
    entities.push({ id, kind: 'theorem', name: t.name, subject: lesson.subject, lessons: [lesson.id], summary: firstPara(t.statement), matchText: [t.name, t.statement, t.conditions, t.remark].filter(Boolean).join(' '), source: `data/lessons/${lesson.id}.js` });
  }
}

// 4) 方法：repo-notes 中 kind==='方法' 的笔记按 (subject, topic) 聚合，同名合并、讲次取并集
{
  const groups = new Map();
  for (const n of repoNotes) {
    if (n.kind !== '方法') continue;
    const key = n.subject + '|' + n.topic;
    const g = groups.get(key) ?? { subject: n.subject, topic: n.topic, lessons: new Set(), notes: [] };
    for (const l of n.relatedLessons ?? []) g.lessons.add(l);
    g.notes.push(n);
    groups.set(key, g);
  }
  for (const g of [...groups.values()].sort((a, b) => (a.subject + a.topic < b.subject + b.topic ? -1 : 1))) {
    if (!g.lessons.size) continue; // 无关联讲次的方法组无法导航，跳过
    const first = g.notes[0];
    entities.push({
      id: `k-method-${g.subject}-${sha1(g.subject + '|' + g.topic)}`,
      kind: 'method',
      name: g.topic,
      subject: g.subject,
      lessons: [...g.lessons].sort(),
      summary: firstPara(first.text),
      matchText: g.notes.map(n => n.topic + ' ' + String(n.text || '').slice(0, 600)).join(' '),
      source: `data/seed/repo-notes.js（kind=方法 × ${g.notes.length} 条）`,
    });
  }
}

/* ---------------- 题型规则表（主题词全部用于匹配讲义例题/练习与书籍题的真实文本） ---------------- */
const QTYPE_RULES = [
  // 高等数学
  { key: 'limit-calc', name: '极限计算', subject: 'gaoshu', chapters: ['hm1'], kw: ['洛必达', '等价无穷小', '重要极限', '夹逼', '极限', '无穷小'] },
  { key: 'continuity', name: '间断点与连续性讨论', subject: 'gaoshu', chapters: ['hm1'], kw: ['间断', '连续', '分段'] },
  { key: 'derivative-concept', name: '导数定义与可导性', subject: 'gaoshu', chapters: ['hm2'], kw: ['可导', '导数的定义', '导数定义', '切线', '法线', '单侧导数', '微分'] },
  { key: 'derivative-calc', name: '导数与高阶导数计算', subject: 'gaoshu', chapters: ['hm2'], kw: ['求导', '阶导数', '隐函数', '参数方程', '莱布尼茨', '对数求导'] },
  { key: 'shape-analysis', name: '单调性、极值、凹凸与渐近线', subject: 'gaoshu', chapters: ['hm2'], kw: ['单调', '极值', '最值', '驻点', '凹凸', '拐点', '渐近线', '曲率'] },
  { key: 'mean-value', name: '中值定理与存在性证明', subject: 'gaoshu', chapters: ['hm2'], kw: ['中值定理', '罗尔', '拉格朗日', '柯西', '辅助函数', '存在.*使'] },
  { key: 'taylor', name: '泰勒公式展开与近似', subject: 'gaoshu', chapters: ['hm2'], kw: ['泰勒', '麦克劳林', '展开'] },
  { key: 'inequality', name: '微分与积分不等式证明', subject: 'gaoshu', chapters: ['hm2', 'hm3'], kw: ['不等式'] },
  { key: 'integral-calc', name: '积分计算（换元与分部）', subject: 'gaoshu', chapters: ['hm3'], kw: ['换元', '分部', '计算.{0,8}积分', '求.{0,8}积分', '有理函数', '根式'] },
  { key: 'improper', name: '反常积分判敛与计算', subject: 'gaoshu', chapters: ['hm3'], kw: ['反常积分', '广义积分', '无穷区间', '瑕', 'p 积分'] },
  { key: 'integral-geometry', name: '定积分几何应用（面积/体积/弧长）', subject: 'gaoshu', chapters: ['hm3'], kw: ['面积', '旋转体', '弧长', '体积', '形心'] },
  { key: 'integral-physics', name: '定积分物理应用', subject: 'gaoshu', chapters: ['hm3'], kw: ['做功', '压力', '引力', '质心', '转动惯量', '平均值'] },
  { key: 'partial', name: '多元函数偏导与全微分', subject: 'gaoshu', chapters: ['hm5'], kw: ['偏导', '全微分', '可微', '方向导数', '梯度'] },
  { key: 'multivar-extremum', name: '多元函数极值与条件极值', subject: 'gaoshu', chapters: ['hm5'], kw: ['极值', '条件极值', '拉格朗日乘数'] },
  { key: 'double-integral', name: '二重积分计算与换序', subject: 'gaoshu', chapters: ['hm6'], kw: ['二重积分', '累次积分', '积分次序', '换序', '极坐标'] },
  { key: 'ode', name: '微分方程求解', subject: 'gaoshu', chapters: ['hm8'], kw: ['微分方程', '通解', '特解', '伯努利', '特征方程', '欧拉', '降阶'] },
  { key: 'series', name: '级数敛散性判别', subject: 'gaoshu', chapters: ['hm7'], kw: ['级数', '收敛', '发散', '敛散'] },
  { key: 'power-series', name: '幂级数与傅里叶级数', subject: 'gaoshu', chapters: ['hm7'], kw: ['幂级数', '和函数', '收敛半径', '收敛域', '傅里叶'] },
  { key: 'space-geometry', name: '向量与空间解析几何（数一）', subject: 'gaoshu', chapters: ['hm4'], kw: ['向量', '平面方程', '直线方程', '夹角', '距离', '曲面', '投影', '点积', '叉积'] },
  // 线性代数
  { key: 'determinant', name: '行列式计算与按行列展开', subject: 'xiandai', chapters: ['la1'], kw: ['行列式', '逆序', '余子式', '代数余子式', '克拉默'] },
  { key: 'matrix', name: '矩阵运算、逆矩阵与秩', subject: 'xiandai', chapters: ['la2'], kw: ['矩阵', '可逆', '逆矩阵', '伴随', '初等变换', '秩', '分块'] },
  { key: 'vector-rank', name: '向量组线性相关性与极大无关组', subject: 'xiandai', chapters: ['la3'], kw: ['线性相关', '线性无关', '线性组合', '极大线性无关', '向量组'] },
  { key: 'linear-system', name: '线性方程组解的判定与求解', subject: 'xiandai', chapters: ['la4'], kw: ['方程组', '基础解系', '通解', '公共解', '同解', '增广矩阵'] },
  { key: 'eigen', name: '特征值、特征向量与相似对角化', subject: 'xiandai', chapters: ['la5'], kw: ['特征值', '特征向量', '相似', '对角化'] },
  { key: 'quadratic', name: '二次型化标准形与正定性', subject: 'xiandai', chapters: ['la6'], kw: ['二次型', '标准形', '规范形', '正定', '合同', '正交变换'] },
  // 概率统计
  { key: 'event-prob', name: '随机事件与概率计算', subject: 'gailv', chapters: ['pr1'], kw: ['概率', '古典概型', '几何概型', '条件概率', '独立', '全概率', '贝叶斯'] },
  { key: 'rv-distribution', name: '随机变量及其分布', subject: 'gailv', chapters: ['pr2'], kw: ['分布函数', '分布律', '概率密度', '随机变量', '正态', '泊松', '二项', '指数分布', '均匀分布'] },
  { key: 'joint-distribution', name: '多维随机变量及其独立性', subject: 'gailv', chapters: ['pr3'], kw: ['联合', '边缘', '条件分布', '独立性', '二维'] },
  { key: 'numeric-expect', name: '期望方差与协方差计算', subject: 'gailv', chapters: ['pr4'], kw: ['期望', '方差', '协方差', '相关系数', '数字特征'] },
  { key: 'limit-theorem', name: '大数定律与中心极限定理', subject: 'gailv', chapters: ['pr5'], kw: ['大数定律', '中心极限', '切比雪夫', '依概率收敛'] },
  { key: 'sampling', name: '抽样分布与统计量', subject: 'gailv', chapters: ['pr6'], kw: ['样本', '统计量', '抽样分布', '分位数', 'χ²', 't 分布', 'F 分布'] },
  { key: 'estimation', name: '参数估计（矩估计与最大似然）', subject: 'gailv', chapters: ['pr7'], kw: ['矩估计', '最大似然', '置信区间', '估计量', '无偏'] },
  { key: 'hypothesis', name: '假设检验', subject: 'gailv', chapters: ['pr8'], kw: ['假设检验', '拒绝域', '显著性', '两类错误', '检验'] },
];

// 5) 题型：按规则表主题词在例题/练习/书籍题原文中匹配（讲次限定了考纲章节范围）
const qtypeEntities = [];
const qtypeAppliesTargets = new Set(); // method/theorem 命中的题型 id
{
  const cache = new Map();
  const lessonText = lesson => {
    if (!cache.has(lesson.id)) {
      const items = [];
      (lesson.examples ?? []).forEach((e, i) => {
        const m = /例\s*(\d+)/.exec(e.title ?? '');
        items.push({ label: `${lesson.id}·例${m ? m[1] : i + 1}`, text: `${e.problem ?? ''} ${e.tip ?? ''}` });
      });
      (lesson.exercises ?? []).forEach(e => items.push({ label: `${lesson.id}·练习${e.no ?? ''}`, text: `${e.problem ?? ''} ${e.solution ?? ''}` }));
      cache.set(lesson.id, items);
    }
    return cache.get(lesson.id);
  };
  for (const rule of QTYPE_RULES) {
    const kwRe = new RegExp(rule.kw.join('|'));
    const candidate = (lessonsBySubject[rule.subject] ?? []).filter(l => refsOf(l).some(c => rule.chapters.includes(c)));
    const hitLessons = [];
    let items = 0;
    const samples = [];
    for (const lesson of candidate) {
      const hits = lessonText(lesson).filter(it => kwRe.test(it.text));
      if (!hits.length) continue;
      hitLessons.push(lesson.id);
      items += hits.length;
      for (const h of hits.slice(0, 2)) if (samples.length < 4) samples.push(h.label);
    }
    const bookHits = [];
    for (const q of bookQuestions) {
      if (bookHits.length >= 2) break;
      if (hitLessons.includes(q.lessonId) && q.problem && kwRe.test(q.problem)) bookHits.push(`书·${q.module}·第${q.number}题`);
    }
    if (items < 2 || !hitLessons.length) continue; // 例题/练习中出现不足，视为不成立
    qtypeEntities.push({
      id: 'k-qtype-' + rule.key,
      kind: 'qtype',
      name: rule.name,
      subject: rule.subject,
      lessons: hitLessons,
      summary: `考研数学一常见题型：在 ${hitLessons.length} 讲的例题与练习中出现 ${items} 处，并关联到书籍题目；示例：${[...samples, ...bookHits].join('、')}。`,
      source: 'tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）',
      samples: [...samples, ...bookHits],
    });
  }
}
entities.push(...qtypeEntities);

/* ---------------- 先修关系（prerequisite）规则表 ---------------- */
// 章节链依据：考纲章节编号与同济版教材公认教学顺序。
// 高数：极限→微分→积分→微分方程；微分/积分各自先于一元/多元对应推广；级数收敛由极限定义。
// 线代：行列式→矩阵→向量组→方程组→特征值→二次型（同济《线性代数》章节顺序）。
// 概率：事件→随机变量→多维→数字特征→大数定律；分布→数理统计→估计→检验。
const c = (lesson, name) => idOf.get(`${lesson}|concept|${name}`);
const t = (lesson, name) => idOf.get(`${lesson}|theorem|${name}`);
const ch = cid => 'k-chapter-' + cid;

const PREREQ_CHAPTER_CHAINS = [
  ['gaoshu: 导数由极限定义，微分学以极限为语言', [ch('hm1'), ch('hm2')]],
  ['gaoshu: 微积分基本定理连接微分与积分', [ch('hm2'), ch('hm3')]],
  ['gaoshu: 微分方程求解以不定积分为工具', [ch('hm3'), ch('hm8')]],
  ['gaoshu: 偏导数是一元导数的推广', [ch('hm2'), ch('hm5')]],
  ['gaoshu: 多元积分是定积分（累次积分）的推广', [ch('hm3'), ch('hm6')]],
  ['gaoshu: 二重积分变量替换用到偏导（雅可比式）', [ch('hm5'), ch('hm6')]],
  ['gaoshu: 级数收敛由极限定义', [ch('hm1'), ch('hm7')]],
  ['xiandai: 行列式是方阵的数值特征，矩阵运算在前', [ch('la1'), ch('la2')]],
  ['xiandai: 向量组的线性相关性用矩阵的秩刻画', [ch('la2'), ch('la3')]],
  ['xiandai: 方程组解的结构由基础解系（极大无关组）描述', [ch('la3'), ch('la4')]],
  ['xiandai: 消元求解即初等行变换的应用', [ch('la2'), ch('la4')]],
  ['xiandai: 特征方程 (A-λE)x=0 联系行列式与方程组求解', [ch('la4'), ch('la5')]],
  ['xiandai: 二次型标准化依赖实对称矩阵正交对角化', [ch('la5'), ch('la6')]],
  ['gailv: 随机变量是样本空间上的可测映射', [ch('pr1'), ch('pr2')]],
  ['gailv: 多维分布是一维分布的推广', [ch('pr2'), ch('pr3')]],
  ['gailv: 数字特征由分布的积分/级数定义', [ch('pr2'), ch('pr4')]],
  ['gailv: 协方差由联合分布定义', [ch('pr3'), ch('pr4')]],
  ['gailv: 切比雪夫不等式用期望方差估计概率', [ch('pr4'), ch('pr5')]],
  ['gailv: 抽样分布以正态总体分布为基础', [ch('pr2'), ch('pr6')]],
  ['gailv: 区间估计依赖抽样分布', [ch('pr6'), ch('pr7')]],
  ['gailv: 假设检验与置信区间对偶', [ch('pr7'), ch('pr8')]],
];

// 概念/定理链：全部引用讲义中真实存在的条目（build 时校验），顺序为公认教学先后。
const PREREQ_CONCEPT_CHAINS = [
  // 高数：极限→连续→导数→积分→微分方程（主链）
  [c('gs01', '函数极限'), c('gs01', '连续与间断点'), c('gs03', '变化率与导数'), c('gs03', '微分')],
  [c('gs03', '变化率与导数'), c('gs08', '定积分'), c('gs08', '变上限积分'), c('gs08', '原函数与不定积分')],
  [c('gs08', '原函数与不定积分'), c('gs15', '方程与解'), c('gs15', '一阶线性与伯努利'), c('gs15', '高阶线性方程')],
  [c('gs01', '连续与间断点'), c('gs03', '可导与连续')],
  [t('gs08', '微积分基本定理'), t('gs08', '牛顿莱布尼茨公式')],
  [c('gs08', '反常积分'), c('gs09', '反常积分判敛')],
  // 极限与数列
  [c('gs01', '函数极限'), c('gs02', '数列与收敛'), c('gs02', '递推数列')],
  // 求导法则→中值定理→洛必达/泰勒→几何应用
  [c('gs04', '求导基本法则'), c('gs04', '复合与链式法则'), c('gs06', '中值定理的作用'), t('gs06', '洛必达法则'), c('gs06', '泰勒近似')],
  [t('gs06', '罗尔定理'), t('gs06', '拉格朗日中值定理'), t('gs06', '柯西中值定理')],
  [c('gs06', '中值定理的作用'), c('gs05', '单调性与驻点'), c('gs05', '最值问题')],
  // 积分计算→微元法→几何/物理应用
  [c('gs09', '换元积分'), c('gs09', '分部积分'), c('gs10', '微元法（元素法）'), c('gs10', '旋转体体积')],
  [c('gs10', '微元法（元素法）'), c('gs12', '微元法的物理化')],
  // 一元→多元微分
  [c('gs04', '复合与链式法则'), c('gs13', '复合函数链式法则')],
  [c('gs13', '偏导数'), c('gs13', '全微分与可微'), c('gs13', '复合函数链式法则'), c('gs13', '极值与条件极值')],
  [c('gs13', '偏导数'), c('gs13', '方向导数与梯度（数一）')],
  [c('gs04', '隐函数求导'), c('gs13', '隐函数求导')],
  // 定积分→二重积分→三重积分
  [c('gs08', '定积分'), c('gs14', '直角坐标累次积分'), c('gs14', '极坐标'), c('gs14', '一般变量替换')],
  [c('gs14', '直角坐标累次积分'), c('gs18', '三重积分'), c('gs18', '柱面与球坐标')],
  // 数列极限→级数
  [c('gs02', '数列与收敛'), c('gs16', '数项级数'), c('gs16', '正项级数'), c('gs16', '交错与绝对收敛'), c('gs16', '幂级数'), c('gs16', '幂级数和函数')],
  // 向量→空间解析几何
  [c('gs17', '向量与方向'), c('gs17', '点积与夹角'), c('gs17', '叉积与混合积'), c('gs17', '平面'), c('gs17', '空间直线')],
  // 线代主链
  [c('xd01', '排列与逆序数'), c('xd01', 'n阶行列式的定义'), c('xd01', '余子式与代数余子式'), c('xd02', '逆矩阵'), c('xd02', '初等变换与初等矩阵'), c('xd02', '矩阵的秩'), c('xd03', '线性相关与线性无关'), c('xd03', '极大线性无关组'), c('xd04', '基础解系'), c('xd04', '解的结构'), c('xd05', '特征多项式与特征方程'), c('xd05', '相似对角化'), c('xd06', '标准形与规范形'), c('xd06', '正定性')],
  [t('xd01', '克拉默法则'), c('xd04', '解的三种情形')],
  [c('xd02', '逆矩阵'), c('xd02', '伴随矩阵 A*')],
  [c('xd05', '实对称矩阵'), t('xd05', '实对称正交对角化定理'), c('xd06', '正交变换法'), t('xd06', '主轴定理（正交变换化标准形）')],
  [c('xd03', '内积与正交'), c('xd03', '正交矩阵')],
  [c('xd06', '二次型及其矩阵'), c('xd06', '标准形与规范形')],
  [c('xd06', '合同变换'), c('xd06', '正定性')],
  // 概率主链：事件→随机变量→多维→数字特征→大数定律
  [c('gl01', '样本空间与随机事件'), c('gl01', '事件的关系与运算'), c('gl01', '概率的定义与性质'), c('gl01', '古典概型与几何概型'), c('gl01', '条件概率')],
  [c('gl01', '条件概率'), c('gl01', '独立性与伯努利概型'), c('gl02', '随机变量与分布函数'), c('gl02', '离散型与分布律'), c('gl02', '连续型与概率密度'), c('gl03', '联合分布函数'), c('gl03', '二维连续型'), c('gl04', '数学期望'), c('gl04', '方差与标准差'), c('gl04', '协方差'), c('gl04', '相关系数'), c('gl05', '依概率收敛'), c('gl05', '大数定律'), c('gl05', '中心极限定理')],
  [t('gl01', '全概率公式'), t('gl01', '贝叶斯公式')],
  [c('gl02', '连续型与概率密度'), c('gl02', '随机变量函数的分布')],
  [c('gl04', '方差与标准差'), c('gl05', '切比雪夫不等式'), c('gl05', '大数定律')],
  // 数理统计链：正态分布→抽样→估计→检验
  [c('gl02', '常见连续分布'), c('gl02', '正态分布与标准化'), c('gl06', '总体与样本'), c('gl06', '统计量'), c('gl06', 'χ² 分布'), c('gl06', 't 分布'), c('gl06', 'F 分布'), c('gl07', '点估计的基本思想'), c('gl07', '矩估计法'), c('gl07', '最大似然估计法'), c('gl07', '无偏性'), c('gl07', '区间估计'), c('gl08', '假设检验的基本思想'), c('gl08', '假设检验五步法')],
];

/* ---------------- 跨学科联系（cross，逐条注明依据，只保留确定性高的） ---------------- */
const CROSS_EDGES = [
  { from: c('xd01', 'n阶行列式的定义'), to: c('gs14', '一般变量替换'), note: '二重/三重积分一般变量替换的雅可比式是行列式' },
  { from: c('xd03', 'n维向量与线性组合'), to: c('gs17', '向量与方向'), note: '向量的线性运算与内积在线代与空间解析几何中一致' },
  { from: c('gl02', '连续型与概率密度'), to: c('gs08', '定积分'), note: '概率密度在区间上积分得概率' },
  { from: c('gl05', '依概率收敛'), to: c('gs02', '数列与收敛'), note: '依概率收敛是数列收敛概念的推广' },
  { from: c('xd06', '正交变换法'), to: c('gs17', '点积与夹角'), note: '正交变换基于内积与正交概念' },
  { from: c('gl07', '最大似然估计法'), to: c('gs03', '变化率与导数'), note: '最大似然估计用求导求极值' },
  { from: c('gs13', '方向导数与梯度（数一）'), to: c('xd03', '内积与正交'), note: '方向导数等于梯度与方向向量的内积' },
  { from: c('gl04', '数学期望'), to: c('gs16', '数项级数'), note: '离散型期望定义为级数求和' },
];

/* ---------------- 生成边 ---------------- */
const edgeKey = new Set();
const edges = [];
function addEdge(from, to, rel, note) {
  if (!from || !to || from === to) throw new Error(`非法边 ${from} -> ${to} (${rel})`);
  const key = `${from}|${to}|${rel}`;
  if (edgeKey.has(key)) return;
  edgeKey.add(key);
  edges.push(note ? { from, to, rel, note } : { from, to, rel });
}

for (const [, chain] of PREREQ_CHAPTER_CHAINS) for (let i = 1; i < chain.length; i++) addEdge(chain[i - 1], chain[i], 'prerequisite');
const unresolved = [];
for (const chain of PREREQ_CONCEPT_CHAINS) {
  if (chain.some(x => !x)) { chain.forEach((x, i) => { if (!x) unresolved.push(chain[i - 1] ?? chain[i + 1] ?? 'unknown'); }); continue; }
  for (let i = 1; i < chain.length; i++) addEdge(chain[i - 1], chain[i], 'prerequisite');
}
if (unresolved.length) console.log('未解析的先修链条目（已跳过）:', JSON.stringify(unresolved));

// applies：method/theorem → qtype，条件 = 讲次相关 + 主题词命中
for (const q of qtypeEntities) {
  const qLessons = new Set(q.lessons);
  const rule = QTYPE_RULES.find(r => 'k-qtype-' + r.key === q.id);
  const kwRe = new RegExp(rule.kw.join('|'));
  for (const e of entities) {
    if (e.kind !== 'method' && e.kind !== 'theorem' && e.kind !== 'concept') continue;
    if (!e.lessons.some(l => qLessons.has(l))) continue;
    if (!kwRe.test((e.matchText ?? '') || e.name)) continue;
    addEdge(e.id, q.id, 'applies');
    qtypeAppliesTargets.add(q.id);
  }
}

for (const x of CROSS_EDGES) addEdge(x.from, x.to, 'cross', x.note);

/* ---------------- 校验 ---------------- */
const byId = new Map(entities.map(e => [e.id, e]));
if (byId.size !== entities.length) throw new Error('存在重复实体 id');
for (const e of entities) {
  if (!e.id || !e.kind || !e.name || !e.subject) throw new Error('实体字段缺失: ' + JSON.stringify(e).slice(0, 120));
  if (!['subject', 'chapter', 'concept', 'theorem', 'method', 'qtype'].includes(e.kind)) throw new Error('非法 kind: ' + e.kind);
  for (const l of e.lessons) if (!lessons.some(x => x.id === l)) throw new Error(`实体 ${e.id} 引用不存在的讲 ${l}`);
}
for (const edge of edges) {
  for (const p of [edge.from, edge.to]) if (!byId.has(p)) throw new Error(`边端点不存在: ${edge.from} -> ${edge.to}`);
  if (edge.from === edge.to) throw new Error('自环: ' + JSON.stringify(edge));
  if (!['prerequisite', 'applies', 'equivalent', 'cross'].includes(edge.rel)) throw new Error('非法 rel: ' + edge.rel);
}
// prerequisite 无环检测（DFS 三色标记）
{
  const adj = new Map();
  for (const e of edges) if (e.rel === 'prerequisite') (adj.get(e.from) ?? adj.set(e.from, []).get(e.from)).push(e.to);
  const color = new Map();
  const stack = [];
  const visit = id => {
    color.set(id, 1); stack.push(id);
    for (const next of adj.get(id) ?? []) {
      if (color.get(next) === 1) throw new Error('prerequisite 存在环: ' + [...stack, next].join(' → '));
      if (!color.get(next)) visit(next);
    }
    stack.pop(); color.set(id, 2);
  };
  for (const id of adj.keys()) if (!color.get(id)) visit(id);
}

/* ---------------- 统计与输出 ---------------- */
const KIND_ORDER = { subject: 0, chapter: 1, concept: 2, theorem: 3, method: 4, qtype: 5 };
const REL_ORDER = { prerequisite: 0, applies: 1, equivalent: 2, cross: 3 };
entities.sort((a, b) => KIND_ORDER[a.kind] - KIND_ORDER[b.kind] || (a.id < b.id ? -1 : 1));
edges.sort((a, b) => REL_ORDER[a.rel] - REL_ORDER[b.rel] || (a.from + a.to < b.from + b.to ? -1 : 1));

const byKind = {};
for (const e of entities) byKind[e.kind] = (byKind[e.kind] ?? 0) + 1;
const byRel = {};
for (const e of edges) byRel[e.rel] = (byRel[e.rel] ?? 0) + 1;

assertCount(byKind.method >= 20, `方法实体仅 ${byKind.method} 个（需 ≥20）`);
assertCount(byKind.qtype >= 20, `题型实体仅 ${byKind.qtype} 个（需 ≥20）`);
assertCount(entities.length >= 300, `实体仅 ${entities.length} 个（需 ≥300）`);
assertCount(edges.length >= 400, `边仅 ${edges.length} 条（需 ≥400）`);

function assertCount(ok, message) { if (!ok) throw new Error(message); }

const output = `// 本文件由 tools/build-knowledge-map.mjs 自动生成：学科 → 章节 → 概念/定理 → 方法 → 题型的立体知识架构。
// 确定性生成（无时间戳），可重跑且幂等；请勿手工编辑。
export default ${JSON.stringify({ version: 1, generatedBy: 'tools/build-knowledge-map.mjs', entities, edges }, null, 1)}\n`;
writeFileSync(path.join(ROOT, 'data', 'seed', 'knowledge-map.js'), output);

console.log(`[knowledge-map] 实体 ${entities.length}（${Object.entries(byKind).map(([k, v]) => `${k}:${v}`).join(' ')}）`);
console.log(`[knowledge-map] 边 ${edges.length}（${Object.entries(byRel).map(([k, v]) => `${k}:${v}`).join(' ')}）`);
console.log(`[knowledge-map] 写出 data/seed/knowledge-map.js（${(output.length / 1024).toFixed(1)} KB），prerequisite 无环`);
