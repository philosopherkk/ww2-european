import type { WW1Event } from './types';

/**
 * 1917. Eighteen cards, every month covered, dates and figures checked against
 * the English Wikipedia articles for each event in November 2026. Russian dates
 * are given new style, and the cards say so where the old-style name of an
 * event (February Revolution, 7 November) would otherwise mislead. Where
 * sources conflict the card carries a range, or the argument is put in `note`.
 */
export const EVENTS_1917: WW1Event[] = [
  {
    id: 'pless_council_u_boat_decision',
    date: '1917-01-09',
    precision: 'day',
    title: 'The council of Pless decides to resume the U-boat war',
    kind: 'conference',
    fronts: ['naval', 'politics'],
    countries: ['Germany', 'United Kingdom', 'United States'],
    figures: ['wilhelm_ii', 'hindenburg', 'luddendorff', 'bethmann_hollweg'],
    note: 'The decision was not recorded in minutes: what survives are the notes and diaries of those present, chiefly Admiral Georg Alexander von Müller, so the wording of the exchange is one-sided. The figures quoted are the navy’s own estimate — about 600,000 tons a month, enough “to bring Britain to her knees” within four to six months. The chancellor’s counter-estimate, that American food, money, aircraft and volunteers would make the blow useless, is the argument historians now regard as the correct one. The preliminary meeting at the same palace on 29 December 1916, and the army–navy briefing of 8 January which fixed the case the military would make, are usually treated as decisive: the council did not deliberate, it ratified.',
    levels: {
      primary:
        {
          cause: 'Germany had been sinking merchant ships without warning in 1915, but stopped after the United States complained that American citizens had been drowned. Its generals and admirals wanted to start again.',
          what: 'At Pless on 9 January 1917 the army and navy chiefs promised the Kaiser about 600,000 tons ' +
            'of Allied shipping sunk a month, and peace for Britain in four to six months. Bethmann ' +
            'Hollweg warned it would bring America in; the Kaiser agreed.',
          consequence: 'Germany told the United States on 31 January that its submarines would sink ships without warning from 1 February. America declared war four months later.',
        },
      secondary:
        {
          cause: 'By the winter of 1916 neither side had broken the other on land, and the British blockade was squeezing Germany. The army’s leaders, Paul von Hindenburg and Erich Ludendorff, backed the navy’s demand for a free submarine war, arguing that merchant ships carrying food and munitions to Britain were the weakest point in the Allied position.',
          what: 'Bethmann Hollweg had opposed unrestricted submarine warfare — sinking merchant vessels, neutral or belligerent, without the warning that gave crews a chance to escape — and insisted the Kaiser must decide. At Pless the army and navy presented a single case: Admiral Henning von Holtzendorff put the expected sinkings at about 600,000 tons a month and Hindenburg insisted the submarine chance would never be better. Bethmann Hollweg forecast American food, loans, aircraft and volunteers instead of American armies, and was overruled.',
          consequence: 'The policy was announced to Washington on 31 January and began on 1 February. It sank far more shipping than before, but it also gave the United States its reason for entering the war on 6 April, which Germany’s leaders had judged irrelevant.',
        },
      university:
        {
          cause: 'The standard question is whether the decision was rational on its own terms. Holtzendorff’s memorandum of 22 December 1916 rested on a tonnage arithmetic — sink so many tons a month and Britain, which imported most of its food, would be forced to terms before American help arrived.',
          what: 'The arithmetic failed twice over: the U-boats did not reach the projected monthly tonnage, and Britain answered with the convoy system, which the planners had dismissed. The sources are also partisan — Müller’s diary and Valentini’s notes, no minutes — and Bethmann Hollweg’s warning survives in the version of officers who had already decided.',
          consequence: 'Historians read Pless as a stage in Germany’s shift to a military dictatorship, in which the army and navy settled policy and the chancellor yielded to keep his office; and as the single clearest case of a strategic decision whose political cost its authors refused to price.',
        },
    },
  },
  {
    id: 'unrestricted_u_boat_war_resumes',
    date: '1917-02-01',
    precision: 'day',
    title: 'Submarines sink without warning: the U-boat war begins again',
    kind: 'blockade',
    fronts: ['naval', 'home'],
    countries: ['Germany', 'United Kingdom', 'United States', 'Norway', 'Netherlands', 'Denmark'],
    figures: ['wilhelm_ii', 'hindenburg', 'luddendorff', 'bethmann_hollweg'],
    note: 'The German Foreign Office had warned in January that neutrals would be hit as well as belligerents, and Norwegian, Danish and Dutch shipping did suffer heavily in 1917. The Kaiser’s promise at Pless that American passenger liners would be spared was never put into effect, a fact German officers recorded with some unease. Monthly sinkings and the tonnage Britain still had available are given differently in British and German statistical histories, and the totals for 1917 shift depending on whether ships sunk in the Mediterranean and by mines are counted in; the figures are therefore kept out of the card.',
    levels: {
      primary:
        {
          cause: 'Germany hoped to starve Britain into giving up before American help could arrive.',
          what: 'From 1 February German submarines sank merchant ships without warning. Ships stopped carrying passengers and mail in safety, and crews were often given no chance to get away.',
          consequence: 'Many sailors were drowned and a great deal of food and munitions was lost. Britain answered by sailing its ships together in convoys, guarded by warships.',
        },
      secondary:
        {
          cause: 'The council of Pless had decided that a submarine war would decide the campaign in the west, and the navy was given a free hand in a war zone around Britain and in the Mediterranean.',
          what: 'Sinkings rose at once and reached their highest level of the war in the spring of 1917. Neutral ships were hit too, which widened the quarrel with Norway, Denmark and the Netherlands as well as with the United States.',
          consequence: 'Britain, reluctant for months, adopted convoys in May 1917. Losses fell and the U-boat campaign of 1917 became the test of whether submarines could win a war by themselves.',
        },
      university:
        {
          cause: 'The campaign is the central case in the argument about economic strangulation as strategy: Germany had neither the boats nor the technique the arithmetic of December 1916 assumed.',
          what: 'The statistical problem is what counted. German records are kept by U-boat command and report claimed tonnage; British records count ships lost to torpedoes, shells and mines in several theatres, and historians disagree on which to add together.',
          consequence: 'The dispute over the 1917 figures feeds a larger one about whether the submarine war failed because of convoys, because of American destroyers, or because Germany’s boat-building never matched the plan.',
        },
    },
  },
  {
    id: 'february_revolution',
    date: '1917-03-08',
    precision: 'day',
    title: 'The February Revolution: the strike in Petrograd becomes a revolution',
    kind: 'revolution',
    fronts: ['eastern', 'politics'],
    countries: ['Russia'],
    figures: ['nicholas_ii', 'kerensky'],
    note: 'The name is thirteen days out: Russia still used the Julian calendar, thirteen days behind the western one, so the strike that began on 23 February old style began on 8 March new style, and the Tsar’s abdication on 2 March old style falls on 15 March new style. Cards on this site give new-style dates. The Tsar abdicated at Pskov on 15 March in favour of his brother Michael, who refused the throne the next day, ending three centuries of Romanov rule. Over 1,300 people were killed in the eleven days of the rising, the great majority in Petrograd. The Petrograd Soviet’s Order No. 1 of 14 March, telling soldiers to obey only orders that did not contradict the Soviet, is usually dated old style (1 March) and is the document most often blamed for dissolving army discipline; it was addressed to the garrison of the capital, not to the whole army, and reached the front weeks later.',
    levels: {
      primary:
        {
          cause: 'There was too little food in Petrograd, and the war had taken the best soldiers away from the city to the front.',
          what: 'On 8 March the women in the bread queues struck, and the city workers followed. Soldiers ' +
            'sent to stop them fired, then shot their officers and joined the crowd. His generals urged ' +
            'the Tsar to give up his throne; on 15 March he agreed.',
          consequence: 'The empire of the Romanovs ended. Two governments now shared power in Petrograd: the ministers from the parliament, and the council of workers and soldiers called the Soviet.',
        },
      secondary:
        {
          cause: 'Three years of war had broken Russia’s railways, made bread scarce in the cities and filled the garrison of Petrograd with conscripts who had no wish to fight. The Tsar had taken command of the army himself, so every failure counted against him personally.',
          what: 'Strikes over bread on 8 March swelled into a general strike; on 12 March the garrison of Petrograd mutinied, and the Duma’s committees moved to take control of the government. Order No. 1 of 14 March told soldiers to elect committees and to obey the officers only when their orders did not contradict the Petrograd Soviet. Nicholas II abdicated on 15 March for himself and his son in favour of his brother, who refused; power passed to a Provisional Government under Prince Georgy Lvov, which had to share it with the Soviet.',
          consequence: 'Russia became the weakest of the great powers and the freest. The dual government was unstable from the start, and the new government’s decision to keep fighting the war gave the Bolsheviks their chance.',
        },
      university:
        {
          cause: 'Interpretation of the rising splits three ways, and Rabinowitch’s summary is the usual starting point: Soviet historians stressed the proletariat and the bourgeois, liberals stressed the war, revisionists traced the grievances back to the settlement after the abolition of serfdom.',
          what: 'The event was leaderless and unplanned, and no party directed it, which makes the evidence mostly retrospective memoir and police reporting. Casualty figures are uneven; the old-style and new-style calendars are mixed in the sources, and the dates of individual units mutinying move by a day or two between accounts.',
          consequence: 'The argument now is not whether the February Revolution was popular but why its result was so weak — whether dual power made a liberal government impossible from the first, and how far Order No. 1 caused the disintegration of the army or merely recorded it.',
        },
    },
  },
  {
    id: 'baghdad_falls',
    date: '1917-03-11',
    precision: 'day',
    title: 'Baghdad falls to Maude’s army',
    kind: 'battle',
    fronts: ['middle_east'],
    countries: ['United Kingdom', 'India', 'Ottoman Empire'],
    note: 'Maude advanced with some 50,000 men; the Ottoman strength under Khalil (Halil) Pasha is given as “perhaps around 25,000”, which is an estimate rather than a return. The city was entered without a fight on 11 March after the Ottoman evacuation order of 8 p.m. on 10 March, and about 9,000 Ottoman soldiers were taken prisoner in the confusion — the only sizable loss. Maude’s proclamation of the following week, that the army came “not as conquerors or enemies, but as liberators”, sat badly with the argument that followed between London and the Government of India over who would rule the captured province, which historians read as the real beginning of the mandate question in Iraq.',
    levels: {
      primary:
        {
          cause: 'A British army had surrendered at Kut in 1916, and Britain wanted the war in Iraq restarted properly.',
          what: 'General Maude spent a year rebuilding his army, then moved slowly up the river from Basra with British and Indian soldiers, breaking one Ottoman defensive line after another. The Ottoman army left Baghdad during the night, and on 11 March 1917 the British walked into the city.',
          consequence: 'The city that had humiliated Britain was taken, and about 9,000 Ottoman soldiers were captured. Britain now held the wealthiest Ottoman province east of Syria, and had to work out what to do with it.',
        },
      secondary:
        {
          cause: 'After the surrender of the Kut garrison on 29 April 1916, Maude was sent to rebuild the force in Basra: fresh divisions recruited in India, a field railway built up from the coast, armed river boats, and a slow supply line that would not be cut again.',
          what: 'The campaign opened on 13 December 1916. Maude advanced on both banks of the Tigris, ' +
            'reducing the Khadairi Bend (6–19 January), the Hai River line (25 January – 4 February) and ' +
            'the Dahra Bend on 16 February, taking Kut on 24 February, this time letting the Ottoman ' +
            'garrison withdraw. On 9 March Khalil Pasha defended the Diyala river; Maude shifted north to ' +
            'outflank him and on 10 March destroyed the single regiment left behind. Khalil Pasha fell ' +
            'back on Baghdad and ordered it evacuated that evening; the British entered on 11 March.',
          consequence: 'Kut and Baghdad together wiped out the humiliation of 1916 and gave Britain the two great cities of Mesopotamia. The Ottoman government gave up its operations in Persia and had to rebuild an army to guard Mosul, while in London and India officials began arguing over the administration of what had been taken.',
        },
      university:
        {
          cause: 'Historians dispute Mesopotamia’s place in the war: a side show fought to repair prestige after Kut, an oil and India-policy ambition pushed by the Government of India, or the land half of the attempt to knock the Ottoman Empire out of the war.',
          what: 'The sources are thin and administrative rather than tactical, and the strengths are estimated rather than counted; the Ottoman force is usually given as around 25,000 against roughly 50,000 British and Indian troops, with about 9,000 prisoners counted on the British side as the capture’s main haul.',
          consequence: 'The capture of an Arab provincial capital by an Indian army, under a proclamation of liberation, is now read less as a battle than as the moment when Britain’s wartime promises to Arabs, its secret partition understandings with France, and its Indian administration all came into contact — and began to contradict one another.',
        },
    },
  },
  {
    id: 'first_battle_of_gaza',
    date: '1917-03-26',
    precision: 'day',
    title: 'The first attack on Gaza fails',
    kind: 'battle',
    fronts: ['middle_east'],
    countries: ['United Kingdom', 'India', 'Ottoman Empire', 'Germany', 'Austria-Hungary'],
    note: 'Some accounts end the fighting on 27 March, the day after the assault. The defenders’ casualties are the awkward part of the figures: the small number returned for the German and Austro-Hungarian troops (16 killed or missing and 41 wounded) reflects the small detachment present rather than light fighting, and Ottoman returns for 1917 Palestine are less complete than British ones. The British strength is given as about 31,000 against about 19,000 defenders, of whom a large part arrived during the battle, which is what made the late-afternoon withdrawal so costly. The campaign did not stop here: a second, larger attack weeks later failed more decisively, and the town was not taken until the third battle in the autumn.',
    levels: {
      primary:
        {
          cause: 'A British army marching across the Sinai from Egypt wanted to take the Turkish-held town of Gaza, which guarded the road into Palestine.',
          what: 'On 26 March British and Indian troops attacked Gaza from the land, with horsemen riding ' +
            'round it. They got in and nearly took it, but it was getting dark, more Turks were arriving, ' +
            'and the horses had no water. They withdrew that evening.',
          consequence: 'Nearly 4,000 British and Indian soldiers were killed or wounded, most of them in the withdrawal. Gaza stayed in Turkish hands for another seven months, and the next attack was worse.',
        },
      secondary:
        {
          cause: 'After the victories at Romani, Magdhaba and Rafa had cleared the Sinai and taken the Turkish frontier post at Rafa, the Egyptian Expeditionary Force under General Archibald Murray pushed on into southern Palestine, where the Turkish garrison of Gaza blocked the coastal route to Jerusalem.',
          what: 'About 31,000 British Empire troops, infantry and the Desert Column’s mounted infantry, attacked a garrison of roughly 19,000 served by German and Austro-Hungarian guns and machine-gun crews. The assault began before dawn on 26 March and the mounted troops closed the road to the north; the town was nearly taken in the afternoon, but darkness, the approach of Turkish reinforcements and the shortage of water for the animals led the commander to withdraw, and the Turkish artillery shot at the retiring columns until nightfall. British losses were 3,967, of whom 1,035 were killed or missing; the defenders lost about 1,700.',
          consequence: 'The defeat cost Murray his credibility and was followed weeks later by a heavier defeat at the second battle of Gaza. The front in Palestine then stood still until a new commander, General Edmund Allenby, brought up more men, water pipes and a railway, and broke the town’s defence in the autumn.',
        },
      university:
        {
          cause: 'Historians argue whether the failure at Gaza was an isolated mistake or the predictable result of fighting a colonial campaign on a narrow logistical margin — one waterless flank, a single line of rail and pipeline, and a garrison that the British could not outnumber for long.',
          what: 'The sources are British divisional accounts and Turkish staff histories written afterwards, and the two differ in kind: British reports give detailed returns of their own losses and guess at the enemy’s. Casualty totals and the timing of the withdrawal are both disputed, since the order to retire was given on the grounds of water and darkness rather than enemy strength, and later witnesses disagreed about whether the town had really been within reach.',
          consequence: 'The battle is now used in the argument about how the Ottoman army was fighting in 1917 — whether it had been permanently improved by German doctrine and staff work, or was simply given a defensive position that the British attacked badly — and in the argument about whether the Palestine campaign was ever part of a coherent strategy for the war.',
        },
    },
  },
  {
    id: 'united_states_declares_war',
    date: '1917-04-06',
    precision: 'day',
    title: 'The United States declares war on Germany',
    kind: 'diplomacy',
    fronts: ['politics', 'naval'],
    countries: ['United States', 'Germany', 'United Kingdom', 'France', 'Mexico'],
    figures: ['wilson_us'],
    note: 'The votes were 82 to 6 in the Senate on 2 April and 373 to 50 in the House on 6 April, with 6 and 8 members respectively not voting — a far larger majority than the anti-war movement of 1916 suggested. Germany’s offer to Mexico was examined by a Mexican military commission, which found the war unwinnable for Mexico on ordinary military grounds, so the telegram’s military content was worthless and its political content was everything. Zimmermann’s own public admission on 3 March that the text was genuine destroyed the forgery story that many Americans had hoped to believe. Historians still weigh two causes against each other, the resumption of submarine warfare and the telegram, and the 3 February date when Wilson laid the German submarine announcement before Congress makes it hard to argue that the text alone turned him.',
    levels: {
      primary:
        {
          cause: 'Germany had begun sinking merchant ships without warning again on 1 February, and American ships were among those lost.',
          what: 'In January a German minister asked Mexico to join the war against the United States, ' +
            'promising it Texas, Arizona and New Mexico. British intelligence read it; Americans saw it ' +
            'on 1 March. Congress declared war on 6 April, after Wilson asked on 2 April.',
          consequence: 'The United States was at war with Germany, though not yet with its allies. It had almost no army in France, so at first it sent money, food and ships rather than soldiers.',
        },
      secondary:
        {
          cause: 'American opinion had moved against Germany since the reports from Belgium in 1914 and the sinking of the Lusitania in 1915, and American banks and exporters had lent and sold heavily to Britain and France. Wilson had been re-elected in 1916 on keeping the country out of the war, but German submarine warfare on 1 February, which Berlin knew was likely to bring America in, closed off that position.',
          what: 'The Zimmermann telegram of 17 January, intercepted and decoded by British Room 40, proposed ' +
            'an alliance with Mexico to recover Texas, Arizona and New Mexico; its text appeared in the ' +
            'American press on 1 March, and on 3 March Zimmermann admitted it was genuine. Wilson asked ' +
            'Congress for a declaration of war on 2 April, which the Senate passed that day by 82 to 6; ' +
            'the House followed on 6 April by 373 to 50, and Wilson signed at once. The declaration was ' +
            'against Germany only, not its allies.',
          consequence: 'America joined as a power at war rather than as an allied partner, with its own commander and its own flag on the Western Front. A mass army had to be raised, trained and shipped across an ocean patrolled by submarines, which meant that the decisive American effect in 1917 was economic and moral, and in 1918 military.',
        },
      university:
        {
          cause: 'The interpretation of American entry divides along familiar lines: submarine warfare as the immediate cause, the loans and trade that tied the United States to the Allies, Wilson’s ideological desire for a peace settlement he could impose, and the telegram as the trigger that made all of this sayable in public.',
          what: 'The evidential difficulty is order of events. Wilson broke with Berlin over the submarine declaration before the telegram reached the press; Mexico’s own commission judged the offer worthless on military grounds; and German records show the Foreign Office sent it knowing that American entry was the likely consequence.',
          consequence: 'It is therefore used as a test case for the argument about whether intelligence operations change history: Room 40’s decryption is often called Britain’s most significant intelligence triumph of the war, while historians of American opinion point out that the president had already moved.',
        },
    },
  },
  {
    id: 'nivelle_offensive_chemin_des_dames',
    date: '1917-04-16',
    precision: 'day',
    title: 'Nivelle’s breakthrough attempt on the Chemin des Dames',
    kind: 'offensive',
    fronts: ['western'],
    countries: ['France', 'Germany', 'United Kingdom', 'Russia'],
    figures: ['nivelle', 'haig', 'french_john'],
    note: 'The plan promised a breakthrough within forty-eight hours for about 10,000 casualties; the fighting of 16 April – 9 May is variously costed. This card uses the totals in the article’s infobox, drawn from Gilbert: some 187,000 French losses with 5,183 Russian, and about 163,000 German losses of whom 15,000 to 20,780 were prisoners. Other accounts count only the Aisne fighting and give French losses nearer 120,000, and British losses at Arras are counted separately again, so totals differ by tens of thousands depending on the period and the front included. The French attacks were renewed on the ridge until 9 May, and local fighting there went on all summer, which is why some accounts end the battle in April and others in May.',
    levels: {
      primary:
        {
          cause: 'The French commander, Robert Nivelle, believed the Germans had been badly worn down at Verdun and could be pushed off a long ridge north of the Aisne called the Chemin des Dames.',
          what: 'On 16 April the French attacked along the ridge after a huge bombardment. The ground was ' +
            'steep, the Germans were dug deep into the chalk and the weather was bad. Thousands were ' +
            'killed or wounded on day one, and the ridge was not taken.',
          consequence: 'The attack was called off at the end of April. French soldiers had lost heart, and within weeks whole divisions were refusing to attack.',
        },
      secondary:
        {
          cause: 'Nivelle’s plan was a single decisive blow: preliminary attacks by the French at St Quentin and by the British First, Third and Fifth armies at Arras to hold German reserves, then a French breakthrough on the Chemin des Dames and in Champagne, to be exploited towards the German frontier. He promised a breakthrough in forty-eight hours for about 10,000 casualties, and had promised so much that his own government and the British commander Sir Douglas Haig were doubtful.',
          what: 'The preliminaries did well — the French took the German defences west of the Hindenburg Line near St Quentin on 1–4 April, and the British at Arras, with four Canadian divisions at Vimy Ridge, made the deepest advance since trench warfare began. The main attack on 16 April went in against about 480,000 Germans with some 850,000 French troops, 7,000 guns and 128 tanks, and won ground tactically but nowhere broke through. Attacks were pressed on until 9 May at a cost of roughly 187,000 French casualties against about 163,000 German.',
          consequence: 'The failure discredited the strategy of the single decisive breakthrough, brought the French army to the brink of collapse in the mutinies of April to June, and led to Nivelle’s replacement by Philippe Pétain, who accepted that the French army would fight only defensively until it had been rearmed and fed.',
        },
      university:
        {
          cause: 'The battle sits in the argument about “breakthrough” doctrine on the western front: whether Nivelle’s failure was a matter of arithmetic — guns per yard, depth of defences, the time artillery preparation gave the defenders — or of his refusal to allow a second option if the first assault failed.',
          what: 'Numbers are the problem. The promised 10,000 casualties and the actual figure are both contested; infobox totals reach 187,000 French losses by counting the whole operation from the St Quentin preliminaries, while accounts confined to the Aisne give much lower figures. The German defence was in depth, which German doctrine itself was only then formalising, so the sources disagree about whether the defence of 16 April was designed or improvised.',
          consequence: 'Historians now treat the Chemin des Dames less as a battle than as the cause of the mutinies and of the French army’s 1917 defensive strategy, and as evidence in the long quarrel over attrition versus breakthrough: some argue that the western front’s real problem was that tactical success could not be turned into strategic decision, however much was spent.',
        },
    },
  },
  {
    id: 'lenin_sealed_train_april_theses',
    date: '1917-04-16',
    precision: 'day',
    title: 'Lenin comes home in the sealed train',
    kind: 'politics',
    fronts: ['eastern', 'politics'],
    countries: ['Russia', 'Germany'],
    figures: ['lenin', 'kerensky'],
    note: 'Dates run twice over: Lenin reached the Finland Station on 16 April new style, 3 April in the old Russian calendar, and the theses were first read out on 17 April, 4 April old style. Germany’s purpose was stated plainly in its own records — to produce unrest that would take Russia out of the war and free divisions for the west, which is what happened after the October Revolution and the Treaty of Brest-Litovsk. The obvious source problem is that the April Theses are Lenin’s own polemic, written to beat his party’s leadership into line, so they overstate the isolation of the position they defend; and the question of German money and German complicity, which White émigré and later Soviet accusations handled in opposite directions, is still argued.',
    levels: {
      primary:
        {
          cause: 'Lenin was the leader of the Bolshevik party and was far away in Switzerland, where he had been living while the war went on. Getting home meant crossing a war zone.',
          what: 'Germany, at war with Russia, let Lenin through, hoping his return would make Russia quit the ' +
            'war. He reached Petrograd on 16 April, and told his party to reject the new government and ' +
            'to give all power to the soviets, the workers’ councils.',
          consequence: 'His demands gave the Bolsheviks a clear policy against the war, and helped bring on the crises of July and the Bolshevik seizure of power in November.',
        },
      secondary:
        {
          cause: 'The February Revolution had produced a liberal Provisional Government under Prince Lvov, which meant moderate socialists who had been in exile too, and the Petrograd Soviet, which shared power with it. Bolsheviks in Russia were cautious and supported the government’s war policy; Germany was willing to help any Russian opponent of the war cross its territory.',
          what: 'The Swiss communist Fritz Platten negotiated the passage through Germany, and Swedish socialists arranged the rest of the route. Lenin arrived at the Finland Station on 16 April and on 17 April read out ten short directives, published in the Bolshevik newspaper Pravda: no support for the Provisional Government, an end to the war as a predatory imperialist war, no merging with the other socialist parties, and “all power to the soviets”, with the land given to the peasants.',
          consequence: 'The slogans gave the party a policy of opposition to a government that was losing authority over bread and the war. They shaped the July Days, and after the failure of those rising the Bolsheviks’ demand for soviet power was what carried them in October.',
        },
      university:
        {
          cause: 'The argument is whether the sealed train was a German operation that made the revolution possible, or an irrelevance — Germany permitted dozens of travellers, and Lenin travelled openly with his passport. It is the sharpest case in the long quarrel about the dependence of the Bolsheviks on Berlin.',
          what: 'The evidence runs against both extremes. German records show the Foreign Office wanted political disruption and the end of Russian belligerency; Lenin’s own text was addressed to his party rather than to the public and is the source for his claim that the position was at first isolated; and the old-style and new-style dates of the theses are mixed in older literature.',
          consequence: 'Most historians now date the decisive change not to the arrival but to the theses, treating them as the founding text of the strategy of soviet power — and therefore of the argument about whether October 1917 was a coup or the moment a movement took the state at its word.',
        },
    },
  },
  {
    id: 'french_army_mutinies',
    date: '1917-05-01',
    precision: 'month',
    title: 'The French army refuses to attack',
    kind: 'politics',
    fronts: ['western'],
    countries: ['France', 'Germany', 'United Kingdom'],
    figures: ['nivelle', 'petain', 'haig'],
    note: 'The word “mutiny” is misleading and the sources say so: the soldiers stayed in the trenches and were ready to defend them, but refused the order to attack. Scale is argued by method — the figure used here is that collective indiscipline touched nearly half the infantry divisions on the western front “to various degrees”, which counts anything from a mass protest to a division that would not move at all; narrower counts give fewer divisions by requiring a refusal to mount an attack. Punishment figures are given as 3,400 courts-martial, 554 death sentences and 26 executed; other accounts give higher totals because they count convictions over a longer period, include units away from the front, or add cases tried after the summer. Contemporary German intelligence judged the French army finished, and postwar French writers insisted the German high command never understood what it had been within reach of, but whether the Germans could have exploited the situation is not something the sources settle.',
    levels: {
      primary:
        {
          cause: 'After the failure of the Chemin des Dames attack in April, French soldiers felt they had been sacrificed for nothing.',
          what: 'In spring 1917 whole French units refused to attack. They shouted back, sometimes arresting ' +
            'officers, but stayed in the trenches, ready for a German attack. General Pétain took command ' +
            'on 15 May, promised no more hopeless attacks and gave tired units rest.',
          consequence: 'The French army stopped attacking for the rest of the year. Hundreds of soldiers were sentenced to death and a small number were shot, and the French army waited until it was strong enough to attack again.',
        },
      secondary:
        {
          cause: 'The Nivelle offensive had been sold to the army as the decisive blow that would end the war in days; it failed on the Chemin des Dames at a cost of about 187,000 French casualties. More than a million French soldiers had already been killed since 1914, out of a male population of some twenty million, and the American troops whose arrival had been promised had not come. The February Revolution in Russia encouraged talk of refusing a war nobody wanted.',
          what: 'Collective indiscipline spread from the units of the Aisne battle in late April through May ' +
            'and June. Soldiers elected committees, demanded leave and food, and refused to move up for ' +
            'an attack; nearly half the infantry divisions on the western front were touched, and in a ' +
            'few places officers were seized. Pétain, who replaced Nivelle on 15 May, combined justice ' +
            'with reform: about 3,400 courts-martial, some 554 death sentences and 26 executions, ' +
            'alongside better food, regular rest, and attacks limited to what was achievable.',
          consequence: 'The French army recovered without a purge that would have destroyed it, and France fought the rest of 1917 on the defensive, which placed the weight of the year’s fighting on the British and, after June, on the expectation of American manpower. The mutinies also set the terms of French strategy until 1918: attack only with overwhelming means and with the tank and the aeroplane to spare infantry.',
        },
      university:
        {
          cause: 'The interpretive question is whether this was a near-revolution or a labour dispute in uniform. The older republican account, associated with Guy Pedroncini’s archival study of the military justice records, treats it as a disciplined refusal of suicide rather than a revolt against the state; the more political reading stresses the committees, the slogans and the echo of Russia.',
          what: 'The evidence is judicial and administrative — court-martial files, prefectural reports, unit war diaries — and much of it was kept from the public, so the totals differ by counting rules rather than by discovery. The definitional problem is real: a unit that shouted, drank the officers’ wine and then marched to the line is entered as a case in some files and not in others, and the numbers of divisions, convictions and executions depend on where the boundary is drawn.',
          consequence: 'What is agreed matters more than the totals: the army’s refusal was collective, it was directed at offensive operations only, and it ended the strategy of the decisive breakthrough in French hands. The episode is therefore the chief evidence in the argument about how much say the conscript armies of 1917 had over how the war was fought.',
        },
    },
  },
  {
    id: 'kerensky_offensive',
    date: '1917-07-01',
    precision: 'day',
    title: 'Russia’s last offensive, in Galicia and on the Siret',
    kind: 'offensive',
    fronts: ['eastern', 'balkans'],
    countries: ['Russia', 'Romania', 'Germany', 'Austria-Hungary'],
    figures: ['kerensky', 'kornilov', 'alekseev_mikhail', 'averescu'],
    note: 'Russian accounts call this the June Offensive, because 1 July new style was 18 June by the old calendar; this card gives new-style dates throughout. The figures are a warning about how much a number can mean. Strength is given as some 900,000 Russian troops against 260,000 of the Central Powers, which overstates the attack because only units that volunteered to attack were committed. Casualties for the offensive are given as anything from 38,722 to 58,329, including 6,905 killed, and by other writers as 125,000 to 200,000 with 40,000 killed; the spread reflects how much of the subsequent disordered retreat is counted. On the Romanian sector the dates differ too: the attack at Mărăști is given as 22 July – 1 August, and Mărășești as 6 August – 3 September in the account used here, while shorter accounts end it in mid-August.',
    levels: {
      primary:
        {
          cause: 'The new Russian government wanted to show it was still winning the war, and its army was ordered to attack.',
          what: 'The attack began on 1 July in Galicia. Some units attacked bravely, and one, a brigade of Czech and Slovak volunteers, took its objectives at Zborów; but many soldiers would not attack at all, and walked away from their positions when ordered to. The offensive was over in less than three weeks.',
          consequence: 'Hundreds of thousands of Russian soldiers were killed, wounded or taken prisoner, and the army stopped obeying orders. Romania was left to fight on alone for a time, and Russia was now ready to give up the war.',
        },
      secondary:
        {
          cause: 'Alexander Kerensky, minister of war and then head of the government, believed that a successful attack would give the regime authority, strengthen its standing with the Allies, and prove to the soldiers’ committees that the war could still be won. The army had voted for the right to elect committees and send delegates, so orders now had to be negotiated with them, and only units that volunteered were used.',
          what: 'The offensive opened on 1 July in eastern Galicia and broke in over parts of the ' +
            'Austro-Hungarian front, taking tens of thousands of prisoners. At Zborów the Czechoslovak ' +
            'brigade, about 3,500 men, made the first significant Czechoslovak attack, clearing the ' +
            'trench before reinforcements came up. But the Russian reserves refused to move, German ' +
            'reinforcements counter-attacked, and by 19 July the fighting was over. On the Romanian front ' +
            'the same plan produced Mărăști from 22 July, the last joint Romanian-Russian operation, and ' +
            'the counter-offensive at Mărășești.',
          consequence: 'The offensive was the last Russia made in the war. Its failure discredited the government, brought the officer corps into the open against the committees, and made possible both the Kornilov affair and the German capture of Riga. In Romania the two battles gave the army a national myth of victory in a year when the country was otherwise overrun.',
        },
      university:
        {
          cause: 'The argument is whether the army of 1917 “disintegrated” or negotiated. Kerensky’s offensive is the test case for the reading that the soldiers were not deserters but political actors: they accepted the war in principle, demanded terms — officer committees, leave, no offensive wars — and fought where they had volunteered, as at Zborów and on the Siret.',
          what: 'The evidence is orders, committee resolutions and postwar testimony, and the numbers are unusable as a single series: strength figures of 900,000 against 260,000 count volunteers against a whole front, and casualty totals run from under 60,000 to 200,000 depending on whether the collapse into mass desertion is folded in. Romanian and Russian accounts also date Mărășești differently, from a week to a month.',
          consequence: 'Historians therefore use the offensive less as a battle than as evidence in the argument about the Russian army’s consent to fight: whether discipline broke because of propaganda from the rear, because of the officers’ loss of authority after Order No. 1, or because the peasantry in the ranks had simply decided the war was someone else’s.',
        },
    },
  },
  {
    id: 'third_ypres_begins',
    date: '1917-07-31',
    precision: 'day',
    title: 'Third Ypres opens on the ridges above Ypres',
    kind: 'offensive',
    fronts: ['western'],
    countries: ['United Kingdom', 'France', 'Germany', 'Belgium', 'India'],
    figures: ['haig', 'luddendorff'],
    note: 'Casualties for the campaign are given as a range because the records are irreconcilable: 240,000 to 448,614 for the British and French, and 217,000 to 400,000 for the Germans, of whom 24,065 were taken prisoner. The German figure of 217,000 is what the army’s own daily returns record for the whole second half of 1917 in Flanders, and historians who count divisional histories and the fighting outside the salient get much higher totals. The British official historians’ claim that the fighting was ruined by the weather, and the German staff historians’ claim that it was ruined by General Fritz von Loßberg’s defensive methods, are both now treated as postwar argument dressed up as analysis.',
    levels: {
      primary:
        {
          cause: 'The British army wanted to push the Germans out of the high ground around the Belgian city of Ypres, and to reach the Belgian coast where the German submarines had their bases.',
          what: 'On 31 July the British attacked above Ypres after a bombardment that wrecked the drainage. ' +
            'The first day went well, then it rained. The ground became a sea of mud where men and horses ' +
            'drowned, and months of attacks won a few hundred yards.',
          consequence: 'The ridge village of Passchendaele was taken in November and the offensive then stopped. Both sides lost hundreds of thousands of men and the coast was never reached.',
        },
      secondary:
        {
          cause: 'The strategy had been settled by the Allies in November 1916 and again in May 1917: an attack in Flanders to take the ridges south and east of Ypres, cut the railway at Roulers that supplied the German Fourth Army, and then advance along the coast towards Bruges and the submarine bases, with a landing to follow. It also had to relieve pressure on the French army, which after the Nivelle offensive could not attack.',
          what: 'The preliminary attack on the Messines ridge in June had gone well, and the opening assault of 31 July took Pilckem Ridge, but the advance then slowed in ground that the bombardment had drained of water and that August rains made impassable. Attacks continued at Menin Road Ridge, Polygon Wood, Broodseinde and Poelcappelle as autumn set in, using methodical “bite and hold” attacks — take a limited objective, then hold it against counter-attack — with the German army defending in depth and counter-attacking at once. Passchendaele ridge was reached in November, and the fighting died down around 10 November.',
          consequence: 'The German U-boat bases on the coast were not taken, but the German army was pinned in Flanders and forced to fight battle after battle on ground chosen by the attacker. The campaign became the central example in the argument over whether attrition could work when the ground made movement impossible, and it did much to destroy Sir Douglas Haig’s reputation.',
        },
      university:
        {
          cause: 'The debate over Third Ypres is a debate about its objectives. One school holds that Haig’s plan was a decisive breakthrough attempt that failed in the mud; another, resting on the “bite and hold” attacks of September and October, holds that it became a deliberately limited campaign of attrition whose real purpose was to wear down the German army and hold it in Flanders while the French recovered.',
          what: 'Both readings depend on the casualty statistics, which cannot be settled: British and French losses are given from 240,000 to over 448,000 and German losses from 217,000 to 400,000, and the German record of 24,065 prisoners is the one firm figure. German divisions committed are given as 77 to 83 against 50 British and 6 French, and divisional strength in the line fell so fast that “divisions” measure nothing comparable.',
          consequence: 'Recent work argues that the postwar German official history explained the campaign by blaming one general’s defensive methods, and so let the higher command off; British historians such as Wynne, Griffith and Sheldon have in turn argued that the real success of 1917 was the tactical system that the Germans had no answer to. The weather, the mud and the “ pointless slaughter” reading belong to the political argument about the war that went on after it, and are not neutral facts.',
        },
    },
  },
  {
    id: 'greece_enters_war',
    date: '1917-06-11',
    precision: 'month',
    title: 'Constantine abdicates and Greece joins the Entente',
    kind: 'alliance',
    fronts: ['balkans', 'politics'],
    countries: ['Greece', 'United Kingdom', 'France', 'Russia', 'Bulgaria', 'Germany', 'Austria-Hungary', 'Ottoman Empire'],
    figures: ['venizelos', 'constantine_greece', 'george_v'],
    note: 'The days are disputed. English Wikipedia gives Constantine’s reign as ending on 11 June 1917 and his second son Alexander as king from that day, and puts the Greek declaration of war on the Central Powers at 30 June; other accounts give the abdication as 12 June, and the declaration as 27 June or 2 July. The card therefore keeps month precision and follows the dates given above. A further wrinkle: the rival Greek government at Thessaloniki had already declared war on Germany on 23 October and on Bulgaria on 24 October 1916, so the June 1917 date marks the entry of a reunified state, not the first Greek belligerency. Greek strength and losses are given as nine divisions in the field with about 5,000 deaths, and, from the same statistical source, ten divisions raised and total casualties above 24,000 — the 9 and 10 figure conflict is in the source itself. Greek official documents of 1917 were dated in the Julian calendar, thirteen days behind the Western calendar used on this site, which is one reason the day of the abdication and of the declaration of war differ between accounts.',
    levels: {
      primary:
        {
          cause: 'Greece had stayed out of the war, but its prime minister Eleftherios Venizelos wanted in on the Entente side, and the King, Constantine, who was married to the German Kaiser’s sister, refused.',
          what: 'Greece split, with a rival government in the north. In June 1917 French and British ships ' +
            'blockaded Athens, and on 11 June Constantine went into exile. Venizelos took over, and ' +
            'Greece declared war on the Central Powers at the end of June.',
          consequence: 'Greek soldiers, instead of fighting each other, went to the Macedonian front against Bulgaria. Greece came out of the war on the winning side, which changed the map of the Balkans.',
        },
      secondary:
        {
          cause: 'The “National Schism” divided royalist Old Greece from Venizelist New Greece, the lands won in the Balkan Wars. Constantine’s neutrality was defended on military grounds and distrusted as pro-German; the surrender of Fort Roupel and eastern Macedonia to Bulgaria in 1916, the armed clash between royalist troops and Entente sailors in Athens in December 1916, and a five-month naval blockade that brought hunger to Athens, made the King the obstacle to the Entente’s Macedonian front.',
          what: 'The Entente could not move against Constantine while the Russian Tsar, his kinsman, protected him; the February Revolution removed that. In June 1917 Entente pressure and armed demonstration forced the abdication, the King and Crown Prince George left the country, and Alexander, thought manageable, was placed on the throne. Venizelos reunited the governments, took control of the army, and royalist officers and politicians were exiled or imprisoned; Greece declared war on the Central Powers at the end of June and put nine divisions into the Macedonian front, with losses of about 5,000 dead and more than 24,000 casualties in all.',
          consequence: 'The Entente’s Salonika front got the manpower it had wanted since 1915, and Bulgaria faced a larger enemy. Greece entered the peace conference as a belligerent rather than a neutral, which is why the settlement of 1918–1920 gave it Thrace and Smyrna — and why the quarrel between Venizelists and royalists, never settled in 1917, poisoned Greek politics for a generation.',
        },
      university:
        {
          cause: 'Historians disagree on whether June 1917 was a revolution imposed by a foreign power or the completion of the national will. One reading is imperial: a blockade and an ultimatum that deposed a constitutional monarch, with a disputed legality on the Greek side. The other is social: the Schism was a genuine conflict over who the state served, and Venizelos’s unity was as much a purge as a reconciliation.',
          what: 'The sources are partisan on both sides, royalist memoirs and Venizelist official history, and the dates shift between them — abdication on 11 or 12 June, declaration of war on 27 or 30 June or 2 July — while the Greek army’s strength in the field is variously given as nine or ten divisions.',
          consequence: 'The episode is now read as part of the wider argument about the Entente’s handling of neutrals in 1917 — how far blockade, loans and the removal of hostile dynasties were treated as legitimate instruments of strategy — and as the starting point of the Hellenic disaster of 1922, since the army that fought in Macedonia in 1917–18 was the army that fought in Asia Minor in 1919–22.',
        },
    },
  },
  {
    id: 'marasesti',
    date: '1917-08-06',
    precision: 'day',
    title: 'Romania holds the line at Mărășești',
    kind: 'battle',
    fronts: ['eastern', 'balkans'],
    countries: ['Romania', 'Russia', 'Germany', 'Austria-Hungary'],
    figures: ['averescu'],
    note: 'The battle is dated 6 August to 3 September 1917 new style, 24 July to 21 August in the Julian calendar used in Russian and Romanian documents; shorter accounts stop in mid-August, when the fighting around Mărășești itself was decided, and treat the rest as mopping-up. The casualties quoted here — 27,410 Romanian (5,125 killed) and 25,650 Russian (7,083 killed), against 60,000 to 65,000 German and Austro-Hungarian — come from one Romanian popular-history account, which is also where the unit strengths are taken from; the enemy total is the weakest number in the set and no German divisional record is normally cited alongside it. The Romanian 1st Army was commanded by Constantin Cristescu until 11 August and by Eremia Grigorescu from 12 August; the Russian 4th Army by Alexander Ragoza; the attacking German 9th Army by Johannes von Eben. This card also covers the Battle of Mărăști of 22 July to 1 August, which preceded it and is described in the July card.',
    levels: {
      primary:
        {
          cause: 'Romania joined the war in 1916 and was overrun in four months. Only the north-east, Moldavia, was left, held by a thin front along the Siret river with the last ports and railways behind it.',
          what: 'On 5 August the Germans shelled for eight hours and used poison gas, breaking in where the ' +
            'Russian trenches were shallow. The Russians fell back, and Romanian divisions marched ' +
            'straight into the gap. All month the front moved by a kilometre or two.',
          consequence: 'The Germans never broke through, and the battle died out on 3 September with Moldavia still in Allied hands. The German and Austro-Hungarian army lost more men than the Romanians and Russians together.',
        },
      secondary:
        {
          cause: 'After the fall of Bucharest in December 1916, Romania survived only because a Russian army stood in Moldavia beside it, and because the Focșani Gate — the low gap between the Carpathians and the Danube delta, along the Siret — was narrow enough to hold. On 22 July the Romanian Second Army under Averescu had attacked successfully at Mărăști, further south, and the German high command answered not by meeting that attack but by striking the weaker Russian 4th Army in the centre.',
          what: 'The blow fell on 6 August on Russian positions still being handed over to the Romanian 1st ' +
            'Army, thin and full of gaps. The Germans took the village of Doaga, a Romanian ' +
            'counter-attack took ground back, and a German wedge drove between the Romanian 9th Division ' +
            'and a Russian division already leaving its positions. Command passed on 12 August from ' +
            'Cristescu to Grigorescu, attacks were renewed on 14 August behind gas and heavy guns, and ' +
            'until 3 September the German 9th Army threw in division after division without taking ' +
            'Mărășești.',
          consequence: 'It was the last major Central Powers attack against Romania in the war, and it failed: a third of the country, its ports and its links to the sea stayed Allied. The Russian 4th Army paid for the defence with units that deserted in the fighting, which was one more sign that Petrograd’s hold on the front was gone by the time the Bolsheviks took power in November.',
        },
      university:
        {
          cause: 'Mărășești is a monument before it is a subject: Romanian historiography treats it as the country’s Verdun, the battle that proved the army had earned the postwar settlement by fighting on after the occupation. That framing decides what is measured — the defence of the last free third of Romania — and what fades out of the picture, which is that the battle was one sector of a Russian army coming apart.',
          what: 'Almost every number in circulation, from the 78 Romanian battalions and 84 Russian ones to the 27,410 and 25,650 casualties and the 60,000–65,000 German and Austro-Hungarian, rests on a single Romanian popular-history article rather than on divisional records, and the Allied figures are never cross-checked against German ones. The fighting is also unevenly documented: the Romanian divisional history is detailed, the Russian units appear only as abstractions whose “combat power was collapsing”.',
          consequence: 'The two scholarly uses of the battle pull in opposite directions. Romanian national history reads 6 August – 3 September as a victory that belongs in the same story as 1918 and Greater Romania; historians of the Russian army in 1917 read the same battle as evidence that the Eastern Front was being won by desertion and disintegration rather than by German tactical skill — an argument that depends on the least well documented side of the statistics.',
        },
    },
  },
  {
    id: 'kornilov_affair',
    date: '1917-09-01',
    precision: 'month',
    title: 'Kornilov marches on Petrograd and the army collapses behind him',
    kind: 'politics',
    fronts: ['eastern', 'politics'],
    countries: ['Russia'],
    figures: ['kerensky', 'kornilov', 'trotsky'],
    note: 'Month precision because the affair is dated two ways: the march and its collapse fall on 10–13 September 1917 new style, which is Old Style 28–31 August, and English accounts write both, while the article’s own narrative says “by the end of August”. The card dates the event to September, new style, and states the old-style dates here. The character of the affair is disputed in the sources: the article calls it a misunderstanding caused by the agent Vladimir Lvov, who reported to Kerensky that Kornilov meant to overthrow him, and Kornilov believed Kerensky had been overpowered by the Bolsheviks; older accounts call it an attempted military coup. Kerensky abolished the monarchy and proclaimed the Russian Republic immediately afterwards, on 14 September new style (1 September old style).',
    levels: {
      primary:
        {
          cause: 'After the failure of the summer offensive the Russian army needed discipline, and its new commander-in-chief, General Lavr Kornilov, wanted harsh rules back, including the death penalty at the front. Prime Minister Alexander Kerensky wanted the same thing but could not say so in public, and the two men misread each other.',
          what: 'When Kornilov marched on the government, Kerensky declared him a traitor. Kornilov thought ' +
            'the Bolsheviks had taken Petrograd and sent his corps there. Workers of the Petrograd Soviet ' +
            'stopped them on the railway, and the corps turned back without a fight. Kornilov was ' +
            'arrested.',
          consequence: 'Nobody fought, and the government still fell apart. Kerensky had armed the workers to save himself, and the Bolsheviks, who had been beaten down in July, were given weapons and lost their prisoners. Russia became a republic by decree a day later.',
        },
      secondary:
        {
          cause: 'The June offensive collapsed in July, the Petrograd garrison had shot at each other in the July Days, and Kerensky needed an army that obeyed and a capital that was quiet. Kornilov, appointed commander-in-chief after Brusilov, offered both: courts-martial and a march of loyal troops into Petrograd. What exactly was agreed between them, through the intermediary Vladimir Lvov, was never settled; Kornilov was convinced Kerensky had been overpowered by the Soviet, Kerensky was convinced Kornilov was his enemy, and on learning he was accused of treason, Kornilov went ahead with the march he had already ordered.',
          what: 'The Provisional Government declared martial law in Petrograd and asked the Soviet for the organised workers and garrison troops of the city. The Bolsheviks, who had just been outlawed, came out of prison and worked with railwaymen and agitators to persuade the advancing soldiers to halt and disperse; the corps’ staffs would not force the issue, and by 13 September the march had ended in a stand-down with no fighting. Kornilov was dismissed and imprisoned, Krymov killed himself, and Kerensky, having destroyed the officer corps he had counted on, restructured his government into a Directorate and proclaimed Russia a republic on 14 September new style.',
          consequence: 'September 1917 is the pivot of the whole Russian war. The moderate socialists who defended the government were discredited with it, the officer corps was purged a second time, the army’s political leadership was emptied out, and the Bolsheviks obtained legal existence, armed Red Guards and the credit of having stopped a coup. Six weeks later they took power almost without opposition.',
        },
      university:
        {
          cause: 'The affair is a case study in how far a revolution can turn on a communication failure, and historians have argued it for a century: a coup, a “semantics coup”, a provocation by Kerensky, or a misunderstanding engineered by an agent, Lvov, who had his own reasons for the message he carried. Which version a writer accepts depends largely on how much weight they give to letters, telegrams and memoirs written after 1921 by the men who lost.',
          what: 'The documentary record is thin and hostile to itself. Kerensky and Kornilov gave contradictory accounts of what was agreed and when, both written in emigration; the telegram that supposedly ordered the march is disputed; there was no battle, so there is no battlefield record, no reliable casualty list and no unit history to appeal to. The dates are themselves a problem, since the same four days are “the end of August” in Russian old style and 10–13 September in the calendar used by every Western narrative.',
          consequence: 'What scholarship has settled on is the effect rather than the intention: whatever Kornilov meant, the collapse of the march handed the Bolsheviks the argument that counter-revolution was coming and that only soviets and armed workers could stop it, and it discredited the officers as a class in the eyes of the soldier-councillors. Readings of October 1917 as a coup or as a mass movement both rest on what happened in these five weeks.',
        },
    },
  },
  {
    id: 'operation_albion',
    date: '1917-10-12',
    precision: 'day',
    title: 'Germany takes the Baltic islands and the Russian front quits',
    kind: 'landing',
    fronts: ['eastern', 'naval'],
    countries: ['Germany', 'Russia'],
    note: 'Operation Albion, 12–20 October 1917: the joint army, naval and air operation to occupy the West Estonian archipelago — Saaremaa (Ösel), Hiiumaa (Dagö) and Muhu (Moon). The landing at Tagalaht (Tagga) bay on Saaremaa came on 12 October after mine-clearing and counter-battery work, and the island was secure by 16 October; Hiiumaa was landed on the same day and taken the next, after two failed attempts, and Muhu was evacuated by Russian troops on 20 October, so the sequence across the three islands is not reported identically in every account. The German claim is 20,000 prisoners and 100 guns; the casualty list in the same article gives Russian losses as 20,130 captured, 141 guns of which 47 heavy, 130 machine guns, 40 aircraft, the pre-dreadnought Slava and the destroyer Grom, so the totals are close but not the same. German losses are given separately for the navy (156 killed, 60 wounded) and the army (54 killed, 141 wounded). British submarines operated in the gulf on the Russian side, and one of them, C32, is listed among the Russian losses, which is one of several places where the article is untidy about who lost what. The dates above are New Style, as in the German accounts: Russia still used the Julian calendar in October 1917, thirteen days behind, so contemporary Russian documents put the opening landing on 29 September.',
    levels: {
      primary:
        {
          cause: 'The Russian navy held the Estonian islands, whose guns covered the Gulf of Finland, the sea ' +
            'road to Petrograd. After the February revolution the German high command judged that taking ' +
            'them would leave the Russian capital open to attack by sea and land.',
          what: 'On 12 October 1917 German minesweepers cut channels through the minefields while battleships ' +
            'fought the Russian guns. Troops landed at Tagalaht on Saaremaa; a second landing took ' +
            'Hiiumaa. The Russian fleet lost a battleship and withdrew. By 20 October the islands were ' +
            'German.',
          consequence: 'Germany took about 20,000 prisoners and the Baltic islands, and lost a little over 200 men killed. The Russian government, which had promised its soldiers peace, now had the enemy on the coast within reach of Petrograd, and a month later it asked for an armistice.',
        },
      secondary:
        {
          cause: 'The islands had mattered little to either side in 1914, but turmoil in revolutionary Russia ' +
            'changed the calculation: the German high command judged that taking them would outflank the ' +
            'whole Baltic front and make Petrograd vulnerable, ending the Eastern Front on German terms. ' +
            'The navy also wanted the Gulf of Finland cleared. The force was modern and joint: about ' +
            '24,500 soldiers under General Oskar von Hutier, with the 42nd Division in the first wave, ' +
            'against some 24,000 Russians, backed by ten dreadnoughts, a battlecruiser, fifty torpedo ' +
            'boats, six submarines and 102 aircraft.',
          what: 'Mine-clearing and fire against the coastal batteries came first, and on 12 October the battleships engaged Russian ships in the gulf while the 42nd Division came ashore at Tagalaht bay. Saaremaa was cleared by 16 October; Hiiumaa, attempted twice before, was taken on 13 October; and the fighting in the Suur Strait, the Battle of Moon Sound, cost the Russians the pre-dreadnought Slava and the destroyer Grom and forced the fleet to withdraw. Russian units surrendered in thousands and Muhu was evacuated on 20 October.',
          consequence: 'Albion cost Germany about 210 dead and gave it 20,000 prisoners, 141 guns and the Baltic islands, with the road to Petrograd open by sea and land. It fixed the terms of the Eastern Front before the talks started: the Bolshevik government negotiated from October and signed an armistice on 15 December, and in March 1918 gave up the Baltic provinces, Poland and Ukraine at Brest-Litovsk. Later naval writers took the operation as the first modern joint amphibious assault.',
        },
      university:
        {
          cause: 'Albion is a small operation with a large afterlife, and its meaning depends on which literature it is read in. German and later American naval writing treats it as the first modern joint amphibious operation, with minesweeping, naval fire support, air support and a coordinated army landing. Russian and Soviet writing treats it as one symptom of the army’s disintegration after June 1917, in which units were lost to desertion and surrender rather than to fighting.',
          what: 'Both readings rest on a short record and on figures that do not reconcile: the German claim of 20,000 prisoners and 100 guns sits beside a list of 20,130 captured and 141 guns lost, and the order of the landings on the three islands varies inside the same account. The Russian side survives almost entirely as losses counted by the winner, with the garrisons reduced to regiment numbers, so the morale that decided the outcome is measurable only as prisoners taken. Soviet-era accounts of the Baltic Fleet also carry political weight, since the fleet’s revolutionary record mattered after 1917.',
          consequence: 'The operation’s place in the wider history of the war is that it was cheap, and therefore tempting. It appeared to show that an enemy with no will to fight could be knocked out by a joint operation at a cost of 200 dead, which strengthened the argument in Berlin for a decision by arms — in the east first, then in the west in 1918. Whether Albion ended the Eastern Front or merely coincided with its collapse cannot be settled from sources in which the collapse is described by the prisoners.',
        },
    },
  },
  {
    id: 'caporetto',
    date: '1917-10-24',
    precision: 'day',
    title: 'Caporetto: the Italian army ceases to exist as a fighting force',
    kind: 'offensive',
    fronts: ['italian'],
    countries: ['Italy', 'Austria-Hungary', 'Germany', 'United Kingdom', 'France', 'United States'],
    figures: ['cadorna', 'diaz', 'loyd_george'],
    note: 'The battle is dated 24 October to 19 November 1917. The Italian retreat covers about 150 km to the Piave; Italian effective strength is given as falling from about 1,800,000 to about 1,000,000 men, and the government of Paolo Boselli fell as a direct result. Luigi Cadorna was replaced as chief of staff by Armando Diaz on 8 November 1917. Italian losses are deliberately not stated on this card: the article’s casualty box carries two irreconcilable sets of figures — 70,000 casualties, credited to David Stevenson’s 2017 study, and 13,000 dead, 30,000 wounded and 265,000 to 275,000 captured — and the rows are not labelled clearly enough to say which army and which definition each belongs to, so the card uses only the reduction in effective strength, which is the least contested measure. The United States declared war on Austria-Hungary on 7 December 1917, about six weeks after the Caporetto offensive opened, partly because American planners expected to have to send troops to Italy; that declaration has its own card.',
    levels: {
      primary:
        {
          cause: 'Italy and Austria-Hungary had been fighting along the river Isonzo for two and a half years, in the mountains east of the town of Caporetto. The Italian commander, General Luigi Cadorna, had attacked many times at heavy cost, and his soldiers were tired and badly treated, with harsh punishments for offences.',
          what: 'On 24 October 1917 German troops came over the mountains in fog with gas. In small parties ' +
            'they went round the strong points into the Italian rear. The lines broke; divisions ' +
            'surrendered or went home. The retreat lasted nearly four weeks, about 150 kilometres.',
          consequence: 'Italy lost a third of its effective army and the government fell. British and French divisions were sent from the west, though they arrived too late for the fighting. A new general, Armando Diaz, replaced Cadorna, and the army that held the Piave was fed better, given leave and treated better than the army that broke.',
        },
      secondary:
        {
          cause: 'Cadorna had built an army of offence on coercion: decimation, battalions reduced for cowardice, and a belief that Italian soldiers needed pressure from behind. The Twelfth Army, holding the Isonzo valley at Caporetto, was under-strength, its trenches were unfinished, and its forward units were spread thin. Six German divisions and Austro-Hungarian mountain and storm troops were concentrated against a fifteen-kilometre front, with the artillery firing gas and a short, precise bombardment instead of a days-long one.',
          what: 'The attack opened at 02:00 on 24 October after a gas and high-explosive bombardment, and German assault battalions used infiltration tactics — bypass resistance, telephone the positions back to the artillery, keep moving — so that the Italian defensive system, which assumed a frontal attack to be stopped in the front line, was simply walked through. The Italian Second Army dissolved; the retreat across the Tagliamento in disorder, with bridging trains cut and hospitals abandoned, turned into panic. The army was finally held on the Grappa and the Piave in November with British and French help, and Cadorna was replaced by Diaz on 8 November.',
          consequence: 'The defeat changed how the war was fought on both sides. In Italy it produced a political and military settlement: British, French and Italian leaders met at Rapallo on 5–7 November, Lloyd George used the meeting to get approval for a Supreme War Council to run Allied strategy, six French and five British infantry divisions were sent to Italy, and Cadorna’s successor Diaz rebuilt the army with leave, better food, propaganda offices promising land and social justice, and a deliberately cautious strategy. In Germany the battle seemed to prove that infiltration and surprise could end trench war, which was the basis of the offensives of 1918 in the west. Austria-Hungary, which had won the battle, was left more dependent on Germany than ever.',
        },
      university:
        {
          cause: 'The argument is about why the Italian army broke, and it has gone on for ninety years. Cadorna’s own postwar defence blamed the soldiers and shifted the fault to “defeatism” in the rear; Italian left-wing historians from 1918 onwards blamed the officers, the treatment of conscripts from the south, and the failure to build defensive depth; later military historians put the weight on tactics, since Caporetto is where German infiltration tactics worked best of all.',
          what: 'The numbers are the main source problem. Italian casualties are variously given at about 300,000, of which about 265,000 were prisoners or men who simply went home, and the reduction of effective strength from about 1,800,000 to about 1,000,000 is the figure most accounts use; both rest on records kept by a government that had an interest in the size of the disaster. Austrian and German records are more detailed about their own assault troops than about the prisoners taken, and the German contribution — six divisions, and how far the victory was German rather than Austro-Hungarian — is still contested between German, Austrian and Italian accounts.',
          consequence: 'Caporetto sits in two debates. In Italian historiography it is the “civil war” question in wartime, the moment when a liberal state and its peasant conscripts came apart, and the reason national memory of 1918 is divided. In the history of tactics it is a data point in the argument about whether the German 1918 methods were a real revolutionary system or a temporary advantage that the Allies absorbed and copied — the same argument made about Cambrai, fought three weeks later, where the defenders used the same methods in reverse.',
        },
    },
  },
  {
    id: 'beersheba_jerusalem',
    date: '1917-10-31',
    precision: 'day',
    title: 'Allenby takes Beersheba, and then Jerusalem',
    kind: 'offensive',
    fronts: ['middle_east'],
    countries: ['United Kingdom', 'Ottoman Empire'],
    figures: ['djemal_pasha', 'lawrence', 'feisal'],
    note: 'Australian and New Zealand troops served in the Egyptian Expeditionary Force under British command. Ottoman and German sources give the same course in different order and a lower garrison than the British one. The same operation is numbered third, fourth or fifth in the battle of Gaza.',
    levels: {
      primary:
        {
          cause: 'For seven months the British army in Egypt had tried to push across the open ground between Gaza and the sea and had been stopped twice. Beersheba, some fifty miles to the east, was the water supply that made the Turkish position possible, and it was lightly held.',
          what: 'On 31 October 1917 Australian light horsemen rode across open country to the Turkish trenches east of Beersheba and took the town and its wells in a day. Two Turkish divisions were forced back to Gaza, and in early November the British broke through and took Gaza itself. Jerusalem, far to the north, fell a few weeks later, and General Allenby walked into the city on 11 December.',
          consequence: 'The Turks lost Palestine in six weeks, and the campaign cost them far more men in prisoners than in battle. British and French promises about what would be done with the land had already been made, and the war had brought Britain to Jerusalem as well as to Baghdad.',
        },
      secondary:
        {
          cause: 'Gaza, on the coast, had been fortified from the south as well as the west, so an attack from the seaward side hit prepared trenches over open waterless ground. Beersheba, inland, was the junction of the roads and the only reliable water for the Turkish garrison of Gaza, but it was held by about 4,400 rifles with a small garrison of artillery, because the Turks did not expect an attack across the seventy miles of desert from the Qattara area.',
          what: 'Allenby concentrated five infantry and four mounted divisions, about 47,500 riflemen and 15,000 troopers, and marched them north in secret in October, using the railway and a pipeline built across the desert. On 31 October infantry took the outer defences at sunset and the Australian 4th Light Horse Brigade then rode the remaining three miles, in one case with the bayonet used as a lance, and carried the redoubts and the town. The Turkish defence of Gaza lost its water and its line of retreat, and Gaza itself was found evacuated on the morning of 7 November, after the attacks on Hareira and Sheria the night before. Jerusalem fell on 9 December.',
          consequence: 'By the end of the fighting in December the British had lost about 18,000 men and the Ottomans about 25,000, and the Turks had lost most of their field strength in Palestine. The fall of the holy city gave the British government a much-needed success after Passchendaele and Caporetto; the political cost was that Britain, France and Russia had already promised each other a partition of the Ottoman lands in the Sykes-Picot agreement of 1916, while promising Sharif Husayn an independent Arab state and the Zionists a national home in Palestine through the Balfour Declaration of 2 November.',
        },
      university:
        {
          cause: 'Interpretation of the campaign turns on how much weight to give the mounted arm. The cavalry charge at Beersheba became the centrepiece of Australian memory, the last famous charge in British military history. Operational historians stress that infantry took the outer defences, and that the decisive factor was the water, the pipeline and the railway, without which an army of that size could not have existed so far from Egypt at all.',
          what: 'Casualty figures vary widely because Ottoman unit records for Palestine are largely lost, so British accounts estimate from prisoners taken, and Turkish and German accounts report their own losses and give lower figures for the garrison and higher ones for British casualties. The naming of the battles is itself contested: the same operation is numbered as the third, fourth or fifth battle of Gaza depending on whether Beersheba is treated as a separate battle or as the opening of a siege, and the capture of Jerusalem is variously dated 9 December, when the Turkish garrison withdrew, or 11 December, when Allenby entered the city.',
          consequence: 'The campaign sits at the centre of two historiographies. For Australia and New Zealand it is the founding moment of national military memory outside Europe, and the subject of a large popular literature that relies almost entirely on British and Australian sources. For historians of the Middle East the central question is political rather than military: how the capture of a city promised in three inconsistent wartime commitments — to an Arab sharif, to Zionism and to France — shaped the mandate that Britain received in 1920.',
        },
    },
  },
  {
    id: 'october_revolution',
    date: '1917-11-07',
    precision: 'day',
    title: 'The Bolsheviks take power in Petrograd',
    kind: 'revolution',
    fronts: ['eastern', 'politics'],
    countries: ['Russia'],
    figures: ['lenin', 'trotsky', 'kerensky'],
    note: 'The seizure happened on 25–26 October by the Russian calendar then in use, and 7–8 November by ours. Russian sources before 1918, and most Soviet writing after it, give the October dates. Soviet accounts later exaggerated how much fighting there was and how organised the rising was.',
    levels: {
      primary:
        {
          cause: 'Eight months after the tsar fell, Russia had a weak provisional government, a war nobody wanted to fight, and landless peasants taking landlords’ fields by themselves. In September the Bolsheviks won majorities in the soviets, the elected councils of workers and soldiers, and their leader Lenin urged them to seize power at once.',
          what: 'In Petrograd on 6 and 7 November the Bolsheviks took the bridges, telephones, banks and ' +
            'railways with almost no fighting. The provisional government, alone in the Winter Palace, ' +
            'fell. A congress of soviets approved the takeover and promised peace and land.',
          consequence: 'Russia was now ruled by a government that claimed to answer to the soviets and promised to end the war. It agreed to a truce with Germany in December, gave up vast territory in March 1918, and set about building a state that rested on one party. The other socialist parties, and many workers and peasants, at first accepted it; a long civil war followed.',
        },
      secondary:
        {
          cause: 'The provisional government had kept Russia in the war, had postponed elections for a constituent assembly, and had postponed land reform, while the economy and the army broke down. The Bolsheviks had been small and driven underground in July, but by September they had majorities in the Petrograd and Moscow soviets because they were the only party openly against the war, and their message — peace, land, and “all power to the soviets” — now fitted what soldiers and workers wanted. Kerensky’s attempt to secure the capital by sending troops and closing Bolshevik newspapers on 6 November gave the party the alarm it needed to act.',
          what: 'The actual takeover was carried out in two days by the Military Revolutionary Committee of the Petrograd soviet, chaired by Trotsky, using garrison units, sailors of the Kronstadt fleet and Red Guards, and it was almost bloodless: the streets were held by night and at 9:45 p.m. on 7 November the cruiser Aurora fired a blank shot from the harbour, the palace was entered after 10 p.m., and it was in Bolshevik hands by the early hours of 8 November. The Second Congress of Soviets, meeting in the Smolny institute, elected a Council of People’s Commissars with Lenin as chairman, and its first two decrees offered a democratic peace without annexations to all the belligerents and confiscated the estates of the landowners and the crown. Kerensky’s attempt to retake the city with Cossacks under General Krasnov failed at Pulkovo heights on 8 November.',
          consequence: 'The Bolsheviks held power in the capital but were a minority in the country: in the elections for the constituent assembly held on 25 November the Bolsheviks won only 175 of 715 seats, and they dissolved the assembly by force after a single meeting in January 1918. Peace talks with Germany opened at Brest-Litovsk in December and the Bolsheviks were able to trade space for time; in Britain and France the seizure, together with the publication of the secret treaties, made revolution a central fear of Allied politics for the rest of the war, and the fear of a separate Russian peace was one reason the western allies pressed harder on their own armies in 1918.',
        },
      university:
        {
          cause: 'The historiography is organised around whether October 1917 was a coup or a revolution. Soviet orthodoxy presented a rising of workers, soldiers and peasants led by a disciplined party; liberal historians from the 1920s presented a coup by a small party that took advantage of a collapsed state; from the 1960s social historians, especially in the West, recovered how much agency workers, soldiers and peasants had, and how much the Bolsheviks were carried along by them rather than leading them. Alexander Rabinowitch’s study of Petrograd, the standard English account, argued that in 1917 the Bolshevik party, the soviets and the garrison had become almost the same body.',
          what: 'The sources are heavily contaminated: the record was rewritten by the participants, first by Trotsky’s history of the revolution written in 1930, in which he wrote himself into a central role and minimised others, and then by Soviet official history after 1938, which fixed the story of a planned insurrection directed by Lenin and the party centre. Archives opened in 1991 made it possible to read the party’s own records, and showed a central committee that was divided, a Lenin under pressure to act, and plans that changed; the number of dead in Petrograd in October was tiny, which makes the official account of an armed assault implausible.',
          consequence: 'The event has been argued about for a century because it decided the shape of the twentieth century. Revisionist historians of the 1990s stressed contingency — that October succeeded because the provisional government had no will to defend itself — while a newer school places the revolution in the history of empire, civil war and political violence, treating 1917 as the opening of a crisis that ran to 1921 rather than an event of two days. What happened in Petrograd in November 1917 was reported to the world within days and became the model that revolutionary movements elsewhere tried to copy or prevent.',
        },
    },
  },
  {
    id: 'cambrai',
    date: '1917-11-20',
    precision: 'day',
    title: 'Tanks break through at Cambrai',
    kind: 'battle',
    fronts: ['western'],
    countries: ['United Kingdom', 'Germany'],
    figures: ['haig', 'luddendorff'],
    note: 'British losses are given as 44,207 or 47,596 according to whether men who were missing and later returned are counted. The number of tanks engaged is usually given as 476, of which about 378 were fit for battle.',
    levels: {
      primary:
        {
          cause: 'The tanks first used on the Somme in September 1916 had been slow and few, and had broken down often. By late 1917 the British had hundreds of them, and the ground at Cambrai in northern France was flat, dry and unbroken by shell holes, so the tanks could cross it.',
          what: 'On 20 November 1917 about 476 British tanks attacked at Cambrai. They crossed German ' +
            'trenches and crushed the wire. In six hours the British gained more ground than in three ' +
            'years. On 30 November the Germans counter-attacked and won much of it back.',
          consequence: 'Cambrai showed that a surprise attack supported by many tanks could break a fortified trench system without a months-long bombardment, and it also showed that the breakthrough could not be exploited without mobile cavalry. Tanks had to wait for the next step: the combined attack of tanks, aircraft, artillery and infantry that the Allies made in 1918.',
        },
      secondary:
        {
          cause: 'Field Marshal Haig wanted an attack at Cambrai to help the negotiations over a unified Allied command and to test a method that could be repeated cheaply in 1918; the plan was the work of the Tank Corps, especially its chief of staff, and was originally meant as a limited demonstration. The British massed about 378 tanks fit for action out of 476 engaged, over 1,000 guns and a large quantity of howitzers for a counter-battery shoot against German guns, and kept it secret by training crews at night and moving the tanks up the few miles from the assembly area under cover of dark. The German Sixth Army held the front with about 20 divisions, some of them worn, and its forward positions were thin, which the German defence doctrine of the time did not regard as dangerous.',
          what: 'At 6:20 a.m. on 20 November, after a predicted-fire bombardment and a smoke screen, the tanks crossed no-man’s-land in lines, straddling trenches so that infantry could drop in behind them; the advance of five and a half miles on a front of six miles was the greatest gain of ground anywhere on the western front to that date. The plan failed at Bourlon wood on the northern flank, where no fresh troops were available, and the cavalry that poured through the gap arrived too late, while the Germans rushed in reserves from elsewhere on the front. On 30 November the Germans counter-attacked with storm troops and a short, intensive bombardment — the same methods as at Caporetto — and by 3 December had recovered most of the ground. British losses in the battle were about 44,000 men, of whom some 6,000 were captured; German losses were about 55,000.',
          consequence: 'Cambrai, together with Caporetto a month earlier, is usually taken as the end of the trench deadlock and the beginning of a mobile war. Both sides drew the same conclusion, that surprise, short bombardments, infiltration and combined arms worked, and both planned offensives for 1918 on that basis, with the Germans betting on breaking the western front before American manpower arrived, and the French and British with a much larger tank programme. The German success in retaking the ground also fed the belief in the German army that the British army was nearly beaten.',
        },
      university:
        {
          cause: 'Cambrai is a case study in the controversy about “the learning curve” — whether the British army in the First World War developed a modern system of combined-arms warfare, or whether its generals were stuck in a cul-de-sac of attrition. Writers on tanks, from J. F. C. Fuller onwards, presented Cambrai as proof that armour alone was decisive and that the failure to push on was a failure of imagination by Haig and the cavalry. Revisionist military historians, especially William Field, have argued that Cambrai was an infantry and artillery battle in which tanks were one useful means among several, and that the reason it stopped was ordinary: distances, communications and German reserves, not the conservatism of horsemen.',
          what: 'The records are complicated by the fate of the Tank Corps itself, whose history was written by its own veterans within a few years and in a polemic against the high command, and by the loss of many unit diaries. Casualty totals vary because the British official history counts missing men as killed, and because German Sixth Army returns give a range from 43,000 to 54,720; the strength of the tank force is variously given as 476, 462 or 580 machines according to whether workshops vehicles, spares and wireless sets are included, and accounts differ on how many actually crossed the start line.',
          consequence: 'Cambrai sits in two debates at once. In one, it is evidence for the argument that the war was resolved in 1918 by a tactical revolution, and the same battle is cited in British, French and German accounts of that revolution with different emphasis. In the other, it is an episode in the interwar argument about the tank — a machine whose future was settled by writers in the 1920s and 1930s, especially Fuller and Liddell Hart, whose accounts of Cambrai and of 1918 generally were influential, self-serving, and have since been much criticised by historians.',
        },
    },
  },
  {
    id: 'finland_declares_independence',
    date: '1917-12-06',
    precision: 'day',
    title: 'Finland declares itself independent',
    kind: 'politics',
    fronts: ['eastern', 'politics'],
    countries: ['Finland', 'Russia', 'Germany'],
    note: 'Finnish and Russian sources of 1917 use different calendars, and sovereignty was proclaimed more than once — the Power Act of July 1917, the assumption of the tsar’s powers on 15 November, the declaration of independence of 6 December — so Finnish, Russian and western histories date the same weeks differently. Dates here are new style.',
    levels: {
      primary:
        {
          cause: 'Finland had been a grand duchy of the Russian empire since 1809, with its own parliament, laws and language, and many Finns had accepted Russian rule because it protected those things. When the tsar fell in March 1917 the question opened up: how much power would Finland take for itself, and would Russia allow it at all?',
          what: 'The Finnish parliament passed a law to control its own affairs. Petrograd refused it and ' +
            'dissolved the parliament. New elections returned a right-wing government. On 4 December P. ' +
            'E. Svinhufvud read a declaration of independence; parliament adopted it on 6 December 1917.',
          consequence: 'Recognition came first from Soviet Russia and then from the other powers, but independence had to be fought for: in January 1918 a civil war broke out between the white government’s troops and the red guards, and German troops landed to help the whites. The war left Finland independent but deeply divided, and tied to Germany until Germany itself collapsed in November 1918.',
        },
      secondary:
        {
          cause: 'The February revolution removed the tsar and with him the legal basis on which Finland’s autonomy rested, and Petrograd’s response was to try to limit Finnish self-rule, which pushed the Finnish right towards independence. Finland’s politics in 1917 were polarised between a right that feared both Russian Bolshevism and the local red guards, and a left that wanted social reform and had taken to the streets and the soviets; the right won the October elections. The October revolution changed everything again: Petrograd was no longer a government that Finns of either camp wanted to obey, and the Finnish senate sought recognition abroad, receiving it from Soviet Russia on 31 December.',
          what: 'Parliament had declared Finland sovereign in July 1917 with the Power Act, which the provisional government refused to confirm, and in August dissolved itself and called new elections. The parliament had tried to create a three-man regency, which the socialists blocked, and on 15 November it took to itself the sovereign powers that had belonged to the tsar. Svinhufvud’s senate drafted the declaration, read it to parliament on 4 December and had it adopted on 6 December; Soviet Russia issued a decree recognising Finnish independence on 31 December. German influence was decisive in the months that followed: a German Baltic Sea Division, 10,000 strong, landed in early April 1918 and took Helsinki and Lahti, and the whites had won the civil war by early May. There was even a plan to make Finland a monarchy under a German prince, which collapsed with Germany’s own defeat in November 1918.',
          consequence: 'Finland’s independence settled the Baltic side of the front in the north. The Finnish example was one more sign that the Russian empire was dissolving into separate states, and the civil war left a division between reds and whites that shaped Finnish politics for twenty years: about 38,000 people died in it, and some 12,500 red prisoners died of hunger and disease in the camps. The Finno-Russian Treaty of Tartu, signed on 14 October 1920, was meant to settle the frontier that the Soviet Union tried to reopen in 1939.',
        },
      university:
        {
          cause: 'The debate is about whether Finnish independence was made in Helsinki or in Petrograd and Berlin. Finnish national historiography has told it as the achievement of a people and its political elite, with the declaration of 6 December as the founding act. Other work, including Finnish scholarship since the 1990s, places it inside the history of the Russian empire’s collapse and of German expansion eastwards, arguing that independence was possible only because Russia was disintegrating and was secured only by German arms — a case that also explains why Finland’s left and much of its intelligentsia fought for the reds in 1918.',
          what: 'The dates themselves are contested, because sovereignty was declared several times: the Power Act of July 1917, the assumption of supreme power in November 1917 after the October revolution, the declaration of independence of 6 December, and Soviet recognition at the end of December, with other states following in January 1918. Finnish and Russian sources also use different calendars for the same weeks. The civil war that followed made the record partisan on both sides: white accounts suppressed red violence and red accounts suppressed white terror, and many records of the camps and the trials were lost or destroyed.',
          consequence: 'Independence in 1917 and civil war in 1918 are one problem, not two, and Finnish historiography has only recently treated them together; the civil war was for decades remembered as a war of liberation from Russia and the reds as traitors, a version that began to be revised only in the 1960s. In the wider history of 1917, Finland is the first and clearest case of the national breakups that turned the war in the east into a struggle over the succession to the empire, and the first place where the western powers had to decide whether to recognise a new state against the wishes of the government they wanted to keep fighting Germany.',
        },
    },
  },
  {
    id: 'armistice_russia_central_powers',
    date: '1917-12-15',
    precision: 'day',
    title: 'Russia stops fighting: the armistice of Brest-Litovsk',
    kind: 'armistice',
    fronts: ['eastern', 'politics'],
    countries: ['Russia', 'Germany', 'Austria-Hungary', 'Ottoman Empire', 'Bulgaria'],
    figures: ['lenin', 'trotsky', 'kerensky'],
    note: 'Russia still used the old calendar, so the convention signed on 15 December new style is dated 2 December in Russian documents; the dates here are new style. The ceasefire took effect on 17 December, and the term was thirty days, renewable. Soviet writing disputed whether an armistice with the western allies had been agreed at all.',
    levels: {
      primary:
        {
          cause: 'The new Bolshevik government in Petrograd had come to power promising to end the war, and in early December it asked all the armies fighting on the eastern front to stop. The western allies refused to join the talks; Germany and its partners accepted.',
          what: 'A thirty-day truce on the eastern front was signed at the fortress of Brest-Litovsk on 15 December 1917 and came into force two days later along the whole front from the Baltic to the Black Sea. Soldiers on both sides, who had been dying in trenches for three and a half years, met each other, exchanged cigarettes and food, and in many places simply stopped firing. Peace talks began there a week later, with delegations from the four empires on one side and Soviet Russia on the other.',
          consequence: 'The fighting in the east ended, and Germany was able to move dozens of divisions to the west for the spring of 1918. The peace that Russia was forced to sign in March 1918 took away Poland, the Baltic lands, Ukraine, Finland and the Caucasus frontier, and Russia withdrew from the war as a defeated power.',
        },
      secondary:
        {
          cause: 'The Bolsheviks needed peace to survive: the army was disintegrating, hundreds of thousands of soldiers were deserting, the front was held only by units that no longer obeyed their officers, and the government’s authority rested on the promise of peace and land. Germany accepted a truce because it wanted grain, food and raw materials from Ukraine and Russia and needed the eastern front quiet before the Americans arrived in France, and because the German high command hoped a Russian collapse could be turned into a peace of annexation.',
          what: 'The armistice convention, signed at Brest-Litovsk on 15 December, ran for thirty days, renewable, and gave each side the right to move troops in its own rear areas — a clause the Germans used at once to bring divisions west. Talks opened there on 22 December, with the Soviet delegation initially led by Adolf Joffe and, from late December, by Trotsky; the Central Powers’ side was organised by General Max Hoffmann, chief of staff of their forces on the eastern front, with the German politician Richard von Kühlmann among its leading figures. The Russian offer of a peace without annexations or indemnities, made to the whole world, was rejected by Berlin, and in February the delegation walked out, hoping to delay until a revolution broke out in Germany; on 18 February the German offensive resumed.',
          consequence: 'The truce bought the Bolsheviks the breathing space they had asked for, at the cost of a German-dominated peace. The treaty signed on 3 March 1918 took from Russia 34 per cent of its population, 54 per cent of its industrial land, 89 per cent of its coalfields and 26 per cent of its railways; more than a million German soldiers then lay idle from Poland almost to the Caspian Sea, and the grain and coal that Germany had counted on from Ukraine did not arrive. For the western allies the armistice was a shock and a grievance, and a reason to distrust Moscow for the rest of the war and beyond; for the soldiers on the eastern front it was the end of the war, three and a half years before the rest of Europe.',
        },
      university:
        {
          cause: 'Historians disagree about who was responsible for the peace. Soviet writing presented the armistice as the first act of a peaceful foreign policy and the treaty that followed as the imperialist theft of a revolution; Western writing from the 1920s treated it as a separate peace made possible by Bolshevik recklessness and German pressure, and as the reason Germany could mount the spring offensives of 1918. Since the 1990s Russian archives have shown a Bolshevik leadership deeply divided, with Bukharin and the left communists favouring a revolutionary war they could not fight, and with Lenin isolated in insisting on peace at almost any price.',
          what: 'The dating is a source problem in itself, because Russia did not change calendar until February 1918, so a treaty signed on 3 March new style is dated 18 February old style in many documents, and the armistice appears as 2 December in Russian documents and 15 December in western ones. The number of troops transferred to the west in 1918 is disputed between German staff records and later estimates, and the population and resources ceded at Brest are computed on the 1897 census, which had been overtaken by the war.',
          consequence: 'The Brest-Litovsk episode is central to two literatures. In the history of the revolution it is the argument over whether the Bolsheviks could have held power without withdrawing from the war. In the history of the war itself, the eastern armistice is the pivot of the whole year of 1918, since the troops released from the east made the German spring offensives possible and the food that Germany failed to extract from the east helped determine whether the home front could hold out; the treaty’s borders were also the borders that the postwar settlement in eastern Europe tried to undo.',
        },
    },
  },
  {
    id: 'passchendaele_taken',
    date: '1917-11-06',
    precision: 'day',
    title: 'Passchendaele is taken and Third Ypres ends',
    kind: 'battle',
    fronts: ['western'],
    countries: ['United Kingdom', 'Germany', 'France', 'Belgium', 'India'],
    figures: ['haig', 'luddendorff'],
    note: 'The end of the campaign is dated two ways in the same sources: the last substantial attack was made on 10 November, and the offensive is often described as having been called off on 20 November, by which day the Battle of Cambrai had begun. Losses for the fighting on the ridge are given separately from the campaign totals on the 31 July card: the Canadian Corps lost 15,654 men from 26 October to 10 November, and British formations engaged with it rather more again, while the German figures for the same fortnight, 20,500 for 21 to 31 October and 9,500 for 1 to 10 November, come from the German official history and are hospital admissions rather than a head count, so they cannot be added to British returns. Passchendaele lies on the last ridge east of Ypres, about five miles from Roulers (Roeselare), a railway junction on the main supply route of the German Fourth Army.',
    levels: {
      primary:
        {
          cause: 'The British army had been attacking above the Belgian city of Ypres since July, to take the high ground east of it and reach the Belgian coast. By October the divisions in the line were worn out, the rain had flooded the fields again, and the commander in Flanders asked for the Canadian Corps, which was rested, to finish the job.',
          what: 'Canadian troops attacked on 26 and 30 October, and again on 6 November 1917. That day they ' +
            'took Passchendaele, on the ridge above the marshes around Ypres. After a short, heavy ' +
            'bombardment, infantry went forward in small groups through water-filled shell craters.',
          consequence: 'The ridge had been taken, and the offensive was then called off. The Italian army had broken at Caporetto two weeks earlier, and divisions were needed in Italy and for a new attack at Cambrai, so there were no troops left to attack with. All of this ground was lost again when the Germans attacked in April 1918.',
        },
      secondary:
        {
          cause: 'The Passchendaele ridge commanded the flooded ground of Flanders and threatened the railway junction at Roulers, five miles to the east, which supplied the German Fourth Army. By late October the Anzac and British corps in the line had spent themselves in the fighting of September and early October, so General Currie’s Canadian Corps was brought back from the Arras front: it was the only formation in Flanders with rested, trained infantry and communications that still worked in mud.',
          what: 'The Canadians attacked on a narrow front on 26 and 30 October, taking the spurs south of the summit, and on 6 November took the village and the ridge itself, with the final objectives cleared on 10 November. The attack was carefully prepared: guns were registered by sound ranging and aerial photography rather than by trying them out in front of the enemy, infantry practised crossing the ground they would have to cross, and the bombardment was heavy but short, so that the element of surprise was partly kept. The Canadian Corps lost 15,654 men in the fortnight of the fighting, and the British formations engaged alongside it lost a good deal more. The advance stopped just short of the Westrozebeke position, the next German line to the east.',
          consequence: 'Third Ypres was over, and the reason was manpower rather than weather. Five British divisions were sent to Italy after Caporetto and four were held back for Byng’s attack at Cambrai on 20 November, which left nothing for a continuation. Wynne, writing in 1948 in the British official history of the campaign, judged that the first German defensive zone had been taken, that the second and third had not, that the coast had never been seriously threatened, and that the campaign had nevertheless forced the German army to fight and be worn down in Flanders where the attacker chose the ground. The ground won at such cost was overrun by the Germans on 10 April 1918.',
        },
      university:
        {
          cause: 'What Passchendaele means depends on what Third Ypres is taken to have been for. One reading treats it as a breakthrough attempt that failed in the mud; another, following the British official history and Wynne, treats it as attrition, in which the ridge was worth little but the compulsion on the German army to feed divisions into Flanders was worth a great deal. The German record was rewritten before it was published: the postwar German official history explained the losses by the failure of General von Loßberg’s defensive methods, which left the Third Supreme Command unblamed, although that command had itself imposed a new defensive scheme on 7 October, during the fighting.',
          what: 'This phase is better documented than most of the campaign, because the Canadian Corps kept detailed records and because Der Weltkrieg worked from divisional war diaries. Its returns are also the least comparable: Canadian and British losses are daily head counts, while the German figures of 20,500 for 21 to 31 October and 9,500 for 1 to 10 November are admissions to medical facilities on a cycle of roughly ten days. The end of the campaign is variously dated to the last substantial attack on 10 November or to a decision taken on 20 November after the British attack at Cambrai began, and both appear in the accounts of the same battle.',
          consequence: 'The argument is now mostly arithmetic and the argument about what the arithmetic means. Prior and Wilson, writing in 1997, put British and German losses for the campaign at about 275,000 and 200,000, reviving the case that the attacker lost more than a British army could afford; other writers, with Sheldon, hold that relative casualties are the wrong measure, since the German army had fewer men and could not replace them at all. Lloyd George’s verdict in his 1938 memoirs, that the campaign was one of the greatest disasters of the war, settled the popular judgement, and much recent British scholarship is written against that verdict rather than against the German account of the fighting.',
        },
    },
  },
  {
    id: 'us_declares_war_austria_hungary',
    date: '1917-12-07',
    precision: 'day',
    title: 'The United States declares war on Austria-Hungary',
    kind: 'diplomacy',
    fronts: ['politics', 'naval'],
    countries: ['United States', 'Austria-Hungary', 'Germany', 'United Kingdom'],
    figures: ['wilson_us'],
    note: 'The grounds given in the resolution read oddly against the usual account of the diplomacy: they rest on Austria-Hungary having abrogated its obligations by a unilateral act, on its submarine warfare, and on its alliance with Germany, and most narratives put the sequence the other way round, with Vienna severing diplomatic relations with Washington after the American break with Berlin in February 1917. The vote is not disputed: 74 to 0 in the Senate and 365 to 1 in the House, Meyer London of New York alone voting against. Wilson had drafted a message recommending war on Austria-Hungary, the Ottoman Empire and Bulgaria alike, and dropped the last two after consultation, so the United States never declared war on either of them.',
    levels: {
      primary:
        {
          cause: 'The United States had been at war with Germany since April 1917, but not with Germany’s allies. Austria-Hungary was Germany’s partner, had broken off relations with the American government, and had let its submarines attack merchant ships, which America had said was a reason to fight.',
          what: 'On 7 December 1917 Congress declared that a state of war existed between the United States and Austria-Hungary. The Senate voted 74 to 0 and the House 365 to 1. The one member of the House who voted against was Meyer London, a Socialist elected in New York.',
          consequence: 'America was now at war with two of the four central powers, but only in name. It raised no army to fight Austria-Hungary, and it never declared war on Bulgaria or the Ottoman Empire, though Wilson had drafted a message covering them as well. The declaration gave the United States a claim to a place at the peace conference.',
        },
      secondary:
        {
          cause: 'Washington had gone to war against Germany in April 1917 after Germany resumed unrestricted submarine warfare, and had deliberately left Germany’s partners alone, on the argument that the quarrel was with a German policy and not with the German people. By December that position was hard to hold: Austria-Hungary had severed diplomatic relations with the United States, its submarines had been at work in the Mediterranean, it had answered no American attempt to discover its war aims, and it had bound itself still closer to Berlin. Henry Cabot Lodge and Theodore Roosevelt had argued all year for war on every one of Germany’s allies, so that none of them could be negotiated out of the war separately.',
          what: 'Wilson asked Congress for the declaration in a message sent in the first days of December 1917, and the joint resolution was passed on 7 December, declaring that a state of war existed between the government and people of the United States and the government and people of Austria-Hungary from the date of the resolution. The grounds were the severing of relations, submarine warfare against merchant shipping, and the alliance with Germany. The votes were 74 to 0 and 365 to 1, with Meyer London, a Socialist from New York, the single dissentient; Wilson’s stated object was a settlement in which no people would be left subject to a government they had not chosen.',
          consequence: 'The declaration mattered more for the peace than for the fighting. No American army was raised against Austria-Hungary, and American troops reached the Italian front only in small numbers and late, though American planners expected after Caporetto that they might have to send a force to Italy, and that expectation is one reason the message came when it did. Because the United States never declared war on Bulgaria or the Ottoman Empire, its government entered 1918 at war with two of the four enemy powers and at peace with the other two, which left its diplomats freer to act in south-eastern Europe than is often assumed, and left the postwar settlement there uneven as a result.',
        },
      university:
        {
          cause: 'The declaration is best read as part of Wilson’s attempt to control the peace rather than as a military decision. Belligerency was the price of a seat at a conference, and Wilson had already tried to keep the war narrow by inviting the Dual Monarchy to state its aims, an invitation Vienna could not answer separately from Berlin. The drafting history is the best evidence of his intention: a message recommending war on Austria-Hungary, Bulgaria and the Ottoman Empire was composed, consulted upon, and then narrowed to Austria-Hungary alone, which is a choice of the minimum belligerency consistent with a voice at the table.',
          what: 'The congressional record is complete and shows how little argument there was, and how little of it was about the fighting: the debate was about the settlement. The sources have to be read against the grain, because Wilson’s messages were drafted for an audience of swing votes as much as for foreign governments, and because the decision to limit belligerency to Germany and Austria-Hungary was taken in consultation and never explained in public. The Habsburg side of the record survives thinly and unevenly, dispersed among German, Hungarian and Austrian archives, and the foreign office in Vienna was conducting a war it no longer controlled.',
          consequence: 'Historians use the declaration as evidence about Wilsonian diplomacy and about the disintegration of the Habsburg monarchy, not about American arms. The United States was at war with two of the central powers and formally at peace with the other two, an asymmetry that runs through the peace treaties of 1919 and 1920 and through the American Senate’s refusal to ratify any of them. For Austria-Hungary the declaration registered a fact: the monarchy had become a subsidiary of German power, and the arguments about its future were being conducted by Czech, Slovak and South Slav emigres, recognised by Britain and France in 1918, rather than by its own government.',
        },
    },
  },

  {
    id: 'reichstag_peace_resolution',
    date: '1917-07-19',
    precision: 'day',
    title: 'The Reichstag votes for peace without annexations',
    kind: 'politics',
    fronts: ['politics', 'home'],
    countries: ['Germany'],
    figures: ['bethmann_hollweg'],
    note: 'On 19 July 1917 the Reichstag passed a resolution calling for peace without annexations or indemnities, by 212 votes to 126, with the Catholic Centre and the SPD supporting it. It was a signal that the parliamentary majority no longer trusted the government’s war aims; Bethmann Hollweg, who had backed the resolution, lost the confidence of Ludendorff and was dismissed in July. The resolution did not end the war, and the Treaty of Brest-Litovsk in 1918 imposed exactly the kind of eastern settlement it had rejected.',
    levels: {
      primary: {
        cause: 'After three years of war, many Germans wanted peace and did not want to go on fighting for more land.',
        what: 'The German parliament voted in July 1917 for a peace with no land grabs and no payments.',
        consequence: 'The generals no longer trusted the government, and the chancellor was forced out soon after.',
      },
      secondary: {
        cause: 'The U-boat campaign had failed to knock Britain out, the United States had entered the war, and food shortages at home were worsening.',
        what: 'The Reichstag passed the peace resolution, but the army leadership treated it as a statement that the government had lost its nerve.',
        consequence: 'Bethmann Hollweg was replaced by Michaelis, a chancellor who did little more than carry out Ludendorff’s instructions; the gap between parliamentary opinion and military power widened.',
      },
      university: {
        cause: 'The resolution is the best single measure of the collapse of the Bundestag majority’s wartime consensus: the parties that had voted war credits in 1914 now set conditions for continuing.',
        what: 'Its wording was deliberately vague about borders, and different parties read different things into it; the army treated the vote as evidence that civilians could not be trusted with strategy.',
        consequence: 'The episode is central to the argument about Germany’s "silent dictatorship": the vote showed that parliament existed, and the dismissal of the chancellor showed where power lay.',
      },
    },
  },
  {
    id: 'corfu_declaration',
    date: '1917-07-20',
    precision: 'day',
    title: 'The Corfu Declaration plans a South Slav state',
    kind: 'politics',
    fronts: ['politics', 'balkans'],
    countries: ['Serbia'],
    note: 'On 20 July 1917 the Serbian government in exile and the Yugoslav Committee, a group of South Slav politicians from Austria-Hungary, signed the Corfu Declaration. It agreed to work for a single state of Serbs, Croats and Slovenes after the war, with a constituent assembly to decide its constitution. The declaration was a political programme, not a state: the Kingdom of Serbs, Croats and Slovenes was proclaimed in December 1918.',
    levels: {
      primary: {
        cause: 'South Slav peoples lived in several different empires, and their leaders wanted to be together after the war.',
        what: 'On the island of Corfu, Serbian ministers and South Slav exiles agreed in July 1917 to work for one state after the war.',
        consequence: 'The plan was the beginning of Yugoslavia, though the new country was only created in 1918.',
      },
      secondary: {
        cause: 'Serbia’s government and army had been driven into exile in 1915, while South Slav politicians from Austria-Hungary wanted to break with Vienna.',
        what: 'The declaration set out a common aim, a future constituent assembly and a temporary arrangement under the Serbian dynasty, leaving the form of government undecided.',
        consequence: 'It gave the South Slav cause diplomatic weight with the Allies and became the basis for the union of December 1918; disagreements over centralisation versus federalism were built into the settlement.',
      },
      university: {
        cause: 'The declaration was a compromise made in exile between a victorious but weakened state and a committee without territory or an electorate.',
        what: 'Its vagueness about the future constitution was deliberate, but it stored up the argument between the Serbian centralists and the Croatian federalists that shaped Yugoslav politics until 1941.',
        consequence: 'The union of 1918 followed from the defeat of Austria-Hungary rather than from a plebiscite, which is why the new state’s legitimacy was contested from the start.',
      },
    },
  },
  {
    id: 'selective_service_act',
    date: '1917-05-18',
    precision: 'day',
    title: 'The United States introduces conscription',
    kind: 'politics',
    fronts: ['politics', 'home'],
    countries: ['United States'],
    note: 'The Selective Service Act of 18 May 1917 authorised the president to draft men into the army after the United States entered the war in April; local boards registered and exempted men under a system that was controversial but produced the force deployed in France in 1918. Conscription also became a rallying point for opponents of the war, who argued that a republic should not force citizens to fight overseas.',
    levels: {
      primary: {
        cause: 'The United States had entered the war but had only a small standing army.',
        what: 'In May 1917 Congress passed a law allowing the government to call up men for military service.',
        consequence: 'Millions of men were registered and hundreds of thousands were sent to France in 1918.',
      },
      secondary: {
        cause: 'Volunteering alone could not raise the army needed to send a substantial force to Europe quickly.',
        what: 'The act required male citizens to register, and local boards decided who would serve and who would be exempted on grounds such as occupation, health or conscience.',
        consequence: 'The draft produced the army that fought at Cantigny, the Marne and the Meuse-Argonne, and it gave the American expeditionary force a weight Germany could not ignore.',
      },
      university: {
        cause: 'The act settled a long American argument about whether a citizen army could be raised by compulsion in a war declared to defend liberty.',
        what: 'Local administration made the system acceptable to many communities but also produced unequal treatment, particularly of Black Americans and of men with fewer resources to claim exemptions.',
        consequence: 'The speed of American mobilisation changed the strategic balance in 1918; the political argument it created did not end with the war, and conscription returned only with the draft of 1940.',
      },
    },
  },


  {
    id: 'clemenceau_premiership',
    date: '1917-11-16',
    precision: 'day',
    title: 'Clemenceau returns to power in France',
    kind: 'politics',
    fronts: ['politics'],
    countries: ['France'],
    figures: ['clemenceau'],
    note: 'Georges Clemenceau became prime minister of France on 16 November 1917, after the Nivelle offensive, the French army mutinies and the loss of the government’s confidence. He had been out of office since 1909 and was seventy-six; his government lasted until the armistice and then led the French delegation at Paris. His authority rested on a refusal to negotiate a compromise peace with Germany.',
    levels: {
      primary: {
        cause: 'France had suffered a terrible year and its government had lost the confidence of the army and the public.',
        what: 'In November 1917 Georges Clemenceau, an old and forceful politician, became prime minister again.',
        consequence: 'He held France to the war until Germany was defeated and then led the French delegation at the peace talks.',
      },
      secondary: {
        cause: 'The failure of the Nivelle offensive in April and the mutinies that followed had discredited the government, while the army needed a political leader who would not press for premature attacks.',
        what: 'Clemenceau formed a government of experienced ministers, visited the front immediately, and gave the new commander Pétain room to restore the army before the next offensives.',
        consequence: 'His determination to fight on until victory shaped the peace settlement: France demanded security and reparations rather than a negotiated compromise.',
      },
      university: {
        cause: 'Clemenceau’s return is a case of political will mattering in a war of attrition: he did not change the material balance, but he made it impossible for France to seek a separate settlement.',
        what: 'His government survived scandals and parliamentary challenges, and he used the crisis of 1918, including the German spring offensives, to press for a unified Allied command.',
        consequence: 'His postwar reputation rests on the Treaty of Versailles, which he defended as the security France needed; the severity of its terms remains one of the central arguments about the peace.',
      },
    },
  },
  {
    id: 'pope_benedict_xv_peace_note',
    date: '1917-08-01',
    precision: 'month',
    title: 'Pope Benedict XV proposes a negotiated peace',
    kind: 'diplomacy',
    fronts: ['politics', 'italian'],
    countries: ['Italy'],
    note: 'On 1 August 1917 Pope Benedict XV addressed the belligerents with a peace note calling for a return to the pre-war frontiers, arbitration, freedom of the seas and a league of nations; it was published in mid-August. Germany and Austria-Hungary saw it as a basis for talks, but the Western powers rejected a settlement that would have left Germany in occupation of Belgian and French territory; the United States entered the war before it could be pursued.',
    levels: {
      primary: {
        cause: 'The Pope wanted the killing to stop and thought the countries could agree to return to their old borders.',
        what: 'In August 1917 he sent a peace proposal to the countries fighting, asking them to talk instead of continuing the war.',
        consequence: 'Both sides said they wanted peace, but neither accepted the terms, and the war went on.',
      },
      secondary: {
        cause: 'By 1917 neither coalition could win quickly, and neutrals and religious leaders pressed for a negotiated settlement.',
        what: 'The note proposed arbitration, the restoration of occupied territory and an international organisation to prevent future wars — ideas close to those later attached to the League of Nations.',
        consequence: 'The offer failed because it could not bridge the difference between a return to 1914 frontiers and the war aims each side now claimed; it nevertheless prepared the language of postwar internationalism.',
      },
      university: {
        cause: 'The note matters less as a diplomatic event than as evidence of how early a "league of nations" solution was on the table, before either the Fourteen Points or the League Covenant.',
        what: 'The Central Powers welcomed it as a way to keep occupied territory as a bargaining counter, while Britain and France regarded that as rewarding aggression — a disagreement no formula could resolve in 1917.',
        consequence: 'Historians of the peace movement treat the failed note as one of the missed opportunities of 1917; it is a useful corrective to accounts that begin the history of the League only with Wilson.',
      },
    },
  },
  {
    id: 'treaty_of_bucharest_1918',
    date: '1918-05-07',
    precision: 'day',
    title: 'Romania signs the Treaty of Bucharest',
    kind: 'diplomacy',
    fronts: ['politics', 'balkans'],
    countries: ['Romania', 'Germany', 'Austria-Hungary', 'Bulgaria', 'Ottoman Empire'],
    note: 'Romania signed a separate peace with the Central Powers at Bucharest on 7 May 1918 new style (24 April 1918 by the Julian calendar then used in Romania and Russia), after its army had been driven into Moldavia in 1916 and Russia had collapsed. The terms gave Germany control of Romanian oil and granted Austria-Hungary rights in the Carpathians; Transylvania remained with Austria-Hungary. Romania’s government returned to war in November 1918, days before the armistice, and the union of Transylvania with Romania followed at the end of the month.',
    levels: {
      primary: {
        cause: 'Romania had been defeated and its ally Russia had collapsed, so its government could not go on fighting.',
        what: 'Romania signed a separate peace with Germany and its allies in May 1918.',
        consequence: 'Germany took control of Romanian oil until the war ended, and Romania rejoined the Allies in November.',
      },
      secondary: {
        cause: 'The Romanian army still existed in Moldavia, but it could not hold out without Russian support, and the government wanted to preserve the state.',
        what: 'The treaty handed economic concessions to Germany and left the disputed frontier questions unsettled; it was signed under the pressure of occupation rather than as a free settlement.',
        consequence: 'The agreement freed German divisions for the Western Front and became the basis for the argument in Romania about whether the government had saved the country or surrendered it.',
      },
      university: {
        cause: 'Bucharest is one of several separate peaces imposed on eastern Europe in 1918, and it shows how the collapse of Russia decided the fate of states that had entered the war on the Allied side.',
        what: 'The treaty was never fully put into effect: the defeat of Germany in November allowed Romania to re-enter the war and to claim Transylvania in the union of 1 December.',
        consequence: 'Romanian historians still debate the responsibility of the government that signed it, and the argument is inseparable from the later question of whether the settlement of Transylvania was just.',
      },
    },
  },

];
