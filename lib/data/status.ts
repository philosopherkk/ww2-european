/**
 * Who controlled each territory in each border snapshot.
 *
 * The ArcGIS source layer has a `controller` property, but it is not reliable:
 * it labels Italy "Allies" in April 1942 and Belgium "Allied" in October 1943,
 * both of which are wrong. The table below is authored from the standard
 * references (Overy, The Dictators; Dear & Foot, The Oxford Companion to the
 * Second World War; USHMM Holocaust Encyclopedia) and is what the map colours
 * are actually driven by. Geometry still comes from the source layer.
 *
 * Two things to keep in mind when editing this file:
 *  - Every territory name that appears in public/data/borders/*.json must be
 *    handled here. Anything that is not falls through to `unknown`, which is
 *    painted as an obvious gap rather than silently as neutral.
 *  - The geometry is dated but coarse, so a polygon can outlive the regime it
 *    names: the 1945-04-30 file still draws the General Government and the
 *    Reichskommissariat Ostland, whose land had been in Soviet hands for
 *    months or a year. Those polygons are re-coloured `soviet` below and the
 *    stale geometry is disclosed in SNAPSHOT_NOTES.
 */

export type TerritoryStatus =
  | 'at_peace'
  | 'axis'
  | 'german_administered'
  | 'german_occupied'
  | 'italian_occupied'
  | 'japanese_occupied'
  | 'soviet'
  | 'ally'
  | 'co_belligerent'
  | 'neutral'
  | 'contested'
  | 'unknown';

export interface StatusMeta {
  label: string;
  color: string;
  stroke: string;
  /** Rendered in the map's "about these colours" panel. */
  legend: string;
}

/** Fixed order for the legend, so the swatches do not jump between snapshots. */
export const STATUS_ORDER: TerritoryStatus[] = [
  'at_peace',
  'axis',
  'german_administered',
  'german_occupied',
  'italian_occupied',
  'japanese_occupied',
  'soviet',
  'ally',
  'co_belligerent',
  'neutral',
  'contested',
  'unknown',
];

