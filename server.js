// 考研数学一学习平台 —— 零依赖本地服务器
// 功能：静态资源 / 用户状态API / 讲义与内容API / PDF流式播放（支持Range，供PDF.js）
import http from 'node:http';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = __dirname;
const PUBLIC = path.join(ROOT, 'public');
const DATA = path.join(ROOT, 'data');
const LESSONS_DIR = path.join(DATA, 'lessons');
const DB_FILE = path.join(DATA, 'db.json');
const MEDIA_DIR = path.join(ROOT, 'media');

const PORT = Number(process.env.PORT || 8321);

/* ---------------- 种子内容（考纲/书目/公式/真题/模拟卷） ---------------- */
async function importDefault(p, fallback = null) {
  try {
    const m = await import(url.pathToFileURL(p).href + `?t=${Date.now()}`);
    return m.default ?? m;
  } catch (e) {
    console.warn(`[content] 加载失败 ${path.basename(p)}: ${e.message}`);
    return fallback;
  }
}

let CONTENT = null;
async function loadContent() {
  const seed = (f) => path.join(DATA, 'seed', f);
  const [syllabus, books, formulas, exams, mock1, mock2, curatedBookQuestions, importedBookQuestions, questionCorrections, repoNotes, jc30Examples, knowledgeMap, sourceExcerpts] = await Promise.all([
    importDefault(seed('syllabus.js'), { subjects: [] }),
    importDefault(seed('books.js'), { media: [], drill: {} }),
    importDefault(seed('formulas.js'), { groups: [] }),
    importDefault(seed('exams.js'), []),
    importDefault(seed('mock1.js')),
    importDefault(seed('mock2.js')),
    importDefault(seed('book-questions.js'), []),
    importDefault(seed('github-book-questions.js'), []),
    importDefault(seed('question-corrections.js'), null),
    importDefault(seed('repo-notes.js'), []),
    importDefault(seed('jc30-examples.js'), []),
    importDefault(seed('knowledge-map.js'), null),
    importDefault(seed('jc30-source-excerpts.js'), []),
  ]);
  // 讲义：扫描 lessons 目录，逐文件容错加载
  const lessons = [];
  try {
    const files = (await fsp.readdir(LESSONS_DIR)).filter(f => f.endsWith('.js') && !f.startsWith('_')).sort();
    for (const f of files) {
      const L = await importDefault(path.join(LESSONS_DIR, f));
      if (L && L.id) lessons.push(L);
    }
  } catch (e) { console.warn('[content] lessons 目录不可读: ' + e.message); }
  const mocks = [mock1, mock2].filter(Boolean);
  const bookQuestions = [...curatedBookQuestions, ...importedBookQuestions, ...(Array.isArray(jc30Examples) ? jc30Examples : []), ...sourceExcerpts];
  // 应用人工核验修订（可重放，见 data/seed/question-corrections.js）
  const corrected = questionCorrections?.apply?.(bookQuestions) ?? 0;
  if (corrected) console.log(`[content] 已应用 ${corrected} 条人工核验修订`);
  const packIndex = path.join(PUBLIC, 'resources/book-packs/index.json');
  if (fs.existsSync(packIndex)) {
    const packs = JSON.parse(await fsp.readFile(packIndex, 'utf8'));
    books.media = [...packs.documents.map(doc => ({ ...doc, subject: 'gaoshu', note: '内置原书例题与解答片段' })),
      ...books.media.filter(doc => fs.existsSync(doc.path) || fs.existsSync(path.join(MEDIA_DIR, doc.key)))];
  }
  CONTENT = { syllabus, books, formulas, exams, lessons, mocks, bookQuestions, repoNotes: Array.isArray(repoNotes) ? repoNotes : [], knowledgeMap };
  return CONTENT;
}

/* ---------------- 用户状态 ---------------- */
function defaultDB() {
  return {
    version: 1,
    createdAt: new Date().toISOString(),
    settings: { nickname: '研友', examDate: '2026-12-19', dailyTargetMinutes: 180 },
    lessonStatus: {},        // lessonId -> {status: 0未学/1学习中/2已学, updatedAt, minutes}
    syllabusMastery: {},     // 章节id -> 0/1/2
    problems: {},            // drillKey -> [{id,no,status,note,star,updatedAt}]  status: todo/done/wrong/redo
    mistakes: [],            // {id,source,ref,desc,reason,added,due,stage,history:[]}
    logs: [],                // {date, minutes, content, tag}
    exams: {},               // year -> {done,score,notes}
    plan: null,              // {phases:[{name,start,end,tasks:[{id,title,date,done,ref}]}]}
    practice: {},            // exerciseKey -> {result: right|wrong, times, lastAt}
    mockAttempts: {},        // mockId -> 未交卷答案与开始时间
    mockResults: [],         // {mockId,date,score,choice,blank,solve,durationMin,perProblem:{}}
    pomodoro: { running: null },
  };
}
async function readDB() {
  try { return JSON.parse(await fsp.readFile(DB_FILE, 'utf8')); }
  catch (e) {
    if (e.code !== 'ENOENT') throw e;
    const d = defaultDB(); await writeDB(d); return d;
  }
}
async function writeDB(db) {
  const tmp = DB_FILE + '.tmp';
  await fsp.writeFile(tmp, JSON.stringify(db, null, 1), 'utf8');
  await fsp.rename(tmp, DB_FILE);
}

