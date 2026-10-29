"""Locate numbered question/example anchors in scanned PDFs for manual review.

Usage: python extract-anchors.py input.pdf output.jsonl [first_page] [last_page]
Requires pymupdf and rapidocr-onnxruntime. Pages and coordinates are 1-based / PDF points.
"""
import json
import os
import re
import sys
from pathlib import Path

import fitz
import numpy as np
from rapidocr_onnxruntime import RapidOCR

if len(sys.argv) not in (3, 5):
    raise SystemExit(__doc__)

source, destination = Path(sys.argv[1]), Path(sys.argv[2])
document = fitz.open(source)
first = int(sys.argv[3]) if len(sys.argv) == 5 else 1
last = int(sys.argv[4]) if len(sys.argv) == 5 else len(document)
if not 1 <= first <= last <= len(document):
    raise ValueError('invalid page range')
destination.parent.mkdir(parents=True, exist_ok=True)
processed = set()
if destination.exists():
    with destination.open(encoding='utf-8') as existing:
        for line in existing:
            if line.strip():
                processed.add(json.loads(line)['page'])

ocr = RapidOCR()
scale = 1.5
with destination.open('a', encoding='utf-8') as output:
    for number in range(first, last + 1):
        if number in processed:
            continue
        page = document[number - 1]
        clip = fitz.Rect(30, 0, min(180, page.rect.width), page.rect.height)
        pixmap = page.get_pixmap(matrix=fitz.Matrix(scale, scale), clip=clip, alpha=False, annots=False)
        pixels = np.frombuffer(pixmap.samples, dtype=np.uint8).reshape(pixmap.height, pixmap.width, pixmap.n)
        result, _ = ocr(pixels)
        candidates = []
        for box, text, confidence in result or []:
            text = text.strip()
            if not re.match(r'^(?:\d{1,3}\s*[.．、]|例\s*\d)', text):
                continue
            candidates.append({
                'text': text[:48],
                'x': round(clip.x0 + min(pt[0] for pt in box) / scale, 2),
                'y': round(min(pt[1] for pt in box) / scale, 2),
                'confidence': round(float(confidence), 3),
            })
        output.write(json.dumps({'page': number, 'anchors': candidates}, ensure_ascii=False) + '\n')
        output.flush()
        if number % 10 == 0 or number == last:
            print(f'pages {number}/{last}', flush=True)
