import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const manifest = JSON.parse(readFileSync(new URL('../data/seed/jc30-manifest.json', import.meta.url), 'utf8'));
import examples from '../data/seed/jc30-examples.js';

// 1) manifest 可解析、结构正确
assert.ok(manifest.lectures.length >= 18, `lectures=${manifest.lectures.length}, 需要 >=18`);
assert.equal(manifest.totalPdfPages, 586);
for (const l of manifest.lectures) {
  assert.ok(l.lecture >= 1 && l.lecture <= 18, l.lecture);
  assert.ok(l.title && l.pdfStartPage > 0 && l.pdfEndPage >= l.pdfStartPage, `L${l.lecture} range`);
  const seen = new Set();
  for (const e of l.examples) {
    assert.match(e.no, /^例\d+\.\d+$/, e.no);
    assert.ok(['pending', 'done', 'unresolvable'].includes(e.status), e.no + ' status');
    assert.ok(e.problemPage >= l.pdfStartPage && e.problemPage <= l.pdfEndPage, `${e.no} problemPage ${e.problemPage}`);
    assert.ok(e.solutionPage >= 1, `${e.no} solutionPage`);
    assert.ok(e.note && e.note.length > 4, `${e.no} note`);
    assert.ok(!seen.has(e.no), `重复例号 ${e.no}`);
    seen.add(e.no);
  }
}

// 2) 整本清单例题总数 > 300
const total = manifest.lectures.reduce((s, l) => s + l.examples.length, 0);
assert.ok(total > 300, `examples total=${total}, 需要 >300`);

// 3) done 条目与 jc30-examples.js 条目一一对应
const doneInManifest = manifest.lectures.flatMap(l => l.examples.filter(e => e.status === 'done'));
assert.equal(doneInManifest.length, examples.length,
  `manifest done=${doneInManifest.length}, examples.js=${examples.length}`);
const byNo = new Map(examples.map(e => [`${e.source}|${e.number}`, e]));
for (const d of doneInManifest) {
  const key = `《基础30讲》第${manifest.lectures.find(l => l.examples.includes(d)).lecture}讲|${d.no}`;
  const ex = byNo.get(key);
  assert.ok(ex, `examples.js 缺少 ${key}`);
  assert.equal(ex.sourcePage, d.problemPage, `${d.no} problemPage`);
  assert.equal(ex.solutionPage, d.solutionPage, `${d.no} solutionPage`);
}

// 4) 每条入库题字段完整
for (const e of examples) {
  assert.ok(e.id.startsWith('jc30-l'), e.id);
  assert.ok(e.problem && e.answer && e.source === '《基础30讲》第1讲', e.id);
  assert.equal(e.subject, 'gaoshu');
  assert.equal(e.lessonId, 'gs01');
  assert.ok(['choice', 'fill', 'self'].includes(e.type), e.id + ' type');
  assert.ok(e.sourcePage > 0 && e.solutionPage > 0, e.id + ' pages');
  for (const k of ['intent', 'clue', 'steps', 'trap', 'check', 'transfer']) {
    const v = e.analysis[k];
    assert.ok(v && (!Array.isArray(v) || v.length > 0), `${e.id} analysis.${k}`);
  }
  if (e.type === 'choice') assert.ok(e.options.length === 4 && /^[ABCD]$/.test(e.answer), e.id);
  if (e.figure) assert.ok(e.figure.startsWith('resources/questions/jc30-'), e.id + ' figure path');
}

// 5) 配图文件存在
for (const e of examples.filter(q => q.figure)) {
  const p = new URL('../public/' + e.figure, import.meta.url);
  const svg = readFileSync(p, 'utf-8');
  assert.ok(svg.startsWith('<svg'), e.id + ' figure content');
}

// 6) 例号连续性（讲1内 1.1..1.18 连续）
const l1 = manifest.lectures[0].examples.map(e => Number(e.no.split('.')[1]));
const doneNos = new Set(doneInManifest.map(e => Number(e.no.split('.')[1])));
for (let i = 0; i < doneNos.size; i++) assert.ok(doneNos.has(i + 1), `讲1例${i + 1} 应已入库`);

console.log(`jc30 manifest: ${manifest.lectures.length} lectures, ${total} examples listed, ` +
  `${doneInManifest.length} done, ${examples.length} entered, ` +
  `${examples.filter(e => e.figure).length} figure(s); checks passed`);