/* ---------------- HTTP 工具 ---------------- */
const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.pdf': 'application/pdf',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf',
};
function sendJSON(res, code, obj) {
  const s = JSON.stringify(obj);
  res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(s);
}
function readBody(req, limit = 64 * 1024 * 1024) {
  return new Promise((resolve, reject) => {
    let n = 0; const chunks = [];
    req.on('data', c => { n += c.length; if (n > limit) { reject(new Error('body too large')); req.destroy(); } else chunks.push(c); });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

/* ---------------- PDF 流式服务（Range） ---------------- */
function mediaCandidates(key) {
  const list = [];
  const reg = CONTENT?.books?.media?.find(m => m.key === key);
  if (reg && reg.path) list.push(reg.path);
  list.push(path.join(MEDIA_DIR, key));
  list.push(path.join(MEDIA_DIR, key + '.pdf'));
  return list;
}
async function servePDF(req, res, key) {
  let fp = null, st = null;
  for (const c of mediaCandidates(decodeURIComponent(key))) {
    try { st = await fsp.stat(c); if (st.isFile()) { fp = c; break; } } catch {}
  }
  if (!fp) { sendJSON(res, 404, { error: '未找到媒体文件: ' + key }); return; }
  const size = st.size;
  const range = req.headers.range;
  const base = { 'Accept-Ranges': 'bytes', 'Content-Type': 'application/pdf', 'Cache-Control': 'no-store' };
  if (range) {
    const m = /bytes=(\d*)-(\d*)/.exec(range);
    let start = m && m[1] ? parseInt(m[1]) : 0;
    let end = m && m[2] ? parseInt(m[2]) : Math.min(start + 4 * 1024 * 1024, size - 1);
    end = Math.min(end, size - 1);
    if (isNaN(start) || start > end || start >= size) {
      res.writeHead(416, { 'Content-Range': `bytes */${size}` }); res.end(); return;
    }
    res.writeHead(206, { ...base, 'Content-Range': `bytes ${start}-${end}/${size}`, 'Content-Length': end - start + 1 });
    fs.createReadStream(fp, { start, end }).pipe(res);
  } else {
    res.writeHead(200, { ...base, 'Content-Length': size });
    fs.createReadStream(fp).pipe(res);
  }
}

/* ---------------- 静态文件 ---------------- */
function serveStatic(req, res, pathname) {
  let rel = pathname === '/' ? '/index.html' : pathname;
  rel = rel.split('?')[0];
  let fp = path.normalize(path.join(PUBLIC, rel));
  if (!fp.startsWith(PUBLIC)) { res.writeHead(403); res.end(); return; }
  fsp.readFile(fp).then(buf => {
    const ext = path.extname(fp).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';
    const cache = rel.startsWith('/vendor/') ? 'public, max-age=86400' : 'no-cache';
    res.writeHead(200, { 'Content-Type': mime, 'Cache-Control': cache });
    res.end(buf);
  }).catch(() => {
    // SPA 兜底
    fsp.readFile(path.join(PUBLIC, 'index.html')).then(b => {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); res.end(b);
    }).catch(() => { res.writeHead(404); res.end('Not Found'); });
  });
}

/* ---------------- 路由 ---------------- */
const server = http.createServer(async (req, res) => {
  const u = new URL(req.url, 'http://localhost');
  const p = u.pathname;
  try {
    if (p.startsWith('/media/')) return servePDF(req, res, p.slice(7));
    if (p === '/api/bootstrap') {
      const db = await readDB();
      return sendJSON(res, 200, { db, content: CONTENT });
    }
    if (p === '/api/state' && req.method === 'GET') {
      return sendJSON(res, 200, await readDB());
    }
    if (p === '/api/state' && req.method === 'PUT') {
      const body = JSON.parse(await readBody(req));
      if (!body || typeof body !== 'object') return sendJSON(res, 400, { error: 'bad state' });
      await writeDB(body);
      return sendJSON(res, 200, { ok: true, savedAt: new Date().toISOString() });
    }
    if (p === '/api/health') return sendJSON(res, 200, { app: 'kaoyan-math1', ok: true, lessons: CONTENT?.lessons?.length ?? 0, mocks: CONTENT?.mocks?.length ?? 0 });
    if (req.method === 'GET') return serveStatic(req, res, p);
    res.writeHead(405); res.end();
  } catch (e) {
    console.error('[server]', e);
    sendJSON(res, 500, { error: e.message });
  }
});

await loadContent();
server.listen(PORT, '127.0.0.1', () => {
  console.log(`考研数学一学习平台已启动: http://127.0.0.1:${PORT}`);
  console.log(`  讲义 ${CONTENT.lessons.length} 讲 | 模拟卷 ${CONTENT.mocks.length} 套 | 考纲 ${CONTENT.syllabus?.subjects?.length ?? 0} 科`);
});
