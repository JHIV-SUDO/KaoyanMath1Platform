#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Package JC30 source-page JPEG excerpts into one same-origin PDF per lecture."""
import hashlib
import json
import os
from pathlib import Path

import fitz

PROJECT = Path(__file__).resolve().parents[1]
SEED = PROJECT / 'data/seed/jc30-source-excerpts.js'
PUBLIC = PROJECT / 'public'
ASSETS = PUBLIC / 'resources/book-excerpts'
OUT_DIR = PUBLIC / 'resources/book-packs'
EXPECTED_PAGES = 776


def load_seed(path):
    source = path.read_text(encoding='utf-8').strip()
    prefix = 'export default '
    if not source.startswith(prefix) or not source.endswith(';'):
        raise ValueError(f'Expected an exported JSON array: {path}')
    records = json.loads(source[len(prefix):-1])
    if not isinstance(records, list):
        raise ValueError('JC30 source seed must be an array')
    return records


def image_size(data):
    image = fitz.Pixmap(data)
    return image.width, image.height


def build_pack(lecture, records):
    title = records[0]['module']
    document = fitz.open()
    document.set_metadata({'title': f'基础30讲 第{lecture:02d}讲 {title} 原书页图'})
    seen = {}
    questions = {}
    expected = []

    for record in records:
        pages = record['sourceExcerpt']['pages']
        first_page = len(document) + 1
        for page_ref in pages:
            source = PUBLIC / page_ref['image'].lstrip('/')
            if not source.is_file():
                raise FileNotFoundError(f'{record["id"]} missing source page: {source}')
            data = source.read_bytes()
            digest = hashlib.sha256(data).hexdigest()
            width, height = image_size(data)
            page = document.new_page(width=width / 2, height=height / 2)
            xref = seen.get(digest)
            if xref is None:
                xref = page.insert_image(page.rect, stream=data)
                seen[digest] = xref
            else:
                page.insert_image(page.rect, xref=xref)
            expected.append((source, digest))
        if record['id'] in questions:
            raise ValueError(f'duplicate question id: {record["id"]}')
        questions[record['id']] = {'key': f'jc30-source-l{lecture:02d}.pdf', 'firstPage': first_page, 'pageCount': len(pages)}

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    output = OUT_DIR / f'jc30-source-l{lecture:02d}.pdf'
    temp = output.with_suffix('.tmp.pdf')
    document.save(temp, garbage=4, deflate=True)
    document.close()

    # Verify page count and exact JPEG stream preservation before publishing the pack.
    check = fitz.open(temp)
    if len(check) != len(expected):
        raise AssertionError(f'{output.name}: {len(check)} pages != {len(expected)} expected')
    for number, (page, (source, digest)) in enumerate(zip(check, expected), start=1):
        images = page.get_images(full=True)
        if not images:
            raise AssertionError(f'{output.name} page {number} has no image')
        embedded = check.extract_image(images[0][0])['image']
        if hashlib.sha256(embedded).hexdigest() != digest:
            raise AssertionError(f'{output.name} page {number} JPEG bytes changed')
        width, height = image_size(source.read_bytes())
        if abs(page.rect.width - width / 2) > 0.01 or abs(page.rect.height - height / 2) > 0.01:
            raise AssertionError(f'{output.name} page {number} dimensions changed')
    check.close()
    os.replace(temp, output)

    return {
        'key': output.name,
        'resourceUrl': f'/resources/book-packs/{output.name}',
        'title': f'基础30讲 第{lecture}讲：{title}（原书扫描页）',
        'pages': len(expected),
        'bytes': output.stat().st_size,
    }, questions


def main():
    records = load_seed(SEED)
    grouped = {}
    for record in records:
        lecture = int(record['lessonId'][2:])
        grouped.setdefault(lecture, []).append(record)
    ids = [record['id'] for record in records]
    if len(ids) != len(set(ids)):
        raise ValueError('duplicate question IDs in source seed')

    documents = []
    questions = {}
    for lecture in sorted(grouped):
        pack, mappings = build_pack(lecture, grouped[lecture])
        documents.append(pack)
        questions.update(mappings)
        print(f'{pack["key"]}: {pack["pages"]} pages, {pack["bytes"] / 1024 / 1024:.2f} MiB, {len(mappings)} questions', flush=True)

    page_total = sum(pack['pages'] for pack in documents)
    if page_total != EXPECTED_PAGES or len(questions) != len(records):
        raise AssertionError(f'coverage mismatch: {page_total} pages, {len(questions)} questions')
    for record in records:
        ref = questions[record['id']]
        pack = next(item for item in documents if item['key'] == ref['key'])
        if ref['firstPage'] < 1 or ref['pageCount'] < 1 or ref['firstPage'] + ref['pageCount'] - 1 > pack['pages']:
            raise AssertionError(f'invalid page range for {record["id"]}: {ref}')

    index = {'documents': documents, 'questions': questions}
    index_path = OUT_DIR / 'index.json'
    temp_index = index_path.with_suffix('.tmp')
    temp_index.write_text(json.dumps(index, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    os.replace(temp_index, index_path)
    total_bytes = sum(item['bytes'] for item in documents)
    print(f'index: {index_path}; {len(documents)} packs, {page_total} pages, {len(questions)} questions, {total_bytes / 1024 / 1024:.2f} MiB total')
    print(f'largest pack: {max(documents, key=lambda item: item["bytes"])["key"]} ({max(item["bytes"] for item in documents) / 1024 / 1024:.2f} MiB)')


if __name__ == '__main__':
    main()
