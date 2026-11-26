#!/usr/bin/env python3
"""test_stylecheck_note.py — prove stylecheck.py reads a card's note, not only a line's fields.

Why this test exists: I repaired a welded word in a WW1 card note and added a disclosure sentence to
that note, then reached for stylecheck.py to check the new sentence for workflow vocabulary — and the
gate never looked at `note` at all. A gate that prints "0 style problems" about text it did not read is
the same class of bug as the length filter that skipped missing dumps and printed "0 over", so the
widening is only believable with a planted failure in it.

Two fixtures:

  clean   my real disclosure clause and the three repaired sentences -> exit 0, every item ok
  planted a banned workflow word (`the dump`) in a NOTE and nowhere else -> exit 1, naming the note

  python3 test_stylecheck_note.py
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
GATE = os.path.join(HERE, "stylecheck.py")

DISCLOSURE = (
    " In the scanned copy of this book the space between \u201chills\u201d and \u201clying\u201d is lost "
    "where its printed page broke the line; that space is restored here and nothing else in the "
    "quotation is altered."
)

# The live shipped text is only needed for the median line-length report, so the fixture dump is small
# but real in shape: EVENTS and CAMPAIGN_LINES with the keys the gate touches.
LIVE = {
    "EVENTS": [{"id": "serbia_drina_crossing_1914"}, {"id": "gazala_alamein_1942"}],
    # One line with a summary AND a strength, so the median/max report path runs like it does on a real
    # tree; an earlier fixture had neither and the gate died inside statistics.median().
    "CAMPAIGN_LINES": [{"id": "gazala_alamein_1942",
                        "summary": "Rommel drove the corridor through the minefields south of Gazala.",
                        "strength": "Two panzer corps against an Eighth Army spread along the box line."}],
    "MARCH_LINES": [],
}


def payload(with_planted):
    note = DISCLOSURE if not with_planted else DISCLOSURE + " Checked against the dump before shipping."
    return {"items": [
        {"id": "serbia_drina_crossing_1914", "summary": "", "strength": "", "note": note,
         "sources": [{"usedFor": "The Times history of the war, the account of the Drina crossings."}]},
        {"id": "gazala_alamein_1942",
         "summary": "He drove a corridor through the minefields south of Gazala, past the Knightsbridge "
                    "box, and reached the coast road.",
         "strength": "",
         "levels": {"primary": {"cause": "The minefields were the defence.",
                                "what": "The armour went through south of Gazala.",
                                "consequence": "Tobruk fell."}},
         "note": "",
         "sources": [{"usedFor": "The official account of the Gazala minefields."}]},
    ]}


def run(with_planted):
    """Run the gate in a throwaway directory whose layout is the layout the gate expects."""
    # The gate resolves the dumps beside ITSELF and the payload one level UP (HERE / ROOT), so the
    # fixture has to be two deep. Writing the payload next to the gate is what made the first run of
    # this test read /private/var/folders/.../T/findings-ww2.json — the temp dir's parent — and crash.
    root = tempfile.mkdtemp(prefix="stylecheck-note-test-")
    d = os.path.join(root, "worker")
    os.makedirs(d)
    try:
        shutil.copy(GATE, os.path.join(d, "stylecheck.py"))
        for site in ("ww1", "ww2"):
            json.dump(LIVE, open(os.path.join(d, "%s.json" % site), "w", encoding="utf-8"),
                      ensure_ascii=False)
            json.dump(payload(with_planted),
                      open(os.path.join(root, "findings-%s.json" % site), "w", encoding="utf-8"),
                      ensure_ascii=False)
        env = {k: v for k, v in os.environ.items() if k != "SELFTEST"}
        r = subprocess.run([sys.executable, os.path.join(d, "stylecheck.py")],
                           capture_output=True, text=True, env=env, cwd=d, timeout=120)
        return r
    finally:
        shutil.rmtree(root, ignore_errors=True)


def main():
    if not os.path.exists(GATE):
        raise SystemExit("FAIL: no stylecheck.py beside this test in %s" % HERE)
    bad = 0

    clean = run(False)
    ok = clean.returncode == 0 and "0 style problems" in clean.stdout
    print("  %s clean reader copy passes (rc=%d)" % ("ok  " if ok else "FAIL", clean.returncode))
    bad += 0 if ok else 1
    if not ok:
        print("     " + (clean.stdout + clean.stderr).replace("\n", "\n     ")[:900])

    planted = run(True)
    # The word appears ONLY in a note. If the gate does not report it, the widening is not working and
    # a note can carry workflow vocabulary out to a phone screen.
    ok = (planted.returncode == 1
          and "uses workflow vocabulary" in planted.stdout
          and "note" in planted.stdout)
    print("  %s a banned word in a NOTE only is caught (rc=%d)"
          % ("ok  " if ok else "FAIL", planted.returncode))
    bad += 0 if ok else 1
    if not ok:
        print("     the gate read the item but not its note:\n     "
              + planted.stdout.replace("\n", "\n     ")[:900])

    print("SELFTEST %s" % ("passed: notes and reading levels are reader copy and get read"
                           if not bad else "FAILED (%d)" % bad))
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
