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
        'Austria-Hungary was angry with Serbia after the killing of its heir, Archduke Franz Ferdinand, in Sarajevo. On 28 July it declared war. Russia began to get ready to help Serbia.',
      secondary:
        'The ultimatum of 23 July was followed by Austria-Hungary’s declaration of war on Serbia on 28 July; Russia ordered general mobilisation on 31 July. Germany, France and Britain were still formally at peace as July ended, although the crisis had already brought Europe to the edge.',
      university:
        'The map shows Austria-Hungary and Serbia already in the central and entente colours in July because the first shot of the war was fired in the Balkans. That is a deliberate choice: the ultimatum was written to be rejected, and how far Germany pushed Vienna is the central argument about the July Crisis, which rests heavily on documents published after 1918.',
    },
    unsettled: {
      primary: 'The other big countries had not declared war yet. Nobody knew how big the war would become.',
      secondary:
        'The declarations of the first days of August, the invasion of Belgium and Britain’s entry were still ahead. The July Crisis is the start of the war, not the whole explanation of it.',
      university:
        'Whether the war was intended, accepted by risk or the result of miscalculation remains contested; what is certain is that the assassination was a trigger, not a sufficient cause, and that the Balkan War of 1912-13 had already changed the balance in the region.',
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
        'In one week Germany declared war on Russia and France, invaded Belgium and Luxembourg, and Britain declared war on Germany. Russia and France were now on Britain’s side, and most of Belgium was under German occupation.',
      secondary:
        'Germany declared war on Russia on 1 August and France on 3 August, invaded Luxembourg on 2 August and Belgium on 4 August; Britain declared war the same day and Austria-Hungary followed on 6 August. Montenegro joined Serbia. By the end of the month the German army had occupied most of Belgium and Luxembourg, and the first great battles had been fought at Mons, in Galicia and at Tannenberg.',
      university:
        'The month that turns the map from a few colours to many is the month in which the German war plan failed: the invasion of Belgium was intended to bypass French defences and take Paris in weeks, and instead it brought Britain into the war and led to the Marne. Italy, Romania, Greece and Bulgaria all chose neutrality in August, which is why they keep the neutral colour despite being on the map.',
    },
    unsettled: {
      primary: 'The war was not over in a few weeks, and the German army had not reached Paris.',
      secondary:
        'The First Battle of the Marne in September stopped the advance, and the Race to the Sea that followed created the continuous front that would hold for three years.',
      university:
        'The two most important changes of August cannot be drawn on this map: the division of the Polish lands between the great empires behind the Russian front, and the destruction of the Russian Second Army at Tannenberg inside what the map draws as one German and one Russian shape.',
    },
    mapNote:
      'The shapes are frozen at July 1914, so the German advance through Belgium cannot appear as a moving front: Belgian and Luxembourgish territory simply changes to the occupation colour from August.',
    eventIds: [
      'invasion_of_belgium_britain_enters',
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
        'Two German warships in Ottoman service bombarded Russian ports on the Black Sea on 29 October. The Ottoman Empire was now part of the war, and fighting began in the Caucasus and near the Suez Canal.',
      secondary:
        'The Goeben and Breslau, nominally sold to the Ottoman navy in August, bombarded Odessa, Sevastopol and other Russian ports on 29 October; Russia declared war on 2 November, and Britain and France on 5 November. The Straits were closed to Russian grain and the Middle East became a theatre of the war.',
      university:
        'The map dates the change to October, the month of the first shots, rather than November, the month of the declarations; the card says so. The decision was taken by a small group inside the Ottoman government, and the wider consequences — the Armenian genocide of 1915 and the collapse of the empire in 1918 — were not contained in the Black Sea raid.',
    },
    unsettled: {
      primary: 'The Ottoman Empire was not conquered in 1914; its armies kept fighting for four years.',
      secondary:
        'The Dardanelles campaign, the Caucasus campaign, the Arab Revolt and the Palestine campaign all followed. No single raid settled the fate of the empire, and Gallipoli was still a year away.',
      university:
        'Whether the Ottoman leaders chose war or were manoeuvred into it by Germany is still argued; the status table records the visible fact — a belligerent from October — without resolving that argument.',
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
        'Italy had stayed out of the war in 1914. In May 1915 it declared war on Austria-Hungary and attacked across the Isonzo frontier, hoping to win Trieste and Trentino.',
      secondary:
        'The Treaty of London of 26 April promised Italy territory in the north-east and elsewhere in return for entering the war; Italy declared war on Austria-Hungary on 23 May. The fighting that followed on the Isonzo cost enormous numbers of lives for very small gains.',
      university:
        'Italy’s entry is the clearest example in 1915 of the war widening because governments believed a short campaign could buy territory. The frontier on this map is the July 1914 frontier: the lands Italy was promised still sit inside the Habsburg shape, which is exactly what Italy was fighting to change.',
    },
    unsettled: {
      primary: 'Italy did not win the war quickly, and no land changed hands in this month.',
      secondary:
        'Twelve battles on the Isonzo followed; Caporetto in 1917 nearly put Italy out of the war, and victory came only in October 1918.',
      university:
        'The Treaty of London was secret and conflicted with the nationalities principle that the Allies later applied to Austria-Hungary; the argument between those two commitments shaped the settlement of 1919.',
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
        'Bulgaria had stayed neutral while both sides courted it. In October 1915 it joined Germany and Austria-Hungary and attacked Serbia from the east.',
      secondary:
        'Bulgaria declared war on Serbia on 14 October after the Central Powers offered better terms than the Entente. German, Austro-Hungarian and Bulgarian armies attacked from three directions, and Serbia’s army and government withdrew south-west through Albania.',
      university:
        'Bulgaria’s decision was driven above all by the unresolved national question in Macedonia, which the Balkan Wars of 1912-13 had left unsatisfied. The Entente could not promise what Bulgaria wanted without alienating Serbia and Greece, which is why the Central Powers’ offer of territorial revision won.',
    },
    unsettled: {
      primary: 'Serbia was beaten but not finished; its army survived to fight again.',
      secondary:
        'The survivors were evacuated to Corfu and re-formed; Salonika became an Allied base, and Bulgaria’s own defeat came only in September 1918.',
      university:
        'Entry into the war did not give Bulgaria a quick settlement of the national question; it made the country a client of Germany whose own war aims were never fully achieved.',
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
        'German, Austro-Hungarian and Bulgarian armies took Belgrade and overran Serbia in November 1915. The government and army retreated over the mountains instead of surrendering.',
      secondary:
        'Belgrade fell on 9 October, but the country was not fully occupied until the Bulgarian advance from the east in November; the Serbian army and government withdrew through Albania in winter conditions, with heavy losses, and were evacuated to Corfu by Allied ships.',
      university:
        'The occupation colour on this map marks a fact about territory, not the end of the Serbian state: the government survived in exile, the army survived on Corfu, and Serbia returned to the entente colour in November 1918.',
    },
    unsettled: {
      primary: 'Serbia was not finished as a country, and the fighting in the Balkans continued.',
      secondary:
        'Montenegro was overrun in January 1916; an Allied force landed at Salonika, and the front in Macedonia stayed alive until the Bulgarian collapse of 1918.',
      university:
        'The scale of the retreat is still debated, and the figures in the Serbian card come from a single post-war reckoning rather than a full casualty roll. What is certain is that the army survived as a fighting force.',
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
        'Austro-Hungarian forces crossed Montenegro in January 1916 after Serbia had been overrun. The government went into exile, and the country was occupied for the rest of the war.',
      secondary:
        'The army fought a delaying action at Mojkovac on 6-7 January, then the capital Cetinje fell on 13 January and the government left for Italy. Montenegro was administered by Austria-Hungary until 1918.',
      university:
        'Montenegro’s occupation follows directly from Serbia’s: it could not hold out alone once the Serbian army had withdrawn. The chronology and the politics of King Nikola’s surrender are disputed in the sources, which the Mojkovac card sets out.',
    },
    unsettled: {
      primary: 'The occupation did not end the Montenegrin state; its government continued abroad.',
      secondary:
        'Montenegro returned to the entente colour in November 1918, when the occupation ended; the argument about who represented the country after the war outlasted the fighting.',
      university:
        'The map’s frozen 1914 geometry cannot show the shifting front inside the country, and a single colour for the whole polity conceals areas that were never fully controlled.',
    },
    mapNote:
      'Montenegro changes from entente to occupation in January 1916, one month after Serbia. Its small polygon keeps the July 1914 shape throughout.',
    eventIds: ['mojkovac'],
    sources: ['Lawrence Sondhaus, World War I: The Global Revolution'],
  },
  {
    id: 'portugal_enters_1916_03',
    month: '1916-03',
    title: 'Portugal enters the war',
    matters: {
      primary:
        'Portugal had been neutral, but after Germany seized German-owned ships in Portuguese ports Germany declared war in March 1916. Portugal joined the Entente and later sent troops to France.',
      secondary:
        'The requisitioning of German shipping in Portuguese harbours under Allied pressure led Germany to declare war on 9 March 1916. Portugal replied by seizing German vessels and joined the Allied war effort; the Portuguese Expeditionary Corps reached Flanders in 1917.',
      university:
        'Portugal’s entry was a case of neutrality collapsing under economic pressure and the competing claims of the belligerents: the country depended on British sea trade but its colonies were exposed to German attack. The decision was longer and more contested than the map’s single colour change suggests.',
    },
    unsettled: {
      primary: 'Portugal did not win land or end the war by entering it; the fighting went on for two more years.',
      secondary:
        'The Portuguese Expeditionary Corps suffered a severe defeat in the Lys offensive of April 1918, and Portugal’s war effort strained its finances and politics at home.',
      university:
        'The war exposed the weakness of the Portuguese Republic, contributing to the political instability of 1917-18; the coup of December 1917 belongs to the same history as the shipping requisitions of 1916.',
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
        'Romania had stayed neutral, hoping to win Transylvania. In August 1916 it joined the Entente and attacked into Austria-Hungary.',
      secondary:
        'A secret treaty with the Entente in mid-August promised Transylvania; Romania declared war on Austria-Hungary on 27 August and invaded. By December a combined German, Austro-Hungarian, Bulgarian and Ottoman army had taken Bucharest.',
      university:
        'Romania’s entry is the largest single change of the map in 1916 and also the clearest example of its limits: the polygon changes colour twice in four months, while the occupation of only the richer southern half of the country is described in a note, not drawn.',
    },
    unsettled: {
      primary: 'Romania lost its capital and much of its land, but its army and government survived.',
      secondary:
        'The government held Moldavia with Russian help; the army recovered sufficiently to win at Mărăști and Mărășești in 1917, and Romania re-entered the war in 1918.',
      university:
        'Whether Romania was deceived by Allied promises or misjudged its own army remains a live argument in Romanian historiography. Both explanations accept the underlying fact that the Central Powers could concentrate forces faster than Russia could reinforce its ally.',
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
        'German and allied armies entered Bucharest on 6 December 1916. The Romanian government and army went east to Moldavia and kept fighting.',
      secondary:
        'The Romanian attack of 1 December nearly broke the German line but was restored by Ottoman reinforcements; Bucharest and the oilfields were taken on 6 December. The government re-established itself at Iași behind Russian forces.',
      university:
        'The occupation colour covers the whole Romanian polygon, which is misleading in a precise sense: only the richer and more populous part of the country was occupied, and the army survived to win a defensive campaign in 1917.',
    },
    unsettled: {
      primary: 'Romania was not knocked out of the war by losing its capital.',
      secondary:
        'Moldavia remained in Romanian and Russian hands; Romania made a separate peace in May 1918 after Russia had collapsed, and rejoined the Allies in the last days of the war.',
      university:
        'The seizure of the oilfields was a strategic gain for Germany, but it did not solve the shortage of fuel and raw materials that the blockade was imposing, which is why the occupation was not the victory the German command expected.',
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
        'Greece had been neutral and divided between its king, who wanted to stay out, and its prime minister, who wanted to join the Allies. In 1917 the king was forced out and Greece entered the war.',
      secondary:
        'Constantine abdicated on 11 June 1917 under Allied pressure, Venizelos returned to power, and Greece declared war on the Central Powers on 2 July. Salonika, already an Allied base, became the base for the Macedonian front.',
      university:
        'The Greek decision shows how a neutral state could lose its freedom of action: Allied pressure, the presence of an Allied army on Greek soil and the domestic split between royalists and Venizelists together ended the armed neutrality of 1914.',
    },
    unsettled: {
      primary: 'Joining the war did not immediately win any land back for Greece.',
      secondary:
        'The Macedonian front stayed quiet until the Vardar offensive of September 1918; the territorial gains Greece sought were settled at the peace conferences after the war.',
      university:
        'The national schism between royalists and Venizelists outlasted the war and shaped Greek politics for a generation; the colour change on the map conceals a deeply divided country.',
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
        'After the Bolsheviks took power, Russia signed an armistice with Germany on 15 December 1917. The Russian army stopped fighting, and the war in the east was over for a time.',
      secondary:
        'The armistice of Brest-Litovsk was signed on 15 December and negotiations for a treaty began in the same month; the Bolsheviks needed peace to consolidate power at home. Finland declared independence on 6 December, recognised by Soviet Russia on 31 December.',
      university:
        'The separate peace is one of the decisive changes of the war: it released German divisions for the western front in 1918 and transformed the map’s eastern half into a patchwork of new states that this dataset has no polygons for.',
    },
    unsettled: {
      primary: 'The fighting did not end everywhere, and the peace treaty was still to be signed.',
      secondary:
        'The Treaty of Brest-Litovsk followed on 3 March 1918; the Baltic, Poland, Ukraine and Finland all went through revolutions and wars of their own before any frontier was settled.',
      university:
        'Whether the Bolsheviks had any choice in March 1918 is a real argument: the German army was advancing, and the alternative — continued war with a disintegrating army — might have been worse. The map records the armistice colour from December without deciding that question.',
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
        'Russia signed a peace treaty with Germany in March 1918. It gave up Poland, the Baltic lands and Ukraine, and Germany could move soldiers west.',
      secondary:
        'The treaty of 3 March ended Russia’s war with the Central Powers on Germany’s terms: farmland in Ukraine and the Baltic, and the Polish countryside, passed to German control or influence, freeing about a million soldiers for the western front.',
      university:
        'Brest-Litovsk is the clearest case of the war’s eastern and western fronts being one war: the settlement that ended Russia’s participation made the German spring offensive in France possible within weeks.',
    },
    unsettled: {
      primary: 'The treaty did not bring peace to eastern Europe; fighting went on in many of those lands.',
      secondary:
        'The German spring offensives failed by July, and Brest-Litovsk was annulled by Germany’s defeat in November; the independent states that emerged were settled only in the peace treaties of 1919-20.',
      university:
        'Soviet accounts long treated the treaty as a necessary retreat; the opposing view holds that it was a disastrous capitulation. Both accept that it fundamentally changed the strategic balance for a few months in 1918.',
    },
    mapNote:
      'Russia keeps the separate-peace colour; the map cannot show the lands Brest-Litovsk gave up, because its Russian polygon is fixed at July 1914.',
    eventIds: ['treaty_brest_litovsk', 'operation_faustschlag'],
    sources: ['The official history of the Great War'],
  },
  {
    id: 'bulgaria_armistice_1918_09',
    month: '1918-09',
    title: 'Bulgaria makes an armistice',
    matters: {
      primary:
        'Allied armies broke through in Macedonia in September 1918, and Bulgaria asked for peace. It was the first of the Central Powers to leave the war.',
      secondary:
        'The Vardar offensive of 15 September broke the Bulgarian front; the armistice of Thessaloniki was signed on 29 September and King Ferdinand abdicated on 3 October. Germany now had to cover the Balkans with its own troops.',
      university:
        'Bulgaria’s collapse is the beginning of the end for the Central Powers: within weeks the Ottoman Empire and then Germany and Austria-Hungary had made armistices, and the German High Command told the Kaiser that there was no longer any military prospect of victory.',
    },
    unsettled: {
      primary: 'The war did not stop at once: fighting continued for nearly two more months.',
      secondary:
        'The Ottoman armistice followed on 30 October, Austria-Hungary’s on 3 November and Germany’s on 11 November; the peace treaties were signed in 1919 and 1920.',
      university:
        'The map can show Bulgaria in the armistice colour and Albania returning to at peace, but not the new states or the frontier disputes that the Bulgarian defeat set in motion.',
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
        'Germany signed an armistice on 11 November, ending the fighting. Austria-Hungary had already signed one on 3 November, and its government had broken into separate republics. The Ottoman Empire had signed on 30 October.',
      secondary:
        'Bulgaria (29 September), the Ottoman Empire (30 October), Austria-Hungary (3 November) and Germany (11 November) each left the war in turn. German-Austria and Hungary proclaimed republics on 12 and 16 November; Serbia, Belgium and others returned to their pre-war colours.',
      university:
        'The last month’s many colour changes are the visible edge of a revolution in the map of Europe: Poland, Czechoslovakia, the South Slav state, Finland and the Baltic states were proclaimed inside the old polygons but have none of their own here.',
    },
    unsettled: {
      primary: 'The fighting stopped, but the borders were not settled yet, and many people were still suffering.',
      secondary:
        'The peace treaties of 1919-20 — Saint-Germain, Trianon, Neuilly, Sèvres and Versailles — settled the frontiers after this timeline ends; famine and the influenza pandemic continued into 1919.',
      university:
        'The armistice was not a peace settlement, and the maps of 1914 on this site must not be read as a picture of Europe after the war. The created states are described in the events; drawing their frontiers from a later atlas would be a different map.',
    },
    mapNote:
      'The last month changes more colours than any other: Germany, the Ottoman Empire and Austria-Hungary reach the armistice or dissolved colour, while Belgium, Serbia, Montenegro and Romania return to entente. The frontier lines are still those of July 1914 — the successor states have no polygons here.',
    eventIds: [
      'armistice_of_11_november_1918',
      'battle_of_vittorio_veneto',
      'german_revolution_of_november_1918',
    ],
    sources: ['Hew Strachan, To Arms', 'The official history of the Great War'],
  },
];

/** The panel for a timeline month, if the map changes that month. */
export function turningPointFor(monthKey: string): TurningPoint | undefined {
  return TURNING_POINTS.find((t) => t.month === monthKey);
}
