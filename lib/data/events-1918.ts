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
        cause:
          'The war had been going on since August 1914, and none of the governments fighting had said clearly what it was meant to end with. In late 1917 the new Bolshevik government in Russia called for a peace with no land taken and no money demanded. It also published the secret agreements the tsarist government had signed with the Allies. Those papers showed that the Allies had promised each other pieces of other people’s empires.',
        what:
          'On 8 January 1918 the President of the United States, Woodrow Wilson, spoke to Congress and read out fourteen points for a settlement. No more secret treaties, ships free on the seas, lower tariffs and smaller armies. Colonial claims were to be judged fairly, taking the wishes of the people living there into account. German soldiers were to leave Belgium, France and the lands they had taken from Russia, and Alsace-Lorraine was to go back to France. Poland was to have its own state and reach the sea. The last point asked for a general association of nations to guarantee the independence of countries. Wilson asked for no payment and no conquest.',
        consequence:
          'The points were read out in the newspapers of both sides. Exhausted people on either side of the front heard a peace they could accept. When Germany asked for an armistice in October, it asked on the basis of these points.',
      },
      secondary: {
        cause:
          'Wilson had kept the United States neutral partly because a settlement with no victors seemed possible. By January 1918 the Bolsheviks had seized the argument about peace: their December decree called for self-determination without annexations, and their publication of the Sykes–Picot and other agreements discredited the old diplomacy. Wilson’s advisers, especially the research group known as the Inquiry, had been drafting a statement of war aims. British and French leaders wanted the German fleet, colonies and indemnity, and wanted to say so before Wilson said it first.',
        what:
          'Three days before Wilson, Lloyd George gave a speech at the Mansion House in London that also called for a league of nations, but demanded reparations and the German colonies. Wilson’s message to Congress on 8 January set out the Fourteen Points in order. The first five were general: open covenants, freedom of the seas, removal of economic barriers, reduction of armaments, and an adjustment of colonial claims. The rest were specific, dealing with the evacuations and frontier questions affecting Russia, Belgium, France, Italy, the peoples of Austria-Hungary, Romania, Serbia and Montenegro, the Ottoman parts, and Poland. Points thirteen and fourteen, on an independent Poland with free and secure access to the sea and a general association of nations, were the two that would outlive the rest. Wilson presented them as the terms the United States would fight for and would accept as a peace. He did not consult the French and British cabinets in detail beforehand.',
        consequence:
          'The points split the two camps. For the Allies they were war aims; for the Central Powers they were a possible exit. In Germany the phrase without annexations and indemnities, which the Reichstag had used in July 1917, now came back through Wilson rather than through the social democrats. In October 1918 the German government asked for an armistice on this basis, and Prince Max of Baden’s notes to Wilson were answered by three American notes which added disarmament and evacuation before any talk. Germany accepted, then complained for the rest of the century that the treaty it signed in 1919 ignored the points.',
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
        cause:
          'Food had been short in German cities for years, and the worst winter of the war had cut the rations of bread and potatoes to the bone. Men were still being sent to the front in huge numbers while the governments talked of taking land from other countries. Workers in Austria-Hungary had already struck through January over food and peace, and the example spread north.',
        what:
          'Strikes began in Austria-Hungary on 3 January 1918 and went on for three weeks. In Germany the strike began in Berlin on 28 January and spread across the country. About 400,000 workers stopped work in Berlin, mostly in the munitions and metal works. By that night half a million were out there, and Kiel, Hamburg, Mannheim and Augsburg joined. The workers chose delegates factory by factory. 414 delegates met in Berlin and elected a committee of eleven to run the strike. Men of both socialist parties were on it, among them Friedrich Ebert and Philipp Scheidemann, who would later run the republic. The demands were written down: peace with no land taken and no payments demanded, more food, an end to military rule in the factories, and votes for all adults. The government banned the strike councils, declared the committee illegal, and sent up to 50,000 strikers to the front as soldiers. The strike was called off on 3 February.',
        consequence:
          'The strike did not stop the war, and its leaders were arrested. It did force the governments to look again at their war aims, and it showed the army and the politicians that the home front could no longer be held by rationing and police.',
      },
      secondary: {
        cause:
          'German workers had been promised a peace without annexations by the Reichstag majority in July 1917, and nothing had come of it. The blockade had cut imports of food and fertiliser since 1914, the bad harvest of 1916–1917 had produced the Turnip Winter, and by 1918 the civilian diet was short of fat and protein. The October Revolution raised the expectations of the socialist left, and the talks at Brest-Litovsk made peace feel near. Strikes had been rising since 1916: 50,000 out in Berlin in June 1916 over the jailing of Karl Liebknecht, and bread riots in Berlin and Leipzig in April 1917 that the government answered with military force. The workers’ councils that the 1916 Auxiliary National Services Law had allowed in the larger factories became the machinery of the strike. The Spartacus group, whose best-known leaders Liebknecht and Rosa Luxemburg were in prison and whose Berlin organisation was run by Leo Jogiches, wanted a global revolution; the majority social democrats wanted pressure on the government instead of a rising.',
        what:
          'The January strike in Germany, the Januarstreik, ran from 25 January to 1 February. It was preceded and triggered by the Austrian Jännerstreik, which had spread across Austria-Hungary between 3 and 25 January. It was organised from below and from the left. The Independent Social Democrats (USPD) called for it, and the Revolutionary Stewards under Richard Müller had the influence in the factories to deliver it. On 27 January Müller persuaded the Berlin Turners’ movement to declare a strike, and Spartacist leaflets then announced that the general strike began on Monday 28 January. The metalworkers’ union demanded peace without annexations, food relief, an end to conscription and democratic reform. Müller wrote out the fuller programme, asking for worker representation at the peace negotiations, freedom of speech and assembly, the end of military control of the factories and universal suffrage. By noon on 28 January, 414 elected delegates had met and chosen an eleven-member action committee. The USPD was represented by Hugo Haase, Georg Ledebour and Wilhelm Dittmann, and the Majority Social Democrats by Friedrich Ebert, Philipp Scheidemann and Otto Braun; the SPD men walked out after a false alarm of a police raid. At its height the strike involved over a million workers in the industrial regions. The government declared the action committee illegal on 29 January. At the open-air meeting in Treptow Park on 31 January Ebert told the workers to go back to work and was shouted down, and Dittmann was arrested for calling for subversion and sentenced to five years. On 1 February the military threatened martial law and up to 50,000 strikers were conscripted and sent to the front. The committee called the strike off on 3 February, and the Spartacist leadership in Berlin, including Leo Jogiches, was arrested afterwards.',
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
        cause:
          'Peace talks between the Central Powers and Soviet Russia had stopped. Leon Trotsky, leading the Soviet delegation, announced that Russia would sign no treaty but would end the war and demobilise, which Germany called unacceptable. Germany also wanted the grain of Ukraine, which the Ukrainian People’s Republic had promised in return for recognition on 9 February.',
        what:
          'On 18 February the German armies in the east attacked along the whole front. The operation was called Faustschlag, the fist blow. There was almost no fighting. The Russian army had melted away. Whole units had gone home for land. German columns took Daugavpils, the railway junction, on the first day, and Minsk three days later, with the headquarters of the Western Army Group still in it. Pskov and Narva fell by 28 February. Kiev fell on 2 March. The advance covered some 240 kilometres in a week, and German troops stood within 160 kilometres of Petrograd, so the Soviet government moved its capital to Moscow. The Bolshevik government, which had held out, now had to face an army marching on its own capital.',
        consequence:
          'Russia surrendered what it had refused a fortnight earlier. In Finland, where the civil war had begun in late January, Germany landed troops to take the south coast and Helsinki, and its promise to do this helped make the Soviets sign the peace of Brest-Litovsk on 3 March.',
      },
      secondary: {
        cause:
          'Germany wanted a written peace in the east before it could move divisions west, and it wanted Ukrainian grain, oil from Baku and the Baltic coast as cover for the north. The Soviet delegation under Trotsky played for time in the belief that workers in Germany would rise first. The separate treaty which Germany and the Central Powers signed with the Ukrainian People’s Republic on 9 February 1918, the so-called Bread Peace, gave Ukraine recognition and borders in exchange for food, and it infuriated the Bolsheviks, who regarded Ukraine as theirs to dispose of. Trotsky refused to recognise the Ukrainian delegation and broke off the talks on 10 February.',
        what:
          'Operation Faustschlag, the Eleven Days’ War, opened on 18 February with 53 divisions in three thrusts: a northern force of sixteen divisions from Pskov towards Narva, a central force towards Smolensk, and a southern force towards Kiev. Daugavpils fell on the first day; Minsk on 21 February, with the headquarters of the Western Army Group; Zhitomir on 24 February; Kiev on 2 March, a day after the troops of the Ukrainian Central Rada reached the city. Pskov was cleared on 28 February and Narva secured the same day. The armies advanced over 240 kilometres in a week and stood within 160 kilometres of Petrograd, which sent the Soviet government to Moscow. Max Hoffmann, the chief of staff at Brest, wrote in his diary on 22 February of a railway war in which a handful of infantry with machine guns and one gun were put on a train, took the next station, made prisoners of the Bolsheviks and moved on. Resistance was real in places, a Red regiment delaying the advance at the Cherekha and Mnoga rivers on 23 February and Latvian riflemen coming up from Latvia two days later, but it could not be held together, and prisoners, guns and stores were taken largely from depots. Odessa was secured by Ukrainian and Austro-Hungarian troops on 13 March and Yekaterinoslav by the German army on 5 April. In Finland, where the Red and White camps had fought since late January, a Jäger battalion arrived at Vaasa on 25 February, and a 10,000-strong Baltic Sea Division under Rüdiger von der Goltz landed on 3 April and took Helsinki on 12 April.',
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
        what:
          'On 3 March 1918 the Soviet government signed the treaty of Brest-Litovsk. It gave up Ukraine, Poland, Belarus, Lithuania, Latvia and Estonia, and the districts of Kars and Batum to the Ottoman Empire. Those lands held a third of the people of the old empire, most of its coal and over half its industrial land. Russia also had to recognise Finland and pay an indemnity fixed later at six billion marks. Lenin pushed the treaty through the leadership against comrades who wanted to keep fighting or to proclaim revolution instead. Trotsky’s position during the talks had been to declare war ended and to sign nothing.',
        consequence:
          'The treaty gave the Bolsheviks the breathing space they needed, and it gave their enemies a cause. The left social revolutionaries walked out of the government and rose in revolt that July. Germany kept troops in the east until the armistice of November 1918, which cancelled the treaty.',
      },
      secondary: {
        cause:
          'Lenin argued that the revolution could not survive another German offensive and had to have months to consolidate, whatever the cost in territory. Nikolai Bukharin and the left communists wanted a revolutionary war to set Germany alight. Trotsky’s middle course, no war and no peace, ran out when the Germans resumed the advance on 18 February and took Pskov, close to Petrograd. On the German side, the negotiator Richard von Kühlmann wanted a moderate peace that might be kept; the army leadership and the annexationists wanted as much eastern land as they could hold.',
        what:
          'The terms transferred Ukraine, Poland, Belarus, Lithuania, Latvia and Estonia out of Russian control, together with Kars and Batum in the Caucasus. The ceded territory held 34 per cent of the population of the former empire, 54 per cent of its industrial land, 89 per cent of its coalfields and 26 per cent of its railways. Russia pledged to end its war with the Ukrainian People’s Republic, which the Central Powers had recognised on 9 February, and confirmed the independence of Finland. A supplementary protocol of August 1918 set the indemnity at six billion marks. Germany kept troops in the occupied east for the rest of the war in order to hold what the treaty had given it.',
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
    countries: ['Germany', 'United Kingdom', 'France', 'Portugal', 'United States'],
    figures: ['luddendorff', 'haig', 'foch'],
    levels: {
      primary: {
        cause:
          'Russia had signed peace in March and Germany could bring divisions west. Erich Ludendorff, the quartermaster general, wanted to beat the British before American troops arrived in large numbers. The British held the longest and least experienced part of the line, around Saint-Quentin.',
        what:
          'At about 04:40 on 21 March 1918 the German guns opened a short, violent bombardment along a 60-kilometre front south of Cambrai. They fired mustard gas, chlorine and smoke shells on the gun lines and the crossings behind them. Then storm troops in small groups by-passed strong points and went on to the batteries and the headquarters in the rear. The British Fifth Army held that front with twelve divisions and three cavalry divisions. It was thin on the ground, its defensive system was unfinished, and its forward positions were overrun in the morning. The retreat that followed was orderly and the heavy guns were got back. The Germans nevertheless pushed some 60 kilometres west from Saint-Quentin and reached Montdidier, further than any army had advanced on this front since 1914. Amiens, the great supply depot, and the road to the Channel ports lay open. Arras was attacked again on 28 March by twenty-nine divisions and held.',
        consequence:
          'On 25 March the British and French governments met at Doullens and put Marshal Foch in charge of coordinating the defence of the line; he became generalissimo in April. The attack was called off on 5 April, and Ludendorff turned north to Flanders.',
      },
      secondary: {
        cause:
          'By 21 March Germany had 192 divisions and 3 brigades in the west, of 241 in the whole army, with 110 in the line and about 50 facing the British. It had superiority in numbers on the western front for the first time since 1914 and would not have it again. The tactical idea had been developed after Riga in 1917: hurricane bombardment with gas and smoke, short and unexpected, then infiltration by trained assault battalions. Ludendorff chose the junction between the British and French armies, near the unimproved ground of the old Somme battlefield, and hoped to drive the British to the sea.',
        what:
          'The attack fell on Byng’s Third Army along a 64-kilometre front held by twelve divisions, with the Portuguese corps on the right. German assault detachments by-passed resistance, cut telephone lines and captured batteries in the rear; the British defensive system in depth was unfinished and its gun lines were turned. The town of Saint-Quentin fell on the first day, and the advance carried the Avre valley and pressed Villers-Bretonneux, where the first battle for the town ran from 30 March to 5 April. Middlebrook counts about 39,900 German and 38,500 British casualties on 21 March alone. By the end of the operation over 75,000 British soldiers had been taken prisoner, and 1,300 artillery pieces and 200 tanks had been lost.',
        consequence:
          'Michael took 3,100 square kilometres (1,200 square miles) of France and cost Germany some 239,000 casualties, including a large part of the trained storm troops that could not be replaced. Doullens on 25 March gave Foch authority to coordinate, and his strategy of local counter-attacks on the flanks of each German salient held. German losses were not replaced, the objective of the offensive was never reached, and the salients dug in during the summer were shorter and weaker defensive lines than the ones the Allies gave up. Michael is the model for the four offensives of the spring, known to the Germans as the Kaiser Battle.',
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
    id: 'influenza_reaches_the_armies',
    date: '1918-04-15',
    precision: 'month',
    kind: 'home_front',
    title: 'Influenza reaches the armies of the western fronts',
    fronts: ['home', 'western'],
    countries: ['United States', 'France', 'United Kingdom', 'Spain', 'Germany', 'Italy'],
    levels: {
      primary: {
        cause:
          'A new kind of flu appeared in 1918. Doctors in Haskell County, Kansas, noticed severe cases in farm country in February and March. The disease was carried to the army camp at Funston, where a cook fell ill on 4 March. From camps and ports it travelled with troops.',
        what:
          'By April the disease was in French ports and along the Western Front, and cases were recorded in France, Germany and the United Kingdom that month. Men sickened in barracks and in trenches, often in the middle of an offensive. The first wave was not the worst: many who fell ill had fever, aching and a bad cough and got better in a few days. In the countries fighting the war, news of sickness at the front was censored, so reports of illness did not appear in the newspapers. Spain was neutral and its papers reported freely, which is why the disease came to be called Spanish flu.',
        consequence:
          'Armies lost fighting men to a disease that killed mostly the healthy and the young. When a second, deadlier wave came in the autumn it found the same crowded camps, ships and trains, and this time the camps of the two fronts were already half empty of the fit.',
      },
      secondary: {
        cause:
          'Modern research places the earliest probable cases in Haskell County, Kansas, in February and March 1918, where the physician Loring Miner warned the public health service about an unusually severe influenza. Troops moving from that country to Camp Funston carried it. From American camps and from the ports where troops and Chinese and Indian labourers were landed, the virus spread to the Western Front; Paris and the British and French depots were affected by mid-April, and by May the disease had reached Breslau and Odessa.',
        what:
          'The first wave was comparatively mild. Madrid lost fewer than a thousand people in May and June, and the United States recorded about 75,000 influenza deaths in the first half of 1918 against about 63,000 in the same months of 1915. The disease was named after whoever was nearby and blameless: Flanders fever in Belgium, Brazilian flu in Senegal, German flu in Spain, French flu in Germany, and Naples Soldier among British troops. The Times of London noted in June that everyone was calling it Spanish influenza, which is how the name stuck, since Spain was the only major country whose press was free to report an epidemic at all.',
        consequence:
          'The second wave, which arrived in the ports of Europe and North America in September and October, was far deadlier, and the mortality curve of the pandemic ran oddly high among healthy young adults. The pandemic took the armies and the home fronts at once: camps and hospitals were overwhelmed, convoys of reinforcements arrived already infected, and the British and French armies were short of effectives during the autumn offensive. The world death toll has been estimated at 21.6 million in 1927, 25 to 39 million in 1991, at least 50 million in 2005, and about 17 million in a contested 2018 reassessment.',
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
        cause:
          'After the first offensive of the spring, Erich Ludendorff turned to the part of the French front behind the Chemin des Dames ridge. The French had taken over a long sector from the British and had thinned it, expecting the next blow to fall in Flanders.',
        what:
          'On the morning of 27 May 1918 German armies attacked on the Chemin des Dames ridge above the Aisne. The French front there was held by divisions that had been rested and were under-strength. The bombardment came without the usual long preliminary. In six hours the attackers had broken through eight Allied divisions along the line between Reims and Soissons, taking the ridge and the gun lines below it. The French defence fell back in disorder, and by nightfall the Germans had gained another 15 kilometres and were pushing on to the river Vesle. That same day they reached the north bank of the Marne at Château-Thierry. On 31 May the United States 2nd Division, which included a brigade of marines, was brought up and held in the wood called Belleau and at the crossings below the town. In the first three days the attackers took guns and prisoners in such numbers that Ludendorff changed the object of the attack to the pursuit.',
        consequence:
          'The salient pushed to the Marne was the deepest German penetration of 1918 and the closest the war came to Paris being threatened from the east. It was also the last success: the attack on the next sector was halted, and the salient became the ground of the battle in July.',
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
        cause:
          'Austria-Hungary had to knock Italy out before Germany’s reserves could be moved west and before its own armies came apart. The Italian front had been pushed back to the river Piave after the disaster of autumn 1917, and the Austro-Hungarian army attacked across the river in June.',
        what:
          'The assault began on 15 June 1918 with an attack across the Piave in flood and an assault on the high ground of the Asiago plateau. Some crossings were forced, and for a few days the attackers held bridgeheads west of the river. The Italian army under Armando Diaz, which had reorganised since Caporetto, fought a defensive battle with reserves close at hand and counter-attacked where the bridgeheads were weak. The flood, the Italian guns on the high ground, and supply over one river broke the attack. By 23 to 24 June the Austro-Hungarian armies were back on their starting line, carrying away their wounded and their guns.',
        consequence:
          'The army that had nearly won in 1917 lost its last offensive power in six days. Its losses included the men taken prisoner when whole companies surrendered to the Italians, and the failure turned the argument inside the government in Vienna towards an armistice.',
      },
      secondary: {
        cause:
          'The Austro-Hungarian high command under Arthur Arz von Straußenburg had succeeded Conrad, and the emperor Karl I had insisted in April that his armies must win a victory before a peace could be made. The plan was a double attack: across the Piave towards Padua and Venice in the east, and onto the Asiago plateau in the west, with the two arms to meet behind the Italian lines. The army was short of food, of transport animals and of morale, and units of eleven nationalities were being led by officers of another. Italy had rebuilt after Caporetto with French and British help, a new commander in Diaz, and a defensive system that kept fresh divisions behind the river.',
        what:
          'Nine hundred and forty-six thousand Austro-Hungarian men and 6,833 guns went into the attack against an army dug in on the far bank of a river in flood and on the high ground behind it, which the attackers had to climb under fire from above. The western assault on the Asiago plateau took some ground and stopped; the crossings of the Piave in flood were partial and could not be linked or supplied. The Italian Tenth Army counter-attacked on 19 June, and the bridgeheads were destroyed one by one. Italian losses in the battle were 8,396 dead, 30,603 wounded and 48,182 captured, or 87,181 in all; Austro-Hungarian losses were 118,042, of which 25,547 were taken prisoner. The battle is also called the Battle of the Solstice.',
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
        cause:
          'In July the German army still held a great salient pushed to the Marne, with Paris inside its range of fire. Ludendorff attacked the salient from both sides, hoping to straighten the line and pull the Allied reserves out of the path of the next blow, which he meant to deliver in Flanders.',
        what:
          'On 15 July 1918 German armies crossed the Marne east of Reims and attacked on the Champagne heights. There was no surprise: the Allies knew the hour, having taken prisoners and read German orders, and the French put a barrage down as the attackers reached the river. Some crossings were forced and the German right reached the edge of the Vosges mountains, but Reims held and the advance stopped short of its second day objectives. Three days later, on 18 July, Foch counter-attacked west of the salient from the forest of Villers-Cotterêts with French and American divisions and a mass of tanks, catching the German flank. That blow, and the Allied attack east of the salient on 20 July, forced the Germans to give up the Marne ground they had taken in May and June.',
        consequence:
          'The war passed to the Allies on 18 July and did not give the initiative back. Ludendorff had lost the last chance to force a decision in the west, and the German army spent the rest of the summer on the defensive, shortening its line and losing men it could not replace.',
      },
      secondary: {
        cause:
          'The Marne salient had been taken in May at a cost of 130,000 German casualties and now had to be either exploited or cleared. Ludendorff chose to attack on both shoulders, Operation Hammerschlag on the west and the Reims attack on the east, in the hope that the Allied reserves would be spent defending ground. Foch, now commander-in-chief of the Allied armies with authority over reserves, refused to commit them piecemeal and kept them for his own counter-attack. Philippe Pétain, who had stopped the German attack at Reims in 1917, commanded the Army Group there and had prepared a defence in depth that let the first German wave spend itself.',
        what:
          'The Allies fought the battle with 58 divisions, 44 French, 8 American, 4 British and 2 Italian, and 346 tanks, against 52 German divisions. The 15 July attack east of Reims made a narrow bridgehead and was stopped by fire on the reverse slopes; the 18 July attack west of the salient, led by Mangin’s Tenth Army with French and American divisions and the first massed tank assault since Cambrai, took the Germans by surprise and advanced 20 kilometres in a few days. German losses are usually given at about 168,000, including 29,367 prisoners and 793 guns, against Allied losses of about 133,000. By early August the salient had been cleared to the Vesle and the Aisne, and the fighting had lasted into August.',
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
        cause:
          'The German offensives of the spring had been stopped, and the Allied armies had recovered divisions and tanks. At Amiens the British held a front that the Germans believed was quiet, because Canadian units had been moved in secretly and the Germans were misled by false signals to Flanders.',
        what:
          'At 4:20 a.m. on 8 August 1918 the guns of the British Fourth Army opened on the German front east of Amiens. There was no long preliminary bombardment. 1,386 field guns and 684 heavy guns fired, and more than 500 tanks went in with the infantry. Australian and Canadian infantry advanced behind a moving barrage with the tanks, and the German forward positions were taken in the first hours. Cavalry and then cavalry in motor lorries went through the gap. By evening the line had been pushed in by about 11 kilometres on average, and German prisoners came in by the thousand. Where the German line had been held by divisions that had already been shelled and understrength, whole units surrendered.',
        consequence:
          'The battle was continued to 12 August and then stopped, because the pace of the advance outran the guns and the tanks were worn out; only six were fit for battle four days later. The Allies had the initiative for the rest of the war, and the German high command knew that the army could no longer win.',
      },
      secondary: {
        cause:
          'After the Marne, Foch pressed for attacks to be made wherever the enemy was weak, without waiting for a great combined operation. Sir Henry Rawlinson’s Fourth Army proposed the Amiens attack to cut the railway junction that supplied the German salient. The British army in 1918 had learned to combine artillery with sound ranging and aerial photography, infantry platoons with Lewis guns and mortars, and tanks used in mass for the break-in. Secrecy was kept by moving the Canadian Corps in at night and by radio traffic suggesting an attack in Flanders.',
        what:
          'Nineteen divisions of the Fourth Army attacked, nine of them from Monash’s Australian Corps and Currie’s Canadian Corps, with Debeney’s French First Army on the right; the cavalry corps was to exploit. The German divisions in the sector were short of men and had only about two divisions in immediate reserve, and were driven back in confusion. The Canadians advanced 13 kilometres, the Australians 11, the French 8 and the British 3.2. Clodfelter’s counts give 45,000 German killed and wounded and 29,873 captured, against French losses of 24,232 and British losses of 22,202. Five German divisions were effectively engulfed on the first day.',
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
        cause:
          'Baku had the oil refineries that ran the war at sea, and it lay at the end of a railway from the Caspian. After Russia made its peace in March, the Russian army in the Caucasus went home and the city was held by Bolsheviks and Armenian revolutionaries. Britain raised a small force of officers and instructors under Lionel Dunsterville, sent from Baghdad through Persia to keep the Caucasus front intact and to stop Enver Pasha’s advance on the oil.',
        what:
          'On 26 August 1918 the Islamic Army of the Caucasus, about 14,000 men with 500 cavalry and 40 guns under Nuri Pasha, attacked the positions defending Baku. The city was held by some 20,000 ill-equipped soldiers, mostly Armenian and Russian, with Dunsterville’s small force and its armoured cars and aircraft. The first attacks on the Wolf’s Gate and on Binagadi Hill north of it were thrown back. Over the next days the attackers took Binagadi and Diga, at a cost so heavy that they could not press on at once. By 1 September Dunsterville was telling the city’s government that he was not willing to risk more British lives. There was no attack between 1 and 13 September. The final attack began on the night of 13 September and very nearly took the Wolf’s Gate. A counter-attack held it, but there was nothing left behind the line to hold with. By the night of 14 September the survivors of the defence had embarked across the Caspian, and the city was in the hands of the Islamic Army. Armenian families who had fled into Baku were left behind.',
        consequence:
          'In the days after the city fell, Armenian civilians in Baku were killed in the massacre known as the September Days, usually put at between 10,000 and 30,000 dead. Ottoman and Azerbaijani control of Baku lasted until the armistice of October 1918 obliged the Ottoman army to leave.',
      },
      secondary: {
        cause:
          'Enver Pasha, the Ottoman minister of war, had wanted Transcaucasia placed under Ottoman suzerainty as part of a pan-Turanian plan, which would hand the Central Powers the oilfields of Baku and open the Caspian road to Central Asia. The Ottoman advance of spring 1918 took Erzurum, Kars and Van from the retreating Russian army, and at the Batum conference in May the Ottomans demanded Tiflis, Alexandropol and Echmiadzin as well, with a railway to connect Kars and Julfa with Baku. Armenian forces halted the advance at Sardarapat, Kara Killisse and Bash Abaran in late May, the Transcaucasian federation dissolved, Georgia called in a German expeditionary force, and the government of Azerbaijan moved from Tiflis to Ganja. Baku, held by the Baku Commune under Stepán Shahumyan, was the last prize. Germany, which wanted the oil rather than the conquest, offered Soviet Russia the benefit of its pressure on the Ottomans in return for access to the fields, and the two governments agreed on 27 August that Germany should take a quarter of Baku’s oil.',
        what:
          'The Islamic Army of the Caucasus was formed at Ganja under Nuri Pasha from the Ottoman 5th Caucasian and 15th divisions and the Azerbaijani Muslim Corps under Ali-Agha Shikhlinski. Only about 30 per cent of its 14,000 men were Ottoman soldiers, the rest being Azerbaijani troops and volunteers from the North Caucasus. The defence was commanded by the former tsarist general Georgy Dokuchaev, with an Armenian chief of staff. It included about 6,000 Centrocaspian troops of the Baku Army, mostly Armenians with some Russians and some 40 field guns, alongside Armenian units, Bicherakhov’s irregulars and Dunsterville’s detachment, which had marched across Persia and held a long outer position. The political basis of the defence had gone before the battle. A coup on 26 July overthrew the Bolshevik Commune, and Shahumyan left the city with his red troops after the Caspian fleet refused him. The fighting ran from 26 August to 14 September. The Wolf’s Gate and Binagadi Hill were attacked on the first day; Binagadi and Diga fell by 1 September at a cost so heavy that Mürsel Bey could not immediately continue; there was no attack from 1 to 13 September. A deserter from the Ottoman 10th Division reached the defenders on 12 September with news that the final assault was set for the next day, and it began on the night of 13 September. Mürsel Bey admitted Ottoman losses of about 2,000 killed and wounded. British losses in the whole operation were about 200 killed, missing or wounded.',
        consequence:
          'The capture of Baku was the last and most remote of the Central Powers’ victories, and it came in the same fortnight in which the whole Ottoman position in Palestine collapsed. Between 10,000 and 30,000 ethnic Armenians were killed in the violence that followed the fall of the city, in what is called the September Days, out of an Armenian community of about 80,000; the killing is argued about in both directions, since the March Days earlier in 1918 had produced Muslim deaths on a large scale in the same city. By the armistice of Mudros on 30 October the Ottomans had to demobilise and the Ottoman forces left Baku.',
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
        cause:
          'The Salonica front had been a stalemate since 1916, with French, Serbian, Greek and British armies facing the Bulgarians in the mountains of Macedonia. By September 1918 the Allies had more troops in the Balkans than the Central Powers could match. The Bulgarian army was exhausted, short of food and losing the will to fight a war it had entered in 1915 for land.',
        what:
          'On 15 September 1918 French, Serbian and Greek divisions attacked the Dobro Pole ridge, the strongest Bulgarian position on the Vardar river, after several days of bombardment. The Bulgarian second and third divisions holding the ridge were broken and fled, taking prisoners with them, and the line behind it was not held. The British attack further east at Doiran was thrown back with heavy loss, but the Bulgarian army in the centre had ceased to exist as a fighting force. Units began to retreat towards Bulgaria in crowds, and soldiers formed committees and refused orders.',
        consequence:
          'Bulgaria asked for an armistice on 29 September and signed it on 30 September at Thessaloniki. The army had lost some 77,000 men, mostly prisoners, and 500 guns. With Bulgaria gone, the road to Vienna through Serbia and Hungary was open, and Germany lost its last reliable land ally in the south.',
      },
      secondary: {
        cause:
          'The Allied armies in the east had been reorganised under Franchet d’Espèrey, who took command of the Allied Army of the East in July 1918 and planned a set-piece breakthrough on the Dobro Pole sector, where Serbian divisions would attack alongside French and Greek ones, with a British diversion at Lake Doiran. Bulgaria had taken a large part of its pre-war army out of the line to farm, and its troops had been fighting since 1912 in four wars; food, clothing and replacement drafts were failing, and desertion was heavy. The Bulgarian government had already approached the Allies in secret through Malinov, and the tsar Ferdinand had refused to ask for peace while Germany could still deliver a decision.',
        what:
          'The bombardment on the Dobro Pole sector began on 14 September and the assault on 15 September, with the peak at 1,875 metres taken on the first day; fighting on the ridge continued to 18 September. The Bulgarian second and third divisions were driven off with the loss of most of their prisoners, and the 11th French and Serbian divisions pushed through the gap. Doiran cost the British a costly repulse, but the breakthrough in the centre made it irrelevant. The Bulgarian retreat became a rout, with mutinous regiments marching on Sofia; the chief of staff Nikola Zhekov, who had asked Berlin for immediate reinforcements, was replaced by Georgi Todorov. A cavalry pursuit drove through the Vardar and Strumica valleys towards Bulgaria; the total capture of Bulgarian and German prisoners is put at 77,000 with 500 guns.',
        consequence:
          'The armistice of 30 September took Bulgaria out of the war and disarmed its army, leaving 10,000 German troops in the country to be interned or to fight their way out. Tsar Ferdinand abdicated in favour of his son Boris three days later. The collapse removed the shortest rail route of German supply and oil, opened the Danube, and made the Hungarian and Austrian fronts the next problem; Hindenburg had pledged on 17 August to support Bulgaria only when the situation on other fronts permitted, and his reluctance had already been read in Sofia as a refusal.',
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
      'Vardar offensive 15 – 29 September 1918; Dobro Pole fighting 15 – 18 September. Bulgarian and German prisoners 77,000 and 500 guns. Bulgarian armistice requested 29 September, signed at Thessaloniki (Salonica) 30 September 1918; Ferdinand abdicated 3 October. Source checked: “Vardar offensive”, “Battle of Dobro Pole”, “Armistice of Salonica”.',
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
        cause:
          'The Ottoman army in Palestine had taken Jerusalem in reverse and held a line from the Mediterranean to the Jordan, with two armies in the hills and one in the Jordan valley. British Indian and Australian divisions had been rebuilt with reinforcements from India and Egypt, and the Ottoman lines were thin, short of ammunition and watched from the air.',
        what:
          'On 19 September 1918 the infantry of the British EEF attacked on the coastal Plain of Sharon, on the Tulkarm and Tabsor positions. A bombardment and a smoke screen covered the assault, and the Ottoman eighth army was broken in a few hours. British, Indian and Australian cavalry and the Australian light horse rode through the gap and past the flanking mountain passes into the Esdraelon plain. They took Afulah, Beisan and Jenin and cut the railway lines behind the Ottoman armies in the hills. The Ottoman seventh and eighth armies were almost encircled in the Judean hills. Arab forces under Emir Feisal, with T. E. Lawrence, had already destroyed bridges on the Hejaz railway to keep Ottoman reinforcements away.',
        consequence:
          'Damascus was taken on 1 October by Arab and Australian cavalry, and Megiddo, Daraa and Damascus were all in Allied hands before the month was out. The Ottoman government asked for an armistice, which was signed at Mudros on 30 October.',
      },
      secondary: {
        cause:
          'Edmund Allenby had lost two divisions and 24 battalions of infantry to the western front in the spring, and had to win with cavalry, Indian infantry and air power instead. He kept his concentration a secret by leaving a frontage apparently held, rebuilding his communications, and moving divisions to the coast at night. The Ottoman Yildirim army group under Otto Liman von Sanders, which had replaced the command dismissed after Jerusalem fell in December 1917, was short of men, artillery ammunition and aircraft, with its railway head far to the north and the Hejaz railway already destroyed by the Arab revolt.',
        what:
          'The battle began before dawn on 19 September with a bombardment of the Turkish positions on the Sharon plain. Three corps attacked, including British and Indian divisions, and broke through the eighth army’s front by mid-morning. Chaytor’s force, with Australian light horse and Arab irregulars, attacked across the Jordan to hold the seventh army’s line, and took Es Salt and Amman. The cavalry, including the 5th Cavalry Division and the Australian Mounted Division, rode 70 kilometres into the Esdraelon plain and held the passes at Nazareth, Afulah and Beisan, where the retreating columns were caught. Liman von Sanders’s headquarters at Nazareth was overrun, and he reached Damascus and organised the defence north of the city, where fighting was still going on at Haritan when the armistice was signed.',
        consequence:
          'Allenby’s force destroyed the Ottoman seventh and eighth armies and advanced several hundred miles in the fortnight after the attack; 20,000 prisoners were taken at Damascus alone, and the campaign is generally classed as a decisive result at comparatively little cost, unlike most offensives of the war. The armistice of Mudros on 30 October ended the fighting in the theatre, with Ottoman forces still holding on at Haritan north of Aleppo. Allenby’s cavalry victory was achieved with a force whose infantry had been thinned for the west, and with air superiority, motor transport, and a feint along the Jordan that drew Ottoman attention away from the coast.',
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
      'Megiddo 19 – 25 September 1918; Daraa 27 September, Damascus 1 October, fighting at Haritan when Mudros was signed. The article gives no campaign-wide prisoner total, so none is used here; 20,000 prisoners are recorded at the fall of Damascus. Allenby had lost two divisions and 24 battalions to the west in the spring 1918 transfers. Liman von Sanders commanded Army Group Yildirim. Source checked: “Battle of Megiddo (1918)”, “Armistice of Mudros”.',
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
        cause:
          'The American armies in France had grown to over a million men, and their commander John Pershing wanted a separate American operation. The sector chosen was the Meuse river and the Argonne forest north of Verdun. The German lines there ran over the ridge between the forest and the river, and the railway at Sedan lay behind them.',
        what:
          'On 26 September 1918 the American First Army attacked with 216,000 men at its start, alongside French armies, against the fortified positions of the German fifth army. The Americans were newly arrived and badly supplied, and the ground was forest and ravine with little view of the enemy. Some corps reached their objectives on the first morning, but the strongpoint of Montfaucon held out and the American division meant to take it failed. The village fell the next day. Progress was slow and costly, units became tangled in the trees, and the attack had to be reorganised several times over the following weeks. The main German fortified line on the ridge, the Kriemhilde position, was broken in the fighting of 14 – 17 October. By the end of the month the German armies in front of the Argonne were falling back towards the Meuse.',
        consequence:
          'By the end of the offensive the Meuse road was open and the Hindenburg line behind the Argonne had gone. On 29 September, the day the British attack on the Hindenburg line at the St Quentin Canal opened and the Americans renewed their attack in the Argonne, the German leadership decided the war could not be continued and asked the politicians to open peace negotiations.',
      },
      secondary: {
        cause:
          'Foch’s grand plan for 26 – 29 September was to attack everywhere at once, so that the German reserves could not be moved from one threatened sector to another: the Americans in the Argonne, the French in the Champagne, the British and Dominions on the Hindenburg line, and the Belgians in Flanders. Pershing’s independent American army, with French aviation, tanks and artillery support, was given the longest and least favourable sector, held by about 450,000 German troops of Army Group Gallwitz. The German soldiers in the line were underfed and many were old or young, though units newly relieved from the east fought stubbornly.',
        what:
          'The offensive was the largest operation in United States military history, involving 1.2 million American soldiers, sailors and marines, 800,000 French and 850 Siamese personnel, with about 2,000,000 men in all, against 450,000 Germans. The first phase from 26 September began well on the flanks but stalled in the forest. The 79th Division failed to take Montfaucon d’Argonne on the first day and took it on 27 September, and American divisions had to be withdrawn to refit. The second phase turned on the attack on the Kriemhilde Stellung at the Côte de Châtillon, fought between 14 and 17 October, which forced the German line back to the Meuse. The third phase from 1 November drove forward along the river towards Sedan. Allied losses are usually put at about 192,000, of which 122,063 American, with German losses of about 126,000, a figure taken from a 1922 encyclopedia.',
        consequence:
          'On 29 September, with the Hindenburg line broken at St Quentin Canal and the Argonne attack renewed, Ludendorff told the government that the front might collapse at any moment and that an armistice request must be made at once; he also insisted that the request should come from a new government based on the parties that held the Reichstag majority, which meant parliamentarising the empire. Chancellor Hertling’s cabinet resigned on 30 September and Prince Max of Baden was appointed on 3 October, and sent to Wilson on 4 October. Ludendorff was dismissed on 26 October. On 9 November Max announced the Kaiser’s abdication without authority and handed the chancellorship to Friedrich Ebert.',
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
        cause:
          'Italy had defended the Piave since 1917 and had beaten back the last Austro-Hungarian attack in June. By October the armies of the Empire were short of food, and the national groups inside them were refusing to go on fighting for Vienna. Diaz waited until an attack was certain to succeed.',
        what:
          'The offensive began on 24 October 1918, exactly one year after Caporetto, with five armies attacking from the Monte Grappa sector to the Adriatic end of the Piave. Leading elements had already crossed to the Grave di Papadopoli island in the night before the assault, and the river crossings were forced on the first day despite the flood. On 27 October the attack went in again over the whole front and a foothold was won on the left bank of the river. The attacking armies had then covered so much ground that they were over-extended and vulnerable. The Austro-Hungarian armies broke up into national columns marching home. Units deposed their officers and elected committees, and by the end of October the retreat had become a general discharge of the armies.',
        consequence:
          'Austria-Hungary asked for an armistice and signed it at Villa Giusti on 3 November, with the firing to stop on 4 November. Some 448,000 soldiers and over 5,000 guns were captured in the ten days of the battle. The empire was dissolved as it ended: the Czechs, Slovaks, South Slavs and Poles formed their own states, and the emperor Karl withdrew from the conduct of government.',
      },
      secondary: {
        cause:
          'Diaz had rebuilt the army after Caporetto with deeper defence, mobile reserves and better leave arrangements, and he refused to attack until the odds were certain. The Austro-Hungarian army in October 1918 held a shortened front with 46 infantry and 6 cavalry divisions against 57 Allied infantry divisions, with 6,030 guns against 7,700, and both sides were being consumed by influenza and malaria. On 1 November the new Hungarian government of Count Mihály Károlyi recalled the soldiers conscripted in Hungary, which removed a large part of the army’s manpower. The Czech and South Slav regiments had already begun to refuse orders.',
        what:
          'The order of battle included 52 Italian divisions, three British, two French and the 332nd United States Infantry Regiment, with 600 aircraft establishing air superiority. Three armies were to cross the Piave towards Vittorio Veneto and cut the rail junction between the two Austrian armies; the mountain armies on the Grappa were to hold and then follow up. The crossing of the flooded river on 24 October succeeded on the Papadopoli island, where Italian engineers rowed British troops across in the dark, and the bridgeheads were consolidated despite a counter-attack on 26 October. The renewed attack on 27 October broke the Austrian defence, and the retreat to the Piave line turned into a general discharge of the armies. The Italians reached the Tagliamento and took Trieste by an amphibious expedition on 3 November, and Italian troops later occupied Innsbruck and all North Tyrol with 20,000 to 22,000 men.',
        consequence:
          'The armistice of Villa Giusti required the evacuation of all territory occupied since 1914 and of South Tirol, Tarvisio, the Isonzo valley, Gorizia, Trieste, Istria and part of Dalmatia, the internment or expulsion of German troops within fifteen days, and free use of the empire’s communications, which opened the road to Germany from the south. The Dual Monarchy ceased to exist as a fighting power and as a state: the Czechoslovak and South Slav states were proclaimed in these days, and Karl’s renunciation of participation in government on 11 November left Austria a republic. The battle ended the war on the Italian front a week before the armistice in the west.',
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
        cause:
          'By the end of October 1918 the German government had asked the Allies for an armistice and had promised to stop the submarine war. The officers of the High Seas Fleet planned something else. They meant to take the battle fleet out into the North Sea and fight the British navy, whatever the cost, rather than let it surrender without a fight.',
        what:
          'The order to sail was given at the end of October. Sailors on the battleships at Wilhelmshaven had already been arrested for refusing a similar move on 29 October. When the fleet began to get up steam on 30 October, the stokers simply put out the fires and the ships could not move. Officers arrested men and sent them to Kiel. On 3 November several thousand sailors and workers met in Kiel. When the troops sent to shoot them joined the crowd instead, the sailors and workers chose councils to run the city. The councils took control of the barracks, the railways and the newspapers.',
        consequence:
          'Within days sailors’ and soldiers’ councils had been formed in the ports and the cities of Germany, and the empire had no force to oppose them. The mutiny at Kiel was the beginning of the revolution that ended the monarchy on 9 November.',
      },
      secondary: {
        cause:
          'The government had made the concession Wilson required by recalling the submarines from 20 October, over the objections of Admiral Scheer, chief of the Admiralty staff. Scheer and Admiral Franz von Hipper, commander of the fleet, wanted the battle fleet to engage the Grand Fleet before any armistice. Hipper’s order for an attack was issued on 24 October and approved by Scheer on 27 October, and the fleet assembled on the Schillig Roads. It was an operation ordered by the naval command without the knowledge or approval of the German government, and its officers wrote privately that they meant to go down with the flag flying, while the naval war command expressed horror at the plan.',
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
        cause:
          'The fleet had mutinied at the end of October, and councils of workers and soldiers had spread across the country within a week. The emperor and the generals could not rely on troops to put the cities back under control. The new chancellor, Prince Max of Baden, knew that an armistice could only be obtained if the government rested on the parties that commanded the Reichstag.',
        what:
          'On 9 November 1918 the revolution reached Berlin. Workers’ and soldiers’ councils seized the police stations, the railways and the government buildings, and armed men gathered in the Lustgarten. Philipp Scheidemann of the Majority Social Democrats heard that Karl Liebknecht, just released from prison, meant to proclaim a socialist republic. He went to a window of the Reichstag building and proclaimed a German republic himself to head him off. Liebknecht proclaimed a free socialist republic a few hours later. Prince Max announced the Kaiser’s abdication without having any authority to do so, and handed the chancellorship to Friedrich Ebert. Wilhelm II, at headquarters in Spa, did not abdicate voluntarily. He crossed into the Netherlands the next day.',
        consequence:
          'The empire fell in a day and almost without bloodshed. Councils held power across Germany, and Bavaria had already declared itself a people’s state on 8 November. Real authority passed to a body of six commissioners, three Majority Social Democrats and three Independents, while the old officers and officials kept their posts.',
      },
      secondary: {
        cause:
          'The revolution was the consequence of the military collapse of late September, when the High Command asked for an armistice and insisted that a government of the parliamentary majority make the request, so that the army would not have to sign its own defeat. The October reforms made the government answerable to the Reichstag, released the political prisoners, and lifted the state of siege, which legalised the strike and council movement that the January strikes had begun. With the fleet lost, the army refusing to march and the monarch’s abdication demanded in Wilson’s third note, there was no institution left that could govern in the emperor’s name.',
        what:
          'By 8 November councils had taken power in the ports, in Munich, where Kurt Eisner proclaimed a People’s State, and in most of the larger states. On 9 November the Berlin garrison refused to fire on the crowds and the council executive took the city. Scheidemann’s proclamation from a window of the Reichstag was made to prevent a rival proclamation on the model of Moscow, and Liebknecht made his in the Lustgarten hours later. Max issued the proclamation of the Kaiser’s abdication on his own authority and transferred the office of chancellor to Ebert, leader of the Majority Social Democrats; Ebert’s government was formed the same day and claimed to govern by the mandate of the councils, while Wilhelm’s formal abdication statement was not signed until 28 November.',
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
        cause:
          'The German armies in the west were still on foreign soil in October, but the High Command had told the government on 29 September that the front could not be held. After three notes from the American president and a week of revolution at home, the new government asked for an armistice, and the German delegation was told to accept the Allied terms.',
        what:
          'The German delegation was handed the list of Allied demands and given seventy-two hours to agree. The agreement was signed at 5:00 a.m. on 11 November 1918 and took effect at 11:00 a.m. Paris time. German troops had to leave France, Belgium and the parts of Russia they occupied within days. The west bank of the Rhine was to be held by Allied troops, with bridgeheads further east of the river. Aircraft, artillery, machine guns, locomotives and road transport and the warships were to be handed over, and most of the fleet was later interned at Scapa Flow. German prisoners were to stay in captivity, and the naval blockade was not lifted.',
        consequence:
          'Firing stopped on the western front at 11:00 a.m. on 11 November 1918, six hours after the signature. Matthias Erzberger of the Centre Party signed for the new government, and the armistice was extended three times while the peace treaty was negotiated. Poland recovered its independence in the same days, with Józef Piłsudski, released by the Germans from Magdeburg, taking power in Warsaw as Chief of State.',
      },
      secondary: {
        cause:
          'The Allied terms were drafted by Foch’s staff with British and American input, and reflected the argument earlier in the year about whether the German army could be forced to a peace or only to a cessation of fighting. Foch and Haig had both doubted that the Allies could break into Germany in 1918, so the terms were designed to make renewed fighting impossible rather than to occupy Germany. The German delegation under Matthias Erzberger was able to correct some impossible demands, including the surrender of more submarines than the fleet possessed, and to extend the withdrawal timetable, and it protested the harshness of the terms before signing.',
        what:
          'Germany had to evacuate the invaded countries and the occupied parts of the east. It had to surrender 5,000 artillery pieces, 25,000 machine guns, 3,000 minenwerfer, 1,700 aircraft including all the night bombers, 5,000 railway locomotives, 150,000 railway carriages and 5,000 road trucks, and to hand over the warships. The fleet was interned at Scapa Flow, and was scuttled by its own crews in June 1919. The Rhineland, with the bridgeheads east of the river, was to be occupied, the railways handed over, and the infrastructure left intact. Allied prisoners were to be released at once while German prisoners were not, and the blockade of Germany was to continue. One clause abrogated the treaty of Brest-Litovsk, which the Soviet legislature annulled on 13 November.',
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
];
