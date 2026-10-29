import { createHash } from 'node:crypto';
import { gunzipSync, gzipSync } from 'node:zlib';
import { db, error, isAppDatabaseError, json, requireAuth, router } from '@appdeploy/sdk';

type State = { revision: number; state?: Record<string, unknown>; chunkCount?: number; encoding?: string };
type Chunk = { revision: number; data: string };
type Receipt = { owner: string; digest: string; expected: number; revision: number };

const MAX_RAW_STATE_BYTES = 4 * 1024 * 1024;
const MAX_SDK_INPUT_BYTES = 900 * 1024;
const MAX_SDK_ITEM_BYTES = 256 * 1024;
const MAX_CHUNKS = 40;
const CHUNK_DATA_CHARS = 240 * 1024;
const encoder = new TextEncoder();
const hash = (value: string) => createHash('sha256').update(value).digest('hex');
const keyFor = (userId: string) => hash(userId);
const receiptKey = (userId: string, requestId: string) => hash(userId + ':' + requestId);
const record = (value: unknown): value is Record<string, unknown> => Boolean(value) && typeof value === 'object' && !Array.isArray(value);

function validState(value: unknown): value is Record<string, unknown> {
  if (!record(value)) return false;
  if ('settings' in value) {
    const settings = value.settings;
    if (!record(settings) || ('nickname' in settings && typeof settings.nickname !== 'string') ||
        ('examDate' in settings && (typeof settings.examDate !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(settings.examDate))) ||
        ('dailyTargetMinutes' in settings && (typeof settings.dailyTargetMinutes !== 'number' || !Number.isFinite(settings.dailyTargetMinutes)))) return false;
  }
  for (const key of ['lessonStatus', 'syllabusMastery', 'problems', 'exams', 'practice', 'mockAttempts', 'pomodoro'])
    if (key in value && !record(value[key])) return false;
  for (const key of ['mistakes', 'mockResults'])
    if (key in value && !Array.isArray(value[key])) return false;
  if ('logs' in value && !record(value.logs) && !Array.isArray(value.logs)) return false;
  if ('plan' in value && value.plan !== null && (!record(value.plan) || !Array.isArray(value.plan.phases) ||
      !value.plan.phases.every(phase => record(phase) && Array.isArray(phase.tasks)))) return false;
  return true;
}

function decodeBase64Gzip(value: string): Record<string, unknown> {
  if (!value || value.length > MAX_SDK_INPUT_BYTES || value.length % 4 !== 0 ||
      !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value)) throw new Error('invalid compressed state');
  const compressed = Buffer.from(value, 'base64');
  if (compressed.toString('base64') !== value) throw new Error('invalid compressed state');
  const raw = gunzipSync(compressed, { maxOutputLength: MAX_RAW_STATE_BYTES });
  if (raw.byteLength > MAX_RAW_STATE_BYTES) throw new Error('state too large');
  const serialized = new TextDecoder('utf-8', { fatal: true }).decode(raw);
  const state: unknown = JSON.parse(serialized);
  if (!record(state)) throw new Error('invalid state');
  return state;
}

