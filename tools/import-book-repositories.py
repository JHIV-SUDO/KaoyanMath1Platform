"""Convert user-authorized HTML and Obsidian study repositories into a bundled question bank.

Usage: python import-book-repositories.py repositories-directory output-js
Requires beautifulsoup4 and PyYAML for this development-time import only.
"""
from collections import Counter
from difflib import SequenceMatcher
from pathlib import Path
import json
import re
import sys

from bs4 import BeautifulSoup
import yaml

if len(sys.argv) != 3:
    raise SystemExit(__doc__)
root, output = Path(sys.argv[1]), Path(sys.argv[2])
site = root / 'zhangyu-1000t'
examples = root / 'zhangyu-math-zero-basics'
note_roots = [('基础篇', root / 'zhangyu-1000-plus'), ('强化篇', root / 'zhangyu-1000ti-qianghua')]


def compact(value):
    value = value.replace('\xa0', ' ').replace('\r', '')
    value = value.replace('\\令', '\\text{令}').replace('$\\tag{②}$', '（②）')
    value = re.sub(r'\$\$(.*?)\$\$', lambda m: '$$' + re.sub(r'\s*\n\s*', ' ', m.group(1)) + '$$', value, flags=re.S)
    return re.sub(r'\n{3,}', '\n\n', value).strip()


def node_text(node):
    return compact(node.get_text('\n', strip=True)) if node else ''


def normalize(value):
    value = re.sub(r'\([A-D]\).*', '', value, flags=re.S)
    value = re.sub(r'\\(?:left|right|,|;|!|quad|qquad)', '', value)
    value = re.sub(r'\\(?:mathrm|mathbf|operatorname)\s*\{([^{}]*)\}', r'\1', value)
    value = value.replace('\\dfrac', '\\frac').replace('\\tfrac', '\\frac')
    value = value.replace('\\leqslant', '\\le').replace('\\geqslant', '\\ge')
    return re.sub(r'[\s{}$，。．.,；;：:（）()、\\]+', '', value).lower()


def chapter_meta(cid, title):
    if cid <= 19:
        phase, subject, number = '基础篇', 'gaoshu', cid - 1
        lesson = f'gs{max(1, number):02d}'
    elif cid <= 25:
        phase, subject, number = '基础篇', 'xiandai', cid - 19
        lesson = f'xd{number:02d}'
    elif cid <= 31:
        phase, subject, number = '基础篇', 'gailv', cid - 25
        lesson = f'gl{number:02d}'
    elif cid <= 49:
        phase, subject, number = '强化篇', 'gaoshu', cid - 31
        lesson = f'gs{number:02d}'
    elif cid <= 58:
        phase, subject, number = '强化篇', 'xiandai', cid - 49
        lesson = f'xd{[1, 1, 2, 2, 4, 3, 5, 5, 6][number - 1]:02d}'
    elif cid <= 67:
        phase, subject, number = '强化篇', 'gailv', cid - 58
        lesson = f'gl{[1, 2, 2, 3, 3, 4, 5, 6, 7][number - 1]:02d}'
    else:
        phase, subject, number, lesson = '综合篇', 'mixed', cid - 67, None
    return {'phase': phase, 'subject': subject, 'chapter': number, 'module': title, 'lessonId': lesson}


index = BeautifulSoup((site / 'index.html').read_text(encoding='utf-8'), 'html.parser')
chapters = {}
for link in index.select('a.chapter-item'):
    cid = int(link['data-cid'])
    title = link.select_one('.ci-title').get_text(' ', strip=True)
    chapters[cid] = chapter_meta(cid, title)
if len(chapters) != 71:
    raise ValueError(f'Expected 71 chapters, got {len(chapters)}')

