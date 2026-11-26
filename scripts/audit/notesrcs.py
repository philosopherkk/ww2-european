#!/usr/bin/env python3
"""notesrcs.py <ww1|ww2> — a family named in a card note must have a row in SOURCES.

The Sources panel is the site's promise about where its prose came from. A note that says "the
Australian War Memorial essay counts 130,000 prisoners" while the bibliography carries no Australian
War Memorial row makes that promise untrue, and no other gate sees it: linkcheck.py checks line->event
links, srclinks.mjs checks that the rows' own URLs answer, verify_quotes.mjs only sees quotes in a
findings file. Nothing compared the two lists.

Families are REGEXES, not plain strings, because the bibliography is written in markdown italics and
with house spellings: "_Foreign Relations of the United States_" has an underscore where a word
boundary would be, and the panel says "Imperial War Museums" where a note says "Imperial War Museum".
Underscores are stripped from both sides before matching. Two-sided matching matters as much as
finding a gap: a false gap trains me to ignore the gate.

Known gaps sit in ALLOW per site so this is a gate and not a to-do list. A NEW family named in prose
with no row fails; so does an ALLOW entry that no longer reproduces, which forces the list to shrink
when a row is added (the allow-whitelist idea from check_cards.mjs).

    python3 notesrcs.py ww1
"""
import json
import os
import re
import sys

AUDIT = os.path.dirname(os.path.abspath(__file__))

# (label used in the report, pattern). Add a pattern only once a note actually uses it.
FAM = [
    ("Britannica", r"Britannica"),
    ("Wikipedia", r"Wikipedia|Wikimedia"),
    ("RTL Luxembourg", r"RTL Luxembourg"),
    ("BBC", r"BBC"),
    ("Australian War Memorial", r"Australian War Memorial"),
    ("Imperial War Museum", r"Imperial War Museums?"),
    ("HyperWar", r"HyperWar"),
    ("Foreign Relations of the United States", r"Foreign Relations of the United States|FRUS"),
    ("The Times History", r"Times History"),
    ("Edmonds", r"Edmonds"),
    ("Falls", r"Falls(?!chirm|s?heim)"),
    ("Playfair", r"Playfair"),
    ("Krivosheev", r"Krivosheev"),
    ("Erickson", r"Erickson"),
    ("Suny", r"Suny"),
    ("Stevenson", r"Stevenson"),
    ("Beckett", r"Beckett"),
    ("Forczyk", r"Forczyk"),
    ("Frieser", r"Frieser"),
    ("Glantz", r"Glantz"),
    ("Morton", r"Morton"),
    ("Appleman", r"Appleman"),
    ("Bradbury", r"Bradbury"),
    ("Avalon Project", r"Avalon Project"),
    ("Zenodo", r"Zenodo"),
    ("International Labour Office", r"International Labour Office"),
    ("Urlanis", r"Urlanis"),
    ("Ayres", r"Ayres"),
    ("War Office", r"War Office"),
    ("Ministry of Defence", r"Ministry of Defence|Ministry of Defense"),
    ("The Great War (thegreatwar.pl)", r"thegreatwar|The Great War"),
    ("1914-1918-online", r"1914-1918-online"),
    ("Canadian Encyclopedia", r"Canadian Encyclopedia"),
    ("National Archives", r"National Archives"),
    ("Pegasus Archive", r"Pegasus Archive"),
    ("Office of the Historian", r"Office of the Historian"),
    ("Wiener / Ioanid Report", r"Wiener|Ioanid"),
    ("Paxton", r"Paxton"),
    ("Beevor", r"Beevor"),
    ("Overy", r"Overy"),
    ("DiNardo", r"DiNardo"),
    ("Richard C. Hall", r"Richard C\. Hall|\bHall\b(?!oway)"),
    ("Showalter", r"Showalter"),
    ("Herwig", r"Herwig"),
    ("Avetisian", r"Avetisian"),
    ("Fromkin", r"Fromkin"),
    ("Ferguson", r"Ferguson"),
    ("Strachan", r"Strachan"),
    ("Horne", r"Horne"),
    ("Isabel V. Hull", r"Isabel V\. Hull"),
    ("Liulevicius", r"Liulevicius"),
    ("Eugene Rogan", r"Eugene Rogan"),
    ("Sean McMeekin", r"McMeekin"),
    ("Peter Gatrell", r"Gatrell"),
    ("Ergiri? Bozdemir|Afğan Khdobiakian", r"Khdobiakian|Bozdemir"),
    ("History of War", r"History of War"),
    ("TheSecondWar.pl", r"TheSecondWar\.pl|thesecondwar\.pl"),
    ("History Today", r"History Today"),
    ("Balkan War History", r"Balkan War History"),
    ("Naval History and Heritage Command", r"Naval History"),
    ("Curtis E. Fell / Fell", r"\bFell\b(?!ing|er|s)"),
]

