import assert from 'node:assert/strict';
import curated from '../data/seed/book-questions.js';
import imported from '../data/seed/github-book-questions.js';
import { S } from '../public/js/store.js';

const questions = [...curated, ...imported];
assert.equal(new Set(questions.map(q => q.id)).size, questions.length);
assert.ok(questions.some(q => q.id.startsWith('zy1000-')));
assert.ok(questions.some(q => q.id.startsWith('zy30-')));
assert.equal(imported.filter(q => q.id.startsWith('book1000-')).length, 1307);
assert.equal(imported.filter(q => q.id.startsWith('book30-')).length, 75);
assert.ok(imported.filter(q => q.studyNote).length >= 400);
for (const q of curated) {
  assert.ok(q.problem && q.source && q.module && q.sourcePage > 0 && q.solutionPage > 0);
  assert.ok(q.analysis.intent && q.analysis.clue && q.analysis.steps.length && q.analysis.trap && q.analysis.check && q.analysis.transfer, q.id);
  if (q.type === 'choice') assert.ok(q.options.length === 4 && /^[ABCD]$/.test(q.answer), q.id);
}
for (const q of imported) {
  assert.ok(q.id && q.problem && q.source && q.module && ['choice', 'fill', 'self'].includes(q.type), q.id);
  if (q.type === 'choice') assert.ok(q.options.length === 4 && /^[ABCD]$/.test(q.answer), q.id);
  if (q.type === 'fill') assert.match(q.answer, /^-?\d+$/);
}

S.content = { bookQuestions: questions };
S.db = { practice: {}, mistakes: [] };
S.touch = () => {};
const id = questions[0].id;
assert.equal(S.markBookQuestion(id, 'wrong', 'A'), true);
assert.equal(S.db.practice['book#' + id].result, 'wrong');
assert.equal(S.db.mistakes.length, 1);
assert.equal(S.db.mistakes[0].bookId, id);
assert.equal(S.markBookQuestion(id, 'wrong', 'B'), true);
assert.equal(S.db.mistakes.length, 1);
assert.equal(S.db.mistakes[0].count, 2);
assert.equal(S.markBookQuestion(id, 'right', 'D'), true);
assert.equal(S.db.practice['book#' + id].result, 'right');
assert.equal(S.markBookQuestion('missing', 'wrong'), false);
assert.equal(S.markBookQuestion(id, 'invalid'), false);
console.log(`Book questions: ${curated.length} reviewed, ${imported.length} imported entries; automatic wrong-answer recording and deduplication passed`);
