/**
 * Who held each territory outside the Stanford border layers, on each snapshot date.
 *
 * public/data/world/world.json draws MODERN outlines (Natural Earth), one feature per
 * `key`. Each key has a dated timeline here; the colour is the side that held most of
 * the land and the capital on the date, which is one call per territory and can be
 * argued. Whole countries are drawn with a caveat, as Stanford draws Greece: China is
 * coloured Allied although Japan held its north-east and coast, and New Guinea is
 * "contested" rather than split. The caveats are listed in WORLD_NOTES and in
 * WORLD_KEY_NOTES.
 *
 * Conventions that match status.ts: governments set up under Japanese sponsorship
 * (Manchukuo, the Burmese State, the Second Philippine Republic, Thailand from its
 * December 1941 alliance) are `axis`, as Croatia and Slovakia are; Vichy territory is
 * `axis` from 10 July 1940 until it changed sides. Before 3 September 1939 nothing is at
 * war except China and Japan, so everything else is `at_peace`.
 *
 * Territories that belong to a country Stanford also draws (Soviet Union, Norway,
 * Portugal, Spain) delegate to statusFor so that the two layers cannot disagree.
 */
import { statusFor, type TerritoryStatus } from './status';

type Step = [date: string, status: TerritoryStatus];
type Timeline = (date: string) => TerritoryStatus;

const P: TerritoryStatus = 'at_peace';
const X: TerritoryStatus = 'axis';
const ITAL: TerritoryStatus = 'italian_occupied';
const JAP: TerritoryStatus = 'japanese_occupied';
const A: TerritoryStatus = 'ally';
const N: TerritoryStatus = 'neutral';
const C: TerritoryStatus = 'contested';
const SOV: TerritoryStatus = 'soviet';
const OCC: TerritoryStatus = 'allied_occupied';

/** Before the first step a territory is at peace. */
const tl =
  (...steps: Step[]): Timeline =>
  (date) => {
    let s: TerritoryStatus = P;
    for (const [d, st] of steps) if (date >= d) s = st;
    return s;
  };

const WAR = '1939-09-03'; // Britain and France declare war on Germany

const ALLIED_AT_WAR = tl([WAR, A]);
const NEUTRAL = tl([WAR, N]);
const JAPANESE_SINCE_BEFORE = tl(['1938-01-01', JAP]);
const ALLY_FROM_1938 = tl(['1938-01-01', A]);
const joinsAllies = (date: string): Timeline => tl([WAR, N], [date, A]);
const vichy = (back: string): Timeline => tl([WAR, A], ['1940-07-10', X], [back, A]);

const TIMELINES: Record<string, Timeline> = {};
const assign = (keys: string, t: Timeline) => {
  for (const k of keys.split(' ')) TIMELINES[k] = t;
};

/* ---- British Empire, Commonwealth, mandates and protectorates: at war from 3 September 1939 */
assign(
  'AUS NZL IND PAK BGD LKA NPL PSX ISR JOR KWT ARE BHR QAT MDV NAM SDN SDS KEN UGA TZA ZMB ZWE MWI BWA LSO SWZ ' +
    'GHA NGA SLE GMB SYC MUS FJI TON TUV VUT WSM COK NIU GUY BLZ JAM BHS BRB TTO GRD VCT LCA DMA ATG KNA ' +
    'MSR AIA VGB CYM TCA BMU FLK SGS SHN PCN IOT',
  ALLIED_AT_WAR
);
TIMELINES.CAN = tl(['1939-09-10', A]);
TIMELINES.ZAF = tl(['1939-09-06', A]);

/* ---- Japanese Asia and the Pacific
 * The four timelines that end in 1945 use the dates their sources print:
 * Manchukuo  "Soviet invasion 9 August 1945 · Dissolution 20 August 1945", succeeded by the
 *            "Soviet occupation of Manchuria" (Manchukuo article infobox)
 * northern Korea  Soviet troops entered Pyongyang on 24 August 1945 and "secured most major
 *            cities in the north by 24 August" (Division of Korea)
 * Japan      the instrument of surrender was signed aboard USS Missouri and "took effect at
 *            09:25 JST on 2 September 1945" (Japanese Instrument of Surrender)
 * southern Korea  "United States troops stationed 8 September 1945"; USAMGIK governed the
 *            south "from 9 September 1945" (USAMGIK)
 * Southern Sakhalin (Karafuto, 11-25 August 1945) and the Kuril Islands (18 August -
 * 2 September 1945) fell to the USSR in the same fortnight but cannot be drawn: world.json
 * is built from modern outlines, so both sit inside Russia, which this layer does not draw.
 */
