// 全局状态：加载 bootstrap，变更后防抖保存
import { toast, today, addDays } from './util.js';
import { Sync } from './sync.js';

export const S = {
  db: null,
  content: null,
  _saveTimer: null,
  listeners: new Set(),

  async bootstrap() {
    const r = await fetch('/api/bootstrap');
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const data = await r.json();
    if (!Array.isArray(data.content?.bookQuestions)) {
      const response = await fetch('/desktop-compat-content.json', { cache: 'no-store' });
      if (!response.ok) throw new Error('内置题库暂不可用，请检查安装文件');
      const bundled = await response.json();
      if (!Array.isArray(bundled.bookQuestions) || !Array.isArray(bundled.repoNotes)) throw new Error('内置题库文件无效');
      data.content.bookQuestions = bundled.bookQuestions;
      data.content.repoNotes ??= bundled.repoNotes;
      data.content.knowledgeMap ??= bundled.knowledgeMap;
      const media = data.content.books?.media;
      if (Array.isArray(media)) for (const item of bundled.booksMedia || []) {
        if (!media.some(existing => existing.key === item.key)) media.push(item);
      }
    }
    this.db = data.db;
    this.content = data.content;
    this.capabilities = data.capabilities || {};
    // 迁移补齐字段
    const d = this.db;
    d.settings ??= { nickname: '研友', examDate: '2026-12-19', dailyTargetMinutes: 180 };
    d.lessonStatus ??= {}; d.syllabusMastery ??= {}; d.problems ??= {}; d.mistakes ??= [];
    d.logs ??= {}; d.exams ??= {}; d.plan ??= null; d.practice ??= {}; d.mockResults ??= []; d.mockAttempts ??= {};
    if (Array.isArray(d.logs)) { // 旧版兼容：数组→对象
      const o = {}; for (const it of d.logs) o[it.date] = { minutes: it.minutes, content: it.content, tag: it.tag }; d.logs = o;
    }
    return data;
  },

  /** 变更后调用：自动防抖保存 */
  touch() {
    clearTimeout(this._saveTimer);
    this._saveTimer = setTimeout(async () => {
      try {
        const response = await fetch('/api/state', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.db) });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        this.listeners.forEach(f => f('saved'));
        Sync.notifyChange(); // 登录后交给同步层推送云端；未登录为空操作
      } catch (e) { toast('保存失败：' + e.message, false); }
    }, 400);
  },

  /** 备份/云端记录的结构校验与替换（不触发的字段用默认补齐） */
  isValidState(obj) {
    const record = value => value && typeof value === 'object' && !Array.isArray(value);
    return record(obj) && record(obj.settings) && typeof obj.settings.nickname === 'string' &&
      /^\d{4}-\d{2}-\d{2}$/.test(obj.settings.examDate) && Number.isFinite(obj.settings.dailyTargetMinutes) &&
      ['lessonStatus', 'syllabusMastery', 'problems', 'exams', 'practice'].every(key => record(obj[key])) &&
      ['mistakes', 'mockResults'].every(key => Array.isArray(obj[key])) &&
      (obj.mockAttempts === undefined || record(obj.mockAttempts)) &&
      (record(obj.logs) || Array.isArray(obj.logs)) &&
      (obj.plan === null || (record(obj.plan) && Array.isArray(obj.plan.phases) && obj.plan.phases.every(phase => record(phase) && Array.isArray(phase.tasks))));
  },
  adoptState(obj) {
    if (Array.isArray(obj.logs)) {
      obj.logs = Object.fromEntries(obj.logs.map(log => [log.date, { minutes: log.minutes, content: log.content, tag: log.tag }]));
    }
    obj.mockAttempts ??= {};
    this.db = obj; this.touch();
  },

  onUpdate(fn) { this.listeners.add(fn); },

  /* ---------- 领域操作 ---------- */
  lesson(id) { return this.content.lessons.find(l => l.id === id); },
  lessonList(subject) {
    const order = { gaoshu: 0, xiandai: 1, gailv: 2 };
    return [...this.content.lessons].filter(l => !subject || l.subject === subject)
      .sort((a, b) => order[a.subject] - order[b.subject] || a.no - b.no);
  },
  setLessonStatus(id, status) {
    const st = this.db.lessonStatus[id] ??= { status: 0, minutes: 0, updatedAt: null };
    st.status = status; st.updatedAt = new Date().toISOString();
    this.touch();
  },
  addMinutes(id, m) {
    const st = this.db.lessonStatus[id] ??= { status: 0, minutes: 0, updatedAt: null };
    st.minutes += m; st.updatedAt = new Date().toISOString();
    this.logMinutes(m, `学习：${this.lesson(id)?.title || id}`);
  },

  logMinutes(minutes, content = '', tag = '学习') {
    const date = today();
    const rec = this.db.logs[date] ??= { minutes: 0, content: '', tag };
    rec.minutes += minutes;
    if (content) rec.content = rec.content ? rec.content + '；' + content : content;
    rec.updatedAt = new Date().toISOString();
    this.touch();
  },

  /** 练习题作答记录 practice[`${lessonId}#ex${no}`] = {result, times, lastAt, everWrong} */
  practiceKey(lessonId, no) { return `${lessonId}#ex${no}`; },
  markPractice(lessonId, exNo, result) {
    const k = this.practiceKey(lessonId, exNo);
    const rec = this.db.practice[k] ??= { result: null, times: 0, lastAt: null };
    rec.result = result; rec.times++; rec.lastAt = new Date().toISOString();
    if (result === 'wrong') rec.everWrong = true;
    if (result === 'wrong') this.addMistake({
      source: `随堂练习 · ${this.lesson(lessonId)?.subtitle || ''} ${this.lesson(lessonId)?.title || lessonId}`,
      ref: `练习第${exNo}题`,
      desc: this.lesson(lessonId)?.exercises?.find(e => e.no === exNo)?.problem || '',
    });
    this.touch();
  },

  markBookQuestion(id, result, response = '') {
    const question = this.content.bookQuestions?.find(q => q.id === id);
    if (!question || !['right', 'wrong'].includes(result)) return false;
    const key = 'book#' + id;
    const rec = this.db.practice[key] ??= { result: null, times: 0, lastAt: null };
    rec.result = result; rec.times++; rec.lastAt = new Date().toISOString(); rec.response = response;
    if (result === 'wrong') rec.everWrong = true;
    if (result === 'wrong') this.addMistake({ source: question.source, ref: question.number, desc: '', bookId: id });
    this.touch();
    return true;
  },

  /** 错题本 */
  addMistake({ source, ref, desc, reason = '未分类', bookId = null }) {
    const dup = this.db.mistakes.find(m => bookId ? m.bookId === bookId : !m.bookId && m.source === source && m.ref === ref);
    if (dup) { dup.count = (dup.count || 1) + 1; dup.due = today(); if (bookId) dup.bookId = bookId; this.touch(); return dup; }
    const m = {
      id: Math.random().toString(36).slice(2, 10), source, ref, desc, reason,
      added: today(), due: today(),
      stage: 0, count: 1, history: [],
    };
    if (bookId) m.bookId = bookId;
    this.db.mistakes.push(m); this.touch(); return m;
  },
  reviewMistake(id, remembered) {
    const m = this.db.mistakes.find(x => x.id === id); if (!m) return;
    const cycles = [1, 3, 7, 14, 30];
    m.history.push({ date: today(), remembered });
    if (!remembered) m.stage = 0;
    m.due = addDays(today(), cycles[m.stage]);
    if (remembered) m.stage = Math.min(m.stage + 1, cycles.length - 1);
    this.touch();
  },
  dueMistakes() {
    const t = today();
    return this.db.mistakes.filter(m => m.due <= t);
  },

  /** 1000题追踪 problems[drillKey] = [{id,no,status,note,star}] */
  drillProblems(key) { return this.db.problems[key] ??= []; },
  addDrillProblems(key, numbers) {
    const arr = this.drillProblems(key);
    const have = new Set(arr.map(p => p.no));
    let n = 0;
    for (const no of numbers) {
      if (have.has(no)) continue;
      arr.push({ id: Math.random().toString(36).slice(2, 10), no, status: 'todo', note: '', star: false });
      have.add(no); n++;
    }
    arr.sort((a, b) => (parseFloat(a.no) || 0) - (parseFloat(b.no) || 0));
    this.touch(); return n;
  },
  setDrillStatus(key, pid, status) {
    const arr = this.drillProblems(key);
    const p = arr.find(x => x.id === pid); if (!p) return;
    p.status = status; p.updatedAt = new Date().toISOString();
    this.touch();
  },

  mockSave(result) { this.db.mockResults.push(result); this.touch(); },
};
