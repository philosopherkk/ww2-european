"""Sweep every 'N months earlier/later' claim in the data against the snapshot rule in lib/site.ts."""
import json, re, sys, calendar

AUD = '/private/var/folders/4g/0dmwh71539x3w6__bx623p4c0000gn/T/opencode/audit'
REPOS = {'ww2': 'ww2-european', 'ww1': 'WW1-European'}
WORDNUM = {w: i for i, w in enumerate('zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty twenty-one twenty-two'.split())}


def gov_snapshot(snaps, month_key):
    best = None
    for s in snaps:
        sm = s['date'][:7]
        delta = (int(sm[:4]) - int(month_key[:4])) * 12 + (int(sm[5:7]) - int(month_key[5:7]))
        if delta <= 0 and -delta < (999 if best is None else best[1]):
            best = (s, -delta)
    if best is None:
        for s in snaps:
            sm = s['date'][:7]
            delta = (int(sm[:4]) - int(month_key[:4])) * 12 + (int(sm[5:7]) - int(month_key[5:7]))
            if best is None or abs(delta) < best[1]:
                best = (s, abs(delta))
    return best


for site in sys.argv[1:] or ['ww2', 'ww1']:
    man = json.load(open(f"/Users/ka-kinpoon/Project/WW2/{REPOS[site]}/public/data/borders/manifest.json"))
    snaps = man['snapshots']
    d = json.load(open(f'{AUD}/{site}.json'))
    print(f'== {site}')
    seen = 0
    for kind, items, monthof in (
        ('TURNING_POINTS', d['TURNING_POINTS'], lambda o: o.get('month')),
        ('EVENTS', d['EVENTS'], lambda o: (o.get('date') or '')[:7]),
        ('CAMPAIGN_LINES', d['CAMPAIGN_LINES'], lambda o: (o.get('from') or '')[:7]),
    ):
        for o in items:
            mk = monthof(o)
            if not mk or len(mk) != 7:
                continue
            s, gap = gov_snapshot(snaps, mk)
            for field, val in sorted(((k, v) for k, v in o.items() if isinstance(v, str))):
                for m in re.finditer(r'(\d+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty)[ -]months? (earlier|later|before|after|older)', val):
                    num = m.group(1)
                    n = int(num) if num.isdigit() else WORDNUM.get(num, -1)
                    want = gap
                    ok = (n == want)
                    if m.group(2) in ('later', 'after'):
                        ok = (n == gap)  # only the 1938 fallback case is 'after'
                    seen += 1
                    tag = 'ok ' if ok else 'MISMATCH'
                    print(f'  {tag} {o.get("id"):<30} {kind:<15} month={mk} snapshot={s["label"]} gap={gap} | claim "{m.group(0)}" [{field}]')
    print(f'  ({seen} month-gap claims)')
