import { dashboard } from './dashboard.js';
import { lessonsList, lessonReader } from './lessons.js';
import { syllabus } from './syllabus.js';
import { formulas } from './formulas.js';
import { practice } from './practice.js';
import { drill } from './drill.js';
import { mocks, mockExam } from './mocks.js';
import { mistakes } from './mistakes.js';
import { exams } from './exams.js';
import { plan } from './plan.js';
import { resources } from './resources.js';
import { stats } from './stats.js';
import { knowledge } from './knowledge.js';

const MAP = {
  dashboard, lessons: (m, arg) => arg ? lessonReader(m, arg) : lessonsList(m),
  syllabus, formulas, practice, drill, mocks: (m, arg) => arg ? mockExam(m, arg) : mocks(m),
  mistakes, exams, plan, resources, stats, knowledge,
};

let disposeCurrent = null;
let renderSequence = 0;
export function clearCurrentView() {
  renderSequence++;
  if (disposeCurrent) { disposeCurrent(); disposeCurrent = null; }
}
export async function render(main, name, arg) {
  clearCurrentView();
  const sequence = renderSequence;
  const fn = MAP[name];
  if (!fn) return dashboard(main);
  main.innerHTML = '';
  const cleanup = await fn(main, arg);
  if (sequence !== renderSequence) { if (typeof cleanup === 'function') cleanup(); return; }
  if (typeof cleanup === 'function') disposeCurrent = cleanup;
  main.scrollTop = 0;
}
