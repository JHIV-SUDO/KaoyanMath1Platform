// 资料阅读器：PDF.js 内嵌阅读（支持1000题/30讲目录导航、跳页）
import { S } from '../store.js';
import { el } from '../util.js';
import { inAppLearningEntry } from '../learning-links.js';

const MAX_CANVAS_PIXELS = 5_000_000;

export function resources(main, arg = '') {
  let pdfDoc = null, loadingTask = null, renderTask = null, curPage = 1, scale = 1.1;
  let disposed = false, renderVersion = 0, renderQueue = Promise.resolve();
  // arg 形如 "shiti.pdf?page=12"
  const [fileKey, query] = (arg || '').split('?');
  const qParams = new URLSearchParams(query || '');
  const media = S.content.books.media;
  let requested = '';
  try { requested = fileKey ? decodeURIComponent(fileKey) : ''; }
  catch { return showUnavailable(main, fileKey); }
  const exam = /^exam-(\d{4})\.pdf$/.exec(requested);
  const cur = media.find(m => m.key === requested) ?? (exam ? { key: requested, title: `${exam[1]} 年真题`, pages: 0, path: `media/${requested}` } : null);
  if (!requested) return showCatalog(main, media);
  if (!cur) return showUnavailable(main, requested);
  curPage = Number(qParams.get('page')) || 1;
  scale = Math.max(0.4, Math.min(3, Number(qParams.get('zoom')) || 1.1));

  // 侧栏目录
  const toc = el('div', { class: 'pdf-toc' });
  const mainCol = el('div', { class: 'pdf-main' });
  const entry = el('div', { class: 'card' },
    el('h3', {}, '学习入口（App 内）'),
    el('p', { style: 'color:var(--ink2);font-size:13px' }, '核心学习无需导入资料：讲义、题库、知识架构全部内置；本页用于阅读原始资料的扫描版。'));
  for (const item of inAppLearningEntry()) {
    entry.append(el('div', { style: 'margin:8px 0' },
      el('a', { href: item.hash }, item.title),
      el('span', { style: 'color:var(--ink3);font-size:12px' }, ' · ' + item.detail)));
  }
  main.append(
    el('div', { class: 'page-head' },
      el('h1', {}, '资料阅读器'),
      el('span', { class: 'sub' }, '原资料扫描页 · 内置阅读与跳页')),
    entry,
    el('div', { class: 'pdf-layout' }, toc, mainCol));

  // 文件切换
  toc.append(el('div', { style: 'font-size:12px;color:var(--ink3);padding:4px 8px' }, '选择资料'));
  for (const m of media) {
    toc.append(el('div', { class: 'toc-item' + (m.key === cur.key ? ' on' : ''), style: m.key === cur.key ? 'color:var(--accent);font-weight:700' : '', onclick: () => location.hash = '#/resources/' + encodeURIComponent(m.key) }, `📕 ${m.title}（${m.pages}页）`));
  }
  toc.append(el('div', { class: 'divider' }));

  // 目录导航
  if (cur.key === 'shiti.pdf') {
    toc.append(el('div', { style: 'font-size:12px;color:var(--ink3);padding:4px 8px' }, '1000题 目录（点击跳页）'));
    for (const [pian, groups] of Object.entries(S.content.books.drill)) {
      toc.append(el('div', { class: 'toc-item', style: 'font-weight:700' }, pian));
      for (const g of groups) {
        toc.append(el('div', { class: 'toc-item l2', style: 'font-weight:600' }, g.label));
        for (const ch of g.chapters) {
          toc.append(el('div', { class: 'toc-item l2', onclick: () => gotoPage(ch.pages[0]) }, `${ch.title} · P${ch.pages[0]}`));
        }
      }
    }
  } else if (cur.key === 'jichu30.pdf') {
    toc.append(el('div', { style: 'font-size:12px;color:var(--ink3);padding:4px 8px' }, '基础30讲（高数）18讲（页码为估算，可手动校准）'));
    for (const t of S.content.books.jichu30Toc) {
      toc.append(el('div', { class: 'toc-item l2', onclick: () => gotoPage(t.start || 1) }, `第${t.no}讲 ${t.title}`));
    }
  } else {
    toc.append(el('div', { class: 'toc-item', style: 'color:var(--ink3)' }, '该资料无内置目录，请用页码导航'));
  }

  // 工具栏
  const pageInput = el('input', { type: 'number', value: curPage, min: 1, max: cur.pages || 999999, style: 'width:76px', onchange: (e) => gotoPage(Number(e.target.value)) });
  const pageCount = el('span', { style: 'font-size:12.5px;color:var(--ink3)' }, `/ ${cur.pages || '?'}`);
  const toolbar = el('div', { class: 'pdf-toolbar' },
    el('a', { class: 'btn small', href: '#/resources' }, '← 返回'),
    el('b', { style: 'font-size:13.5px' }, cur.title),
    window.AndroidPlatform && !cur.resourceUrl ? el('button', { class: 'btn small', onclick: () => window.AndroidPlatform.choosePdf(cur.key) }, '选择本机 PDF') : null,
    el('span', { style: 'flex:1' }),
    el('button', { class: 'btn small', onclick: () => gotoPage(curPage - 1) }, '◀ 上一页'),
    pageInput, pageCount,
    el('button', { class: 'btn small', onclick: () => gotoPage(curPage + 1) }, '下一页 ▶'),
    el('button', { class: 'btn small', onclick: () => { scale = Math.max(0.4, scale - 0.15); renderPage(); } }, '－'),
    el('button', { class: 'btn small', onclick: () => { scale = Math.min(3, scale + 0.15); renderPage(); } }, '＋'),
    el('button', { class: 'btn small', onclick: () => { scale = 1.1; renderPage(); } }, '适宽'));
  mainCol.append(toolbar);

  const canvasWrap = el('div', { id: 'pdf-canvas-wrap' });
  const canvas = el('canvas', { id: 'pdf-canvas' });
  canvasWrap.append(canvas);
  mainCol.append(canvasWrap);
  mainCol.append(el('div', { style: 'text-align:center;color:var(--ink3);font-size:12px;margin-top:8px' },
    cur.resourceUrl ? (cur.note || 'App 内置资料') : window.AndroidPlatform ? '选择手机中的 PDF 后即可阅读' : `来源：${cur.path || `/media/${cur.key}`} · ${cur.note || ''}`));

  void loadPdf();

  async function loadPdf() {
    try {
      const pdfjs = window.CloudPlatform?.loadPdfJs
        ? await window.CloudPlatform.loadPdfJs()
        : await import('/vendor/pdfjs/pdf.min.mjs');
      if (disposed) return;
      if (!window.CloudPlatform?.loadPdfJs) pdfjs.GlobalWorkerOptions.workerSrc = '/vendor/pdfjs/pdf.worker.min.mjs';
      const url = cur.resourceUrl || '/media/' + encodeURIComponent(cur.key);
      loadingTask = pdfjs.getDocument({ url, rangeChunkSize: 262144 });
      pdfDoc = await loadingTask.promise;
      if (disposed) { void pdfDoc.destroy(); return; }
      if (curPage > pdfDoc.numPages) curPage = pdfDoc.numPages;
      pageInput.max = pdfDoc.numPages;
      pageCount.textContent = `/ ${pdfDoc.numPages}`;
      await renderPage();
    } catch (e) {
      if (disposed) return;
      canvasWrap.replaceChildren(el('div', { class: 'empty', style: 'padding:24px' },
        window.AndroidPlatform ? '资料暂不可用。你可以返回 App 内题库继续学习，或选择本机 PDF 阅读。' : `资料加载失败：${e.message}。请返回资料列表或继续使用 App 内讲义与题库。`));
    }
  }

  async function renderPage() {
    const version = ++renderVersion;
    renderTask?.cancel();
    const run = renderQueue.catch(() => {}).then(async () => {
      if (disposed || version !== renderVersion || !pdfDoc || !canvas.isConnected) return;
      const pageNo = Math.max(1, Math.min(curPage, pdfDoc.numPages));
      const page = await pdfDoc.getPage(pageNo);
      if (disposed || version !== renderVersion || !canvas.isConnected) { page.cleanup(); return; }
      const viewport = page.getViewport({ scale });
      const ratio = Math.min(window.devicePixelRatio || 1, Math.sqrt(MAX_CANVAS_PIXELS / (viewport.width * viewport.height)));
      const renderViewport = page.getViewport({ scale: scale * ratio });
      canvas.width = Math.ceil(renderViewport.width);
      canvas.height = Math.ceil(renderViewport.height);
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = 'auto';
      canvas.style.maxWidth = '100%';
      const task = page.render({ canvasContext: canvas.getContext('2d'), viewport: renderViewport });
      renderTask = task;
      try {
        await task.promise;
        if (!disposed && version === renderVersion) pageInput.value = pageNo;
      } catch (e) {
        if (!disposed && e?.name !== 'RenderingCancelledException') throw e;
      } finally {
        if (renderTask === task) renderTask = null;
        page.cleanup();
      }
    });
    const settled = run.catch(e => {
      if (!disposed) canvasWrap.replaceChildren(el('div', { class: 'empty', style: 'padding:24px' }, `PDF 页面渲染失败：${e.message}`));
    });
    renderQueue = settled;
    return settled;
  }
  async function gotoPage(n) {
    n = Number(n); if (!n || n < 1) n = 1;
    if (pdfDoc && n > pdfDoc.numPages) n = pdfDoc.numPages;
    curPage = n;
    await renderPage();
    canvasWrap.scrollTop = 0;
  }

  return () => {
    if (disposed) return;
    disposed = true;
    renderVersion++;
    renderTask?.cancel();
    if (pdfDoc) void pdfDoc.destroy();
    else if (loadingTask) void loadingTask.destroy();
    canvas.width = 0; canvas.height = 0;
    canvasWrap.replaceChildren();
  };
}

