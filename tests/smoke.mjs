import assert from 'node:assert/strict';
import { readdir } from 'node:fs/promises';
import { S } from '../public/js/store.js';
import { addDays, today, el } from '../public/js/util.js';
import syllabus from '../data/seed/syllabus.js';
import mock1 from '../data/seed/mock1.js';
import mock2 from '../data/seed/mock2.js';

const dir = new URL('../data/lessons/', import.meta.url);
const files = (await readdir(dir)).filter(f => f.endsWith('.js')).sort();
const expected = ['gs01','gs02','gs03','gs04','gs05','gs06','gs07','gs08','gs09','gs10','gs11','gs12','gs13','gs14','gs15','gs16','gs17','gs18','xd01','xd02','xd03','xd04','xd05','xd06','gl01','gl02','gl03','gl04','gl05','gl06','gl07','gl08'].sort();
assert.deepEqual(files.map(f => f.slice(0, -3)), expected);
const refs = new Set(syllabus.subjects.flatMap(subject => subject.chapters.map(chapter => chapter.id)));
let exercises = 0;
for (const file of files) {
  const lesson = (await import(new URL(file, dir))).default;
  assert.equal(lesson.id, file.slice(0, -3));
  for (const key of ['goal', 'concepts', 'theorems', 'examples', 'methods', 'pitfalls', 'exercises']) assert.ok(Array.isArray(lesson[key]) && lesson[key].length, `${lesson.id}: ${key}`);
  for (const ref of [lesson.syllabusRef].flat()) assert.ok(refs.has(ref), `${lesson.id}: ${ref}`);
  assert.equal(new Set(lesson.exercises.map(q => q.no)).size, lesson.exercises.length, lesson.id);
  for (const q of lesson.exercises) assert.ok(q.problem && q.answer && q.solution, `${lesson.id}: exercise ${q.no}`);
  exercises += lesson.exercises.length;
}
for (const mock of [mock1, mock2]) {
  assert.equal(mock.duration, 180);
  assert.deepEqual(mock.sections.map(s => s.problems.length), [10, 6, 6]);
  const qs = mock.sections.flatMap(s => s.problems);
  assert.deepEqual(qs.map(q => q.no), Array.from({ length: 22 }, (_, i) => i + 1));
  assert.equal(mock.sections.reduce((n, s) => n + s.problems.reduce((sum, q) => sum + (q.score ?? s.scoreEach), 0), 0), 150);
  for (const q of qs) assert.ok(q.problem && q.answer && q.solution, `${mock.id}: ${q.no}`);
  for (const q of mock.sections[0].problems) assert.ok(q.options.length === 4 && /^[ABCD]$/.test(q.answer));
}
assert.equal(today(new Date(2026, 0, 1, 0, 30)), '2026-01-01');
assert.equal(addDays('2026-01-01', 1), '2026-01-02');
S.db = { mistakes: [{ id: 'test', stage: 0, history: [] }] };
S.touch = () => {};
S.reviewMistake('test', true);
assert.equal(S.db.mistakes[0].due, addDays(today(), 1));
assert.equal(S.db.mistakes[0].stage, 1);
S.reviewMistake('test', true);
assert.equal(S.db.mistakes[0].due, addDays(today(), 3));
S.reviewMistake('test', false);
assert.equal(S.db.mistakes[0].due, addDays(today(), 1));
globalThis.document = { createElement: () => ({ attrs: {}, setAttribute(key, value) { this.attrs[key] = value; }, append() {} }) };
const node = el('input', { checked: false, required: true });
assert.ok(!Object.hasOwn(node.attrs, 'checked'));
assert.ok(Object.hasOwn(node.attrs, 'required'));
console.log(`OK: ${files.length} lessons, ${exercises} exercises, 2 mock papers, review intervals and boolean attributes`);
await import('./book-questions.mjs');
