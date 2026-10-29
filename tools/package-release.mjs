// Package distributable source and assets without private learning records.
import { existsSync, statSync } from 'node:fs';
import { writeFile, readdir, mkdir, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';
import { execFileSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.resolve(process.argv[2] || 'D:/ClaudeWorkspace/Output/KaoyanMath1-Source.zip');
execFileSync(process.execPath, [path.join(root, 'tools/build-desktop-compat.mjs')], { stdio: 'inherit' });
const inputs = [
  'public', 'android', 'windows', 'cloud', 'service', 'tests', 'tools',
  'data/lessons', 'data/seed', 'docs', 'server.js', 'package.json',
  'README.md', '验收指南.md', 'LICENSE', 'THIRD_PARTY_NOTICES.md', '.gitignore',
];
const excludedDirectories = new Set(['.git', 'node_modules', 'generated', '.obsidian', '.keys', 'dist', 'browser-data', '__pycache__']);
const privatePrefixes = ['service/data', 'data/sync', 'docs/polish'];
const excludedFiles = new Set(['data/db.json', 'data/db.json.tmp', 'cloud/deploy-files.json']);
const files = [];
async function collect(relative) {
  if (excludedFiles.has(relative) || privatePrefixes.some(p => relative === p || relative.startsWith(p + '/'))) return;
  if (relative.split('/').some(part => excludedDirectories.has(part))) return;
  const absolute = path.join(root, relative);
  if (!existsSync(absolute)) return;
  if (statSync(absolute).isDirectory()) {
    for (const entry of await readdir(absolute)) await collect(relative + '/' + entry);
  } else {
    if (/\.(?:jks|keystore|apk|idsig|log)$/i.test(relative) || /(?:secret\.key|kaoyan-math1-backup)/i.test(relative)) return;
    if (/\.pdf$/i.test(relative) && !relative.startsWith('public/resources/book-packs/')) return;
    files.push(relative);
  }
}
for (const item of inputs) await collect(item);
files.sort();
for (const required of ['package.json', 'server.js', 'LICENSE', 'THIRD_PARTY_NOTICES.md', '.gitignore', 'public/vendor/katex/LICENSE', 'public/vendor/pdfjs/LICENSE']) {
  if (!files.includes(required)) throw new Error('Missing release file: ' + required);
}
const temporary = process.env.KAOYAN_TEMP_DIR || 'D:/ClaudeWorkspace/Temp';
await mkdir(temporary, { recursive: true });
await mkdir(path.dirname(output), { recursive: true });
const list = path.join(temporary, `kaoyan-release-${randomUUID()}.json`);
await writeFile(list, JSON.stringify(files), 'utf8');
const python = `
import sys,json
from pathlib import Path
from zipfile import ZipFile,ZipInfo,ZIP_DEFLATED
root=Path(sys.argv[1]).resolve()
output=Path(sys.argv[2])
files=json.loads(Path(sys.argv[3]).read_text(encoding='utf-8'))
with ZipFile(output,'w',compression=ZIP_DEFLATED,compresslevel=6) as archive:
    for relative in files:
        source=(root/relative).resolve()
        if not source.is_relative_to(root):raise ValueError('Source outside project')
        info=ZipInfo('KaoyanMath1Platform/'+relative,date_time=(2026,1,1,0,0,0))
        info.compress_type=ZIP_DEFLATED
        archive.writestr(info,source.read_bytes())
with ZipFile(output) as archive:
    if archive.testzip() is not None:raise ValueError('ZIP verification failed')
print('Source ZIP ready: '+str(output)+'; files='+str(len(files))+'; bytes='+str(output.stat().st_size))
`;
try {
  execFileSync('py', ['-c', python, root, output, list], { stdio: 'inherit', env: { ...process.env, PYTHONUTF8: '1' } });
} finally {
  await unlink(list);
}