TIMELINES.JPN = tl(['1938-01-01', X], ['1945-09-02', OCC]);
TIMELINES.MCK = tl(['1938-01-01', X], ['1945-08-20', SOV]);
TIMELINES.PRK = tl(['1938-01-01', JAP], ['1945-08-24', SOV]);
TIMELINES.KOR = tl(['1938-01-01', JAP], ['1945-09-08', OCC]);
TIMELINES.TWN = JAPANESE_SINCE_BEFORE;
TIMELINES.CHN = ALLY_FROM_1938;
TIMELINES.HKG = tl([WAR, A], ['1941-12-25', JAP]);
assign('MYS BRN', tl([WAR, A], ['1941-12-08', C], ['1942-02-15', JAP]));
TIMELINES.SGP = tl([WAR, A], ['1942-02-15', JAP]);
TIMELINES.MMR = tl(
  [WAR, A],
  ['1942-03-08', C],
  ['1942-05-20', JAP],
  ['1943-08-01', X],
  ['1945-03-20', C],
  ['1945-05-03', A]
);
TIMELINES.PNG = tl([WAR, A], ['1942-01-23', C]);
TIMELINES.SLB = tl([WAR, A], ['1942-05-03', C]);
TIMELINES.KIR = tl([WAR, A], ['1941-12-10', JAP], ['1943-11-23', A]);
TIMELINES.NRU = tl([WAR, A], ['1942-08-26', JAP]);
TIMELINES.MHL = tl(['1938-01-01', JAP], ['1944-01-31', C]);
TIMELINES.PLW = tl(['1938-01-01', JAP], ['1944-09-15', C]);
TIMELINES.FSM = JAPANESE_SINCE_BEFORE;
TIMELINES.MNP = tl(['1938-01-01', JAP], ['1944-08-01', A]);
TIMELINES.GUM = tl([WAR, N], ['1941-12-08', A], ['1941-12-10', JAP], ['1944-08-10', A]);
TIMELINES.PHL = tl(
  [WAR, N],
  ['1941-12-08', A],
  ['1942-04-09', C],
  ['1942-05-10', JAP],
  ['1943-10-14', X],
  ['1944-10-20', C],
  ['1945-07-05', A]
);
TIMELINES.IDN = tl([WAR, N], ['1940-05-10', A], ['1942-01-11', C], ['1942-03-09', JAP]);
TIMELINES.TLS = tl([WAR, N], ['1942-02-20', JAP]);
TIMELINES.THA = tl([WAR, N], ['1941-12-21', X]);
TIMELINES.MNG = NEUTRAL;
assign('AFG BTN YEM OMN', NEUTRAL);

/* ---- French empire */
assign('MAR DZA', vichy('1942-11-11'));
TIMELINES.TUN = tl([WAR, A], ['1940-07-10', X], ['1942-11-09', C], ['1943-05-13', A]);
assign('SYR LBN', vichy('1941-07-14'));
TIMELINES.DJI = vichy('1942-12-28');
assign('MDG COM FRA_MYT', vichy('1942-11-05'));
assign('SEN MRT MLI GIN CIV BFA NER BEN TGO', vichy('1942-11-23'));
TIMELINES.FRA_REU = vichy('1942-11-28');
TIMELINES.FRA_GUF = vichy('1943-03-16');
assign('FRA_ANT BLM MAF', vichy('1943-07-14'));
TIMELINES.SPM = vichy('1941-12-24');
TIMELINES.WLF = vichy('1942-05-27');
assign('VNM LAO KHM', tl([WAR, A], ['1940-07-10', X]));
assign('TCD CAF COG GAB CMR NCL PYF', ALLIED_AT_WAR); // Free French from August-September 1940