questions = []
by_number = {}
counts = Counter()
for path in sorted((site / 'chapters').glob('chapter-*.html')):
    cid = int(re.search(r'chapter-(\d+)', path.stem).group(1))
    meta = chapters[cid]
    soup = BeautifulSoup(path.read_text(encoding='utf-8'), 'html.parser')
    for article in soup.select('article.question'):
        number = int(article['data-no'])
        stem = article.select_one('.q-stem')
        if not stem:
            raise ValueError(f'{path.name} question {number}: missing stem')
        options = [node_text(n) for n in stem.select('.opt-val')]
        options_box = stem.select_one('.options')
        if options_box:
            options_box.decompose()
        problem = node_text(stem)
        solution = node_text(article.select_one('.analysis-body'))
        answer = node_text(article.select_one('.answer-body'))
        kind = node_text(article.select_one('.q-kind'))
        choice = re.fullmatch(r'\s*[（(]?([A-D])[）)]?[.。．]?\s*', answer)
        integer = re.fullmatch(r'\s*-?\d+\s*', answer)
        qtype = 'choice' if len(options) == 4 and choice else 'fill' if kind == '填空题' and integer else 'self'
        if cid == 44 and number == 3:
            qtype = 'self'
        canonical_answer = choice.group(1) if qtype == 'choice' else answer
        question = {
            'id': f'book1000-c{cid:02d}-q{number:03d}',
            'category': 'book1000', 'source': f"1000题 · {meta['phase']} · {meta['module']}",
            'subject': meta['subject'], 'module': meta['module'], 'lessonId': meta['lessonId'],
            'number': str(number), 'level': '基础' if meta['phase'] == '基础篇' else '强化' if meta['phase'] == '强化篇' else '冲刺',
            'type': qtype, 'problem': problem, 'options': options, 'answer': canonical_answer,
            'sourceSolution': solution, 'sourceFile': f'zhangyu-1000t/chapters/{path.name}#q{number}',
        }
        if not problem:
            raise ValueError(f'{path.name} question {number}: empty stem')
        questions.append(question)
        by_number[(meta['phase'], meta['subject'], meta['chapter'], number)] = question
        counts[qtype] += 1
        if not solution:
            counts['missing_solution'] += 1


def note_sections(text):
    match = re.search(r'(?ms)^>\s*\[!question\][^\n]*\n(.*?)(?=^>\s*\[!|^##\s|\Z)', text)
    stem = re.sub(r'(?m)^>\s?', '', match.group(1)).strip() if match else ''
    match = re.search(r'(?ms)^##\s*解析要点\s*\n(.*?)(?=^##\s|^>\s*\[!|\Z)', text)
    reasoning = match.group(1).strip() if match else ''
    match = re.search(r'(?ms)^>\s*\[!warning\][^\n]*\n(.*?)(?=^>\s*\[!|^##\s|\Z)', text)
    warning = re.sub(r'(?m)^>\s?', '', match.group(1)).strip() if match else ''
    match = re.search(r'(?ms)^>\s*\[!success\][^\n]*\n(.*?)(?=^>\s*\[!|^##\s|\Z)', text)
    answer = re.sub(r'(?m)^>\s?', '', match.group(1)).strip() if match else ''
    def clean(s):
        s = re.sub(r'\[\[[^\]|]+\|([^\]]+)\]\]', r'\1', s)
        return compact(re.sub(r'\[\[([^\]]+)\]\]', r'\1', s))
    return clean(stem), clean(reasoning), clean(warning), clean(answer)


for phase, directory in note_roots:
    for path in directory.rglob('*.md'):
        if path.parent.name != '题目':
            continue
        text = path.read_text(encoding='utf-8-sig')
        match = re.match(r'(?s)^---\s*\n(.*?)\n---\s*\n(.*)$', text)
        if not match:
            counts['note_without_metadata'] += 1
            continue
        try:
            try:
                metadata = yaml.load(match.group(1), Loader=yaml.BaseLoader) or {}
            except yaml.YAMLError:
                metadata = dict(re.findall(r'(?m)^(no|chapter|chapter_name):\s*([^\n]+)', match.group(1)))
            number = int(metadata.get('no'))
            chapter = int(metadata.get('chapter'))
        except (ValueError, TypeError):
            counts['note_without_metadata'] += 1
            continue
        parent = path.parent.parent.name
        subject = 'xiandai' if '线代' in parent else 'gaoshu' if '高数' in parent else 'mixed' if '综合篇' in parent else None
        target_phase = '综合篇' if subject == 'mixed' else phase
        target = by_number.get((target_phase, subject, chapter, number))
        stem, reasoning, warning, answer = note_sections(match.group(2))
        if not stem:
            counts['note_unmatched'] += 1
            continue
        score = SequenceMatcher(None, normalize(stem), normalize(target['problem'])).ratio() if target else 0
        if target and score >= 0.76 and (reasoning or warning):
            target['studyNote'] = {'topics': metadata.get('topic') or [], 'reasoning': reasoning, 'warning': warning,
                                   'sourceFile': str(path.relative_to(directory)).replace('\\', '/')}
            counts['notes_matched'] += 1
        elif reasoning:
            name = metadata.get('chapter_name') or parent
            if subject == 'gaoshu' and 1 <= chapter <= 18:
                lesson = f'gs{chapter:02d}'
            elif subject == 'xiandai' and 1 <= chapter <= (6 if phase == '基础篇' else 9):
                number_map = [1, 2, 3, 4, 5, 6] if phase == '基础篇' else [1, 1, 2, 2, 4, 3, 5, 5, 6]
                lesson = f'xd{number_map[chapter - 1]:02d}'
            else:
                lesson = None
            key = f'{phase}-{subject}-{chapter}-{number}'
            if any(q['id'] == 'booknote-' + key for q in questions):
                counts['note_duplicate'] += 1
                continue
            questions.append({
                'id': 'booknote-' + key, 'category': 'book1000', 'source': f'1000题 · 笔记精讲 · {phase} · {name}',
                'subject': subject or 'mixed', 'module': name, 'lessonId': lesson, 'number': str(number),
                'level': '基础' if phase == '基础篇' else '强化', 'type': 'self', 'problem': stem,
                'options': [], 'answer': answer, 'sourceSolution': reasoning,
                'studyNote': {'topics': metadata.get('topic') or [], 'reasoning': '', 'warning': warning,
                              'sourceFile': str(path.relative_to(directory)).replace('\\', '/')},
                'sourceFile': str(path.relative_to(directory)).replace('\\', '/'),
            })
            counts['notes_standalone'] += 1
        else:
            counts['note_unmatched'] += 1


