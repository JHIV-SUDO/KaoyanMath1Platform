import assert from 'node:assert/strict';
import { registerHooks } from 'node:module';
import { createHash, randomBytes } from 'node:crypto';
import { gzipSync } from 'node:zlib';

const tables = new Map();
let unknownAfterCommit = false;
let unknownBeforeCommit = false;
let lastTransactionBytes = 0;
let transactionCount = 0;
let lastTransactionOps = [];
const table = name => {
  if (!tables.has(name)) tables.set(name, new Map());
  return tables.get(name);
};
const fail = code => Object.assign(new Error(code), { code });
globalThis.__cloudTest = {
  db: {
    get: async (name, ids) => ids.map(id => table(name).get(id) || null),
    tx: {
      add: (name, records) => ({ type: 'add', name, records }),
      update: (name, items, options = {}) => ({ type: 'update', name, items, ...(Object.keys(options).length ? { options } : {}) }),
    },
    transact: async operations => {
      transactionCount++;
      lastTransactionOps = operations.map(op => op.type === 'add'
        ? { type: op.type, name: op.name, records: op.records }
        : { type: op.type, name: op.name, items: op.items, ...(op.options ? { options: op.options } : {}) });
      lastTransactionBytes = new TextEncoder().encode(JSON.stringify(operations)).length;
      if (unknownBeforeCommit) { unknownBeforeCommit = false; throw fail('AppDatabaseUnknownOutcome'); }
      for (const op of operations) {
        if (op.type === 'add') {
          for (const record of op.records) if (table(op.name).has(record.id)) throw fail('AppDatabaseDuplicateId');
        } else {
          for (const item of op.items) {
            const existing = table(op.name).get(item.id);
            if ((op.options?.patch && !existing) || Object.entries(item.if || {}).some(([key, value]) => existing?.[key] !== value)) throw fail('AppDatabaseConditionFailed');
          }
        }
      }
      for (const op of operations) {
        if (op.type === 'add') for (const record of op.records) table(op.name).set(record.id, record);
        else for (const item of op.items) table(op.name).set(item.id, op.options?.patch ? { ...table(op.name).get(item.id), ...item.record } : item.record);
      }
      if (unknownAfterCommit) { unknownAfterCommit = false; throw fail('AppDatabaseUnknownOutcome'); }
    },
  },
  json: (data, status = 200) => ({ status, data }),
  error: (message, status = 400) => ({ status, message }),
  requireAuth: () => 'requireAuth',
  router: routes => routes,
  isAppDatabaseError: err => Boolean(err?.code),
};
registerHooks({
  resolve(specifier, context, next) {
    return specifier === '@appdeploy/sdk' ? { url: 'mock:appdeploy', shortCircuit: true } : next(specifier, context);
  },
  load(url, context, next) {
    if (url !== 'mock:appdeploy') return next(url, context);
    return { format: 'module', shortCircuit: true, source: 'export const { db, json, error, requireAuth, router, isAppDatabaseError } = globalThis.__cloudTest;' };
  },
});
const { handler } = await import('../cloud/backend/index.ts');
for (const route of Object.values(handler)) assert.equal(route[0], 'requireAuth');
const user = userId => ({ userId });
const get = id => handler['GET /api/state'][1]({ user: user(id) });
const put = (id, body) => handler['PUT /api/state'][1]({ user: user(id), body });
const requestId = '11111111-1111-4111-8111-111111111111';
const request2 = '22222222-2222-4222-8222-222222222222';
const request3 = '33333333-3333-4333-8333-333333333333';
assert.deepEqual((await get('a')).data, { revision: 0, state: null });
assert.deepEqual((await put('a', { requestId, expected: 0, state: { value: 'A' } })).data, { status: 'saved', revision: 1 });
assert.deepEqual((await put('a', { requestId, expected: 0, state: { value: 'A' } })).data, { status: 'saved', revision: 1 });
assert.deepEqual((await get('b')).data, { revision: 0, state: null });
assert.equal((await put('a', { requestId: request2, expected: 0, state: { value: 'stale' } })).data.status, 'conflict');
assert.equal((await get('a')).data.state.value, 'A');
unknownAfterCommit = true;
assert.deepEqual((await put('a', { requestId: request3, expected: 1, state: { value: 'B' } })).data, { status: 'saved', revision: 2 });
const large = '数学'.repeat(50000);
assert.equal((await put('a', { requestId: request2, expected: 2, state: { value: large } })).data.status, 'saved');
assert.equal((await get('a')).data.state.value, large);
const beforeTooIncompressible = transactionCount;
assert.equal((await put('a', { requestId: '44444444-4444-4444-8444-444444444444', expected: 3, state: { value: randomBytes(700 * 1024).toString('base64') } })).status, 413);
assert.equal(transactionCount, beforeTooIncompressible, 'oversize input must be rejected before any write');
assert.equal((await put('a', { requestId: 'bad', expected: 2, state: {} })).status, 400);
const legacyId = createHash('sha256').update('legacy').digest('hex');
table('states').set(legacyId, { revision: 1, state: { value: 'old' } });
assert.equal((await get('legacy')).data.state.value, 'old');
assert.equal((await put('legacy', { requestId, expected: 1, state: { value: 'new' } })).data.status, 'saved');
assert.equal((await get('legacy')).data.state.value, 'new');
const inlineLegacyId = createHash('sha256').update('legacy').digest('hex');
assert.equal(table('states').get(inlineLegacyId).encoding, 'gzip-base64');

