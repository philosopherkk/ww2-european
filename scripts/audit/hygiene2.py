import json, re, os, subprocess, sys

AUD = "/private/var/folders/4g/0dmwh71539x3w6__bx623p4c0000gn/T/opencode/audit"
REPOS = {"ww2": "/Users/ka-kinpoon/Project/WW2/ww2-european",
         "ww1": "/Users/ka-kinpoon/Project/WW2/WW1-European"}
WORDS = re.compile(r"[A-Za-zÀ-ž0-9’'\-]+")
CAPS = {"primary": 45, "secondary": 97, "university": 143}

def dump(site):
    entry = "entry-ww2.ts" if site == "ww2" else "entry-ww1.ts"
    out = f"/tmp/hyg_{site}.mjs"
    subprocess.run(["npx", "esbuild", entry, "--bundle", "--platform=node", "--format=esm",
                    "--outfile=" + out, "--log-level=error"], cwd=AUD, check=True)
    return json.loads(subprocess.run(["node", out], capture_output=True, text=True, check=True).stdout)

def walk(node, path=""):
    if isinstance(node, dict):
        for k, v in node.items():
            yield from walk(v, f"{path}.{k}")
    elif isinstance(node, list):
        for i, v in enumerate(node):
            yield from walk(v, f"{path}[{i}]")
    elif isinstance(node, str):
        yield path, node

for site in ("ww2", "ww1"):
    d = dump(site)
    print(f"===== {site}")
    issues = {"doubled": [], "apostrophe": [], "entity": [], "parens": [], "jammed": [], "overcap": []}
    for card in (d.get("EVENTS") or []) + (d.get("FIGURES") or []) + (d.get("CAMPAIGN_LINES") or []) + (d.get("TURNING_POINTS") or []):
        cid = card.get("id", "?")
        for path, s in walk(card):
            # length caps are per part - use lengths.py, which knows the schema
            for m in re.finditer(r"\b(\w{2,})\s+\1\b", s, re.I):
                issues["doubled"].append((cid, path, m.group(0)))
            if re.search(r"[A-Za-z]'[A-Za-z]", s) and not re.search(r"\b(rock'n'roll)\b", s):
                issues["apostrophe"].append((cid, path, s[max(0, s.find("'") - 30):s.find("'") + 30]))
            for m in re.finditer(r"&[a-zA-Z]{2,6};|&#\d+;", s):
                issues["entity"].append((cid, path, m.group(0)))
            if s.count("(") != s.count(")") or s.count("[") != s.count("]"):
                issues["parens"].append((cid, path))
    for k, v in issues.items():
        print(f"  {k}: {len(v)}" + ("" if not v else "  " + "; ".join(f"{a} {b} {c}" for a, b, c in v[:6])))