# Gaps a note may name with no SOURCES row behind it. Kept as a mechanism: a NEW gap fails, and so
# does a stale entry, which is what proved the gate works when the list was not empty (a closed gap
# printed "stale allowlist entry"). Empty since the batch of 23 Nov 2026, which closed all 16 by
# adding rows — Britannica per-article rows, Avalon, the AWM, and catalogue rows for three printed
# books, each saying UNVERIFIED in usedFor where the volume could not be read.
ALLOW = {
    "ww1": set(),
    "ww2": set(),
}

# Same mechanism for the map's own prose (a line's `summary` and `strength`), which no gate read
# until 26 Nov. LINES=1 turns that scan on.
ALLOW_LINES = {
    "ww1": set(),
    "ww2": set(),
}


def gaps_for(site, lines_too=False, audit_dir=None):
    dump_path = os.path.join(audit_dir or AUDIT, f"{site}.json")
    if not os.path.exists(dump_path):
        print(f"== {site}: FAIL no dump at {dump_path} — a gate with no dump beside it reads nothing")
        raise SystemExit(2)
    if not os.environ.get("QUIET_PROVENANCE"):
        import datetime
        mt = datetime.datetime.fromtimestamp(os.path.getmtime(dump_path)).strftime("%d %b %H:%M")
        print(f"== {site}: reading {dump_path} (written {mt})")
    dump = json.load(open(dump_path, encoding="utf-8"))
    # strip the markdown italic markers, or "_Foreign Relations" has no word boundary at all
    srcs = json.dumps(dump["SOURCES"], ensure_ascii=False).replace("_", " ")
    out = []
    for e in dump["EVENTS"]:
        note = (e.get("note") or "").replace("_", " ")
        for label, pat in FAM:
            p = re.compile(pat)
            if p.search(note) and not p.search(srcs):
                out.append(f"{label}|{e['id']}")
    if not lines_too:
        return out, len(dump["EVENTS"]), len(dump["SOURCES"]), 0
    # A campaign line prints `summary` and `strength` as reader copy on the map, and until 26 Nov
    # NOTHING compared those fields to the bibliography: 90 of 110 WW2 lines carry a `strength` row
    # and no line on either site has a per-line sources[] array, so a line that names a publisher
    # makes the same promise a card note does. LINES=1 scans them.
    nline = 0
    for l in list(dump["CAMPAIGN_LINES"]) + list(dump.get("MARCH_LINES") or []):
        text = " ".join([l.get("summary") or "", l.get("strength") or ""]).replace("_", " ")
        nline += 1
        for label, pat in FAM:
            p = re.compile(pat)
            if p.search(text) and not p.search(srcs):
                out.append(f"{label}|line:{l['id']}")
    return out, len(dump["EVENTS"]), len(dump["SOURCES"]), nline


