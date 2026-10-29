import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import excerpts from '../data/seed/jc30-source-excerpts.js';
import jc30Examples from '../data/seed/jc30-examples.js';
import bookPackIndex from '../public/resources/book-packs/index.json' with { type: 'json' };

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tempRoot = 'D:/ClaudeWorkspace/Temp';
fs.mkdirSync(tempRoot, { recursive: true });
const tempDir = fs.mkdtempSync(path.join(tempRoot, 'kaoyan-content-e2e-'));
const port = 8410;
const base = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, [path.join(root, 'service/server.mjs')], {
  cwd: root, env: { ...process.env, HOST: '127.0.0.1', PORT: String(port), SERVICE_DATA_DIR: path.join(tempDir, 'state') },
  stdio: ['ignore', 'pipe', 'pipe'],
});
let browser;

try {
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('service startup timeout')), 10000);
    server.stdout.on('data', chunk => { if (String(chunk).includes('已启动')) { clearTimeout(timer); resolve(); } });
    server.once('exit', code => reject(new Error(`service exited before start: ${code}`)));
  });
  const { chromium } = createRequire(path.join(process.env.E2E_PLAYWRIGHT_DIR || 'D:/ClaudeWorkspace/Temp/kaoyan-e2e-deps', 'package.json'))('playwright');
  const bootstrap = await (await fetch(base + '/api/bootstrap')).json();
  assert.equal(bootstrap.content.books.media.filter(doc => doc.resourceUrl?.startsWith('/resources/book-packs/')).length, 18, 'default resource catalogue exposes all bundled PDF packs without import');
  browser = await chromium.launch();
  const excerpt = excerpts.find(q => q.lessonId === 'gs01' && q.sourceExcerpt.pages.length >= 2);
  assert.ok(excerpt, 'multi-page source excerpt exists for a packed lecture');
  const packedQuestion = bookPackIndex.questions[excerpt.id];
  const packedDocument = bookPackIndex.documents.find(doc => doc.key === packedQuestion?.key);
  assert.ok(packedQuestion && packedDocument, 'source excerpt has an actual internal PDF pack mapping');

  const attachContent = async route => {
    const response = await route.fetch();
    const data = await response.json();
    let question = data.content.bookQuestions.find(q => q.id === excerpt.id);
    if (!question) {
      question = { ...excerpt };
      data.content.bookQuestions.push(question);
    }
    Object.assign(question, excerpt, { sourceExcerpt: { ...excerpt.sourceExcerpt, document: packedQuestion } });
    if (!data.content.books.media.some(doc => doc.key === packedDocument.key)) data.content.books.media.push(packedDocument);
    await route.fulfill({ response, json: data });
  };

  // Cloud mode opens the document route inside the App and destroys the PDF document on route change.
  const cloud = await browser.newPage();
  cloud.setDefaultTimeout(8000);
  const cloudErrors = [];
  let cloudJpegRequests = 0;
  cloud.on('pageerror', error => cloudErrors.push(error.message));
  cloud.on('request', request => { if (request.url().includes('/resources/book-excerpts/')) cloudJpegRequests++; });
  await cloud.addInitScript(() => {
    window.__pdfJsLoaded = 0;
    window.CloudPlatform = { loadPdfJs: async () => {
      window.__pdfJsLoaded++;
      const pdfjs = await import('/vendor/pdfjs/pdf.min.mjs');
      pdfjs.GlobalWorkerOptions.workerSrc = '/vendor/pdfjs/pdf.worker.min.mjs';
      return pdfjs;
    } };
  });
  await cloud.route('**/api/bootstrap', attachContent);
  await cloud.goto(`${base}/#/practice/book/${excerpt.id}`);
  const cloudFold = cloud.locator('.source-excerpt');
  await cloudFold.locator('summary').click();
  const internalLink = cloudFold.locator(`a[href="#/resources/${packedQuestion.key}?page=${packedQuestion.firstPage}"]`);
  await internalLink.waitFor();
  assert.equal(await cloudFold.locator('img').count(), 0, 'cloud scan fold never inserts JPEGs');
  assert.equal(cloudJpegRequests, 0, 'cloud scan fold does not request JPEG assets');
  await internalLink.click();
  await cloud.locator('#pdf-canvas').waitFor();
  await cloud.waitForFunction(() => document.querySelector('#pdf-canvas')?.width > 0);
  assert.equal(await cloud.locator('.pdf-toolbar input[type="number"]').inputValue(), String(packedQuestion.firstPage), 'internal PDF reader opens at the mapped source page');
  const oldCanvas = await cloud.locator('#pdf-canvas').elementHandle();
  const canvasBeforeDispose = await oldCanvas.evaluate(canvas => ({ width: canvas.width, height: canvas.height }));
  await cloud.goto(`${base}/#/dashboard`);
  const canvasAfterDispose = await oldCanvas.evaluate(canvas => ({ width: canvas.width, height: canvas.height, connected: canvas.isConnected }));
  assert.ok(canvasBeforeDispose.width > 0 && canvasBeforeDispose.height > 0, 'internal PDF route rendered a real page');
  assert.deepEqual(canvasAfterDispose, { width: 0, height: 0, connected: false }, 'cleanup clears the canvas on route change');
  assert.equal(await cloud.evaluate(() => window.__pdfJsLoaded), 1, 'CloudPlatform PDF.js loader was used');
  const pdfRequestCount = cloudJpegRequests;
  await cloud.goto(`${base}/#/resources/not-in-the-book.pdf?page=4`);
  await cloud.getByRole('heading', { name: '资料暂不可用' }).waitFor();
  assert.equal(await cloud.locator('#pdf-canvas').count(), 0, 'unknown resource does not open another/default PDF');
  assert.equal(cloudJpegRequests, pdfRequestCount);
  assert.deepEqual(cloudErrors, []);
  console.log('Cloud source link, internal PDF route, and canvas cleanup passed.');

  // Bundled/local mode mounts only the current source page, releases it on close, and keeps q.figure zoomable.
  const local = await browser.newPage();
  local.setDefaultTimeout(8000);
  const localErrors = [];
  let localJpegRequests = 0;
  local.on('pageerror', error => localErrors.push(error.message));
  local.on('request', request => { if (request.url().includes('/resources/book-excerpts/')) localJpegRequests++; });
  await local.route('**/api/bootstrap', attachContent);
  await local.goto(`${base}/#/practice/book/${excerpt.id}`);
  const localFold = local.locator('.source-excerpt');
  assert.equal(await localFold.locator('img').count(), 0, 'local scan images are not inserted before opening');
  assert.equal(localJpegRequests, 0, 'local scan images are not requested before opening');
  await localFold.locator('summary').click();
  await local.waitForFunction(() => document.querySelector('.source-excerpt figure img')?.complete);
  assert.equal(await localFold.locator('figure img').count(), 1, 'only one source page is mounted at once');
  assert.match(await localFold.locator('figcaption').innerText(), /PDF 第 \d+ 页/);
  await localFold.getByRole('button', { name: '下一页' }).click();
  assert.equal(await localFold.locator('figure img').count(), 1, 'turning pages replaces the previous page');
  await localFold.locator('summary').click();
  await local.waitForFunction(() => document.querySelectorAll('.source-excerpt img').length === 0);
  assert.equal(await localFold.locator('img').count(), 0, 'closing the source fold releases page and dialog images');
  const pictured = jc30Examples.find(q => q.id === 'jc30-l01-012');
  await local.evaluate(async q => {
    const { bookProblemCard } = await import('/js/views/practice.js');
    const card = bookProblemCard({ question: q, rec: null });
    card.id = 'figure-contract';
    document.body.append(card);
  }, pictured);
  await local.waitForFunction(() => { const image = document.querySelector('#figure-contract figure img'); return image?.complete && image.naturalWidth > 0; });
  await local.locator('#figure-contract figure button').click();
  assert.equal(await local.locator('#figure-contract dialog[open] img').count(), 1, 'legacy q.figure still opens its zoom dialog');
  assert.deepEqual(localErrors, []);

  console.log('Content access E2E passed: internal PDF route, dispose cleanup, local one-page scans, cloud link, and legacy figure zoom.');
} finally {
  await browser?.close();
  server.kill();
  const resolved = path.resolve(tempDir);
  if (resolved.startsWith(path.resolve(tempRoot) + path.sep)) fs.rmSync(resolved, { recursive: true, force: true });
}