/* ---- Italian empire */
TIMELINES.LBY = tl(['1938-01-01', ITAL], ['1943-01-23', A]);
TIMELINES.ETH = tl(['1938-01-01', ITAL], ['1941-04-06', A]);
TIMELINES.ERI = tl(['1938-01-01', ITAL], ['1941-04-01', A]);
TIMELINES.SOM = tl(['1938-01-01', ITAL], ['1941-02-25', A]);
TIMELINES.SOL = tl([WAR, A], ['1940-08-19', ITAL], ['1941-03-16', A]);

/* ---- Middle East and Africa, neutral until they joined */
// The compilations of 1945 declarations that this list follows give 26 February; the
// English Wikipedia article on Egypt in the war prints 24 February, the day Ahmed Maher
// was assassinated after the vote. No second publisher for either day has been found
// (audit/handoff-japanese-lines-22nov.md), and the map cannot tell them apart: the world
// layer colours by month, so Egypt is Allied from February 1945 on either date.
TIMELINES.EGY = joinsAllies('1945-02-26');
TIMELINES.IRQ = joinsAllies('1941-06-01');
TIMELINES.IRN = joinsAllies('1941-08-25');
TIMELINES.SAU = joinsAllies('1945-03-01');
TIMELINES.LBR = joinsAllies('1944-01-27');
assign('COD RWA BDI', joinsAllies('1940-05-10')); // Belgian Congo and mandates
assign('AGO MOZ CPV GNB STP MAC GNQ SAH', NEUTRAL); // Portuguese and Spanish colonies

/* ---- The Americas */
assign('USA PRI VIR ASM', joinsAllies('1941-12-08'));
assign('CUB DOM HTI CRI SLV GTM HND NIC PAN', joinsAllies('1941-12-12'));
TIMELINES.MEX = joinsAllies('1942-05-22');
TIMELINES.BRA = joinsAllies('1942-08-22');
TIMELINES.BOL = joinsAllies('1943-04-07');
TIMELINES.COL = joinsAllies('1943-11-26');
TIMELINES.ECU = joinsAllies('1945-02-02');
TIMELINES.PRY = joinsAllies('1945-02-07');
TIMELINES.PER = joinsAllies('1945-02-12');
assign('VEN URY', joinsAllies('1945-02-15'));
TIMELINES.ARG = joinsAllies('1945-03-27');
TIMELINES.CHL = joinsAllies('1945-04-11');
assign('SUR CUW ABW SXM NLD_CAR', joinsAllies('1940-05-10')); // Dutch colonies
TIMELINES.GRL = joinsAllies('1941-04-09'); // US-Danish agreement of 9 April 1941

/** Keys that follow the Stanford table for the country they belong to. */
const DELEGATES: Record<string, string> = {
  SUN: 'Soviet Union',
  NOR: 'Norway',
  PRT: 'Portugal',
  ESP: 'Spain',
};

/** Names in use at the time, where the modern name in the data would mislead. */
const ERA_NAMES: Record<string, string> = {
  MMR: 'Burma',
  IDN: 'Dutch East Indies',
  LKA: 'Ceylon',
  IND: 'British India',
  PAK: 'British India (modern Pakistan)',
  BGD: 'British India (modern Bangladesh)',
  MYS: 'British Malaya and Borneo',
  TLS: 'Portuguese Timor',
  TWN: 'Formosa (Japanese Taiwan)',
  KOR: 'Korea (Japanese-ruled, south)',
  PRK: 'Korea (Japanese-ruled, north)',
  THA: 'Thailand (Siam)',
  IRN: 'Iran (Persia)',
  COD: 'Belgian Congo',
  RWA: 'Ruanda-Urundi (Rwanda)',
  BDI: 'Ruanda-Urundi (Burundi)',
  TZA: 'Tanganyika and Zanzibar',
  GHA: 'Gold Coast',
  ZWE: 'Southern Rhodesia',
  ZMB: 'Northern Rhodesia',
  MWI: 'Nyasaland',
  BWA: 'Bechuanaland',
  LSO: 'Basutoland',
  SWZ: 'Swaziland',
  NAM: 'South West Africa',
  SDN: 'Anglo-Egyptian Sudan',
  SDS: 'Anglo-Egyptian Sudan (south)',
  PSX: 'Palestine (British Mandate)',
  ISR: 'Palestine (British Mandate)',
  JOR: 'Transjordan',
  SOL: 'British Somaliland',
  SOM: 'Italian Somaliland',
  ERI: 'Eritrea (Italian)',
  SYR: 'Syria (French Mandate)',
  LBN: 'Lebanon (French Mandate)',
  VNM: 'French Indochina (Vietnam)',
  LAO: 'French Indochina (Laos)',
  KHM: 'French Indochina (Cambodia)',
  GUY: 'British Guiana',
  BLZ: 'British Honduras',
  SUR: 'Suriname (Dutch Guiana)',
  VUT: 'New Hebrides',
  WSM: 'Western Samoa',
  KIR: 'Gilbert Islands (Kiribati)',
  TUV: 'Ellice Islands (Tuvalu)',
  FSM: 'Caroline Islands (Japanese mandate)',
  MHL: 'Marshall Islands (Japanese mandate)',
  PLW: 'Palau (Japanese mandate)',
  MNP: 'Mariana Islands (Japanese mandate)',
  CIV: 'Ivory Coast (French West Africa)',
  SEN: 'Senegal (French West Africa)',
  MLI: 'French Sudan (Mali)',
  BFA: 'Upper Volta',
  BEN: 'Dahomey',
  TGO: 'Togo (French Mandate)',
  CMR: 'Cameroon (French Mandate)',
  TCD: 'Chad (French Equatorial Africa)',
  CAF: 'Ubangi-Shari (French Equatorial Africa)',
  COG: 'Middle Congo (French Equatorial Africa)',
  GAB: 'Gabon (French Equatorial Africa)',
  DJI: 'French Somaliland',
  COM: 'Comoros (French)',
};