export const STATUS_META: Record<TerritoryStatus, StatusMeta> = {
  at_peace: {
    label: 'At peace',
    color: '#CAC4B8',
    stroke: '#81796D',
    legend:
      'States that were not at war before 3 September 1939 (the April 1938 and April 1939 snapshots). Nothing was fighting in Europe yet, but Germany had already annexed Austria in March 1938, taken the Sudetenland in September 1938 and occupied Prague on 15 March 1939, so the German Reich and its client states are shown in red from the outset. Outside Europe, Japan had been at war with China since July 1937, and China is shown as Allied from 1938.',
  },
  axis: {
    label: 'Axis powers and German allies',
    color: '#9B5B50',
    stroke: '#6E3A32',
    legend:
      'Germany, Italy, Japan and the states bound to them, whether as allies, client states or collaborationist regimes: in Asia, Manchukuo, Thailand from December 1941 and the Japanese-sponsored governments of Burma and the Philippines. The Tripartite Pact of 27 September 1940 joined Germany, Italy and Japan; Hungary and Romania joined in November 1940, Slovakia and Bulgaria in November and March 1941. Finland fought the Soviet Union alongside Germany without ever joining the Pact, and is shown separately.',
  },
  german_administered: {
    label: 'Under direct German administration',
    color: '#5A3A33',
    stroke: '#36221D',
    legend:
      'Territory annexed into the Reich, or ruled as German occupation administration rather than as a state: the Protectorate of Bohemia and Moravia, the General Government in occupied Poland, and the Reichskommissariate in the east. None of these were states in international law.',
  },
  german_occupied: {
    label: 'German-occupied',
    color: '#C9A093',
    stroke: '#9B5B50',
    legend:
      'States under German military or civil occupation, with their governments in exile or in resistance. Occupied populations were subject to forced labour, reprisals and, for the Jews of Europe, deportation. Denmark and Norway, the Low Countries, France, Greece, Albania after September 1943 and Serbia all appear in this colour at some point.',
  },
  italian_occupied: {
    label: 'Italian-occupied or annexed',
    color: '#8A754F',
    stroke: '#5B4B33',
    legend:
      'Territory held by Italy rather than Germany: Albania from April 1939, the parts of Yugoslavia occupied in April 1941, including Montenegro and most of Dalmatia, and in Africa Libya and Ethiopia. In Europe this distinction disappears after the Italian armistice of 8 September 1943, when Germany took over the Italian occupation zones.',
  },
  japanese_occupied: {
    label: 'Japanese-occupied or annexed',
    color: '#8E6A8F',
    stroke: '#5F4260',
    legend:
      'Territory held by Japan, whether annexed long before the war (Korea, Taiwan) or conquered from December 1941: Hong Kong, Malaya, Singapore, the Dutch East Indies, most of the Philippines and Burma, and the Pacific islands. Governments set up under Japanese sponsorship, such as Manchukuo, are shown in the Axis colour, as Croatia and Slovakia are.',
  },
  soviet: {
    label: 'Soviet Union',
    color: '#A98145',
    stroke: '#775A30',
    legend:
      'The USSR. Between August 1939 and June 1941 it was not at war, but it had occupied eastern Poland, the Baltic states, Bessarabia and northern Bukovina under the secret protocol to the German-Soviet pact. From 22 June 1941 it was an Allied power, and it bore about three quarters of all German military losses in the war.',
  },
  ally: {
    label: 'Allied',
    color: '#61849F',
    stroke: '#405D72',
    legend:
      'States at war with Germany, Italy or Japan, including the United Kingdom and its empire, China, the Soviet Union from June 1941, the United States from December 1941, the Latin American states that declared war between 1941 and 1945, and after 1944 the liberated states of western Europe. From October 1943 the royal government of southern Italy counts here as a co-belligerent.',
  },
  co_belligerent: {
    label: 'Finland, co-belligerent with Germany',
    color: '#7C8754',
    stroke: '#545E36',
    legend:
      'Finland fought the Soviet Union alongside Germany from June 1941 without ever signing the Tripartite Pact, and kept its democratic government and its Jewish citizens throughout — the only state bordering the USSR to do so. After the armistice of 19 September 1944 Finland was in turn at war with Germany in Lapland.',
  },
  neutral: {
    label: 'Neutral',
    color: '#949A9A',
    stroke: '#646A6B',
    legend:
      'States outside the fighting on the date shown: in Europe Ireland, Portugal, Spain, Sweden, Switzerland and Andorra, and in 1939-40 the states that were later invaded; elsewhere Latin America before its declarations of war, Saudi Arabia, Afghanistan, Egypt until 1945 and others. Neutrality did not keep them untouched: Sweden supplied Germany by rail, Turkey moved to the Allies in February 1945, and Portugal hosted intelligence services from both sides.',
  },
  contested: {
    label: 'Held by both sides or divided',
    color: '#C97B4A',
    stroke: '#8F4F29',
    legend:
      'Territory where no one power held most of the land on the date shown, usually because an invasion or a reconquest was under way: Malaya in December 1941, New Guinea and the Solomons, Burma in 1942 and 1945, the Philippines in 1942 and 1944-45, Tunisia in November 1942 and the Pacific islands during their reconquest. Each is one call on a single date and can be argued either way.',
  },
  unknown: {
    label: 'Status not recorded here',
    color: '#FFFFFF',
    stroke: '#78716C',
    legend:
      'A territory in the border dataset that this site has not classified. It is left white rather than guessed at, so that a gap in our table cannot be mistaken for a fact.',
  },
};

const PEACE: TerritoryStatus = 'at_peace';
const AXIS: TerritoryStatus = 'axis';
const ADMIN: TerritoryStatus = 'german_administered';
const OCC: TerritoryStatus = 'german_occupied';
const ITAL: TerritoryStatus = 'italian_occupied';
const SOV: TerritoryStatus = 'soviet';
const ALLY: TerritoryStatus = 'ally';
const COB: TerritoryStatus = 'co_belligerent';
const NEU: TerritoryStatus = 'neutral';

