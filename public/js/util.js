// 工具库：DOM、轻量Markdown+KaTeX渲染、日期、SVG图表
export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

export function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
    else if (v === true) node.setAttribute(k, '');
    else if (v === false) continue;
    else if (v !== null && v !== undefined) node.setAttribute(k, v);
  }
  for (const c of children.flat()) {
    if (c === null || c === undefined || c === false) continue;
    node.append(c.nodeType ? c : document.createTextNode(c));
  }
  return node;
}

/* ---------- 轻量 Markdown + KaTeX ---------- */
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// 数学段保护：$$...$$（可跨行）与 $...$（可跨行，TeX 源常见）。占位符防止行处理破坏公式。
const MATH_SEG_RE = /\$\$[\s\S]*?\$\$|\$[^$]+?\$/g;

export function mdToHtml(text) {
  if (!text) return '';
  const mathSegs = [];
  const protectedText = String(text).replace(MATH_SEG_RE, (m) => { mathSegs.push(m); return '@@KM' + (mathSegs.length - 1) + '@@'; });
  const lines = esc(protectedText).split(/\r?\n/);
  const out = [];
  let inList = false;
  const closeList = () => { if (inList) { out.push('</ul>'); inList = false; } };
  for (const raw of lines) {
    let line = raw;
    if (/^\s*-\s+/.test(line)) {
      if (!inList) { out.push('<ul>'); inList = true; }
      out.push('<li>' + inline(line.replace(/^\s*-\s+/, '')) + '</li>');
    } else {
      closeList();
      if (line.trim() === '') continue;
      out.push('<p>' + inline(line) + '</p>');
    }
  }
  closeList();
  return out.join('').replace(/@@KM(\d+)@@/g, (_, i) => esc(mathSegs[+i] ?? ''));
  function inline(s) {
    return s.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/`([^`]+)`/g, '<code style="background:#f0f2f8;border-radius:5px;padding:0 5px;font-family:var(--mono);font-size:.92em">$1</code>');
  }
}

export function renderMath(rootEl) {
  if (!window.renderMathInElement) return;
  try {
    window.renderMathInElement(rootEl, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
      ],
      ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'option'],
      macros: { '\\vline': '\\mid', '\\arccot': '\\operatorname{arccot}' },
      throwOnError: false,
    });
  } catch (e) { console.warn('katex render', e); }
}

/** 渲染 md+数学 到指定元素 */
export function setMd(node, text) {
  node.classList.add('md');
  node.innerHTML = mdToHtml(text);
  renderMath(node);
}

/* ---------- 日期 ---------- */
export const today = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export function daysBetween(a, b) { return Math.round((new Date(b) - new Date(a)) / 86400000); }
export function addDays(iso, n) { const d = new Date(iso + 'T00:00:00'); d.setDate(d.getDate() + n); return today(d); }
export function fmtDate(iso) { if (!iso) return ''; const [y, m, d] = iso.split('-'); return `${m}-${d}`; }

export function uid() { return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4); }

/* ---------- SVG 图表 ---------- */
export function ring(pct, size = 86, color = '#2b5cff', color2 = '#7c3aed') {
  const r = size / 2 - 7, c = 2 * Math.PI * r;
  const p = Math.max(0, Math.min(1, pct));
  return `<div class="ring" style="width:${size}px;height:${size}px"><svg width="${size}" height="${size}">
  <defs><linearGradient id="g${r}${Math.round(p * 100)}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${color}"/><stop offset="1" stop-color="${color2}"/></linearGradient></defs>
  <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="#edf0f7" stroke-width="8"/>
  <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="url(#g${r}${Math.round(p * 100)})" stroke-width="8" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - p)}"/>
  </svg><div class="lbl">${Math.round(p * 100)}%</div></div>`;
}

export function barChart(data, { w = 560, h = 180, color = '#2b5cff' } = {}) {
  // data: [{label, value}]
  if (!data.length) return '<div class="empty">暂无数据</div>';
  const padL = 30, padB = 22, padT = 10;
  const max = Math.max(...data.map(d => d.value), 1);
  const bw = Math.min(30, (w - padL) / data.length - 6);
  const step = (w - padL) / data.length;
  let bars = '', labels = '';
  data.forEach((d, i) => {
    const bh = (h - padB - padT) * (d.value / max);
    const x = padL + i * step + (step - bw) / 2;
    const y = h - padB - bh;
    bars += `<rect x="${x}" y="${y}" width="${bw}" height="${Math.max(bh, 1)}" rx="4" fill="${color}" opacity="0.85"><title>${d.label}: ${d.value}</title></rect>`;
    if (data.length <= 16 || i % Math.ceil(data.length / 12) === 0)
      labels += `<text x="${x + bw / 2}" y="${h - 6}" font-size="9" fill="#8a93a8" text-anchor="middle">${d.label}</text>`;
  });
  return `<svg viewBox="0 0 ${w} ${h}" style="width:100%;height:auto">${bars}${labels}</svg>`;
}

const PIE_COLORS = ['#2b5cff', '#16a34a', '#d97706', '#dc2626', '#7c3aed', '#0891b2', '#be185d', '#65a30d'];
export function pieChart(data) {
  // data: [{label, value}]
  const total = data.reduce((a, d) => a + d.value, 0);
  if (!total) return '<div class="empty">暂无数据</div>';
  let acc = 0, segs = '';
  data.forEach((d, i) => {
    const frac = d.value / total;
    const a0 = acc * 2 * Math.PI - Math.PI / 2, a1 = (acc + frac) * 2 * Math.PI - Math.PI / 2;
    acc += frac;
    const [x0, y0] = [60 + 55 * Math.cos(a0), 60 + 55 * Math.sin(a0)];
    const [x1, y1] = [60 + 55 * Math.cos(a1), 60 + 55 * Math.sin(a1)];
    if (frac >= 0.9999) {
      segs += `<circle cx="60" cy="60" r="55" fill="${PIE_COLORS[i % 8]}"/>`;
    } else if (frac > 0) {
      segs += `<path d="M60,60 L${x0},${y0} A55,55 0 ${frac > 0.5 ? 1 : 0},1 ${x1},${y1} Z" fill="${PIE_COLORS[i % 8]}"><title>${d.label}: ${d.value} (${Math.round(frac * 100)}%)</title></path>`;
    }
  });
  const legend = data.map((d, i) => `<span><i style="background:${PIE_COLORS[i % 8]}"></i>${d.label} ${d.value}</span>`).join('');
  return `<div style="display:flex;gap:18px;align-items:center;flex-wrap:wrap"><svg viewBox="0 0 120 120" width="130" height="130">${segs}</svg><div class="legend">${legend}</div></div>`;
}

/* ---------- 杂项 ---------- */
export function toast(msg, ok = true) {
  const t = el('div', { style: `position:fixed;top:18px;left:50%;transform:translateX(-50%);z-index:200;background:${ok ? '#16a34a' : '#dc2626'};color:#fff;padding:8px 20px;border-radius:99px;font-size:13.5px;box-shadow:0 6px 20px rgba(0,0,0,.2);transition:.3s;opacity:0` }, msg);
  document.body.append(t);
  requestAnimationFrame(() => { t.style.opacity = '1'; });
  setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 400); }, 1800);
}

export function modal(title, bodyNode, footNodes = []) {
  const mask = el('div', { class: 'modal-mask', onclick: (e) => { if (e.target === mask) close(); } });
  const box = el('div', { class: 'modal' },
    el('h2', {}, title),
    bodyNode,
    el('div', { class: 'modal-foot' }, ...footNodes));
  mask.append(box);
  const onKey = e => { if (e.key === 'Escape') { e.stopPropagation(); close(); } };
  document.addEventListener('keydown', onKey, true);
  const close = () => { document.removeEventListener('keydown', onKey, true); mask.remove(); };
  $('#modal-root').append(mask);
  return { close, mask };
}

/** 比较练习答案（填空/选择题文本归一化） */
export function normAns(s) {
  return String(s ?? '').replace(/\s|，/g, '').replace(/（/g, '(').replace(/）/g, ')').toLowerCase();
}
