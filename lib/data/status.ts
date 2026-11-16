/**
 * Who was at war with whom, and whose army held the ground, in each month of
 * the First World War.
 *
 * The geometry in public/data/borders never changes (see
 * scripts/build-ww1-border-data.mjs for why), so everything the map says about
 * a month comes from this file. Each country has a timeline of change points;
 * the month you pick gets the last entry that is not later than it. A snapshot
 * shows the situation as at the LAST DAY of the month, so that the map and the
 * event cards for that month describe the same moment.
 *
 * Dates of entry follow the standard references: Herwig, The First World War:
 * Germany and Austria-Hungary 1914-1918; Gilbert, The First World War;
 * Fromkin, A Peace to End All Peace; Spencer Tucker (ed.), World War I:
 * A Global Encyclopedia; and the parliamentary/session papers cited in
 * lib/data/sources.ts. Where a state's government went into exile or a
 * parliament was dissolved but the state did not disappear, the colour changes
 * and the note says so.
 *
 * Two limits that a reader could otherwise be misled by:
 *  - The polygons are those of July 1914. Poland, Finland, Czechoslovakia, the
 *    Baltic states, Ukraine and the South Slav state are therefore not drawn
 *    even after they declared themselves into existence; their land sits inside
 *    the Russian, Habsburg and Ottoman shapes. The map says this in
 *    GEOMETRY_NOTE, and the notes for the months concerned repeat it.
 *  - A polygon that was partitioned or occupied in part is coloured for the
 *    whole: Belgium, Serbia and Romania were never wholly occupied, and the
 *    free strip of Serbia, the Romanian government in Iași and the Salonika
 *    base are not drawn as separate territories.
 */

export type TerritoryStatus =
  | 'at_peace'
  | 'entente'
  | 'central'
  | 'occupied'
  | 'separate_peace'
  | 'armistice'
  | 'dissolved'
  | 'neutral'
  | 'unknown';

export interface StatusMeta {
  label: string;
  color: string;
  stroke: string;
  /** Rendered in the map's "about these colours" panel. */
  legend: string;
}

/** Fixed order for the legend, so the swatches do not jump between months. */
export const STATUS_ORDER: TerritoryStatus[] = [
  'at_peace',
  'entente',
  'central',
  'occupied',
  'separate_peace',
  'armistice',
  'dissolved',
  'neutral',
  'unknown',
];

export const STATUS_META: Record<TerritoryStatus, StatusMeta> = {
  at_peace: {
    label: 'At peace',
    color: '#CEC7BA',
    stroke: '#8E8577',
    legend:
      'Only the July 1914 map uses this colour: on 31 July 1914 Austria-Hungary was at war with Serbia and Russia was mobilising, but Germany, France and Britain had not yet declared war. From August 1914 onwards every state in Europe is either at war, occupied or neutral.',
  },
  entente: {
    label: 'At war with the Central Powers',
    color: '#2E6F9E',
    stroke: '#1B4A6E',
    legend:
      'The Entente and the powers that joined it: Serbia, Russia, France, Belgium and Britain in 1914, Montenegro in August 1914, Italy in May 1915, Portugal in March 1916, Romania in August 1916, Greece in July 1917. The United States, associated from April 1917 rather than an ally, is outside the European map.',
  },
  central: {
    label: 'Central Powers and their allies',
    color: '#A93226',
    stroke: '#6E2018',
    legend:
      'Germany and Austria-Hungary, joined by the Ottoman Empire in November 1914 and Bulgaria in October 1915. This is the colour for the war against them, not for any particular claim about their internal constitution.',
  },
  occupied: {
    label: 'Under military occupation',
    color: '#DFA58F',
    stroke: '#A8705A',
    legend:
      'Ground held by an army that is not the government of that state: Belgium and Luxembourg from August 1914, Serbia from November 1915 and Montenegro from January 1916, and the occupied part of Romania from December 1916, where the government survived in Iași under Russian protection. Occupied here means occupied by the Central Powers except where the note says otherwise.',
  },
  separate_peace: {
    label: 'Out of the war by separate peace',
    color: '#C8791A',
    stroke: '#8A5310',
    legend:
      'Russia after the armistice of 15 December 1917 and the Treaty of Brest-Litovsk of 3 March 1918, and Romania after the Treaty of Bucharest of 7 May 1918. Neither state gave up its claim to be at war with the Allies; both were treated as enemies by them.',
  },
  armistice: {
    label: 'Armistice in force',
    color: '#6E7F2B',
    stroke: '#4C5A1D',
    legend:
      'Bulgaria from 29 September 1918, the Ottoman Empire from 30 October 1918 and Germany from 11 November 1918. Fighting had stopped, the governments remained in place, and the peace treaties that settled the war came later, in 1919 and 1920.',
  },
  dissolved: {
    label: 'Government dissolved, successor states not drawn',
    color: '#9B8FA6',
    stroke: '#6A6173',
    legend:
      'Austria-Hungary in November 1918. The Habsburg state had ceased to function: German-Austria and Hungary proclaimed republics on 12 and 16 November, and the Czechs, Slovanes, Croats and Poles had already proclaimed their own states in October. This map has no polygons for those successor states, so the old shape is shown in a colour that says plainly that the thing it names no longer exists.',
  },
  neutral: {
    label: 'Neutral',
    color: '#8C979B',
    stroke: '#5D6769',
    legend:
      'The Netherlands, Denmark, Norway, Sweden, Spain and Switzerland stayed out of the war throughout. Neutrality was not the same as inactivity: Swedish volunteers went to Finland, Danish and Norwegian merchants carried goods under British contract, and the Netherlands became the escape route for airdropped Allied airmen.',
  },
  unknown: {
    label: 'Status not recorded here',
    color: '#FFFFFF',
    stroke: '#78716C',
    legend:
      'A territory the status table has never heard of. Land with no fill at all is outside this border dataset: everything south of the 34th parallel (Egypt, Palestine, the Hejaz), everything east of the 45th meridian (Persia, Baku and the Caspian), the North African coast, Iceland and Malta, and every state that appeared in 1918 inside the old imperial shapes.',
  },
};