/** Status of a territory name for the war years, before snapshot overrides. */
const BY_NAME: Record<string, TerritoryStatus> = {
  Andorra: NEU,
  Cyprus: ALLY, // British colony
  Malta: ALLY, // British colony, at war with Italy from 10 June 1940
  Ireland: NEU,
  Portugal: NEU,
  Spain: NEU,
  Sweden: NEU,
  Switzerland: NEU,
  Turkey: NEU, // declared war on Germany 23 February 1945: see 1945-04-30
  'United Kingdom': ALLY,
  Germany: AXIS,
  'Soviet Union': SOV,
  Slovakia: AXIS, // client state proclaimed 14-15 March 1939
  Croatia: AXIS, // Independent State of Croatia, proclaimed 10 April 1941
  'Serbian Residual State': AXIS, // German-occupied Serbia under a commissar government
  'Italian Social Republic': AXIS, // Salò regime, September 1943 - April 1945
  'Vichy France': AXIS, // armed neutrality and collaboration, July 1940 - November 1942
  'Protectorate of Bohemia and Moravia': ADMIN,
  'General Government': ADMIN,
  'Reichskommissariat Ostland': ADMIN,
  'Reichkommissariat Ostland': ADMIN, // misspelling present in the source layer
  'Reichskommissariat Ukraine': ADMIN,
  Transnistria: AXIS, // Romanian-administered, not part of the Reich
  Denmark: OCC,
  Norway: OCC,
  Netherlands: OCC,
  Luxembourg: OCC,
  Belgium: OCC,
  France: OCC,
  Greece: OCC,
  Albania: OCC, // Italian from 1939, German from September 1943: see overrides
  Montenegro: ITAL, // Italian occupation zone 1941-43, German thereafter
  Italy: AXIS,
  Hungary: AXIS,
  Romania: AXIS,
  Bulgaria: AXIS, // joined the Pact 1 March 1941: see overrides
  Finland: NEU, // co-belligerent from June 1941: see overrides
  Poland: NEU,
  Estonia: NEU,
  Latvia: NEU,
  Lithuania: NEU,
  Danzig: AXIS, // Free City under League mandate, Nazi-controlled locally from 1933
  Czechoslovakia: NEU,
  Yugoslavia: NEU,
  Iceland: ALLY, // occupied by British forces from 5 May 1940, US garrison from 1941
};

/**
 * Per-snapshot corrections, keyed by the snapshot date in the manifest. Only
 * entries that differ from BY_NAME are listed, except for the two peacetime
 * snapshots, which are spelled out in full so that no territory inherits a
 * wartime colour by accident.
 */
