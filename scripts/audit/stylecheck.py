"""stylecheck.py — is my reader-facing copy fit for a phone screen?

post.py puts the typographic characters in; this gate checks nobody slipped. Everything here is
prose the atlas shows a reader (the line's name and summary, the strength line, the bibliography's
usedFor sentence, an uncertainty row, a waypoint's place name), so the ban list is the vocabulary of
my own workflow, plus the machinery names that only exist inside the repository.

Word counts are reported against the shipped lines rather than against a cap: the sites' 45/97/143
word caps are for the three reading levels of an EVENT card, and a line has only a summary and a
strength sentence. What matters for a new line is that it does not read like a different author.

  python3 stylecheck.py
"""
import json
import re
import statistics
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent

# My own workflow's vocabulary, and the repository's machinery names. None of these belong on screen.
# Reader-facing copy must never describe how it was made. The audit vocabulary is refused wherever a
# reader can see it: the name, the summary, the strength line, the map note and the uncertainties row.
# 'publisher(s) quoted here' and 'accounts quoted here' were both in my own first draft of the notes;
# a note that withholds a figure has to name the account it is withholding it from instead.
BANNED = ['audit', 'payload', 'waypoint', 'geocod', 'provenance', 'single-source', 'single family',
          'two families', 'publisher family', 'body text', 'card note', 'this card', 'this entry',
          'the entry', 'the note', 'earlier version', 'a second history site', 'dump', 'gate',
          'citation needed', 'TODO', 'placeholder', 'proposed', 'unverified', 'needs a card',
          'publisher quoted', 'publishers quoted', 'publisher here', 'publishers here',
          'accounts quoted', 'account quoted', 'quoted here', 'the text of the line',
          'this delivery', 'not reachable', 'its own sources']
READER_FIELDS = ['name', 'summary', 'strength', 'mapNote']
ENTITY = re.compile(r'&(amp|quot|nbsp|rsquo|lsquo|ldquo|rdquo|ndash|mdash|hellip|#\d+);')


def words(s):
    return len(re.findall(r"[^\s]+", s))


bad = 0
for site in ('ww2', 'ww1'):
    live = json.load(open(HERE / ('%s.json' % site)))
    mine = json.load(open(ROOT / ('findings-%s.json' % site)))
    shipped = live['CAMPAIGN_LINES'] + live.get('MARCH_LINES', [])
    sumlen = [words(l['summary']) for l in shipped]
    stren = [words(l['strength']) for l in shipped if l.get('strength')]
    print('== %s  shipped summary words: median %.0f, max %d | strength words: median %.0f, max %d'
          % (site, statistics.median(sumlen), max(sumlen), statistics.median(stren), max(stren)))
    ids = {e['id'] for e in live['EVENTS']} | {l['id'] for l in shipped}
    for it in mine['items']:
        texts = [(k, it.get(k) or '') for k in READER_FIELDS]
        texts += [('usedFor', s['usedFor']) for s in it['sources']]
        texts += [('uncertainty', '%s: %s' % (u.get('topic'), u.get('range') or u.get('detail')))
                  for u in it.get('uncertainties') or []]
        texts += [('wp place', w['place']) for w in it.get('wp_sources') or [] if w]
        probs = []
        for where, t in texts:
            for ch in ['"', "'"]:
                if ch in t:
                    probs.append('%s has a straight %s: %r' % (where, ch, t[:60]))
            if ENTITY.search(t):
                probs.append('%s has an HTML entity: %r' % (where, t[:60]))
            low = t.lower()
            for b in BANNED:
                if b in low:
                    probs.append('%s uses workflow vocabulary %r: %r' % (where, b, t[:70]))
            for eid in sorted(ids):
                if '_' in eid and re.search(r'\b%s\b' % eid, low):
                    probs.append('%s names the event id %s: %r' % (where, eid, t[:70]))
        bad += len(probs)
        note = 'ok' if not probs else ''
        print('  %-24s summary %3dw strength %2dw  %s'
              % (it['id'], words(it['summary']), words(it.get('strength') or ''), note))
        for p in probs:
            print('     ' + p)
print('%d style problems' % bad)
raise SystemExit(1 if bad else 0)
