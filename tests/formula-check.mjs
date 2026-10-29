// 全库公式机器校验（验收矩阵 C09）：用项目内置 KaTeX 渲染所有题干/选项/答案/解析/分析字段，
// 报告无法渲染的表达式。通过只说明"KaTeX 能渲染"，不代表数学正确。
import assert from 'node:assert/strict';
import { readFileSync, existsSync as fsSyncExists } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// 项目只带 vendor 版 KaTeX（UMD）。在 Node 中用 module/exports 壳加载。
function loadKatex() {
  const module_ = { exports: {} };
  const fn = new Function('module', 'exports', 'window', 'document', 'navigator',
    readFileSync(path.join(root, 'public', 'vendor', 'katex', 'katex.min.js'), 'utf8'));
  fn(module_, module_.exports, undefined, undefined, { userAgent: 'node' });
  const k = module_.exports?.renderToString ? module_.exports : globalThis.katex;
  assert.ok(k?.renderToString, 'KaTeX 加载失败');
  return k;
}
const katex = loadKatex();
// KaTeX 对 CJK/特殊符号的 strict 提示走 console.warn，与硬错误无关，测试输出中静默
const origWarn = console.warn;
console.warn = (...a) => { if (!/character metrics|Unicode|unicodeText/i.test(String(a[0]))) origWarn(...a); };
const macros = { '\\vline': '\\mid', '\\arccot': '\\operatorname{arccot}' };

const errors = [];
// 与前端 mdToHtml 的数学分段保持一致（$ 可跨行）
const MATH_SEG_RE = /\$\$[\s\S]*?\$\$|\$[^$]+?\$/g;
function checkMath(where, raw) {
  if (!raw || typeof raw !== 'string') return;
  let m;
  while ((m = MATH_SEG_RE.exec(raw))) {
    const tex = m[0];
    const display = tex.startsWith('$$');
    try {
      katex.renderToString(display ? tex.slice(2, -2) : tex.slice(1, -1), { throwOnError: true, strict: 'ignore', displayMode: display, macros });
    } catch (e) {
      errors.push({ where, tex: tex.slice(0, 200), message: String(e.message).slice(0, 200) });
    }
  }
}

function collect(q, label) {
  if (!q || typeof q !== 'object') return;
  checkMath(`${label}·题干`, q.problem);
  checkMath(`${label}·答案`, q.answer);
  checkMath(`${label}·原解析`, q.sourceSolution);
  for (const k of ['intent', 'clue', 'trap', 'check', 'transfer']) checkMath(`${label}·analysis.${k}`, q.analysis?.[k]);
  if (Array.isArray(q.analysis?.steps)) q.analysis.steps.forEach((s, i) => checkMath(`${label}·step${i + 1}`, s));
  if (Array.isArray(q.options)) q.options.forEach((o, i) => checkMath(`${label}·选项${i}`, o));
  if (Array.isArray(q.solution)) q.solution.forEach((s, i) => checkMath(`${label}·解答${i + 1}`, s));
  if (typeof q.solution === 'string') checkMath(`${label}·解答`, q.solution);
  if (Array.isArray(q.exercises)) q.exercises.forEach(ex => collect(ex, `${label}·练习${ex.no}`));
  if (Array.isArray(q.examples)) q.examples.forEach(ex => collect(ex, `${label}·例${ex.no}`));
}

const load = async rel => (await import(pathToFileURL(path.join(root, 'data', rel)).href)).default;

// 与内容加载器一致：先应用人工核验修订再校验
const corrections = await load('seed/question-corrections.js');

// 书籍题库
const bookIds = [];
for (const f of ['seed/book-questions.js', 'seed/github-book-questions.js', 'seed/jc30-examples.js']) {
  const fp = path.join(root, 'data', f);
  if (!fsSyncExists(fp)) continue; // jc30 例题在整本覆盖推进中逐步生成
  const arr = await load(f);
  corrections.apply?.(arr);
  for (const q of arr) { collect(q, q.id); bookIds.push(q.id); }
}
// 讲义（含例题与随堂练习）
const fsp = await import('node:fs/promises');
const lessonFiles = (await fsp.readdir(path.join(root, 'data', 'lessons'))).filter(x => x.endsWith('.js') && !x.startsWith('_')).sort();
let lessonCount = 0;
for (const f of lessonFiles) {
  const L = await load('lessons/' + f);
  if (!L?.id) continue;
  lessonCount++;
  collect(L, L.id);
  for (const ex of L.exercises || []) collect(ex, `${L.id}·练习${ex.no}`);
}
// 模拟卷
for (const f of ['seed/mock1.js', 'seed/mock2.js']) {
  const mock = await load(f);
  for (const p of mock.problems || []) collect(p, `${f}·${p.no ?? ''}`);
}
// 仓库知识笔记（R01/R05/R08）
try {
  const notes = await load('seed/repo-notes.js');
  for (const n of notes) {
    checkMath(`rnote·${n.id}`, n.text);
    checkMath(`rnote·${n.id}·title`, n.title);
  }
  var noteCount = notes.length;
} catch { var noteCount = 0; }

if (errors.length) {
  console.log(`公式校验发现 ${errors.length} 处无法渲染（涉及 ${new Set(errors.map(e => e.where)).size} 个位置）：`);
  const shown = new Set();
  for (const e of errors) {
    const key = e.where;
    if (shown.has(key)) continue;
    shown.add(key);
    console.log(`  ✗ [${e.where}] ${e.message}\n      tex: ${e.tex}`);
    if (shown.size >= 60) break;
  }
  process.exitCode = 1;
} else {
  console.log(`公式校验通过：${bookIds.length} 条题库条目、${lessonCount} 讲、2 套模拟卷、${noteCount} 条仓库笔记中的全部数学表达式均可 KaTeX 渲染（不代表数学正确性）`);
}