const BY_SNAPSHOT: Record<string, Partial<Record<string, TerritoryStatus>>> = {
  // April 1938: after the Anschluss, before Munich. Nothing at war.
  '1938-04-30': {
    Albania: PEACE,
    Andorra: PEACE,
    Belgium: PEACE,
    Bulgaria: PEACE,
    Cyprus: PEACE,
    Czechoslovakia: PEACE,
    Danzig: PEACE,
    Denmark: PEACE,
    Estonia: PEACE,
    Finland: PEACE,
    France: PEACE,
    Germany: AXIS, // Austria already annexed on 12-13 March 1938
    Greece: PEACE,
    Hungary: PEACE,
    Iceland: PEACE,
    Ireland: PEACE,
    Italy: PEACE, // Albania invaded on 7 April 1939
    Latvia: PEACE,
    Lithuania: PEACE,
    Luxembourg: PEACE,
    Malta: PEACE,
    Netherlands: PEACE,
    Norway: PEACE,
    Poland: PEACE,
    Portugal: PEACE,
    Romania: PEACE,
    'Soviet Union': PEACE,
    Spain: PEACE,
    Sweden: PEACE,
    Switzerland: PEACE,
    Turkey: PEACE,
    'United Kingdom': PEACE,
    Yugoslavia: PEACE,
  },
  // April 1939: after Munich, Prague and Memel; Albania occupied on 7 April.
  '1939-04-30': {
    Albania: AXIS, // Italian invasion of 7 April 1939
    Andorra: PEACE,
    Belgium: PEACE,
    Bulgaria: PEACE,
    Cyprus: PEACE,
    Danzig: AXIS,
    Denmark: PEACE,
    Estonia: PEACE,
    Finland: PEACE,
    France: PEACE,
    Germany: AXIS,
    Greece: PEACE,
    Hungary: PEACE,
    Iceland: PEACE,
    Ireland: PEACE,
    Italy: PEACE,
    Latvia: PEACE,
    Lithuania: PEACE, // Memel returned to Germany on 23 March 1939
    Luxembourg: PEACE,
    Malta: PEACE,
    Netherlands: PEACE,
    Norway: PEACE,
    Poland: PEACE, // British guarantee of 31 March 1939, but at peace
    Portugal: PEACE,
    'Protectorate of Bohemia and Moravia': ADMIN,
    Romania: PEACE,
    Slovakia: AXIS,
    'Soviet Union': PEACE,
    Spain: PEACE,
    Sweden: PEACE,
    Switzerland: PEACE,
    Turkey: PEACE,
    'United Kingdom': PEACE,
    Yugoslavia: PEACE,
  },
  // October 1939: Poland has been partitioned, the Western Front is quiet, and
  // Italy is still not at war. Spelled out in full so nothing inherits a 1942 colour.
  '1939-10-31': {
    Albania: ITAL, // Italian protectorate since 7 April 1939
    Andorra: NEU,
    Belgium: NEU,
    Bulgaria: NEU,
    Cyprus: ALLY, // British colony: at war with Germany since 3 September 1939
    Denmark: NEU,
    Estonia: NEU, // Soviet bases conceded in the mutual assistance pacts of Sept-Oct 1939
    Finland: NEU, // the Winter War began on 30 November 1939
    France: ALLY, // at war with Germany since 3 September 1939
    'General Government': ADMIN, // German-occupied central Poland from 26 October 1939
    Germany: AXIS,
    Greece: NEU,
    Hungary: NEU,
    Iceland: NEU, // neutral until British forces landed on 5 May 1940
    Ireland: NEU,
    Italy: NEU, // declared itself a non-belligerent on 3 September 1939
    Latvia: NEU,
    Lithuania: NEU, // the German minority was moved out in Oct-Dec 1939 under the Soviet-German agreement
    Luxembourg: NEU,
    Malta: ALLY, // British colony: at war with Germany since 3 September 1939
    Netherlands: NEU,
    Norway: NEU,
    Portugal: NEU,
    'Protectorate of Bohemia and Moravia': ADMIN,
    Romania: NEU,
    Slovakia: AXIS, // took part in the invasion of Poland from 1 September 1939
    'Soviet Union': SOV, // invaded eastern Poland on 17 September under the secret protocol
    Spain: NEU,
    Sweden: NEU,
    Switzerland: NEU,
    Turkey: NEU,
    'United Kingdom': ALLY,
    Yugoslavia: NEU,
  },
  '1940-04-30': {
    // Winter War ended 12 March 1940; Denmark and Norway invaded 9 April 1940.
    // Belgium, the Netherlands, Luxembourg and Iceland were still neutral on
    // 30 April — British forces landed in Iceland on 5 May.
    Hungary: NEU, // Tripartite Pact 27 November 1940
    Romania: NEU, // Tripartite Pact 23 November 1940
    Bulgaria: NEU, // Tripartite Pact 1 March 1941
    Italy: NEU, // declared war only on 10 June 1940
    Malta: ALLY, // a British colony, at war with Germany since 3 September 1939
    Albania: ITAL, // Italian protectorate from April 1939
    Iceland: NEU,
    Belgium: NEU, // invaded 10 May 1940
    Netherlands: NEU, // invaded 10 May 1940
    Luxembourg: NEU, // invaded 10 May 1940
    Greece: NEU, // attacked by Italy on 28 October 1940
    France: ALLY, // at war with Germany since 3 September 1939
  },
  '1941-04-30': {
    // Yugoslavia and Greece overrun in April 1941; the USSR was still a
    // non-belligerent on 30 April 1941; Finland was formally neutral until 25 June.
    'Soviet Union': NEU,
    Finland: NEU,
    Albania: ITAL,
    Montenegro: ITAL,
  },
  // September 1941: five months into Operation Barbarossa. The Baltic states and
  // Ukraine are behind the two Reichskommissariate, and Italy is an Axis power
  // whatever the source layer's controller field says.
  '1941-09-30': {
    Albania: ITAL,
    Bulgaria: NEU, // a Pact member since 1 March 1941, but at war with nobody: no Soviet or Allied declarations
    Finland: COB,
  },
  '1942-04-30': {
    // Italy was an Axis power whatever the source layer's controller field says.
    Italy: AXIS,
    Finland: COB,
    Albania: ITAL,
    Montenegro: ITAL,
  },
  '1943-04-30': {
    Italy: AXIS,
    Finland: COB,
    Albania: ITAL,
    Montenegro: ITAL,
  },
  // June 1943: the last German offensive in the south is about to fail at Kursk;
  // all of metropolitan France is under direct German occupation from November 1942.
  '1943-06-30': {
    Albania: ITAL,
    Finland: COB,
  },
  '1943-10-31': {
    // Armistice announced 8 September 1943: the royal government in the south
    // became a co-belligerent, the Salò regime held the centre and north, and
    // Germany took over the Italian occupation zones.
    Italy: ALLY,
    Belgium: OCC, // the source wrongly calls this "Allied"
    Finland: COB,
    Albania: OCC,
    Montenegro: OCC,
  },
  '1944-04-30': {
    Italy: ALLY,
    Finland: COB,
    Bulgaria: AXIS, // still Axis on 30 April 1944; defected 8-9 September 1944
    Albania: OCC,
    Montenegro: OCC,
  },
  '1945-04-30': {
    // The last snapshot. Its geometry is stale — it still draws the General
    // Government and the Reichskommissariate as if they existed — so the
    // polygons are coloured for who actually held the ground on 30 April 1945.
    Italy: ALLY,
    Finland: ALLY, // at war with Germany in Lapland since September 1944
    Bulgaria: ALLY, // declared war on Germany 8 September 1944
    Romania: ALLY, // changed sides 23 August 1944
    Hungary: ALLY, // armistice 20 January 1945, a provisional government at Debrecen
    Turkey: ALLY, // declared war on Germany 23 February 1945
    Belgium: ALLY, // liberated September 1944
    Luxembourg: ALLY, // liberated September 1944
    France: ALLY,
    Greece: ALLY,
    Albania: ALLY, // liberated by partisans November 1944
    Montenegro: ALLY,
    Yugoslavia: ALLY,
    'Serbian Residual State': ALLY, // Belgrade taken 20 October 1944
    // Still under German occupation on 30 April 1945:
    Denmark: OCC, // capitulated 4-5 May 1945
    Norway: OCC, // capitulated 8 May 1945
    Netherlands: OCC, // the west still in German hands; liberated 5 May 1945
    // Ground held by the Red Army, in polygons that outlived their names:
    'General Government': SOV, // Warsaw 17 January, Kraków 18 January 1945
    'Reichskommissariat Ostland': SOV, // Riga 13 October 1944
    'Reichkommissariat Ostland': SOV,
    'Reichskommissariat Ukraine': SOV, // Kiev 6 November 1943
  },
};

