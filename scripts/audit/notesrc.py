#!/usr/bin/env python3
"""notesrc.py - the uncertainties panel is reader text, so it gets checked like reader text.

Three questions per note, all answerable from what this delivery already fetched:

1. DATE: if a note says '26 December', does a page this line cites print 26 December? A note is
   allowed to report a disagreement a source prints; it is not allowed to introduce a date no cited
   page carries. The comparison ignores case, ordinals, dashes and spacing.
2. FIGURE: if a note says '450 miles' or 'over two million troops', does a page this line cites print
   it? numbercheck.py governs the figures in the line's own text, where two families are needed; a
   note withholds a figure and has to point at a page that printed it, so one family is enough here,
   but one family is not nothing.
3. NAME: if a note credits a publisher, is that publisher actually in this line's bibliography? A
   note that says 'Britannica gives X' while the bibliography has no Britannica row sends a reader
   looking for something that is not there.

The same three checks run over the line's own summary, which is where the reader meets the line.

  python3 notesrc.py
"""
import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent

MONTH_FULL = ('January', 'February', 'March', 'April', 'May', 'June', 'July',
              'August', 'September', 'October', 'November', 'December')
MONTHS = ('January|February|March|April|May|June|July|August|September|October|November|December|'
          'Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec')
DAY_MONTH = re.compile(r'\b(\d{1,2})(?:st|nd|rd|th)?\s+(%s)\b' % MONTHS)
MONTH_DAY = re.compile(r'\b(%s)\s+(\d{1,2})(?:st|nd|rd|th)?\b' % MONTHS)
# Order matters: a bare year is blanked FIRST. Left to the month+day rule, "February 1943" would be
# read as 19 February and "43" would survive as a figure the note supposedly asserts - and the day must
# not be allowed to bite into a year either, hence the lookahead.
DATEISH = re.compile(r'\b(?:1[89]|20)\d\d\b'
                     r'|\b\d{1,2}(?:st|nd|rd|th)?\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)'
                     r'|\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2}(?!\d)')

# A figure is a number the copy asserts about the past, so it needs a unit or a scale word near it.
UNIT = re.compile(r'\b(miles?|km|kilometres?|men|soldiers|troops|casualties|deaths|killed|ships|'
                  r'aircraft|days?|weeks?|months?|years?|divisions?|corps|regiments?|brigades?|'
                  r'battalions?|per cent|percent)\b', re.I)
SCALE = re.compile(r'\d[\d,.]*\s*(?:million|thousand|billion)', re.I)
SCALEWORD = re.compile(r'\b(one|two|three|four|five|six|seven|eight|nine)\s+(million|billion|thousand)\b',
                       re.I)
FIG = re.compile(r'\d[\d,.]*')
WORDVAL = {'one million': 10 ** 6, 'two million': 2 * 10 ** 6, 'three million': 3 * 10 ** 6,
           'four million': 4 * 10 ** 6, 'five million': 5 * 10 ** 6, 'six million': 6 * 10 ** 6,
           'seven million': 7 * 10 ** 6, 'eight million': 8 * 10 ** 6, 'nine million': 9 * 10 ** 6,
           'one thousand': 10 ** 3, 'two thousand': 2 * 10 ** 3, 'three thousand': 3 * 10 ** 3,
           'four thousand': 4 * 10 ** 3, 'five thousand': 5 * 10 ** 3, 'six thousand': 6 * 10 ** 3,
           'seven thousand': 7 * 10 ** 3, 'eight thousand': 8 * 10 ** 3, 'nine thousand': 9 * 10 ** 3}
# '339th Infantry Regiment' and '2nd Battalion' are names, not figures. Without this the check flags
# the title of the very source a note is crediting.
DESIG = re.compile(r'\b\d+(?:st|nd|rd|th)\s+(?:Infantry|Armoured|Armored|Artillery|Engineer|Marine|'
                   r'Regiment|Division|Corps|Brigade|Battalion|Army|Front|Task|Force|B-\d)', re.I)

