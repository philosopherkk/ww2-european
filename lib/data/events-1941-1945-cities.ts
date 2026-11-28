// Five city cards, added because the marching lines they sit on had no card pinned to them. Each
// is pinned to a waypoint the line already names, and each was gated before it was written: every
// quote re-fetched live, every figure, date and hour in the card text printed by two independent
// publishers (audit/famgate.cjs), and every figure only one of them prints moved into the note and
// the uncertainties list. A sixth, Königsberg, is held: the page its note rests on has not been
// seen to render in a browser here, so it has no bibliography row to point at.
import type { WW2Event } from './events-1938-1940';

export const EVENTS_CITIES_1941_1945: WW2Event[] = [
  {
    id: 'budapest_falls',
    date: '1945-02-13',
    precision: 'day',
    title: 'Budapest falls on 13 February 1945',
    kind: 'battle',
    fronts: ['eastern'],
    countries: ['Hungary', 'Germany', 'Soviet Union', 'Romania'],
    figures: ['hitler', 'horthy'],
    mapNote:
      'Hungary is still filled as Axis here two months after the siege ended: the frontier data changes only at its snapshots, and the next is not until April 1945. Nothing shows the siege ring or the crossings of the Danube. The pin rests on this line’s Budapest vertex, five kilometres from the printed coordinate.',
    note:
      'Figures and details printed by only one of the two accounts, and so kept out of the card body: the artillery salute with which Moscow celebrated the capture, and the Soviet communiqué announcing the end of the fighting two days after it had ended; Pfeffer-Wildenbruch’s decision to break out on his own initiative, informing his superiors only as he went; Wikipedia’s wording that the fortress was to be defended to the last man; the composition of the Hungarian half of the garrison as General Iván Hindy’s I Corps, gendarmerie and police units and Arrow Cross volunteers, and TheSecondWar.pl’s attribution of the 600 to 700 survivors, a figure both accounts print, to the Hungarian historian Krisztián Ungváry; the seven weeks counted from the closing of the ring, where both accounts give 51 days of fighting in the city from 24 December; and the assertion that the road to Vienna lay open. The claim that the civilians paid a heavier price than the garrison has been withdrawn rather than reworded: one account does say the population paid the highest price, but the casualty figures on file put the garrison’s dead at a comparable order, so the comparison is not printed. Not on this list: that civilians were added to the 110,000 is in both accounts, TheSecondWar.pl attaching Ungváry’s name to the claim and Wikipedia saying that thousands of Hungarians were rounded up and added to the prisoner-of-war count. Both accounts give 29 December 1944 as the date of the Soviet ultimatum and the deaths of two envoys, and both put the closing of the ring on 26 December and the end on 13 February.',
    levels: {
      primary: {
        cause:
          'Soviet armies closed a ring round Budapest on 26 December 1944, trapping a German and Hungarian garrison of roughly 79,000 men in a city of 800,000 people which had never been evacuated.',
        what:
          'The defence broke out from Castle Hill on the evening of 11 February 1945, and of the some 28,000 men who took part only 600 to 700 reached the German lines. Soviet troops took the last of the city on 13 February.',
        consequence:
          'The Soviets announced the capture of some 110,000 men. Budapest lay in ruins, more than 80 per cent of its buildings destroyed or damaged, and its bridges over the Danube, the Chain Bridge among them, had been destroyed.',
      },
      secondary: {
        cause:
          'Hitler refused to authorise a withdrawal, and the defence was given to the IX SS Mountain Corps under Karl Pfeffer-Wildenbruch. The Soviet encirclement was completed on 26 December 1944, sealing German and Hungarian troops inside a city whose civilian population of about 800,000 had not been evacuated. Of the roughly 79,000 men enclosed, some 38,000 were Hungarians.',
        what:
          'Three relief attacks, Operations Konrad I to III, were launched in January from between the Danube and Lake Balaton and came to within a few dozen kilometres of the ring without breaking it. The defenders were pushed back across the Danube as the Germans destroyed the bridges behind them, the Chain Bridge among them. On 11 February some 28,000 men broke out from Castle Hill and most of them were killed; only 600 to 700 reached the German lines. Soviet troops took the last pockets on 13 February.',
        consequence:
          'More than 80 per cent of the city’s buildings were destroyed or damaged. Some 38,000 of the 800,000 civilians trapped in the encirclement died, about 13,000 of them in the fighting and 25,000 from hunger, disease, cold and execution. The Soviet announcement of 110,000 prisoners took no account of who else was in the city.',
      },
      university: {
        cause:
          'The siege is the fullest test in these sources of Hitler’s refusal to let a garrison leave, and the two accounts show the same incoherence in it: a garrison forbidden to leave the city, while the relief attacks were thrown in from ground too weak to support them. The composition of the force enclosed made that worse, since of roughly 79,000 men some 38,000 were Hungarian troops, and the fighting in the city was therefore not only a German battle.',
        what:
          'The two accounts agree on the operational sequence and on the order of magnitude of the loss: the ring closed on 26 December 1944, three relief attacks followed in January, the breakout began on the evening of 11 February and organised resistance ended on the 13th; the garrison was about 79,000 men, and some 38,000 of the city’s 800,000 civilians died. They frame the beginning differently, one from the Soviet ultimatum of 29 December and one from the closing of the ring, and they count the length of the fighting from different starting points — which is a reminder that even a heavily documented siege has a contested first day.',
        consequence:
          'The cost of the fortress policy is visible in the two figures the accounts agree on: more than 80 per cent of the city’s buildings destroyed or damaged, and some 38,000 civilian dead, of whom roughly twice as many died of hunger, disease, cold and execution as of the fighting itself. A garrison forbidden to withdraw and a population not evacuated is the shape the losses took.',
      },
    },
  },
  {
    id: 'vienna_falls',
    date: '1945-04-13',
    precision: 'day',
    title: 'Vienna taken: the Danube bridges blown',
    kind: 'liberation',
    fronts: ['eastern'],
    countries: ['Austria', 'Soviet Union', 'Germany', 'Hungary'],
    figures: ['hitler', 'bittrich', 'stalin'],
    mapNote:
      'There is no Austrian polygon in April 1945: the city is drawn inside a Germany filled as Axis until the August snapshot, months after it was taken. The map cannot show which Danube crossings were blown. The pin rests on the line’s Vienna vertex.',
    note:
      'Printed by only one of the three accounts on file and kept out of the body: that the city had been bombarded for a year before the Soviet arrival; that Sepp Dietrich’s 6th SS Panzer Army withdrew to the Vienna area in stages after the failure at Lake Balaton; that a week of street fighting began on 6 April in the southern suburbs, and that the fall of Vienna decided the issue of the offensive in Austria; that radio had to deny the capital had been declared an open city; the burning of the roof and belfry of St Stephen’s on the night of 11 and 12 April, the fall of the Pummerin bell, and the attribution of the fire to looters rather than shells; the nullity of the Anschluss declared in the name of the Moscow Declaration; the withholding of recognition from the provisional government until 20 October 1945; the four occupation zones agreed in July 1945; Körner’s appointment as mayor; the Radetzky plot and the officers hanged at Floridsdorfer Spitz; the shooting of nine Jews in hiding on the Förstergasse on 12 April; and every loss figure, some 20,000 killed in the city and 5,000 in the Vienna Woods about a fifth of them civilians, some 37,000 German dead, about 5,000 soldiers’ graves counted by the city council in August 1945 and some 18,000 Soviet dead all in TheSecondWar.pl’s account, the 139,815 casualties of the 3rd Ukrainian Front from 16 March to 15 April in the Wikipedia article’s, and the highly uncertain estimate of 70,000 to 100,000 women raped. The seizure of the Reichsbrücke is not on this list: both accounts give its capture from the water by the Danube Flotilla with two Guards divisions, and the demolition charges cut before the bridge could be blown, the Wikipedia article calling them cables and TheSecondWar.pl wires. The fifteen armoured boats which forced the crossing are in TheSecondWar.pl only, and the landing on both sides of the bridge in the Wikipedia article only.',
    levels: {
      primary: {
        cause:
          'Vienna had been part of the Reich since the Anschluss, and the Soviet offensive which took Hungary in the spring was turned towards it. The 3rd Ukrainian Front came on through western Hungary.',
        what:
          'Soviet troops took Vienna on 13 April 1945 after several days of street-to-street fighting. The German defences were the remnants of Wilhelm Bittrich’s II SS Panzer Corps with ad hoc units, and the city commandant was Rudolf von Bünau.',
        consequence:
          'The capture of the city did not end the fighting, which is dated from 16 March to 15 April 1945. Vienna was left without water, electricity or gas, and there was much plundering and violence in the weeks that followed.',
      },
      secondary: {
        cause:
          'The offensive was launched on 16 March 1945 in western Hungary and pressed forward by the 3rd Ukrainian Front. Inside the city a group of Austrians around Major Carl Szokoll had planned to hand Vienna over without a fight; the plot was betrayed and the arrests began on 6 April. As they withdrew the Germans destroyed the crossings over the Danube one after another.',
        what:
          'Fighting went on house by house in the eastern and southern districts until the 13th. On 11 April the Soviet command decided to take the Danube bridge from the water: the Danube Flotilla forced its way across under fire and landed a party on the far bank, and on 13 April troops of the 80th Guards Rifle and 7th Guards Airborne Divisions cut the demolition charges and held the Reichsbrücke. Every other crossing over the Danube in the city had been blown.',
        consequence:
          'For weeks the city was without water, electricity or gas. Karl Renner formed a provisional government in Vienna in April, with the tacit approval of the Soviet authorities who had taken the city.',
      },
      university: {
        cause:
          'Vienna is the case in these sources where the political object of the battle is more visible than the military one. The city was defended by SS formations and by a garrison of ad hoc units while a group of Austrians inside the command was working to hand it over, which says something about how much the German claim on the place was worth to the people born in it. The government which took office in Vienna after the fighting did so with the consent of the army that had captured it: in this part of Europe the postwar order was made by whoever held the capital.',
        what:
          'What the two accounts here agree on is the part the Danube played. The defenders blew up the crossings behind them as they withdrew, one bridge after another, and the Red Army took the Reichsbrücke from the water in a coup de main, with the flotilla and two Guards divisions, because an army which was to push on west of the city had to have a bridge over the river. Sieges on this front were fought over water as much as over ground, and the one crossing which survived the fighting in Vienna survived because it was stormed rather than reached.',
        consequence:
          'Taken as a military operation the battle for Vienna is small; taken as politics it is among the more consequential captures of 1945, because the men who governed postwar Austria organised their parties and formed their government in a captured capital with the agreement of its captors. The fighting also left the city without water, electricity or gas for weeks, and exposed its population to plunder and assault in the weeks after the capture — an end to a war which the sources here record plainly without pretending it was a liberation in every sense.',
      },
    },
  },
  {
    id: 'belgrade_falls',
    date: '1944-10-20',
    precision: 'day',
    title: 'Belgrade liberated: Partisans and Red Army take the capital',
    kind: 'liberation',
    fronts: ['balkans'],
    countries: ['Yugoslavia', 'Soviet Union', 'Germany', 'Bulgaria'],
    figures: ['stalin', 'hitler'],
    mapNote:
      'In October 1944 this still shows a Serbian state filled as Axis from a snapshot six months earlier, and it is drawn that way again months after the city was taken. Nothing marks the bridges over the Sava or the line of the German withdrawal. The pin rests on the line’s Belgrade vertex.',
    note:
      'Nearly everything below is printed by only one of the two accounts and is kept out of the body. From the Belgrade history on Balkan War History: that the operation is dated 21 September to 22 October in one place and the fighting 14 to 20 October in another; that Hitler’s order of 3 October set the line to be held and that the movement of Army Group E stalled; that the Serbian government was dissolved and its administration taken over by the German commander in Serbia, and its troops sent by train and lorry to Kraljevo, there to be formed into a corps under Mihailović; that the defence was organised as Fortress Belgrade under General August Felber in two corps groups, one of them under General Willi Schneckenburger, who was killed on 13 October; that one German battle group counted over 20,000 men, 35 tanks and some 150 guns and mortars, and the Partisan force before the city rose from 32,000 on 5 October to about 40,000 by the 14th; that the surviving Germans withdrew at dawn on the 20th across the Sava bridge, which stood because a retired teacher who had handled mining in the Balkan Wars cut the wires; and the losses as 2,953 Partisans and some 960 Soviet soldiers, about 15,000 German dead with 9,000 prisoners, and more than 20,000 killed in the final phase. From the Wikipedia article: that a Soviet assault group stopped the Germans mining a bridge over the Great Morava; German strength of 150,000 against 580,000; Soviet losses of 4,350 killed and missing; and three Bulgarian armies in the order of battle. Both pages give the fighting as 14 to 20 October, the breakthrough south of the city on the 14th, the Soviet armoured corps and its commander, spelled Zhdanov in one account and Zdanov in the other, the Partisan 1st and 12th Corps, the Krajina, Vojvodina, Slavonia and Serbia divisions, and 2,953 Partisans killed.',
    levels: {
      primary: {
        cause:
          'Two German armies held the Balkans, Army Group E in the south and the Second Panzer Army in Yugoslavia, and both had to get clear as the Red Army came through Serbia. Belgrade lay across their road out.',
        what:
          'The Belgrade operation was fought from 14 to 20 October 1944, and on the last of those days Yugoslav Partisan and Soviet troops took the city. The assault was made by the Soviet 3rd Ukrainian Front together with the Partisans.',
        consequence: 'The German administration which had held the city was gone. What the Partisans made of the ' +
          'city belongs to Yugoslav history rather than to this battle.',
      },
      secondary: {
        cause:
          'The Soviet offensive through eastern Serbia was part of a plan made by the headquarters of the 3rd Ukrainian Front and the Partisans, and its object was to shut the road by which the German armies in the Balkans would have to withdraw. Belgrade lay across that road where it passed the rivers. The garrison was German, with Serbian collaborationist troops in it.',
        what:
          'The fighting for the city began on 14 October and ended on 20 October, when Partisan and Soviet troops entered it. Divisions named for Krajina, Slavonia, Serbia and Vojvodina were among the troops in the assault, and the commanders on file are the Soviet General Vladimir Zhdanov and the Yugoslav General Peko Dapčević.',
        consequence:
          'The German occupation of Serbia ended with the city. What the capture meant for the country is an argument which belongs to the politics of the postwar years rather than to this battle.',
      },
      university: {
        cause:
          'Belgrade is the rare capture in this war which was made by a country’s own partisans with a Soviet army at their side, and the arrangement is easier to describe than to weigh. A battle fought by two armies with two different political objects is bound to be dated and counted two ways afterwards, which is what happened here.',
        what:
          'The accounts differ in a way which shows what each of them is for. One is a narrative of the assault, with the units named, the days counted and the fighting in the streets followed hour by hour, so it records the river crossings, the fortress troops and the German dead. The other is an operational summary in which the Belgrade operation is one move in a much larger offensive, and its totals come from the armies that planned it. So the two can agree on the dates and differ about the strength of the garrison, the size of the Partisan force and the losses: they are counting different things, one men killed in a city, the other the outcome of a front-level operation.',
        consequence:
          'The campaign result of Belgrade was smaller than its political result. The German armies in the Balkans fought their way north, so the loss of the city did not destroy a hostile army, and the front stabilised in the north of Serbia. What the capture did was to put the Partisan movement in possession of the machinery of a state — buildings, records, a railway junction, a name — while the war was still being fought elsewhere, which is why the postwar settlement of Yugoslavia is usually dated from Belgrade rather than from a conference room in 1945.',
      },
    },
  },
  {
    id: 'le_havre_captured',
    date: '1944-09-12',
    precision: 'day',
    title: 'Le Havre taken: a fortress and a harbour destroyed',
    kind: 'battle',
    fronts: ['western'],
    countries: ['France', 'Germany', 'United Kingdom', 'Canada'],
    figures: ['hitler'],
    mapNote:
      'The frontier data fills all of France as German-occupied in September 1944 and does not follow the liberation month by month. Nothing here can show the fortress perimeter or the harbour demolition, so a port taken and unusable looks like a port taken. The pin rests on the line’s westernmost point, which is Le Havre.',
    note:
      'Printed by only one of the accounts on file and kept out of the body. From the Wikipedia article: that the preparatory bombardment killed over 2,000 civilians and 19 German troops, and that the municipality’s own assessment of February 1945 put the September bombings at 1,536 dead and 517 missing; that the second wave was 1,880 long tons; that the town’s normal population was about 160,000, of whom 50,000 were still there; that the British official history counts 11,300 prisoners and 600 killed and the Canadian 11,302 with 388 I Corps casualties, the Allied total being given as 388 to 500; that the harbour reopened on 9 October; that the Allied object was to take the facilities intact; and that Hitler had the town declared a fortress to be held to the last man. From History of War: that Bomber Command dropped 4,000 tons on the port with a plan for 5,000 on the outer defences; that some 12,000 prisoners were taken including non-combatants, and the Allied cost as 634; that Hitler ordered the ports held as fortresses on 4 September; that Eisenhower first meant to leave them alone for Antwerp until Montgomery argued on 9 September for Le Havre, Dieppe, Boulogne, Dunkirk and Calais; that Dieppe fell unopposed on 1 September; that Boulogne opened on 12 October and that the ports helped with the autumn supply shortages; that the fighting gave the Allies the French coast opposite Kent; and that Dunkirk was the last of these towns to be liberated, on 10 May 1945. The same number is attached to two different arms: History of War gives 4,000 tons as Bomber Command’s load on the port, while the Wikipedia article gives more than 4,000 long tons as the fire of Warspite and Erebus, and both pages name those two ships. The surrender hour, printed by both, is rendered 11:45 in one and 11.45 in the other, and History of War spells the commandant’s name Wildemuth and Wildermuth on the same page.',
    levels: {
      primary: {
        cause:
          'The breakout from Normandy cut the Channel ports off one after another, and Hitler had ordered them held as fortresses. The Allied armies needed harbours on the Continent to supply the armies they were pushing forward with.',
        what: 'British infantry of I Corps, with the specialist armour of the 79th Armoured Division, ' +
          'attacked Le Havre on 10 September 1944 after a heavy bombardment by sea and air. The garrison ' +
          'surrendered on 12 September.',
        consequence: 'The harbour had been so badly damaged that the port was not open again for weeks.',
      },
      secondary: {
        cause: 'Every port on the Channel coast was strongly held once the advance had passed it, and Hitler ' +
          'ordered them made into fortresses. The Allies wanted the harbour delivered in working order to ' +
          'supply the armies in Europe, and the Germans were working to leave them nothing.',
        what:
          'Warships and aircraft bombarded the port before the assault, and Bomber Command put in an effort of its own. On 10 September the British I Corps — the 49th and 51st Divisions, with the specialist armour of the 79th Armoured Division against the strongpoints and the anti-tank ditch — attacked from the north-east. The columns fought in on 12 September, and the garrison commander surrendered that morning.',
        consequence:
          'The port was so badly damaged that it was not reopened until well into October, and the other Channel ports were taken in the same weeks. Attempts to evacuate the civilian population before the assault came to nothing.',
      },
      university: {
        cause:
          'The attack was mounted to capture a harbour and was itself one of the things that destroyed it. The Allies wanted the facilities working and the defenders meant to leave them none, and the means chosen to break a fortress in two days — big-gun ships, Bomber Command, specialist armour — were not means which spare a port. Both accounts record the same trade-off without agreeing on the tonnage or the toll: the fire which made the assault cheap for the attackers is the fire which wrecked the thing the assault was fought for. It is worth adding that the garrison commander asked to be allowed to move the civilians out before the end, and that the request came to nothing, so the civilians left in the town were there because of orders given on both sides.',
        what:
          'The accounts differ in the way official histories differ, and most of it is in the accounting rather than the events. The prisoners are counted one way by the account of the battle and another by the account of the ports, which includes the non-combatants, so the garrison changes size between them; the tonnage of bombs moves according to whether it is counted against the port or against its outer defences; and one account gives four thousand tons to the bomber force where the other gives a figure of the same size to the guns of two capital ships. A prisoner count is a decision about whom to count, and a bomb tonnage is a decision about what to count, and a reader who takes either number without the other has chosen a side in a dispute the sources themselves do not have.',
        consequence:
          'Both accounts reach the same verdict by different routes: a combined-arms set-piece well executed, at a cost to the attackers far below what the garrison paid, yielding a harbour which was not ready when it was wanted. The ports did open in the end, in October, which is the fact the September fighting was fought for; whether they opened in time to matter is a different question, and one the sources answer more quietly than the story of the assault invites. Le Havre therefore belongs in the argument about what fortresses are worth rather than in the parade of attacks which went right, and what it illustrates depends on whether the judge is looking at the assault or at the cargo which could not be landed in September.',
      },
    },
  },
  {
    id: 'tobruk_breakout',
    date: '1941-11-26',
    precision: 'day',
    title: 'The Tobruk garrison breaks out to the relief',
    kind: 'battle',
    fronts: ['mediterranean'],
    countries: ['United Kingdom', 'Australia', 'New Zealand', 'Germany', 'Italy'],
    figures: ['auchinleck', 'rommel'],
    mapNote:
      'The frontier data does not follow the desert war month by month, so the map shows a line advancing across ground whose fill does not change in step with it. Neither the besieged harbour nor the relief column can be drawn. The pin rests on the line’s Tobruk vertex.',
    note:
      'The sequence is not disputed; the dates and the totals are, and the disputed items are printed by only one account on file. The breakout is dated to 21 November by the Wikipedia article, which then has the attack on the El Duda ridge ordered by Major General Ronald Scobie on 26 November and the ridge carried in the early hours of 27 November, when a small force of New Zealanders was met; History of War puts contact with Freyberg’s New Zealanders on 26 November, and dates the first sortie from the perimeter to 20 November. The end of the siege is given three ways: Wikipedia’s lead has the garrison relieved after 231 days and its infobox dates the siege from 10 April to 27 November 1941; History of War has the siege only temporarily lifted on the night of 26–27 November, re-established on 1 December with XIII Corps inside the perimeter, and finally lifted on the night of 7–8 December after 242 days; the Australian War Memorial has the 2/13th Battalion still in the port when it was lifted on 10 December, the only unit present throughout. History of War also records that lifting the siege became an obsession of Churchill’s, who pressed General Wavell, that two attacks in the summer of 1941 had failed, and that Rommel’s dash to the Egyptian frontier cut the relief’s lines behind it. The Australian War Memorial gives Australian losses of 832 killed, 2,177 wounded and 941 taken prisoner, and about 14,000 Australians besieged between April and August 1941. Wikipedia gives the shipping tally for the siege as 47,280 men taken out, 34,113 put in and 33,946 long tons of stores delivered between 11 April and 10 December 1941, and records that the Axis recaptured the port in June 1942.',
    levels: {
      primary: {
        cause:
          'The Axis army had invested Tobruk in April 1941, and the port held on in its rear. The British Eighth Army attacked on 18 November 1941 to raise the siege and clear Cyrenaica.',
        what: 'The garrison broke out through the perimeter on 21 November and held the ground it had won ' +
          'while the armoured battle moved away behind it. At the end of the month it fought for the El ' +
          'Duda ridge and met New Zealanders there.',
        consequence:
          'The siege was lifted in December 1941, but not on the day the relief and the garrison met: the investment was renewed first, and the accounts differ over which day in December the siege really ended.',
      },
      secondary: {
        cause:
          'Rommel’s first offensive had taken Cyrenaica but stopped before Tobruk, where his attacks were repulsed and a garrison of Australians and British troops, with the Australian 9th Division at its centre, sat on his line of communication. Holding the port cost the Axis dear: it lay on the coast route of the army in Cyrenaica, so that army had to be fed across the desert, and the convoys which ran to the port were contested at sea and in the air. The British Eighth Army’s offensive, Operation Crusader, began on 18 November 1941.',
        what:
          'The garrison was ordered to break out on 21 November, and its first sorties dented the siege lines before the panzer divisions turned them back. The attack on the El Duda ridge was ordered on 26 November and carried in the early hours of the 27th, and that night the garrison and the relieving troops met round the ridge. The New Zealanders were then forced back, the investment was renewed on 1 December, and fighting round the port went on for another week.',
        consequence:
          'The siege was raised at the end of a campaign in which the Axis had lost ships, aircraft and the initiative on this coast, and the garrison which came out of the port had been reinforced until it was a strike force in itself. One Australian battalion which had been in the port from the beginning was still there when the siege was finally lifted. Neither of the first two facts was of much use in the last days of 1941.',
      },
      university: {
        cause:
          'Two histories of the same months disagree about when the siege of Tobruk ended, and the disagreement is not a slip but a difference in what is measured: the day the garrison touched the relief, the day the investing army withdrew, or the day the last unit was relieved. The operational point behind the argument is that a garrison’s sortie is worth only what the relief makes of it. The fortress held its own ground and even took the ridge the relieving army could not reach, but a siege is raised by two forces meeting, and until they meet a breakout has simply made the perimeter wider. That is why the day of contact never carried the weight given to it, and why the armies here could win a battle and still be back where they started.',
        what:
          'The sources agree on the shape of November: an attack on the 18th, a breakout ordered from the perimeter, a check in front of the port, the attack on the ridge which carried the fortress up to the relief, contact in the last days of the month, and a counterstroke which forced the relief back and renewed the investment. They differ about which of those days is the end of the siege, and their counts of the days the garrison held out follow from that choice, so the length of the siege is a by-product of a definition rather than a fact the sources disagree about. A symbol which rests on a number has to be careful which number it uses and where the count was begun.',
        consequence:
          'Tobruk’s value to the defence of the canal lay in geography rather than in the fighting: a hostile port on the coast route obliged an army in Cyrenaica to be fed across the desert instead of by sea, and it held troops which were wanted elsewhere. Both of those arguments are made on the same pages as the casualty lists, which is a fair sign of how hard it is to keep the two lines of thought apart in this battle. The port’s real claim is the duller one: it made the desert longer than the map suggests, and an army which cannot use a port fights at the end of a road.',
      },
    },
  },
];
