import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import repoNotes from '../data/seed/repo-notes.js';
import jc30Examples from '../data/seed/jc30-examples.js';
import bookPackIndex from '../public/resources/book-packs/index.json' with { type: 'json' };

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const lessonsView = fs.readFileSync(path.join(root, 'public/js/views/lessons.js'), 'utf8');
const practiceView = fs.readFileSync(path.join(root, 'public/js/views/practice.js'), 'utf8');
const resourcesView = fs.readFileSync(path.join(root, 'public/js/views/resources.js'), 'utf8');
const generator = fs.readFileSync(path.join(root, 'tools/absorb-repo-notes.mjs'), 'utf8');

// All seeded notes remain in the lesson's searchable collection; rendering is paged and deferred.
assert.equal(repoNotes.length, 833);
assert.equal(repoNotes.filter(n => !Array.isArray(n.relatedLessons) || !n.relatedLessons.length).length, 35);
assert.match(lessonsView, /n\.id, n\.title, n\.topic, n\.text/);
assert.match(lessonsView, /!n\.relatedLessons\.length \|\| n\.relatedLessons\.includes\(L\.id\)/);
assert.match(lessonsView, /id: n\.id/);
assert.match(lessonsView, /pageSize = 20/);
assert.match(lessonsView, /fold\.addEventListener\('toggle'/);
assert.doesNotMatch(lessonsView, /notes\.slice\(0,\s*40\)/);

// The seeded figure is wired to the local image and a native zoom dialog.
const pictured = jc30Examples.find(q => q.id === 'jc30-l01-012');
assert.equal(pictured?.figure, 'resources/questions/jc30-l01-012.svg');
assert.ok(fs.existsSync(path.join(root, 'public', pictured.figure)));
assert.match(practiceView, /if \(q\.figure\)/);
assert.match(practiceView, /q\.figureAlt \|\| `题目 \$\{q\.number\} 配图`/);
assert.match(practiceView, /preview\.showModal\(\)/);
assert.match(practiceView, /maxHeight = 320/);
assert.match(practiceView, /q\.sourceExcerpt\?\.pages\?\.length/);
assert.match(practiceView, /原题与原书解答（原书扫描）/);
assert.match(practiceView, /source\.addEventListener\('toggle'/);
assert.match(practiceView, /q\.sourceExcerpt\.containsAdjacentSource/);
assert.match(practiceView, /q\.sourceReview\?\.required/);
assert.match(practiceView, /class: 'warn-box'/);
assert.match(practiceView, /zoomableFigure\(page\.image, page\.alt/);
assert.match(practiceView, /PDF第 \$\{page\.page\} 页/);
assert.match(practiceView, /原书页材料 · 未独立核验/);
assert.match(practiceView, /doc && window\.CloudPlatform/);
assert.match(practiceView, /#\/resources\/\$\{encodeURIComponent\(doc\.key\)\}\?page=\$\{firstPage\}/);
assert.match(practiceView, /sourceBody\.replaceChildren\(\)/);
assert.match(practiceView, /sourceBody\.replaceChildren\(\.\.\.\[\.\.\.sourceBody\.childNodes\]/);
assert.match(practiceView, /const page = q\.sourceExcerpt\.pages\[pageIndex\]/);
assert.match(practiceView, /dialog\[open\]/);

// PDF reader must route to the requested item, use bundled/cloud PDF.js, cap canvas allocation, and release tasks on route disposal.
assert.match(resourcesView, /if \(!requested\) return showCatalog\(main, media\)/);
assert.match(resourcesView, /if \(!cur\) return showUnavailable\(main, requested\)/);
assert.doesNotMatch(resourcesView, /: media\[0\]/);
assert.match(resourcesView, /window\.CloudPlatform\?\.loadPdfJs/);
assert.match(resourcesView, /cur\.resourceUrl \|\| '\/media\/'/);
assert.match(resourcesView, /MAX_CANVAS_PIXELS = 5_000_000/);
assert.match(resourcesView, /return \(\) =>/);
assert.match(resourcesView, /renderTask\?\.cancel\(\)/);
assert.match(resourcesView, /pdfDoc\.destroy\(\)/);
assert.match(resourcesView, /canvas\.width = 0; canvas\.height = 0/);

// When the original-book excerpt seed is present, verify local assets and source-page status without a user database.
const excerptSeedPath = path.join(root, 'data/seed/jc30-source-excerpts.js');
if (fs.existsSync(excerptSeedPath)) {
  const { default: excerpts } = await import('../data/seed/jc30-source-excerpts.js');
  assert.equal(excerpts.length, 332);
  assert.equal(bookPackIndex.documents.length, 18);
  assert.equal(Object.keys(bookPackIndex.questions).length, excerpts.length);
  for (const doc of bookPackIndex.documents) {
    assert.ok(doc.resourceUrl.startsWith('/resources/book-packs/'), `PDF 包必须是 App 内资源: ${doc.resourceUrl}`);
    assert.ok(fs.existsSync(path.join(root, 'public', doc.resourceUrl.slice(1))), `PDF 包缺失: ${doc.resourceUrl}`);
  }
  for (const q of excerpts) {
    const packed = bookPackIndex.questions[q.id];
    assert.ok(packed && Number.isInteger(packed.firstPage) && packed.firstPage > 0, `缺 PDF 页码映射: ${q.id}`);
    assert.equal(packed.pageCount, q.sourceExcerpt.pages.length, `PDF 页数与扫描切片不一致: ${q.id}`);
    assert.equal(q.type, 'self');
    assert.equal(q.reviewStatus, 'source-page');
    assert.equal(q.sourceEmbedded, true);
    assert.equal(q.solutionPageStatus, 'manifest anchor estimate, not manually verified');
    if (q.sourceReview?.required) assert.ok(q.sourceReview.reason, `待核锚点缺少原因: ${q.id}`);
    assert.ok(q.sourceExcerpt?.pages?.length, `缺原书页切片: ${q.id}`);
    for (const page of q.sourceExcerpt.pages) {
      assert.ok(Number.isInteger(page.page) && page.page > 0, `页码无效: ${q.id}`);
      assert.ok(page.image.startsWith('/resources/book-excerpts/'), `图片必须是本地资源: ${page.image}`);
      assert.ok(page.alt.includes(`第${page.page}页`), `alt 应含页码: ${q.id}`);
      assert.ok(fs.existsSync(path.join(root, 'public', page.image.slice(1))), `原书页图片缺失: ${page.image}`);
    }
  }
}

// Revisions live in the generator and survive regeneration of the generated seed.
const derivative = repoNotes.find(n => n.id === 'rnote-r08-advanced-math-exercise-1-limit-limit-s1-7');
const limit = repoNotes.find(n => n.id === 'rnote-r08-advanced-math-exercise-1-limit-limit-s2-5');
assert.ok(generator.includes("'rnote-r08-advanced-math-exercise-1-limit-limit-s1-7'"));
assert.ok(generator.includes("'rnote-r08-advanced-math-exercise-1-limit-limit-s2-5'"));
assert.match(derivative.text, /有限点（包括非零点）/);
assert.match(derivative.text, /高次本身不构成使用理由/);
assert.match(limit.text, /极限为 \$0\$/);
assert.match(limit.text, /1008/);
assert.match(limit.text, /没有实数定义/);
assert.doesNotMatch(limit.text, /极限为\$2\\\/3\$/);

const revisedMath = [
  ['rnote-r08-advanced-math-exercise-1-limit-limit-s1-5', '必须反向不等号', '双侧极限为'],
  ['rnote-r08-advanced-math-exercise-1-limit-limit-s1-6', '闭区间', '原极限为'],
  ['rnote-r08-advanced-math-exercise-1-limit-limit-s1-8', '复合函数并非不能展开', '正确系数应为'],
  ['rnote-r08-advanced-math-exercise-1-limit-limit-s3-1', '不是可直接运算的数值等式', '不能把'],
  ['rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s1-1', '连续性不能推出函数在该点的去心邻域内可导', '导数极限存在且有限'],
  ['rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s1-2', '并非常数', '当且仅当'],
  ['rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s2-1', '源文漏写了', 'x^{\\sin x}'],
  ['rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s2-3', '分母幂次少了', 'n+1'],
  ['rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s2-3-3', '在该区间内逐点有莱布尼茨公式', '不意味着莱布尼茨公式只能用于单点求值'],
  ['rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s2-4', "x'(t_0)", '参数商无定义'],
];
for (const [id, ...patterns] of revisedMath) {
  const note = repoNotes.find(n => n.id === id);
  assert.ok(note, `数学修订条目必须保留原 ID: ${id}`);
  assert.ok(generator.includes(`'${id}'`), `修订必须在生成器中可重放: ${id}`);
  for (const snippet of patterns) assert.ok(note.text.includes(snippet), `数学修订断言失败: ${id}: ${snippet}`);
}
assert.equal(repoNotes.length, 833, '数学修订不能改变笔记数量');

console.log(`Content access contracts passed: ${repoNotes.length} notes searchable, local figures and lazy source excerpts wired${fs.existsSync(excerptSeedPath) ? ' with 332 page records in 18 local PDF packs' : ''}, ${2 + revisedMath.length} replayable math revisions present.`);
