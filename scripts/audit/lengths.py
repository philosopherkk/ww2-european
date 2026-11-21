#!/usr/bin/env python3
"""Fresh over-length report against the reading-level caps."""
import json, re, sys, os

CAPS = {"primary": 45, "secondary": 97, "university": 143}
W = re.compile(r"[A-Za-zÀ-ž0-9’'\-]+")

def wc(s):
    return len(W.findall(s))

def walk(dump, tag):
    rows = []
    for e in dump["EVENTS"]:
        for lvl, parts in (e.get("levels") or {}).items():
            if lvl not in CAPS:
                continue
            for k in ("cause", "what", "consequence"):
                v = (parts or {}).get(k)
                if v and wc(v) > CAPS[lvl]:
                    rows.append((tag, e["id"], f"levels.{lvl}.{k}", wc(v), CAPS[lvl]))
    for f in dump["FIGURES"]:
        for lvl in CAPS:
            v = (f.get("bio") or {}).get(lvl)
            if v and wc(v) > CAPS[lvl]:
                rows.append((tag, f["id"], f"bio.{lvl}", wc(v), CAPS[lvl]))
    return rows

tot = 0
for tag in (t for t in ("ww1", "ww2") if os.path.exists(f"{t}.json")):
    dump = json.load(open(f"{tag}.json"))
    rows = sorted(walk(dump, tag), key=lambda r: -(r[3] - r[4]))
    print(f"\n===== {tag}: {len(rows)} fields over the cap =====")
    for r in rows:
        print(f"  {r[2]:<28} {r[1]:<38} {r[3]:>4}w / cap {r[4]}")
    tot += len(rows)
    # also per-level totals
    from collections import Counter
    c = Counter(r[2].split('.')[1] for r in rows)
    print("  by level:", dict(c))
print(f"\ntotal over-length fields across both sites: {tot}")
