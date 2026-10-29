#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build locally viewable scanned excerpts for unreviewed JC30 examples.

The OCR anchors locate example starts only. Each excerpt runs to the next
recognized example anchor, so the original formulas remain image-only evidence.
"""
import argparse
import json
import re
from pathlib import Path

import fitz

PDF = Path(r'B:\27张宇基础30讲（高数）.pdf')
ANCHORS = Path(r'D:\ClaudeWorkspace\Temp\KaoyanMath1-Questions\jc30\anchors.jsonl')
MANIFEST = Path(r'D:\ClaudeWorkspace\Projects\KaoyanMath1Platform\data\seed\jc30-manifest.json')
PROJECT = Path(__file__).resolve().parents[1]
OUT_DATA = PROJECT / 'data/seed/jc30-source-excerpts.js'
OUT_ASSETS = PROJECT / 'public/resources/book-excerpts'
SCALE = 2.35
JPEG_QUALITY = 94
PAD_PT = 12
LABEL = re.compile(r'例\s*(\d{1,2})\s*[.．,，·]\s*(\d{1,3})')


def load_anchors(file):
    by_page = {}
    for line in file.read_text(encoding='utf-8').splitlines():
        if line.strip():
            rec = json.loads(line)
            by_page[rec['page']] = rec['anchors']
    return by_page


def parse_label(text):
    match = LABEL.search(text)
    return (int(match.group(1)), int(match.group(2))) if match else None


def make_index(manifest, anchors):
    index = {}
    for lecture in manifest['lectures']:
        for example in lecture['examples']:
            key = (lecture['lecture'], int(re.search(r'例\d+\.(\d+)', example['no']).group(1)))
            matches = [a for a in anchors.get(example['problemPage'], []) if parse_label(a['text']) == key]
            anchor = min(matches, key=lambda a: a['y']) if matches else None
            index[key] = (lecture, example, anchor)
    return index


def excerpt_pages(lecture, example, anchor, next_item, document):
    start_page = example['problemPage']
    if anchor is None:
        # Keep the manifest's actual page and mark the missing OCR association for review.
        start_y = 0
    else:
        start_y = max(0, float(anchor['y']) - PAD_PT)
    # End at the next example marker to avoid truncating a solution based on
    # the manifest's explicitly approximate solutionPage field.
    end_page = next_item[1]['problemPage'] if next_item else lecture['pdfEndPage']
    if end_page < start_page:
        end_page = lecture['pdfEndPage']
    boundary_at_next = bool(next_item and next_item[1]['problemPage'] >= start_page)
    if boundary_at_next:
        end_page = next_item[1]['problemPage']
        end_y = max(0, float(next_item[2]['y']) - PAD_PT) if next_item[2] else 0
    else:
        end_y = 0
    result = []
    for number in range(start_page, end_page + 1):
        page = document[number - 1]
        top = start_y if number == start_page else 0
        bottom = end_y if number == end_page and boundary_at_next else page.rect.height
        if bottom <= top:
            continue
        clip = fitz.Rect(0, top, page.rect.width, bottom)
        result.append((number, page, clip))
    return result


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--pdf', type=Path, default=PDF)
    parser.add_argument('--anchors', type=Path, default=ANCHORS)
    parser.add_argument('--manifest', type=Path, default=MANIFEST)
    parser.add_argument('--out-data', type=Path, default=OUT_DATA)
    parser.add_argument('--asset-dir', type=Path, default=OUT_ASSETS)
    parser.add_argument('--asset-prefix', default='/resources/book-excerpts')
    parser.add_argument('--sample', type=int, help='Only build the first N pending examples')
    parser.add_argument('--sample-lectures', help='Build the first pending example from comma-separated lecture numbers')
    args = parser.parse_args()

    manifest = json.loads(args.manifest.read_text(encoding='utf-8'))
    anchors = load_anchors(args.anchors)
    index = make_index(manifest, anchors)
    pending = []
    for lecture in manifest['lectures']:
        entries = lecture['examples']
        for i, example in enumerate(entries):
            if example['status'] != 'pending':
                continue
            key = (lecture['lecture'], int(re.search(r'例\d+\.(\d+)', example['no']).group(1)))
            next_item = None
            boundary_reliable = False
            for next_example in entries[i + 1:]:
                next_no = int(re.search(r'例\d+\.(\d+)', next_example['no']).group(1))
                candidate = index.get((lecture['lecture'], next_no), (None, None, None))
                if next_item is None:
                    next_item = candidate
                if candidate[2] and candidate[2]['text'].strip() == next_example['no'] and float(candidate[2].get('confidence', 0)) >= 0.98:
                    next_item = candidate
                    boundary_reliable = True
                    break
            pending.append((lecture, example, index[key][2], next_item, boundary_reliable))
    if args.sample_lectures:
        wanted = {int(value) for value in args.sample_lectures.split(',')}
        pending = [item for lecture_no in sorted(wanted) if (item := next((entry for entry in pending if entry[0]['lecture'] == lecture_no), None))]
    elif args.sample:
        pending = pending[:args.sample]

    args.asset_dir.mkdir(parents=True, exist_ok=True)
    args.out_data.parent.mkdir(parents=True, exist_ok=True)
    document = fitz.open(args.pdf)
    records = []
    total_bytes = 0
    by_lecture = {lecture['lecture']: lecture['examples'] for lecture in manifest['lectures']}
    sequence_reviews = {}
    for lecture_no, examples in by_lecture.items():
        nums = [int(re.search(r'例\d+\.(\d+)', e['no']).group(1)) for e in examples]
        for i, number in enumerate(nums):
            if ((i == 0 and number != 1) or (i > 0 and number != nums[i - 1] + 1)) and examples[i]['status'] == 'pending':
                sequence_reviews[(lecture_no, number)] = f'锚点例号序列疑有漏号或重号，前后号为 {nums[i - 1] if i else "none"} -> {number}'
    for lecture, example, anchor, next_item, boundary_reliable in pending:
        lecture_no = lecture['lecture']
        ex_no = int(re.search(r'例\d+\.(\d+)', example['no']).group(1))
        key = (lecture_no, ex_no)
        pages = excerpt_pages(lecture, example, anchor, next_item, document)
        page_records = []
        for number, page, clip in pages:
            filename = f'jc30-l{lecture_no:02d}-{ex_no:03d}-p{number:03d}.jpg'
            target = args.asset_dir / filename
            payload = page.get_pixmap(matrix=fitz.Matrix(SCALE, SCALE), clip=clip, alpha=False, annots=True).tobytes('jpeg', jpg_quality=JPEG_QUALITY)
            target.write_bytes(payload)
            total_bytes += len(payload)
            page_records.append({'page': number, 'image': f'{args.asset_prefix}/{filename}', 'alt': f'{example["no"]}原书扫描，PDF第{number}页'})
        if not pages:
            raise RuntimeError(f'empty excerpt for {example["no"]}')

        anchor_text = anchor['text'] if anchor else ''
        exact_label = anchor_text.strip() == example['no']
        note = example.get('note', '')
        review = None
        if not anchor:
            review = 'OCR锚点未与该例号匹配，保留manifest页码并从页首裁取'
        elif not exact_label or float(anchor.get('confidence', 0)) < 0.98 or '未递增' in note or '疑 OCR' in note:
            review = f'锚点需人工确认：{anchor_text}，confidence={anchor.get("confidence")}'
        if '未递增' in note or '疑 OCR' in note:
            review = f'{review + "；" if review else ""}manifest标记例号未递增或疑似OCR误读'
        if next_item and not boundary_reliable:
            review = f'{review + "；" if review else ""}结束锚点未达到可靠匹配阈值'
        if not next_item:
            review = f'{review + "；" if review else ""}本讲未找到后续可靠例题锚点，裁片延伸至本讲清单末页'
        if len(pages) > 3:
            review = f'{review + "；" if review else ""}锚点区间跨{len(pages)}页，可能含相邻讲解或漏识别例号，需检查边界'
        if key in sequence_reviews:
            review = f'{review + "；" if review else ""}{sequence_reviews[key]}'

        source_page = example['problemPage']
        solution_page = example.get('solutionPage')
        records.append({
            'id': f'jc30-l{lecture_no:02d}-{ex_no:03d}',
            'source': f'《基础30讲》第{lecture_no}讲',
            'subject': 'gaoshu', 'lessonId': f'gs{lecture_no:02d}', 'category': 'book30',
            'module': lecture['title'], 'number': example['no'], 'type': 'self',
            'problem': f'原题题干与原书解答见下方原书扫描。PDF第{source_page}页为例题锚点页，数学符号以原页图像为准。',
            'sourcePage': source_page, 'solutionPage': solution_page,
            'solutionPageStatus': 'manifest anchor estimate, not manually verified',
            'solutionStatus': '原书题解已内置，扫描图像未逐题独立复核',
            'anchorConfidence': anchor.get('confidence') if anchor else None,
            'sourceEmbedded': True,
            'reviewStatus': 'source-page',
            **({'sourceReview': {'required': True, 'reason': review, 'anchorPage': source_page}} if review else {}),
            'sourceExcerpt': {'pages': page_records, 'containsAdjacentSource': bool(not next_item or not boundary_reliable or pages and pages[-1][0] > (solution_page or source_page))},
        })
        print(f'{example["no"]}: {len(page_records)} page segment(s), anchor={anchor_text!r}, bytes={sum((args.asset_dir / Path(x["image"]).name).stat().st_size for x in page_records)}', flush=True)

    args.out_data.write_text('export default ' + json.dumps(records, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
    print(f'created {len(records)} excerpts, {total_bytes / 1024 / 1024:.2f} MiB, data={args.out_data}, assets={args.asset_dir}')


if __name__ == '__main__':
    main()
