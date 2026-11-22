// Turning-point panels for the months in which the WW1 map changes colour.
// The borders never move in this dataset, so every change the map can show is
// a change of status: a state enters the war, is occupied, makes a separate
// peace or signs an armistice. These panels explain each of those changes with
// the real event cards; they never claim the map draws a frontier it cannot.
// Sources are named in the words used by the Sources & how to read tab.

import type { Level } from './types';

export interface TurningPoint {
  id: string;
  /** YYYY-MM key in the WW1 timeline. */
  month: string;
  title: string;
  /** "Why this month matters" — one paragraph per reading level. */
  matters: Record<Level, string>;
  /** "What it did not settle." */
  unsettled: Record<Level, string>;
  /** What the map can and cannot show for this month. */
  mapNote: string;
  /** Ids of event cards that carry the detail. */
  eventIds: string[];
  sources: string[];
}

export const TURNING_POINTS: TurningPoint[] = [
  {
    id: 'war_begins_1914_07',
    month: '1914-07',
    title: 'The war begins, first in the Balkans',
    matters: {
      primary:
        'Austria-Hungary blamed Serbia for the killing of its heir at Sarajevo and declared war on 28 July 1914.',
      secondary:
        'Austria-Hungary’s ultimatum of 23 July was followed by war on Serbia on 28 July and Russian general mobilisation on 31 July; Germany, France and Britain were still at peace.',
      university:
        'Austria-Hungary and Serbia already carry central and entente colours in July, because the first fighting of the war was in the Balkans. The ultimatum was written to be rejected.',
    },
    unsettled: {
      primary: 'Russia moved to help Serbia; no other power had declared war.',
      secondary:
        'The August declarations, and the invasion of Belgium that brought Britain in, lay ahead; the July Crisis begins the war without explaining it.',
      university:
        'How far Germany pushed Vienna, and whether the war was intended, accepted by risk or miscalculated, remains contested; the assassination was a trigger, not a sufficient cause.',
    },
    mapNote:
      'This is the only month in which “At peace” and the two war colours appear together: the colour changes are dated to the last day of the month, so a state that entered war on 28 July is already coloured for it here.',
    eventIds: ['july_ultimatum_serbia', 'war_on_serbia_1914', 'jaures_assassinated'],
    sources: ['Christopher Clark, The Sleepwalkers', 'Hew Strachan, To Arms'],
  },
  {
    id: 'europe_at_war_1914_08',
    month: '1914-08',
    title: 'Five powers at war, and Belgium occupied',
    matters: {
      primary:
        'In one week Germany declared war on Russia and France and invaded Belgium.',
      secondary:
        'Germany declared on Russia on 1 August, on France on 3 August, invaded Belgium on 4 August and brought Britain in that day; Austria-Hungary followed on 6 August.',
      university:
        'August turns the map from a few colours to many, and it is the month the German war plan failed: the invasion of Belgium was meant to take Paris quickly and instead brought Britain in.',
    },
    unsettled: {
      primary: 'Britain then declared war, and most of Belgium was occupied. The war was not over in weeks.',
      secondary:
        'Battles followed at Mons, in Galicia and at Tannenberg; the Marne stopped the German advance in September.',
      university:
        'Two changes cannot be drawn here: the partition of the Polish lands behind the Russian front, and the destruction of the Russian Second Army at Tannenberg.',
    },
    mapNote:
      'The shapes are frozen at July 1914, so the German advance through Belgium cannot appear as a moving front: Belgian and Luxembourgish territory simply changes to the occupation colour from August.',
    eventIds: [
      'invasion_of_belgium_britain_enters',
      'montenegro_enters_war_1914_08',
      'battle_of_the_frontiers_mons',
      'galicia_lemberg_przemysl',
      'tannenberg',
    ],
    sources: ['Hew Strachan, To Arms', 'The official history, Military Operations France and Belgium, 1914'],
  },
  {
    id: 'ottoman_entry_1914_10',
    month: '1914-10',
    title: 'The Ottoman Empire joins the Central Powers',
    matters: {
      primary:
        'German warships in Ottoman service bombarded Russian Black Sea ports on 29 October 1914, and the empire declared war.',
      secondary:
        'The Goeben and Breslau, sold to the Ottoman navy in August, bombarded Russian Black Sea ports on 29 October; Russia declared war on 2 November and Britain and France on 5 November.',
      university:
        'The map dates the change to October, the month of the first shots, not November, the month of the declarations. The decision was taken by a small group inside the Ottoman government.',
    },
    unsettled: {
      primary: 'It was not conquered: its armies fought on for four years.',
      secondary:
        'The Straits closed to Russian grain, and the Dardanelles, Caucasus and Palestine campaigns followed; no single raid settled an empire.',
      university:
        'Whether the Ottoman leaders chose war or were manoeuvred into it by Germany is still argued; the status table records the visible fact, a belligerent from October, without resolving it.',
    },
    mapNote:
      'Ottoman territory changes from neutral to the central colour this month; the map cannot show the Straits, the Caucasus front or the Suez campaign, all of which lie at or beyond its edges.',
    eventIds: ['ottoman_empire_enters_the_war'],
    sources: ['Hew Strachan, To Arms', 'Lawrence Sondhaus, World War I: The Global Revolution'],
  },
  {
    id: 'italy_enters_1915_05',
    month: '1915-05',
    title: 'Italy leaves neutrality for the Entente',
    matters: {
      primary:
        'Italy declared war on Austria-Hungary in May 1915 and attacked across the Isonzo, hoping for Trieste and Trentino.',
      secondary:
        'The Treaty of London of 26 April promised Italy territory for entering the war; war on Austria-Hungary followed on 23 May. Fighting on the Isonzo cost enormous losses for small gains.',
      university:
        'Italy’s entry is the clearest case of the war widening because a government expected a short campaign to buy territory; the frontier drawn here is still the July 1914 one.',
    },
    unsettled: {
      primary: 'Italy had been neutral in 1914, and no land changed hands then.',
      secondary:
        'Twelve battles followed on the Isonzo; Caporetto in 1917 nearly put Italy out, and victory came only in October 1918.',
      university:
        'The Treaty of London was secret, and it conflicted with the nationalities principle the Allies later applied to the Habsburg state; that clash shaped the settlement of 1919.',
    },
    mapNote:
      'Italy changes from the neutral colour to the entente colour in May 1915. The Habsburg frontier does not move: the Trentino and Trieste that Italy sought are still inside Austria-Hungary’s polygon.',
    eventIds: ['italy_enters_the_war', 'first_battles_of_the_isonzo'],
    sources: ['Hew Strachan, To Arms', 'Lawrence Sondhaus, World War I: The Global Revolution'],
  },
  {
    id: 'bulgaria_1915_10',
    month: '1915-10',
    title: 'Bulgaria joins the Central Powers',
    matters: {
      primary:
        'Bulgaria stayed neutral while both sides courted it, then joined the Central Powers and attacked Serbia in October 1915.',
      secondary:
        'Bulgaria declared war on Serbia on 14 October after the Central Powers offered better terms than the Entente; German, Austro-Hungarian and Bulgarian armies attacked from three directions.',
      university:
        'Bulgaria’s decision turned on Macedonia, left unsatisfied by the Balkan Wars of 1912-13. The Entente could not promise it without offending Serbia and Greece, so the Central Powers’ offer of revision won.',
    },
    unsettled: {
      primary: 'Serbia was beaten but not finished: its army survived.',
      secondary:
        'The Serbian army and government withdrew through Albania and were evacuated to Corfu; Salonika became an Allied base, and Bulgaria’s defeat came in September 1918.',
      university:
        'Entry did not settle the national question; it made Bulgaria a client of Germany, whose war aims were never achieved. The map marks the attack, not the alliance signed earlier.',
    },
    mapNote:
      'Bulgaria changes from neutral to the central colour in October 1915. The map shows the Serbian state in the entente colour until November, when occupation changes it — the two colour changes are deliberately one month apart.',
    eventIds: ['bulgaria_enters_war_serbia_invaded'],
    sources: ['Lawrence Sondhaus, World War I: The Global Revolution', 'Hew Strachan, To Arms'],
  },
  {
    id: 'serbia_occupied_1915_11',
    month: '1915-11',
    title: 'Serbia is overrun; the army withdraws to the sea',
    matters: {
      primary:
        'German, Austro-Hungarian and Bulgarian armies overran Serbia in November 1915; the army retreated over the mountains rather than surrender.',
      secondary:
        'Belgrade fell on 9 October, but occupation followed only with the Bulgarian advance from the east in November; the army and government withdrew through Albania in winter, to be evacuated to Corfu.',
      university:
        'The occupation colour marks territory, not the end of the Serbian state: the government survived in exile and the army on Corfu, and Serbia returns to the entente colour in November 1918.',
    },
    unsettled: {
      primary: 'Serbia survived as a state, and the Balkan fighting went on.',
      secondary:
        'Montenegro was overrun in January 1916, an Allied force landed at Salonika, and the Macedonian front lasted until 1918.',
      university:
        'The scale of the retreat is still debated: the figures on the Serbian card come from a single post-war reckoning, not a casualty roll. That the army survived is certain.',
    },
    mapNote:
      'Serbia changes from the entente colour to the occupation colour this month; the map cannot draw the withdrawal through Albania or the Allied base at Salonika.',
    eventIds: ['serbian_retreat_through_albania', 'bulgaria_enters_war_serbia_invaded'],
    sources: ['Lawrence Sondhaus, World War I: The Global Revolution'],
  },
  {
    id: 'montenegro_occupied_1916_01',
    month: '1916-01',
    title: 'Montenegro is occupied',
    matters: {
      primary:
        'Austro-Hungarian forces overran Montenegro in January 1916 after Serbia fell; the government went into exile and the country was occupied.',
      secondary:
        'The army fought a delaying action at Mojkovac on 6-7 January; the capital Cetinje fell on 13 January and the government left for Italy. Austria-Hungary administered Montenegro until 1918.',
      university:
        'Montenegro’s occupation follows directly from Serbia’s: it could not hold out alone once the Serbian army withdrew. The chronology and politics of King Nikola’s surrender are disputed in the sources, as the Mojkovac card sets out.',
    },
    unsettled: {
      primary: 'Occupation did not end the state: its government continued abroad.',
      secondary:
        'Montenegro returns to the entente colour when the occupation ends in November 1918; the argument about who represented the country outlasted the fighting.',
      university:
        'The map’s frozen 1914 geometry cannot show the shifting front inside the country, and one colour for the whole polity conceals areas never fully controlled.',
    },
    mapNote:
      'Montenegro changes from entente to occupation in January 1916, two months after Serbia. Its small polygon keeps the July 1914 shape throughout.',
    eventIds: ['mojkovac'],
    sources: ['Lawrence Sondhaus, World War I: The Global Revolution'],
  },
  {
    id: 'portugal_enters_1916_03',
    month: '1916-03',
    title: 'Portugal enters the war',
    matters: {
      primary:
        'Portugal seized the German ships in its ports in March 1916; Germany declared war and Portugal joined the Entente.',
      secondary:
        'Requisitioning German shipping in Portuguese harbours led Germany to declare war on 9 March 1916; Portugal then seized the vessels and sent troops to Flanders in 1917.',
      university:
        'Portugal’s entry shows neutrality collapsing under economic pressure and the competing claims of the belligerents: the country depended on British sea trade, and its colonies were exposed to German attack.',
    },
    unsettled: {
      primary: 'Portugal gained no land, and the war ran two more years.',
      secondary:
        'The Portuguese Expeditionary Corps suffered a heavy defeat in the Lys offensive of April 1918, and the war strained Portugal’s finances at home.',
      university:
        'The decision was longer and more contested than the map’s single colour change suggests; the coup of December 1917 belongs to the same history as the requisitions of 1916.',
    },
    mapNote:
      'Portugal changes from neutral to entente in March 1916. As with the other colour changes, the country’s shape is the July 1914 one and no battlefield is drawn.',
    eventIds: ['portugal_enters_war'],
    sources: ['The official history of the Great War', 'Lawrence Sondhaus, World War I: The Global Revolution'],
  },
  {
    id: 'romania_enters_1916_08',
    month: '1916-08',
    title: 'Romania enters the war',
    matters: {
      primary:
        'Romania had stayed neutral, hoping to win Transylvania. In August 1916 it joined the Entente and attacked Austria-Hungary.',
      secondary:
        'A secret treaty promised Transylvania; Romania declared war on Austria-Hungary on 27 August 1916 and invaded. By December a mixed Central Powers army had taken Bucharest.',
      university:
        'Romania’s entry is the map’s largest change in 1916 and its clearest limit: the polygon changes colour twice in four months, and the partial occupation is noted, not drawn.',
    },
    unsettled: {
      primary: 'It lost its capital and much of its land, but survived.',
      secondary:
        'The government held Moldavia with Russian help; the army fought at Mărăști and Mărășești in 1917, and Romania re-entered the war in 1918.',
      university:
        'Whether Romania was deceived by Allied promises or misjudged its own army is still argued in Romanian historiography; both accept that the Central Powers could concentrate faster than Russia could reinforce.',
    },
    mapNote:
      'Romania changes from neutral to entente in August 1916, then to occupation in December, then to separate peace in May 1918, then back to entente in November 1918 — four changes, one unchanging shape.',
    eventIds: ['romania_enters_war', 'third_ohl_appointment'],
    sources: ['Hew Strachan, To Arms', 'The official history of the Great War'],
  },
  {
    id: 'bucharest_1916_12',
    month: '1916-12',
    title: 'Bucharest is occupied, Romania holds Moldavia',
    matters: {
      primary:
        'German and allied armies took Bucharest on 6 December 1916; the government and army withdrew to Moldavia, still fighting.',
      secondary:
        'The Romanian attack of 1 December nearly broke the German line but was restored by Ottoman reinforcements, and the government re-established itself at Iași behind Russian forces.',
      university:
        'The occupation colour covers the whole Romanian polygon, which misleads: only the richer, more populous south was occupied, and the army survived to win a defensive campaign in 1917.',
    },
    unsettled: {
      primary: 'Losing its capital did not knock Romania out of the war.',
      secondary:
        'Moldavia stayed in Romanian and Russian hands; Romania made peace in May 1918 and rejoined the Allies days before the armistice.',
      university:
        'Seizing the oilfields helped Germany but did not ease the fuel shortage imposed by the blockade, which is why the occupation was not the victory the German command expected.',
    },
    mapNote:
      'Romania changes from entente to occupation this month; the map cannot show the temporary capital at Iași or the front along the Siret.',
    eventIds: ['bucharest_falls'],
    sources: ['The official history of the Great War'],
  },
  {
    id: 'greece_1917_07',
    month: '1917-07',
    title: 'Greece joins the Entente',
    matters: {
      primary:
        'Greece was neutral and divided: the king wanted to stay out, Venizelos to join the Allies. In 1917 the king was forced out.',
      secondary:
        'Constantine abdicated on 11 June 1917 under Allied pressure, Venizelos returned to power, and Greece declared war on 2 July; Salonika was the base of the Macedonian front.',
      university:
        'The Greek decision shows how a neutral state can lose its freedom of action: Allied pressure, an Allied army on Greek soil and the royalist-Venizelist split together ended the armed neutrality of 1914.',
    },
    unsettled: {
      primary: 'Joining won Greece no land at once.',
      secondary:
        'The Macedonian front stayed quiet until the Vardar offensive of September 1918; the gains Greece sought were settled at the postwar conferences.',
      university:
        'The national schism outlasted the war and shaped Greek politics for a generation; one colour change hides a deeply divided country.',
    },
    mapNote:
      'Greece changes from neutral to entente in July 1917; the Allied base at Salonika has no polygon of its own on this map.',
    eventIds: ['greece_enters_war'],
    sources: ['Lawrence Sondhaus, World War I: The Global Revolution'],
  },
  {
    id: 'russia_out_1917_12',
    month: '1917-12',
    title: 'Russia stops fighting',
    matters: {
      primary:
        'After the Bolsheviks took power, Russia signed an armistice with Germany on 15 December 1917.',
      secondary:
        'The armistice of Brest-Litovsk was signed on 15 December 1917; the Bolsheviks needed peace to consolidate power. Finland declared independence on 6 December, recognised on the 31st.',
      university:
        'The separate peace is one of the war’s decisive changes: it released German divisions for the west and turned the east into a patchwork of new states that have no polygons here.',
    },
    unsettled: {
      primary: 'The east paused rather than ended: the peace treaty was still to come.',
      secondary:
        'The treaty followed on 3 March 1918; the Baltic lands, Poland, Ukraine and Finland had revolutions and wars before any frontier was settled.',
      university:
        'Whether the Bolsheviks had any choice in March 1918 is a real argument: the German army was advancing, and fighting on with a disintegrating army might have been worse.',
    },
    mapNote:
      'Russia changes to the separate-peace colour in December 1917. The map still draws one unbroken Russian polygon: Finland, Poland, Ukraine and the Baltic states appear only in the event cards.',
    eventIds: ['armistice_russia_central_powers', 'october_revolution', 'finland_declares_independence'],
    sources: ['The official history of the Great War'],
  },
  {
    id: 'brest_litovsk_1918_03',
    month: '1918-03',
    title: 'The Treaty of Brest-Litovsk',
    matters: {
      primary:
        'Russia made peace with Germany in March 1918, giving up Poland, the Baltic lands and Ukraine.',
      secondary:
        'The treaty of 3 March 1918 ended Russia’s war on Germany’s terms: Ukraine, the Baltic lands and Poland passed to German control, freeing about a million soldiers for the west.',
      university:
        'Brest-Litovsk is the clearest case of the eastern and western fronts being one war: the settlement that ended Russia’s participation made the German spring offensive in France possible within weeks.',
    },
    unsettled: {
      primary: 'Germany moved soldiers west; the treaty brought no peace to the lands it took.',
      secondary:
        'The spring offensives failed by July and Brest-Litovsk was annulled in November; the new states were settled only in 1919-20.',
      university:
        'Soviet accounts long treated the treaty as a necessary retreat; others call it a disastrous capitulation. Both accept that it changed the strategic balance for a few months in 1918.',
    },
    mapNote:
      'Russia keeps the separate-peace colour; the map cannot show the lands Brest-Litovsk gave up, because its Russian polygon is fixed at July 1914.',
    eventIds: ['treaty_brest_litovsk', 'operation_faustschlag'],
    sources: ['The official history of the Great War'],
  },
  {
    id: 'bucharest_1918_05',
    month: '1918-05',
    title: 'Romania signs the Treaty of Bucharest',
    matters: {
      primary:
        'In May 1918 defeated Romania made peace with Germany; abandoned by Russia, it could not go on fighting.',
      secondary:
        'The treaty of 7 May was signed under occupation: Southern Dobruja passed to Bulgaria, Austria-Hungary took Carpathian frontier rights, and Romanian oil came under German control.',
      university:
        'Bucharest belongs with Brest-Litovsk among the separate peaces of 1918: with Russia gone, the occupation of Wallachia was converted into a treaty, and its grain and oil were to carry the German offensive in the west.',
    },
    unsettled: {
      primary:
        'Romania never accepted the treaty, and fought again on 10 November 1918.',
      secondary:
        'Parliament ratified it in the summer of 1918, but Ferdinand refused to sign; the treaty was denounced in October and Romania fought again on 10 November.',
      university:
        'Romanian historiography still divides over whether signing saved the state or betrayed it; the economic clauses were never fully implemented and lapsed with Germany’s defeat.',
    },
    mapNote:
      'Romania changes to the separate-peace colour in May 1918 and back to the entente in November. The land it gave up is not drawn: the polygons are fixed at July 1914, so Dobruja, the Carpathian frontier and the occupied part of Wallachia, are described here rather than shown.',
    eventIds: ['treaty_of_bucharest_1918', 'third_battle_of_the_aisne'],
    sources: [
      'Holger H. Herwig, The First World War: Germany and Austria-Hungary, 1914–1918',
      'Lawrence Sondhaus, World War I: The Global Revolution',
    ],
  },
  {
    id: 'bulgaria_armistice_1918_09',
    month: '1918-09',
    title: 'Bulgaria makes an armistice',
    matters: {
      primary:
        'Allied armies broke through in Macedonia in September 1918 and Bulgaria asked for peace, the first Central Power to leave the war.',
      secondary:
        'The Vardar offensive of 15 September broke the Bulgarian front; the armistice of Thessaloniki was signed on 29 September and Ferdinand abdicated on 3 October.',
      university:
        'Bulgaria’s collapse begins the end for the Central Powers: within weeks the Ottomans, then Germany and Austria-Hungary, had made armistices, and the German High Command told the Kaiser there was no military prospect of victory.',
    },
    unsettled: {
      primary: 'Fighting went on for nearly two more months.',
      secondary:
        'The Ottoman armistice followed on 30 October, Austria-Hungary’s on 3 November and Germany’s on 11 November; the peace treaties came in 1919 and 1920.',
      university:
        'The map can show Bulgaria in the armistice colour, but not the new states and frontier disputes the defeat set in motion.',
    },
    mapNote:
      'Bulgaria changes to the armistice colour and Albania to at peace in September 1918; the Vardar front and the retreat through Macedonia are carried by the events, not drawn on the map.',
    eventIds: ['vardar_offensive_bulgaria_collapse', 'battle_of_megiddo'],
    sources: ['Lawrence Sondhaus, World War I: The Global Revolution'],
  },
  {
    id: 'war_ends_1918_11',
    month: '1918-11',
    title: 'The armistices and the end of the old empires',
    matters: {
      primary:
        'Germany signed an armistice on 11 November 1918, after Austria-Hungary on 3 November and the Ottomans on 30 October.',
      secondary:
        'Bulgaria (29 September), the Ottomans (30 October), Austria-Hungary (3 November) and Germany (11 November) left the war. Republics were proclaimed in German-Austria and Hungary on 12 and 16 November.',
      university:
        'The last month’s colour changes are the visible edge of a revolution in Europe’s map: Poland, Czechoslovakia, the South Slav state, Finland and the Baltic states were proclaimed inside polygons they do not have.',
    },
    unsettled: {
      primary: 'Fighting stopped, but the borders were unsettled and hardship went on.',
      secondary:
        'Frontiers were settled later by the treaties of Saint-Germain, Trianon, Neuilly, Sèvres and Versailles; famine and influenza ran into 1919.',
      university:
        'The armistice was not a peace settlement, and the borders shown here are not the map of postwar Europe; the new states are described in events, not drawn.',
    },
    mapNote:
      'The last month changes more colours than any other: Germany, the Ottoman Empire and Austria-Hungary reach the armistice or dissolved colour, while Belgium, Serbia, Montenegro and Romania return to entente. The frontier lines are still those of July 1914 — the successor states have no polygons here.',
    eventIds: [
      'armistice_of_11_november_1918',
      'battle_of_vittorio_veneto',
      'german_revolution_of_november_1918',
      'luxembourg_evacuated_1918_11',
    ],
    sources: ['Hew Strachan, To Arms', 'The official history of the Great War'],
  },
];

/** The panel for a timeline month, if the map changes that month. */
export function turningPointFor(monthKey: string): TurningPoint | undefined {
  return TURNING_POINTS.find((t) => t.month === monthKey);
}
