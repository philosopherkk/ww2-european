"""numbercheck.py — every figure in my body prose must be printed, near a unit, by two publishers.

The quote gate proves a quotation is on a page; it says nothing about whether the sentence I wrote
is built out of those quotations. This is the missing direction, and it is stricter than presence:
a number only counts as printed when a cited page prints it within a few words of a unit the atlas
counts in (miles, men, divisions, aircraft, days, months, degrees). A bare "31" in a date does not
license "thirty-one months" — the gate that passed a claim on a token found anywhere on the page is
the blind spot I have been burned by before.

Then the house rule on top: two distinct publishers must print it, so a figure only Wikipedia gives
is refused here and belongs in the uncertainties list instead.

The one exemption is arithmetic on the line's own window: "six months" for a line that runs 7 August
1942 to 9 February 1943 is not a claim about the world, it is the length of the line, and it is
printed as date-arithmetic so a human can check the two dates.

  python3 numbercheck.py
"""
import json
import re
from datetime import date
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent

UNITS = (r'miles|mile|men|troops|soldiers|aircraft|planes|bombers|battalions|divisions|regiments|'
         r'corps|casualties|officers|ships|destroyers|cruisers|days|weeks|months|years|degrees|degree|'
         r'guns|tanks|barrels|yards|kilometres|thousand|million|crew|crews')
ONES = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8,
        'nine': 9, 'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14,
        'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19,
        'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70,
        'eighty': 80, 'ninety': 90}
SCALE = {'thousand': 1000, 'million': 1000000}
WORDNUM = re.compile(r'\b(?:%s)(?:[- ](?:%s))?\b' % ('|'.join(ONES), '|'.join(list(ONES) + list(SCALE))), re.I)
DESIG = re.compile(r'\b(?:b|p|f|t|m|kb|pgm)[-\u2013 ]?\d+', re.I)   # B-29, B-25, B-25s
# A bare four-digit year is never a count. Skipping it is what stops "12 September 1918, the sixteen
# American divisions" from being read as a claim of 1,918 divisions. A comma-grouped figure (1,900)
# is not year-shaped and is still checked.
YEAR = re.compile(r'^(?:19|20)\d\d$')
UNIT_RE = re.compile(r'\b(%s)\b' % UNITS)


def fold(t):
    """Written numbers to integers, commas out, whitespace flat."""
    t = re.sub(r'\s+', ' ', (t or '').lower()).replace(',', '')

    def rep(m):
        total = 0
        for p in re.split(r'[- ]', m.group(0)):
            total = (total or 1) * SCALE[p] if p in SCALE else total + ONES[p]
        return ' %d ' % total
    return WORDNUM.sub(rep, t)


def counted(t, span=45):
    """{number: set(units)} for numbers printed within `span` characters of a unit word."""
    t = fold(t)
    out = {}
    for m in re.finditer(r'\b(\d+)\b', t):
        lo, hi = max(0, m.start() - span), min(len(t), m.end() + span)
        window = t[lo:hi]
        pre = t[max(0, m.start() - 12):m.start()]
        if DESIG.search(pre + m.group(0)) or re.search(r'(?:b|p|f|m|uss|hms)[-\u2013 ]$', pre, re.I):
            continue
        if YEAR.match(m.group(1)):
            continue
        units = set(UNIT_RE.findall(window))
        # “16 B-25s” counts aircraft: a designation printed straight after the number is the unit
        # the publisher is counting in, and requiring the word “bombers” as well would refuse a
        # figure two publishers do print as a number of aircraft.
        if re.match(r'\s*(?:b|f|p|t|m|kb|pgm)[-\u2013 ]?\d+s?\b', t[m.end():m.end() + 9]):
            units.add('aircraft')
        if units:
            out.setdefault(int(m.group(1)), set()).update(units)
    return out


def bare_scale(t):
    """A magnitude written without a number: 'more than a million soldiers'.

    No digits means no comparison to make, and a page that says 'several million' does not agree
    with one that says 'one million'. So a bare scale word in body prose is its own failure: either
    write the figure a page prints, or leave the magnitude out.
    """
    t = fold(t)
    out = []
    for m in re.finditer(r'\b(million|thousand)\b', t):
        window = t[max(0, m.start() - 30):m.end() + 30]
        if re.search(r'\d', window):
            continue
        units = UNIT_RE.findall(window)
        if units:
            out.append((m.group(0), units[0], re.sub(r'\s+', ' ', t[max(0, m.start() - 55):m.end() + 40])))
    return out


