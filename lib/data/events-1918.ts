import type { WW1Event } from './types';

// January to November 1918: the year the war ended on the mainland and in the Near East.
// Sources checked page by page in November 2026 (plain-text extracts and section-0
// infobox wikitext from the English Wikipedia API). Conflicting figures are given as a
// range or named in `note`; nothing here is written from memory.
export const EVENTS_1918: WW1Event[] = [
  {
    id: 'wilson_fourteen_points',
    date: '1918-01-08',
    precision: 'day',
    kind: 'politics',
    title: 'Wilson sets out the Fourteen Points',
    fronts: ['politics'],
    countries: ['United States', 'Germany', 'France', 'United Kingdom', 'Russia'],
    figures: ['wilson_us', 'loyd_george'],
    levels: {
      primary: {
        cause: 'Since August 1914 no government had said how the war should end. In late 1917 the Bolsheviks ' +
          'called for peace without taking land or money, and published the tsar’s secret treaties. Those ' +
          'papers showed the Allies had promised each other pieces of other empires.',
        what: 'On 8 January 1918 President Woodrow Wilson read Congress fourteen points for peace: no secret ' +
          'treaties, free seas, colonies judged fairly, Germany to leave the land it took, ' +
          'Alsace-Lorraine back to France, Poland its own state, and all nations in one league.',
        consequence:
          'The points were read out in the newspapers of both sides. Exhausted people on either side of the front heard a peace they could accept. When Germany asked for an armistice in October, it asked on the basis of these points.',
      },
      secondary: {
        cause:
          'Wilson had kept the United States neutral partly because a settlement with no victors seemed possible. By January 1918 the Bolsheviks had seized the argument about peace: their December decree called for self-determination without annexations, and their publication of the Sykes–Picot and other agreements discredited the old diplomacy. Wilson’s advisers, especially the research group known as the Inquiry, had been drafting a statement of war aims. British and French leaders wanted the German fleet, colonies and indemnity, and wanted to say so before Wilson said it first.',
        what:
          'Three days before Wilson, Lloyd George gave a speech at the Mansion House in London that also called for a league of nations, but demanded reparations and the German colonies. Wilson’s message to Congress on 8 January set out the Fourteen Points in order. The first five were general: open covenants, freedom of the seas, removal of economic barriers, reduction of armaments, and an adjustment of colonial claims. The rest were specific, dealing with the evacuations and frontier questions affecting Russia, Belgium, France, Italy, the peoples of Austria-Hungary, Romania, Serbia and Montenegro, the Ottoman parts, and Poland. Points thirteen and fourteen, on an independent Poland with free and secure access to the sea and a general association of nations, were the two that would outlive the rest. Wilson presented them as the terms the United States would fight for and would accept as a peace. He did not consult the French and British cabinets in detail beforehand.',
        consequence: 'The points split the camps. For the Allies they were war aims; for the Central Powers they ' +
          'were a possible exit. In Germany the phrase without annexations and indemnities, which the ' +
          'Reichstag had used in July 1917, came back through Wilson rather than the social democrats. In ' +
          'October 1918 the German government asked for an armistice on this basis, and Prince Max of ' +
          'Baden’s notes to Wilson were answered by three American notes which added disarmament and ' +
          'evacuation before talks. Germany accepted, then complained for a century that the treaty it ' +
          'signed in 1919 ignored the points.',
      },
      university: {
        cause:
          'The historiography treats the speech as an act of propaganda in a competition for legitimacy, not as a peace plan. Arno Mayer cast 1917–1918 as a duel between Wilson and Lenin for the imaginary centre of the world, and in that reading the Fourteen Points are a response to Bolshevism before they are a blueprint. E. M. House and the Inquiry supplied the detail; the idealism was staffed.',
        what:
          'Read closely the points are uneven: one to five are a programme for a new diplomacy, six to thirteen are a list of Allied war aims dressed in general terms, and only fourteen is genuinely new. Sally Marks has argued against the assumption that the postwar world simply betrayed them — she notes that it was German diplomats, not the French, who first read the later war-guilt clause as a statement of responsibility, and that reparations were a separate and later settlement.',
        consequence:
          'The durable effects were self-determination applied selectively, since the points promised Poland a seaport while letting Italy have Trentino and leaving the rump states of Austria-Hungary to be argued out later; and the League of Nations without the United States in it. Historians still dispute whether the German grievance of 1919 — that an armistice had been granted on the Fourteen Points and then discarded — had any basis in the documents, or was a political myth built after the fact.',
      },
    },
    note: 'Speech to a joint session of Congress, 8 January 1918. Lloyd George’s similar Mansion House speech, which demanded reparations, was 5 January 1918. Source checked: English Wikipedia, “Fourteen Points”.',
  },
  {
    id: 'german_january_strikes_1918',
    date: '1918-01-28',
    precision: 'day',
    kind: 'revolution',
    title: 'Strike wave across Germany and Austria',
    fronts: ['home', 'politics'],
    countries: ['Germany', 'Austria-Hungary'],
    figures: ['scheidemann', 'luxemburg_rosa'],
    levels: {
      primary: {
        cause: 'Food was short in German cities, and the worst winter cut bread and potato rations to the ' +
          'bone. Men were still sent to the front in huge numbers while governments talked of ' +
          'annexations. Austrian workers struck in January over food and peace, and spread north.',
        what: 'Strikes hit Austria-Hungary on 3 January and Berlin on 28 January. About 400,000 workers ' +
          'stopped work; half a million were out. They wanted peace, food and votes. Up to 50,000 ' +
          'strikers went to the front; the strike ended on 3 February.',
        consequence:
          'The strike did not stop the war, and its leaders were arrested. It did force the governments to look again at their war aims, and it showed the army and the politicians that the home front could no longer be held by rationing and police.',
      },
      secondary: {
        cause:
          'German workers had been promised a peace without annexations by the Reichstag majority in July 1917, and nothing had come of it. The blockade had cut imports of food and fertiliser since 1914, the bad harvest of 1916–1917 had produced the Turnip Winter, and by 1918 the civilian diet was short of fat and protein. The October Revolution raised the expectations of the socialist left, and the talks at Brest-Litovsk made peace feel near. Strikes had been rising since 1916: 50,000 out in Berlin in June 1916 over the jailing of Karl Liebknecht, and bread riots in Berlin and Leipzig in April 1917 that the government answered with military force. The workers’ councils that the 1916 Auxiliary National Services Law had allowed in the larger factories became the machinery of the strike. The Spartacus group, whose best-known leaders Liebknecht and Rosa Luxemburg were in prison and whose Berlin organisation was run by Leo Jogiches, wanted a global revolution; the majority social democrats wanted pressure on the government instead of a rising.',
        what: 'The Austrian Jännerstreik spread across Austria-Hungary between 3 and 25 January, and ' +
          'triggered the Januarstreik, running from 25 January to 1 February. The Independent Social ' +
          'Democrats (USPD) called it, and the Revolutionary Stewards under Richard Müller delivered it ' +
          'in the factories. Its demands were peace without annexations, food relief, democratic reform. ' +
          'Over a million workers took part. The government banned the strike committee on 29 January; on ' +
          '1 February the army threatened martial law and conscripted up to 50,000 strikers for the ' +
          'front. It ended on 3 February.',
        consequence:
          'The military command drew the conclusion that the home front had to be policed harder and that the army still held the country. The social democrats drew the opposite conclusion, that reform had to be bargained with the army before the streets decided. Both readings came true in November 1918. Ludendorff later treated the strikes as proof of a stab in the back; postwar research found a strike movement about food and peace, not a plot.',
      },
      university: {
        cause:
          'The strike sits in a long argument about whether the home front or the front line ended the war. Ludendorff’s memoirs and the nationalist stab-in-the-back literature dated the collapse from these months; social democratic writers answered that the army itself asked for an armistice in September 1918 while the factories were quiet.',
        what:
          'A related argument concerns hunger. The German government’s own Board of Public Health reported 762,796 deaths above normal for the war years at the end of 1918, a figure long used as proof that the blockade starved Germany. A 1928 Carnegie study cut the number to about 424,000, and a 1940 Carnegie revision put it above 600,000; Jay Winter reckons roughly 300,000 excess deaths once the influenza mortality is subtracted, and N. P. Howard 474,085 including influenza with about 100,000 of those falling after the armistice, when food imports resumed. Alan Kramer finds German excess mortality of about one per cent of the population against 1.3 per cent in Britain and calls the German Board figure a document of quivering nationalist hatred. The honest position is a range, not a number.',
        consequence:
          'The careful conclusion is that blockade malnutrition weakened Germany and shaped its politics without producing famine death on the Belgian or Chinese scale, and that the worst of the food crisis lay in the Turnip Winter of 1916–1917 rather than 1918. The same caution applies to the claim that German civilians were deliberately starved: the blockade was legal and indiscriminate, and its continuation after 11 November 1918 is the part of the case that has real force.',
      },
    },
    note: 'The Austrian Jännerstreik ran 3 – 25 January 1918 and preceded the German strike, which lasted 25 January – 1 February, began in Berlin on 28 January and was called off on 3 February. 400,000 out in Berlin on the first day and half a million by that night; over a million at the height across the industrial regions; up to 50,000 strikers conscripted to the front. Blockade death toll estimates range from about 300,000 (Winter, influenza subtracted) and 424,000 (Carnegie 1928) to 474,085 (Howard, influenza included) and 762,796 (German Board of Public Health, 1918). Source checked: “German strike of January 1918”, “Blockade of Germany (1914–1919)”.',
  },
  {
    id: 'operation_faustschlag',
    date: '1918-02-18',
    precision: 'day',
    kind: 'offensive',
    title: 'Eleven days: the German drive into the Baltic and Ukraine',
    fronts: ['eastern'],
    countries: ['Germany', 'Russia', 'Ukraine', 'Finland', 'Austria-Hungary'],
    figures: ['kuhlmann', 'trotsky', 'lenin', 'mannerheim_carl'],
    levels: {
      primary: {
        cause: 'Talks between the Central Powers and Soviet Russia had stopped. Trotsky announced that Russia ' +
          'would sign no treaty but end the war and demobilise. Germany refused. Germany wanted the grain ' +
          'of Ukraine, which the Ukrainian People’s Republic had promised for recognition on 9 February.',
        what: 'On 18 February German armies swept the eastern front. Almost no one fought them: Russian ' +
          'soldiers had gone home. Daugavpils fell on day one, Minsk three days later, Kiev on 2 March, ' +
          'and the front came within 160 km of Petrograd.',
        consequence: 'Russia surrendered what it had refused a fortnight earlier. In Finland, where the civil war ' +
          'had begun in late January, Germany landed troops to take the south coast and Helsinki, and its ' +
          'promise helped make the Soviets sign the peace of Brest-Litovsk on 3 March.',
      },
      secondary: {
        cause: 'Germany wanted a written peace in the east before moving divisions west, and wanted Ukrainian ' +
          'grain, oil from Baku and the Baltic coast as cover for the north. The Soviet delegation under ' +
          'Trotsky played for time, believing German workers would rise first. The separate treaty which ' +
          'Germany and the Central Powers signed with the Ukrainian People’s Republic on 9 February 1918, ' +
          'the Bread Peace, gave Ukraine recognition and borders in exchange for food, and infuriated the ' +
          'Bolsheviks, who regarded Ukraine as theirs. Trotsky refused to recognise the Ukrainian ' +
          'delegation and broke off the talks on 10 February.',
        what: 'Operation Faustschlag, the Eleven Days’ War, opened on 18 February with 53 divisions: one ' +
          'force from Pskov towards Narva, the others towards Smolensk and Kiev. Daugavpils fell on day ' +
          'one, Minsk on 21 February, Kiev on 2 March. The armies covered over 240 kilometres in a week, ' +
          'to within 160 kilometres of Petrograd; the Soviet government moved to Moscow. Resistance was ' +
          'patchy; most prisoners and guns came from depots. Ukrainian and Austro-Hungarian troops took ' +
          'Odessa on 13 March. In Finland, von der Goltz’s division landed on 3 April and took Helsinki ' +
          'on 12 April.',
        consequence:
          'The Bread Peace and the advance fixed the eastern settlement. Soviet Russia had to give up Ukraine and Finland, and the treaty of 3 March turned the Baltic and the Ukrainian grain country into a German dependency. Finland’s civil war ended in May with around 38,000 dead, of whom about 12,000 died in the political killings on both sides and some 12,500 Red prisoners died of malnutrition and disease in the camps. The recognition of Ukraine also fed the nationalism that was pulling Austria-Hungary apart.',
      },
      university: {
        cause:
          'Historians read Faustschlag as the point where Germany’s eastern policy stopped being a peace and became an occupation. On this reading the spring 1918 western offensive was not separate from it: the same gamble on a decision in the west was meant to hold the east with garrisons.',
        what:
          'The scale is the argument. Germany had to hold from Poland to the Caspian with over a million men, and had taken a treaty with Ukraine that antagonised both the Russians and its own ally, since Vienna’s Ruthenian minority looked to the same land; Austria-Hungary formally annulled the secret agreement on the Ruthenian border in July 1918. Jürgen Kocka and others have placed the settlement inside a programme of central European hegemony, while the Marxist and Fischer-thesis tradition stresses continuity from imperial war aims into the settlement of 1918.',
        consequence:
          'The Finnish and Ukrainian outcomes are usually set aside from the argument about guilt and pushed into the history of the post-1918 settlement: Germany installed a king in Finland, and the Ukrainian grain never arrived in the quantity promised. The offensive is the last major German operation on the Eastern Front and, in the standard account, a victory that could not be cashed.',
      },
    },
    note: 'Faustschlag 18 February – 3 March 1918, the dates in the article’s infobox; the advance went on after the treaty, with Odessa secured on 13 March and Yekaterinoslav taken on 5 April. The article gives no casualty or prisoner figures for the operation, so none is used here. Finnish Civil War 27 January – 15 May 1918: around 38,000 dead, of which roughly 12,000 in the political violence on both sides and about 12,500 Red prisoners who died of malnutrition and disease in the camps. Source checked: “Operation Faustschlag”, “Treaty of Brest-Litovsk”, “Finnish Civil War”, “Treaty of Brest-Litovsk (Ukraine–Central Powers)”.',
  },
  {
    id: 'capture_of_jericho',
    date: '1918-02-19',
    precision: 'day',
    title: 'British Empire troops capture Jericho',
    kind: 'offensive',
    fronts: ['middle_east'],
    countries: ['United Kingdom', 'Australia', 'Ottoman Empire'],
    note: 'The National Army Museum dates the capture of Jericho to 19–21 February 1918. The ' +
      'Australian War Memorial’s list of Australian engagements in Egypt and Palestine, citing ' +
      'the Battles Nomenclature Committee, gives the same window. Neither house isolates the hour ' +
      'the city was entered. This card is dated 19 February and says the operation runs across 19 ' +
      'to 21 February.',
    levels: {
      primary: {
        cause: 'Jerusalem had fallen in December. The next step for the British Empire force in ' +
          'Palestine was the Jordan valley, and Jericho stood at the way into it.',
        what: 'The operation ran from 19 to 21 February 1918. This card is dated the 19th, the opening ' +
          'of that window. Neither account used here says at what hour the city itself was entered.',
        consequence: 'Jericho opened the valley to the British Empire force. Later fighting across the Jordan ' +
          'belongs to the autumn offensive, which is a separate card, not this February operation.',
      },
      secondary: {
        cause: 'The capture of Jerusalem in December 1917 did not by itself give the Egyptian ' +
          'Expeditionary Force the Jordan valley. Jericho, below the city and at the valley’s edge, ' +
          'was the next place. The National Army Museum dates a capture by British Empire troops to ' +
          '19–21 February 1918. The Australian War Memorial’s list of engagements, drawn from the ' +
          'Battles Nomenclature Committee, gives that same window.',
        what: 'Neither house isolates the hour the city was entered, so this card will not invent one. ' +
          'It is dated 19 February, the first day of the operation both of them print, and the ' +
          'reading text says the operation runs across 19 to 21 February. Australian troops are on ' +
          'the War Memorial’s list. The Museum’s phrase is the wider one, British Empire troops. No ' +
          'strength is added to either phrase.',
        consequence: 'Holding Jericho gave the valley as a new front after Jerusalem. It did not decide the ' +
          'crossings of the Jordan that came later in the year. Those belong to the autumn battle, ' +
          'already told elsewhere. February is the capture that made the valley a position, not the ' +
          'offensive that later left it.',
      },
      university: {
        cause: 'Jericho is dropped between two famous names, Jerusalem and the autumn battle in ' +
          'Palestine. The drop hides a change of ground. After December the army was no longer only ' +
          'on the hills west of the river. By the end of this operation it was looking into the ' +
          'valley. The sources will date that step, and they date it as a span of three days rather ' +
          'than as an hour.',
        what: 'The Museum’s timeline and the Australian list agree the window, 19 to 21 February 1918, ' +
          'and the list says it is following the Battles Nomenclature Committee. Agreement on a ' +
          'window is not agreement on the moment of entry. Dating the card to 19 February marks the ' +
          'opening both include. Saying the operation runs across the three days keeps the rest of ' +
          'the window visible. A single hour would be a precision neither house has offered.',
        consequence: 'The operational point is that Palestine after Jerusalem still had a next step, and that ' +
          'the step was Jericho and the valley, not an immediate march on Damascus. The autumn ' +
          'offensive is intelligible as a later decision partly because this ground had already ' +
          'been taken. This card is that taking. It does not retell the autumn, and it does not ' +
          'claim to know which hour the city changed hands.',
      },
    },
  },
  {
    id: 'treaty_brest_litovsk',
    date: '1918-03-03',
    precision: 'day',
    kind: 'diplomacy',
    title: 'The Treaty of Brest-Litovsk',
    fronts: ['eastern', 'politics'],
    countries: ['Russia', 'Germany', 'Ukraine', 'Poland', 'Finland', 'Austria-Hungary', 'Ottoman Empire'],
    figures: ['lenin', 'trotsky', 'kuhlmann'],
    levels: {
      primary: {
        cause:
          'The Bolshevik government had come to power by promising peace. Six months of talks at Brest-Litovsk in the German-occupied east had got nowhere, and in February Germany attacked across a front where the Russian army had already gone home.',
        what: 'On 3 March 1918 Russia signed the Brest-Litovsk treaty. It gave up Ukraine, Poland, Belarus, ' +
          'Lithuania, Latvia and Estonia — a third of its people. It had to recognise Finland. The six ' +
          'billion marks were set in August. Lenin forced it through his split party.',
        consequence: 'The treaty gave the Bolsheviks breathing space, and it gave their enemies a cause. The left ' +
          'social revolutionaries walked out of the government and rose in revolt that July. Germany kept ' +
          'troops in the east until the armistice of November 1918, which cancelled the treaty.',
      },
      secondary: {
        cause:
          'Lenin argued that the revolution could not survive another German offensive and had to have months to consolidate, whatever the cost in territory. Nikolai Bukharin and the left communists wanted a revolutionary war to set Germany alight. Trotsky’s middle course, no war and no peace, ran out when the Germans resumed the advance on 18 February and took Pskov, close to Petrograd. On the German side, the negotiator Richard von Kühlmann wanted a moderate peace that might be kept; the army leadership and the annexationists wanted as much eastern land as they could hold.',
        what: 'The terms took Ukraine, Poland, Belarus, Lithuania, Latvia and Estonia from Russia, with Kars ' +
          'and Batum in the Caucasus. It held 34 per cent of the old empire’s population, 54 per cent of ' +
          'its industrial land, 89 per cent of its coalfields and 26 per cent of its railways. Russia ' +
          'pledged to end its war with the Ukrainian People’s Republic, recognised by the Central Powers ' +
          'on 9 February, and confirmed Finnish independence. An August 1918 protocol set the indemnity ' +
          'at six billion marks. Germany kept troops in the occupied east through the war to hold the ' +
          'gain.',
        consequence:
          'The settlement was a dictatorship over the east which lasted eleven months. It gave the White movement a unifying grievance and opened the rift between the Bolsheviks and the left social revolutionaries, whose representatives left the Council of People’s Commissars and then rose in the July uprising. It also freed over a million German soldiers to be moved west in the spring, though they had to be replaced by garrisons in the occupied land. One clause of the armistice of 11 November 1918 abrogated the treaty; the Soviet legislature annulled it on 13 November.',
      },
      university: {
        cause:
          'The treaty is the hinge of two arguments. One is whether the Bolsheviks were saved or discredited by it, and the standard answer now is that they were saved: the German collapse handed back most of the territory within months, and the Red Army recovered the Caucasus, Ukraine and Belarus by 1921.',
        what:
          'The second argument is whether Brest-Litovsk was an aberration or a template. Stephen Kotkin writes that no Russian government had ever surrendered so much territory or sovereignty, and the settlement is often read as the first working version of a German dominated east, with client states, settlement programmes and a subservient agrarian periphery. Writers who draw a line from here to the eastward colonisation of the Second World War treat the treaty as a rehearsal; others answer that the imperial programme of 1918 was a conventional annexationist peace and that the racial colonisation of 1941 belongs to a different ideology and a different set of actors. The line of continuity is asserted, not documented in the treaty text itself.',
        consequence:
          'What is not in dispute is the immediate effect on Germany: the treaty consumed the divisions it was meant to free, made the grain delivery impossible to organise, and antagonised the Ukrainians whose harvest was the point of the exercise. Historians of the Fischer controversy read the treaty as evidence that German war aims had radicalised by 1918, while revisionists read it as a peace the annexationist lobby had dictated and never had to govern.',
      },
    },
    note: 'Signed 3 March 1918. Terms: 34% of population, 54% of industrial land, 89% of coalfields, 26% of railways; supplementary protocol of August 1918 set reparations at six billion marks. Abrogated by a clause of the armistice of 11 November and annulled by the VTsIK on 13 November. Source checked: “Treaty of Brest-Litovsk”.',
  },
  {
    id: 'operation_michael',
    date: '1918-03-21',
    precision: 'day',
    kind: 'offensive',
    title: 'Operation Michael opens the German spring offensive',
    fronts: ['western'],
    countries: ['Germany', 'United Kingdom', 'France', 'United States'],
    figures: ['luddendorff', 'haig', 'foch'],
    levels: {
      primary: {
        cause:
          'Russia had signed peace in March and Germany could bring divisions west. Erich Ludendorff, the quartermaster general, wanted to beat the British before American troops arrived in large numbers. The British held the longest and least experienced part of the line, around Saint-Quentin.',
        what: 'On 21 March 1918 German guns bombarded a 60-km front. Storm troops by-passed strong points for ' +
          'the batteries. The British Fifth Army was overrun but retired in order. The Germans reached ' +
          'Montdidier, 60 km west, the deepest gain on this front since 1914.',
        consequence: 'On 26 March the British and French governments met at Doullens and put Marshal Foch in charge ' +
          'of coordinating the defence of the line; he became generalissimo in April. The attack was ' +
          'called off on 5 April, and Ludendorff turned north to Flanders.',
      },
      secondary: {
        cause: 'By 21 March Germany had 192 divisions and 3 brigades in the west, of 241 in the army, with 110 ' +
          'in the line and about 50 facing the British. It had superiority in numbers on the western ' +
          'front for the first time since 1914 and would not have it again. The tactic was developed ' +
          'after Riga in 1917: hurricane bombardment with gas and smoke, short, unexpected, then ' +
          'infiltration by trained assault battalions. Ludendorff chose the junction between the British ' +
          'and French armies, near the old unimproved Somme battlefield, and hoped to drive the British ' +
          'to the sea.',
        what: 'The attack hit Gough’s Fifth Army, twelve divisions on a 64-kilometre front. Byng’s Third Army ' +
          'had fourteen divisions. Assault troops bypassed resistance, cut the telephones and took rear ' +
          'batteries. The British defence in depth was unfinished and its guns turned. Saint-Quentin had ' +
          'been German since 1914, and the advance reached the Avre and pressed Villers-Bretonneux, its ' +
          'first fight running from 30 March to 5 April. Middlebrook counts about 39,900 German and ' +
          '38,500 British casualties on 21 March. By the end, over 75,000 British were prisoners, and ' +
          '1,300 guns and 200 tanks were lost.',
        consequence: 'Michael took 3,100 square kilometres (1,200 square miles) of France and cost Germany some ' +
          '239,000 casualties, including trained storm troops that could not be replaced. Doullens on 26 ' +
          'March gave Foch authority to coordinate, and his flank counter-attacks against each German ' +
          'salient held. German losses were not replaced, its objective was never reached, and the ' +
          'salients dug in during the summer were shorter and weaker defensive lines than the ones the ' +
          'Allies gave up. Michael is the model for the four offensives of the spring, known to the ' +
          'Germans as the Kaiser Battle.',
      },
      university: {
        cause:
          'The standard defence of the spring offensives is that Germany had to win before American manpower told, and that a decision in the west was the only remaining option after the east was closed. John Terraine put this strongly: 1918 was the year the western front was decided, and the offensives were rational in that narrow sense.',
        what:
          'The counter-argument is that Michael was a gamble with no political object that could be held. Ludendorff’s own memoirs say the ground won was of little strategic value and hard to defend, and several historians describe the shifting objectives as the central failure: the direction of attack changed from Amiens to the Channel ports to Flanders, so the mass of the army was spent on secondary ground. Recent scholarship also emphasises the manpower economy — the assault divisions consumed irreplaceable men, and the German army of August 1918 was worse led, worse fed and worse supplied than the one of March 1918 despite holding more ground.',
        consequence:
          'The verdict now rests between the two readings. What is not argued is that the operational achievement was real: breaking a trench system that had resisted for four years was the one thing no Allied commander had managed, and the tactics of infiltration and combined-arms attack were copied by the Allies and are still taught. What is argued is whether breaking it was worth the divisions, since the same army collapsed within a hundred days of 8 August.',
      },
    },
    note: 'Began 21 March 1918, called off 5 April. German strength in the west on 21 March: 192 divisions and 3 brigades of 241, 110 in the line. German losses about 239,000; Allied French 92,004 and British 236,300 (about 328,000). Middlebrook: some 39,929 German and 38,512 British casualties on 21 March. Sources checked: “Operation Michael”, “Hundred Days Offensive”.',
  },
  {
    /* The line georgette_1918 has wp2 at Messines and no card, so KK asked for one.
       The Lys article's own list of engagements gives "Battle of Messines (10–11 April)".
       Three things in the first draft came from mis-reading the sources and are fixed
       here. The Hazebrouck dates 13–17 April are the Australian War Memorial table's, not
       the article's, which prints "Battle of Hazebrouck (12–15 April)". The two families
       do not agree on the opening day at all: the article's lead says the battle was
       "fought from 7 to 29 April 1918" and puts the bombardment on the evening of the
       7th, while the AWM table gives the Lys as 9 April. And the draft implied Georgette
       followed Amiens and the Hindenburg Line, which is eight months out of order. The
       words cadre, held thin and Geel are in neither source and were dropped. Edmonds
       volume V supplies the other end of the story, which the article does not print: the
       village was retaken on 29 September 1918. */
    id: 'third_battle_of_messines',
    date: '1918-04-10',
    precision: 'day',
    kind: 'battle',
    title: 'Messines taken again, in Operation Georgette',
    fronts: ['western'],
    countries: ['Germany', 'United Kingdom', 'Portugal'],
    levels: {
      primary: {
        cause: 'The German aim in Flanders in April 1918 was to take Ypres and push the ' +
          'British army back to the Channel ports. The attack came first against the ' +
          'Portuguese divisions on the Lys, and then at the village of Messines.',
        what: 'On 10 April the German Fourth Army attacked north of Armentières with four ' +
          'divisions against the British 19th Division, broke through on a six-kilometre ' +
          'front and took Messines — the same village the British had taken at such cost ' +
          'the year before.',
        consequence: 'The village stayed in German hands until the autumn, when the Second ' +
          'Army’s advance took Messines ridge again, on 29 September 1918.',
      },
      secondary: {
        cause: 'Ludendorff cut his planned Operation George down to Georgette: break the ' +
          'British First Army, push the Second Army aside, and drive west to Calais, ' +
          'Dunkirk and Boulogne. The First Army opposite held a quiet sector with worn-out ' +
          'formations, including two divisions of the Portuguese Expeditionary Corps which ' +
          'were undermanned, lacked almost half their officers and were due to be relieved ' +
          'the day of the attack. The bombardment opened on the evening of 7 April and the ' +
          'Sixth Army attacked with eight divisions at dawn on the 9th.',
        what: 'The assault struck the Portuguese 2nd Division, holding a front of about ' +
          'eleven kilometres; it was overrun and withdrew towards Estaires, and the ' +
          'British 40th Division on its northern flank collapsed and fell back to the ' +
          'north. Also on 10 April the Fourth Army attacked north of Armentières with four ' +
          'divisions against the British 19th Division, whose army had already sent its ' +
          'reserves south to the First Army; the Germans broke through on a six-kilometre ' +
          'front and took Messines, and the 25th Division on the flank gave way four ' +
          'kilometres.',
        consequence: 'The Fourth Army took the ground the Second Army had lost, and ' +
          'Messines, the objective of the mined battle of June 1917, was German again; ' +
          'fighting for the village went on into the 11th, and that day Haig issued his ' +
          '“backs to the wall” order. The Germans “failed in their main objective to ' +
          'capture Hazebrouck and force a British withdrawal from the Ypres salient”, and ' +
          'by 29 April the offensive was called off. The Germans took Bailleul between 13 ' +
          'and 15 April, and on 25–26 April the Fourth Army took the Kemmelberg with three ' +
          'divisions.',
      },
      university: {
        cause: 'Georgette is customarily read as the offensive that won every battle and ' +
          'lost nothing: the Sixth Army broke two Portuguese divisions and the Fourth Army ' +
          'took the ground south of Ypres, and yet the map of Flanders looked almost the ' +
          'same in May. The Portuguese collapse is the hinge of the account, and it is a ' +
          'question of the state of the defence rather than of the assault — the corps was ' +
          'undermanned, short of nearly half its officers, and its 2nd Division counted ' +
          'about 21,000 men against an establishment it fell short of by more than six ' +
          'thousand. What the German official accounts stress in turn is the exhaustion of ' +
          'the stormtroop divisions, which is why a penetration of fifteen kilometres ' +
          'produced no port and no decision.',
        what: 'The dates on this card are printed dates, and the families do not agree. ' +
          'The Lys article’s own list of engagements gives “Battle of Messines (10–11 ' +
          'April)”, “Battle of Hazebrouck (12–15 April)”, “Battle of Bailleul (13–15 ' +
          'April)”, “First Battle of Kemmel (17–19 April)” and “Second Battle of Kemmel ' +
          '(25–26 April)”, and its lead dates the whole battle “from 7 to 29 April 1918”. ' +
          'The Australian War Memorial table of AIF engagements, whose stated source is ' +
          'the Battles Nomenclature Committee’s official list, gives the Lys as 9 April ' +
          'and Hazebrouck as 13–17 April, and has no row for Messines in 1918. So the ' +
          'opening day is 7 or 9 April depending on the family, Hazebrouck is 12–15 or ' +
          '13–17 April, and the village itself is single-family.',
        consequence: 'The other end of the village’s story is printed by the British ' +
          'official history rather than by the battle article, and it is the reason this ' +
          'map can carry the same place twice. Edmonds and Maxwell-Hyslop record that the ' +
          'Germans held “the ridge down to and including Wytschaete-Messines which they ' +
          'had lost in the Flanders … fighting in 1917 and regained at the end of April ' +
          '1918, when it was lost again by the Second Army as a consequence of” the ' +
          'success to the south in the Lys offensive. On 28 September 1918 a patrol of the ' +
          '30th Division entered the village in the evening, and next morning “soon after ' +
          '7 a.m. it was certain that men of the 90th Brigade were in Messines, ' +
          'confirmation being provided by the Germans who began soon to shell the ' +
          'village”.',
      },
    },
    note: 'Numbering and dating notes, because the house rule is not to print a disputed ' +
      'label or figure in the prose. The Lys article’s own list prints “Battle of Messines ' +
      '(10–11 April)” and “First Battle of Kemmel (17–19 April)”, while accounts that ' +
      'treat the whole April fighting as the Fourth Battle of Ypres number its battles ' +
      'differently — the article itself gives the Lys that alternative name — so this ' +
      'card’s title avoids the numbering while its id keeps the conventional form. The two ' +
      'families disagree on the opening: the article’s lead says the battle was fought ' +
      '“from 7 to 29 April 1918” and puts the bombardment on the evening of 7 April, while ' +
      'the Australian War Memorial table gives the Lys as 9 April; Hazebrouck is 12–15 ' +
      'April in the article and 13–17 April in that table, which has no 1918 row for ' +
      'Messines at all. The villages of this battle are therefore single-family, and so is ' +
      'the retaking of the village on 29 September 1918, which rests on Edmonds and ' +
      'Maxwell-Hyslop, _Military Operations France and Belgium 1918_, volume V, pages 79 ' +
      'to 81; that volume’s scan carries page furniture inside the sentence quoted about ' +
      'the ridge, so the quotation is given in runs. Sources checked: Wikipedia “Battle of ' +
      'the Lys (1918)”; Australian War Memorial encyclopedia table of First World War ' +
      'battles; Edmonds and Maxwell-Hyslop, _Military Operations France and Belgium 1918_ ' +
      'volume V.',
    mapNote: 'Messines fell again on 10 April 1918, two days after the bombardment opened ' +
      'on the Lys, and was retaken on 29 September 1918.',
  },
  {
    id: 'influenza_reaches_the_armies',
    date: '1918-04-15',
    precision: 'month',
    kind: 'home_front',
    title: 'Influenza reaches the armies of the western fronts',
    fronts: ['home', 'western'],
    countries: ['United States', 'France', 'United Kingdom', 'Spain', 'Germany', 'Italy'],
    levels: {
      primary: {
        cause: 'Doctors in Haskell County, Kansas, noticed a severe flu in February and March 1918. It reached ' +
          'the army camp at Funston, where a cook fell ill on 4 March. From the camps and the ports it ' +
          'travelled with troops and with Chinese and Indian labourers.',
        what: 'By April the flu was in French ports and along the Western Front. France, Germany and the ' +
          'United Kingdom reported cases that month. This first wave was mild for most. Censors hid the ' +
          'illness; neutral Spain wrote freely, hence the name Spanish flu.',
        consequence: 'Armies lost fighting men to a disease that killed mostly the healthy young. A deadlier autumn ' +
          'wave found the same crowded camps, ships and trains, left the two fronts half empty of the ' +
          'fit, and India was the worst affected part of the world.',
      },
      secondary: {
        cause:
          'Modern research places the earliest probable cases in Haskell County, Kansas, in February and March 1918, where the physician Loring Miner warned the public health service about an unusually severe influenza. Troops moving from that country to Camp Funston carried it. From American camps and from the ports where troops and Chinese and Indian labourers were landed, the virus spread to the Western Front; Paris and the British and French depots were affected by mid-April, and by May the disease had reached Breslau and Odessa.',
        what: 'The first wave was mild. Madrid lost fewer than a thousand in May and June, and the United ' +
          'States recorded about 75,000 influenza deaths in the first half of 1918 against about 63,000 ' +
          'in those months of 1915. The disease was named after a blameless neighbour: Flanders fever in ' +
          'Belgium, Brazilian flu in Senegal, German flu in Spain, French flu in Germany, and Naples ' +
          'Soldier among British troops. The Times noted in June that everyone called it Spanish ' +
          'influenza, which is how the name stuck, since only Spain’s press was free to report the ' +
          'epidemic.',
        consequence: 'The second wave, which arrived in European and North American ports in September and October, ' +
          'was far deadlier, and the mortality curve of the pandemic ran high among healthy young adults. ' +
          'The pandemic took armies and home fronts at once: camps and hospitals were overwhelmed, ' +
          'convoys of reinforcements arrived infected, and the British and French armies were short of ' +
          'effectives during the autumn offensive. The world death toll was estimated at 21.6 million in ' +
          '1927, 25 to 39 million in 1991, at least 50 million in 2005, and about 17 million in a ' +
          'contested 2018 reassessment.',
      },
      university: {
        cause:
          'Two arguments run through the literature. The first is where it came from: Haskell County in the United States, British camps and labour depots in France, and a north-China origin carried west by the Chinese Labour Corps have all been argued, and a molecular-clock study puts the last common ancestor of the human strains between February 1917 and April 1918, which leaves the question open.',
        what:
          'The second is what to call it. “Spanish influenza” is a misnomer produced by censorship, not by epidemiology, and the neutral country that got the blame was the one that reported honestly. Alfred Crosby’s foundational study made the point that the name records the press systems of 1918 rather than the origin of the virus. A more contested claim is that the virus was amplified, or even generated, in the conditions of industrial warfare: crowded camps, mass movement, and the selection pressure of warding sick men together with fit ones.',
        consequence:
          'Historians also argue about where the deaths should be counted. Influenza mortality belongs to the civilian and military statistics of 1918–1919, not to the battle casualty returns, so it is largely missing from the tables of war losses; yet the pandemic was caused and spread by the movement of armies and blockaded, rationed populations. Niall Johnson and Juergen Mueller put European excess deaths at 2.64 million, about one per cent of the population, and India was the worst affected part of the world. The honest way to use the numbers is to keep them beside the war dead rather than inside them, and to say which estimate is being quoted.',
      },
    },
    note: 'Dated to April 1918 at the western fronts, and given month precision because the arrival of the first wave along the front was gradual. Earliest probable cases: Haskell County, Kansas, February–March 1918; Camp Funston, 4 March 1918. World toll estimates range from about 17 million to at least 50 million, and the 50 million and 100 million figures are estimates rather than counts. Sources checked: “1918 Spanish influenza pandemic”, “Spanish flu pandemic order of battle”.',
  },
  {
    id: 'third_battle_of_the_aisne',
    date: '1918-05-27',
    precision: 'day',
    kind: 'offensive',
    title: 'Blücher on the Aisne: the drive to the Marne',
    fronts: ['western'],
    countries: ['Germany', 'France', 'United States', 'United Kingdom'],
    figures: ['luddendorff', 'petain', 'foch'],
    levels: {
      primary: {
        cause: 'After the first offensive of the spring, Ludendorff turned to the part of the French front ' +
          'behind the Chemin des Dames ridge. The French had taken over a long sector from the British ' +
          'and had thinned it, expecting the next blow to fall in Flanders.',
        what: 'On 27 May 1918 German armies attacked the Chemin des Dames ridge, after a short bombardment. ' +
          'In six hours they broke through eight tired divisions between Reims and Soissons, took the ' +
          'ridge, and pushed to the Marne at Château-Thierry.',
        consequence: 'The salient pushed to the Marne was the deepest German penetration of 1918 and the closest the ' +
          'war came to threatening Paris. It was the last success: the attack on the next sector was ' +
          'halted, and the salient became the ground of July’s battle.',
      },
      secondary: {
        cause:
          'Ludendorff’s plan for the spring had been to destroy the British army, and after Michael was called off on 5 April and the Flanders attacks took little ground, he turned to the French to draw Allied reserves away from the north. Operation Blücher–Yorck was aimed at the Aisne–Marne corridor, a sector where the French held a long front with divisions worn by 1917 and where the ground, ridge above river, favoured attack. Foch had asked for the sector to be reinforced; French calculations expected the main blow in Flanders, where the ports were.',
        what:
          'The German first and seventh armies attacked on 27 May with over 20 divisions and about 4,000 guns against a French front held by understrength divisions, and four divisions of the British IX Corps under Alexander Hamilton-Gordon held part of the Chemin des Dames ridge in the sector. Eight Allied divisions were broken in six hours along the line between Reims and Soissons, and a further 15 kilometres was gained by nightfall. By 30 May the attackers had taken just over 50,000 prisoners and over 800 guns, and Ludendorff changed the object of the operation from the set-piece attack to the pursuit towards the Marne, which had never been its intention. On 3 June the spearheads came within 56 kilometres (35 miles) of Paris. The American 2nd Division, with its marine brigade, fought at the river crossings and in Belleau Wood from 1 to 26 June at heavy cost to both sides, the first large American action of the war.',
        consequence:
          'German casualties in the battle are usually put near 130,000 and Allied at about 127,000, of which the French bore most. The salient driven to the Marne gave the German army no defensible line of communication and no railway terminus worth the divisions spent, and its flanks were exposed to the counter-attacks Foch was preparing. Blücher confirmed the pattern: victory in the first two days, exhaustion in the fourth week, and a salient which the Allies cut off in July.',
      },
      university: {
        cause:
          'Blücher is used as evidence on both sides of the argument about whether the spring offensives were rational. For the argument that Germany had to win in 1918, it shows that a decision was possible: 200 square miles and 100,000 prisoners in three days against an army that had recovered from 1917.',
        what:
          'For the argument that the offensives were strategic failure, it shows Ludendorff changing objectives again. Michael was to have destroyed the British; Blücher was a blow at the French to uncover the road to Paris and to pull Allied reserves out of Flanders, and its success was accepted as an opportunity rather than executed as a plan. Recent work on the German army of 1918 stresses the cost in trained men, horses and ammunition, and the shrinking of the effective dividend of each attack as the quality of the assault divisions fell.',
        consequence:
          'American memory of the battle runs through Château-Thierry and Belleau Wood, which are treated as the founding battles of the American Expeditionary Force; the British contribution of IX Corps and of the shattered divisions in the sector has been recovered more slowly. Foch’s handling of the crisis, keeping reserves in hand for counter-attacks rather than feeding them into the defence of ground, is generally judged the decisive Allied response.',
      },
    },
    note:
      'Third Battle of the Aisne (Blücher–Yorck), 27 May – 6 June 1918. German first and seventh armies with over 20 divisions and about 4,000 guns; by 30 May the attackers had taken just over 50,000 prisoners and over 800 guns. Casualties: about 127,000 Allied and 130,000 German. The Aisne article puts the deepest point reached at 56 km (35 mi) from Paris on 3 June, while the Belleau Wood article gives Château-Thierry itself as 95 km (59 mi) from Paris; the two pages measure different points, so only the 3 June figure is used. Belleau Wood, 1 – 26 June, cost the American 2nd Division and Marines 9,777 casualties and the Germans over 10,000. Source checked: “Third Battle of the Aisne”, “Battle of Belleau Wood”.',
  },
  {
    id: 'treaties_of_batum',
    date: '1918-06-04',
    precision: 'day',
    title: 'The treaties of Batum',
    kind: 'diplomacy',
    fronts: ['caucasus', 'politics'],
    countries: ['Ottoman Empire', 'Georgia', 'Armenia', 'Azerbaijan'],
    note: 'The Georgian Encyclopedia dates a treaty of Batum, signed on 4 June 1918 between Georgia and ' +
      'Turkey and also by the Armenian and Azerbaijani delegations, and names Batum, Kars, Akhalkalaki ' +
      'and Akhaltsikhe among the districts transferred. The Presidential Library of Azerbaijan describes ' +
      'a treaty fixing the Turkey-Azerbaijan border, Turkish military assistance, and, in the treaty with ' +
      'Armenia, the transfer of Echmiadzin and Alexandropol. A Turkish Historical Society article dates ' +
      'instruments to 4 and 8 June, some bilateral and some joint. No area or population figure is ' +
      'copied. The fighting for Baku is a different card.',
    levels: {
      primary: {
        cause: 'Russia had left the war and signed away Kars, Ardahan and Batum at Brest-Litovsk. In the ' +
          'Caucasus, Georgia, Armenia and Azerbaijan had declared themselves republics. The Ottoman ' +
          'Empire wanted more than the Brest line, and a road for its troops further east.',
        what: 'On 4 June 1918 at Batum the Ottoman Empire signed treaties with Georgia, Armenia and ' +
          'Azerbaijan. Further papers were signed over the following days. The treaties took territory ' +
          'beyond Brest-Litovsk and gave the Ottomans a right to move troops across Transcaucasia.',
        consequence: 'The new republics were recognised on Ottoman terms, and Ottoman soldiers could legally cross ' +
          'their lands. That opened the road for a later advance towards Baku. The fight for the city is ' +
          'not this card. These treaties lost their force after the Ottoman defeat.',
      },
      secondary: {
        cause: 'Brest-Litovsk had returned Kars, Ardahan and Batum to the Ottoman Empire and had not settled ' +
          'the lands beyond them. The Transcaucasian federation had broken up. Georgia, Armenia and ' +
          'Azerbaijan negotiated separately, under the pressure of an Ottoman army already on the move. A ' +
          'peace conference at Batum was the Ottoman way of turning that pressure into treaties, and of ' +
          'gaining a right of passage further east than Brest had given.',
        what: 'On 4 June 1918 the Ottoman Empire signed with Georgia, and the Armenian and Azerbaijani ' +
          'delegations signed as well. The Georgian Encyclopedia gives that day and names Batum, Kars, ' +
          'Akhalkalaki and Akhaltsikhe among the districts transferred. Azerbaijan’s presidential library ' +
          'describes a border with Turkey, Turkish military help, and an Armenian treaty that transferred ' +
          'Echmiadzin and Alexandropol. A Turkish Historical Society article dates further instruments to ' +
          'the days through 8 June, some of them bilateral. This card uses 4 June and says the signing ' +
          'continued. No area or population total is stated.',
        consequence: 'The treaties placed Ottoman gains beyond the Brest line into written agreements with the three ' +
          'republics, and they created a legal basis for moving troops across Transcaucasia. That is the ' +
          'political opening, not the later battle for Baku, which has its own card and is not retold ' +
          'here. Georgia also looked to Germany for protection, so the Caucasus in June was an argument ' +
          'inside the Central Powers as well as a set of Ottoman treaties. After the Ottoman defeat the ' +
          'Batum settlement was abolished.',
      },
      university: {
        cause: 'Batum is what happened when a treaty with a collapsed empire met three successor states that ' +
          'did not yet control their own frontiers. The Ottoman aim was territorial, a line past ' +
          'Brest-Litovsk, and strategic, a corridor towards the Caspian. Armenian military successes in ' +
          'late May had stopped one advance and had not produced a peace. Negotiating under that ' +
          'unfinished campaign is why the treaties look both imposed and signed. Calling them either a ' +
          'diktat or a free settlement simplifies a conference held in the presence of the army.',
        what: 'The core date, 4 June 1918, is shared by the Georgian Encyclopedia and by the Azerbaijani ' +
          'official library’s account of the instruments. They do not describe a single identical text. ' +
          'Georgia’s article stresses a multilateral signing and named districts. Azerbaijan’s stresses a ' +
          'bilateral border, military assistance, and a separate Armenian cession of Echmiadzin and ' +
          'Alexandropol. A Turkish scholarly article spreads the papers across 4 and 8 June and ' +
          'distinguishes joint instruments from bilateral ones. The card follows 4 June and the ' +
          'continuation. Square-kilometre and population arithmetic from one encyclopedia is not ' +
          'repeated.',
        consequence: 'The treaties are the reason an Ottoman force could claim a political road across Transcaucasia ' +
          'in the summer of 1918, which is the part the Baku narrative usually assumes and does not tell. ' +
          'They are also a document in the independence stories of the three republics, each of which ' +
          'later judged the terms differently. Their abolition after the Ottoman defeat shows how little ' +
          'a June frontier was worth once the army that guaranteed it had to demobilise. This card stops ' +
          'at the signatures. It does not fight the September battle again.',
      },
    },
  },
  {
    id: 'second_battle_of_the_piave',
    date: '1918-06-15',
    precision: 'day',
    kind: 'battle',
    title: 'The Battle of the Solstice on the Piave',
    fronts: ['italian'],
    countries: ['Austria-Hungary', 'Italy'],
    figures: ['boroevic', 'diaz', 'vittorio_emmanuele_iii'],
    levels: {
      primary: {
        cause: 'Austria-Hungary had to knock Italy out before Germany’s reserves could be moved west and ' +
          'before its own armies came apart. The Italian front had been pushed back to the Piave after ' +
          'the disaster of autumn 1917, and the Austro-Hungarian army attacked across it in June.',
        what: 'On 15 June 1918 the Austro-Hungarians crossed the Piave in flood and attacked the Asiago ' +
          'plateau. They held bridgeheads until Armando Diaz counter-attacked where they were weak; by 23 ' +
          'to 24 June they were back at their start line.',
        consequence:
          'The army that had nearly won in 1917 lost its last offensive power in six days. Its losses included the men taken prisoner when whole companies surrendered to the Italians, and the failure turned the argument inside the government in Vienna towards an armistice.',
      },
      secondary: {
        cause: 'Arthur Arz von Straußenburg had succeeded Conrad, and the emperor Karl I insisted in April ' +
          'that his armies must win before peace could be made. The plan was two attacks, across the ' +
          'Piave towards Padua and Venice, and onto the Asiago plateau, the two arms meeting behind the ' +
          'Italian lines. The army was short of food, transport animals and morale, and units of eleven ' +
          'nationalities were led by officers of another. Italy had rebuilt after Caporetto with French ' +
          'and British help and Diaz in command, and fresh divisions were held behind the river.',
        what: '946,000 Austro-Hungarians and 6,833 guns attacked an army dug in beyond a river in flood and ' +
          'on high ground, which the attackers had to climb under fire. The western assault on the Asiago ' +
          'plateau took some ground and stopped. The Piave crossings were partial and went unsupplied. ' +
          'The Italian Tenth Army counter-attacked on 19 June and destroyed the bridgeheads in turn. ' +
          'Italian losses were 8,396 dead, 30,603 wounded and 48,182 captured, 87,181 in all. ' +
          'Austro-Hungarian losses were 118,042, of whom 25,547 were prisoners. It is also called the ' +
          'Solstice.',
        consequence:
          'The defeat settled the question the summer had been meant to answer. The army would not attack again; the government in Vienna began to feel its way towards the Allies; and the Italian army, which had defended successfully for the first time in the war, kept its divisions intact for the offensive in October. The Empire’s allies were told that the eastern Italian front had spent its last strength.',
      },
      university: {
        cause:
          'Historians of the Italian front have moved from the Caporetto story of collapse to the Piave story of recovery, and the second battle of the Piave is now the proof case: an army that reorganised, learned to fight defensively with counter-attacks prepared in depth, and held.',
        what:
          'The Austro-Hungarian side is read through logistics and nationality rather than through the defeatism of the troops. John R. Schindler and others place the food crisis, the collapse of the transport system and the collapse of imperial cohesion at the centre: units refused orders in the language of the officer, and the army could not feed itself off the land it was attacking. The battle is a case of an offensive whose failure was structural before the first shell was fired, which is why the loss figures are heavy with prisoners rather than with dead.',
        consequence:
          'The dispute is how far this forward from June to October. The Italian accounts of Vittorio Veneto as a great victory have been revised towards a view of an enemy that disintegrated rather than being defeated in battle, and the Piave is where the evidence for that reading is strongest, because there the army still attacked and still broke.',
      },
    },
    note:
      'Second battle of the Piave, 15 – 23 June 1918 by the infobox dates; some accounts give 15 – 24 June. Strength: Austria-Hungary 946,000 men and 6,833 guns. Casualties: Italy 87,181 (8,396 dead, 30,603 wounded, 48,182 captured); Austria-Hungary 118,042 (11,643 dead, 80,852 wounded, 25,547 captured). Source checked: “Second Battle of the Piave”.',
  },
  {
    id: 'second_battle_of_the_marne',
    date: '1918-07-15',
    precision: 'day',
    kind: 'battle',
    title: 'Second Marne: Reims halted and the counter-stroke at Soissons',
    fronts: ['western'],
    countries: ['Germany', 'France', 'United States', 'United Kingdom', 'Italy'],
    figures: ['luddendorff', 'foch', 'petain', 'pershing'],
    levels: {
      primary: {
        cause: 'In July the German army still held a salient pushed to the Marne, with Paris inside its range ' +
          'of fire. Ludendorff attacked the salient from both sides, hoping to straighten the line and ' +
          'pull Allied reserves away from his next blow in Flanders.',
        what: 'On 15 July 1918 German armies crossed the Marne, but the Allies knew the hour, a barrage ' +
          'caught them, and Reims held. On 18 July Foch struck their flank with French and American ' +
          'divisions; by 20 July the Germans gave up their May gains.',
        consequence: 'The war passed to the Allies on 18 July and did not give the initiative back. Ludendorff had ' +
          'lost the last chance of a decision in the west, and the German army spent the summer on the ' +
          'defensive, shortening its line and losing irreplaceable men.',
      },
      secondary: {
        cause: 'The Marne salient, taken in May at a cost of 130,000 German casualties, now had to be ' +
          'exploited or cleared. Ludendorff chose to attack on both shoulders, Operation Hammerschlag on ' +
          'the west and the Reims attack on the east, hoping the Allied reserves would be spent defending ' +
          'ground. Foch, Allied commander-in-chief with authority over reserves, refused to commit them ' +
          'piecemeal and kept them for his own counter-attack. Philippe Pétain, who had stopped the ' +
          'Germans at Reims in 1917, commanded the Army Group there and had a defence in depth that let ' +
          'the first wave spend itself.',
        what: 'The Allies used 58 divisions, 44 French, 8 American, 4 British and 2 Italian, and 346 tanks, ' +
          'against 52 German divisions. The 15 July attack east of Reims made a bridgehead, and stopped ' +
          'on the reverse slopes. On 18 July, west of the salient, Mangin’s Tenth Army, with ' +
          'Franco-American divisions and the first massed tanks since Cambrai, surprised the Germans and ' +
          'advanced 20 kilometres within days. German losses were usually about 168,000, including 29,367 ' +
          'prisoners and 793 guns, against 133,000 Allied. By early August the salient was cleared to the ' +
          'Vesle and the Aisne.',
        consequence:
          'The battle reversed the balance of the war in the west. It cost Germany divisions that had to be broken up to refill others, destroyed the assault formations in detail, and left the German army holding ground it could not defend while the Allies held reserves and tanks and increasing American numbers. On 24 July Ludendorff told the crown council that Germany must accept peace; the offensive in Flanders, the real object of the July battles, was shelved.',
      },
      university: {
        cause:
          'The battle is usually dated 15 July to 6 August, though the infobox of the standard account gives 15 – 18 July for the battles of Reims and Soissons. The longer dating follows the clearing of the salient to the Vesle, which is where the operational result lay, and the shorter dating marks the two days when the front moved.',
        what:
          'Historiography gives Foch the credit for the strategy of holding reserves and counter-attacking, and gives Pétain and Mangin the credit for the defence and the counter-stroke; American accounts give Pershing and the divisions a prominence that French sources dispute, since the American formations were mostly fought under French command and in French preparation. Robert Doughty and others emphasise that the 18 July attack is the first operation of the Hundred Days, and that by then the German army had lost the ability to recover a defensive line rather than merely retire from one.',
        consequence:
          'The wider argument concerns whether the German spring offensives were beaten off or beat themselves out. The Second Marne is the evidence for the second view: the German army attacked with 52 divisions into prepared ground against a reserve it could not count, and lost men, guns and tanks that were meant for the decision. From this point the German high command sought to avoid defeat, and did not seek victory again.',
      },
    },
    note:
      'Reims and Soissons, 15 – 18 July by the infobox dates; the clearing of the salient is commonly dated to 6 August, and the range is given above rather than chosen. Allied 58 divisions and 346 tanks against 52 German divisions. Casualties about 133,051 Allied and 168,000 German, of which 29,367 prisoners and 793 guns. In Moscow the Left Socialist-Revolutionaries killed the German ambassador Count Mirbach on 6 July and rose in revolt, hoping to restart the war against Germany. Source checked: “Second Battle of the Marne”.',
  },
  {
    id: 'battle_of_amiens',
    date: '1918-08-08',
    precision: 'day',
    kind: 'battle',
    title: 'Amiens and the black day of the German army',
    fronts: ['western'],
    countries: ['United Kingdom', 'France', 'Germany'],
    figures: ['haig', 'luddendorff', 'foch'],
    levels: {
      primary: {
        cause: 'The German offensives of the spring were stopped, and Allied armies had recovered divisions ' +
          'and tanks. At Amiens the British held a front that the Germans thought quiet, because Canadian ' +
          'units had been moved secretly and the Germans were misled by false signals to Flanders.',
        what: 'On 8 August 1918 the British Fourth Army attacked east of Amiens, behind a sudden bombardment ' +
          'with 1,300 guns and 500 tanks. The German front fell at once; by evening the line was about 11 ' +
          'kilometres back, with thousands of prisoners.',
        consequence: 'The battle ran to 12 August and then stopped, because the advance outran the guns and tanks ' +
          'wore out; only six were fit four days later. The Allies had the initiative to the war’s end, ' +
          'and German high command knew the army could not win.',
      },
      secondary: {
        cause:
          'After the Marne, Foch pressed for attacks to be made wherever the enemy was weak, without waiting for a great combined operation. Sir Henry Rawlinson’s Fourth Army proposed the Amiens attack to cut the railway junction that supplied the German salient. The British army in 1918 had learned to combine artillery with sound ranging and aerial photography, infantry platoons with Lewis guns and mortars, and tanks used in mass for the break-in. Secrecy was kept by moving the Canadian Corps in at night and by radio traffic suggesting an attack in Flanders.',
        what: 'Nineteen divisions of the Fourth Army attacked, nine from Monash’s Australian Corps and ' +
          'Currie’s Canadian Corps, with Debeney’s French First Army on the right; cavalry would exploit. ' +
          'The German divisions were short of men, with only about two divisions in immediate reserve, ' +
          'and driven back in confusion. The Canadians advanced 13 kilometres, the Australians 11, the ' +
          'French 8 and the British 3.2. Clodfelter’s counts give 45,000 German killed and wounded and ' +
          '29,873 captured, against French losses of 24,232 and British of 22,202. Five German divisions ' +
          'were engulfed on the first day.',
        consequence:
          'Ludendorff described the first day of Amiens as the Schwarzer Tag des deutschen Heeres, the black day of the German army. He did not mean the ground lost: he meant that the morale of the troops had sunk to the point where large numbers capitulated, and that the army had to fight its way out of the war. The Allies continued the offensive on the Somme from 21 August, and from then until 11 November the German army retreated rather than defended a chosen line.',
      },
      university: {
        cause:
          'Amiens is used as the test case for two explanations of the Allied victory: the material and technical explanation, in which tanks, guns, air power and American manpower decided the war; and the moral explanation, in which the German soldier stopped believing and the battle only revealed it.',
        what:
          'The phrase black day is now read with care. It comes from Ludendorff’s own account of the first day, refers to troop morale and mass capitulations rather than to ground, and was taken up by his memoirs and by the nationalist literature that dated the defeat from the home front rather than from the front line. Gary Sheffield and Jack Sheldon point out that five divisions of an army of over 200 were involved, that the ground was recovered in places, and that the German army fought the following three months with considerable skill; John Terraine’s older reading is that 8 August was the decisive day of the war in the west.',
        consequence:
          'The settled position between them is that Amiens was not decisive in the way a battle at Verdun or Sedan was decisive, but that it demonstrated a new Allied method which could be repeated faster than the German army could train, feed and lead its own men, and that the German high command’s reaction to it, on 13 August, began the political process that ended the war.',
      },
    },
    note:
      'Battle of Amiens, 8 – 12 August 1918. Fourth Army: 19 divisions, 1,386 field guns and howitzers, 684 heavy guns, over 500 tanks, of which only six were battle-ready after four days; average advance 11 km, some 12,000 Allied casualties and over 15,000 prisoners taken on the first day, with German losses estimated at 30,000. Infobox figures (Clodfelter 2017): German 45,000 killed or wounded plus 29,873 captured; French 24,232 and British 22,202. Ludendorff’s “black day” phrase refers to the first day and to morale, not to ground lost. Sources checked: “Battle of Amiens (1918)”, “Hundred Days Offensive”.',
  },
  {
    id: 'battle_of_baku',
    date: '1918-08-26',
    precision: 'day',
    kind: 'battle',
    title: 'The battle for Baku',
    fronts: ['caucasus', 'middle_east'],
    countries: ['Ottoman Empire', 'Russia', 'United Kingdom'],
    figures: ['enver_pasha'],
    levels: {
      primary: {
        cause: 'Baku’s oil fed the war at sea, by a Caspian railway. After the March peace the army went home, ' +
          'and Bolsheviks and Armenians held the city. Britain sent Dunsterville from Baghdad through ' +
          'Persia to hold the front and stop Enver’s advance on the oil.',
        what: 'On 26 August 1918 about 14,000 men under Nuri Pasha attacked Baku, held by some 20,000 ' +
          'ill-equipped troops and Dunsterville’s force. They took Binagadi and Diga, broke in on 13 ' +
          'September, and on 14 September the defenders sailed off.',
        consequence: 'In the days after the city fell, Armenian civilians in Baku were killed in the September Days, ' +
          'put at between 10,000 and 30,000 dead. Ottoman and Azerbaijani control of Baku lasted until ' +
          'the armistice of October 1918 obliged the Ottoman army to leave.',
      },
      secondary: {
        cause:
          'Enver Pasha, the Ottoman minister of war, had wanted Transcaucasia placed under Ottoman suzerainty as part of a pan-Turanian plan, which would hand the Central Powers the oilfields of Baku and open the Caspian road to Central Asia. The Ottoman advance of spring 1918 took Erzurum, Kars and Van from the retreating Russian army, and at the Batum conference in May the Ottomans demanded Tiflis, Alexandropol and Echmiadzin as well, with a railway to connect Kars and Julfa with Baku. Armenian forces halted the advance at Sardarapat, Kara Killisse and Bash Abaran in late May, the Transcaucasian federation dissolved, Georgia called in a German expeditionary force, and the government of Azerbaijan moved from Tiflis to Ganja. Baku, held by the Baku Commune under Stepán Shahumyan, was the last prize. Germany, which wanted the oil rather than the conquest, offered Soviet Russia the benefit of its pressure on the Ottomans in return for access to the fields, and the two governments agreed on 27 August that Germany should take a quarter of Baku’s oil.',
        what: 'Nuri Pasha’s Islamic Army of the Caucasus had about 14,000 men, only 30 per cent Ottomans. ' +
          'Against it were about 6,000 Centrocaspian troops, mostly Armenians, with some 40 guns and ' +
          'Dunsterville’s detachment. A coup on 26 July overthrew the Bolshevik Commune. Fighting ran ' +
          'from 26 August to 14 September; Binagadi Hill and Diga fell by 1 September at a cost too heavy ' +
          'to press on. A deserter revealed the final assault, launched on the night of 13 September. ' +
          'Mürsel Bey admitted about 2,000 Ottoman losses; British losses about 200.',
        consequence: 'Baku was the Central Powers’ last and most remote victory, in the same fortnight the Ottoman ' +
          'position in Palestine collapsed. Between 10,000 and 30,000 Armenians were killed in the ' +
          'September Days, out of a community of about 80,000. The toll is disputed both ways: the March ' +
          'Days of 1918 had killed many Muslims in the same city. The Mudros armistice of 30 October ' +
          'forced the Ottomans to demobilise and leave Baku.',
      },
      university: {
        cause:
          'The battle is usually read as the furthest edge of Enver Pasha’s pan-Turanian gamble, and the argument is over whether the Caucasus campaign was a strategy or a fantasy. The standard account of 1918 treats it as one reason the Ottoman army was in the wrong place in September, with formations the Palestine front needed standing on the Caspian at the end of a very long railway line.',
        what:
          'The competing readings set imperial ambition against alliance politics. Germany wanted Baku’s oil bought rather than conquered, and had agreed with Soviet Russia on 27 August for a quarter of the output in exchange for pressuring the Ottomans to stop; Enver’s expedition was also a political operation to raise Muslim volunteers, and only about three in ten of the men who marched on Baku were Ottoman soldiers. The numbers are contested in the details: Mürsel Bey’s admission of 2,000 Ottoman casualties is a belligerent’s own figure, and the Armenian death toll in the September Days is disputed in both directions, with Azerbaijani accounts of killings against Muslims in the city in the March Days set against the far larger Armenian toll after September.',
        consequence:
          'In Turkish and Azerbaijani nationalist writing Baku belongs to the story of Azerbaijan’s 1918 independence, and to the later claim that the Ottoman collapse came from the armistice rather than from the fighting. In the military history of 1918 it is a case study in strategic overreach: a victory in mid-September that had to be given up within six weeks because the war was being lost elsewhere.',
      },
    },
    note:
      'The article’s infobox dates the operations at 26 August – 14 September 1918, and Dunsterforce “abandoned the city on the night of 14/15 September”; no source checked gives an entry date for the Islamic Army, so none is used. Strengths from the infobox: Islamic Army 14,000 infantry, 500 cavalry, 40 guns; Baku Commune/Baku Army 20,000, described as ill-equipped. Mürsel Bey’s own figure of about 2,000 Ottoman killed and wounded, and about 200 British casualties in the whole operation. The September Days death toll is given as 10,000 to 30,000 ethnic Armenians out of a community of about 80,000; the infobox of the battle article says 30,000, so the range is used here. Sources checked: “Battle of Baku”, “September Days”, “Dunsterforce”.',
  },
  {
    id: 'vardar_offensive_bulgaria_collapse',
    date: '1918-09-15',
    precision: 'day',
    kind: 'offensive',
    title: 'The Vardar breakthrough and the collapse of Bulgaria',
    fronts: ['balkans'],
    countries: ['Bulgaria', 'France', 'Serbia', 'Greece', 'Germany'],
    figures: ['sarrail', 'ferdinand_bulgaria', 'loyd_george'],
    levels: {
      primary: {
        cause: 'The Salonica front was a stalemate from 1916, with French, Serbian, Greek and British armies ' +
          'facing Bulgaria in Macedonia. By September 1918 the Allies outnumbered the Central Powers. ' +
          'Bulgaria was exhausted, short of food, and unwilling to continue a war begun in 1915 for land.',
        what: 'On 15 September 1918 French, Serbian and Greek troops attacked the Dobro Pole ridge, the ' +
          'strongest Bulgarian position on the Vardar river. The ridge’s defenders were broken and fled, ' +
          'and whole units retreated towards Bulgaria, forming committees and refusing orders.',
        consequence: 'Bulgaria asked for an armistice in late September and signed at Thessaloniki on the 29th. It ' +
          'lost some 77,000 men, mostly prisoners, and 500 guns. Bulgaria’s exit opened the road to ' +
          'Vienna through Serbia and Hungary, and Germany lost its last reliable southern ally.',
      },
      secondary: {
        cause: 'Allied armies were reorganised under Franchet d’Espèrey, who took the Allied Army of the East ' +
          'in July 1918 and planned a set-piece attack on the Dobro Pole by Serbian divisions with French ' +
          'and Greek ones, and a British diversion at Lake Doiran. Bulgaria had sent much of its pre-war ' +
          'army home to farm. Its troops had fought since 1912 in four wars; food, clothing and drafts ' +
          'were failing, and desertion was heavy. The government had secretly approached the Allies ' +
          'through Malinov, and Tsar Ferdinand refused to ask for peace while Germany might still force a ' +
          'decision.',
        what: 'Dobro Pole was bombarded on 14 September and stormed on 15 September. The 1,875-metre peak ' +
          'fell that day, and the ridge fighting lasted to 18 September. Bulgarian divisions were driven ' +
          'off and the 11th French and Serbian divisions pushed through. Doiran was a costly British ' +
          'repulse, made irrelevant by the break in the centre. The retreat became a rout, with mutineers ' +
          'marching on Sofia. Nikola Zhekov, who had asked Berlin for troops at once, was replaced by ' +
          'Georgi Todorov. Cavalry drove up the Vardar and the Strumica. About 77,000 prisoners and 500 ' +
          'guns were taken.',
        consequence: 'The armistice of 29 September took Bulgaria out of the war and disarmed its army, leaving ' +
          '10,000 German troops in the country to be interned or fight their way out. Tsar Ferdinand ' +
          'abdicated in favour of his son Boris within days. The collapse removed the shortest rail route ' +
          'of German supply and oil, opened the Danube, and made the Hungarian and Austrian fronts the ' +
          'next problem; Hindenburg had pledged on 17 August to support Bulgaria only when the situation ' +
          'on other fronts permitted, and his reluctance had already been read in Sofia as a refusal.',
      },
      university: {
        cause:
          'The Salonica front was long dismissed in British writing as a sideshow and a waste of divisions, an argument associated with Lloyd George’s quarrel with the westerners in 1917. Work since the 1990s has reversed that verdict in part, and the September 1918 offensive is the evidence: the front ended the war in the Balkans in two weeks.',
        what:
          'The dispute is whether the Bulgarian army was defeated or disintegrated. The French and Serbian accounts treat Dobro Pole as a set-piece victory of the new method, prepared bombardment and assault by fresh divisions. Recent Balkan historiography puts weight on the internal collapse of Bulgaria — war-weariness, the peasant soldiers’ committees, the influence of revolutionary agitation, and the fact that the army had been fighting continuously since 1912 — and notes that the British sector at Doiran held, which complicates a simple story of a broken enemy.',
        consequence:
          'The strategic consequence is not disputed: without Bulgaria, Germany’s southern flank, its grain route and its access to Constantinople went by the end of September, and the armistice with the Ottoman Empire followed within five weeks. Historians of the peace settlement add that the 1919 frontiers of the Balkans were fixed by who held the ground in October 1918, which is why Serbia, Greece and Romania all claim the credit of 1918 to this day.',
      },
    },
    note:
      'Vardar offensive 15 – 29 September 1918; Dobro Pole fighting 15 – 18 September. Bulgarian and German prisoners 77,000 and 500 guns. A Bulgarian ceasefire requested on 24 September in Wikipedia’s account and on 25 September in the encyclopedia’s; the convention signed at Thessaloniki (Salonica) at 22:50 on 29 September 1918 and the ceasefire in force from noon on 30 September, both hours Wikipedia’s, since the printed convention gives no hour and says only that the orders for the cessation of hostilities are to be given at the time of signature; Ferdinand abdicated 3 October, which is the encyclopedia’s date, the Library of Congress study having him forced out at the end of September. The terms themselves, and the fact that 77,000 and 500 guns belong to the battle rather than to the convention, are on the card for the armistice. Source checked: “Vardar offensive”, “Battle of Dobro Pole”, “Armistice of Salonica”, the encyclopedia article on Bulgaria in 1914-1918-online, the Library of Congress country study for Bulgaria, and document 162 of Foreign Relations of the United States: The Paris Peace Conference, 1919, vol. II.',
  },
  {
    id: 'battle_of_megiddo',
    date: '1918-09-19',
    precision: 'day',
    kind: 'offensive',
    title: 'Megiddo: the destruction of the Ottoman armies in Palestine',
    fronts: ['middle_east'],
    countries: ['United Kingdom', 'Ottoman Empire', 'India'],
    figures: ['liman_von_sanders', 'feisal', 'lawrence'],
    levels: {
      primary: {
        cause: 'After losing Jerusalem the Ottomans held a line from the Mediterranean to the Jordan, two ' +
          'armies in the hills and one in the valley. Indian and Australian divisions had been rebuilt ' +
          'from India and Egypt. Lines were thin, short of ammunition and under air watch.',
        what: 'On 19 September 1918 the British EEF attacked on the Plain of Sharon behind a smoke screen, ' +
          'and broke the Ottoman eighth army in hours. Cavalry reached the Esdraelon plain, took Afulah, ' +
          'Beisan and Jenin, and cut the railways behind the Ottoman armies.',
        consequence:
          'Damascus was taken on 1 October by Arab and Australian cavalry, and Megiddo, Daraa and Damascus were all in Allied hands before the month was out. The Ottoman government asked for an armistice, which was signed at Mudros on 30 October.',
      },
      secondary: {
        cause: 'Allenby had lost two divisions and 24 infantry battalions to the western front in the spring, ' +
          'and had to win with cavalry, Indian infantry and air power instead. He kept his concentration ' +
          'a secret by leaving a frontage apparently held, rebuilding his communications, and moving ' +
          'divisions to the coast at night. The Ottoman Yildirim army group under Liman von Sanders, ' +
          'which had replaced the command dismissed after Jerusalem fell in December 1917, was short of ' +
          'men, artillery ammunition and aircraft, with its railway head far to the north and the Hejaz ' +
          'railway destroyed by the Arab revolt.',
        what: 'The battle opened before dawn on 19 September on the Sharon plain. Three corps, British and ' +
          'Indian, broke the Eighth Army’s front by mid-morning. Chaytor’s force crossed the Jordan in ' +
          'pursuit of the Fourth Army, and Australian and New Zealand mounted troops took Es Salt and ' +
          'Amman. The 5th Cavalry and Australian Mounted Divisions rode 70 kilometres into the Esdraelon ' +
          'plain and held Nazareth, Afulah and Beisan, catching the retreat. Liman von Sanders’s ' +
          'headquarters at Nazareth was overrun. He reached Damascus and defended north of it. Fighting ' +
          'at Haritan continued up to the armistice.',
        consequence: 'Allenby’s force destroyed the Ottoman Seventh and Eighth Armies and advanced several hundred ' +
          'miles in a fortnight. About 75,000 prisoners and 360 guns were taken between 19 September and ' +
          'the armistice, a decisive result at little cost, unlike most offensives of the war. The Mudros ' +
          'armistice of 30 October ended the fighting, with Ottomans still holding at Haritan, north of ' +
          'Aleppo. The cavalry victory came from a force whose infantry had been thinned for the west, ' +
          'with air superiority, motor transport, and a Jordan feint that drew Ottoman attention from the ' +
          'coast.',
      },
      university: {
        cause:
          'Megiddo is treated in British military history as the model of the open flank, the proof that the First World War was not only trench warfare, and as Allenby’s masterpiece. The campaign’s centenary syntheses by David Murphy and Matthew Hughes stress the staff work, deception and logistics rather than the romantic charge.',
        what:
          'The contested part is the Arab contribution. T. E. Lawrence’s Seven Pillars of Wisdom made the Hejaz railway campaign and Feisal’s Northern Army central to the fall of Damascus, and writers from David Hogarth onwards have argued the case; critical accounts, and the Arab Revolt literature since, note that Allenby’s army did the decisive work and that the entry into Damascus was contested between Feisal’s men and Allenby’s cavalry, with political consequences for the mandate settlement. Ze’ev Maoz and others examine the Ottoman side and argue that the Ottoman retreat into the Nablus corridor was better conducted than British accounts admit.',
        consequence:
          'The result fixed the postwar Middle East: the Sykes–Picot lines, the British and French mandates, the Hashemite state in Syria that the French expelled in 1920, and the question of Palestine. Historians of the region date the conflicts of the following century from the promises made between 1915 and 1918, which Megiddo delivered on the ground.',
      },
    },
    note:
      'Megiddo 19 – 25 September 1918; Daraa 27 September, Damascus 1 October, fighting at Haritan when Mudros was signed. Allenby’s own GHQ despatch of 31 October 1918 gives 75,000 prisoners and 360 guns taken between 19 September and 26 October, which is the figure published for the campaign to the fall of Damascus; the Damascus-only total varies by account, so only the campaign figure is used here. Allenby had lost two divisions and 24 battalions to the west in the spring 1918 transfers. Liman von Sanders commanded Army Group Yildirim. Source checked: “Battle of Megiddo (1918)”, “Armistice of Mudros”.',
  },
  {
    id: 'meuse_argonne_offensive',
    date: '1918-09-26',
    precision: 'day',
    kind: 'offensive',
    title: 'The Meuse-Argonne offensive and the collapse of the High Command',
    fronts: ['western', 'politics'],
    countries: ['United States', 'France', 'Germany'],
    figures: ['pershing', 'luddendorff', 'hindenburg', 'wilhelm_ii'],
    levels: {
      primary: {
        cause: 'The American armies had grown to over a million, and Pershing wanted a separate operation. The ' +
          'sector was the Meuse and the Argonne forest north of Verdun. The German lines there ran over ' +
          'the ridge between forest and river, with the Sedan railway behind them.',
        what: 'On 26 September 1918 the American First Army, with French armies, attacked the German fifth ' +
          'army’s fortified lines with 216,000 men. The forest and ravines tangled the units; Montfaucon ' +
          'held until 27 September. The Kriemhilde position fell on 14 – 17 October.',
        consequence: 'The Meuse road was open and the Hindenburg line behind the Argonne fell. On 29 September, the ' +
          'British struck the St Quentin Canal and the Americans renewed the Argonne, and German leaders ' +
          'decided the war could not continue and asked for peace talks.',
      },
      secondary: {
        cause: 'Foch’s plan for 26 – 29 September was to attack everywhere at once, so German reserves could ' +
          'not be shifted between sectors: the Americans in the Argonne, the French in the Champagne, the ' +
          'British and Dominions on the Hindenburg line, and the Belgians in Flanders. Pershing’s ' +
          'independent American army, with French aviation, tanks and artillery support, was given the ' +
          'longest and least favourable sector, held by about 450,000 German troops of Army Group ' +
          'Gallwitz. The German soldiers in the line were underfed and many were old or young, though ' +
          'units newly relieved from the east fought stubbornly.',
        what:
          'The offensive was the largest operation in United States military history, involving 1.2 million American soldiers, sailors and marines, 800,000 French and 850 Siamese personnel, with about 2,000,000 men in all, against 450,000 Germans. The first phase from 26 September began well on the flanks but stalled in the forest. The 79th Division failed to take Montfaucon d’Argonne on the first day and took it on 27 September, and American divisions had to be withdrawn to refit. The second phase turned on the attack on the Kriemhilde Stellung at the Côte de Châtillon, fought between 14 and 17 October, which forced the German line back to the Meuse. The third phase from 1 November drove forward along the river towards Sedan. Allied losses are usually put at about 192,000, of which 122,063 American, with German losses of about 126,000, a figure taken from a 1922 encyclopedia.',
        consequence: 'On 29 September, with the Hindenburg line broken at St Quentin Canal and the Argonne attack ' +
          'renewed, Ludendorff told the government the front might collapse at any moment and an ' +
          'armistice must be requested at once; he insisted it come from a government of the Reichstag ' +
          'majority, which meant parliamentarising the empire. Hertling’s cabinet resigned on 30 ' +
          'September and Prince Max of Baden was appointed on 3 October, and sent to Wilson on 4 October. ' +
          'Ludendorff was dismissed on 26 October. On 9 November Max announced the Kaiser’s abdication ' +
          'without authority and handed the chancellorship to Ebert.',
      },
      university: {
        cause:
          'The American battle is remembered as the largest and deadliest of the war for the United States and as proof that the American army had to be fought in its own formations, which was the position Pershing insisted on against Foch’s wish to use American men as drafts in French and British divisions.',
        what:
          'American historiography, especially Robert Ferrell’s America’s Deadliest Battle, is critical of the conduct of the operation: green divisions, poor staff work, inadequate artillery and medical arrangements, and 120,000 casualties in seven weeks, with units broken and reconstituted in the line. The German side of the battle has been recovered more recently, with emphasis on how much was achieved by underfed troops on the defensive, and on the effect on the High Command of 29 September, which is usually placed alongside the break of the Hindenburg line rather than the Argonne advance alone.',
        consequence:
          'The 29 September crisis is the key date in the argument about who lost the war and who ended it, since the army leadership asked for peace while still holding foreign ground and then left the new democratic government to sign, which produced the stab-in-the-back myth. Robert Foley and others place the decision in the military collapse of late September, of which the Meuse-Argonne was one of five simultaneous blows; the German revolution of November, on this reading, followed from a decision already taken by the generals.',
      },
    },
    note:
      'Meuse-Argonne offensive, 26 September – 11 November 1918, 47 days. Strength about 2,000,000 Allied (1.2 million American, 800,000 French, 850 Siamese) against 450,000 Germans. Casualties about 192,000 Allied (American 122,063) and 126,000 German, the German figure taken from Collier’s New Encyclopedia (1922) and weakly sourced. Montfaucon d’Argonne fell on 27 September, not on the first day; the fighting on the Kriemhilde Stellung at the Côte de Châtillon is dated 14 – 17 October. The attack on the Hindenburg line at the St Quentin Canal began on 29 September, the date of the German leadership’s decision to ask for an armistice, though the Hundred Days article also says the Hindenburg Line was “not broken until 17 October”. Prince Max of Baden appointed chancellor 3 October 1918; Ludendorff dismissed 26 October. Source checked: “Meuse–Argonne offensive”, “Hundred Days Offensive”, “Prince Maximilian of Baden”.',
  },
  {
    id: 'armistice_of_thessaloniki',
    date: '1918-09-29',
    precision: 'day',
    kind: 'armistice',
    title: 'The armistice with Bulgaria',
    fronts: ['politics', 'balkans'],
    countries: ['Bulgaria', 'France', 'Serbia', 'Greece', 'Germany', 'Austria-Hungary'],
    figures: ['ferdinand_bulgaria'],
    mapNote: 'Bulgaria moves to the armistice colour this month, which the key already dates to 29 September. Nothing else moves with this card: the convention gave the Allies movement through the country, and the strategical points its secret articles allowed them to occupy are not drawn.',
    levels: {
      primary: {
        cause: 'The Bulgarian army broke on the Vardar in the third week of September 1918, and whole units were marching home. The government asked for an armistice, and a delegation went to Thessaloniki.',
        what: 'The convention was signed at Thessaloniki on 29 September 1918. Bulgaria had to give up the territory it still held in Greece and Serbia, and to demobilise its army, keeping only three divisions and four cavalry regiments.',
        consequence: 'Bulgaria was the first of the Central Powers to leave the war. The Allies were free to move through the country towards Germany and Austria-Hungary, and the map shows Bulgaria in the armistice colour from this month.',
      },
      secondary: {
        cause: 'This card is the paper, not the fighting. Bulgaria’s position at the table was weak, and the terms were written by the commander in the field. The government decided on 25 September to seek an accommodation, and the delegation sent to Thessaloniki took the American consul general in Sofia with it. The terms it accepted were not terribly onerous, and most of the country avoided foreign occupation.',
        what: 'The printed text is a military convention in seven clauses. Bulgaria was to evacuate what it still held in Greece and Serbia, and the army was to be demobilised except for a fighting force of three divisions and four cavalry regiments, two of them for the eastern frontier and the Dobrudja. The troops west of the meridian of Uskub were to lay down their arms and be held as prisoners of war. German and Austrian troops had four weeks to leave. Orders to cease firing were to be given at the moment of signature.',
        consequence: 'Bulgaria was the first of the four Central Powers to make an armistice, and the map gives it a colour of its own from this month. The convention did not occupy the country: a secret article promised that Sofia would not be held unless unusual circumstances arose, and the Allies bought movement through Bulgaria rather than administration of it. What was left standing was a Bulgarian government and a working civil administration. The tsar was gone within days. The territorial settlement came later, at Neuilly on 27 November 1919.',
      },
      university: {
        cause: 'The convention is usually dated to the signature and read as the end of Bulgaria’s war. The printed text invites a slower reading. Seven clauses and four secret articles: the passage of Allied forces over Bulgarian territory, and the railways, roads, waterways and harbours that went with it, were left to a special covenant, with negotiations to begin within about eight days, along with control of the telephone, the telegraph and the wireless stations. A certain number of strategical points in the interior were to be occupied provisionally, as a guaranty and not as administration, with an assurance that Sofia would not be held unless unusual circumstances arose. The commander in chief reserved the right to demand that Bulgaria cut every remaining relation with its former allies. Movement and pressure were the object; the machinery of both was deferred.',
        what: 'Two readings of the surrender are in circulation and the printed text settles neither. One account puts about 150,000 Bulgarian soldiers west of the Skopje meridian at the Allies’ disposal as hostages, under the clause on prisoners. The clause as printed says that the troops west of the meridian of Uskub are to lay down their arms and be treated as prisoners of war until further order, with their officers keeping their swords, and prints no number at all. The familiar tally of some 77,000 men and 500 guns is a count from the battle, not from the convention, and it is carried on the Vardar card. The demobilisation clause is precise where the prisoner clause is silent: three divisions of sixteen battalions each and four cavalry regiments, two divisions for the eastern frontier and the Dobrudja, one for the railways.',
        consequence: 'What the convention secured was what the Allies needed: four weeks for the German and Austrian forces to go, Bulgarian ports opened to Allied and neutral ships, and a reserved right to cut Bulgaria off from its former allies. An instrument that left its own military details to negotiations to begin in eight days was written in a hurry by a command that intended to use the railways and the ports at once. The road to Constantinople lay through Bulgaria, and the armistice with the Ottoman Empire followed on 30 October. What the map records here is only that a belligerent stopped fighting, and that is precisely what the convention settled.',
      },
    },
    note: 'This card is the paper; the fighting of 15 to 30 September is on the card for the Vardar breakthrough, and the two are not meant to repeat each other. The terms are read in the printed text of the “Military Convention Regulating the Conditions of Suspension of Hostilities Between the Allied Powers and Bulgaria” of 29 September 1918 in Foreign Relations of the United States: The Paris Peace Conference, 1919, vol. II, document 162, which prints seven numbered clauses and four secret articles and gives the signatories as General Franchet d’Esperey, André Liaptchew and General Loukoff. Two things that are often printed as terms of the armistice are not in that text. The clause about the troops west of the meridian of Uskub prints no number; the figure of about 150,000 soldiers delivered to the Entente as hostages is Wikipedia’s, under its own numbering of the same clause. And the tally of some 77,000 men and 500 guns is a count from the battle, carried on the Vardar card, not from the convention. The hours are Wikipedia’s too: it dates the signature to 10:50 p.m. on 29 September and the cease-fire to noon on 30 September, while the printed convention says only that the orders for the cessation of hostilities will be given at the time of signature, so no hour is printed on this card. The day the Bulgarian government decided to ask is given as 24 September by Wikipedia and as 25 September by the encyclopedia article on Bulgaria, and no arithmetic is drawn from either. Ferdinand’s abdication is dated 3 October 1918 by the encyclopedia, in favour of his son Boris; the Library of Congress study says only that the parties in power forced him to abdicate at the end of September. Two clauses are left out of the prose because they belong in a footnote rather than on a card: restitution to Greece of the matériel of the Fourth Greek Army Corps “in so far that it has not been sent to Germany”, and the employment of Bulgarian prisoners of war in the East by the allied armies until the peace, without reciprocity for Allied prisoners. Sources checked: “The Bulgarian Armistice Convention, Signed September 29, 1918” in Foreign Relations of the United States; the encyclopedia article on Bulgaria in 1914-1918-online; the Library of Congress country study for Bulgaria; Wikipedia’s “Armistice of Salonica” and “Vardar offensive”.',
  },
  {
    id: 'damascus_taken_1918',
    date: '1918-10-01',
    precision: 'day',
    kind: 'battle',
    title: 'Damascus falls to the pursuit after Megiddo',
    fronts: ['middle_east'],
    countries: ['United Kingdom', 'Australia', 'India', 'Ottoman Empire'],
    figures: ['feisal'],
    note: 'Three families for the day, and they disagree about the order of entry. Wikipedia’s Capture of Damascus prints the capture as 1 October 1918 and the 3rd Light Horse Brigade in the city at 05:00 that morning; History of War has the Turks losing control on 30 September, the first Arab Revolt troops entering on 1 October and the first of Allenby’s men on 2 October; The Times History of the War writes of 30 September to 1 October. Wikipedia also quotes Hughes that GHQ wanted Feisal’s force in first “even though the EEF had won the battle and reached Damascus before the Arabs”, so which troop was first is in this note and not in the prose. So is Daraa: the Megiddo account prints 27 September, the Damascus account heads the action 28 September, and this site’s line starts on the 27th. The rearguards at Kaukab and Kiswe on 30 September, which this card’s prose repeats, are on the Wikipedia account of the pursuit only.',
    mapNote: 'The pin sits on Damascus at the northern end of Feisal’s march line, which starts at Daraa. This map has no Syria polygon: the whole Ottoman Empire is one block, still in the Central Powers colour in this month, so the fall of the city is a pin and a line and nothing else.',
    levels: {
      primary: {
        cause: 'Allenby’s Egyptian Expeditionary Force broke the Ottoman armies at Megiddo on 19 September 1918, and his cavalry followed the retreat north across the Jordan towards Damascus.',
        what: 'The Ottoman army lost control of Damascus on 30 September, and on 1 October 1918 troops of the Arab Revolt were in the city, with British and Australian cavalry close behind.',
        consequence: 'With the capital of Ottoman Syria gone, the rest of the country fell without a serious fight, and the war against the Ottomans ended the following month.',
      },
      secondary: {
        cause: 'Megiddo destroyed the Ottoman Seventh and Eighth Armies, and the remnants retreated north through Palestine towards Damascus, shadowed by the Desert Mounted Corps and by Feisal’s Northern Army, which had its own reason to want the city. Rearguards fought at Kaukab and Kiswe on the way in, but nothing covered Damascus itself once the columns had passed.',
        what: 'The Ottoman withdrawal was finished on 30 September and the city lay open. Troops of the Arab Revolt were in Damascus on 1 October 1918, and the first of Allenby’s men came in within a day; which came first is disputed between the accounts. The 3rd Light Horse Brigade pushed on past the city to cut the Homs road.',
        consequence: 'Damascus was the political prize as much as the railway junction, and holding it meant Feisal’s force, not only Allenby’s, was there when the claim was made. Ottoman Syria collapsed without another battle, and fighting was still going on north of Aleppo when the armistice of Mudros was signed a month later.',
      },
      university: {
        cause: 'Allenby’s victory at Megiddo on 19 September 1918 destroyed the Ottoman Seventh and Eighth Armies and opened the inland pursuit, in which the Desert Mounted Corps and Prince Feisal’s Sherifian Army pressed the retreating Ottoman forces north towards Damascus. The site’s Megiddo card already dates Daraa to 27 September and Damascus to 1 October; this card is the event at the end of that pursuit, and it now carries its own three-family backing.',
        what: 'One account has the Turks losing control of the city on 30 September, so that when the 3rd Light Horse Brigade, ordered to cut the Homs road, came in before dawn on 1 October the city was effectively open. Wikipedia puts the brigade in at 05:00 on 1 October; History of War puts the first Arab Revolt troops in on 1 October and the first of Allenby’s men on 2 October; The Times History of the War writes of 30 September to 1 October. The order of entry is disputed and is not resolved here. What all three agree on is the date of the city’s fall: 1 October 1918.',
        consequence: 'The capture made Damascus the seat of Feisal’s government, which is why the city’s entry is contested in the postwar literature as well as in 1918: Wikipedia quotes Hughes that GHQ instructed troops to let Feisal’s force in first “even though the EEF had won the battle and reached Damascus before the Arabs”. Militarily the pursuit went on to Aleppo and Haritan, where Ottomans were still fighting when Mudros was signed; the fall of the interior cost the Ottoman government its last theatre outside Anatolia.',
      },
    },
  },
  {
    id: 'second_battle_of_durazzo_1918',
    date: '1918-10-02',
    precision: 'day',
    kind: 'battle',
    title: 'The bombardment of Durazzo',
    fronts: ['naval'],
    countries: ['Austria-Hungary', 'Italy', 'United Kingdom', 'United States', 'Australia', 'Albania'],
    mapNote: 'Albania is in the at-peace colour from this month, and Durrës is a point too small to resolve at this scale, so neither the bombardment of 2 October nor the entry into the port is drawn.',
    levels: {
      primary: {
        cause: 'Germany and Austria used the Albanian port of Durazzo to send supplies to their ally Bulgaria, and by the end of September 1918 Bulgaria was leaving the war. The Allies wanted the port closed to the armies retreating through it.',
        what: 'On 2 October 1918 Italian and British cruisers bombarded Durazzo: the port, the shipping in it and its shore batteries, with destroyers and American submarine chasers screening them against submarines. Aircraft had attacked the troops and the batteries as the fleet crossed the Adriatic.',
        consequence: 'The three shore batteries were destroyed and the shipping in the harbour was sunk or damaged, though the Austro-Hungarian warships fought their way out. The last Austro-Hungarian units left the port on 10 October, and Italian troops occupied it on 16 October.',
      },
      secondary: {
        cause: 'The navy’s official history says Germany and Austria used Durazzo to send supplies to their ally Bulgaria, and by the end of September 1918 Bulgaria was leaving the war. The encyclopedia article on Albania has General Franchet d’Espèrey lead troops to the port and bombard it on 2 October to thwart the evacuation of the Bulgarian and German armies and, presumably, to keep the Serbs and the Italians from fighting each other over the country. Before the attack the Austro-Hungarian government had decided to withdraw most of its warships.',
        what: 'The order of battle in the battle’s own account names the Italian battleship Dante Alighieri, three Italian armoured cruisers, three Italian and five British light cruisers, fourteen British and two Australian destroyers, eight Italian torpedo boats, MAS boats, aircraft and twelve American submarine chasers. Aircraft hit the troop concentrations and the batteries while the fleet was still crossing. Then Italian and British cruisers formed a two-echelon line and shelled the port from about 8,000 yards, while the chasers charted a clear path through a minefield and patrolled against submarines.',
        consequence: 'Three shore batteries were destroyed, a steamer was sunk and two more merchantmen were hit, and the same account’s loss table lists two destroyers, a torpedo boat and two submarines damaged. The Allies did not come through clean: five light cruisers and a destroyer were damaged, and HMS Weymouth lost a large part of her stern and four of her crew to a torpedo from U-31. The Americans reported sinking both attacking submarines and had sunk neither.',
      },
      university: {
        cause: 'The operation is recorded twice by the navy that fought it, in two registers that do not agree. In the official history of American naval participation in the war it is the biggest naval battle of the war after the United States entered it, and the account is tactical and confident: two enemy submarines either badly damaged or destroyed, a chaser that dropped eight depth charges over one standing towards the cruisers and counted plate and oil in the water. In the battle article it is the same action and neither submarine dies. In the encyclopedia article on Albania it is not a naval action at all but a move by Franchet d’Espèrey to close a port on retreating armies and to keep Allied contingents apart. These are not contradictions; they answer different questions about one event.',
        what: 'Where the sources disagree is instructive rather than trivial. Eleven chasers in one naval source and twelve in another, and the force screened is British, French and Italian in the museum’s text while the bombarding cruisers are Italian and British in the official history of the same institution. The submarines are destroyed or ruined on the one hand, damaged and safely home on the other, with the American claim recorded as an error. What all three agree on is the least dramatic point, that the port was shelled. The battle article names the Italian armoured cruisers San Giorgio, San Marco and Pisa for the shelling, and records the hospital ship Baron Call stopped, searched and allowed to proceed. What none gives is how many Albanians died in a bombardment that destroyed most of the Old City and the royal palace.',
        consequence: 'The port was evacuated by the Austro-Hungarian forces that had used it. What the navy’s own records add is a claim about scale — the largest action after America’s entry — made in one institution’s two publications, which is one family and not two, and is carried here as their claim. The political consequence is the one the map cannot show: Albania had no government of its own when its ports opened, the prince having left in 1914 and many clan chiefs recognising no superior authority, and the Library of Congress study lists the armies that held it at the armistice — Italian, Serbian, Greek and French — the list of claims to be reconciled at the peace conference, and the reason the country is drawn at peace rather than as anyone’s conquest.',
      },
    },
    note: 'The two naval sources disagree with each other, and the battle article disagrees with both, so the disagreement is disclosed rather than settled. The Naval History and Heritage Command gives a squadron of 11 submarine chasers at Durazzo on 2 October 1918, screening a British, French and Italian force; the battle’s own order of battle gives 12 American submarine chasers under Captain Charles P. Nelson and Lieutenant Commander E. H. Bastedo, with Italian and British ships and no French ones. On the submarines the navy’s official history is confident: submarine chaser No. 129 dropped eight depth charges directly over a submarine seen standing towards the cruisers, and officers counted metal plate and great masses of oil in the water afterwards, while No. 215 and No. 128 attacked a second boat and brought up steel plate and wreckage; that history concludes that two hostile submarines were either badly damaged or destroyed. The battle article names the two boats as U-29 and U-31, has both damaged by depth charges and both taken home, and says that the American force reported sinking them but had not. Only that article gives the fates of the ships in the harbour in detail — the warship Scharfschütze hit with three men killed and five wounded, torpedo boat No. 87 struck by a torpedo that failed to explode, SMS Dinara away unscathed, the steamer Stambul sunk and the Graz and Herzegovina hit but surviving, the hospital ship Baron Call stopped and searched and allowed to proceed — and the same article gives the Allied loss list as five light cruisers and a destroyer damaged, with HMS Weymouth losing a large part of her stern and four of her crew to U-31. The damage to the town rests on that article alone: civilians began fleeing at the first shells, many casualties were inflicted on the town’s own population, the Old City next to the harbour was largely destroyed, and the royal palace, once the residence of Prince Wilhelm zu Wied, was destroyed completely. No account gives how many Albanians died. The encyclopedia article on Albania gives the same date and a political purpose — Franchet d’Espèrey bombarding the port to thwart the evacuation of the Bulgarian and German armies and, presumably, to keep the Serbs and Italians apart — and is the only source for the agreement reached at Paris on 7 October 1918 allowing Italian troops to replace the French at Korçë, so that agreement is recorded here and not printed as fact in the prose. The Library of Congress study has the Austro-Hungarian withdrawal from Albania beginning within days of the September breakthrough and Italy holding most of the country at the armistice of 11 November. Sources checked: “American Naval Participation in the Great War” and the museum page “WWI: Submarine Chasers” of the Naval History and Heritage Command; the encyclopedia article on Albania in 1914-1918-online; the Library of Congress area study for Albania; Wikipedia’s “Battle of Durazzo (1918)”, citing Paul G. Halpern’s naval history of the war and Halpern and Koburger on the Adriatic.',
  },
  {
    id: 'battle_of_vittorio_veneto',
    date: '1918-10-24',
    precision: 'day',
    kind: 'offensive',
    title: 'Vittorio Veneto and the dissolution of Austria-Hungary',
    fronts: ['italian'],
    countries: ['Italy', 'Austria-Hungary', 'Germany', 'United Kingdom', 'France', 'United States'],
    figures: ['diaz', 'boroevic', 'karl_i'],
    levels: {
      primary: {
        cause: 'Italy had defended the Piave since 1917 and had beaten back the last Austro-Hungarian attack ' +
          'in June. By October the Empire’s armies were short of food, and the national groups inside ' +
          'them were refusing to fight for Vienna. Diaz waited until an attack was certain.',
        what: 'On 24 October 1918, a year after Caporetto, five Italian armies attacked along the Piave. They ' +
          'forced the river crossings at once. The Austro-Hungarian armies broke up into national columns ' +
          'marching home, and by the end of October they had simply disbanded.',
        consequence: 'Austria-Hungary signed an armistice at Villa Giusti on 3 November, firing to stop on 4 ' +
          'November. Some 448,000 soldiers and over 5,000 guns were taken in ten days. The empire ' +
          'dissolved, Czechs, Slovaks, South Slavs and Poles formed states, and Karl withdrew.',
      },
      secondary: {
        cause: 'Diaz had rebuilt the army after Caporetto with deeper defence, mobile reserves and better ' +
          'leave, and he refused to attack until the odds were certain. The Austro-Hungarian army in ' +
          'October 1918 held a shortened front with 46 infantry and 6 cavalry divisions against 57 Allied ' +
          'infantry divisions, with 6,030 guns against 7,700, and both sides were consumed by influenza ' +
          'and malaria. On 1 November Hungary’s new government under Count Mihály Károlyi recalled the ' +
          'soldiers conscripted in Hungary, which removed much of the army’s manpower. The Czech and ' +
          'South Slav regiments had begun to refuse orders.',
        what:
          'The order of battle included 52 Italian divisions, three British, two French and the 332nd United States Infantry Regiment, with 600 aircraft establishing air superiority. Three armies were to cross the Piave towards Vittorio Veneto and cut the rail junction between the two Austrian armies; the mountain armies on the Grappa were to hold and then follow up. The crossing of the flooded river on 24 October succeeded on the Papadopoli island, where Italian engineers rowed British troops across in the dark, and the bridgeheads were consolidated despite a counter-attack on 26 October. The renewed attack on 27 October broke the Austrian defence, and the retreat to the Piave line turned into a general discharge of the armies. The Italians reached the Tagliamento and took Trieste by an amphibious expedition on 3 November, and Italian troops later occupied Innsbruck and all North Tyrol with 20,000 to 22,000 men.',
        consequence: 'The armistice of Villa Giusti required evacuation of territory occupied since 1914, plus South ' +
          'Tirol, Tarvisio, the Isonzo valley, Gorizia, Trieste, Istria and part of Dalmatia, internment ' +
          'or expulsion of German troops within fifteen days, and free use of its communications, opening ' +
          'the road to Germany from the south. The Dual Monarchy ceased to exist as a fighting power and ' +
          'a state: the Czechoslovak and South Slav states were proclaimed, and Karl’s renunciation of ' +
          'government on 11 November left Austria a republic. The battle ended the war on the Italian ' +
          'front a week before the western armistice.',
      },
      university: {
        cause:
          'Vittorio Veneto was long celebrated in Italy as the triumph that completed the redemption of Caporetto and justified the war. Revisionist work, especially John R. Schindler’s, argues that the Austro-Hungarian army was disintegrating before the attack and that the Italian account of a battle of annihilation understates the extent to which the enemy simply went home.',
        what:
          'The disputed point is the weight of the military versus the political cause. The capture of 448,000 men and 5,000 guns in ten days is not a story of a bloodless collapse, and the fighting on the Grappa and on the Piave bridgeheads was hard; but the recall of the Hungarian contingents by the Károlyi government on 1 November and the mutinies of the Slav regiments did work that no Italian division had to do. Both sides were weakened by the influenza pandemic, which is often left out of the order of battle.',
        consequence:
          'The battle also matters for the postwar settlement and for Italian memory: the borders of 1919 gave Italy Trentino, South Tyrol, Trieste and Istria but not Fiume or Dalmatia, and the grievance over the unfinished victory fed the politics of the following years. In the historiography of the Habsburg lands the same ten days are the revolution of 1918, not a defeat, and the national councils date their states from these October days.',
      },
    },
    note:
      'Battle of Vittorio Veneto, 24 October – 4 November 1918. Allies 57 infantry divisions (52 Italian, 3 British, 2 French, plus the 332nd US Infantry Regiment) and 7,700 guns; Austria-Hungary 46 infantry and 6 cavalry divisions and 6,030 guns; over 5,000 guns and 448,000 men captured, about one third of the imperial and royal army. The same article elsewhere gives prisoners as 50,000 by 31 October, 100,000 by 1 November and 300,000 by 4 November, which conflicts with the 448,000 in its own lead; the larger figure is used in the text and the smaller is recorded here. Armistice of Villa Giusti signed 3 November 1918; the article gives the ceasefire as beginning at 15:00 on 4 November, twenty-four hours after signature, while many accounts put it in force on 3 November, so both dates are shown. Károlyi’s government recalled the Hungarian conscripts on 1 November. Sources checked: “Battle of Vittorio Veneto”, “Armistice of Villa Giusti”.',
  },
  {
    id: 'kiel_mutiny',
    date: '1918-10-29',
    precision: 'day',
    kind: 'revolution',
    title: 'The Kiel mutiny begins',
    fronts: ['naval', 'home', 'politics'],
    countries: ['Germany', 'United Kingdom'],
    figures: ['scheer'],
    levels: {
      primary: {
        cause: 'By late October 1918 Germany had asked the Allies for an armistice and promised to stop the ' +
          'submarine war. The High Seas Fleet’s officers planned otherwise. They meant to sail into the ' +
          'North Sea and fight the British, rather than surrender without a fight.',
        what: 'Sailors at Wilhelmshaven refused to sail on 29 October, and on 30 October the stokers put out ' +
          'the fires. On 3 November in Kiel, crowds of sailors and workers were joined by the troops sent ' +
          'to shoot them, and councils took over.',
        consequence:
          'Within days sailors’ and soldiers’ councils had been formed in the ports and the cities of Germany, and the empire had no force to oppose them. The mutiny at Kiel was the beginning of the revolution that ended the monarchy on 9 November.',
      },
      secondary: {
        cause: 'The government made Wilson’s required concession by recalling the submarines from 20 October, ' +
          'over Admiral Scheer’s objections. Scheer and Hipper, the fleet commander, wanted the fleet to ' +
          'fight the Grand Fleet before an armistice. Hipper ordered the attack on 24 October and Scheer ' +
          'approved it on 27 October, and the fleet assembled on the Schillig Roads. The naval command ' +
          'ordered it without the government’s knowledge or approval. Officers wrote that they meant to ' +
          'go down with the flag flying, while the naval war command was horrified.',
        what:
          'On the night of 29 October, when the order to sail came through, the crews of the battleships Thüringen and Helgoland refused. Eleven sailors of the Prinzregent Luitpold were arrested, and the next day nearly the whole crew of six hundred walked off in support of them. The fleet’s sailing was called off on 30 October and the squadrons dispersed, the squadron carrying the arrested men going up the Kiel Canal. Sailors from it came ashore at Kiel on 3 November to demand their comrades’ release. A meeting of several thousand that afternoon was fired on by troops, killing several men, and the crowd marched on the barracks with workers’ leaders. On 4 November the soldiers sided with the demonstrators, Admiral Souchon released the imprisoned sailors, and a workers’ and soldiers’ council took control of Kiel under the slogan Frieden und Brot, peace and bread. The fourteen points the council put forward pointed towards a liberal, social and democratic order in which militarism would have no place.',
        consequence:
          'Delegates carried the councils to Hamburg, Bremen, Hanover, Cologne and Munich within a week, and the movement spread without a party directing it. The fleet was saved from the sortie, and its ships were later interned at Scapa Flow. The mutiny made the position of the Kaiser untenable: officers no longer counted on the fleet, and the army would not march. The revolution that began at Kiel forced the abdication on 9 November and produced the armistice two days later.',
      },
      university: {
        cause:
          'The historiographical argument is about who mutinied. Ulrich Herbert and others describe the winter 1918 rising as a sailors’ and soldiers’ movement with little party leadership and few revolutionary aims beyond peace and democracy, while the traditional West German account stressed the Spartacus group and the risk of a Russian-style council republic.',
        what:
          'The provenance of the sortie order is itself disputed, and the sources are the memoirs of the officers who gave it. Hipper wrote that the order was his own; Scheer’s account says he approved it late and was not told that the operation had been planned while peace negotiations were under way. The article’s own judgement is blunt: the naval leadership was itself mutinous, an admirals’ rebellion against the political leadership’s order to hold back, with operations that ran contrary to the government’s instructions. Wilhelm Souchon at Kiel had been posted only on 30 October and had to rely on a staff that misread the situation.',
        consequence:
          'The Kiel events are therefore read as the moment when the German war state lost its monopoly on force, and as the origin of the council movement whose demands for democratisation, released prisoners and an end to the state of siege were more social-democratic than Bolshevik. The later East German historiography made 3 November the start of a revolution of the working class; since reunification the emphasis has fallen on the councils’ support for parliamentary government, and on the failure of the left that followed in 1919.',
      },
    },
    note:
      'Order to sail issued by Hipper 24 October 1918 and approved by Scheer 27 October; refusals and arrests on the night of 29 October at Wilhelmshaven, sailing cancelled 30 October, Kiel meeting and shooting 3 November, council in control 4 November. The mutiny is dated here to the first arrests of 29 October, which is why the day is given; the Kiel rising itself was 3 – 4 November. Source checked: “Kiel mutiny”.',
  },
  {
    id: 'armistice_of_mudros',
    date: '1918-10-30',
    precision: 'day',
    title: 'The Armistice of Mudros',
    kind: 'armistice',
    fronts: ['politics'],
    countries: ['Ottoman Empire', 'United Kingdom'],
    note: 'Encyclopaedia Britannica dates the Armistice of Mudros to 30 October 1918, signed at Mudros ' +
      'between the Ottoman Empire and Great Britain representing the Allies. It records the surrender of ' +
      'garrisons in the Hejaz, Yemen, Syria, Mesopotamia, Tripolitania and Cyrenaica, the occupation of ' +
      'the Straits, and the demobilisation of the army. The National Army Museum dates the same signature ' +
      'to 30 October 1918. This card is the armistice. It does not retell the Palestine campaign.',
    levels: {
      primary: {
        cause: 'The Ottoman Empire had been at war since 1914, and by the end of October 1918 its government ' +
          'was ready to stop. Britain negotiated for the Allies. The meeting was at Mudros, a harbour on ' +
          'the island of Lemnos.',
        what: 'On 30 October 1918 the Ottoman Empire signed the armistice. Garrisons still outside Anatolia ' +
          'were to be given up. The Allies were to occupy the Straits. The Ottoman army was to be ' +
          'demobilised. Those are the terms this card records.',
        consequence: 'The Ottoman war was over. Garrisons outside Anatolia were to be given up, and the Straits were ' +
          'to pass under Allied control. What happened to the lands afterwards was for the peace, not for ' +
          'this armistice.',
      },
      secondary: {
        cause: 'By late October the Ottoman government had asked to stop the war. Britain took the negotiation ' +
          'in the name of the Allies, and the delegates met at Mudros on Lemnos, a harbour the Allies ' +
          'already used. An armistice, not a peace treaty, was what was on offer: an end to fighting, the ' +
          'handing over of garrisons, and control of the Straits. The military collapses elsewhere in the ' +
          'autumn are other cards. This one begins at the table.',
        what: 'The armistice was signed on 30 October 1918. Britannica and the National Army Museum both give ' +
          'that day. The terms Britannica sets out, and which this card uses, required the remaining ' +
          'Ottoman garrisons in the Hejaz, Yemen, Syria, Mesopotamia, Tripolitania and Cyrenaica to be ' +
          'surrendered, the Straits to be occupied, and the army to be demobilised. No strength and no ' +
          'casualty figure is attached. The signature is the event, and the campaigns that led the ' +
          'government to seek it are not retold here.',
        consequence: 'Mudros ended the Ottoman war as a legal fact. Garrisons outside Anatolia were to be given up, ' +
          'which is why occupations far from Lemnos emptied in the following weeks. The Straits, closed ' +
          'to the Allies since 1914, were to be opened under their control. Demobilisation limited what ' +
          'the Ottoman army could do while the peace was argued. The argument about partition came ' +
          'afterwards and is outside this timeline. The armistice itself is the stop.',
      },
      university: {
        cause: 'Mudros is often written as a sentence at the end of a battle narrative, which makes the ' +
          'armistice look like a mere consequence and hides it as a negotiated instrument. The government ' +
          'in Constantinople had its own reasons to stop, including the fear of Allied landings and the ' +
          'collapse of the other Central Powers, and the soldiers still in the field were not all in one ' +
          'theatre. Britain’s decision to sign for the Allies, rather than wait for a general conference, ' +
          'shaped the terms. That is a political choice and deserves its own card.',
        what: 'The date and the signatories are not in dispute: 30 October 1918, the Ottoman Empire and Great ' +
          'Britain representing the Allies, at Mudros. Britannica lists the territorial and military ' +
          'clauses this card repeats, and the National Army Museum dates the signature. Nothing is added ' +
          'about manpower or losses. Nothing is added about the course of the fighting in Palestine or in ' +
          'the Caucasus. Those campaigns record the signing as an outcome. This card records the ' +
          'instrument, so the outcome is not asked to stand in for the text.',
        consequence: 'The armistice, not the peace treaty, is what actually stopped Ottoman fighting and started the ' +
          'Allied occupation of the Straits. Later arguments about the empire’s partition, about ' +
          'resistance in Anatolia, and about how harshly the terms were read, all use Mudros as the ' +
          'baseline and then leave it. Histories that mention the signature only inside a victory ' +
          'despatch tend to skip the clauses. The clauses are the event: garrisons given up, Straits ' +
          'occupied, army demobilised, and the war with the Ottoman Empire brought to a formal end while ' +
          'the German war was still open.',
      },
    },
  },
  {
    id: 'german_revolution_of_november_1918',
    date: '1918-11-09',
    precision: 'day',
    kind: 'revolution',
    title: 'The German Revolution of November 1918',
    fronts: ['home', 'politics'],
    countries: ['Germany'],
    figures: ['wilhelm_ii', 'scheidemann', 'liebknecht_karl', 'luxemburg_rosa'],
    levels: {
      primary: {
        cause: 'The fleet mutinied in late October, and workers’ and soldiers’ councils spread nationwide ' +
          'within a week. The emperor and the generals could not trust troops to retake the cities. ' +
          'Prince Max of Baden knew an armistice needed a government of the Reichstag parties.',
        what: 'On 9 November 1918 workers’ and soldiers’ councils seized Berlin’s public buildings. Philipp ' +
          'Scheidemann proclaimed a German republic from a Reichstag window, hours before Karl Liebknecht ' +
          'proclaimed a socialist one. Prince Max handed the chancellorship to Friedrich Ebert; Wilhelm ' +
          'II fled the next day.',
        consequence: 'The empire fell in a day and almost without bloodshed. Councils held power across Germany, and ' +
          'Bavaria had declared itself a people’s state on 8 November. Authority passed to six ' +
          'commissioners, three Majority Social Democrats and three Independents, while the old officers ' +
          'and officials stayed.',
      },
      secondary: {
        cause: 'The revolution followed the military collapse of late September, when the High Command asked ' +
          'for an armistice and insisted that a government of the parliamentary majority make the ' +
          'request, so the army would not sign its own defeat. The October reforms made the government ' +
          'answerable to the Reichstag, released political prisoners, and lifted the state of siege, ' +
          'which legalised the strike and council movement that the January strikes had begun. With the ' +
          'fleet lost, the army refusing to march and the monarch’s abdication demanded in Wilson’s third ' +
          'note, no institution left could govern in the emperor’s name.',
        what: 'By 8 November councils held the ports, Munich, where Kurt Eisner proclaimed a People’s State, ' +
          'and most larger states. On 9 November the Berlin garrison would not fire on the crowds, and ' +
          'the council executive took the city. Scheidemann proclaimed a republic from a Reichstag window ' +
          'to forestall one on the Moscow model, and Liebknecht spoke in the Lustgarten hours later. Max ' +
          'announced the Kaiser’s abdication on his own authority and made Ebert, leader of the Majority ' +
          'Social Democrats, chancellor that day. Ebert claimed the councils’ mandate. Wilhelm’s formal ' +
          'abdication was not signed until 28 November.',
        consequence:
          'Ebert made a pact with the army leadership through General Groener: the officer corps would support the government against the left, and the government would preserve order and the existing command structure. That bargain decided the shape of the republic. The councils were allowed to fade in favour of a national assembly elected in January 1919; the Spartacist rising in Berlin in January was suppressed by troops and volunteers, and Liebknecht and Rosa Luxemburg were murdered in Berlin on 15 January 1919.',
      },
      university: {
        cause:
          'The revolution is the foundation of the argument about the Weimar Republic’s weakness. The traditional social-democratic account presents 1918 as a moderate revolution that saved Germany from Bolshevik terror; the revisionist account, associated with Edward Evans and Vernon Lidtke and with the 1960s debate, holds that the leadership chose an alliance with the officers over democracy, and that the republic was therefore stillborn.',
        what:
          'Recent work stresses how little control anyone had: the movement was made in the councils by delegates whose demands were peace, demobilisation, the eight-hour day and democratic rights, and the party leaders were surprised by it. The word revolution is applied to a transfer of power that happened almost without fighting in Berlin on 9 November, and the violence came later, in 1919, when the government used the very troops it had bargained with. Historians also dispute the language, since the events of November 1918 in Germany are not usefully described as a single revolution but as a wave of local takeovers with no capital.',
        consequence:
          'Two long arguments follow. Ebert’s pact with Groener is judged either as the only way to keep Germany from civil war or as the deal that preserved the old elites and gave the republic no loyal administrative or military class. And the stab-in-the-back legend, that the army was undefeated and was betrayed by the councils and the politicians of 9 November, was built out of precisely these days and became the Weimar Republic’s most durable poison.',
      },
    },
    note:
      'Councils in power across Germany by 8 November; Bavarian People’s State proclaimed 8 November; Berlin and the republic proclaimed 9 November 1918; Max’s unauthorised proclamation of the abdication 9 November; Wilhelm crossed into the Netherlands on 10 November and signed his formal abdication on 28 November. Rat der Volksbeauftragten formed 10 November with three Majority Social Democrats and three Independents. Source checked: “German Revolution of 1918–1919”, “Philipp Scheidemann”.',
  },
  {
    id: 'armistice_of_11_november_1918',
    date: '1918-11-11',
    precision: 'day',
    kind: 'armistice',
    title: 'The Armistice of 11 November 1918',
    fronts: ['western', 'politics', 'naval'],
    countries: ['Germany', 'France', 'United Kingdom', 'United States', 'Poland'],
    figures: ['foch', 'pilsudski_jozef'],
    levels: {
      primary: {
        cause: 'German armies were still on foreign soil in October, but the High Command said on 29 September ' +
          'that the front could not hold. After three American notes and a week’s revolution, the new ' +
          'government asked for an armistice and told to accept the Allied terms.',
        what: 'The Germans had seventy-two hours to accept the Allied terms. The armistice was signed on 11 ' +
          'November 1918. German troops had to leave France, Belgium and Russia; the Allies were to hold ' +
          'on the Rhine, and Germany had to surrender its warships.',
        consequence: 'Firing stopped in the west at 11:00 a.m. on 11 November 1918, six hours later. Erzberger ' +
          'signed for Germany. The armistice was extended three times until the peace. Poland regained ' +
          'independence then, and Piłsudski, freed from Magdeburg, became Chief of State in Warsaw.',
      },
      secondary: {
        cause: 'The Allied terms were drafted by Foch’s staff with British and American input, and reflected ' +
          'that year’s argument about whether the German army could be forced to peace or only to stop ' +
          'fighting. Foch and Haig had both doubted that the Allies could break into Germany in 1918, so ' +
          'the terms were designed to make renewed fighting impossible rather than to occupy Germany. The ' +
          'German delegation under Matthias Erzberger corrected some impossible demands, including the ' +
          'surrender of more submarines than the fleet possessed, and extended the withdrawal timetable, ' +
          'and protested the harshness of the terms before signing.',
        what: 'Germany had to leave the invaded countries and the occupied east, and to surrender 5,000 guns, ' +
          '25,000 machine guns, 3,000 minenwerfer, 1,700 aircraft, 5,000 locomotives, 150,000 carriages ' +
          'and 5,000 trucks, plus the warships. Interned at Scapa Flow, the fleet was scuttled by its ' +
          'crews in June 1919. The Rhineland and the bridgeheads were to be occupied, the railways handed ' +
          'over, the works left intact. Allied prisoners were freed at once; German prisoners were not. ' +
          'The blockade continued. The Soviet legislature annulled Brest-Litovsk on 13 November.',
        consequence:
          'The armistice ended the fighting on land and sea against Germany, and it was renewed until the Treaty of Versailles was signed on 28 June 1919 and came into force in January 1920. Because the German army was still on foreign ground when the firing stopped, and because the government that signed was the new democratic one, the army leadership was able to spread the claim that the army had been undefeated and betrayed, a claim the officers had planned for by pushing the request for an armistice onto the politicians in September 1918.',
      },
      university: {
        cause:
          'The central question is what an armistice was meant to be. Foch’s own view was that the terms were too lenient, since they left the German army intact and its territory unoccupied, and that only unconditional surrender or a march into Germany would have settled the matter. This has generated a long debate about whether 11 November was a genuine victory for the Allies or a negotiated end that left Germany able to resume.',
        what:
          'Historians distinguish an armistice, a suspension of fighting on terms, from unconditional surrender, the transfer of authority, and the difference matters for what happened next: the German government, the officer corps and the civil service all survived the armistice with their powers, whereas in 1945 the German state was dissolved. Sally Marks has argued against the idea that the Allies repudiated the armistice terms in 1919, and the German complaint that Versailles broke the armistice bargain is now treated largely as a political construction of the 1920s.',
        consequence:
          'The continuation of the blockade after 11 November is the part of the settlement that has real weight in the argument about the peace, since relief of the German and Austrian civilian populations was delayed while the pressure was held; the size of the resulting mortality is disputed and belongs to the debate over blockade deaths. The other enduring consequence is the memory of the date: 11 November became the day of remembrance in the British empire and of independence in Poland, and in Germany the armistice was remembered by the right as a humiliation rather than a deliverance from a lost war.',
      },
    },
    note:
      'Signed at 5:00 a.m. on 11 November 1918 in a railway carriage in the Compiègne Forest; in force from 11:00 a.m. Paris time (11:00 UT). Surrender of matériel, as listed in the terms: 5,000 artillery pieces, 25,000 machine guns, 3,000 minenwerfer, 1,700 aircraft including all night bombers, 5,000 railway locomotives, 150,000 railway carriages and 5,000 road trucks, plus the warships; the German delegation corrected the demand for more submarines than the fleet possessed. Matthias Erzberger signed for Germany. The blockade was not relaxed by the agreement. Piłsudski had been imprisoned at Magdeburg from 1917 and was Chief of State from November 1918. Source checked: “Armistice of 11 November 1918”, “Józef Piłsudski”.',
  },
  {
    /* Replaces the 4 November card drafted earlier in this session. That card quoted a
       sentence about reaching the Meuse and the Sambre-Oise Canal which does not appear
       anywhere in the archive.org scan of the volume, so it was withdrawn rather than
       published. What the scan does print, at length, is the last night at Mons, and it
       is quoted below as printed. The existing armistice_of_11_november_1918 card never
       mentions Mons, so this is not a duplicate of it. */
    id: 'mons_last_morning_1918',
    date: '1918-11-11',
    precision: 'day',
    kind: 'battle',
    title: 'Mons cleared on the last morning of the war',
    fronts: ['western'],
    countries: ['United Kingdom', 'Germany', 'Belgium'],
    levels: {
      primary: {
        cause: 'The fire was to stop at 11 a.m. on 11 November, and the Canadian Corps was ' +
          'still fighting its way into Mons, over the canal whose crossings a German ' +
          'rearguard still held.',
        what: 'Patrols crossed the canal about 2.30 a.m., two companies entered the outskirts ' +
          'at 4.30 a.m., and the British official history records that by dawn ' +
          '“Mons was clear of the enemy”, and the advanced guard of the 3rd Canadian ' +
          'Division marched through.',
        consequence: 'Men died after the town was taken: one scouting outside it at about ' +
          '9.30 a.m., and one shot by a sniper at Ville-sur-Haine two minutes before the ' +
          'hour the fire was to stop.',
      },
      secondary: {
        cause: 'The last week was pursuit rather than assault, and the British official ' +
          'history which covers it names its chapters by the fighting: the Battle of ' +
          'Valenciennes, 1–3 November, the Battle of the Sambre on the 4th, the pursuit ' +
          'after the Sambre to the 7th, and the advance to the armistice line from the 8th ' +
          'to the 10th — the last three the Fourth, Third and First Armies, Valenciennes ' +
          'the Third and First. Mons lay on the canal line the retreating German divisions ' +
          'were still holding on the night of 10 November.',
        what: 'Parties of machine-gunners had been left behind, and “throughout the early ' +
          'part of the night fired heavily on all attempts to cross the canal”, until “It was ' +
          'decided by Lieut.-General Currie to clear the town”, and the 42nd Battalion was ' +
          'brought up with trench mortars. “About 2.30 a.m. (11th) patrols succeeded in ' +
          'crossing the canal at various points, and at 4.30 a.m. two companies… entered the ' +
          'outskirts of the town and quickly disposed of the machine-gun posts”.',
        consequence: 'The same chapter prints the hour the armistice was signed and the ' +
          'message sent to Armies from Advanced G.H.Q. at 6.50 a.m., that hostilities would ' +
          'cease at 11.00 hours that day and troops would stand fast on the line reached at ' +
          'that hour. The battalions that took Mons were inside that last night, and held the ' +
          'crossings they had forced until the fire stopped.',
      },
      university: {
        cause: 'The hours are precise because a staff history is written from unit records, ' +
          'and they are worth having because the day is remembered by the hour the fire ' +
          'stopped: the armistice article calls it “the eleventh ' +
          'hour of the eleventh day of the eleventh month”. ' +
          'The volume’s own structure is the other half of the evidence: the last week is ' +
          'organised as dates and armies rather than as one named battle, and the ' +
          'Australian War Memorial’s table of the engagements its forces took part in on the ' +
          'Western Front in 1918, whose stated source is the Battles Nomenclature Committee’s ' +
          'official list, ends at Landrecies on 4 November and has no entry for the Sambre and ' +
          'none for Mons. The fighting of the last week has no official name to carry it, so ' +
          'the hours have to.',
        what: 'The scan is OCR and is quoted as printed rather than tidied: the armistice ' +
          'chapter is headed “Tue 11TH NoveMBER, 1918”, and the sentence about the signature ' +
          'reads “The Armistice was signed at 5.5 a.m.’on the 11th Novem- ber”. Neither the ' +
          'minute of that hour nor the place of the signing can be taken from it, and the ' +
          'volume prints no place at all: the railway car in the Compiègne forest is what ' +
          'Wikipedia prints, recorded on this site as a single-family detail. What the scan ' +
          'does give, in narrative rather than tables, is Mons and its hours.',
        consequence: 'The last morning is also what a map of months cannot show. The line ' +
          'drawn for November 1918 is where the fire stopped, and it was still moving while ' +
          'men were being killed, so the card exists to keep the fighting of 11 November ' +
          'separate from the signature which ended it. It is a reminder that the last day of ' +
          'the war is a phrase with hours in it, and that the hours differ between the town, ' +
          'the canal and the forest where the document was signed.',
      },
    },
    note: 'One family for the hours, one for the men. The Mons narrative and the hours are ' +
      'from J. E. Edmonds, “Military Operations France and Belgium 1918” Vol V (HMSO 1947), ' +
      'read from the archive.org scan; the chapter titles for the last week are transcribed ' +
      'from that volume’s contents page, where the OCR prints “Battle of Valenciennes, ' +
      'Ist-3rd November” and “Battle of the Sambre, 4th November”, the numeral read as a ' +
      'letter. The town appears in a second family only as the end of the campaign: ' +
      'Wikipedia’s Hundred Days Offensive infobox gives the location as Amiens, France to ' +
      'Mons, Belgium and the date as 8 August – 11 November 1918, which prints no day for ' +
      'the town being taken, so every hour on this card rests on the official history ' +
      'alone. The two soldiers are from Wikipedia’s “Armistice of 11 November 1918”, which ' +
      'gives George Edwin Ellison of the 5th Royal Irish Lancers, killed scouting on the ' +
      'outskirts of Mons at around 9:30 a.m. — that sentence carries a citation-needed flag ' +
      'in the article — and Private George Lawrence Price, the final Canadian and ' +
      'Commonwealth soldier to die, shot by a sniper at Ville-sur-Haine two minutes before ' +
      'the armistice went into effect; Price’s sentence is footnoted there, but the note was ' +
      'not followed up to a second family, so both men are recorded as what that article ' +
      'reports rather than as proven. No figure is given for the German rearguard, because no reachable source ' +
      'prints one. This card replaces one drafted earlier in the same session and withdrawn ' +
      'before publication: it carried a sentence about the advance reaching the Meuse and ' +
      'the Sambre-Oise Canal on 4 November which cannot be found anywhere in this scan, and ' +
      'a quotation that will not reproduce from the source is not published here.',
    mapNote: 'Mons was clear of the enemy by the dawn of 11 November 1918, the last day of ' +
      'the fighting on this front.',
  },
  {
    id: 'luxembourg_evacuated_1918_11',
    date: '1918-11-19',
    precision: 'day',
    title: 'The German garrison leaves Luxembourg',
    kind: 'armistice',
    fronts: ['western', 'politics'],
    countries: ['Luxembourg', 'Germany', 'France', 'United States'],
    note:
      'The status table dates the evacuation to 18–25 November 1918, a range. Clause II of the ' +
      'armistice conditions of 11 November required the evacuation of Belgium, France and Luxemburg ' +
      'to be completed within fifteen days of signature, which puts the outer limit at 26 November. ' +
      'The day used on this card is the one printed by RTL Luxembourg’s account of the retreat: ' +
      'German troops were in the country until the 19th, American troops of the Third Army were ' +
      'received on the 21st and French troops came in from the 22nd. That account is the only ' +
      'source here which gives days; the documentary series gives the terms, and the terms are what ' +
      'the map is drawing.',
    levels: {
      primary: {
        cause:
          'Germany had occupied Luxembourg since 2 August 1914, and the country had no army of its own. ' +
          'The armistice signed on 11 November 1918 required German troops to leave the countries they ' +
          'had invaded.',
        what:
          'Clause II named Belgium, France and Luxemburg as countries to be evacuated, and set ' +
          'fifteen days for the work. German troops were still there on the 11th; the last went on ' +
          '19 November, and American soldiers came in on the 21st.',
        consequence:
          'Luxembourg changes from the occupation colour it has held since August 1914 to the neutral ' +
          'colour for the last month. It had been under German occupation throughout the war, and its ' +
          'government had spent the last weeks asking the Allies to speed the evacuation.',
      },
      secondary: {
        cause:
          'The smallest of the western states was also the least visible on this map: occupied from the ' +
          'second day of the war, protested against by a Grand Duchess with no army, and so with no ' +
          'colour of its own to change. In November 1918 two questions were open: when the German ' +
          'troops would leave, and whether the Grand Duchy would come out of the war in the shape it ' +
          'went into it. A third belongs to this map, because the colour Luxembourg takes at the end is ' +
          'the one the key defines by states that never fought.',
        what:
          'Clause II of the armistice conditions signed on 11 November required the evacuation of ' +
          'Belgium, France and Luxemburg within fifteen days, and made German troops that stayed ' +
          'prisoners of war. Two Washington telegrams show the Grand Duchy asking for help: the ' +
          'Grand Duchess’s message of the 11th, asking President Wilson to save it from the passage ' +
          'of German troops, and a Belgian note of 15 November reporting that Luxembourg had asked ' +
          'Brussels to intervene. RTL Luxembourg gives German armies until the 19th, American ' +
          'troops of the Third Army on the 21st, and French troops from the 22nd.',
        consequence:
          'The recolouring is right for the month and the day is not settled. The status table says ' +
          '18–25 November, which brackets the days the sources print, and the fifteen-day term puts the ' +
          'outer limit at 26 November. The key’s line for the neutral colour names the Netherlands, ' +
          'Denmark, Norway, Sweden, Spain and Switzerland as the states that stayed out of the war ' +
          'throughout, and adds that Luxembourg takes this colour in the last month, when the garrison ' +
          'went.',
      },
      university: {
        cause:
          'Luxembourg is the hardest case on this map for the last month, because the colour it takes ' +
          'is defined in the key by states that were neutral throughout, while at peace — the colour ' +
          'Albania returns to in September 1918 — is the other candidate for a country that was ' +
          'occupied but never at war. This site uses the neutral colour, which records a restored Grand ' +
          'Duchy rather than making a claim about who fought. The card fills a promised gap: the map ' +
          'header says the panel above the cards names the real event behind each colour change, and ' +
          'before it neither the November turning point nor any other card named the evacuation.',
        what:
          'The documentary spine is the armistice itself. Clause II of the conditions signed on ' +
          '11 November required the immediate evacuation of Belgium, France and Luxemburg, with ' +
          'completion inside fifteen days, and made German troops who stayed prisoners of war. ' +
          'Beside it are two Washington telegrams of the same fortnight: the Grand Duchess’s message ' +
          'of 11 November, sent from The Hague, protesting against foreign occupation and asking ' +
          'Wilson to protect the rights and interests of the Luxemburg free and independent small ' +
          'people, and the Belgian minister’s note of 15 November reporting Luxembourg’s request for ' +
          'help in obtaining the evacuation. A Luxembourg account supplies the ground: German armies ' +
          'until the 19th, American troops of the Third Army on the 21st, French troops from the ' +
          '22nd. No source used here prints the 18–25 November range the table carries.',
        consequence:
          'What is documented twice over is the obligation, not the last departure: the American ' +
          'documentary series prints the clause and the requests, and one national broadcaster ' +
          'supplies the days, so this card is dated to the ground and hedged in its note. For the ' +
          'map the effect is that the last month has an occupation ending rather than a silent ' +
          'recolouring, and the neutral colour is no longer only the colour of the six states that ' +
          'never fought. Whether the Grand Duchy survived in the same shape is a question the map ' +
          'stops short of, and the referendum that settled it falls in the months after this site’s ' +
          'last snapshot.',
      },
    },
  },
  {
    id: 'lettow_vorbeck_lays_down_arms',
    date: '1918-11-25',
    precision: 'day',
    title: 'Lettow-Vorbeck’s force lays down its arms at Abercorn',
    kind: 'armistice',
    fronts: ['africa'],
    countries: ['Germany', 'United Kingdom'],
    note: 'UK Foreign Office historians date a formal surrender of Lettow-Vorbeck’s troops at Abercorn to 25 ' +
      'November 1918. The Western Front Association describes a formal parade at Abercorn that day, at ' +
      'which the German weapons were laid down. The day he learned of the 11 November armistice is not ' +
      'agreed: the National Army Museum dates a ceasefire to 14 November, and the Western Front ' +
      'Association says he accepted the news on 16 November. The 25 November parade is the shared date. ' +
      'No headcount is given. He disputed whether the armistice required surrender or only evacuation. ' +
      'The site’s last month is November 1918, and this day falls inside it.',
    levels: {
      primary: {
        cause: 'The war in Europe stopped on 11 November. In East Africa, Lettow-Vorbeck’s force was still in ' +
          'the field. News of the armistice took days to reach him, and accounts disagree on which day he ' +
          'accepted it.',
        what: 'On 25 November 1918 his force laid down its arms at Abercorn in Northern Rhodesia. That day is ' +
          'after the European armistice and still in November. One account dates a ceasefire to the 14th, ' +
          'another his acceptance of the news to the 16th.',
        consequence: 'The fighting in East Africa outlasted 11 November. The parade at Abercorn is the end this ' +
          'timeline can date. Lettow-Vorbeck argued afterwards that the armistice asked him to evacuate, ' +
          'not to surrender. No count of his men is given, because the tallies do not match.',
      },
      secondary: {
        cause: 'Lettow-Vorbeck had kept a German colonial force in the field from 1914, crossing out of German ' +
          'East Africa when he could no longer supply it there. The armistice of 11 November did not ' +
          'reach him as an order he could obey the same morning. The National Army Museum dates the end ' +
          'of the fighting to a ceasefire on 14 November. The Western Front Association says he accepted ' +
          'the news on 16 November. The day he learned of the armistice is therefore not agreed, and this ' +
          'card does not choose it.',
        what: 'What the accounts share is 25 November 1918 at Abercorn, in Northern Rhodesia. Foreign Office ' +
          'historians say he formally surrendered his troops there that day. The Western Front ' +
          'Association describes a formal parade at which the German weapons were laid down. Both are the ' +
          'same occasion. The card says the force laid down its arms, which covers the parade, and it ' +
          'records that Lettow-Vorbeck disputed whether the armistice required a surrender or only an ' +
          'evacuation. No headcount of Europeans, askari or porters is stated.',
        consequence: 'East Africa is the campaign that makes 11 November an incomplete end. A German force was still ' +
          'armed, on British colonial ground, two weeks after the Compiègne armistice, and it stopped by ' +
          'a parade rather than by a battle that week. The dispute about surrender or evacuation matters ' +
          'because the two words write the episode either as a defeat or as a force that was never beaten ' +
          'and only sent home. The weapons laid down are the fact. The word for the ceremony is not ' +
          'agreed, and the numbers claimed for the column are not usable.',
      },
      university: {
        cause: 'The East African campaign has two endings in the literature, and they serve two legends. One ' +
          'ends on 11 November with the rest of the war, which is tidy and false. The other ends with an ' +
          'undefeated commander marching out on his own terms, which is the story Lettow-Vorbeck told and ' +
          'which British and South African writing has sometimes adopted. The dates in between, a ' +
          'ceasefire reported on the 14th or an acceptance of the news on the 16th, are the untidy ' +
          'evidence. They show a column that stopped when the news arrived, not when a battle was lost ' +
          'that week.',
        what: 'The shared public act is the parade at Abercorn on 25 November 1918. One official historical ' +
          'account calls it a formal surrender. A specialist association calls it a parade at which the ' +
          'weapons were laid down. Lettow-Vorbeck’s own objection, that the armistice required evacuation ' +
          'rather than surrender, is why this card prefers the weapons and the place to a single legal ' +
          'verb. Headcounts are refused for the same reason they are refused elsewhere in this set: ' +
          'British, German and South African totals of Europeans, askari and porters do not match, and ' +
          'printing one would only pick a return.',
        consequence: 'Placing Abercorn after the 11 November card, and still inside November, is the point of ' +
          'including it. The site ends with that month. A surrender dated in December would fall outside ' +
          'it. The November parade is the last dated act of this war on the timeline, and it is a ' +
          'colonial act, not a European one. Memory of an undefeated force in East Africa, used in ' +
          'Germany after 1918 and in colonial nostalgia since, starts from the ambiguity the card refuses ' +
          'to close. The arms were laid down at Abercorn. Whether that was a defeat in law was argued by ' +
          'the man who laid them down.',
      },
    },
  },

  {
    id: 'ypres_opening_1918',
    date: '1918-09-28',
    precision: 'day',
    kind: 'offensive',
    title: 'Fifth Ypres opens towards Ghent',
    fronts: ['western'],
    countries: ['Belgium', 'France', 'United Kingdom', 'Germany'],
    figures: ['foch'],
    note: 'The order of battle is one family each: Wikipedia has the attack made by the Flanders Army Group “The GAF attacked with 12 Belgian divisions, 10 British divisions of the Second Army and 6 French divisions of the Sixth Army”, where the official history assigns to the group “The British Second Army, with Sir Douglas Haig’s consent, the Belgian Army and two French corps were assigned to this group” — two French corps where Wikipedia has the Sixth Army — so the prose says French divisions and names no French army below university level. The hour is in both, the detail is not: “The preliminary bombardment of high-explosive and gas opened at 2.30 a.m., and at 5.30 a.m. the infantry advanced under a barrage fired by six hundred 75’s” is the official history’s, giving a bombardment that opens at 2.30 a.m. and a barrage from six hundred 75’s, both named as its own in the university level. The day’s depth is 6 miles in Wikipedia and “A general advance of about five miles was made. The right took Passchendaele, established itself alongside the Second Army east of Broodseinde,! and was just short of Westroose- beke, but did not reach Staden, the northern end of the Ypres Ridge” in the official history, so the prose says five or six miles and credits Passchendaele to no formation: that passage is the Belgian narrative, its footnote recording that it came “From an account received from the Belgian Ministry of War and from F.O.A. vii (ii)”, so the right in it is the Belgian right. The renewal of the battle is the official history’s alone — it “was renewed on the 14th October after more than a week’s delay owing to the state of the roads and ¢he disorganization of the supply services” — while Wikipedia carries the battle only to 2 October and then to mud, “despite the captured ground becoming another slough of mud, all of the high ground around Ypres was occupied by the Allies”; the prose therefore gives no day for the renewal outside university level, where the volume is named, and the atlas has no place-name at all for the ground of 14 to 17 October. The volume’s statement of the object names two places this atlas does not carry anywhere, so the prose gives no statement of the objective.',
    mapNote: 'The pin is on the Passendale ridge, recaptured on the first morning of the attack of 28 September 1918. The line then runs west and south over the ground taken in the three weeks that opened here, to the Lys below Comines, which is where its own summary stops.',
    levels: {
      primary: {
        cause: 'The great German offensives of 1918 had pushed the British back out of Flanders. In September the Allies began their own general offensive, striking first at the enemy’s flanks, and Flanders was the left of them.',
        what: 'Flanders was attacked on 28 September 1918 by Allied armies under the King of the Belgians — Belgian, British and French divisions. A long bombardment opened before dawn, the infantry went in at 5.30 a.m., and the German defences were broken quickly.',
        consequence: 'Much of the ground lost in the spring was won back, and by 1 October the Allies held the high ground around Ypres and the left bank of the Lys as far as Comines.',
      },
      secondary: {
        cause: 'By late September 1918 Foch had settled the sequence of blows that made up the general offensive: on 26 September the French and Americans went in between the Meuse and Reims, on the 27th the British Third and First Armies, on the 28th the Army Group in Flanders, and on the 29th the British Fourth Army and the French First. The principle was to strike first on the flanks, so that as they advanced the frontage of the central French armies would be shortened. In Flanders the attack was to be delivered by Belgians, British and French.',
        what: 'The attack was delivered by Army Group Flanders — Belgian, British and French divisions, 12 Belgian, 10 British and 6 French. It opened at 5.30 a.m. on 28 September after a preliminary bombardment, and the Allied attacks broke the German defences quickly, five or six miles deep.',
        consequence: 'Much of the ground west of Passchendaele, lost in the spring, was recaptured, and by the 29th all the high ground about Ypres was in Allied hands. By 1 October the left bank of the Lys was held as far as Comines. Then rain and mud stopped the battle: it could not be renewed at once, and the offensive had to advance in short stages with waits between, because the roads would not carry the guns and supplies forward. Foch’s other blows followed in the same weeks on the Aisne and on the Hindenburg Line.',
      },
      university: {
        cause: 'Foch’s plan for the general offensive was to strike first on the flanks: the principal effort fell to the American First Army and the French Fourth Army between the Meuse and Reims on 26 September, the British Third and First Armies on the 27th, the Army Group in Flanders on the 28th, and the British Fourth Army and French First on the 29th, so that as the wings advanced the frontage of the central French armies, which held the largest reserves, would be greatly reduced. In Flanders the British Second Army, the Belgian Army and French troops had been grouped under the command of the King of the Belgians, with the French general Jean Degoutte as his chief of staff; the official history puts two French corps in the group, Wikipedia the French Sixth Army.',
        what: 'Belgian, British and French divisions attacked at 5.30 a.m. after a three-hour preparation and broke the German defences five or six miles deep; much of the ground west of Passchendaele, lost in the spring, was recaptured. Rain and mud then ruled: by 1 October the left bank of the Lys was held to Comines, but the advance was checked. Edmonds prints what no other source does: that the bombardment of high-explosive and gas opened at 2.30 a.m. and the infantry went in behind a barrage from six hundred 75’s; that four of the six German lines fell between 10 and 11 a.m.; that the right took Passchendaele; and that when the attack was renewed on 14 October, after a week’s delay over the roads and supply, patrols found Comines abandoned and bridged the Lys east of the town.',
        consequence: 'Rain, and the state of the ground over which guns and supplies had to be moved, stopped the battle: it could not be renewed at once, and the offensive had thereafter to advance in short stages with waits between them, Foch’s other blows — the Fifth Battle of the Aisne on 28 September, and the battles of the Hindenburg Line — following in the same weeks. By 1 October the left bank of the Lys was held up to Comines; for the Second Army the next step, Edmonds records, was an operation to reach Ghent and the Dutch frontier. The ridge above Ypres, which Edmonds records that the Second Army lost at the end of April 1918, was recovered in the first two days, and the Flanders battle became a question of roads and mud rather than of break-through.',
      },
    },
  },
  {
    id: 'kazan_taken_1918',
    date: '1918-08-01',
    precision: 'month',
    kind: 'offensive',
    title: 'The Legion takes Kazan and its treasury',
    fronts: ['eastern'],
    countries: ['Russia'],
    figures: ['trotsky'],
    note: 'The card is dated to August and not to a day, because the day is single-family: “With substantial Czechoslovak help, the People’s Army of Komuch won several important victories, including the capture of Kazan and an Imperial state gold reserve on 6–7 August 1918” is Wikipedia, so 6–7 August is recorded here and in the uncertainty rows, not in the prose. The two non-Wikipedia families record the capture without a day — “They captured Kazan, and there seized the Russian State Treasury of £65,000,000 hold by the Bolshevists” in the Times history, and a translated Petrograd despatch which says only that the Soviet forces “In the middle of September the Soviet forces occupied Volsk, Simbirsk, and Kazan. According to a Petrograd dispatch of Sept. 30 the latter city was recaptured by the Czechoslovaks”. The sum is single-family for the same reason: the Times history prints £65,000,000 and Wikipedia only that a state gold reserve was taken, so the prose says state treasure and gives no figure. The recovery of the city is the mirror image: the Legion’s article and the Samara government’s own article both give 10 September, and Simbirsk two days later, but those two are one family, while the non-Wikipedia source puts the Soviet occupation in the middle of September and the recapture after a despatch of 30 September — which is why the prose says September. Trotsky’s disarmament order is 2-family and is why he is on this card at all; the place and the day of the quarrel that provoked it are Wikipedia’s alone. What became of the treasure is 2-family in substance and single-family in its detail: the Times history records that “On the other hand there was the Siberian Government, created in May, as we have seen, with the aid of the Czecho-Slovaks” and that “it was in possession of the Russian State treasure of £65,000,000, captured by the Czechoslovaks at Kazan”, the two being one run of its text, so the prose says only that the treasure was in the Siberian Government’s hands; the trains are Wikipedia alone — “Kolchak’s trains, which included the gold bullion captured from Kazan, were stranded along the railway near Nizhneudinsk” — which is why only the university level mentions them and attributes them by name. That history also carries the front on: “when the Czeclis dominated the Volga valley and held Kazan and Samara, a change had come over the scene, and the Bol- shevist front had been carried much farther east”, and the Kama line it names is in the prose at university level and nowhere else. No Czechoslovak state exists in this atlas’s country list, so the card carries Russia only; and the line summary this card hangs on already prints the 6–7 August and 10 September days that the card itself keeps to the month.',
    mapNote: 'The pin is at Kazan on the Volga, the largest of the Volga towns the Legion took in August 1918. The line runs west along the railway through Simbirsk and Syzran, the ground the Legion held in that summer and was driven off in the following month.',
    levels: {
      primary: {
        cause: 'The Czechoslovak Legion was marching east across Russia to leave the war, strung out along the Trans-Siberian railway, and an order for its disarmament turned the column into a fighting force that seized the towns it stood in.',
        what: 'In August 1918 the Legion took Kazan on the Volga, where the Bolshevik government kept the state treasure, and with the anti-Bolshevik Russians at Samara it held the railway from the Volga into Siberia.',
        consequence: 'The Volga became a front of the Russian civil war. The Red Army grew stronger and took Kazan back in the middle of September, and what the Legion kept after that was the railway, not a front.',
      },
      secondary: {
        cause: 'The Legion was marching east to be shipped to the Western Front, in detachments strung out along the Trans-Siberian railway. A quarrel on the Trans-Siberian line in May 1918 led the commissar for war, Trotsky, to order the legionaries disarmed and arrested; the Times History of the war records that the German government had already warned Russia against letting them depart, and that Trotsky ordered the disarmament at once. The legionaries refused to disarm, and issued ultimatums for their passage east; the revolt spread along the line, and town after town fell into their hands.',
        what: 'The successes of that summer on the Volga centred on Kazan. The Legion took the city, where the Bolsheviks held the Russian state treasure, drove the enemy out of Chelyabinsk, the European terminus of the Siberian railway, and put the whole length of the line from the Volga far into Siberia into its hands. Anti-Bolshevik Russians had seized Samara, and for a time the Legion and the forces raised behind it held the Volga valley and the railway towns, a contemporary account writing that between Lake Baikal and the Urals the Czechoslovaks were supreme.',
        consequence: 'Holding the Volga proved harder than taking it. In the middle of September the Soviet forces occupied Volsk, Simbirsk and Kazan, and a Petrograd despatch of 30 September reported the last recaptured by the Czechoslovaks. The Red Army, growing stronger, carried its front far to the east, and the anti-Bolshevik government was driven off the Volga. What the Legion kept was the railway; the treasure taken at Kazan was in the hands of the Siberian Government.',
      },
      university: {
        cause: 'The Legion’s place in Russia came from the collapse of the Russian army and from Brest-Litovsk: Czech and Slovak volunteers on the Entente side had declined repatriation and were moving east in detachments towards Vladivostok, slowly, and bargaining with the soviets along the line. Wikipedia dates the crisis to 14 May, when a dispute at Chelyabinsk between legionaries heading east and Magyar prisoners heading west led Trotsky, as commissar for war, to order the legionaries disarmed and arrested; the Times History, which gives no day, records that the North-German Gazette had warned Russia she would ‘endanger her dearly bought peace’ if she let the Czechs depart, and that Trotsky at once ordered their disarmament. A congress of the legions refused, and issued ultimatums for its passage; the revolt carried the fighting into Siberia.',
        what: 'The strongest point of the summer on the Volga was Kazan. Wikipedia dates the capture to 6–7 August 1918 and credits the People’s Army of Komuch, with substantial Czechoslovak help, and says a state gold reserve was taken with the city; the Times History prints no day but puts the sum at £65,000,000, and records that the Czechs also drove the enemy out of Chelyabinsk so that the whole length of the railway from the Volga far into Siberia passed into their hands. The same article dates Komuch’s authority over Simbirsk, Kazan, Ufa and Saratov to June–August 1918. Contemporaries in London and New York described the result: between Lake Baikal and the Urals the Czechoslovaks were supreme, holding the trans-Siberian railway for some 400 miles west of the Urals, as far as Kazan and Samara.',
        consequence: 'The summer on the Volga ended in retreat. Current History prints a translated Petrograd despatch: in the middle of September the Soviet forces occupied Volsk, Simbirsk and Kazan, and by a despatch of 30 September the last of these was reported recaptured by the Czechoslovaks; Wikipedia, alone among the sources here, puts the Soviet recovery of Kazan on 10 September and Simbirsk two days later, and the fall of Samara a month later. The Times History, looking back on the eastern war, notes that since the summer, when the Czechs dominated the Volga valley and held Kazan and Samara, the Bolshevist front had been carried much farther east, to the Kama. What the Legion retained was the railway, and the treasure taken at Kazan was in the hands of the Siberian Government; Wikipedia alone puts it on Kolchak’s trains, stranded near Nizhneudinsk.',
      },
    },
  },
];