/**
 * The one sentence that applies to every month: shapes do not move, colours do.
 * Rendered in the map header so it cannot be missed.
 */
export const GEOMETRY_NOTE =
  'The shapes are those of July 1914 and do not move; what changes month by month is the colour, which records who is at war and whose army holds the ground.';

/**
 * Change points per polity, keyed by month: the entry takes effect for that
 * month and every later one, until a later entry replaces it. The month is the
 * month in which the change happened, so a snapshot for month M shows the state
 * as at the last day of M.
 */
const TIMELINES: Record<string, [string, TerritoryStatus][]> = {
  'Austria-Hungary': [
    ['1914-07', 'central'], // war on Serbia 28 July 1914, so a belligerent in the first snapshot too; on Russia 5 August, on France 12 August
    ['1918-11', 'dissolved'], // republics proclaimed 12 and 16 November 1918
  ],
  Serbia: [
    ['1914-07', 'entente'], // at war from 28 July 1914, so already a belligerent in the first snapshot
    ['1915-11', 'occupied'], // Bulgarian and Austro-Hungarian armies overrun the country; the army retreats through Albania in December
    ['1918-11', 'entente'], // Belgrade taken 1 November 1918
  ],
  Germany: [
    ['1914-07', 'at_peace'],
    ['1914-08', 'central'], // war on Russia 1 August, on France 3 August 1914
    ['1918-11', 'armistice'], // 11 November 1918, at 11:00
  ],
  Russia: [
    ['1914-07', 'at_peace'],
    ['1914-08', 'entente'], // general mobilisation 31 July; Germany declares war 1 August 1914
    ['1917-12', 'separate_peace'], // armistice signed 15 December 1917; Brest-Litovsk 3 March 1918
  ],
  France: [
    ['1914-07', 'at_peace'],
    ['1914-08', 'entente'], // Germany declares war 3 August 1914
  ],
  'United Kingdom': [
    ['1914-07', 'at_peace'],
    ['1914-08', 'entente'], // war on Germany 4 August 1914, on Austria-Hungary 6 August (recognitions of the Belgian treaty)
  ],
  Belgium: [
    ['1914-07', 'at_peace'],
    ['1914-08', 'occupied'], // invaded 4 August 1914; the government goes to Le Havre, the army holds the Yser line
    ['1918-11', 'entente'], // liberated during the final offensive
  ],
  Luxembourg: [
    ['1914-07', 'at_peace'],
    ['1914-08', 'occupied'], // occupied 2 August 1914 without a shot; administered by a German president
    ['1918-11', 'neutral'], // evacuated 18-25 November 1918; back to neutrality between the wars
  ],
  Montenegro: [
    ['1914-07', 'at_peace'],
    ['1914-08', 'entente'], // war on Austria-Hungary 6 August 1914
    ['1916-01', 'occupied'], // the country overrun January 1916; the government goes into exile in Italy
    ['1918-11', 'entente'], // Podgorica reached 26 November 1918
  ],
  Albania: [
    ['1914-07', 'at_peace'],
    // One colour for the whole war: whoever held the ground, Albania itself had
    // no government at war with anyone. Serbian and Montenegrin armies invade
    // August 1914, Prince Wied leaves 3 September, Italy takes Vlorë 28 December
    // 1914; Austria-Hungary occupies Durrës in December 1915 and most of the
    // interior in 1916, while France sets up a district at Korçë in December 1916.
    ['1914-08', 'occupied'],
    ['1918-09', 'at_peace'], // the last Central Powers troops are gone by late September 1918; French, Italian and Serbian troops stayed on
  ],
  'Ottoman Empire': [
    ['1914-07', 'at_peace'],
    // October, not November: the Goeben and Breslau, flown by German crews and
    // bought on 16 August, bombard the Russian Black Sea ports on 29 October
    // 1914, which is the month this site dates the entry into the war. Russia
    // declares war on 2 November and Britain and France on 5 November, so a
    // reader who wants the declarations rather than the first shots will find
    // the change one month later, and the October card says so.
    ['1914-10', 'central'],
    ['1918-11', 'armistice'], // Mudros 30 October 1918; the Straits garrisoned from 1918-12
  ],
  Italy: [
    ['1914-07', 'at_peace'],
    ['1914-08', 'neutral'], // declared itself non-belligerent 3 August 1914: the Triple Alliance was defensive
    ['1915-05', 'entente'], // declared war 23 May 1915 after the Treaty of London of 26 April
  ],
  Bulgaria: [
    ['1914-07', 'at_peace'],
    ['1914-08', 'neutral'], // mobilised but stayed out until the Entente failed to outbid the Central Powers
    ['1915-10', 'central'], // declared war on Serbia 14 October 1915
    ['1918-09', 'armistice'], // armistice of Thessaloniki 29 September 1918; Ferdinand abdicates 3 October
  ],
  Romania: [
    ['1914-07', 'at_peace'],
    ['1914-08', 'neutral'], // the Crown Council voted for neutrality on 3 August 1914
    ['1916-08', 'entente'], // secret treaty of 10 August 1916; declared war 27 August 1916
    ['1916-12', 'occupied'], // Bucharest taken 6 December 1916; the government and army hold Moldavia with Russian help
    ['1918-05', 'separate_peace'], // Treaty of Bucharest 7 May 1918
    ['1918-11', 'entente'], // the treaty renounced 10 October 1918, arms taken up again 10 November 1918
  ],
  Greece: [
    ['1914-07', 'at_peace'],
    ['1914-08', 'neutral'], // King Constantine's armed neutrality; Venizelos wanted the side of the Entente
    ['1917-07', 'entente'], // the king compelled to abdicate 11 June 1917; war declared on the Central Powers 2 July 1917
  ],
  Portugal: [
    ['1914-07', 'at_peace'],
    ['1914-08', 'neutral'], // fights German incursions in Angola and Mozambique from August 1914 without being at war with Germany
    ['1916-03', 'entente'], // Germany declares war 9 March 1916 after the requisitioning of German shipping; the Portuguese Expeditionary Corps goes to Flanders in 1917
  ],
  Netherlands: [
    ['1914-07', 'at_peace'],
    ['1914-08', 'neutral'], // mobilised on 31 July 1914 and stayed armed and neutral
  ],
  Denmark: [
    ['1914-07', 'at_peace'],
    ['1914-08', 'neutral'], // the German frontier fortified and mined; grain and butter went to Britain under contract
  ],
  Norway: [
    ['1914-07', 'at_peace'],
    ['1914-08', 'neutral'], // the merchant fleet carried the war's cargo under British charter, and paid for it in tonnage
  ],
  Sweden: [
    ['1914-07', 'at_peace'],
    ['1914-08', 'neutral'], // sympathy for Germany and Finland; volunteers fought in Finland in 1918, iron ore went to Germany
  ],
  Spain: [
    ['1914-07', 'at_peace'],
    ['1914-08', 'neutral'], // the one belligerent-free power on the Entente side of the map; its influenza report gave the pandemic its name
  ],
  Switzerland: [
    ['1914-07', 'at_peace'],
    ['1914-08', 'neutral'], // the frontier garrisoned; the Red Cross and the internment camps of 1917-18
  ],
};