/** One-line caveats shown in the popup for territories where the modern outline misleads. */
export const WORLD_KEY_NOTES: Record<string, string> = {
  CHN: 'Coloured whole as Allied. Japan held Manchuria, the north-east and the coast, and China had a rival Japanese-sponsored government at Nanjing from March 1940.',
  MCK: 'Drawn as the modern provinces of Liaoning, Jilin and Heilongjiang, an approximation: Manchukuo also took in Jehol and part of Inner Mongolia. Coloured Soviet from 20 August 1945, the date its dissolution is given: Soviet troops had held the cities since the invasion of 9 August, and the territory passed to Chinese administration in 1946.',
  PRK: 'The northern half of the modern outline. Japanese-occupied until Soviet troops entered Pyongyang on 24 August 1945; the 38th parallel dividing line was proposed by American officers on 10 August and written into General Order No. 1, approved on 17 August 1945. No Korean state existed yet in 1945.',
  KOR: 'The southern half of the modern outline. Japanese-occupied until American troops landed on 8 September 1945, so for the fortnight after the broadcast of 15 August nobody occupied it on this map; it is shown as under Allied occupation from the landing.',
  JPN: 'The modern outline, which excludes southern Sakhalin and the Kuril Islands: the USSR took those in the same fortnight (11-25 August and 18 August to 2 September 1945), and here they fall inside Russia, which this layer does not draw. Under Allied occupation from 2 September 1945, the day the instrument of surrender took effect; the state of war lasted until 28 April 1952.',
  IND: 'The whole of British India is shown. The Japanese reached the frontier at Imphal and Kohima in 1944 but held almost none of it.',
  IDN: 'The whole archipelago is one colour. In western New Guinea Allied forces held Merauke throughout, and some islands were reoccupied only in 1945.',
  PNG: 'New Guinea is shown as contested for the whole campaign: the Japanese held the north coast and the Australians the south-east, and neither held most of the interior.',
  MMR: 'Burma was nearly all Japanese-held from May 1942; the nominal independence of August 1943 changed the flag, not the garrison.',
  PHL: 'The Philippines are shown as contested while fighting was under way (April 1942 and October 1944 to July 1945) and Japanese-occupied in between.',
  TUN: 'Tunisia is shown as contested during the Axis build-up and Allied advance of November 1942 to May 1943.',
  LBY: 'Libya was an Italian colony; the front crossed it several times between 1940 and January 1943.',
  ETH: 'Ethiopia was annexed by Italy in 1936 and liberated in April-May 1941; the last Italian garrison held out at Gondar until November 1941.',
  MNG: 'Neutral in the Second World War until it declared war on Japan on 10 August 1945, though Soviet and Mongolian troops fought the Japanese at Khalkhin Gol in 1939.',
  IRN: 'Occupied by Britain and the USSR from 25 August 1941, which this map shows as Allied; Iran declared war on Germany only in September 1943.',
  IRQ: 'Neutral until the British reoccupation of May-June 1941; Iraq declared war on the Axis in January 1943.',
  THA: 'A neutral kingdom until Japan invaded on 8 December 1941; it signed an alliance with Japan on 21 December and declared war on Britain and the United States in January 1942.',
  SUN: 'Soviet territory outside the area covered by the Stanford border layers, coloured from the same table.',
  GRL: 'A Danish colony, occupied by US forces under the agreement of 9 April 1941.',
  USA: 'The Aleutian islands of Attu and Kiska were held by Japan from June 1942 until 1943, which this map does not show.',
  CAN: 'Canada declared war on 10 September 1939. Newfoundland, a separate British dominion in 1939, is drawn with Canada.',
};