export const handler = router({
  'GET /api/state': [requireAuth(), async (ctx) => {
    const id = keyFor(ctx.user!.userId);
    for (let attempt = 0; attempt < 3; attempt++) {
      const [saved] = await db.get<State>('states', [id], { consistent: true });
      if (!saved) return json({ revision: 0, state: null });
      if (saved.state && !saved.encoding) return json({ revision: saved.revision, state: saved.state });
      if (saved.encoding !== undefined && saved.encoding !== 'gzip-base64') return error('云端记录格式无效', 500);
      if (!Number.isSafeInteger(saved.chunkCount) || !saved.chunkCount || saved.chunkCount > MAX_CHUNKS) return error('云端记录格式无效', 500);
      const ids = Array.from({ length: saved.chunkCount }, (_, i) => `${id}_${i}`);
      const chunks = await db.get<Chunk>('state_chunks', ids, { consistent: true });
      if (chunks.every(chunk => chunk && chunk.revision === saved.revision)) {
        try {
          const joined = chunks.map(chunk => chunk!.data).join('');
          const state = saved.encoding === 'gzip-base64'
            ? decodeBase64Gzip(joined)
            : JSON.parse(joined);
          if (!record(state)) return error('云端记录格式无效', 500);
          return json({ revision: saved.revision, state });
        }
        catch { return error('云端记录格式无效', 500); }
      }
    }
    return error('云端记录正在更新，请重试', 503);
  }],
  'GET /api/receipt/:id': [requireAuth(), async (ctx) => {
    if (!/^[0-9a-f-]{36}$/i.test(ctx.params.id)) return error('无效请求', 400);
    const [receipt] = await db.get<Receipt>('receipts', [receiptKey(ctx.user!.userId, ctx.params.id)], { consistent: true });
    return json(receipt ? { revision: receipt.revision, digest: receipt.digest } : null);
  }],
  'PUT /api/state': [requireAuth(), async (ctx) => {
    const body = ctx.body as { requestId?: unknown; expected?: unknown; state?: unknown };
    if (!body || typeof body.requestId !== 'string' || !/^[0-9a-f-]{36}$/i.test(body.requestId) ||
        !Number.isSafeInteger(body.expected) || Number(body.expected) < 0 || !validState(body.state)) return error('数据格式无效', 400);
    const serialized = JSON.stringify(body.state);
    if (encoder.encode(serialized).length > MAX_RAW_STATE_BYTES) return error('学习记录超过 4 MiB，请导出备份并清理旧数据', 413);
    const encoded = gzipSync(Buffer.from(serialized, 'utf8')).toString('base64');
    const userId = ctx.user!.userId;
    const id = keyFor(userId);
    const rid = receiptKey(userId, body.requestId);
    const expected = Number(body.expected);
    const digest = hash(serialized);
    const lookup = async () => {
      const [receipt] = await db.get<Receipt>('receipts', [rid], { consistent: true });
      if (receipt && (receipt.owner !== userId || receipt.digest !== digest || receipt.expected !== expected)) throw new Error('request mismatch');
      return receipt;
    };
    const old = await lookup();
    if (old) return json({ status: 'saved', revision: old.revision });
    const revision = expected + 1;
    const chunks = [];
    for (let i = 0; i < encoded.length; i += CHUNK_DATA_CHARS)
      chunks.push({ id: `${id}_${chunks.length}`, record: { revision, data: encoded.slice(i, i + CHUNK_DATA_CHARS) } });
    const stateRecord = { id, revision, chunkCount: chunks.length, encoding: 'gzip-base64' };
    const stateUpdate = { id, record: { revision, chunkCount: chunks.length, encoding: 'gzip-base64', state: undefined }, if: { revision: expected } };
    const receiptRecord = { id: rid, owner: userId, digest, expected, revision };
    if (!chunks.length || chunks.length > MAX_CHUNKS || chunks.some(chunk =>
        encoder.encode(JSON.stringify({ id: chunk.id, record: chunk.record })).length >= MAX_SDK_ITEM_BYTES))
      return error('压缩后的学习记录超过云端存储限制，请导出备份', 413);
    const sdkInput = [
      ...(expected === 0
        ? [{ type: 'add', name: 'states', records: [stateRecord] }]
        : [{ type: 'update', name: 'states', items: [stateUpdate], options: { patch: true } }]),
      { type: 'update', name: 'state_chunks', items: chunks },
      { type: 'add', name: 'receipts', records: [receiptRecord] },
    ];
    if (encoder.encode(JSON.stringify(sdkInput)).length >= MAX_SDK_INPUT_BYTES)
      return error('压缩后的学习记录超过云端请求限制，请导出备份', 413);
    const write = expected === 0
      ? db.tx.add('states', [stateRecord])
      : db.tx.update('states', [stateUpdate], { patch: true });
    const chunkWrite = db.tx.update('state_chunks', chunks);
    const receipt = db.tx.add('receipts', [receiptRecord]);
    try {
      await db.transact([write, chunkWrite, receipt]);
      return json({ status: 'saved', revision });
    } catch (cause: unknown) {
      if (isAppDatabaseError(cause)) {
        if (['AppDatabaseDuplicateId', 'AppDatabaseConditionFailed', 'AppDatabaseConflict', 'AppDatabaseUnknownOutcome'].includes(cause.code)) {
          const result = await lookup();
          if (result) return json({ status: 'saved', revision: result.revision });
          if (cause.code === 'AppDatabaseUnknownOutcome') return json({ status: 'unknown' });
          return json({ status: 'conflict' });
        }
        if (cause.code === 'AppDatabaseQuotaExceeded') return error('云端暂时繁忙，草稿已保留', 429);
      }
      return error('云端保存结果未确定，草稿已保留', 503);
    }
  }],
});
