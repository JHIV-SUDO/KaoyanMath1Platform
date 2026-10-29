import { cp, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const cloud = path.dirname(fileURLToPath(import.meta.url));
const project = path.dirname(cloud);
const out = path.join(cloud, 'generated');
const platform = path.join(out, 'src', 'platform');
await mkdir(path.join(out, 'public'), { recursive: true });
await mkdir(platform, { recursive: true });
await cp(path.join(project, 'public', 'js'), path.join(platform, 'js'), { recursive: true });
await cp(path.join(project, 'public', 'css'), path.join(platform, 'css'), { recursive: true });
await cp(path.join(cloud, 'src', 'cloud.js'), path.join(out, 'src', 'cloud.js'));
await cp(path.join(cloud, 'src', 'cloud.css'), path.join(out, 'src', 'cloud.css'));

async function edit(file, from, to) {
  const value = await readFile(file, 'utf8');
  if (!value.includes(from) || value.indexOf(from) !== value.lastIndexOf(from)) throw new Error('Missing or ambiguous anchor: ' + file);
  await writeFile(file, value.replace(from, to));
}
const store = path.join(platform, 'js', 'store.js');
await edit(store, "    const r = await fetch('/api/bootstrap');\n    if (!r.ok) throw new Error(`HTTP ${r.status}`);\n    const data = await r.json();", '    const data = await window.CloudPlatform.bootstrap();');
const storeText = await readFile(store, 'utf8');
const touchPattern = /  touch\(\) \{[\s\S]*?\n  \},\n/;
if (!touchPattern.test(storeText)) throw new Error('Store touch anchor missing');
await writeFile(store, storeText.replace(touchPattern, '  touch() { window.CloudPlatform.save(this.db); },\n'));
const knowledge = path.join(platform, 'js', 'views', 'knowledge.js');
await edit(knowledge, "window.CloudPlatform?.loadThree ? await window.CloudPlatform.loadThree() : await Promise.all([\n      import('/vendor/three/three.module.js'), import('/vendor/three/OrbitControls.js'),\n    ])", 'await window.CloudPlatform.loadThree()');
await edit(path.join(platform, 'js', 'views', 'resources.js'), "import('/vendor/pdfjs/pdf.min.mjs')", 'window.CloudPlatform.loadPdfJs()');
const app = path.join(platform, 'js', 'app.js');
await edit(app, '数据保存在本地 data/db.json，导出可作备份。', '学习记录保存在登录账号的云端，可导出备份。');
await edit(app, "toast('导入成功，已保存')", "toast('已导入，正在同步')");
await edit(app, "toast('已保存')", "toast('已更新，正在同步')");

const load = async name => {
  const fp = path.join(project, 'data', name);
  if (!existsSync(fp)) return null; // 逐步生成的内容（如 jc30-examples.js）允许暂缺
  return (await import(pathToFileURL(fp).href)).default;
};
const [syllabus, books, formulas, exams, mock1, mock2, curatedBookQuestions, importedBookQuestions, corrections, repoNotes, jc30Examples, knowledgeMap, sourceExcerpts] = await Promise.all(['seed/syllabus.js', 'seed/books.js', 'seed/formulas.js', 'seed/exams.js', 'seed/mock1.js', 'seed/mock2.js', 'seed/book-questions.js', 'seed/github-book-questions.js', 'seed/question-corrections.js', 'seed/repo-notes.js', 'seed/jc30-examples.js', 'seed/knowledge-map.js', 'seed/jc30-source-excerpts.js'].map(load));
const bookQuestions = [...curatedBookQuestions, ...importedBookQuestions, ...(Array.isArray(jc30Examples) ? jc30Examples : []), ...(sourceExcerpts || [])];
corrections?.apply?.(bookQuestions);
const lessonFiles = (await readdir(path.join(project, 'data', 'lessons'))).filter(f => f.endsWith('.js') && !f.startsWith('_')).sort();
const lessons = await Promise.all(lessonFiles.map(f => load('lessons/' + f)));
if (lessons.length !== 32) throw new Error('Expected 32 lessons');
const sourcePacks = JSON.parse(await readFile(path.join(project, 'public', 'resources', 'book-packs', 'index.json'), 'utf8'));
books.media = sourcePacks.documents.map(document => ({ ...document, subject: 'gaoshu', path: '', note: '原书例题及解答片段，按需流式阅读' }));
for (const question of bookQuestions) {
  if (question.sourceExcerpt && sourcePacks.questions[question.id]) {
    question.sourceExcerpt.document = sourcePacks.questions[question.id];
  }
}
const contentFiles = [];
const contentParts = [];
await mkdir(path.join(out, 'public', 'content'), { recursive: true });
for (const [kind, values, size] of [['bookQuestions', bookQuestions, 180], ['repoNotes', repoNotes || [], 140]]) {
  for (let i = 0; i < values.length; i += size) {
    const filename = `public/content/${kind}-${String(i / size).padStart(2, '0')}.json`;
    await writeFile(path.join(out, filename), JSON.stringify(values.slice(i, i + size), null, 2));
    contentFiles.push(filename);
    contentParts.push({ kind, url: '/' + filename.slice('public/'.length) });
  }
}
await writeFile(path.join(out, 'public', 'content.json'), JSON.stringify({ syllabus, books, formulas, exams, lessons, mocks: [mock1, mock2], bookQuestions: [], repoNotes: [], bookQuestionCount: bookQuestions.length, repoNoteCount: (repoNotes || []).length, knowledgeMap, contentParts }, null, 2));

const html = (await readFile(path.join(project, 'public', 'index.html'), 'utf8'))
  .replace('<link rel="stylesheet" href="/vendor/katex/katex.min.css">\n', '')
  .replace('<link rel="stylesheet" href="/css/app.css">\n', '')
  .replace('<script src="/vendor/katex/katex.min.js"></script>\n<script src="/vendor/katex/auto-render.min.js"></script>\n<script type="module" src="/js/app.js"></script>', '<script type="module" src="./src/main.ts"></script>');
await writeFile(path.join(out, 'index.html'), html);
await writeFile(path.join(out, 'src', 'main.ts'), "import './platform/css/app.css';\nimport './cloud.js';\n");

const tests = [
  { name: 'Sign in and retain lesson progress', sanity: true, viewport: 'desktop', covers: ['anonymous access guard', 'sign in', 'course reading', 'learning status', 'cloud state read and write', 'persistence after refresh'], description: 'A learner signs in, records lesson progress and sees it after refresh.', steps: ['Confirm that the platform asks an anonymous visitor to sign in', 'Sign in with the test account', 'Open the first lesson and mark it as learning', 'Refresh the page and reopen the lesson'], expected: 'The first lesson remains marked as learning after refresh.' },
  { name: 'Explore knowledge and search all notes on mobile', viewport: 'mobile', covers: ['mobile navigation', '3D knowledge globe', 'subject filtering', 'prerequisite and question relationships', 'lecture navigation', 'repository note search and paging', 'syllabus and formula reference'], description: 'A learner follows knowledge relationships and searches imported notes within the App.', steps: ['Sign in with the test account', 'Open 知识地球, filter to 线性代数, select a lesson and inspect prerequisite and question details', 'Open the complete lecture, expand its repository notes and search a topic using the search field', 'Browse a later notes page when there are multiple pages', 'Open the syllabus and formula reference'], expected: 'The matching lecture and searchable note text appear in the App; knowledge and reference navigation stay in the App.' },
  { name: 'Practice, review, source pages and mock examination', viewport: 'desktop', covers: ['lazy built-in question loading', 'question figure zoom', 'wrong question creation and deletion', 'original question navigation', 'internal source PDF rendering', 'mock answers and grading', 'cloud state writes'], description: 'Built-in questions and original source pages support practice and review without importing files.', steps: ['Sign in with the test account', 'Open practice, answer a choice question incorrectly and verify it in the wrong question book', 'Return to its original question from the wrong question entry', 'Open #/practice/book/jc30-l01-012 and zoom its figure', 'Open #/practice/book/jc30-l01-019, expand the original-page fold and follow its internal PDF reader link', 'Confirm a PDF page is rendered, then navigate back to the wrong question book', 'Delete the test wrong question, confirm deletion and refresh to verify it remains absent', 'Open a mock exam, answer a choice question and submit'], expected: 'The figure and real PDF source page render inside the App; review links work, deletion persists and a mock result is displayed.' },
  { name: 'Records, planning and another device', viewport: 'desktop', covers: ['same-account cross-device sync', 'study plan', 'settings', 'statistics', 'drill and exam tracking', 'backup export and validation', 'sign out', 'private account boundary'], description: 'Records created in one browser appear in another browser using the same account.', steps: ['Actor A signs in with the test account and sets the nickname to 同步验收', 'Actor A creates a study plan and records drill and exam progress; wait for saved confirmation', 'Actor B signs in with the same account in a separate browser context and opens settings, the plan and statistics', 'Actor A exports a backup and restores it, then attempts to import a JSON file containing only {settings:null}', 'Actor A signs out; confirm the sign-in gate hides learning records'], expected: 'Actor B sees 同步验收 and the saved learning records; the valid backup restores, invalid input is rejected without clearing data, and signing out restores the access gate.' },
  { name: 'Preserve a draft when saving fails', viewport: 'mobile', covers: ['save failure recovery', 'request receipt lookup', 'draft export', 'conflict protection', 'draft recovery after refresh', 'internal resource catalogue'], description: 'A failed cloud write preserves the local draft and exposes recovery actions.', qa_faults: [{ method: 'PUT', path: '/api/state', status: 500, body_json: { error: 'simulated_failure' } }], steps: ['Sign in with the test account', 'Open 资料阅读器 and confirm built-in lecture PDF packs are listed', 'Change the nickname to 待同步验收 in settings and save while the injected write failure is active', 'Confirm the visible failure message and export the unsynchronized draft', 'Use 检查同步状态 to query the request receipt, then refresh the page'], expected: 'The failure remains visible with a draft export action, receipt checking does not discard pending data, and 待同步验收 remains in the recovered local draft after refresh.' },
];
JSON.parse(JSON.stringify(tests));
await mkdir(path.join(out, 'tests'), { recursive: true });
await writeFile(path.join(out, 'tests', 'tests.json'), JSON.stringify(tests, null, 2));

const templateHtml = `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>APP_TITLE</title>\n    <link rel="stylesheet" href="./src/styles.css">\n</head>\n<body>\n    <div id="app">APP_CONTENT</div>\n    <script type="module" src="./src/main.ts"></script>\n</body>\n</html>\n`;
const templateBackend = `import { router, json, error } from "@appdeploy/sdk";\n\nexport const handler = router({\n    "GET /api/_healthcheck": [async () => json({ message: "Success" })],\n})`;
const files = [
  { filename: 'index.html', diffs: [{ from: templateHtml, to: html }] },
  { filename: 'src/main.ts', diffs: [{ from: "import './styles.css';", to: "import './platform/css/app.css';\nimport './cloud.js';" }] },
  { filename: 'package.json', diffs: [{ from: '"lucide": "^0.469.0"', to: '"lucide": "^0.469.0",\n        "katex": "0.16.21",\n        "three": "0.170.0",\n        "pdfjs-dist": "4.10.38"' }] },
  { filename: 'backend/index.ts', diffs: [{ from: templateBackend, to: await readFile(path.join(cloud, 'backend', 'index.ts'), 'utf8') }] },
  { filename: 'tests/tests.json', content: JSON.stringify(tests, null, 2) },
];
async function addFiles(dir, prefix) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    const name = prefix + '/' + entry.name;
    if (entry.isDirectory()) await addFiles(file, name);
    else files.push({ filename: name, content: await readFile(file, 'utf8') });
  }
}
await addFiles(path.join(out, 'src', 'platform'), 'src/platform');
for (const name of ['src/cloud.js', 'src/cloud.css', 'public/content.json', ...contentFiles]) files.push({ filename: name, content: await readFile(path.join(out, name), 'utf8') });
if (new Set(files.map(f => f.filename)).size !== files.length) throw new Error('Duplicate deployment filename');
await writeFile(path.join(cloud, 'deploy-files.json'), JSON.stringify(files));
console.log(`Cloud source ready: ${lessons.length} lessons, ${files.length} files, ${tests.length} tests`);
