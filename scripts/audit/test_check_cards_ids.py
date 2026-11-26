#!/usr/bin/env python3
"""test_check_cards_ids.py — does check_cards' line vocabulary cover EVERY line in the dump?

`LINE_IDS` is built by mapping one array. A `new Set(map(...))` is correct by construction over the
array it reads, so no amount of reading the code proves it read the RIGHT array. WW1 ships its lines in
TWO arrays — `kind: 'front'` rows in CAMPAIGN_LINES, `kind: 'advance'` rows in MARCH_LINES — and on
26 Nov the gate read only the first: an applied march line FAILed "id is not in the live dump", and a
proposal reusing a shipped march id would have PASSed "id already in the live dump".

So this test asks a question the Set cannot answer by construction: for every id the DUMP contains, in
either array, the gate must agree the id is there. And for an id no tree contains, it must disagree.
The verdict is read from the gate's own words, never from its source.

It then plants the old bug — `LINE_IDS` built from CAMPAIGN_LINES alone — into a copy of the gate and
requires this test to FAIL against it. A test that passes against the broken gate measures nothing.
"""
import json
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
GATE = f"{HERE}/check_cards.mjs"
DUMPS = {s: os.environ.get(f"TEST_DUMP_{s.upper()}") or f"{HERE}/out/_shared/live-{s}.json"
         for s in ("ww1", "ww2")}
IN_LIVE = "id is not in the live dump"
ALREADY = "id already in the live dump"
ITEM = {"id": None, "name": "Test line", "side": "western", "from": "1944-06-01", "to": "1944-08-01",
        "path": [[48.0, 2.0], [49.0, 3.0]], "summary": "Sixteen words here to keep the summary "
                                                       "over any floor the gate may have for a line "
                                                       "of this kind in this"}


def verdict(gate, site, line_id, applied, dump):
    """Runs the real gate on a one-item lines payload and returns whether it complained, and how."""
    payload = {"items": [dict(ITEM, id=line_id)]}
    import tempfile
    with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False) as fh:
        json.dump(payload, fh)
        path = fh.name
    env = dict(os.environ, ALLOW_STALE="1")
    env.pop("SELFTEST", None)
    if applied:
        env["APPLIED"] = "1"
    env["LIVE_DUMP"] = dump
    try:
        r = subprocess.run(["node", gate, site, "lines", path], env=env, capture_output=True,
                           text=True, timeout=120)
    finally:
        os.unlink(path)
    out = r.stdout + r.stderr
    complained = IN_LIVE if re.search(rf"- {re.escape(IN_LIVE)}", out) else (
        ALREADY if re.search(rf"- {re.escape(ALREADY)}", out) else None)
    if r.returncode not in (0, 1):
        raise SystemExit(f"the gate refused to run at all ({r.returncode}): {out[:300]}")
    return complained, out


def main():
    problems = []
    for site, dump in DUMPS.items():
        if not os.path.exists(dump):
            raise SystemExit(f"no dump for {site} at {dump} — re-dump first (a test that skips a "
                             f"missing dump prints a green verdict about nothing)")
        d = json.load(open(dump, encoding="utf-8"))
        arrays = {"CAMPAIGN_LINES": d.get("CAMPAIGN_LINES") or [], "MARCH_LINES": d.get("MARCH_LINES") or []}
        ids = [(arr, l["id"]) for arr, rows in arrays.items() for l in rows]
        if not arrays["CAMPAIGN_LINES"]:
            raise SystemExit(f"{site}: the dump has no CAMPAIGN_LINES — nothing was measured")
        print(f"== {site}: {len(ids)} line ids across "
              + ", ".join(f"{a}={len(r)}" for a, r in arrays.items()))
        # every id the dump holds must be recognised as live
        for arr, lid in ids:
            complained, out = verdict(GATE, site, lid, applied=True, dump=dump)
            if complained == IN_LIVE:
                problems.append(f"{site} {lid} ({arr}): an id IN the dump is not recognised as live")
        print(f"   {len(ids)} ids read as live: {len(ids) - len(problems)} ok")
        # and an id no tree has must NOT be read as live
        complained, _ = verdict(GATE, site, "no_such_line_1900", applied=True, dump=dump)
        if complained != IN_LIVE:
            problems.append(f"{site}: a made-up id was NOT refused as absent from the dump")
        else:
            print("   a made-up id is refused as absent")
        # the reverse direction, which is the one that lets a line be written twice
        for arr, lid in [(a, r[0]["id"]) for a, r in arrays.items() if r]:
            complained, _ = verdict(GATE, site, lid, applied=False, dump=dump)
            if complained != ALREADY:
                problems.append(f"{site} {lid} ({arr}): reusing a shipped id was not refused as "
                                f"'{ALREADY}'")
        print(f"   one id per array refused as already shipped")
    if problems:
        print(f"\nTEST FAILED {len(problems)}")
        for p in problems:
            print("  -", p)
        return 1
    print(f"PASS: every line id in either array is in the gate's vocabulary, in both directions")

    # and the test must bite: the same test against a gate with the old, one-array vocabulary must fail
    src = open(GATE, encoding="utf-8").read()
    old = "const LINE_ROWS = [...live.CAMPAIGN_LINES, ...(live.MARCH_LINES || [])];"
    if old not in src:
        raise SystemExit("the LINE_ROWS line this test guards has moved — update the planted bug")
    import tempfile
    bug = src.replace(old, "const LINE_ROWS = [...live.CAMPAIGN_LINES];")
    with tempfile.NamedTemporaryFile("w", suffix=".mjs", delete=False, dir=HERE) as fh:
        fh.write(bug)
        buggy = fh.name
    try:
        complained, _ = verdict(buggy, "ww1", (json.load(open(DUMPS["ww1"], encoding="utf-8"))
                                               ["MARCH_LINES"][0]["id"]), applied=True, dump=DUMPS["ww1"])
    finally:
        os.unlink(buggy)
    if complained != IN_LIVE:
        print(f"PLANTED BUG NOT CAUGHT: the one-array gate let a shipped march id through")
        return 1
    print("PLANTED BUG CAUGHT: a gate reading only CAMPAIGN_LINES FAILs a shipped MARCH_LINES id")
    return 0


if __name__ == "__main__":
    sys.exit(main())
