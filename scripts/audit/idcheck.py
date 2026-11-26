#!/usr/bin/env python3
"""idcheck.py — does any line I propose already exist on the site under the same id?

This is the check that would have caught my two drafts whose ids had already been shipped by
another writer (myitkyina_1944, st_mihiel_1918), which would have arrived as duplicate ids in
campaigns.ts. It also reports the near cases: the same from/to window, an overlapping window with
shared words in the name, or the same window under another id, so a second line on the same ground
stays a decision and never becomes an accident.

  python3 idcheck.py                              # the two payloads
  python3 idcheck.py --selftest-only    # fixture only, independent of any dump
  PAYLOAD=../WITHDRAWN-...json python3 idcheck.py

With PAYLOAD set, one file is checked against BOTH sites' shipped lines, so a draft that collides
with either site is caught.
"""
import json
import os
import sys
import unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)


def slug(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode()
    return ''.join(c if c.isalnum() else '_' for c in s.lower()).strip('_')


def overlap(a1, a2, b1, b2):
    return a1 <= b2 and b1 <= a2


def words(s, n=4):
    return [slug(w) for w in (s or '').replace(':', ' ').split() if len(w) > 3][:n]


def check(item, shipped_by_site):
    """One proposed line against the shipped lines of each site. Returns a list of problems."""
    notes = []
    for site, by_id in shipped_by_site.items():
        if item['id'] in by_id:
            s = by_id[item['id']]
            notes.append('%s: this id is ALREADY SHIPPED (%s..%s %r)' % (site, s['from'], s['to'], s['name']))
        for c in by_id.values():
            if c['id'] == item['id']:
                continue
            shared = set(words(item['name'])) & set(words(c['name']))
            same_window = c['from'] == item['from'] and c['to'] == item['to']
            if (shared and same_window) or (len(shared) >= 2 and overlap(item['from'], item['to'], c['from'], c['to'])):
                notes.append('%s: shares the words %s with %s, %s %s..%s' %
                             (site, sorted(shared), c['id'],
                              'the same window' if same_window else 'an overlapping window',
                              c['from'], c['to']))
    return notes


# The input for the fixture self-test: the two drafts of 26 Nov that had to be withdrawn because
# another writer already had those ids in progress (audit/us-lines/WITHDRAWN-shipped-elsewhere.json
# is the original file; it is repeated here so --selftest-only runs in any job directory).
WITHDRAWN_FIXTURE = [
    {"id": "myitkyina_1944", "from": "1944-05-17", "to": "1944-08-03",
     "name": "Northern Burma: Ledo to Myitkyina", "war": "ww2"},
    {"id": "st_mihiel_1918", "from": "1918-09-12", "to": "1918-09-16",
     "name": "Saint-Mihiel: the salient closed", "war": "ww1"},
]


def fixture_selftest():
    """A gate's self-test carries its own data. This one used to assert against whatever dumps happened
    to be in the directory, which tested the tree: once my own lines were in the tree the assertion
    flipped and an AssertionError that read like a gate failure was really a fixture problem."""
    fixture = {'ww2': {'myitkyina_1944': {'id': 'myitkyina_1944', 'from': '1944-05-17', 'to': '1944-08-03',
                                          'name': 'Myitkyina: the lead-to-Mine road'}},
               'ww1': {'st_mihiel_1918': {'id': 'st_mihiel_1918', 'from': '1918-09-12', 'to': '1918-09-16',
                                          'name': 'Saint-Mihiel: the salient closed'}}}
    withdrawn = json.load(open(os.path.join(ROOT, 'WITHDRAWN-shipped-elsewhere.json'))) \
        if os.path.exists(os.path.join(ROOT, 'WITHDRAWN-shipped-elsewhere.json')) else WITHDRAWN_FIXTURE
    caught = [n for it in withdrawn for n in check(it, fixture) if 'ALREADY SHIPPED' in n]
    # The negative arm matters as much: a gate that flagged everything would also pass the positive arm.
    clean = check({'id': 'normandy_breakout_1944', 'from': '1944-07-25', 'to': '1944-08-30',
                   'name': 'Cobra and the breakout'}, fixture)
    if len(caught) != 2 or clean:
        raise SystemExit('SELFTEST FAIL: expected 2 collisions and 0 clean-flag problems, got %d and %r'
                         % (len(caught), clean))
    print('SELFTEST ok: %s both collide with a fixture shipped line, a new id does not'
          % ', '.join(i['id'] for i in withdrawn))


if '--selftest-only' in sys.argv:
    fixture_selftest()
    raise SystemExit(0)

def payload_files():
    """Which payloads this run checks. A one-site job is a legitimate shape, so a payload file that was
    never written is skipped with a printed note; a job with NO payload at all is a mistake and stays a
    refusal, because silently checking nothing is the failure mode this set of gates exists to stop."""
    pay = os.environ.get('PAYLOAD')
    if pay:
        return [(pay, 'payload')], 'payload'
    files, wanted = [], set()
    for site in ('ww2', 'ww1'):
        path = os.path.join(ROOT, 'findings-%s.json' % site)
        if os.path.exists(path):
            files.append((path, site))
            wanted.add(site)
        else:
            print('== %s: no payload at %s — nothing proposed there, or the path is wrong' % (site, path))
    if not files:
        raise SystemExit('REFUSE: no findings-ww2.json or findings-ww1.json in %s' % ROOT)
    return files, wanted


FILES, WANTED = payload_files()
PAYLOAD_SITES = bool(os.environ.get('PAYLOAD'))

# 2. read a shipped-line dump only for the sites that have a payload. With an explicit PAYLOAD the run
# checks BOTH sites, which is how the withdrawn drafts were caught: a WW2 draft can restate a WW1 line.
SHIPPED = {}
for site in (('ww2', 'ww1') if PAYLOAD_SITES else WANTED):
    path = os.path.join(HERE, '%s.json' % site)
    if not os.path.exists(path):
        raise SystemExit('REFUSE: no shipped-line dump at %s. Put one there with dump.mjs (run it '
                         'against the tree you are proposing into), or use --selftest-only, which '
                         'needs no tree at all.' % path)
    live = json.load(open(path))
    SHIPPED[site] = {c['id']: c for c in live['CAMPAIGN_LINES'] + live.get('MARCH_LINES', [])}

POST_APPLY = os.environ.get('POST_APPLY') == '1'
proposed = set()
for path, _ in FILES:
    d0 = json.load(open(path))
    proposed |= {i['id'] for i in (d0['items'] if isinstance(d0, dict) else d0)}

bad = 0
total = 0
self_shipped = 0
for path, label in FILES:
    d = json.load(open(path))
    items = d['items'] if isinstance(d, dict) else d
    print('== %s: %d proposed lines%s' % (label, len(items), ' (post-apply)' if POST_APPLY else ''))
    for it in items:
        total += 1
        notes = check(it, SHIPPED)
        if POST_APPLY and it['id'] in proposed:
            mine = [n for n in notes if 'ALREADY SHIPPED' in n]
            notes = [n for n in notes if n not in mine]
            self_shipped += len(mine)
        for n in notes:
            print('  !! %-26s %s' % (it['id'], n))
            bad += 1
        if not notes:
            print('  ok %-26s %s..%s' % (it['id'], it['from'], it['to']))

if not os.environ.get('PAYLOAD'):
    fixture_selftest()

if bad:
    print('%d id or identity collisions to resolve' % bad)
    raise SystemExit(1)
if POST_APPLY:
    print('%d proposed lines: %d of them are now shipped (expected after the apply), and %d collide '
          'with a line the payload did not propose' % (total, self_shipped, bad))
else:
    print('%d proposed lines, none reusing or restating a shipped line' % total)
