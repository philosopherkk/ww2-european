#!/usr/bin/env python3
"""Apply adjudicated content fixes to the WW2 / WW1 data files.

edits.json = [ {"site":"WW2","id":"kristallnacht","field":"note",
                "old":"some 30,000 men","new":"about 30,000 men","why":"USHMM + IWM"} , ... ]

Each edit is anchored: we locate the object whose `id:` matches, restrict the
search to that object's text block, and require `old` to occur exactly once.
Nothing is written unless every edit in the batch anchors cleanly (unless --force).
Word counts are reported after the patch so reading-level caps are not broken.
"""
import json, sys, re, glob, os

REPOS = {
    "WW2": "/Users/ka-kinpoon/Project/WW2/ww2-european",
    "WW1": "/Users/ka-kinpoon/Project/WW2/WW1-European",
}
CAPS = {"primary": 45, "secondary": 97, "university": 143}


def words(s):
    return len(re.findall(r"[A-Za-zÀ-ž0-9’'\-]+", s))


def find_object_block(src, obj_id):
    """Return (start, end) character span of the object literal declaring `id: '<obj_id>'`."""
    m = re.search(r"id:\s*'%s'" % re.escape(obj_id), src)
    if not m:
        return None
    start = src.rfind("{", 0, m.start())
    # end = the closing brace of the same object: scan braces from start
    depth = 0
    i = start
    in_str = None
    while i < len(src):
        c = src[i]
        if in_str:
            if c == "\\":
                i += 2
                continue
            if c == in_str:
                in_str = None
        elif c in "'\"":
            in_str = c
        elif c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return (start, i + 1)
        i += 1
    return (start, len(src))


def field_after(src, idx, field):
    """Return (start,end) of the string value for `field:` occurring at or after idx."""
    m = re.search(r"\b%s:\s*" % re.escape(field), src[idx:])
    if not m:
        return None
    p = idx + m.end()
    if src[p] not in "'\"":
        return None
    q = src[p]
    i = p + 1
    while i < len(src):
        if src[i] == "\\":
            i += 2
            continue
        if src[i] == q:
            return (p + 1, i)
        i += 1
    return None


def load_files(site):
    out = {}
    for f in sorted(glob.glob(os.path.join(REPOS[site], "lib/data/*.ts"))):
        out[f] = open(f, encoding="utf-8").read()
    return out


def main():
    edits_path = sys.argv[1]
    write = "--write" in sys.argv
    edits = json.load(open(edits_path, encoding="utf-8"))
    cache = {}
    failures = []
    report = []
    for e in edits:
        site = e["site"]
        if site not in cache:
            cache[site] = load_files(site)
        files = cache[site]
        hit = None
        for path, src in files.items():
            blk = find_object_block(src, e["id"])
            if blk and e.get("old") in src[blk[0]:blk[1]]:
                hit = (path, src, blk)
                break
            if blk:
                hit = (path, src, blk)  # id found, old text missing -> report later
                break
        if not hit:
            failures.append((site, e["id"], e.get("field"), "id not found"))
            continue
        path, src, blk = hit
        block = src[blk[0]:blk[1]]
        old = e.get("old")
        n = block.count(old)
        if n != 1:
            failures.append((site, e["id"], e.get("field"), f"anchor occurs {n}x in object ({os.path.basename(path)})"))
            continue
        new_block = block.replace(old, e["new"])
        # post-check word caps on the touched field if we can locate it
        note = ""
        if e.get("field"):
            fr = field_after(new_block, 0, e["field"])
            if fr:
                val = new_block[fr[0]:fr[1]]
                lvl = e["field"].split(".")[-3] if e["field"].count(".") >= 2 else e["field"].split(".")[0]
                cap = CAPS.get(lvl)
                wc = words(val)
                note = f"{wc}w" + (f"/{cap}" if cap else "")
                if cap and wc > cap:
                    note += " OVER"
            else:
                # levels.note style: try the last dotted component
                fr2 = field_after(new_block, 0, e["field"].split(".")[-1])
                if fr2:
                    note = f"{words(new_block[fr2[0]:fr2[1]])}w"
        files[path] = src[:blk[0]] + new_block + src[blk[1]:]
        report.append((site, e["id"], e.get("field"), os.path.basename(path), note, e.get("why", "")))

    print(f"{len(report)} edits anchored, {len(failures)} failures")
    for r in report:
        print("  OK  %-4s %-38s %-28s %-22s %-12s %s" % r)
    for f in failures:
        print("  FAIL", f)
    if failures and not "--force" in sys.argv:
        print("\nNOTHING WRITTEN (fix the failures, or pass --force to apply the good ones)")
        return 1
    if not write:
        print("\ndry run: pass --write to save")
        return 0
    for site, files in cache.items():
        for path, src in files.items():
            cur = open(path, encoding="utf-8").read()
            if cur != src:
                open(path, "w", encoding="utf-8").write(src)
                print("wrote", path)
    return 0


if __name__ == "__main__":
    sys.exit(main())
