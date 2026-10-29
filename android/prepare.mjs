import { cp, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const project = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const target = path.resolve(process.argv[2] || '');
if (!process.argv[2]) throw new Error('Asset output directory required');
const www = path.join(target, 'www');
await mkdir(www, { recursive: true });
await cp(path.join(project, 'public'), www, { recursive: true });
await cp(path.join(project, 'android', 'assets', 'android-adapter.js'), path.join(www, 'js', 'android-adapter.js'));
await cp(path.join(project, 'android', 'sync-config.json'), path.join(target, 'sync-config.json'));
const htmlPath = path.join(www, 'index.html');
const html = await readFile(htmlPath, 'utf8');
const entry = '<script type="module" src="/js/app.js"></script>';
if (!html.includes(entry)) throw new Error('Web application entry missing');
await writeFile(htmlPath, html.replace(entry, '<script src="/js/android-adapter.js"></script>\n' + entry));
const load = async f => {
  const fp = path.join(project, 'data', f);
  if (!existsSync(fp)) return null; // 逐步生成的内容（如 jc30-examples.js）允许暂缺
  return (await import(pathToFileURL(fp).href)).default;
};
const [syllabus, books, formulas, exams, mock1, mock2, curatedBookQuestions, importedBookQuestions, corrections, repoNotes, jc30Examples, knowledgeMap, sourceExcerpts] = await Promise.all(['seed/syllabus.js', 'seed/books.js', 'seed/formulas.js', 'seed/exams.js', 'seed/mock1.js', 'seed/mock2.js', 'seed/book-questions.js', 'seed/github-book-questions.js', 'seed/question-corrections.js', 'seed/repo-notes.js', 'seed/jc30-examples.js', 'seed/knowledge-map.js', 'seed/jc30-source-excerpts.js'].map(load));
const bookQuestions = [...curatedBookQuestions, ...importedBookQuestions, ...(Array.isArray(jc30Examples) ? jc30Examples : []), ...(sourceExcerpts || [])];
corrections?.apply?.(bookQuestions);
const lessonFiles = (await readdir(path.join(project, 'data', 'lessons'))).filter(f => f.endsWith('.js') && !f.startsWith('_')).sort();
const lessons = await Promise.all(lessonFiles.map(f => load('lessons/' + f)));
if (lessons.length !== 32) throw new Error('Expected 32 lessons');
const sourcePacks = JSON.parse(await readFile(path.join(project, 'public/resources/book-packs/index.json'), 'utf8'));
books.media = sourcePacks.documents.map(document => ({ ...document, subject: 'gaoshu', path: '', note: '内置原书例题与解答片段' }));
await writeFile(path.join(target, 'content.json'), JSON.stringify({ syllabus, books, formulas, exams, lessons, mocks: [mock1, mock2], bookQuestions, repoNotes: Array.isArray(repoNotes) ? repoNotes : [], knowledgeMap }));
console.log(`Prepared bundled assets: ${lessons.length} lessons, ${bookQuestions.length} book entries, ${books.media.length} PDF packs, 2 mock papers`);
