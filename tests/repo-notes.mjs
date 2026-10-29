/**
 * tests/repo-notes.mjs —— repo-notes 种子数据最小校验。
 * 运行：node tests/repo-notes.mjs
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import repoNotes from '../data/seed/repo-notes.js';

const VALID_SUBJECTS = new Set(['gaoshu', 'xiandai', 'gailv', 'mixed']);
const VALID_KINDS = new Set(['概念', '定理', '方法', '例题', '总结']);
const VALID_REPOS = new Set(['R01', 'R05', 'R08']);
const VALID_LESSONS = new Set([
  ...Array.from({ length: 18 }, (_, i) => 'gs' + String(i + 1).padStart(2, '0')),
  ...Array.from({ length: 6 }, (_, i) => 'xd' + String(i + 1).padStart(2, '0')),
  ...Array.from({ length: 8 }, (_, i) => 'gl' + String(i + 1).padStart(2, '0')),
]);

// 1) 可导入且为数组，条目数 > 100
assert.ok(Array.isArray(repoNotes), 'repo-notes.js 应 export default 数组');
assert.ok(repoNotes.length > 100, `条目数应 > 100，实际 ${repoNotes.length}`);

// 2) 每条必备字段且 text 非空
for (const n of repoNotes) {
  assert.ok(n.id && typeof n.id === 'string', 'id 缺失: ' + JSON.stringify(n).slice(0, 80));
  assert.ok(VALID_REPOS.has(n.repo), `非法 repo: ${n.repo} (${n.id})`);
  assert.ok(n.source && n.source.includes('#'), `source 缺失: ${n.id}`);
  assert.ok(VALID_SUBJECTS.has(n.subject), `非法 subject: ${n.subject} (${n.id})`);
  assert.ok(VALID_KINDS.has(n.kind), `非法 kind: ${n.kind} (${n.id})`);
  assert.ok(typeof n.topic === 'string' && n.topic.trim(), `topic 缺失: ${n.id}`);
  assert.ok(n.title && n.title.trim(), `title 缺失: ${n.id}`);
  assert.ok(typeof n.text === 'string' && n.text.trim().length > 0, `text 为空: ${n.id}`);
  assert.ok(typeof n.raw === 'boolean', `raw 应为布尔: ${n.id}`);
  assert.ok(Array.isArray(n.relatedLessons), `relatedLessons 应为数组: ${n.id}`);
  for (const l of n.relatedLessons) {
    assert.ok(VALID_LESSONS.has(l), `非法讲 id: ${l} (${n.id})`);
  }
}

// 3) id 唯一
assert.equal(new Set(repoNotes.map(n => n.id)).size, repoNotes.length, '存在重复 id');

// 4) 清洗残留检查：双链、导航占位、非数学 LaTeX 环境
for (const n of repoNotes) {
  assert.ok(!n.text.includes('[[['), `存在 [[[ 残留: ${n.id}`);
  assert.ok(!/待更新|陆续更新中|即将上线/.test(n.text), `存在占位页残留: ${n.id}`);
  assert.ok(!/\\begin\{(?!array|aligned|alignedat|gathered|cases|matrix|pmatrix|bmatrix|vmatrix|Bmatrix|Vmatrix|equation|align|split)/.test(n.text), `存在未清理 LaTeX 环境: ${n.id}`);
  assert.ok(!/\\(multirow|multicolumn|tabincell|textcolor|ding\{|maketitle|tableofcontents)/.test(n.text), `存在未清理 TeX 命令: ${n.id}`);
}

// 5) 三个学科都有数据，三个仓库都有数据
const bySubject = {};
const byRepo = {};
for (const n of repoNotes) {
  bySubject[n.subject] = (bySubject[n.subject] || 0) + 1;
  byRepo[n.repo] = (byRepo[n.repo] || 0) + 1;
}
for (const s of ['gaoshu', 'xiandai', 'gailv']) {
  assert.ok((bySubject[s] || 0) > 0, `学科 ${s} 无数据`);
}
for (const r of ['R01', 'R05', 'R08']) {
  assert.ok((byRepo[r] || 0) > 0, `仓库 ${r} 无数据`);
}

// 6) manifest 可解析且三仓库 entries>0
const manifest = JSON.parse(fs.readFileSync(new URL('../data/seed/repo-notes-manifest.json', import.meta.url), 'utf8'));
assert.ok(manifest.generatedAt, 'manifest 缺 generatedAt');
assert.equal(manifest.notes.length, repoNotes.length, 'manifest.notes 与条目数不一致');
for (const r of ['R01', 'R05', 'R08']) {
  assert.ok(manifest.repos[r], `manifest 缺仓库 ${r}`);
  assert.ok(manifest.repos[r].entries > 0, `仓库 ${r} entries 应 > 0`);
  assert.ok(Array.isArray(manifest.repos[r].skipped), `仓库 ${r} 缺 skipped 列表`);
  assert.ok(manifest.repos[r].files > 0, `仓库 ${r} files 应 > 0`);
}
// manifest 与正文的条目一一对应
assert.equal(new Set(manifest.notes.map(n => n.id)).size, repoNotes.length, 'manifest notes id 不唯一');

// 超长条目上限检查（拆分粒度约束，允许少量越界由段落不可拆导致）
const oversized = repoNotes.filter(n => n.text.length > 4600);
assert.ok(oversized.length <= 5, `超长条目过多: ${oversized.length}`);

console.log(`Repo notes: ${repoNotes.length} entries (R01=${byRepo.R01}, R05=${byRepo.R05}, R08=${byRepo.R08}); ` +
  `subjects gaoshu=${bySubject.gaoshu}, xiandai=${bySubject.xiandai}, gailv=${bySubject.gailv}; ` +
  `manifest skipped=[${Object.entries(manifest.repos).map(([r, v]) => r + ':' + v.skipped.length).join(', ')}]; all checks passed`);
