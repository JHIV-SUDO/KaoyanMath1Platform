import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { inflateRawSync } from 'node:zlib';

const apk = await readFile(process.argv[2]);

function entriesOf(zip) {
  const eocdSignature = 0x06054b50;
  const centralSignature = 0x02014b50;
  const localSignature = 0x04034b50;
  let eocd = -1;
  for (let p = zip.length - 22; p >= Math.max(0, zip.length - 65557); p--) {
    if (zip.readUInt32LE(p) === eocdSignature) { eocd = p; break; }
  }
  assert.notEqual(eocd, -1, 'APK has no ZIP end record');
  const count = zip.readUInt16LE(eocd + 10);
  let offset = zip.readUInt32LE(eocd + 16);
  const entries = new Map();
  for (let i = 0; i < count; i++) {
    assert.equal(zip.readUInt32LE(offset), centralSignature, `Invalid ZIP central entry ${i}`);
    const method = zip.readUInt16LE(offset + 10);
    const compressedSize = zip.readUInt32LE(offset + 20);
    const size = zip.readUInt32LE(offset + 24);
    const nameLength = zip.readUInt16LE(offset + 28);
    const extraLength = zip.readUInt16LE(offset + 30);
    const commentLength = zip.readUInt16LE(offset + 32);
    const localOffset = zip.readUInt32LE(offset + 42);
    const name = zip.toString('utf8', offset + 46, offset + 46 + nameLength);
    assert.equal(zip.readUInt32LE(localOffset), localSignature, `Missing local entry for ${name}`);
    const localNameLength = zip.readUInt16LE(localOffset + 26);
    const localExtraLength = zip.readUInt16LE(localOffset + 28);
    const dataOffset = localOffset + 30 + localNameLength + localExtraLength;
    entries.set(name, { method, compressedSize, size, dataOffset });
    offset += 46 + nameLength + extraLength + commentLength;
  }
  return entries;
}

const entries = entriesOf(apk);
assert(entries.has('assets/www/index.html'), 'Missing Android-readable index.html');
assert(entries.has('assets/www/js/android-adapter.js'), 'Missing Android adapter');
const readEntry = name => {
  const entry = entries.get(name);
  assert(entry, `Missing APK asset: ${name}`);
  const compressed = apk.subarray(entry.dataOffset, entry.dataOffset + entry.compressedSize);
  let data;
  if (entry.method === 0) data = compressed;
  else if (entry.method === 8) data = inflateRawSync(compressed, { maxOutputLength: 64 * 1024 * 1024 });
  else throw new Error(`Unsupported ZIP compression method ${entry.method} for ${name}`);
  assert.equal(data.length, entry.size, `Unexpected uncompressed size for ${name}`);
  return data;
};
const content = JSON.parse(readEntry('assets/content.json').toString('utf8'));
assert(Array.isArray(content.bookQuestions) && content.bookQuestions.length >= 2186,
  `Expected at least 2186 bundled questions, got ${content.bookQuestions?.length ?? 'none'}`);
const excerpts = content.bookQuestions.filter(q => q.reviewStatus === 'source-page' && Array.isArray(q.sourceExcerpt?.pages));
assert(excerpts.length >= 332, `Expected all 332 source-page records, got ${excerpts.length}`);
const pageImages = [...new Set(excerpts.flatMap(q => q.sourceExcerpt.pages.map(page => page.image)))];
for (const image of pageImages) {
  assert.equal(typeof image, 'string');
  const asset = `assets/www${image.startsWith('/') ? image : '/' + image}`;
  assert(entries.has(asset), `Missing bundled source-page image: ${image}`);
}
assert(Array.isArray(content.books?.media) && content.books.media.length === 18,
  `Expected 18 bundled book PDF packs, got ${content.books?.media?.length ?? 'none'}`);
for (const pack of content.books.media) {
  assert.equal(typeof pack.resourceUrl, 'string', `Missing resourceUrl for ${pack.key}`);
  assert(pack.resourceUrl.startsWith('/resources/book-packs/') && !pack.resourceUrl.includes('..'),
    `Invalid bundled PDF resourceUrl: ${pack.resourceUrl}`);
  const asset = `assets/www${pack.resourceUrl}`;
  const entry = entries.get(asset);
  assert(entry, `Missing bundled PDF pack: ${pack.resourceUrl}`);
  if (Number.isSafeInteger(pack.bytes)) assert.equal(entry.size, pack.bytes, `Wrong PDF size for ${pack.resourceUrl}`);
}
const sourcePackIndex = JSON.parse(await readFile(new URL('../public/resources/book-packs/index.json', import.meta.url), 'utf8'));
assert.equal(sourcePackIndex.documents.length, 18, 'Source pack manifest must contain all 18 PDF packs');
for (const pack of sourcePackIndex.documents) {
  const resourceUrl = pack.resourceUrl;
  assert(content.books.media.some(item => item.key === pack.key && item.resourceUrl === resourceUrl),
    `Bundled content does not reference source PDF pack ${pack.key}`);
  assert(entries.has(`assets/www${resourceUrl}`), `APK is missing source PDF pack ${resourceUrl}`);
}
assert(!apk.includes(Buffer.from(String.raw`assets/www\index.html`)), 'Asset paths must use forward slashes');
console.log(`APK assets verified: ${content.bookQuestions.length} questions, ${excerpts.length} source-page records, ${pageImages.length} local page images, ${content.books.media.length} PDF packs`);
