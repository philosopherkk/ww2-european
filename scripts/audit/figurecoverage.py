#!/usr/bin/env python3
"""figurecoverage.py — how much of the site's number prose can still be re-proved from disk.

WHY THIS EXISTS. `numbercheck.py` does not fetch anything: it proves a figure by matching it against
the quotations stored in the PAYLOAD's own `sources` rows. A shipped `SOURCES` row carries a citation,
a publisher and one note, and NO quotation — so the repository contains nothing to match its own prose
against. The only record that a figure was ever checked is the batch payload of the job that wrote it,
which lives outside version control. This script turns that into a number.

It answers one question per line: is there ANY payload file on this machine with a stored quotation for
this id? It does not judge whether the quotation supports the figure — that is `numbercheck.py`'s job,
once a payload exists. So the coverage figure is a LOWER BOUND: an unbacked line may still have been
checked by a batch whose payload was cleaned up.

    python3 figurecoverage.py                 # both sites, payloads under the audit root
    AUDIT=../.. python3 figurecoverage.py     # where the census and the payloads live
    FIGDIR=line-figures python3 figurecoverage.py

The census it reads is line-figures/figures-<site>.json; rebuild it with line-figures/figures.py.
"""
import collections
import glob
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
# The audit directory is the scope: payloads live in its job subdirectories. An earlier version of
# this measurement globbing the WHOLE temp tree counted 379 files, many from other sessions, which
# inflated coverage. The honest scope is this project's own payloads, and it is printed on every run.
AUDIT = os.path.abspath(os.environ.get("AUDIT", HERE))
FIGDIR = os.path.join(AUDIT, os.environ.get("FIGDIR", "line-figures"))
REPOS = {
    "ww2": "/Users/ka-kinpoon/Project/WW2/ww2-european",
    "ww1": "/Users/ka-kinpoon/Project/WW2/WW1-European",
}
# Quantities only. `identifier` is a unit designation ("XXXVII Armee Korps", "Point 114"), which needs
# a source for the NAME, not a publisher printing a count, and `date` is covered by the window rules.
FIELDS = ("summary", "strength")
WAR_SUFFIX = ("_1914", "_1915", "_1916", "_1917", "_1918")


def quoted_ids():
    """Every id that has at least one stored quotation in any payload on disk, split by site.

    Site is guessed from the filename or an `…_191x` id because older payloads carry no site field. A
    wrong guess moves a line between the two counts, never into or out of the backed set as a whole.
    """
    roots = [AUDIT]
    durable = os.environ.get("FINDINGS")
    if durable:
        roots.append(os.path.abspath(durable))
    files = sorted(set(
        f for root in roots for pat in ("findings*.json", "quotes*.json")
        for f in glob.glob(os.path.join(root, "**", pat), recursive=True)
    ))
    files = [f for f in files if os.path.getsize(f) < 40_000_000]
    have, items = collections.defaultdict(set), 0
    for path in files:
        try:
            doc = json.load(open(path))
        except Exception:
            continue
        rows = doc.get("items") if isinstance(doc, dict) else doc
        if not isinstance(rows, list):
            continue
        for it in rows:
            if not isinstance(it, dict) or not isinstance(it.get("id"), str):
                continue
            srcs = [s for key in ("sources", "wp_sources")
                    for s in (it.get(key) if isinstance(it.get(key), list) else [])
                    if isinstance(s, dict)]
            quoted = any(s.get("quote") or s.get("quotation") for s in srcs)
            if not (quoted or it.get("evidence") or it.get("quotation")):
                continue
            ident = it["id"]
            site = "ww1" if ("ww1" in path or ident.endswith(WAR_SUFFIX)) else "ww2"
            have[site].add(ident)
            items += 1
    return have, files, items


def main():
    have, files, items = quoted_ids()
    print("payload/quote files scanned: %d | items carrying a stored quotation: %d" % (len(files), items))
    print("census read from %s" % FIGDIR)
    total_un = total_sent = 0
    for site in ("ww2", "ww1"):
        census_path = os.path.join(FIGDIR, "figures-%s.json" % site)
        dump_path = os.path.join(REPOS[site], "scripts", "audit", "%s.json" % site)
        for label, p in (("census", census_path), ("live dump", dump_path)):
            if not os.path.exists(p):
                raise SystemExit(
                    "REFUSE: no %s at %s\n"
                    "  census: python3 %s/figures.py\n"
                    "  dump:   node %s/dump.mjs %s --repo=%s --out=%s"
                    % (label, p, FIGDIR, HERE, site, REPOS[site], dump_path))
        census = json.load(open(census_path))["items"]
        live = json.load(open(dump_path))
        src = live.get("__SOURCE_REPO")
        if src and os.path.abspath(src) != os.path.abspath(REPOS[site]):
            raise SystemExit("REFUSE: %s names %s, not %s" % (dump_path, src, REPOS[site]))
        lines = [c["id"] for c in live["CAMPAIGN_LINES"] + live.get("MARCH_LINES", [])]

        q = [r for r in census if r.get("class") == "quantity" and r.get("field") in FIELDS
             and r.get("line") in lines]
        un = [r for r in q if r["line"] not in have[site]]
        sent = {(r["line"], r.get("sentence")) for r in un}
        total_un += len(un)
        total_sent += len(sent)
        backed = [i for i in lines if i in have[site]]
        print("\n%s: %d lines | %d have a quotation on file | %d quantities in line prose"
              % (site, len(lines), len(backed), len(q)))
        print("    NOT provable from disk: %d figures in %d sentences, across %d lines"
              % (len(un), len(sent), len({r["line"] for r in un})))
        top = collections.Counter(r["line"] for r in un).most_common(8)
        print("    heaviest: " + ", ".join("%s (%d)" % t for t in top))
    print("\nTOTAL: %d quantity figures in %d sentences of shipped line prose have nothing on disk "
          "that could prove them." % (total_un, total_sent))
    print("Coverage is a LOWER BOUND: a line with no payload on disk may still have been checked by a "
          "batch whose payload was cleaned up.")


if __name__ == "__main__":
    main()