# The names a note may credit, and the string this delivery's bibliography uses for that publisher.
# Matched case-sensitively on purpose: a lower-case sweep would credit 'history' to HISTORY every time
# a sentence happened to contain the ordinary word.
ALIASES = [
    (r'Encyclopaedia Britannica|Britannica', 'britannica'),
    (r'\bWikipedia\b', 'wikimedia'),
    (r'HistoryNet', 'historynet'),
    (r'History of War', 'history of war'),
    (r'National Park Service', 'national park service'),
    (r'National WWII Museum|National World War II Museum', 'wwii museum'),
    (r'American Battle Monuments Commission', 'battle monuments'),
    (r'EBSCO', 'ebsco'),
    (r'\bHISTORY\b', 'this day in history'),
    (r'War History Online', 'war history online'),
    (r'Alaska\.org', 'alaska.org'),
    (r'US Army', 'us army in world war'),
    (r'GoForBroke', 'goforbroke'),
    (r'ARSOH', 'arsoh'),
]
BANNED = ['the publishers in the bibliography', 'not reachable', 'this delivery', 'the site timeline',
          'audit', 'family', 'wp_sources', 'usedFor', 'this entry', 'the note says', 'card note']


def fold(s):
    return re.sub(r'\s+', ' ', s or '').strip().lower()


def long_month(m):
    table = {'jan': 'january', 'feb': 'february', 'mar': 'march', 'apr': 'april', 'jun': 'june',
             'jul': 'july', 'aug': 'august', 'sep': 'september', 'sept': 'september',
             'oct': 'october', 'nov': 'november', 'dec': 'december'}
    return table.get(m.lower(), m.lower())


def dates_in(text):
    """Every day+month this text names, as (day, month) pairs."""
    out = set()
    for m in DAY_MONTH.finditer(text):
        out.add((int(m.group(1)), long_month(m.group(2))))
    for m in MONTH_DAY.finditer(text):
        out.add((int(m.group(2)), long_month(m.group(1))))
    return out


def figures_in(text):
    """The figures this text asserts.

    A figure spelled in words ('over two million troops') comes back as that phrase, because the
    pages print it in words too; the check then needs the same phrase on a cited page, which is the
    honest way to match a number across two publishers. A bare integer under 10 is a count of legs or
    steps, not a claim about the past, and a unit designation is a name."""
    out = set()
    for m in SCALEWORD.finditer(text):
        out.add((m.group(1) + ' ' + m.group(2)).lower())
        # The copy may spell a figure in words while the page prints digits: 'eight thousand' and
        # '8,000' are the same assertion, so both spellings are returned.
        n = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7,
             'eight': 8, 'nine': 9}[m.group(1).lower()] * {'million': 10 ** 6, 'thousand': 10 ** 3,
                                                           'billion': 10 ** 9}[m.group(2).lower()]
        out.add(str(n))
    # Blank the dates with the SAME number of characters, not one space each: the unit word is looked
    # up by offset a few lines below, and a shortened string would send every lookup to the wrong word.
    bare = DATEISH.sub(lambda m: ' ' * len(m.group(0)), text)
    for m in FIG.finditer(bare):
        tok = m.group(0).rstrip('.,')
        if DESIG.match(text[m.start():m.start() + 34]):
            continue
        tail = text[m.end():m.end() + 24]
        if not (UNIT.search(tail) or SCALE.search(bare[max(0, m.start() - 12):m.end() + 12])):
            continue
        if tok.replace(',', '').isdigit() and int(tok.replace(',', '')) < 10:
            continue
        out.add(tok)
    return out


def own_dates(it):
    """The two days a line starts and stops on are this atlas's own, so a note may name them:
    'this atlas stops the line on 23 November' is a statement about the map, not a claim about a
    publisher's page. Everything else a note dates has to be on a page."""
    out = set()
    for key in ('from', 'to'):
        y, m, d = (int(x) for x in it[key].split('-'))
        out.add((d, long_month(MONTH_FULL[m - 1])))
    return out