const badState = (id, state) => put('shape', { requestId: id, expected: 0, state });
assert.equal((await badState('55555555-5555-4555-8555-555555555555', { settings: null })).status, 400);
assert.equal((await badState('66666666-6666-4666-8666-666666666666', { settings: [], lessonStatus: {} })).status, 400);
assert.equal((await badState('77777777-7777-4777-8777-777777777777', { settings: { nickname: 2 } })).status, 400);
assert.equal((await badState('88888888-8888-4888-8888-888888888888', { lessonStatus: [] })).status, 400);
assert.equal((await badState('99999999-9999-4999-8999-999999999999', { logs: 'bad' })).status, 400);
const beforeRawCap = transactionCount;
const rawOverLimit = await badState('dddddddd-dddd-4ddd-8ddd-dddddddddddd', { value: 'x'.repeat(4 * 1024 * 1024) });
assert.equal(rawOverLimit.status, 413);
assert.match(rawOverLimit.message, /导出备份/);
assert.equal(transactionCount, beforeRawCap, 'raw states above 4 MiB are rejected before writing');

const largeState = { settings: { nickname: '考生', examDate: '2026-12-19', dailyTargetMinutes: 180 }, practice: {}, mistakes: [] };
for (let i = 0; i < 2200; i++) {
  const key = `book#question-${String(i).padStart(4, '0')}`;
  const working = Array.from({ length: 5 }, (_, j) => createHash('sha256').update(`attempt-${i}-${j}`).digest('base64')).join('');
  largeState.practice[key] = { result: i % 3 ? 'wrong' : 'right', times: i % 7 + 1, lastAt: '2026-10-29T09:00:00.000Z', answer: `计算过程 ${i % 10}：设函数 f(x)=x^2+2x+1，代入题目条件并整理可得唯一结果。`.repeat(4), working };
  largeState.mistakes.push({ id: `mistake-${i}`, source: '练习题库', ref: key, desc: `题目 ${i} 的错因与复习记录`, reason: `计算过程中符号处理需要复核。`.repeat(5), added: '2026-10-29', due: '2026-11-01', stage: i % 5, history: [{ date: '2026-10-29', result: 'wrong', note: '重算后复核定义域与边界' }] });
}
const largeSerialized = JSON.stringify(largeState);
const largeBytes = new TextEncoder().encode(largeSerialized).length;
assert.ok(largeBytes > 700 * 1024, `fixture is a realistic >700 KiB 2200-question state (${largeBytes} bytes)`);
const beforeLargeWrites = transactionCount;
const largeSaved = await put('large', { requestId: 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', expected: 0, state: largeState });
assert.deepEqual(largeSaved.data, { status: 'saved', revision: 1 });
assert.equal(transactionCount, beforeLargeWrites + 1, 'state chunks and receipt are committed in one transaction');
assert.deepEqual(lastTransactionOps.map(op => op.name), ['states', 'state_chunks', 'receipts']);
const largeId = createHash('sha256').update('large').digest('hex');
const largeMeta = table('states').get(largeId);
assert.equal(largeMeta.encoding, 'gzip-base64');
assert.ok(largeMeta.chunkCount > 1, 'large state spans multiple chunks and is reassembled on GET');
const largeChunks = Array.from({ length: largeMeta.chunkCount }, (_, i) => ({ id: `${largeId}_${i}`, record: table('state_chunks').get(`${largeId}_${i}`) }));
assert.ok(largeChunks.every(chunk => new TextEncoder().encode(JSON.stringify(chunk)).length < 256 * 1024), 'each complete SDK state chunk item is below 256 KiB');
assert.ok(lastTransactionBytes < 900 * 1024, `complete transaction SDK input is below 900 KiB (${lastTransactionBytes})`);
const largeSdkInputBytes = lastTransactionBytes;
const compressedBytes = Buffer.byteLength(largeChunks.map(chunk => chunk.record.data).join(''), 'base64');
assert.deepEqual((await get('large')).data.state, largeState);
await assert.rejects(() => put('large', { requestId: 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', expected: 0, state: { ...largeState, extra: true } }), /request mismatch/);

const legacyChunkState = { value: 'pre-gzip chunks ✓', notes: ['old', 'legacy'] };
const legacyChunkJson = JSON.stringify(legacyChunkState);
const oldChunkParts = [];
for (let i = 0; i < legacyChunkJson.length; i += 30000) oldChunkParts.push(legacyChunkJson.slice(i, i + 30000));
const oldChunkId = createHash('sha256').update('legacy-chunks').digest('hex');
table('states').set(oldChunkId, { revision: 4, chunkCount: oldChunkParts.length });
oldChunkParts.forEach((data, i) => table('state_chunks').set(`${oldChunkId}_${i}`, { revision: 4, data }));
assert.deepEqual((await get('legacy-chunks')).data, { revision: 4, state: legacyChunkState });
assert.deepEqual((await put('legacy-chunks', { requestId: 'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb', expected: 4, state: { value: 'migrated' } })).data, { status: 'saved', revision: 5 });
assert.equal(transactionCount, beforeLargeWrites + 2, 'legacy migration is one atomic transaction');
assert.equal(table('states').get(oldChunkId).encoding, 'gzip-base64', 'legacy chunk state migrates in the same state+receipt transaction');
assert.deepEqual((await get('legacy-chunks')).data.state, { value: 'migrated' });
const migratedReceiptId = createHash('sha256').update('legacy-chunks:bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb').digest('hex');
assert.equal(table('receipts').get(migratedReceiptId).revision, 5, 'migration receipt commits at the migrated revision');

const corruptId = createHash('sha256').update('corrupt-gzip').digest('hex');
table('states').set(corruptId, { revision: 8, encoding: 'gzip-base64', chunkCount: 1 });
table('state_chunks').set(`${corruptId}_0`, { revision: 8, data: Buffer.from('valid base64 but not gzip').toString('base64') });
assert.equal((await get('corrupt-gzip')).status, 500, 'corrupt compressed state fails closed');
const bombId = createHash('sha256').update('gzip-bomb').digest('hex');
table('states').set(bombId, { revision: 9, encoding: 'gzip-base64', chunkCount: 1 });
table('state_chunks').set(`${bombId}_0`, { revision: 9, data: gzipSync(Buffer.alloc(4 * 1024 * 1024 + 1, 120)).toString('base64') });
assert.equal((await get('gzip-bomb')).status, 500, 'decompression is bounded at the raw-state ceiling');

unknownBeforeCommit = true;
assert.deepEqual((await put('unknown', { requestId: 'cccccccc-cccc-4ccc-8ccc-cccccccccccc', expected: 0, state: { value: 'uncertain' } })).data, { status: 'unknown' });
assert.deepEqual((await get('unknown')).data, { revision: 0, state: null });

console.log(`Cloud sync passed: isolation, conflict, legacy migration, receipts, validation, bounded gzip round-trip (${largeBytes} raw bytes -> ${compressedBytes} compressed bytes in ${largeMeta.chunkCount} chunks, ${largeSdkInputBytes} SDK input bytes)`);
