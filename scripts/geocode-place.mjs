// Geocodes place names and prints [lat, lng] for each, caching results, so that the
// waypoints in lib/data/campaigns.ts can be checked instead of written from memory.
// Wikipedia article coordinates are tried first; OpenStreetMap Nominatim is the
// fallback, and needs a country or it answers "Bir Hakeim" with the Paris metro stop.
//
//   node geocode.mjs "Sidi Barrani | Egypt" "Bardia | Libya"
//   node geocode.mjs --file places.txt
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const CACHE = new URL('./geo-cache.json', import.meta.url).pathname;
const cache = existsSync(CACHE) ? JSON.parse(readFileSync(CACHE, 'utf8')) : {};
const UA = 'ww2-european-educational/1.0 (checking campaign waypoint coordinates)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function wiki(titles) {
  const u = new URL('https://en.wikipedia.org/w/api.php');
  u.search = new URLSearchParams({
    action: 'query', format: 'json', titles: titles.join('|'),
    prop: 'coordinates', colimit: '5', redirects: '1',
  });
  for (let attempt = 0; ; attempt++) {
    const r = await fetch(u, { headers: { 'user-agent': UA } });
    if (r.status === 429 && attempt < 4) {
      const w = 3000 * 2 ** attempt;
      console.error(`  rate limited, ${w / 1000}s`);
      await sleep(w);
      continue;
    }
    if (!r.ok) throw new Error('wiki ' + r.status);
    const j = await r.json();
    const found = {};
    for (const p of Object.values(j.query?.pages ?? {})) {
      const c = p.coordinates?.[0];
      if (c) found[p.title] = { lat: c.lat, lon: c.lon, via: 'wiki:' + p.title };
    }
    return found;
  }
}

async function nominatim(name, cc) {
  const u = new URL('https://nominatim.openstreetmap.org/search');
  u.search = new URLSearchParams({
    q: name, format: 'jsonv2', limit: '5', countrycodes: cc, addressdetails: '0',
  });
  const r = await fetch(u, { headers: { 'user-agent': UA } });
  if (!r.ok) throw new Error('nominatim ' + r.status);
  const j = await r.json();
  if (!j.length) return null;
  const want = name.toLowerCase().split(/[,|]/)[0].trim();
  const hit = j.find((h) => h.display_name.toLowerCase().includes(want)) ?? j[0];
  return { lat: +hit.lat, lon: +hit.lon, via: `osm:${hit.type} ${hit.display_name.slice(0, 55)}` };
}

const arg = process.argv.slice(2);
const lines = arg[0] === '--file'
  ? readFileSync(arg[1], 'utf8').split('\n').map((s) => s.trim()).filter(Boolean)
  : arg;
const places = lines.map((s) => {
  const [name, cc] = s.split('|').map((x) => (x ?? '').trim());
  return { name, cc: cc ?? '' };
});

const results = {};
const need = [];
for (const p of places) {
  if (cache[p.name]) results[p.name] = cache[p.name];
  else need.push(p);
}

for (let i = 0; i < need.length; i += 20) {
  const batch = need.slice(i, i + 20);
  let found = {};
  try { found = await wiki(batch.map((p) => p.name)); } catch (e) { console.error('  ' + e.message); }
  for (const p of batch) {
    let hit = found[p.name] ?? null;
    if (!hit) {
      await sleep(1300);
      try { hit = await nominatim(p.name, p.cc); } catch (e) { console.error(`  ${p.name}: ${e.message}`); }
    }
    if (hit) {
      cache[p.name] = hit;
      results[p.name] = hit;
    }
  }
  writeFileSync(CACHE, JSON.stringify(cache, null, 1));
  await sleep(500);
}

for (const p of places) {
  const r = results[p.name];
  console.log(r
    ? `${p.name}\t[${r.lat.toFixed(2)}, ${r.lon.toFixed(2)}]\t${r.via}`
    : `${p.name}\tNOT FOUND`);
}
