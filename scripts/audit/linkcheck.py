"""Validate curated line->event links: line id, waypoint index, date within +/-3 days of the window."""
import json, re, sys
from datetime import date, timedelta
REPOS = {'ww1': '/Users/ka-kinpoon/Project/WW2/WW1-European', 'ww2': '/Users/ka-kinpoon/Project/WW2/ww2-european'}
ROW = re.compile(r"\{\s*line:\s*'([^']+)',\s*event:\s*'([^']+)',\s*at:\s*(\d+)\s*\}")
for site in sys.argv[1:] or ['ww1', 'ww2']:
    src = open(f"{REPOS[site]}/lib/data/campaign-events.ts", encoding='utf-8').read()
    rows = ROW.findall(src)
    d = json.load(open(f'{AUD if False else ""}{site}.json')) if False else json.load(open(f'{site}.json'))
    ev = {e['id']: e.get('date') for e in d['EVENTS']}
    lines = {c['id']: c for c in d['CAMPAIGN_LINES']}
    problems = 0
    per_line = {}
    for line, event, at in rows:
        per_line.setdefault(line, 0)
        per_line[line] += 1
        if line not in lines:
            print(f'  NO SUCH LINE {line}'); problems += 1; continue
        if event not in ev:
            print(f'  NO SUCH EVENT {event} (line {line})'); problems += 1; continue
        c = lines[line]
        if int(at) >= len(c['path']):
            print(f'  AT OUT OF RANGE {line} at={at} path len={len(c["path"])}'); problems += 1
        frm, to, dt = c.get('from'), c.get('to'), ev[event]
        if dt and frm and to:
            d0 = date.fromisoformat(dt); lo = date.fromisoformat(frm) - timedelta(days=3); hi = date.fromisoformat(to) + timedelta(days=3)
            if not (lo <= d0 <= hi):
                print(f'  DATE OUT OF WINDOW {event} {dt} not in {frm}..{to} ({line})'); problems += 1
    print(f'== {site}: {len(rows)} links over {len(per_line)} of {len(lines)} lines, {problems} problems')