def months_between(a, b):
    d0, d1 = date.fromisoformat(a), date.fromisoformat(b)
    return round(((d1 - d0).days) / 30.44)


def fam_of(s):
    """One family per real publisher, so the same page cannot be counted twice.

    A wp_sources row carries no bibliography publisher, and keying one row on the publisher name
    and another on the host made nps.gov count as two publishers for its own sentence. Identity is
    therefore the address with any archive wrapper unwrapped.
    """
    u = s['url']
    if 'web.archive.org/web/' in u:
        u = u.split('web.archive.org/web/', 1)[1].split('/', 1)[1]
    if u.startswith('http'):
        u = u.split('/')[2]
    u = u.replace('www.', '')
    if u.endswith('wikipedia.org'):
        u = 'wikimedia'
    return u


DATES = re.compile(r'\b\d{1,2}(?:st|nd|rd|th)?\s+(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)'
                    r'|\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+\d{1,2}(?:st|nd|rd|th)?(?!\d)'
                    r'|\b(?:1[89]|20)\d\d\b')

bad = 0
for site in ('ww2', 'ww1'):
    d = json.load(open(ROOT / ('findings-%s.json' % site)))
    for it in d['items']:
        # publisher family = the publisher the bibliography names, not the hostname: a Wayback copy
        # of Britannica is Britannica.
        fams = {}
        for s in it['sources'] + [w for w in (it.get('wp_sources') or []) if w]:
            fams.setdefault(fam_of(s), {}).update(counted(s['quote']))
        text = it['summary'] + ' ' + (it.get('strength') or '')
        need = counted(text)
        win = {'months': {months_between(it['from'], it['to'])},
               'days': {(date.fromisoformat(it['to']) - date.fromisoformat(it['from'])).days},
               'years': {round(months_between(it['from'], it['to']) / 12)}}
        rows = []
        for word, unit, ctx in bare_scale(text):
            rows.append('  FAIL  a bare %s near “%s”, no page and no number: …%s…' % (word, unit, ctx))
            bad += 1
        for n, units in sorted(need.items()):
            who = sorted(f for f, u in fams.items() if n in u)
            arith = [u for u in sorted(units) if u in win and n in win[u]]
            if len(who) >= 2:
                rows.append('  ok   %5d %-10s %s' % (n, ','.join(sorted(units))[:22], ' + '.join(w[:26] for w in who)))
            elif arith:
                rows.append('  ok*  %5d %-10s date arithmetic on the window %s..%s (%s) — no page prints it'
                            % (n, ','.join(sorted(units))[:22], it['from'], it['to'], ','.join(arith)))
            else:
                rows.append('  FAIL %5d %-10s printed near a unit by %d publisher(s): %s'
                            % (n, ','.join(sorted(units))[:22], len(who), ', '.join(who) or 'none'))
                bad += 1
        print('== %-24s %s  %d figure(s)' % (it['id'], site, len(need)))
        for r in rows:
            print(r)
        # The uncertainties panel is where a single-family figure may be DISCUSSED — that is the
        # site's standing rule — so this second pass asks less than the body pass. It still asks
        # that a count there be printed by a page in this line's own bibliography: a note may
        # report a disagreement, it may not introduce a figure out of nowhere. Dates are stripped
        # first; the dates in a note are checked by quotecheck and check_cards, not here.
        for u in it.get('uncertainties') or []:
            for n, units in sorted(counted(DATES.sub(' ', u.get('range') or '')).items()):
                who = sorted(f for f, sset in fams.items() if n in sset)
                flag = 'ok ' if who else 'FAIL'
                if not who:
                    bad += 1
                print('   unc %5d %-14s %s  <- %s' % (n, ','.join(sorted(units))[:14],
                                                      (', '.join(who) or 'no cited page prints it')[:40],
                                                      (u.get('topic') or '')[:34]))
                rows.append(flag)
print('%d figures that are not two-family and not date arithmetic' % bad)
raise SystemExit(1 if bad else 0)