export function statusFor(snapshotDate: string, name: string): TerritoryStatus {
  const override = BY_SNAPSHOT[snapshotDate]?.[name];
  if (override) return override;
  const known = BY_NAME[name];
  if (known) return known;
  if (process.env.NODE_ENV !== 'production') {
    // A territory this table has never heard of is our bug, not a fact about
    // Europe: surface it instead of painting it neutral.
    console.warn(`status table has no entry for "${name}" in ${snapshotDate}`);
  }
  return 'unknown';
}

/**
 * What each snapshot does and does not show. Rendered next to the map so that
 * readers are not misled by the gaps in the underlying dataset.
 */
export const SNAPSHOT_NOTES: Record<string, string> = {
  '1938-04-30':
    'After the Anschluss (12-13 March 1938) but before Munich. Czechoslovakia is still intact and Albania still independent. The German polygon already includes Austria. No state in Europe was at war on this date, so almost the whole map is shown in the "at peace" colour.',
  '1939-04-30':
    'After Munich and the German occupation of Prague on 15 March 1939: Slovakia exists as a German client state, and Bohemia and Moravia as a Reich Protectorate. Memel returned to Germany on 23 March and Albania was occupied on 7 April 1939. Nothing was yet fighting.',
  '1940-04-30':
    'Twenty-one days after the invasions of Denmark and Norway, and ten days before the attack in the west, so Belgium, the Netherlands, Luxembourg, Greece and Iceland still show as neutral, while France, the United Kingdom, Malta and Cyprus have been at war with Germany since 3 September 1939. Poland has been partitioned between Germany and the USSR and no longer appears as a state. Hungary, Romania and Italy had not yet joined the Axis war effort — Italy declared war only on 10 June — and Albania was under Italy, not Germany.',
  '1939-10-31':
    'Eight weeks into the war. Poland has been defeated and partitioned between Germany and the USSR (the Red Army crossed the eastern frontier on 17 September), so it no longer appears as a state; the General Government in central Poland was set up on 26 October. France and the United Kingdom, with their colonies Malta and Cyprus, have been at war with Germany since 3 September, but the Western Front is quiet. Italy has declared itself a non-belligerent, and every other state in Europe is neutral.',
  '1941-04-30':
    'After the Balkans campaign: Yugoslavia has been carved up into the Independent State of Croatia, an Italian-occupied Montenegro and a German-occupied Serbia, with Bačka to Hungary, Bulgarian Thrace and Kosovo to Albania. Greece is shown undivided, which understates the German, Italian and Bulgarian zones. The Soviet Union is still formally at peace — it will be attacked on 22 June.',
  '1941-09-30':
    'Three months into Operation Barbarossa, which began on 22 June 1941. The Reichskommissariate Ostland and Ukraine have been created behind the advancing German armies, and Finland is fighting beside Germany as a co-belligerent. Bulgaria is a Pact member but has not declared war on the USSR. Yugoslavia is divided, and Greece is shown undivided although German, Italian and Bulgarian zones had been set up.',
  '1942-04-30':
    'The Reichskommissariate Ostland and Ukraine exist — in this state the source layer has their two names on each other’s polygons, which has been corrected here — and Romania administers Transnistria east of the Dniester. The Baltic states have been absorbed into the USSR and no longer appear separately. This is April 1942, before the summer offensive: the high-water mark of German expansion in the east came five months later, in November 1942, and this map does not show it.',
  '1943-04-30':
    'After Stalingrad, but almost no territory has been given up in the east. Note that the dataset still draws the German-Soviet frontier of 1941 in places: Kharkiv, Voronezh and Crimea are shown as Soviet here because the source layer never followed the 1942 advance.',
  '1943-06-30':
    'Five days before the German offensive at Kursk (Operation Citadel, 5 July 1943), and seven weeks after the Axis surrender in Tunisia on 13 May. Vichy France has gone: Germany and Italy occupied the whole of France in November 1942. Italy is still an Axis power; the Allied invasion of Sicily comes on 10 July.',
  '1943-10-31':
    'After the Italian armistice of 8 September 1943: the royal government in the south, sitting at Salerno, is a co-belligerent, while the Italian Social Republic under Mussolini holds the centre and north with German support. Germany has also taken over the Italian occupation zones in Albania and Montenegro. The southern Italian polygon is small because the dataset leaves Naples and Foggia outside it, though they were in Allied hands by then.',
  '1944-04-30':
    'Two months before D-Day and two months before Operation Bagration. The Reichskommissariat Ukraine is gone; Romania, Hungary and Bulgaria are still in the Axis camp, though all three will change sides within the year.',
  '1945-04-30':
    'The last snapshot in this dataset, and the least reliable. Its polygons for Germany, Hungary and Bulgaria are identical to those of April 1944, so the Reich is still shown holding Königsberg, Wrocław, Poznań and Vienna, all of which had fallen. The General Government and the Reichskommissariat Ostland still appear as shapes; they are coloured for the Soviet occupations of 1944-45, not for a German administration that no longer existed. This map does NOT show the postwar frontier on the Oder-Neisse, agreed at Potsdam in July-August 1945.',
};
