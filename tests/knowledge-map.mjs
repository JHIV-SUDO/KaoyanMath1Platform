// 知识图谱数据校验：实体/边规模、引用完整性、自环、先修无环、幂等
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const map = (await import(pathToFileURL(path.join(root, 'data', 'seed', 'knowledge-map.js')).href)).default;
assert.ok(map, 'knowledge-map.js 可导入');

const entities = map.entities ?? [];
const edges = map.edges ?? [];
assert.ok(entities.length >= 300, `实体 ${entities.length} ≥ 300`);
assert.ok(edges.length >= 400, `边 ${edges.length} ≥ 400`);

const byId = new Map(entities.map(e => [e.id, e]));
assert.equal(byId.size, entities.length, '实体 id 唯一');
for (const e of entities) {
  assert.ok(e.id && e.kind && e.name && e.subject, '实体字段完整: ' + e.id);
  assert.ok(['subject', 'chapter', 'concept', 'theorem', 'method', 'qtype'].includes(e.kind), 'kind 合法: ' + e.id);
  assert.ok(Array.isArray(e.lessons), 'lessons 为数组: ' + e.id);
}
for (const edge of edges) {
  assert.ok(byId.has(edge.from), '边 from 存在: ' + edge.from);
  assert.ok(byId.has(edge.to), '边 to 存在: ' + edge.to);
  assert.ok(edge.from !== edge.to, '无自环: ' + edge.from);
  assert.ok(['prerequisite', 'applies', 'equivalent', 'cross'].includes(edge.rel), 'rel 合法');
}

// 先修无环（DFS 三色）
const adj = new Map();
for (const e of edges) if (e.rel === 'prerequisite') (adj.get(e.from) ?? adj.set(e.from, []).get(e.from)).push(e.to);
const color = new Map();
let hasCycle = false;
const dfs = id => {
  color.set(id, 1);
  for (const to of adj.get(id) ?? []) {
    if (color.get(to) === 1) { hasCycle = true; return; }
    if (!color.get(to)) dfs(to);
    if (hasCycle) return;
  }
  color.set(id, 2);
};
for (const id of adj.keys()) if (!color.get(id) && !hasCycle) dfs(id);
assert.ok(!hasCycle, 'prerequisite 无环');

// 类型与计数
const byKind = {};
for (const e of entities) byKind[e.kind] = (byKind[e.kind] ?? 0) + 1;
assert.ok(byKind.method >= 20, `方法 ${byKind.method} ≥ 20`);
assert.ok(byKind.qtype >= 20, `题型 ${byKind.qtype} ≥ 20`);

// 幂等：重跑生成脚本两次，除时间戳外内容一致
const { execFileSync } = await import('node:child_process');
const out1 = path.join(root, 'data', 'seed', 'knowledge-map.js');
const before = readFileSync(out1, 'utf8').replace(/generatedAt: '[^']*'/, 'generatedAt: X');
execFileSync(process.execPath, [path.join(root, 'tools', 'build-knowledge-map.mjs')], { stdio: 'ignore' });
const after = readFileSync(out1, 'utf8').replace(/generatedAt: '[^']*'/, 'generatedAt: X');
assert.equal(before, after, '重跑幂等');

const byRel = {};
for (const e of edges) byRel[e.rel] = (byRel[e.rel] ?? 0) + 1;
console.log(`知识图谱：实体 ${entities.length}（concept:${byKind.concept} theorem:${byKind.theorem} method:${byKind.method} qtype:${byKind.qtype}），边 ${edges.length}（prereq:${byRel.prerequisite} applies:${byRel.applies} cross:${byRel.cross}），无自环、先修无环、重跑幂等`);