export function worldStatusFor(date: string, key: string): TerritoryStatus {
  const delegate = DELEGATES[key];
  if (delegate) return statusFor(date, delegate);
  const t = TIMELINES[key];
  if (t) return t(date);
  if (process.env.NODE_ENV !== 'production') {
    console.warn(`world status table has no entry for "${key}" in ${date}`);
  }
  return 'unknown';
}

export function worldNameFor(key: string, dataName: string): string {
  return ERA_NAMES[key] ?? dataName;
}

/** Every key world.json carries must resolve; used by the build check. */
export const WORLD_KEYS_HANDLED = [...Object.keys(TIMELINES), ...Object.keys(DELEGATES)];

/**
 * What each snapshot shows outside Europe, and where the whole-country colours
 * oversimplify. Rendered next to SNAPSHOT_NOTES.
 */
export const WORLD_NOTES: Record<string, string> = {
  '1938-04-30':
    'Outside Europe the only war is in China, where Japan has been fighting since July 1937. China is coloured Allied from 1938 and drawn whole, which hides the Japanese hold on Beijing, Shanghai and Nanjing; Manchukuo is drawn as the modern provinces of Liaoning, Jilin and Heilongjiang. Korea, Taiwan and the Italian colonies (Libya, Eritrea, Somalia, and Ethiopia, annexed in 1936) are coloured for their rulers. Everything else is at peace.',
  '1939-04-30':
    'Unchanged outside Europe from the April 1938 snapshot: China at war with Japan, Korea, Taiwan and Manchukuo under Japan, and the Italian colonies. Libya’s coastal provinces were incorporated into Italy proper in January 1939. The rest of the world is still at peace.',
  '1939-10-31':
    'The war has begun and the British Empire is in it: Australia, India, New Zealand and South Africa declared war between 3 and 6 September and Canada on 10 September, and France’s colonies are Allied, as they will be until the armistice. The United States, Latin America, Egypt, the Dutch and Belgian colonies and Thailand are neutral, as are the Portuguese and Spanish colonies.',
  '1940-04-30':
    'Little has changed outside Europe: the Dutch East Indies, the Belgian Congo and Suriname are neutral until the German attack on 10 May, and the United States is neutral. The French and British empires remain Allied; Italy’s colonies are Italian, and Japan is still fighting in China.',
  '1941-04-30':
    'France’s overseas empire has split. Territories that stayed under Vichy (North Africa, West Africa, Madagascar, Syria, Lebanon and Indochina, where Japanese troops had been stationed since 1940) are coloured Axis; French Equatorial Africa, Cameroon and the Pacific colonies, held by the Free French, are Allied. Italian East Africa has fallen: Eritrea, Somalia and Ethiopia are Allied, though the last Italian garrison held out at Gondar until November. The Dutch and Belgian colonies are Allied; Iraq is shown neutral after the pro-Axis coup of April; the British fought the Iraqi army in May.',
  '1941-09-30':
    'Syria and Lebanon were taken from Vichy in June-July 1941 and are Allied; Iran has been occupied by Britain and the Soviet Union since 25 August and is shown as Allied, as Iraq is after the British reoccupation. Greenland is Allied under US protection. The United States, Latin America and Thailand are still outside the war: Pearl Harbor is more than two months away.',
  '1942-04-30':
    'Japan has overrun south-east Asia in less than five months: Hong Kong, Malaya, Singapore, the Dutch East Indies and, by May, the Philippines (shown as contested because Corregidor held out until 6 May). Burma is contested and Thailand is an Axis ally. Papua New Guinea is contested after the capture of Rabaul. The United States and most of Central America are Allied; Vichy still holds Madagascar and North Africa. Several calls here are single dates: Burma and the Philippines could be coloured either way.',
  '1943-04-30':
    'After Operation Torch (November 1942), French North Africa, West Africa and Madagascar have changed sides, and Libya is Allied; Tunisia, where the Axis still held a bridgehead, is shown as contested. Burma is Japanese-occupied. Japan holds the Philippines, Malaya and the Dutch East Indies; New Guinea is contested, and the Solomons are shown as contested although Guadalcanal had been cleared in February. Brazil, Mexico and Bolivia have declared war.',
  '1943-06-30':
    'Tunisia is Allied after the Axis surrender of 13 May 1943; Libya has been Allied since January. Elsewhere the lines are those of April 1943: Japan holds south-east Asia, Burma and the Gilbert Islands, and the war in New Guinea and the Solomons continues.',
  '1943-10-31':
    'Japan has installed governments in Burma (August) and the Philippines (October); both are drawn as Axis, although the real power remained Japanese. The Gilbert Islands are still held by Japan: Tarawa falls on 20-23 November. Colombia will join the Allies in November. French Guiana and the French Antilles have rejoined the Allies.',
  '1944-04-30':
    'The Allies are now reconquering the Pacific: the Gilbert Islands are Allied again, the Marshall Islands are shown as contested after the landings of 31 January, and New Guinea is still contested. Burma is Axis on paper and Japanese in fact; the Philippines, Malaya and the Dutch East Indies are Japanese-held. Colombia is now Allied.',
  '1945-04-30':
    'Nearly all of Latin America has declared war in the last three months, and Saudi Arabia and Egypt have too. Burma and the Philippines are shown as contested while their reconquest is under way, and the Marianas and Guam are Allied. In Indochina the Japanese overthrew the French administration on 9 March and set up client kingdoms, shown as Axis. Japan, Korea, Taiwan, Malaya, Singapore, the Dutch East Indies and most of Indonesia are Japanese-held; China is drawn Allied and whole.',
};

