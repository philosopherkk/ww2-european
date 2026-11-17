import type { WW1Event } from './types';

/**
 * 1915. Nineteen cards, one for every month at least, dates and figures checked
 * against the English Wikipedia articles for each event in February 2026.
 * Where sources conflict the card carries a range, or the argument is put in
 * `note`. Bolimow (31 January, German chemical shells that froze), the relief
 * of Van (17 May), the Treaty of London, Neuve Chapelle and Aubers Ridge and
 * the Second Battle of Champagne (in the Loos card) and the Salonika landings
 * and the escape route into the Netherlands (in the Bulgaria and Cavell cards)
 * are covered inside notes rather than as their own cards. The Battle of Moon
 * Sound belongs to 1917, not 1915, and has no card.
 */
export const EVENTS_1915: WW1Event[] = [
  {
    id: 'sarikamish',
    date: '1915-01-03',
    precision: 'month',
    title: 'Sarikamish: the Ottoman winter offensive perishes',
    kind: 'offensive',
    fronts: ['caucasus'],
    countries: ['Russia', 'Ottoman Empire'],
    figures: ['enver_pasha', 'nicholas_ii'],
    note: 'Sources end the fighting anywhere between early January and 17 January 1915, so the card keeps month precision. Ottoman losses are disputed: German and Turkish accounts give about 30,000 killed, wounded and captured plus some 30,000 frostbite cases, while Russian and French estimates run to 90,000; some 25,000 men are thought to have frozen before the battle proper. Russian losses were about 20,000–22,000. Enver Pasha concealed the scale of the defeat and blamed Armenian auxiliaries, with fatal consequences for them.',
    levels: {
      primary: {
        cause: 'The Ottoman army attacked Russian land in the Caucasus mountains in the middle of winter, hoping to win territory back.',
        what: 'Ottoman soldiers marched for days through deep snow with too few warm clothes and almost no food. Tens of thousands froze, and the attacks on the Russian positions at Sarikamish were driven back.',
        consequence: 'The Ottoman army in the east was wrecked and could not attack again for months. Its commander blamed the Armenians, and that made their situation far worse.',
      },
      secondary: {
        cause: 'Enver Pasha, the Ottoman minister of war, planned to recapture Kars and push towards Tiflis, hoping to raise the Muslims of the Caucasus against Russia; the plan needed several corps to cross the Allahuekber range and reach fixed points at fixed hours.',
        what: 'The corps advanced in severe frost on dry rations and lost whole divisions to frostbite before they even fought — X Corps lost the great majority of its effectives — the columns arrived late and scattered, and the assault of late December collapsed in the snow.',
        consequence: 'The Ottoman Third Army was too weak for offensive action for months. Enver reported success instead of loss, and publicly blamed Armenian disloyalty, hardening the government’s attitude towards its Armenian subjects.',
      },
      university: {
        cause: 'Enver’s plan is usually read as doctrinal overreach, a Cannae-style double envelopment on a timetable that ignored winter logistics, rather than as a considered campaign of conquest.',
        what: 'Both sides’ strengths and losses are contested: Ottoman effectives are given from about 78,000 to 150,000 depending on the account, and Ottoman losses from about 30,000 plus 30,000 frostbite cases to the Russian–French figure of 90,000, because frostbite deaths are counted inconsistently in Turkish, Russian and German sources.',
        consequence: 'Historians weight the battle less for its modest territorial result than as the moment the failure was attributed to Armenian treason, tying the campaign directly to the genocide that began later that year.',
      },
    },
  },
  {
    id: 'first_zeppelin_raid_on_england',
    date: '1915-01-19',
    precision: 'day',
    title: 'First Zeppelin raid on England',
    kind: 'raid',
    fronts: ['air', 'home'],
    countries: ['Germany', 'United Kingdom'],
    figures: ['wilhelm_ii'],
    note: 'Bad weather deflected the raiders from their intended targets to Great Yarmouth, Sheringham and King’s Lynn; four people were killed, sixteen injured, and damage was returned at about £7,740. The Kaiser had approved bombing of England on 7 January, and an attempt on 13 January had failed in the weather. German and British publicity each overstated the raid’s effects in opposite directions.',
    levels: {
      primary: {
        cause: 'Germany wanted to frighten Britain into giving up the war without having to fight its army in France.',
        what: 'Airships crossed the North Sea by night and dropped bombs on towns on the east coast of England. Four people were killed and sixteen were hurt.',
        consequence: 'People in Britain saw that the war could now reach them at home. The raid was the beginning of air defence and of bombing of cities in this war.',
      },
      secondary: {
        cause: 'The Kaiser approved raids on England on 7 January in the hope of forcing Britain to sue for peace, or at least of drawing ships, guns and factories away from the western front.',
        what: 'Fog and cloud over the North Sea pushed the Zeppelins away from their intended targets onto Great Yarmouth, Sheringham and King’s Lynn. Four people were killed, sixteen injured, and property damage came to roughly £7,740.',
        consequence: 'Newspapers made far more of the raid than its damage justified, while German claims were larger still. Night bombing of cities had begun, and with it the arms race between bombers and defences.',
      },
      university: {
        cause: 'The airship was a political weapon before it was a military one: the army wanted raids to relieve the western front, the navy wanted to shield the blockade fleet, and the Kaiser personally licensed each attempt.',
        what: 'The evidence problem is proportion: four dead and £7,740 of damage against contemporary claims of panic and mass flight on both sides of the North Sea.',
        consequence: 'Historians treat 19–20 January as the first data point in the long argument about whether strategic bombing can break a nation’s will; so far it signally failed to.',
      },
    },
  },
  {
    id: 'second_masurian_lakes',
    date: '1915-02-07',
    precision: 'day',
    title: 'Second Winter Battle of the Masurian Lakes',
    kind: 'offensive',
    fronts: ['eastern'],
    countries: ['Germany', 'Russia'],
    figures: ['hindenburg', 'luddendorff', 'nicholas_ii'],
    note: 'The battle is dated 7–22 February in most accounts, though some run it to 28 February. German losses are given as roughly 20,000–31,800; the official Russian medical return records 135,189 Russian casualties including about 80,500 prisoners, while other accounts put the loss of the Russian Tenth Army higher still.',
    levels: {
      primary: {
        cause: 'In midwinter the German army attacked the Russians who had come back into the lake country of East Prussia, to push them out for good.',
        what: 'In deep snow the German armies pressed in on the Russian Tenth Army from two sides. Thousands of Russian soldiers were taken prisoner, and the rest fell back well to the east.',
        consequence: 'Russia lost men and guns it could not easily replace. Hindenburg and Ludendorff became heroes in Germany.',
      },
      secondary: {
        cause: 'The Russian Tenth Army had been driven out of East Prussia in September 1914 but had regrouped nearby; Hindenburg and Ludendorff wanted to destroy it in a second encirclement before it could strike again.',
        what: 'A frontal attack pinned the Russians while fresh German armies swung round the flank in hard frost. From 7 February the Tenth Army was forced into a retreat across frozen lakes, leaving behind tens of thousands of prisoners.',
        consequence: 'The front steadied for months. Russia’s shortage of rifles and shells — already painful after 1914 — was made worse, and debate in the Russian government about its own high command sharpened.',
      },
      university: {
        cause: 'The battle was a staff-war copy of Tannenberg, and the question historians ask is whether Russian losses reflect Ludendorff’s skill or the simple fact that Russia could not replace what it lost.',
        what: 'The figures are contested because capture dominated them: the Russian medical service’s 135,189 with 80,500 prisoners versus German claims of more, and the battle’s end variously on 22 or 28 February changes what is counted in.',
        consequence: 'Masurian Lakes is treated as proof of the operational hollowness of German eastern victories — the Russian army was bled, never destroyed, and returned each spring.',
      },
    },
  },
  {
    id: 'dardanelles_naval_assault',
    date: '1915-03-18',
    precision: 'day',
    title: 'The attempt to force the Dardanelles by sea fails: 18 March',
    kind: 'battle',
    fronts: ['middle_east', 'naval'],
    countries: ['United Kingdom', 'France', 'Ottoman Empire', 'India'],
    figures: ['liman_von_sanders'],
    note: 'The sea operations ran from 19 February to 18 March 1915; 18 March was the final fleet attempt. It was the late-laid minefield and the mobile Turkish howitzers, not the great forts, that decided the day. About 700 men went down with the three capital ships lost: Bouvet, Irresistible and Ocean.',
    levels: {
      primary: {
        cause: 'Britain and France wanted to force the narrow strait into the Sea of Marmara and knock the Ottoman Empire out of the war.',
        what: 'On 18 March a fleet of British and French battleships pushed into the Dardanelles and fought the forts. Minefields and shore guns sank three large warships and damaged others, and the fleet drew off.',
        consequence: 'The allies decided that soldiers would have to take the strait from the land instead, which began the Gallipoli campaign.',
      },
      secondary: {
        cause: 'With the western front deadlocked, the allies looked for a weaker side of the war: a fleet alone, it was believed, could silence the forts, clear the strait and open a sea route to Russia.',
        what: 'The minesweepers failed the night before, so the battleships had to pass the narrows in daylight under fire. Turkish howitzers that shifted position kept the range on them; Bouvet struck a mine and sank within minutes, and Irresistible and Ocean, caught by mine and gun, were abandoned and lost, about 700 men drowning with them.',
        consequence: 'The naval commander refused to try again, and the operation passed to the army. It also showed that a modern fleet could be beaten in narrow water by mines and shore guns, a lesson both navies studied.',
      },
      university: {
        cause: 'The attack rested on a pre-war doctrine question — can a modern navy force a mine- and gun-defended strait — answered in part by German officers who rebuilt the Turkish defences after November 1914.',
        what: 'Accounts still disagree on what sank what: mine, gun or torpedo for each loss, and on how decisive the last mine row, laid days earlier, was against the role credited to it by later Turkish and German accounts.',
        consequence: 'Historians treat 18 March as the high-water mark of the old battleship-versus-fixed-defence duel, and as the proof, accepted at the time, that the straits needed an army — an inference that made Gallipoli.',
      },
    },
  },
  {
    id: 'second_battle_of_ypres',
    date: '1915-04-22',
    precision: 'day',
    title: 'Second Ypres: gas on the western front',
    kind: 'offensive',
    fronts: ['western'],
    countries: ['Germany', 'United Kingdom', 'France'],
    figures: ['falkenhayn'],
    note: 'Gas had been tried first against Russia: on 31 January at Bolimów Germany fired some 18,000 xylyl bromide shells over the Rawka, but the chemical froze in the frost and did nothing. Ypres was the first large-scale chlorine release. Casualty totals vary widely — British and Dominion losses are given at about 59,300 for the whole battle, French losses from a couple of thousand on the first day to some 22,000, German losses above 35,000.',
    levels: {
      primary: {
        cause: 'The German army wanted to break the deadlock of the trenches near Ypres and reach the ports on the Channel coast.',
        what: 'On 22 April the Germans let a cloud of green chlorine gas drift over a stretch of the line held by French troops. It killed and choked the soldiers in its path and opened a wide gap in the defences. The Germans were not ready to pour through, and Canadian and British soldiers closed up as best they could.',
        consequence: 'Both sides dug in again, with Germany holding slightly better ground. Gas became a normal weapon from then on, and every army started making masks and gas shells.',
      },
      secondary: {
        cause: 'At Chief of Staff Falkenhayn’s approval, the chemist Fritz Haber’s proposal to discharge chlorine from cylinders was put to use by the Fourth Army at Ypres, where the line was held by French colonial and new British territorial troops with no protection at all.',
        what: 'The cloud opened a wide gap on 22 April, but German reserves were too few and moved too slowly, partly because they too were affected by their own gas. A stand by the 1st Canadian Division and British reserves closed most of the breach, and fighting with local attacks and counter-attacks lasted until 25 May.',
        consequence: 'The salient was contracted on ground slightly better for Germany, and the war gained a new terror weapon. The allies answered in kind: the British first used gas themselves at Loos in September.',
      },
      university: {
        cause: 'Historians argue whether the gas discharge was a revolutionary break or an extension of existing shell practice — the frozen Bolimów experiment of 31 January shows the idea and the intent predated Ypres by weeks.',
        what: 'Casualty accounting is disorderly: British totals near 59,300 cover the whole battle to 25 May, French losses are quoted anywhere between about 2,000 and 22,000, and deaths from gas are hard to separate from ordinary combat loss.',
        consequence: 'The real argument about Ypres is escalation. It normalised chemical weapons, made both sides’ propaganda a vocabulary of horror, and started a contest in which defences consistently stayed ahead of the agents.',
      },
    },
  },
  {
    id: 'armenian_genocide_begins',
    date: '1915-04-24',
    precision: 'day',
    title: 'The Armenian genocide begins: arrests and deportations',
    kind: 'mass_killing',
    fronts: ['politics', 'middle_east'],
    countries: ['Ottoman Empire'],
    figures: ['talat_pasha', 'enver_pasha', 'djemal_pasha'],
    note: 'The toll is the most bitterly contested of the war: official Ottoman statistics compiled by Djemal Pasha’s bureau gave 800,000 killed; most historians estimate 1.3–1.5 million deaths between 1915 and 1918; the Turkish state denies any plan of extermination and attributes Armenian deaths to war, disease and intercommunal violence. Some 235–270 notables were seized in Constantinople on the first night, about 2,345 deported from the capital in all; fewer than eighty of the first wave survived. The contemporaneous defence of Van held the Ottoman advance off from 19 April to 17 May. Killing also falls in 1914 and 1918, which is why some sources date the whole period 1914–23.',
    levels: {
      primary: {
        cause: 'The Ottoman government accused Armenians of helping Russia, the enemy fighting in the east, and decided to remove them.',
        what: 'On the night of 24 April 1915 the police in Constantinople arrested hundreds of Armenian priests, teachers, writers and elected members and sent them inland; most were later killed. Through the following summer Armenians were driven from their towns in columns and marched towards the desert, beaten and killed by their guards on the road, dying of hunger and thirst.',
        consequence: 'Within a year the Armenian communities of eastern Anatolia were destroyed, their leaders killed first so that nobody could organise resistance. Armenians outside Turkey remember these deaths as their genocide.',
      },
      secondary: {
        cause: 'The wartime Committee of Union and Progress long distrusted Armenian political organisations and now took its chance: Talaat Pasha ordered the seizure of the notables on 24 April as a decapitation strike, and his interior ministry then organised the deportation of the rest under the new Tehcir, a temporary deportation law.',
        what: 'The 235–270 leaders taken in the capital were marched to holding centres near Angora, and after the deportation law most were tortured and publicly executed. In the provinces families were given days to leave; the convoys marched south towards Syria, robbed, attacked or massacred en route by irregular and tribal detachments, and the survivors died in holding camps of hunger and thirst.',
        consequence: 'By most historians’ reckoning 1.3 to 1.5 million people died between 1915 and 1918 — against the 800,000 in the Ottoman statistics — and two millennia of Armenian life in Anatolia ended. 24 April is Armenian Genocide Remembrance Day; the Turkish state still rejects the word genocide.',
      },
      university: {
        cause: 'The legal question — whether a plan “to physically destroy” the group existed — turns on Talaat’s telegrams and the Special Organisation, whose surviving documents, and their authenticity, have been argued over for a century; 24 April anchors the debate because intent proved there decides the case.',
        what: 'The numbers are unresolvable on present evidence: Ottoman returns of 800,000 killed; estimates from 800,000 to 1.5 million; a prewar Armenian population of 2.1 million by the patriarchate’s count against an official census of 1.1 million — even the denominator is disputed.',
        consequence: 'Denial is Turkish state policy rather than a school of history, and Armenian and Turkish scholars read archives that cannot be read together; the field is thus a debate about what genocide requires as proof as much as about the dead.',
      },
    },
  },
  {
    id: 'gallipoli_landings',
    date: '1915-04-25',
    precision: 'day',
    title: 'The Gallipoli landings',
    kind: 'landing',
    fronts: ['middle_east', 'naval'],
    countries: ['United Kingdom', 'France', 'Ottoman Empire', 'India'],
    figures: ['mustafa_kemal', 'liman_von_sanders'],
    note: 'The same day saw landings at Cape Helles in the south, north of Gaba Tepe on the west coast by the Australian and New Zealand Army Corps, and a French demonstration at Kum Kale on the Asian shore. The defence was organised by the Fifth Army under Liman von Sanders, with Mustafa Kemal’s 19th Division decisive on the Anzac sector. The campaign ran to January 1916 with roughly 250,000 casualties on each side.',
    levels: {
      primary: {
        cause: 'After the fleet failed to force the strait, the allies meant to carry the forts by landing soldiers on the Gallipoli peninsula.',
        what: 'On 25 April troops from Britain, France, Australia, New Zealand and India came ashore on the beaches. Ottoman soldiers held the high ground above them, and an Ottoman colonel, Mustafa Kemal, drove the landing parties back to the shore. Nothing like a breakthrough happened.',
        consequence: 'The allies were stuck in their small beachheads for the rest of the year. Gallipoli became a founding story for Australia and New Zealand, and proved to the Ottomans that their capital could be defended.',
      },
      secondary: {
        cause: 'The landings were meant to do what the battleships had failed to do on 18 March: knock the Ottoman Empire out of the war and open a sea route to Russia.',
        what: 'The British 29th Division landed at Cape Helles, the Australians and New Zealanders came ashore in steep country north of Gaba Tepe, and the French held Ottoman reserves opposite at Kum Kale. Units landed beyond their objectives, objectives were undefined, and the men could not climb the ridges under fire from above.',
        consequence: 'A landing intended to end a campaign became a siege that consumed one. Frontal attacks in May and June gained ground only at terrible cost, and the deadlock set the pattern for the rest of the year.',
      },
      university: {
        cause: 'The historiography is a dispute about command failure: vague orders, inadequate intelligence on Ottoman strength, and raw Kitchener-armour divisions — or simply a plan conceived as a reconnaissance in force that outlived its purpose.',
        what: 'Order of battle is contested more than the totals: Turkish official histories count from divisional returns while British staff history counts by beach, and the numbers of Ottoman effectives present to the five divisions engaged differ accordingly.',
        consequence: 'Commemoration is the living argument: Australian and New Zealand writing made 25 April a national beginning, while Turkish historiography reads Kemal’s stand as the prelude to the republic founded in 1923.',
      },
    },
  },
  {
    id: 'gorlice_tarnow',
    date: '1915-05-02',
    precision: 'day',
    title: 'Gorlice-Tarnów: the Russian front breaks',
    kind: 'offensive',
    fronts: ['eastern'],
    countries: ['Germany', 'Austria-Hungary', 'Russia'],
    figures: ['falkenhayn', 'conrad_hoetzendorf'],
    note: 'The end of the battle is contested: the main blow fell in the first fortnight of May, some accounts close the battle in mid-May, and the source summary runs it through the pursuit to 13 July. Totals are equally contested — a 2022 study from Russian archives puts Russian losses at about 1,019,953 (118,112 killed, 402,346 wounded, 499,495 missing) against 487,821 for the Central Powers (German 98,653, Austro-Hungarian 389,168), figures not yet absorbed into western accounts.',
    levels: {
      primary: {
        cause: 'Germany and Austria-Hungary wanted to push Russia out of Poland and break its army in the south.',
        what: 'On 2 May a German and Austro-Hungarian army tore open the Russian front along a broad belt between the towns of Gorlice and Tarnów. The Russians had too few rifles and too few shells, and kept giving ground for weeks.',
        consequence: 'Russia lost hundreds of thousands of men, most of them prisoners, and had to give up the land it had taken from Austria-Hungary.',
      },
      secondary: {
        cause: 'Falkenhayn wanted to relieve Austria-Hungary, hard pressed in the Carpathians, and hoped a shattering blow would push Russia towards a separate peace; a newly raised German Eleventh Army was brought by rail to the sector.',
        what: 'The bombardment was short and aimed at strongpoints rather than the whole line, and the infantry followed close on it; the Russian Third Army’s front cracked, the breach widened along an entire army’s front, and the whole Russian position in Galicia became untenable.',
        consequence: 'The Great Retreat that followed gave up Congress Poland, Lithuania and Courland, and left Russia with a shorter front but an army bled of its trained men — a loss later offensives could not replace.',
      },
      university: {
        cause: 'Whether Falkenhayn sought a decisive battle of annihilation or a limited blow to force a separate peace remains argued; the pursuit failed to encircle, which suggests the second, but the scale of the pursuit orders suggests the first.',
        what: 'The arithmetic is unsettled: western accounts put Russian losses for May–September 1915 at about two million in all, while a single 2022 archival count puts Gorlice-Tarnów alone at 1,019,953, which if accepted makes this the war’s largest battle by loss and is not yet standard.',
        consequence: 'Russian archival work has also rewritten the retreat that followed as an organised withdrawal that saved the army rather than a panic, and measured a human cost that older nationalist histories inflated or minimised.',
      },
    },
  },
  {
    id: 'sinking_of_the_lusitania',
    date: '1915-05-07',
    precision: 'day',
    title: 'The Lusitania is torpedoed',
    kind: 'raid',
    fronts: ['naval'],
    countries: ['Germany', 'United Kingdom', 'United States'],
    note: 'Of 1,960 passengers, crew and stowaways aboard, 763 survived; about 128 of the dead were American citizens. In her holds were about 173 tons of war supplies — 4.2 million rounds of rifle ammunition, almost 5,000 shrapnel-filled shell cases and 3,240 percussion fuses — which is central to the legitimacy argument. The second explosion inside the ship has never been explained, and the Board of Trade inquiry was hampered by wartime secrecy.',
    levels: {
      primary: {
        cause: 'Germany was using submarines to sink the ships that carried food and materials to Britain, and had warned that passenger ships would be attacked too.',
        what: 'On 7 May a submarine fired one torpedo into the great ocean liner Lusitania off the Irish coast. A second, bigger explosion tore the ship open from inside, and she sank in about eighteen minutes. Nearly half the people on board died, including 128 Americans.',
        consequence: 'People in many countries were furious with Germany. In Britain and America the sinking became the best-known symbol of the war’s cruelty to civilians.',
      },
      secondary: {
        cause: 'The attack came inside the war zone Germany had declared around the UK after the Allied blockade, and passengers had been warned in New York of the danger of sailing into it in a British ship.',
        what: 'U-20, commanded by Walther Schwieger, fired a single torpedo; a second explosion inside the hull finished the work, and the liner went under in eighteen minutes, 700 metres away. Only 763 of the 1,960 aboard were picked up.',
        consequence: 'Germany pleaded the cargo of rifle ammunition and shell cases as making her a war vessel; Britain denied she was armed. The sinking embittered neutral America for good and is still the case study in how submarine warfare meets public opinion.',
      },
      university: {
        cause: 'The legal case turns on cargo and warning: Germany had declared that armed merchant vessels would be treated as warships, and the manifest now seems plain — though how much weight the ammunition carries, with the ship sunk without warning, is still debated.',
        what: 'The technical argument is the second explosion — coal dust, boiler tubes, or a torpedo hitting the magazine — which the official inquiry could not settle because evidence was withheld for secrecy, leaving the field open to a century of speculation.',
        consequence: 'Historians split on effect as well as cause: some make the Lusitania a decisive turn of American opinion towards the war of 1917, others discount that, noting the images of the liner were propaganda built up retrospectively.',
      },
    },
  },
  {
    id: 'italy_enters_the_war',
    date: '1915-05-23',
    precision: 'day',
    title: 'Italy declares war and crosses the Isonzo',
    kind: 'alliance',
    fronts: ['italian', 'politics'],
    countries: ['Italy', 'Austria-Hungary', 'United Kingdom', 'France', 'Russia'],
    figures: ['cadorna', 'sonino', 'salandra', 'vittorio_emmanuele_iii'],
    note: 'The Treaty of London, signed 26 April 1915, was secret; its promises of Trentino, the Julian March and Dalmatian concessions were the price of Italy’s entry. War was declared on Austria-Hungary alone, not on Germany; the two Isonzo offensives of the first summer have a card of their own.',
    levels: {
      primary: {
        cause: 'Italy had kept out of the war when it began, although it had allies in Germany and Austria-Hungary. Both sides then offered it land to join them.',
        what: 'On 23 May Italy declared war on Austria-Hungary. Its army attacked across the river Isonzo into hills the Austrians held from above. The attacks did not break through.',
        consequence: 'A new front opened along mountains and river, and it became one of the bloodiest and least decisive places in the whole war.',
      },
      secondary: {
        cause: 'The secret Treaty of London on 26 April bought Italian neutrality’s end with promises of Trentino, the Julian March and Dalmatian concessions; the government of Salandra accepted it despite misgivings in parliament and the crown.',
        what: 'War was declared on Austria-Hungary on 23 May. The commander Cadorna, with roughly two-to-one odds on the Isonzo, launched repeated frontal attacks across the river in June and July; the Austrian defences held, even when they had to use gas.',
        consequence: 'Italy forced Austria-Hungary to fight a second long front at its weakest moment — but began an attrition over the Isonzo that cost both armies hundreds of thousands of men for miles of rock.',
      },
      university: {
        cause: 'The old reading made 24 May a triumph of the interventionist street over a hesitant state; later work stresses that the secret treaty had already committed the government before any domestic vote was safe.',
        what: 'Even the battle boundaries are argued: the Second Isonzo is closed on 3 August in most sources and later in Italian official history, and losses per battle vary widely between Italian and Austrian returns — the Italians reported 41,800 for the second battle alone.',
        consequence: 'The argument now is Cadorna himself: butcher of his own infantry in the older books, in newer ones a general boxed in by Italian munitions weakness and Entente demands for instant offensives.',
      },
    },
  },
  {
    id: 'first_battles_of_the_isonzo',
    date: '1915-06-23',
    precision: 'day',
    title: 'The first battles of the Isonzo',
    kind: 'offensive',
    fronts: ['italian'],
    countries: ['Italy', 'Austria-Hungary'],
    figures: ['cadorna', 'conrad_hoetzendorf'],
    note: 'The First Battle ran 23 June–7 July and the Second 18 July–3 August, though Italian official history runs the dates longer; the Second cost the Italians about 41,800 men according to one table of losses. Austria-Hungary’s defence drew increasingly on German advisers, gas and, by the later battles, German units — the first German troops on this front.',
    levels: {
      primary: {
        cause: 'When Italy joined the war, its border with Austria-Hungary ran along the river Isonzo, below steep hills that the Austrians held in strong positions.',
        what: 'In the summer of 1915 the Italian army attacked across the Isonzo twice. The Austrians fought from fortified high ground, and both attacks were thrown back with heavy losses.',
        consequence: 'Neither battle broke through. The Isonzo became a line of battles with hardly any movement and very many dead.',
      },
      secondary: {
        cause: 'Cadorna wanted quick results to justify Italy’s entry and to seize Gorizia and Trieste before Austria-Hungary could shift troops from the eastern front; he enjoyed roughly two-to-one superiority in numbers and put his faith in the frontal assault.',
        what: 'The First Battle, from 23 June to 7 July, took some ground before Gorizia and then stalled; the Second, from 18 July, was a larger frontal push along the whole river, and the Italians, advancing in the open onto prepared positions, lost about 41,800 men for a few kilometres of hill.',
        consequence: 'Austria-Hungary, fighting its worst year, survived the Isonzo’s defensive terrain with German help; the Italian army began the long, grim schooling in heavier guns and deeper attacks that the set-piece battles of 1916 and 1917 would demand.',
      },
      university: {
        cause: 'The Isonzo battles are the staple of Cadorna’s indictment or defence: older books make him a butcher of his own infantry, newer ones stress the Austro-Hungarian defence — and, from the second battle, German staffs, gas and troops — against an army short of heavy artillery and training.',
        what: 'Even the battles’ boundaries are official-history artefacts: the Second closes on 3 August in most sources and longer in Italian ones, one loss table gives Italy 41,800 for that battle alone, and the totals across the twelve battles remain estimates on all sides.',
        consequence: 'What historians now argue is the war’s structure rather than Cadorna’s methods: Italy existed to pin Austria-Hungary and relieve Russia, and the Isonzo is where that alliance strategy was paid for in Italian lives.',
      },
    },
  },
  {
    id: 'koenigsberg_rufiji',
    date: '1915-07-11',
    precision: 'day',
    title: 'The Königsberg destroyed in the Rufiji',
    kind: 'battle',
    fronts: ['africa', 'naval'],
    countries: ['Germany', 'United Kingdom'],
    note: 'The German dead at the Rufiji numbered about 33, most of them lost to disease rather than to the fight. Part of the crew reached the German land forces in East Africa, and some of the ship’s guns were mounted ashore; von Lettow-Vorbeck’s campaign lasted to the armistice.',
    levels: {
      primary: {
        cause: 'A German warship had been hiding in the mouth of an African river, and sinking any ship that came near.',
        what: 'The Royal Navy took two old, flat-bottomed gunboats apart, shipped them through the Suez Canal in pieces, and built them up again in Africa. On 11 July they shelled the German cruiser Königsberg until she sank at her moorings.',
        consequence: 'The German sailors came ashore and kept fighting on land for the rest of the war.',
      },
      secondary: {
        cause: 'The light cruiser Königsberg had raided shipping in the Indian Ocean and taken refuge in the Rufiji delta, where her engines gave out; deep-draft warships could not follow her up the shallow river.',
        what: 'The two monitors were assembled on the spot and, with aircraft spotting their fall of shot — an early use of air observation for naval gunfire — shelled her out of reach of her guns; on 11 July she was destroyed in the delta.',
        consequence: 'Her crew marched inland and joined von Lettow-Vorbeck’s protection force, fighting on as porters and gunners; the episode ended Germany’s surface-raider war in the Indian Ocean.',
      },
      university: {
        cause: 'Small as the action was, naval historians treat it as an early experiment in air-and-gun coordination and as a test of the improvisation the colonial war demanded of global logistics.',
        what: 'The accounting is unusually clean — some 33 German dead, mostly to disease — a contrast with the enormous toll the East African campaign itself would take from porters and soldiers of both sides.',
        consequence: 'The sinking is used to date the end of German sea power beyond home waters, and to ask how long commerce-raiding by isolated cruisers could ever have lasted against a blockade.',
      },
    },
  },
  {
    id: 'great_retreat_poland',
    date: '1915-08-05',
    precision: 'day',
    title: 'The Great Retreat: Russia gives up Poland',
    kind: 'offensive',
    fronts: ['eastern'],
    countries: ['Germany', 'Austria-Hungary', 'Russia'],
    figures: ['nicholas_ii', 'ruzsky', 'falkenhayn', 'luddendorff'],
    note: 'The retreat lasted from 13 July to 19 September 1915. Warsaw was occupied on 5 August, Novogeorgievsk (Modlin) was encircled on 10 August and capitulated with almost 90,000 men, and Kovno fell on 17 August. Archival work puts Russian losses over the retreat at 1,005,911 (96,820 killed, 429,742 wounded, 479,349 missing) against 358,634 for the Central Powers; western totals are lower, and the battle’s boundaries decide much of the count.',
    levels: {
      primary: {
        cause: 'After the German breakthrough in May, the Russian army had to get out of Poland before it was surrounded.',
        what: 'In high summer the Russian armies gave up one town after another. Warsaw fell to the Germans on 5 August, and the fort of Novogeorgievsk surrendered. As they left, the Russians wrecked railways and crops so the enemy could not use them.',
        consequence: 'Russia lost Poland and hundreds of thousands of men, most of them prisoners. But the army itself escaped destruction, and the new front held.',
      },
      secondary: {
        cause: 'German and Austro-Hungarian armies pressing from East Prussia in the north and from Galicia in the south were closing on the great Russian salient in Poland, and an army short of rifles and shells chose evacuation over encirclement.',
        what: 'The retirement — the Great Retreat — covered hundreds of miles and carried a deliberate devastation of the land: Warsaw abandoned on 5 August, Novogeorgievsk’s garrison of nearly 90,000 capitulating in August, Kovno taken on 17 August. Nicholas II took supreme command in person that month.',
        consequence: 'The salient was shortened, the army saved, and the cost was territory and men beyond anything the tsarist high command had imagined in 1914; the dynasty now owned every defeat that followed.',
      },
      university: {
        cause: 'The interpretation flipped with the archives: émigré and Soviet histories wrote the retreat as incompetence and panic, while recent Russian archival studies reconstruct a difficult, competent strategic withdrawal.',
        what: 'The sums follow Gorlice-Tarnów: the same 2022 study counts 1,005,911 retreat losses against 358,634 Central Powers losses, numbers western accounts neither carry nor, as yet, accept; dates of the retreat, 13 July to 19 September, set the boundaries of what is counted.',
        consequence: 'The Great Retreat is how historians explain Russia surviving 1915 — and the argument that the professional army it saved had already been mortally wounded, whatever the government’s refusal to admit it showed.',
      },
    },
  },
  {
    id: 'battle_of_loos',
    date: '1915-09-25',
    precision: 'day',
    title: 'Loos: Britain tries gas',
    kind: 'offensive',
    fronts: ['western'],
    countries: ['United Kingdom', 'Germany'],
    figures: ['haig', 'french_john', 'kitchener'],
    note: 'The battle ran from 25 September to 8 October as Britain’s part of the Third Battle of Artois, and opened on the same day as the French Second Battle of Champagne, which took 14,000 prisoners before it too broke on the German reserve position. The set-piece attack had been tried and found wanting at Neuve Chapelle on 10–13 March (about 12,892 British and Indian losses, against 8,500–10,000 German) and again on Aubers Ridge on 9 May; the lesson of too few guns and too slow reserves was not yet learned. British losses at Loos are given at about 59,247, German at some 26,000. This was the first British use of gas at the front — Germany had preceded it at Bolimów and Ypres — and the discharge failed almost everywhere because the wind was too light.',
    levels: {
      primary: {
        cause: 'Britain wanted to help the French by attacking the Germans in Flanders, and thought a new weapon would open the German trenches.',
        what: 'On 25 September the British let chlorine gas drift towards the German lines near Loos and sent soldiers in behind it. The wind was too weak, and the cloud did not go where it should. Where it did work, the men broke in, but the reserves were too far back to follow.',
        consequence: 'The attack failed with heavy losses. Many of the dead were volunteer soldiers fighting their first battle, and Britain gave up on breaking through in 1915.',
      },
      secondary: {
        cause: 'Haig planned the offensive to pin German reserves while the French attacked in Artois and Champagne, and chose gas discharged from cylinders to spare shells and surprise the defenders.',
        what: 'On 25 September the wind failed along most of the front, and the cloud hung low or drifted back; on the right the assault corps nevertheless took the first German line and the high ground above Loos, but the holding corps behind were too distant, and German counter-strokes recaptured ground piece by piece. Fighting over the mining country lasted until 8 October.',
        consequence: 'British losses ran to about 59,200 against perhaps 26,000 German, and the battle marked the first mass use of Kitchener’s New Army divisions. With Champagne failing the same day, the western allies turned their hopes to a joint offensive for 1916.',
      },
      university: {
        cause: 'The battle is historiographically Haig’s problem: contemporaries blamed the wind, later writers the piecemeal commitment of reserves and weak intelligence on the depth of the German defences, and the argument about who was at fault tracks the argument about Haig himself.',
        what: 'The accounting is cleaner than most western-front battles — some 59,247 British to about 26,000 German — but the battle’s meaning is not: Loos was part of the Third Artois, whose limits the French failure in Champagne fixed the same afternoon.',
        consequence: 'Loos is read with Champagne as the last 1915 proof that neither side had solved the tactical deadlock — gas, massed artillery and fresh armies all failed against defence-in-depth — which set the terms of the 1916 debates on attrition.',
      },
    },
  },
  {
    /* Two days before Bulgaria’s entry, and here because the card is about what the
       occupation of Belgium did to the people living under it, and because the
       execution became the most effective single piece of propaganda of the year. */
    id: 'cavell_executed',
    date: '1915-10-12',
    precision: 'day',
    title: 'The nurse Edith Cavell is shot in Brussels',
    kind: 'resistance',
    fronts: ['western', 'politics'],
    countries: ['Belgium', 'United Kingdom', 'Germany'],
    figures: ['cavell'],
    note: 'English Wikipedia, “Edith Cavell”. Cavell was 49, born at Swardeston near Norwich, ' +
      'directress of the training school for nurses in Brussels, and had cared for wounded ' +
      'soldiers of every nationality; the article puts the number of Allied soldiers she ' +
      'helped out of occupied Belgium at some 200. Arrested on 6 August 1915 and held ten ' +
      'weeks in Saint-Gilles prison, she was betrayed by Georges Gaston Quien, whom a French ' +
      'court convicted as a collaborator after the Second World War. The charge was war ' +
      'treason, Kriegsverrat: paragraph 160 of the German Military Code extended paragraph 58 ' +
      'to foreigners “present in the zone of war”, and the protection the First Geneva ' +
      'Convention gave medical staff was forfeit where medical work was held to have covered ' +
      'belligerent action. Brand Whitlock, the United States minister, wrote to Governor-General ' +
      'Moritz von Bissing from a sick bed, and a midnight deputation of Hugh Gibson, the legation’s ' +
      'legal adviser Maître G. de Leval and the Spanish minister the Marqués de Villalobar ' +
      'asked for mercy or a postponement; the governor rejected it. She was shot at dawn at ' +
      'the Tir national in Schaerbeek after receiving communion from the Revd H. Stirling ' +
      'Gahan, Anglican chaplain of Christ Church, to whom she said the night before that she ' +
      'was thankful for the ten weeks of quiet and had no hatred or bitterness towards ' +
      'anyone. Belgian women buried her beside the prison; after the war her body was taken ' +
      'to Westminster Abbey and then to Life’s Green at Norwich Cathedral, for which the ' +
      'King had to grant an exception to an Order in Council of 1854 barring burials in the ' +
      'cathedral grounds. Her words are inscribed on the memorial opposite the National ' +
      'Portrait Gallery, 12 October is an Anglican memorial day, and George Bellows painted ' +
      'the scene as The Murder of Edith Cavell in 1918.',
    levels: {
      primary: {
        cause: 'Edith Cavell was a nurse who ran a hospital in Brussels. When German soldiers took over Belgium, she looked after sick and hurt soldiers from every side, and she also helped soldiers from the armies fighting Germany escape out of the country to safety.',
        what: 'The Germans found out and put her on trial. Breaking the rules of occupation, they said, was a crime punishable by death, and on the morning of 12 October 1915 they shot her.',
        consequence: 'People all over the world were angry, and newspapers told the story again and again. Her name was put on memorials, and soldiers used it when they asked others to join up.',
      },
      secondary: {
        cause: 'Cavell ran the training school for nurses in Brussels and treated wounded soldiers of both sides without discrimination, which she considered simply part of her job. Under occupation she also sheltered Allied soldiers and helped roughly 200 of them cross into the neutral Netherlands.',
        what: 'German police had grown suspicious of her, and an informer called Georges Quien betrayed the network. She was arrested on 6 August 1915, held for ten weeks and tried by court-martial under German military law for war treason, since she was a foreigner in a war zone who had used a hospital to help enemy soldiers rejoin their armies. Officers from the United States and Spain appealed to the German governor-general for mercy or a delay; he refused, and she was shot at dawn on 12 October 1915.',
        consequence: 'The execution was condemned worldwide and gave the Allies the most powerful propaganda story of the war: posters, sermons and a painting called The Murder of Edith Cavell. It also made neutral opinion, especially in America, much less willing to accept German claims of lawful conduct in Belgium.',
      },
      university: {
        cause: 'The case turns on a legal question rather than on her character. Paragraph 160 of the German Military Code extended the death penalty for war treason to foreigners “present in the zone of war”, and the German argument was that the First Geneva Convention’s protection of medical staff falls away where medical work shelters belligerent action; the Allied argument was that a nurse who feeds and hides helpless men has done nothing military at all. Neither position could be settled by the 1907 rules, which is why the trial reads as policy and not as jurisprudence.',
        what: 'The file on the decision is unusually good: the United States minister Brand Whitlock wrote to Governor-General Moritz von Bissing from his sick bed, and a midnight deputation including Hugh Gibson, the legation legal adviser and the Spanish minister asked for commutation or at least a postponement. The refusal was made with an execution hours away, which suggests that the date mattered — Bulgaria entered the war two days later and the south-east was about to open. How far the number of 200 soldiers can be verified, and how far the network depended on Cavell rather than on her Belgian associates, remains much less well documented than the legend.',
        consequence: 'Her afterlife has been studied harder than her case: the burial in Norwich Cathedral needed a royal exception to an 1854 Order in Council, the memorial opposite the National Portrait Gallery fixed her words “Patriotism is not enough” in stone, 12 October became an Anglican memorial day, and her informer was convicted as a collaborator after 1945 — proof that the story kept being rewritten by the wars that came after.',
      },
    },
  },
  {
    id: 'bulgaria_enters_war_serbia_invaded',
    date: '1915-10-14',
    precision: 'day',
    title: 'Bulgaria enters the war; Serbia is invaded',
    kind: 'invasion',
    fronts: ['balkans'],
    countries: ['Bulgaria', 'Serbia', 'Germany', 'Austria-Hungary', 'Greece', 'United Kingdom', 'France', 'Montenegro'],
    figures: ['ferdinand_bulgaria', 'sarrail', 'venizelos', 'constantine_greece'],
    note: 'The partners struck in sequence: Allied troops landed at Salonika from 5 October over Greek protests, the German Eleventh and Austro-Hungarian Third Armies crossed the Sava and Drina on 6 October and took Belgrade on the 9th, and Bulgaria declared war on Serbia on 14 October, attacking the next day. Combined Central Powers strength in the campaign is put near 600,000 against an epidemic-ridden Serbia able to field some 300,000; 174,000 Serbian soldiers were captured.',
    levels: {
      primary: {
        cause: 'Bulgaria wanted revenge on Serbia for the war of 1913, and Germany and Austria-Hungary promised it land if it joined them. The three empires agreed to crush Serbia together.',
        what: 'On 14 October Bulgaria declared war on Serbia and marched in the next day. In the north, German and Austro-Hungarian armies had already crossed the rivers. A small British and French force landed at Salonika, inside Greece, to help Serbia — but it was far too late and far too small.',
        consequence: 'Serbia was attacked from three sides at once and overrun. Bulgaria’s entry joined Germany by rail to Constantinople, and the allies gained a sickly new front at Salonika.',
      },
      secondary: {
        cause: 'Bulgaria, stripped of territory in the Balkan Wars, saw its revenge against Serbia inside a German alliance; Falkenhayn needed the land route to the Ottoman Empire opened and massed the largest force yet seen in the Balkans for the blow.',
        what: 'The hammer-blow opened on 6 October across the Sava and Drina, taking Belgrade on the 9th; Bulgaria declared war on 14 October and advanced up the Morava, while from 5 October a Franco-British force landed at Salonika, the legality of which split Greek politics between the pro-Entente Venizelos and King Constantine.',
        consequence: 'The Serbia that had beaten Austria-Hungary twice in 1914 was conquered in six weeks, the Berlin-to-Constantinople railway opened, and the row over Salonika pushed Greece towards a national division that lasted years.',
      },
      university: {
        cause: 'The campaign is a case study in allied failure to connect its fronts — a Salonika expedition agreed to deter Bulgaria while Gallipoli was still unresolved — and historians argue whether it was opportunistic French improvisation or a failed Balkan strategy.',
        what: 'Strength and loss tables run from about 600,000 Central Powers troops against 300,000 exhausted Serbs to 174,000 Serbian prisoners; the Greek constitutional crisis of October 1915, which cost Venizelos his government over the Salonika offer, is the tangled source base on the allied side.',
        consequence: 'The fall of Serbia and Bulgaria’s entry are counted as 1915’s great lost connection: with the Dardanelles and the overland route both shut, Russia was cut from supplies and ammunition, a strand of causation running forward to 1917.',
      },
    },
  },
  {
    id: 'serbian_retreat_through_albania',
    date: '1915-11-25',
    precision: 'month',
    title: 'The Serbian army retreats through Albania',
    kind: 'battle',
    fronts: ['balkans'],
    countries: ['Serbia', 'Albania', 'Montenegro', 'Austria-Hungary', 'Bulgaria', 'Greece', 'France', 'Italy'],
    figures: ['putnik', 'alexander_serbia'],
    note: 'The retreat ran from late November 1915 to mid-January 1916, so the day is given only to the month. One common reckoning gives 77,455 Serbian soldiers dead and 77,278 missing, some 160,000 civilian deaths en route and perhaps 47,000 dead Austro-Hungarian prisoners; Austrian and Bulgarian accounts discount the Serbian figures, and typhus defeats exact counting. The name — the Albanian Golgotha — belongs to Serbian memory as much as to the arithmetic.',
    levels: {
      primary: {
        cause: 'The Serbian army was being surrounded, and the only way out was over the mountains to the sea.',
        what: 'In the late November cold, Serbian soldiers, their king, and thousands of ordinary people walked into Albania through snow and mud. Many died of cold, hunger and attacks. The survivors reached the coast and were taken off by ships.',
        consequence: 'The army lost very many of its men, but it survived. It was nursed back to strength on the Greek island of Corfu and came back into the war.',
      },
      secondary: {
        cause: 'With Bulgarian armies on the Morava and German and Austro-Hungarian armies closing from the west, the sick old commander-in-chief Putnik ordered a withdrawal to the Adriatic, taking the government, King Peter and a column of civilians, prisoners, old and young along with the army.',
        what: 'From about 25 November the column crossed Montenegro and Albania over tracks under snow, with typhus among it and little food; men buried the dead with their hands in frozen ground. By one reckoning 77,455 soldiers died and 77,278 went missing, with some 160,000 civilians dead. The survivors were taken off by French and Italian ships to Corfu, in a winter the Serbs call the Albanian Golgotha.',
        consequence: 'The rebuilt army returned to the Salonika front in 1916, and Serbia’s winter retreat became one of the war’s great stories of a people’s suffering.',
      },
      university: {
        cause: 'The retreat is a national martyrdom narrative first and a military subject second; what historians stress is that a state and army in exile preserved Serbia’s claim at the peace conference, which the fighting itself never secured.',
        what: 'The losses are camp-bound: 77,455 dead and 77,278 missing soldiers, some 160,000 civilians, some 47,000 dead Austro-Hungarian prisoners, all Serbian-side reckonings discounted by Austrian and Bulgarian accounts, and typhus deaths impossible to audit.',
        consequence: 'Recent writing has moved from who ordered the retreat to what it did to a society — a demographic wound whose memory shaped Serbian politics inside interwar Yugoslavia.',
      },
    },
  },
  {
    id: 'second_chantilly_conference',
    date: '1915-12-08',
    precision: 'day',
    title: 'Second Chantilly conference: the plan for 1916',
    kind: 'conference',
    fronts: ['politics', 'western'],
    countries: ['France', 'United Kingdom', 'Russia', 'Serbia', 'Italy'],
    figures: ['joffre', 'asquith', 'kitchener', 'french_john'],
    note: 'The conference sat at Joffre’s headquarters at Chantilly from 8 to 12 December 1915, not the 6–8 December given in some older English accounts; a first conference had met in July. It fixed simultaneous offensives for the summer of 1916 and quotas of divisions, and the Italians and Russians soon bargained or were forced out of the dates agreed.',
    levels: {
      primary: {
        cause: 'The allied countries kept attacking the Central Powers one at a time, so each attack was beaten back on its own. They decided to attack together.',
        what: 'In early December the leaders of France, Britain, Russia, Serbia and Italy met at a country house north of Paris called Chantilly. They promised to attack at the same time in the summer of 1916, and each said how many soldiers it would bring.',
        consequence: 'The promises made the big summer battles of 1916 — the Somme and the great Russian attack — into one allied plan. In the end some allies attacked late, or were attacked first.',
      },
      secondary: {
        cause: 'Every allied failure of 1915 — the Dardanelles, Gallipoli, Serbia — had come from attacks that were not simultaneous, so the powers met at Joffre’s headquarters to put a single direction over their wars.',
        what: 'From 8 to 12 December the military and political leadership of France, Britain, Russia, Serbia and Italy agreed that their summer 1916 offensives in France, Italy and Russia would be launched together, each power pledging a minimum number of divisions; Asquith and Kitchener accepted the principle while guarding Britain’s freedom to fight elsewhere.',
        consequence: 'The agreed blows were the Somme and, in the east, what became the Brusilov offensive — but the timetable broke down when Germany and Austria-Hungary attacked first, at Verdun and in the Trentino.',
      },
      university: {
        cause: 'Chantilly is read as the moment the entente discovered joint direction, and the dispute is whether a conference of division quotas was strategy at all, or coordination standing in for a plan to beat the enemy.',
        what: 'Even the dates drift in the sources — 8–12 December at Chantilly rather than the older 6–8 December — and what was agreed survives through national delegations’ records, each of which later reinterpreted, or quietly abandoned, its obligations.',
        consequence: 'Historians judge Chantilly by 1916, when Verdun and the Trentino broke the timetable before it ran and Brusilov nearly won alone and early: alliance war, however planned, tends to be set by whoever is attacked first.',
      },
    },
  },
  {
    id: 'gallipoli_evacuation',
    date: '1915-12-19',
    precision: 'month',
    title: 'The last troops leave Gallipoli',
    kind: 'battle',
    fronts: ['middle_east', 'naval'],
    countries: ['United Kingdom', 'France', 'Ottoman Empire', 'India'],
    figures: ['liman_von_sanders', 'mustafa_kemal'],
    note: 'Anzac and Suvla were evacuated during the night of 19/20 December, with some accounts putting the final departure before dawn on the 20th, so the card keeps month precision; the decision to hold Helles was reversed on 28 December, and its last troops left on 8–9 January 1916. Some 35,268 men and 3,689 horses were brought away from the two western beaches, against Turkish predictions of 30,000 allied casualties in the evacuation.',
    levels: {
      primary: {
        cause: 'After eight months the allies knew they could not take the Gallipoli peninsula. Instead of sending in more soldiers, they decided to leave.',
        what: 'In the cold dark of December the soldiers slipped out of their trenches by night, in small groups, leaving their camps looking as if they were still held. When the Ottoman soldiers came forward, they found the camps empty.',
        consequence: 'The evacuation worked, and almost no one was lost, which everyone had feared. For the Ottomans the campaign was the great victory of their war.',
      },
      secondary: {
        cause: 'The landing had become a costly siege and sickness grew; a November visit by Kitchener turned policy towards evacuation from Anzac and Suvla, with Helles for the moment retained.',
        what: 'Over the nights of 19–20 December the beachhead forces withdrew in small parties under deceptions — empty lines, camp fires kept lit, rifles left rigged to fire now and then — and by dawn on the 20th some 35,268 men and 3,689 horses were gone and the Ottoman commands did not know it. The Helles decision was reversed on 28 December and the final lift was completed on 8–9 January 1916.',
        consequence: 'The campaign, which had cost roughly a quarter of a million casualties on each side, ended where it had begun. The evacuation saved the army, and became the most celebrated British withdrawal of the war.',
      },
      university: {
        cause: 'The evacuation turned a policy defeat into a tactical legend, and the argument is whether it was well planned, or owed its success to Ottoman caution: Liman von Sanders’ Fifth Army was as unsure of the situation as the withdrawals were silent.',
        what: 'The records disagree on the basics the legend rests on — the night of nights was the 19th/20th or the 20th by some pens — and on the totals: Turkish predictions of 30,000 Allied casualties against losses near nothing, with the campaign’s whole body of figures shifting by several tens of thousands depending on the bookkeeping and the boundaries drawn.',
        consequence: 'The successful lift was remembered forward to Dunkirk, while Gallipoli’s memory ran opposite ways — ANZAC nationhood and Turkish founding myth — and the strategic case for the campaign finds almost no defenders.',
      },
    },
  },
];
