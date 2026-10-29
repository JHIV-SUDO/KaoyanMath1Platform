// Supply bundled content to an older local server that is still running.
import { readFile, rename, writeFile } from 'node:fs/promises';
import curated from '../data/seed/book-questions.js';
import imported from '../data/seed/github-book-questions.js';
import corrections from '../data/seed/question-corrections.js';
import repoNotes from '../data/seed/repo-notes.js';
import examples from '../data/seed/jc30-examples.js';
import sourceExcerpts from '../data/seed/jc30-source-excerpts.js';
import knowledgeMap from '../data/seed/knowledge-map.js';

const bookQuestions = [...curated, ...imported, ...examples, ...sourceExcerpts];
corrections.apply(bookQuestions);
const index = JSON.parse(await readFile(new URL('../public/resources/book-packs/index.json', import.meta.url), 'utf8'));
const booksMedia = index.documents.map(doc => ({ ...doc, subject: 'gaoshu', note: '内置原书例题与解答片段' }));
const target = new URL('../public/desktop-compat-content.json', import.meta.url);
const temporary = new URL('../public/desktop-compat-content.json.tmp', import.meta.url);
await writeFile(temporary, JSON.stringify({ bookQuestions, repoNotes, knowledgeMap, booksMedia }));
await rename(temporary, target);
console.log(`Bundled desktop compatibility content: ${bookQuestions.length} book entries, ${repoNotes.length} notes`);