/**
 * Notes for months that have no border snapshot of their own. Without these, May to
 * September 1945 would all read the April note above even though the world layer is
 * coloured by month and its colours do move in July, August and September 1945.
 * Preferred over WORLD_NOTES by worldNoteFor when a month has an entry.
 */
export const WORLD_MONTH_NOTES: Record<string, string> = {
  '1945-07':
    'The only colour to move is the Philippines, shown Allied once the campaign there ended in July 1945. Everything else outside Europe is as in April: Japan, Korea, Taiwan, Malaya, Singapore and the Dutch East Indies Japanese-held, Manchukuo Axis, and China drawn Allied and whole.',
  '1945-08':
    'Two colours change in north-east Asia in the last month of fighting. Manchukuo, Axis here since 1932, is shown Soviet from 20 August 1945, the date of its dissolution, and northern Korea is Soviet from 24 August, the day Soviet troops entered Pyongyang. Japan and the south of Korea are still drawn Japanese-held: the surrender was announced on 15 August, but the instrument was not yet signed. Southern Sakhalin (11-25 August) and the Kuril Islands (18 August to 2 September) were taken in the same fortnight and cannot be drawn here — they fall inside Russia, which has no outline in this layer.',
  '1945-09':
    'Japan is shown under Allied occupation from 2 September 1945, the day the instrument of surrender was signed aboard USS Missouri and took effect at 09:25 Japan time, and Korea south of the 38th parallel from 8 September, when the first American troops came ashore. Manchukuo is gone, and the north of Korea is Soviet. Nothing in Europe changes: these are the outlines of 30 April 1945, coloured for September. The state of war had not ended either — with Japan it lasted until 28 April 1952, and Germany’s final settlement was signed only in 1990.',
};

/** The note to show for a selected month: the month’s own if it has one, else the snapshot’s. */
export function worldNoteFor(monthKey: string, snapshotDate: string): string | undefined {
  return WORLD_MONTH_NOTES[monthKey] ?? WORLD_NOTES[snapshotDate];
}
