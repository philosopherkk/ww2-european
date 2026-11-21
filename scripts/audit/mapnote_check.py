"""Check turning-point mapNotes that cite dataset snapshot dates against the real manifest."""
import json, re, sys

AUD = '/private/var/folders/4g/0dmwh71539x3w6__bx623p4c0000gn/T/opencode/audit'
for site in ('ww1', 'ww2'):
    repo = {'ww1': 'WW1-European', 'ww2': 'ww2-european'}[site]
    man = json.load(open(f'/Users/ka-kinpoon/Project/WW2/{repo}/public/data/borders/manifest.json'))
    dates = sorted(s['date'] if isinstance(s, dict) else s for s in (man['snapshots'] if isinstance(man, dict) else man))
    print(f'== {site}: {len(dates)} snapshots, {dates[0]} .. {dates[-1]}')
    d = json.load(open(f'{AUD}/{site}.json'))
    for tp in d['TURNING_POINTS']:
        note = tp.get('mapNote') or ''
        month = tp.get('month')
        refs = set(re.findall(r'\b(19\d\d)-(\d\d)\b', note))
        got = set()
        for y, m in refs:
            cand = f'{y}-{m}'
            if cand in dates:
                got.add(cand)
        refs_s = ' '.join(f'{y}-{m}' for y, m in sorted(refs))
        # month of the turning point must exist in the timeline
        tl = [m['month'] if isinstance(m, dict) else m for m in d['MONTHS']]
        ok_month = month in tl
        bad = [r for r in refs_s.split() if r not in dates]
        tail = f' | months: {tl[-1]}' if tl else ''
        print(f'  {tp["id"]:<28} month={month} in timeline={ok_month} | note dates: {refs_s or "-"}'
              + (f' | NOT snapshots: {bad}' if bad else '') + tail)
