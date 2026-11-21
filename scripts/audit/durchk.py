"""Deterministic sweep: durations stated next to the dates they should follow from.

For every string field, find explicit spans ('from D1 to D2', 'D1 - D2', 'between D1 and D2')
and explicit durations ('N days', 'N weeks', 'ten weeks', 'N months'). If both appear in one
field and the duration disagrees with the span by more than 10%, flag it.
"""
import json, re, sys
from datetime import date

AUD = '/private/var/folders/4g/0dmwh71539x3w6__bx623p4c0000gn/T/opencode/audit'
MON = {m.lower(): i for i, m in enumerate(
    'January February March April May June July August September October November December'.split(), 1)}
NUM = {'a': 1, 'an': 1, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7,
       'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14,
       'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20,
       'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60, 'ninety': 90}


def parse_date(tok, default_year=None):
    m = re.match(r'(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]+)(?:\s+(\d{4}))?$', tok)
    if m:
        mo = MON.get(m.group(2).lower())
        yr = int(m.group(3) or default_year or 0)
        if mo and yr:
            return date(yr, mo, int(m.group(1)))
    m = re.match(r'([A-Za-z]+)\s+(\d{1,2})(?:st|nd|rd|th)?,?\s+(\d{4})$', tok)
    if m:
        mo = MON.get(m.group(1).lower())
        if mo:
            return date(int(m.group(3)), mo, int(m.group(2)))
    m = re.match(r'(\d{4})-(\d\d)-(\d\d)$', tok)
    if m:
        return date(int(m.group(1)), int(m.group(2)), int(m.group(3)))
    return None


SPAN = re.compile(
    r'(?:from|between|from the)?\s*('
    r'\d{1,2}(?:st|nd|rd|th)?\s+[A-Za-z]+(?:\s+\d{4})?|'
    r'[A-Za-z]+\s+\d{1,2}(?:st|nd|rd|th)?,?\s+\d{4}|'
    r'\d{4}-\d\d-\d\d'
    r')\s*(?:to|until|through|-|–|—|and)\s*('
    r'\d{1,2}(?:st|nd|rd|th)?\s+[A-Za-z]+(?:\s+\d{4})?|'
    r'\d{1,2}\s+[A-Za-z]+|'
    r'\d{4}-\d\d-\d\d'
    r')'
)
DUR = re.compile(r'\b(\d{1,4}|[a-z]+)\s+(day|week|month|year)s?\b')


def spans_in(s):
    out = []
    for m in SPAN.finditer(s):
        a, b = m.group(1), m.group(2)
        ya = re.search(r'(\d{4})', a)
        yb = re.search(r'(\d{4})', b)
        d1 = parse_date(a)
        d2 = parse_date(b, default_year=int(ya.group(1)) if ya else None)
        if d1 and d2 and d2 >= d1:
            out.append(((d2 - d1).days + 1, m.group(0)))
    return out


def durations_in(s):
    out = []
    for m in DUR.finditer(s):
        n, unit = m.group(1), m.group(2)
        v = int(n) if n.isdigit() else NUM.get(n.lower())
        if v is None:
            continue
        days = v * {'day': 1, 'week': 7, 'month': 30, 'year': 365}[unit]
        out.append((days, unit, m.group(0)))
    return out


for site in sys.argv[1:] or ['ww2', 'ww1']:
    d = json.load(open(f'{AUD}/{site}.json'))
    flagged = 0
    for kind in ('EVENTS', 'CAMPAIGN_LINES', 'TURNING_POINTS', 'FIGURES'):
        for o in d.get(kind, []):
            stack = [(o, '')]
            while stack:
                obj, path = stack.pop()
                if isinstance(obj, dict):
                    for k, v in obj.items():
                        if isinstance(v, str):
                            sp, du = spans_in(v), durations_in(v)
                            if not sp or not du:
                                continue
                            for sd, sctx in sp:
                                for dd, unit, dctx in du:
                                    rel = abs(dd - sd) / max(sd, 1)
                                    if rel > 0.12 and not (sd >= 300 and unit == 'day' and False):
                                        flagged += 1
                                        print(f'  {o.get("id"):<32} {kind:<15} {path+k:<22} span {sd:>4}d "{sctx[:44]}" vs "{dctx}"')
                                        for sent in re.split(r'(?<=[.;]) ', v):
                                            if re.search(r'\b\d{1,4}|[a-z]+ (day|week|month|year)s?\b', sent) and re.search(r'(to|–|—|and|-)\s', sent):
                                                pass
                                        print(f'      {v[max(0,v.find(sctx[:18])-90):v.find(sctx[:18])+150]}')
                        elif isinstance(v, dict):
                            stack.append((v, path + k + '.'))
    print(f'== {site}: {flagged} span/duration pairs to read')