for path in sorted(examples.glob('*.html')):
    soup = BeautifulSoup(path.read_text(encoding='utf-8'), 'html.parser')
    module = node_text(soup.select_one('.page-head h1')) or path.stem
    for heading in soup.select('[id^="例"]'):
        if not re.fullmatch(r'例\d+', heading.get('id', '')):
            continue
        box = heading.find_next_sibling()
        if not box or 'box-ex' not in box.get('class', []):
            counts['example_missing_box'] += 1
            continue
        number = int(heading['id'][1:])
        before, after = [], []
        in_solution = False
        for child in box.children:
            if not getattr(child, 'name', None):
                continue
            if 'solve-label' in child.get('class', []):
                in_solution = True
            (after if in_solution else before).append(node_text(child))
        problem, solution = compact('\n'.join(before)), compact('\n'.join(after))
        if not problem:
            counts['example_missing_stem'] += 1
            continue
        lesson = 'gs02' if path.stem.startswith('seq-') else 'gs17' if path.stem.startswith('coord-') else 'gs01'
        option_marks = list(re.finditer(r'[（(]([A-D])[）)]', problem))
        answer_match = re.search(r'(?:应选|故选|选)\s*[（(]?([A-D])[）)]?', solution)
        options = []
        if len(option_marks) == 4 and [m.group(1) for m in option_marks] == list('ABCD') and answer_match:
            options = [problem[m.end():(option_marks[i + 1].start() if i < 3 else len(problem))].strip(' \n，,；;') for i, m in enumerate(option_marks)]
            problem = problem[:option_marks[0].start()].strip()
        question = {
            'id': f'book30-zero-e{number:03d}', 'category': 'book30', 'source': f'基础30讲 · 零基础 · {module}',
            'subject': 'gaoshu', 'module': module, 'lessonId': lesson, 'number': f'例{number}', 'level': '基础',
            'type': 'choice' if options else 'self', 'problem': problem, 'options': options,
            'answer': answer_match.group(1) if options else '', 'sourceSolution': solution,
            'sourceFile': f'zhangyu-math-zero-basics/{path.name}#{heading["id"]}',
        }
        tip = box.find_next_sibling()
        if tip and 'box-tip' in tip.get('class', []):
            question['studyNote'] = {'topics': [], 'reasoning': node_text(tip), 'warning': '',
                                     'sourceFile': f'zhangyu-math-zero-basics/{path.name}#{heading["id"]}'}
        questions.append(question)
        counts['examples'] += 1
        if not solution:
            counts['example_missing_solution'] += 1

ids = [q['id'] for q in questions]
for question in questions:
    if question['id'] in {'book1000-c01-q005', 'book1000-c14-q014', 'book1000-c14-q021',
                          'book1000-c44-q003', 'book1000-c57-q017', 'booknote-强化篇-gaoshu-15-36'}:
        question['renderWarning'] = '原资料中有公式排版待核对，请结合原始资料学习。'
if len(ids) != len(set(ids)):
    raise ValueError('duplicate question IDs')
output.parent.mkdir(parents=True, exist_ok=True)
output.write_text('// 由用户授权的学习仓库生成，来源与版本记录见仓库说明。\nexport default ' + json.dumps(questions, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
print(json.dumps({'total': len(questions), 'counts': counts}, ensure_ascii=False))