def selftest():
    """A gate that cannot fail is not a gate, and a gate that cries wolf is worse than none. Three
    planted cases on a synthetic dump: a family named in a card note, a family named in a line's
    summary/strength, and a family that DOES have a row (which must NOT be flagged)."""
    import shutil
    import tempfile
    tmp = tempfile.mkdtemp()
    dump = {
        "EVENTS": [
            {"id": "planted-note-gap", "note": "The Australian War Memorial essay counts the prisoners differently in its two chapters."},
            {"id": "covered", "note": "The BBC gives the 8 March date, and the bibliography carries that row."},
        ],
        "CAMPAIGN_LINES": [
            {"id": "planted-line-gap", "summary": "The line runs as the War Office map shows it.", "strength": "Krivosheev's totals for the same front."},
            {"id": "planted-line-clean", "summary": "Covered by the BBC row in the bibliography.", "strength": ""},
        ],
        "MARCH_LINES": [],
        "SOURCES": [
            {"citation": "BBC On This Day", "publisher": "BBC", "usedFor": "the 8 March date"},
        ],
    }
    for site in ("ww1", "ww2"):
        json.dump(dump, open(os.path.join(tmp, f"{site}.json"), "w", encoding="utf-8"), ensure_ascii=False)
    want = {
        "note gap caught": "Australian War Memorial|planted-note-gap",
        "line summary gap caught": "War Office|line:planted-line-gap",
        "line strength gap caught": "Krivosheev|line:planted-line-gap",
        "a family with a row NOT flagged": "!BBC|planted-line-clean",
    }
    got, _, _, _ = gaps_for("ww1", lines_too=True, audit_dir=tmp)
    bad = 0
    for why, needle in want.items():
        neg = needle.startswith("!")
        found = needle.lstrip("!") in got
        ok = (not found) if neg else found
        if not ok:
            bad += 1
        print(f"  {'ok  ' if ok else 'FAIL'} {why}")
    # and the default (cards only) must still see the note gap and stay blind to line prose
    cardonly, _, _, _ = gaps_for("ww1", lines_too=False, audit_dir=tmp)
    for why, cond in [("cards-only mode still catches the note gap", "planted-note-gap" in " ".join(cardonly)),
                      ("cards-only mode does not read line prose", not any("line:" in r for r in cardonly))]:
        if not cond:
            bad += 1
        print(f"  {'ok  ' if cond else 'FAIL'} {why}")
    shutil.rmtree(tmp, ignore_errors=True)
    # The default site list is part of the contract: a bare run that measured one site and exited 0
    # once printed "0 gaps" while the other site was never opened.
    import contextlib
    import io
    saved = sys.argv
    try:
        sys.argv = ["notesrcs.py", "ww3"]
        buf = io.StringIO()
        with contextlib.redirect_stdout(buf):
            rc = main()
        ok = rc == 2 and "unknown site" in buf.getvalue()
        print(f"  {'ok  ' if ok else 'FAIL'} a site name outside the vocabulary is refused (exit 2), not skipped")
        bad += 0 if ok else 1
        ok = DEFAULT_SITES == ("ww1", "ww2")
        print(f"  {'ok  ' if ok else 'FAIL'} a bare run defaults to BOTH sites, never one")
        bad += 0 if ok else 1
    finally:
        sys.argv = saved
    print("SELFTEST passed: note gaps, line-summary gaps and line-strength gaps are caught; a covered family is not"
          if not bad else f"SELFTEST FAILED ({bad})")
    return 1 if bad else 0


DEFAULT_SITES = ("ww1", "ww2")


def report(site, lines_too):
    """One site's verdict. Returns the number of failures, or None when the site could not be read."""
    try:
        gaps, ncards, nrows, nline = gaps_for(site, lines_too)
    except Exception as exc:                                    # noqa: BLE001 — a gate must say why it quit
        print(f"== {site}: FAIL could not be measured ({type(exc).__name__}: {exc})")
        return None
    allow = ALLOW.get(site, set())
    lines_allow = ALLOW_LINES.get(site, set())
    live = set(gaps)
    card_live = {r for r in live if "|line:" not in r}
    line_live = live - card_live
    new = sorted((card_live - allow) | (line_live - lines_allow))
    stale = sorted((allow - card_live) | (lines_allow - line_live))
    scope = f" + {nline} lines" if lines_too else ""
    print(f"== {site}: {ncards} cards{scope}, {nrows} SOURCES rows, {len(FAM)} families tracked")
    for r in sorted(live & (allow | lines_allow)):
        print(f"  allowed gap  {r}")
    for r in new:
        print(f"  FAIL gap     {r}")
    for r in stale:
        print(f"  FAIL stale allowlist entry (a row exists now, remove it): {r}")
    if lines_too:
        print(f"  line prose: {len(line_live)} gap(s) in line summary/strength")
    print(f"  {len(new)} new gap(s), {len(live & (allow | lines_allow))} allowed, {len(stale)} stale allowlist")
    return (len(new) + len(stale)) and 1 or 0


def main():
    # The default is BOTH sites. It used to default to ww1 alone, so a bare run printed one green
    # verdict and exit 0 while the other site was never opened — the vacuous-pass class again.
    sites = tuple(sys.argv[1:]) or DEFAULT_SITES
    for s in sites:
        if s not in DEFAULT_SITES:
            print(f"FAIL unknown site {s!r} — expected one of {', '.join(DEFAULT_SITES)}")
            return 2
    # Line prose is scanned by default: measured on the 26 Nov dumps it was already clean (0 gaps in
    # 110 WW2 and 57 WW1 lines), so scanning it costs nothing and closes the only un-covered reader
    # copy on the map. LINES=0 opts out.
    lines_too = os.environ.get("LINES", "1") != "0"
    bad = refused = 0
    for site in sites:
        got = report(site, lines_too)
        if got is None:
            refused += 1
            continue
        bad += got
    if refused:
        print(f"\nFAILED: {refused} site(s) could not be read — no verdict given for them")
        return 1
    return 1 if bad else 0


if __name__ == "__main__":
    if os.environ.get("SELFTEST") == "1":
        sys.exit(selftest())
    sys.exit(main())
