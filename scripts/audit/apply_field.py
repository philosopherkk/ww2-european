#!/usr/bin/env python3
"""Replace whole reading-level field values (levels.<lvl>.<part> / bio.<lvl>) in the
WW1 / WW2 data files, tolerating the source's multi-line `' +` string wrapping.

items.json = [ {"site":"WW1","id":"...","field":"levels.primary.what","cap":45,
                "old":"<full value as the bundle dump shows it>",
                "new":"<replacement>","cut":"..."} , ... ]

Dry run by default; --write to save. Fails loudly (writing nothing) if any item's
old value does not match the file, if the replacement breaks a word cap, or if the
replacement contains a straight apostrophe or an HTML entity.
"""
import glob
import json
import os
import re
import sys

REPOS = {
    "WW2": "/Users/ka-kinpoon/Project/WW2/ww2-european",
    "WW1": "/Users/ka-kinpoon/Project/WW2/WW1-European",
}
CAPS = {"primary": 45, "secondary": 97, "university": 143}
WORDS = re.compile(r"[A-Za-zÀ-ž0-9’'\-]+")
ENTITY = re.compile(r"&[A-Za-z#0-9]{2,8};")


def words(s):
    return len(WORDS.findall(s))


def find_object_block(src, obj_id):
    m = re.search(r"id:\s*'%s'" % re.escape(obj_id), src)
    if not m:
        return None
    start = src.rfind("{", 0, m.start())
    depth, i, in_str = 0, start, None
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


def find_key(src, field, start, end):
    """Locate `field:` between start and end (dotted paths are walked in order)."""
    p = start
    for part in field.split("."):
        m = re.compile(r"\b%s:" % re.escape(part)).search(src, p, end)
        if not m:
            return None
        p = m.end()
    return m


def read_string_expr(src, p):
    """From position p, read a string literal expression: literals joined by '+',
    possibly spread over lines. Returns (value, span_end)."""
    i = p
    parts = []
    while True:
        while i < len(src) and src[i] in " \t\r\n":
            i += 1
        if i >= len(src) or src[i] not in "'\"":
            return None, p
        q = src[i]
        j = i + 1
        buf = []
        while j < len(src):
            if src[j] == "\\":
                buf.append(src[j : j + 2])
                j += 2
                continue
            if src[j] == q:
                break
            buf.append(src[j])
            j += 1
        if j >= len(src):
            return None, p
        parts.append("".join(buf))
        i = j + 1
        k = i
        while k < len(src) and src[k] in " \t\r\n":
            k += 1
        if k < len(src) and src[k] == "+":
            i = k + 1
            continue
        return "".join(parts).encode().decode("unicode_escape") if "\\" in "".join(parts) else "".join(parts), i


def wrap(text, first_prefix, cont_indent, width=104):
    """Re-emit a value as a wrapped sequence of single-quoted literals."""
    budget = width - cont_indent
    words = text.split(" ")
    chunks, cur = [], ""
    for w in words:
        cand = w if not cur else cur + " " + w
        if len(cand) > budget and cur:
            chunks.append(cur)
            cur = w
        else:
            cur = cand
    if cur:
        chunks.append(cur)
    # keep the separating space inside the closing quote, the convention used
    # across the corpus, so the literals still read as sentences at runtime
    out = "'%s'" % chunks[0]
    for c in chunks[1:]:
        prev = len(out) - 1
        out = out[:prev] + " '" + " +\n" + " " * cont_indent + "'%s'" % c
    return out


def main():
    path = sys.argv[1]
    write = "--write" in sys.argv
    items = json.load(open(path, encoding="utf-8"))
    files = {}
    failures, applied = [], []

    for it in items:
        site, fid, field = it["site"], it["id"], it["field"]
        if site not in files:
            files[site] = {
                f: open(f, encoding="utf-8").read()
                for f in sorted(glob.glob(os.path.join(REPOS[site], "lib/data/*.ts")))
            }
        pool = files[site]
        hit = None
        for f, src in pool.items():
            blk = find_object_block(src, fid)
            if blk:
                hit = (f, src, blk)
                break
        if not hit:
            failures.append((fid, field, "id not found"))
            continue
        f, src, blk = hit

        # sanity checks on the replacement text itself
        new = it["new"]
        if "'" in new:
            failures.append((fid, field, "replacement contains a straight apostrophe"))
            continue
        if ENTITY.search(new):
            failures.append((fid, field, "replacement contains an HTML entity"))
            continue
        lvl = field.split(".")[1]
        cap = it.get("cap") or CAPS.get(lvl)
        wc = words(new)
        if cap and wc > cap:
            failures.append((fid, field, f"replacement is {wc}w, over cap {cap}"))
            continue

        key = find_key(src, field, blk[0], blk[1])
        if not key:
            failures.append((fid, field, "field path not found in object"))
            continue
        val, span_end = read_string_expr(src, key.end())
        if val is None:
            failures.append((fid, field, "value is not a string expression"))
            continue
        if val != it["old"]:
            failures.append((fid, field, "current value differs from `old`"))
            continue

        line_start = src.rfind("\n", 0, key.start()) + 1
        key_indent = key.start() - line_start
        wrapped = wrap(new, None, key_indent + 2)
        new_src = src[: key.end()] + " " + wrapped + src[span_end:]
        pool[f] = new_src
        applied.append((site, fid, field, os.path.basename(f), f"{wc}w/{cap}"))

    print(f"{len(applied)} fields replaced, {len(failures)} failures")
    for a in applied:
        print("  OK  %-4s %-38s %-30s %-18s %s" % a)
    for fl in failures:
        print("  FAIL", fl)
    if failures:
        print("\nNOTHING WRITTEN")
        return 1
    if not write:
        print("\ndry run: pass --write to save")
        return 0
    for site, pool in files.items():
        for f, src in pool.items():
            if open(f, encoding="utf-8").read() != src:
                open(f, "w", encoding="utf-8").write(src)
                print("wrote", f)
    return 0


if __name__ == "__main__":
    sys.exit(main())