function showCatalog(main, media) {
  main.append(el('div', { class: 'page-head' }, el('h1', {}, '资料库'), el('span', { class: 'sub' }, '原始资料可选；核心学习内容已内置在 App 内')));
  const list = el('div', { class: 'grid c2' });
  for (const item of media) list.append(el('a', { class: 'card', href: '#/resources/' + encodeURIComponent(item.key) },
    el('b', {}, item.title), el('p', { style: 'color:var(--ink3);font-size:12px' }, `${item.pages || '?'} 页 · 打开 App 内阅读器`)));
  main.append(list, learningLinksCard());
}

function showUnavailable(main, key) {
  main.append(el('div', { class: 'page-head' }, el('h1', {}, '资料暂不可用')),
    el('div', { class: 'card' },
      el('p', {}, `当前资料列表中找不到“${key}”。`),
      el('p', { class: 'warn-box' }, '你仍可直接在 App 内使用讲义、题库和知识架构。'),
      el('a', { class: 'btn small', href: '#/resources' }, '返回资料列表'),
      el('a', { class: 'btn small', href: '#/practice', style: 'margin-left:8px' }, '打开练习题库')),
    learningLinksCard());
}

function learningLinksCard() {
  const entry = el('div', { class: 'card', style: 'margin-top:14px' }, el('b', {}, '继续在 App 内学习'));
  for (const item of inAppLearningEntry()) entry.append(el('p', { style: 'margin:8px 0' },
    el('a', { href: item.hash }, item.title), el('span', { style: 'color:var(--ink3);font-size:12px' }, ' · ' + item.detail)));
  return entry;
}
