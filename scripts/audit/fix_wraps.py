#!/usr/bin/env python3
"""Repair missing whitespace at string line-wrap boundaries in the data files.

Long values in lib/data/*.ts are written as several single-quoted literals joined
by '+' across lines. If the first literal does not end with whitespace and the next
does not start with it, the parts are glued together at runtime ("the islands
wereGerman"). This script inserts one space before the closing quote of the first
literal, which is the same convention the rest of the corpus uses.

Dry run by default; --write to save. Only whitespace is added, never text.
"""
import glob
import re
import sys

REPOS = {
    "WW2": "/Users/ka-kinpoon/Project/WW2/ww2-european",
    "WW1": "/Users/ka-kinpoon/Project/WW2/WW1-European",
}
CONT_START = re.compile(r"^\s*'")


def main():
    write = "--write" in sys.argv
    total = 0
    for site, repo in REPOS.items():
        for path in sorted(glob.glob(repo + "/lib/data/*.ts")):
            src = open(path, encoding="utf-8").read()
            lines = src.split("\n")
            fixes = []
            for i, line in enumerate(lines):
                r = line.rstrip()
                if not r.endswith("' +"):
                    continue
                if i + 1 >= len(lines):
                    continue
                nxt = lines[i + 1]
                m = CONT_START.match(nxt)
                if not m:
                    continue
                last = r[-4]              # char before the closing quote
                first = nxt[m.end():100]  # start of the next literal
                if not first or last.isspace() or first[0].isspace():
                    continue
                q = len(r) - 3            # index of the closing quote
                fixes.append((i, q, last, first[:24]))
            if not fixes:
                continue
            for i, q, last, first in sorted(fixes, reverse=True):
                lines[i] = lines[i][:q] + " " + lines[i][q:]
                print(f"  {site} {path.split('/')[-1]}:{i+1} ...{last!r} || {first[:22]!r}")
            total += len(fixes)
            if write:
                open(path, "w", encoding="utf-8").write("\n".join(lines))
    print(f"\njoins missing whitespace: {total}")
    if not write:
        print("dry run: pass --write to save")


if __name__ == "__main__":
    main()