def check(it, topic, rng, qdates, qfigs, pubs):
    """One stretch of reader copy against the days, figures and publishers its own pages print."""
    out = []
    text = (topic + ' ' + rng).lower()
    for phrase in BANNED:
        if phrase in text:
            out.append('the note on %r uses audit vocabulary %r' % (topic, phrase))
    for day, month in sorted(dates_in(rng) - own_dates(it)):
        if (day, month) not in qdates:
            out.append('the note on %r says %d %s and no page this line cites prints that day'
                       % (topic, day, month))
    def printed(tok):
        # The same figure is spelled several ways between a page and a note: 36,000 / 36000 /
        # thirty-six thousand. (Subtracting a transformed copy of the wanted set from itself cancels
        # every token with no comma in it - that version proved nothing, which is why this is a
        # function over candidates rather than a set difference.)
        cands = {tok.lower(), tok.lower().replace(',', '')}
        if tok.lower() in WORDVAL:
            d = str(WORDVAL[tok.lower()])
            cands |= {d, format(WORDVAL[tok.lower()], ',')}
        return any(c in qfigs for c in cands)

    for tok in sorted(t for t in figures_in(rng) if not printed(t)):
        out.append('the note on %r prints the figure %s and no page this line cites prints it'
                   % (topic, tok))
    for pattern, key in ALIASES:
        if re.search(pattern, rng) and key not in pubs:
            out.append('the note credits /%s/ but this line cites no such publisher' % pattern)
    return out


bad = []
for site in ('ww2', 'ww1'):
    d = json.load(open(ROOT / ('findings-%s.json' % site)))
    for it in d['items']:
        quotes = ' '.join([s['quote'] for s in it['sources']] +
                          [w['quote'] for w in (it.get('wp_sources') or []) if w])
        qdates = dates_in(quotes)
        qfigs = {x for t in figures_in(quotes) for x in (t.lower(), t.lower().replace(',', ''))}
        pubs = fold(' ; '.join([s.get('publisher', '') for s in it['sources']] +
                               [s.get('publisher', '') for s in (it.get('wp_sources') or []) if s]))
        own = qdates | own_dates(it)
        nfig = len(figures_in(' '.join(u.get('range') or '' for u in (it.get('uncertainties') or []))))
        print('%-24s %-42s %d date(s), %d figure(s)'
              % (it['id'], (it.get('uncertainties') or [{}])[0].get('topic', '')[:42],
                 sum(len(dates_in(u.get('range') or '')) for u in (it.get('uncertainties') or [])), nfig))
        for u in it.get('uncertainties') or []:
            problems = check(it, u.get('topic', ''), u.get('range', ''), own, qfigs, pubs)
            for p in problems:
                print('    PROBLEM %s' % p)
                bad.append('%s: %s' % (it['id'], p))
        body = it['summary'] + ' ' + (it.get('mapNote') or '')
        for p in check(it, 'the text of the line', body, own, qfigs, pubs):
            print('    PROBLEM %s' % p)
            bad.append('%s: %s' % (it['id'], p))

# Self-test: a note that names a day no quote prints, a figure no quote prints, and a note that
# credits a publisher the line does not cite, must all be visible to this script - planted here so a
# future edit that breaks a check fails loudly instead of passing quietly.
fake_dates = dates_in('the town fell on 26 December 1944')
fake_figs = figures_in('a front 300 miles long, over one million troops')
assert '300' in fake_figs and 'one million' in fake_figs, fake_figs
assert '1918' not in fake_figs, fake_figs
planted = check({'id': 'selftest', 'from': '1944-12-01', 'to': '1944-12-26'}, 't',
                'Encyclopaedia Britannica gives 27 December and Wikipedia 26 December, along a front '
                '450 miles long with over two million troops in the 339th Infantry Regiment.',
                fake_dates, fake_figs, 'wikimedia foundation')
assert any('27 december' in p for p in planted), planted
assert not any('26 december' in p for p in planted), planted
assert any('450' in p for p in planted), planted
assert any('two million' in p for p in planted), planted
assert not any('300' in p for p in planted), planted
assert not any('339' in p for p in planted), planted   # a regiment title is a name, not a figure
assert any('Encyclopaedia Britannica' in p for p in planted), planted
print('SELFTEST ok: a date no quote prints, a figure no quote prints, and a credit to an uncited '
      'publisher are all caught')

if bad:
    print('%d problems in the uncertainties copy' % len(bad))
    raise SystemExit(1)
print('every date AND every figure in the reader copy is printed by a page that line cites, and every '
      'credit names a cited publisher')