/**
 * The status of a named territory for the snapshot dated `snapshotDate`
 * ("YYYY-MM-01"): the last change point in its timeline that is not later than
 * that month.
 */
export function statusFor(snapshotDate: string, name: string): TerritoryStatus {
  const month = snapshotDate.slice(0, 7);
  const timeline = TIMELINES[name];
  if (!timeline) {
    if (process.env.NODE_ENV !== 'production') {
      // A territory this table has never heard of is our bug, not a fact about
      // Europe: surface it instead of painting it neutral.
      console.warn(`status table has no entry for "${name}" in ${snapshotDate}`);
    }
    return 'unknown';
  }
  let status: TerritoryStatus = 'unknown';
  for (const [from, value] of timeline) {
    if (from <= month) status = value;
  }
  return status;
}

/**
 * What each monthly snapshot does and does not show. Rendered next to the map
 * so that readers are not misled by the frozen geometry. Only the months where
 * something actually changes have a note.
 */
export const SNAPSHOT_NOTES: Record<string, string> = {
  '1914-07-31':
    'The war has just begun: Austria-Hungary declared war on Serbia on 28 July after the ultimatum of 23 July, and Russia ordered general mobilisation on 31 July. Germany, France and Britain are still at peace as the month ends. The assassination of Archduke Franz Ferdinand on 28 June and the July Crisis are the events of this month.',
  '1914-08-31':
    'Five powers at war. Germany has occupied Luxembourg (2 August) and most of Belgium (from 4 August) on the way to Paris; the advance was stopped on the Marne on 5-12 September. Serbia has beaten off two Austro-Hungarian invasions. This map cannot show the most important changes of the month, both of which fall inside the two giant polygons: the division of the Polish lands between the empires after the Russian retreat, and the Russian Second Army destroyed at Tannenberg on 26-30 August.',
  '1914-11-30':
    'The Ottoman Empire has joined the Central Powers (2-5 November), closing the Dardanelles to Russian grain and opening fronts in the Caucasus and at the Suez Canal, which is outside this map. Turkey’s entry turns the Black Sea into a lake of the Central Powers and brings the Straits question into the war. The Dodecanese and the Aegean are outside this map too.',
  '1915-05-31':
    'Italy has declared war on Austria-Hungary (23 May, after the Treaty of London of 26 April) and on Germany a year later, in August 1916. The Italian frontier runs along the Isonzo, which is where twelve battles will be fought; the shapes of Trentino and Trieste inside the Habsburg polygon are what Italy was promised.',
  '1915-11-30':
    'Serbia has been conquered: a Bulgarian army advancing west meets the Austro-Hungarians in the Morava valley, and the Serbian army retreats south-west into Albania through the winter snow. Montenegro takes the weight of the pursuit. At the same time a first Allied force has landed at Salonika, whose hinterland Serbia had ceded to Greece in 1913; the map cannot show that base.',
  '1916-08-31':
    'Romania has entered the war (27 August) and marched on Transylvania. Within four months a combined German, Austro-Hungarian, Bulgarian and Turkish army takes Bucharest (6 December); the Romanian government and what is left of the army hold Moldavia under Russian protection. The polygon stays one colour, but the occupied part is the richer and more populous part.',
  '1917-12-31':
    'Russia is out of the war by armistice (15 December) and talks begin at Brest-Litovsk on 3 December; it is shown here in the separate-peace colour. Two facts the frozen geometry hides: Finland declared independence on 6 December and was recognised by Soviet Russia on 31 December, and the Poles, Ukrainians and South Slavs are all in the process of declaring states inside the Russian and Habsburg shapes.',
  '1918-03-31':
    'The Treaty of Brest-Litovsk (3 March) has taken Russia out of the war and handed Germany the Baltic coast, Ukraine’s grain and the Polish countryside, with 1 million men free for the west. The map still draws one unbroken Russian shape: what Brest-Litovsk gave up is not drawn here, only described in the events of the month.',
  '1918-11-30':
    'The last month of this map. Bulgaria made an armistice on 29 September, the Ottoman Empire on 30 October, and Germany on 11 November; Austria-Hungary has signed at Villa Giusti (3 November) and its German and Hungarian halves have proclaimed republics, so the old shape is shown as dissolved. What this map does NOT show is the peace settlement: Poland, Czechoslovakia, the South Slav state, Finland and the Baltic states were created in these months and have no polygons here, and frontiers of 1919-20 (Saint-Germain, Trianon, Neuilly, Sèvres) lie beyond the timeline.',
};
