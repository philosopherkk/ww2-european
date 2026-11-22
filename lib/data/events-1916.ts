import type { WW1Event } from './types';

/**
 * 1916. Dates are New Style; where a Russian source gives an Old Style date it
 * is noted in the `note` field. Every figure was checked against a fetched
 * source; where the sources disagree the card carries a range, or the dispute
 * is set out in `note`.
 */
export const EVENTS_1916: WW1Event[] = [
  {
    id: 'mojkovac',
    date: '1916-01-06',
    precision: 'day',
    title: 'Montenegro halts the Austro-Hungarian advance at Mojkovac',
    kind: 'battle',
    fronts: ['balkans'],
    countries: ['Montenegro', 'Austria-Hungary', 'Serbia'],
    note: 'Fought on 6 and 7 January new style, which was 24 and 25 December in the Julian calendar Montenegro still used — Orthodox Christmas, and the reason it is also called the Battle of Bloody Christmas. The order to cover the retreat of the Royal Serbian Army to Corfu via Albania was given on 5 January, but the sources state that most Serbian troops had already crossed the Albanian mountains and were fighting their way south between Scutari and Durazzo, so the battle bought time that was largely no longer needed. More than 2,000 Austro-Hungarian dead were left on the field. The sources disagree about the politics: some historians hold that King Nikola was already in surrender negotiations during the fighting, others that he refused to negotiate before 12 January. Berane fell on 10 January, Mount Lovćen on 11 January and the capital Cetinje on 13 January; the whole Montenegrin army had laid down its weapons by 25 January.',
    levels: {
      primary: {
        cause: 'Austro-Hungarian troops had driven the Serbian army from Serbia and now marched into ' +
          'Montenegro, worn down by three months of war, cold and short supplies. On 5 January the ' +
          'Montenegrins were told to hold the line so the Serbs could reach the sea.',
        what: 'The fighting came to a head on 6 and 7 January 1916 at Mojkovac, in knee-deep snow. ' +
          'Austro-Hungarian troops attacked with heavy guns; the Montenegrins held their trenches and ' +
          'charged back with bayonets. Both attacks failed; the next day the Austro-Hungarians fell back.',
        consequence: 'A small Montenegrin army stopped a much larger and better armed one for two days. The Serbian soldiers reached the coast and were rescued, but Montenegro itself was overrun within three weeks and its army surrendered.',
      },
      secondary: {
        cause: 'Montenegro had fought in Serbia alongside the Serbian army through the autumn of 1915, and in January 1916 the Austro-Hungarians crossed into Montenegrin territory. Three months of fighting, the weather and a shortage of supplies had weakened the defending army, which on 5 January was ordered to protect the retreat of the Royal Serbian Army to Corfu through Albania.',
        what: 'The battle was fought on 6 and 7 January, Orthodox Christmas. Commanded by Vojvoda Janko Vukotić, with Savo Lazarević’s Royal Gendarmerie in the line, the Montenegrins repulsed a set-piece attack supported by heavy artillery on 6 January, took back Mojkovac and the ground around it, and beat off a second attack on the 7th. Much of the fighting was hand-to-hand with bayonets and knives in deep snow, and the attackers left more than 2,000 dead.',
        consequence: 'The Montenegrins held the Berane–Andrijevica–Mojkovac–Tara river line until 18 January, by which time Berane, Lovćen and the capital Cetinje had been lost. The army capitulated by 25 January, so the battle is remembered for the retreat it was meant to cover rather than for the ground it kept.',
      },
      university: {
        cause: 'The battle is contested on two counts: what the political leadership knew, and whether the engagement had any operational effect. Some historians argue that King Nikola was already negotiating surrender during the fighting, others that he did not agree to negotiate before 12 January.',
        what: 'The narrative rests largely on Montenegrin accounts and on a quotation attributed to the Austro-Hungarian Generalmajor Reinöhl, and the sources themselves record considerable disagreement about the conduct of the fighting. Militarily the battle arrived too late: the bulk of the Serbian army had already crossed the mountains and was fighting between Scutari and Durazzo.',
        consequence: 'Mojkovac is best read as a tactical reverse inflicted on a superior invader inside a campaign of annihilation, not as a battle that altered the Serbian campaign. Its weight in Montenegrin memory reflects the need for a heroic episode in a winter that otherwise cost the kingdom its army and its independence.',
      },
    },
  },
  {
    id: 'erzurum_falls',
    date: '1916-02-16',
    precision: 'day',
    title: 'Erzurum falls to the Russian Caucasus Army',
    kind: 'offensive',
    fronts: ['caucasus'],
    countries: ['Russia', 'Ottoman Empire'],
    figures: ['enver_pasha'],
    note: 'The operation ran from 10 January to 16 February 1916 new style, 28 December 1915 to 3 February 1916 in the Julian calendar Russian documents used. The Russian Caucasus Army under Nikolai Yudenich fielded about 120,000 men against an Ottoman Third Army of 80,000 or more with 150 field guns and a fortress line armed with some 265 guns; the figure for the fortress guns varies between accounts. The engagement at Hasankale on 18–19 January cost the Ottomans about 1,000 killed and 1,500 captured. Reported losses are 17,135 Russian (2,339 killed, 14,796 wounded) and 66,000 Ottoman killed, wounded and captured, figures drawn from Russian and Soviet sources of different dates; by the end of 1916 the Third Army had been reduced to about 36,000 men. The article on the operation deliberately declines to call the victory decisive.',
    levels: {
      primary: {
        cause: 'Russia and the Ottoman Empire were fighting each other in the mountains of eastern Anatolia. The Ottomans had lost a big winter attack the year before, and Russia hoped to strike before Ottoman soldiers could be moved back from other fronts.',
        what: 'The Russian attack began on 10 January 1916. Troops under General Yudenich beat the Ottoman ' +
          'rearguard at Hasankale on 18 and 19 January and pushed on towards Erzurum, which was ringed by ' +
          'forts on high ground. The town surrendered on 16 February.',
        consequence: 'Russia captured the main Ottoman fortress town in the region, and the Ottoman army there was so badly worn out that it had to be rebuilt. Fighting in the mountains went on for the rest of the year.',
      },
      secondary: {
        cause: 'The failure of the Ottoman offensive at Sarikamish in the winter of 1914–15 and the end of the Gallipoli campaign, which would free Ottoman divisions, both shaped the timing. Yudenich wanted to strike before those divisions could be redeployed and readied, and Erzurum, protected by a ring of mountain forts, was the key to eastern Anatolia.',
        what: 'The offensive opened on 10 January 1916 with about 120,000 Russians against an Ottoman Third Army of some 80,000 men, 150 field guns and a fortress line of roughly 265 guns. The victory at Hasankale on 18–19 January, where the Siberian Cossack Brigade destroyed a rearguard of four battalions, opened the road to the fortress, and Erzurum capitulated on 16 February.',
        consequence: 'Ottoman losses in the campaign are given as about 66,000 killed, wounded and captured, against 17,135 Russian casualties, and the Third Army was reduced to corps strength by the end of 1916. The front line moved deep into Anatolia, and the Russian army held the initiative in the Caucasus for another year.',
      },
      university: {
        cause: 'The operation was enabled by Ottoman strategic dispersion: War Minister Enver Pasha’s preference for offensive action on several fronts at once, and the eight Ottoman divisions drawn to the Caucasus, left the Third Army outgunned in a fortress sector designed for a defence in depth that its manpower could not sustain.',
        what: 'Yudenich used a feint towards Muş to pull the Ottoman reserves south while the decisive blow fell further north, a method that depended on interior lines, winter movement and superior artillery preparation. Casualty accounting is weakly evidenced: the Russian total of 17,135 comes from a recent Russian study, the Ottoman total of 66,000 from Turkish and Soviet encyclopaedic sources, and they are not measured on the same basis.',
        consequence: 'The editors of the standard account withhold the word “decisive” for good reason. The Third Army was destroyed as a formation in 1916 but the Caucasus Front remained secondary to the decisions made in Berlin and Vienna, and Russian gains in 1916 proved as transient as the imperial state that won them.',
      },
    },
  },
  {
    id: 'mora_surrenders',
    date: '1916-02-18',
    precision: 'day',
    title: 'The Mora garrison capitulates',
    kind: 'siege',
    fronts: ['africa'],
    countries: ['United Kingdom', 'France', 'Germany'],
    note: 'On 24 February 1916 Bonar Law told the Commons that a telegram of 18 February reported the ' +
      'capitulation of the Mora garrison and that this completed the conquest of the Cameroons. The ' +
      'National Army Museum dates the same completion to 18 February 1916. A 1922 account by Charles ' +
      'Dobell agrees that Mora surrendered that day after terms were accepted. The strength of the ' +
      'garrison is not given: memoirs and the official history do not match.',
    levels: {
      primary: {
        cause: 'After Duala fell in 1914, German troops in Kamerun fell back inland. The last of them held a ' +
          'mountain position at Mora, in the north of the colony, with Allied forces around them.',
        what: 'On 18 February 1916 the Mora garrison capitulated, after terms were accepted. The British ' +
          'Colonial Office treated that day as the end of the conquest of Kamerun. The size of the ' +
          'garrison is not stated here, because the accounts do not agree it.',
        consequence: 'Germany no longer held a garrison in Kamerun. The Allied campaign in that colony was over. ' +
          'Other German forces were still fighting in East Africa, so the African war did not end with ' +
          'Mora.',
      },
      secondary: {
        cause: 'The inland campaign in Kamerun after the surrender of Duala and Bonaberi became a pursuit of a ' +
          'field force that broke up as it retreated. Mora, a mountain position in the north, was the ' +
          'last garrison still holding. Allied columns sat in front of it into 1916. Terms, rather than a ' +
          'final assault, were what ended the resistance. Charles Dobell, who had commanded at Duala, ' +
          'later wrote that those terms were accepted.',
        what: 'A telegram of 18 February 1916 reported the capitulation. Bonar Law read that news to the ' +
          'Commons on 24 February and said it completed the conquest of the Cameroons. The National Army ' +
          'Museum uses the same day for the same claim. Dobell’s 1922 account agrees the date and agrees ' +
          'that surrender followed accepted terms. This card does not give the garrison’s strength. The ' +
          'memoirs and the official history do not match, so a number would be a choice.',
        consequence: 'London treated Mora as the full stop on Kamerun, which is a political claim as well as a ' +
          'military one: the colony could now be described as conquered in Parliament. On the ground it ' +
          'ended the last organised German hold in that territory. It did not affect Lettow-Vorbeck’s ' +
          'campaign in the east, which had never depended on Kamerun. Two African wars that had started ' +
          'together in 1914 ended a year and a half apart.',
      },
      university: {
        cause: 'Mora is the kind of epilogue colonial histories drop, because the port at Duala looks like the ' +
          'conquest and a mountain outpost looks like a remnant. The Colonial Office did not see it that ' +
          'way. Bonar Law’s formula, that the telegram completed the conquest, shows a government waiting ' +
          'for a last capitulation before it would use that word. The delay from September 1914 to ' +
          'February 1916 is the real length of the Kamerun campaign.',
        what: 'The day is unusually well attested for a Central African post: a telegram dated the 18th, a ' +
          'Cabinet minister citing it six days later, a museum chronology, and the expedition’s commander ' +
          'writing in 1922 that terms had been accepted. Where the sources fail is the strength of the ' +
          'garrison. Memoir totals and the official history diverge, and this card does not split the ' +
          'difference. A capitulation after terms is also a different event from a storming, which is why ' +
          'the card says terms were accepted.',
        consequence: 'Completing the conquest of Kamerun let Britain and France move from fighting to partitioning a ' +
          'German colony in practice, well before any peace conference. That administrative fact is why a ' +
          'parliamentary sentence matters as much as the military one. It also marks how uneven the ' +
          'African war was. By the time Mora fell, South-West Africa had already surrendered, Togoland ' +
          'was long gone, and East Africa had not begun to end. A single phrase, the conquest of German ' +
          'Africa, does not survive those dates.',
      },
    },
  },
  {
    id: 'verdun_opens',
    date: '1916-02-21',
    precision: 'day',
    title: 'The German attack on Verdun begins',
    kind: 'offensive',
    fronts: ['western'],
    countries: ['France', 'Germany'],
    figures: ['falkenhayn', 'petain', 'joffre'],
    note: 'The battle lasted from 21 February to 18 December 1916, 302 days, and the sources give the result as a French victory. The German bombardment involved 1,201 guns, about two-thirds of them heavy. Fort Douaumont was lost on 25 February at about 15:00 to men of Brandenburg Infantry Regiment 24, almost by chance, and Pétain took command of the sector that night. French divisions were rotated so fast that by 6 March some 20½ had been engaged. The German attack was extended to the west bank of the Meuse in March, which produced the fighting along the French line of resistance from Cumières to le Mort-Homme and Côte 304. On losses, the tabulation by Heer and Naumann gives 714,231 casualties for both sides in 1916, about 70,000 a month; Martin Philpott puts roughly 714,000 in 1916 and about 1,250,000 in the Verdun region across the whole war, depending on whether the fighting on the Woëvre and in 1917 is included.',
    levels: {
      primary: {
        cause: 'The German commander wanted to attack a place that France could not afford to lose. Verdun was a fortified town on the river Meuse, and its guns had been taken away to use elsewhere, so it looked weak.',
        what: 'Before dawn on 21 February 1916, over a thousand German guns opened fire and infantry moved in ' +
          'behind. On 25 February a handful of men captured Douaumont, a great fort found almost ' +
          'undefended. That night the French General Philippe Pétain ordered no retreat.',
        consequence: 'The battle went on for ten months, and both sides lost huge numbers of men. By December the French had taken back most of the ground they had lost, and the German attack had failed.',
      },
      secondary: {
        cause: 'Erich von Falkenhayn, the German chief of staff, believed that an attack on the heights above Verdun would make the fortresses untenable and force the French army to fight a defensive battle under artillery it could not replace. The French had weakened the Verdun forts during 1915, which made the salient an inviting target for the German Fifth Army.',
        what: 'The bombardment opened on 21 February with 1,201 guns, two-thirds heavy, and the first day’s advance was limited by weather rather than by fire. On 25 February a small party of Brandenburg Infantry Regiment 24 walked into Fort Douaumont and captured its garrison, a shock to French morale. Pétain, given command that night, organised the constant road traffic into Verdun, forbade retreat, and rotated divisions so relentlessly that 20½ French divisions were in the battle by 6 March.',
        consequence: 'When the east-bank advance stalled, the Germans attacked across the Meuse in March, which is why le Mort-Homme and Côte 304 became named features of French defence. The battle ended on 18 December 1916 with Douaumont and Vaux back in French hands, at combined losses of roughly 700,000 men.',
      },
      university: {
        cause: 'The battle’s purpose rests on the so-called Christmas Memorandum of December 1915, in which Falkenhayn told the Kaiser that attrition rather than breakthrough was the object. Afflerbach argued in 1994 that the memorandum was written after the war, though reflecting Falkenhayn’s thinking; Krumeich has held that the attrition thesis was fabricated once the offensive failed and that the real aim was the Meuse heights.',
        what: 'What can be established is a battle of matériel in which both armies fed formations through a narrow sector, in which the defence held the advantage for most of the year, and in which the French recovered the ground by methodical firepower under the Second Army in October and December. Command rotation, the “voie sacrée” road traffic and the artillery concentration made Verdun a template for the planned battles of 1917.',
        consequence: 'Its meaning is still argued. For French historiography Verdun is a defensive victory purchased at a price the army could not pay twice; for German historiography it is the point at which the operations on the Western Front ceased to be winnable. The casualty totals move with the definition of the battlefield, which is why 714,000 and 1,250,000 can both be defended.',
      },
    },
  },
  {
    id: 'battle_of_dujaila',
    date: '1916-03-08',
    precision: 'day',
    title: 'The relief attack at Dujaila fails',
    kind: 'battle',
    fronts: ['middle_east'],
    countries: ['United Kingdom', 'India', 'Ottoman Empire'],
    note: 'The National Army Museum dates the Battle of Dujaila to 8 March 1916 and calls it a failed ' +
      'attempt to relieve Kut. F. J. Moberly’s official history, The Campaign in Mesopotamia, ' +
      'includes the attack on the Dujaila redoubt, a map dated 8 March 1916, and an appendix of ' +
      'casualties for the operations of 8 and 9 March. This card is dated 8 March and says the ' +
      'history carries the fighting into the 9th. The casualty appendix is not copied.',
    levels: {
      primary: {
        cause: 'A British and Indian garrison was besieged at Kut. A column sent to relieve it attacked ' +
          'an Ottoman redoubt at Dujaila, on the way to the town.',
        what: 'The attack opened on 8 March 1916 and did not break the Ottoman line. The official ' +
          'history still has fighting on 9 March. This card uses the 8th, the day both accounts ' +
          'include, and it gives no losses.',
        consequence: 'Kut was not relieved. Further attempts followed in April, and the siege continued until ' +
          'the garrison surrendered. Dujaila is one failed relief, not the surrender.',
      },
      secondary: {
        cause: 'By March 1916 the siege of Kut had lasted through the winter, and relief was the ' +
          'immediate British-Indian problem. A column attacked the Dujaila redoubt, which covered ' +
          'the approaches to the town. The National Army Museum calls 8 March a failed attempt to ' +
          'relieve Kut. Moberly’s official history maps the attack on that day.',
        what: 'The Museum’s date is 8 March 1916. The official history carries the operations into 9 ' +
          'March, which is why an appendix of losses covers both days. This card is dated the 8th ' +
          'and says the history runs into the 9th. The appendix is not used. A total taken from ' +
          'that table would be a new figure, and the two houses are not being asked to underwrite ' +
          'one.',
        consequence: 'The failure left the garrison where it was. The April attacks, and the surrender at the ' +
          'end of that month, are the siege card. They are not this battle. Naming Dujaila matters ' +
          'because the relief is otherwise told as if it began in April, and a March defeat drops ' +
          'out of the story.',
      },
      university: {
        cause: 'Dujaila is a relief battle swallowed by the surrender it did not prevent. The siege card ' +
          'can narrate April and the capitulation and still be right about those weeks, while ' +
          'silent about an earlier attempt that had already shown how hard the Ottoman line was to ' +
          'break. The March attack is that attempt.',
        what: 'The day the Museum prints is 8 March 1916. The official history’s map of the redoubt is ' +
          'dated the same day, and its casualty appendix covers the 8th and the 9th. This card ' +
          'names both days and dates itself to the first. Copying the appendix would turn one table ' +
          'into the losses of the battle. The table is not repeated. What the two houses support is ' +
          'a failed attack on the redoubt, opening on the 8th, with fighting the history still ' +
          'records on the 9th.',
        consequence: 'A relief that fails in March changes how April is read. The later attacks were not the ' +
          'first try, and the garrison’s hope had already been disappointed. Histories that start ' +
          'the relief in April are not wrong about the attacks they do name. They are incomplete ' +
          'about Dujaila. This card is that missing attempt, without a strength and without a total ' +
          'taken from the official appendix.',
      },
    },
  },
  {
    id: 'sussex_pledge',
    date: '1916-03-24',
    precision: 'day',
    title: 'The Sussex is torpedoed and Germany restricts the U-boat war',
    kind: 'diplomacy',
    fronts: ['naval', 'politics'],
    countries: ['France', 'Germany', 'United States'],
    figures: ['wilson_us'],
    note: 'The card is dated to the torpedoing; the German pledge itself was issued on 4 May 1916, which is why some timelines date the “Sussex pledge” to May. About 80 people died, among them the Spanish pianist and composer Enrique Granados; several Americans were injured but none was killed. President Wilson warned that if Germany persisted in submarine warfare “incompatible with the principles of humanity” the United States would break diplomatic relations. The pledge was rescinded in January 1917 with the resumption of unrestricted submarine warfare.',
    levels: {
      primary: {
        cause: 'German submarines were sinking ships in the waters around Britain without warning, so that people in passenger ships had no chance to escape. American lives had already been lost in earlier sinkings, and the United States complained loudly.',
        what: 'On 24 March 1916 a German submarine torpedoed the Sussex, a French passenger ferry in the ' +
          'Channel. About 80 people died, and several Americans were hurt. President Wilson told Germany ' +
          'that unless it changed its methods, the United States would break diplomatic relations with ' +
          'Germany.',
        consequence: 'In May Germany promised not to sink passenger ships and to warn merchant ships before attacking them. That promise kept the United States out of the war for a few more months.',
      },
      secondary: {
        cause: 'Germany had partly abandoned unrestricted submarine warfare after the Lusitania and Arabic incidents of 1915, but naval leaders kept pressing for its return, and attacks continued to go wrong. The torpedoing of a cross-Channel packet carrying civilians, including neutral Americans, came at a moment when Wilson was trying to mediate and to hold his own party together.',
        what: 'The Sussex was hit on 24 March 1916 and reached port with heavy damage; about 80 people had died, among them the composer Enrique Granados, and the injured included Americans. Wilson’s message to Congress warned that the United States would break off relations if submarine warfare continued by means incompatible with the principles of humanity.',
        consequence: 'On 4 May 1916 Germany undertook that no passenger ship would be sunk and that merchant ships would only be attacked under conditions securing the safety of their crews. The pledge tied the Navy’s hands until it was rescinded in January 1917, and the argument about neutral rights had become a cause of American entry into the war.',
      },
      university: {
        cause: 'The episode is a case study in the limits of sea power against a neutral with diplomatic leverage: Germany’s submarine strategy was chosen for its political effect on Britain, but each incident transferred the initiative to Washington, where policy was made by an election-year coalition that could not afford either a war or a surrender of neutral rights.',
        what: 'Bethmann Hollweg’s leadership secured the pledge of 4 May by playing on the fear of American intervention, against the Admiralty’s insistence that only unrestricted attacks could starve Britain out. The conditions imposed on submarine commanders — identify the vessel, secure passengers and crew — largely nullified the weapon while leaving the Navy able to claim it had not been abandoned.',
        consequence: 'The pledge postponed but did not settle the conflict, and the January 1917 reversal was made on the assumption that Britain would be forced to terms before American power could arrive. That calculation, not the torpedoing of the Sussex, decided the scale of the war in 1918.',
      },
    },
  },
  {
    id: 'trabzon_occupied',
    date: '1916-04-18',
    precision: 'day',
    title: 'Russian forces occupy Trabzon',
    kind: 'offensive',
    fronts: ['caucasus'],
    countries: ['Russia', 'Ottoman Empire'],
    note: 'Oscar Heizer, the United States consul at Trebizond, reported to Washington that Russian forces ' +
      'occupied the city on Tuesday 18 April 1916 without opposition, the governor having left on 16 ' +
      'April. The Times of 19 April 1916 printed the Petrograd communiqué of 18 April: Trebizond has been ' +
      'taken. A British chronology dates the capture to 17 April. This card uses 18 April and names the ' +
      '17th. A Turkish study of the Russian sources likewise puts the Ottoman departure on 16 April and ' +
      'the Russian entry on the morning of the 18th.',
    levels: {
      primary: {
        cause: 'After Erzurum fell in February, the Russian Caucasus Army kept moving towards the Black Sea. ' +
          'Trabzon, also called Trebizond, was the largest port still in Ottoman hands on that coast. Its ' +
          'garrison left before the Russians arrived.',
        what: 'On 18 April 1916 Russian forces occupied the port without a fight. The governor had gone on 16 ' +
          'April. A British chronology says 17 April. This card follows the consul and the Russian ' +
          'communiqué, and names the 17th.',
        consequence: 'Russia held the main Ottoman port on the Anatolian Black Sea. Supply for the Caucasus campaign ' +
          'could come by sea as well as over the mountains. The occupation did not end the Caucasian war, ' +
          'but it was the furthest large port the Russians took.',
      },
      secondary: {
        cause: 'The fall of Erzurum in February 1916 opened the roads towards the Anatolian coast. Trabzon was ' +
          'the prize among the ports: a harbour the Ottoman army used, and the largest place the Russians ' +
          'would take on that sea. The garrison and the governor did not stand. The United States consul, ' +
          'Oscar Heizer, watched the city empty and then change hands. His report is the closest civilian ' +
          'account.',
        what: 'Heizer reported that Russian forces occupied Trabzon on Tuesday 18 April 1916 without ' +
          'opposition, the governor having left on 16 April. The Times printed the Petrograd communiqué ' +
          'of the 18th, with the line that Trebizond had been taken that day. A British chronology ' +
          'prefers 17 April. A Turkish study of the Russian sources puts the Ottoman departure on the ' +
          '16th and the Russian entry on the morning of the 18th. This card uses the 18th and records the ' +
          '17th as the rival day.',
        consequence: 'The occupation gave the Caucasus Army a Black Sea port and, with Russian naval support, a ' +
          'shorter supply line than the mountain roads from the east. It was an occupation without a ' +
          'battle, which makes it easy to leave out of a war told through sieges. Politically it deepened ' +
          'the Russian hold on Ottoman Anatolia that the 1916 campaign had begun at Erzurum. That hold ' +
          'did not survive the Russian collapse of 1917 and 1918.',
      },
      university: {
        cause: 'Trabzon is overshadowed by Erzurum in every short history of the Caucasian campaign, because ' +
          'Erzurum was a fortress fought for and Trabzon was a port walked into. The walk still mattered. ' +
          'A modern army on the Anatolian plateau needed a harbour, and the Ottoman decision to leave ' +
          'rather than stand shows how far the February defeat had already shifted the coast. The ' +
          'consul’s letter is useful precisely because he was not a belligerent staff officer.',
        what: 'The day is close but not unanimous. Heizer, writing from the city, and the Petrograd ' +
          'communiqué as The Times printed it, give 18 April 1916, without a fight, after the governor’s ' +
          'departure on the 16th. A British chronology says the 17th. The Turkish reading of the Russian ' +
          'sources agrees with the consul on both the departure and the morning entry of the 18th. ' +
          'Choosing the 18th follows the eyewitness and the communiqué, and naming the 17th stops the ' +
          'card from hiding a real variant. No strength is attached.',
        consequence: 'Occupation of the port confirmed that the 1916 Caucasian offensive was a strategic advance and ' +
          'not a single fortress victory. It also created a Russian logistical position that later ' +
          'Ottoman and nationalist narratives had to explain away after 1918, when the same coast ' +
          'returned to Ottoman or Turkish control. The absence of a battle is why casualty tables have ' +
          'nothing to say here, and why the event is dated from a consul and a communiqué rather than ' +
          'from an after-action return.',
      },
    },
  },
  {
    id: 'easter_rising',
    date: '1916-04-24',
    precision: 'day',
    title: 'The Easter Rising in Dublin',
    kind: 'revolution',
    fronts: ['home', 'politics'],
    countries: ['United Kingdom'],
    note: 'The Rising began on Easter Monday, 24 April 1916 and lasted six days; Pearse agreed to an unconditional surrender on Saturday 29 April, although sporadic fighting continued briefly afterwards. Of the 485 people killed, 260 were civilians, 143 were British military and police personnel and 82 were Irish rebels, and the article counts the 16 executed leaders among those 82; more than 2,600 were wounded. About 3,500 people were taken prisoner and 1,800 of them were sent to internment camps or prisons in Britain. Eoin MacNeill’s countermanding order, printed in the Sunday newspapers after the failed German landing at Kerry, greatly reduced the scale of the rising outside Dublin. In the 1918 general election Sinn Féin won 73 of the 105 Irish seats.',
    levels: {
      primary: {
        cause: 'A small number of Irish republicans believed that Ireland should be a separate republic, and ' +
          'thought Britain, fighting a great war, was the right moment to act. Some of them had asked ' +
          'Germany for help, and a ship carrying rifles was caught before it landed.',
        what: 'On Easter Monday, 24 April 1916, several hundred men and women seized the General Post Office ' +
          'and other Dublin buildings, and proclaimed an Irish Republic. British troops with artillery ' +
          'and a gunboat shelled the city centre for six days. The leaders surrendered on 29 April.',
        consequence: 'Hundreds of people were killed, and many of them were civilians caught in the shelling. The British leaders of the rising were shot over the following months, which turned many of them into heroes and changed what most people in Ireland wanted.',
      },
      secondary: {
        cause: 'The Rising was organised by a seven-man Military Council of the Irish Republican Brotherhood, with the Irish Volunteers and the Irish Citizen Army as its armed forces, on the calculation that Britain was distracted by the war in Europe. Roger Casement and John Devoy had negotiated German support, but the ship SS Libau, disguised as the Aud, was intercepted off Kerry on 21 April and Casement was captured, and Eoin MacNeill, learning of it, countermanded the mobilisation.',
        what: 'Because the countermand reached most Volunteers, only a few thousand men moved, and the fighting was concentrated in Dublin, where the General Post Office and a handful of other positions were held against artillery, machine-gun fire and a gunboat on the Liffey. The main positions were surrounded and bombarded, civilians were killed by shellfire or mistaken for rebels, and Patrick Pearse agreed to unconditional surrender on 29 April to spare the city.',
        consequence: 'Ireland stayed under martial law after the surrender; about 3,500 people were imprisoned and 1,800 interned in Britain, and sixteen leaders were executed by firing party from May, following courts martial. The execution of James Connolly, shot while sitting tied to a chair because his wounds would not let him stand, and the summary killing of civilians such as Francis Sheehy-Skeffington, turned a military failure into a political success.',
      },
      university: {
        cause: 'The Rising was a insurrection of a minority with no mass mandate, planned by a secret Military Council that kept even the Volunteer chief of staff out of the plot; its military logic was not victory but the deliberate staging of a blood sacrifice that would delegitimise British rule in Ireland.',
        what: 'The six days in Dublin were militarily worthless and politically decisive because of what followed rather than what preceded them: courts martial held under martial law, executions carried out over weeks rather than at once, and the mass internment that filled British camps with a radicalised generation. The 485 dead split 260 civilians, 143 British military and police and 82 rebels, a ratio that made the British state the principal killer in Irish memory.',
        consequence: 'The historiography turns on the executions: without them the Rising is an episode of conspiratorial violence in a war, with them it is the founding narrative of independent Ireland, confirmed electorally in December 1918 when Sinn Féin took 73 of 105 Irish seats. Revisionist historians have stressed the continuity of constitutional nationalism and the role of the war and conscription crisis, but the causal weight given to May to August 1916 is still the standard account.',
      },
    },
  },
  {
    id: 'siege_of_kut',
    date: '1916-04-29',
    precision: 'day',
    title: 'Townshend surrenders the garrison at Kut al-Amara',
    kind: 'siege',
    fronts: ['middle_east'],
    countries: ['United Kingdom', 'India', 'Ottoman Empire'],
    note: 'The siege ran from 7 December 1915 to 29 April 1916, almost five months. The strength of the garrison is reported two ways: the introduction to the article calls it an 8,000-strong British Indian army garrison, while the text gives the 6th (Poona) Division, under Major-General Charles Townshend, as numbering about 11,000 men plus cavalry when it arrived at Kut around 3 December 1915 after the check at Ctesiphon, so a figure of 8,000–11,000 is safest. Around 13,000 Allied soldiers survived to be taken prisoner and were marched to Aleppo, where many died; about 1,500 sick and wounded prisoners were later exchanged. The Ottoman besieging force initially numbered about 11,000; von der Goltz Pasha, sent to take overall command, died of typhoid in April about a week before the surrender, and Halil Pasha commanded at the end. The relief force under General Gorringe, about 30,000 men and roughly equal to the Ottomans opposite, took Fallahiya on 5 April and Bait Isa on 17 April but failed at Sannaiyat on 22 April with about 1,200 casualties. The historian Christopher Catherwood has called Kut the worst defeat of the Allies in the First World War.',
    levels: {
      primary: {
        cause: 'A British Indian army had pushed up the river Tigris towards Baghdad and was stopped at Ctesiphon. It fell back to the town of Kut and dug in there, and Ottoman forces surrounded it.',
        what: 'The siege began in December 1915, and food ran out so the men ate horse meat and wild birds. ' +
          'Attacks by a relieving force all failed to break through, and supply by aeroplane was not ' +
          'enough. On 29 April 1916 the commander, General Townshend, surrendered.',
        consequence: 'About thirteen thousand soldiers became prisoners and were marched a long way north, and many of them died on the road. It was one of the worst defeats the British and their allies suffered in the whole war.',
      },
      secondary: {
        cause: 'The Mesopotamian campaign had been run for the Government of India to secure oil and prestige, and the advance on Baghdad outran its supply line. After the battle of Ctesiphon in November 1915, Townshend chose to stand at Kut, in a loop of the Tigris, rather than continue the retreat downriver to Basra, and was contained within days.',
        what: 'The 6th (Poona) Division, some 8,000 to 11,000 men, held out in a loop of the Tigris from 7 December 1915 under Major-General Charles Townshend. The relief attacks under General Gorringe took Fallahiya on 5 April and Bait Isa on 17 April but were stopped at Sannaiyat on 22 April with about 1,200 casualties, while 30 Squadron of the Royal Flying Corps carried out what the sources call the first air supply operation in history. Starving and with disease spreading, the garrison capitulated on 29 April 1916 after a siege of almost five months.',
        consequence: 'Some 13,000 prisoners were marched to Aleppo in captivity in which many died, and the British government was obliged to negotiate an exchange of about 1,500 sick prisoners. The defeat discredited the way the campaign had been run, and Baghdad was taken only ten months later, in March 1917.',
      },
      university: {
        cause: 'Kut exposed a command economy in which the Government of India, the India Office and the War Office all claimed responsibility for a theatre nobody controlled, and in which a division was allowed to advance beyond its logistics and then to be invested, while relief was attempted piecemeal by a force assembled too late.',
        what: 'The siege was lost on operational grounds, not by any failure of the garrison’s endurance: Ottoman forces under Halil Pasha held the river approaches, the relief attacks were made in detail down a single line of communication, and the air supply attempted by the Royal Flying Corps in April could not sustain a division. The surrender itself was negotiated, Townshend arranging a ceasefire on 26 April after talks failed.',
        consequence: 'Its consequence was political as much as military. Kut became a shock to wartime government comparable to Gallipoli, strengthening the hand of those who wanted the Middle East theatres subordinated to a single policy, and it made the capture of Baghdad in 1917 an act of restored prestige rather than of strategy. The treatment of Indian prisoners also mattered to Ottoman and British policy towards Indian nationalist agitation for the rest of the war.',
      },
    },
  },
  {
    id: 'asiago_offensive',
    date: '1916-05-15',
    precision: 'day',
    title: 'The Austro-Hungarian offensive on the Asiago plateau',
    kind: 'offensive',
    fronts: ['italian'],
    countries: ['Italy', 'Austria-Hungary'],
    figures: ['conrad_hoetzendorf', 'cadorna'],
    note: 'The Austrian name for the offensive, Strafexpedition or “punitive expedition”, has no reference in official Austrian documentation of the time and is considered to be of popular origin. The attack was launched by the 11th Army under Viktor Dankl, followed by the 3rd Army under Hermann Kövess, against about 250,000 well-entrenched Italian troops of the First Army and part of the Fourth. The offensive had failed to break out into the lowlands by the end of May; the Italian defensive line on Mounts Pasubio, Novegno and Zugna and at the Buole Pass and Astico valley held, and the Italian counteroffensive began on 2 June. After the Russian success in Galicia on 4 June, Conrad had to withdraw half his divisions from Trentino. The fighting on the plateau continued into June, and the political effect in Italy was the fall of the Salandra cabinet and the succession of Paolo Boselli.',
    levels: {
      primary: {
        cause: 'Italy had gone to war against Austria-Hungary in 1915 and had pushed across the mountains in the Isonzo valley. Austria-Hungary wanted to punish Italy for that and to knock it out of the war with one big blow from the Trentino mountains.',
        what: 'On 15 May 1916 about 2,000 Austro-Hungarian guns opened fire on the Asiago plateau, and ' +
          'infantry attacked. The centre of the Italian line gave way and whole villages were lost, but ' +
          'the defence held on the next range of hills.',
        consequence: 'The attack ran out of strength within a few weeks, and from 2 June the Italians pushed back. Austria-Hungary had spent its best chance on the Italian front and lost men it badly needed against Russia.',
      },
      secondary: {
        cause: 'Franz Conrad von Hötzendorf had long argued that Italy’s entry into the war made it the enemy most worth attacking first, and Russian pressure elsewhere gave the Central Powers a respite that made a limited offensive possible. Italian intelligence had reported a large build-up in Trentino for about a month, but General Luigi Cadorna dismissed the warnings, persuaded that nothing could happen in that country.',
        what: 'The bombardment opened on 15 May 1916 with about 2,000 guns on a front of some 50 kilometres, and the 11th Army under Dankl broke through the forward positions of the Italian First Army, with Kövess’s 3rd Army following. The advance stalled before the lowlands by the end of May against the line of the Pasubio, Novegno, Zugna, the Buole Pass and the Astico valley, and the Italian counteroffensive began on 2 June.',
        consequence: 'When the Russians attacked in Galicia on 4 June, Conrad was forced to take half his divisions out of Trentino, and the offensive was abandoned for good. In Italy the Salandra government fell and Paolo Boselli formed a new cabinet, with Cadorna’s conduct of intelligence a lasting part of the blame.',
      },
      university: {
        cause: 'The expedition was strategically defensive in conception and politically mis-sold: Austria-Hungary lacked the mass to deliver a decisive blow in mountain terrain against entrenched divisions, and German support was refused for an attack that Berlin rated second to the Eastern Front and to Verdun.',
        what: 'Its failure is a study in the tyranny of mountain logistics and of the defensive advantage even in 1916: infiltration tactics used by the Austrians gained ground on the plateau but could not sustain it, while the Italian army, unlike in 1917, absorbed the breach and closed it. The nickname “Strafexpedition”, absent from contemporary Austrian documents, tells us more about Italian propaganda than about Austro-Hungarian intentions.',
        consequence: 'The battle did more damage to the Habsburg army than to the Italian one, deepening the rivalry between the Austrian and German general staffs and leaving the Italian front, as in 1917, exposed to a concentration that Vienna could no longer supply from its own resources. Italian historiography has moved from pure condemnation of Cadorna to a wider account of how an army of conscript peasants was held together by decimation and discipline.',
      },
    },
  },
  {
    id: 'sykes_picot',
    date: '1916-05-16',
    precision: 'day',
    title: 'The Sykes-Picot Agreement is ratified',
    kind: 'diplomacy',
    fronts: ['politics', 'middle_east'],
    countries: ['France', 'United Kingdom', 'Russia', 'Ottoman Empire'],
    figures: ['grey'],
    note: 'The memorandum was initialled by Mark Sykes and François Georges-Picot between 23 November 1915 and 3 January 1916, and was ratified by the two governments on 9 and 16 May 1916, after Russia agreed on 26 April; the card is dated to the final ratification of 16 May, which is why some timelines give 9 May. The agreement divided the non-Arab provinces of the Ottoman Empire into British and French zones of control and influence, with the two countries separated by the Sykes-Picot line. It was made public by the Bolsheviks in Moscow on 23 November 1917 and repeated in The Manchester Guardian on 26 November 1917, at which point, in the article’s phrase, the British were embarrassed, the Arabs dismayed and the Turks delighted. Against it stands the McMahon–Hussein correspondence of ten letters exchanged between July 1915 and March 1916, in which the British government agreed to recognise Arab independence after the war in return for the Sharif of Mecca rising against the Ottomans; the San Remo conference of April 1920 allocated the mandates, Syria to France and Iraq and Palestine to Britain. The calendar is part of the date problem: British and French documents use the Gregorian calendar, while Russian documents of 1916 are Julian and thirteen days behind, so the same diplomatic step carries different dates in the two sets of papers.',
    levels: {
      primary: {
        cause: 'Britain and France both wanted pieces of the Ottoman Empire after the war, Britain with an eye ' +
          'to the route to India, and each distrusted the other. They also needed Italy and Russia to ' +
          'stay in the war, which meant trading promises about land.',
        what: 'In May 1916 British and French diplomats agreed how to divide most of the Ottoman Empire’s ' +
          'Arab lands between them. A line was drawn across the map: north and west would be French, ' +
          'south and east British, with some ports international.',
        consequence: 'The agreement was kept secret, but the Bolsheviks published it in 1917. Arabs who had been promised independence in return for fighting the Ottomans felt cheated, and the quarrel over that line is still part of the Middle East today.',
      },
      secondary: {
        cause: 'France wanted the Sykes-Picot settlement as the price of accepting British claims in Mesopotamia and as a guarantee of a share of the Ottoman inheritance; Britain wanted French agreement, Italian consent and Russian assent to a settlement that would also satisfy its own strategic interest in the route to India.',
        what: 'Sykes and Georges-Picot initialled a memorandum between 23 November 1915 and 3 January 1916 that divided the non-Arab Ottoman provinces into zones of direct control and of influence, with an international administration in the area between them. Russia agreed on 26 April 1916, the final terms were sent to London on 9 May and the exchange was completed on 16 May 1916.',
        consequence: 'The agreement sat alongside promises made to Hussein bin Ali in ten letters between July 1915 and March 1916 recognising Arab independence after the war, and alongside the Balfour Declaration of 1917, with no attempt to reconcile the three. Publication by the Bolsheviks in November 1917 exposed the contradiction to the Arab Revolt while it was still fighting, and San Remo in April 1920 implemented something close to the British and French zones.',
      },
      university: {
        cause: 'The agreement is the central exhibit in the argument about imperial war aims, among them the ' +
          'British route to India: whether London’s policy towards the Arabs was duplicity by design or, ' +
          'as more recent scholarship stresses, incoherence produced by competing departments, allied ' +
          'veto powers and the impossibility of promising the same ground twice.',
        what: 'Its substance was a partition negotiated by diplomats and soldiers against a background of Russian claims at the Straits and Italian demands, and it used the vocabulary of zones of influence rather than annexation because that was what the alliance system could be made to accept. The McMahon–Hussein letters were themselves hedged by exceptions, disputed geography and the phrase “not free”, which is why both sides could later claim the correspondence.',
        consequence: 'Historians disagree about how much weight the agreement deserves. One school treats it as the origin of the modern state system in the Arab Mashriq; another argues that the mandates were settled at San Remo in 1920 in response to facts on the ground that 1916 could not foresee. What is not in dispute is that the published text gave anti-imperial politics, in the region and in Britain, a document to point at.',
      },
    },
  },
  {
    id: 'battle_of_jutland',
    date: '1916-05-31',
    precision: 'day',
    title: 'The battle of Jutland in the Skagerrak',
    kind: 'battle',
    fronts: ['naval'],
    countries: ['United Kingdom', 'Germany'],
    figures: ['scheer', 'tirpitz'],
    note: 'Fought on 31 May and 1 June 1916. The Grand Fleet sailed with 151 combat ships — 28 dreadnoughts, 9 battlecruisers, 8 armoured cruisers, 26 light cruisers, 78 destroyers, a destroyer-minelayer and a seaplane carrier — against 99 German combat ships: 16 dreadnoughts, 5 battlecruisers, 6 pre-dreadnoughts, 11 light cruisers and 61 torpedo boats. Fourteen British and eleven German ships sank. The casualty figures are compiled two ways in the same article, which is why they are given here as ranges: the infobox gives 6,094 British killed, 674 wounded and 177 captured, and 2,551 German killed and 507 wounded, while the text gives total British losses of 6,784 and German losses of 3,039, or 9,823 men for both sides together. Tonnage sunk is 113,300 tons British against 62,300 tons German. The infobox records the result as inconclusive and the article notes that both sides claimed victory. Mines laid by U-75 in the run-up sank the cruiser Hampshire on 5 June, killing Lord Kitchener, Secretary of State for War, and all but twelve of the crew.',
    levels: {
      primary: {
        cause: 'The German navy was smaller than the British fleet, so it tried to catch part of it alone and destroy that. The British wanted to trap the whole German fleet and finish the blockade of Germany once and for all.',
        what: 'On 31 May 1916 the two fleets met in the North Sea off Denmark. Battlecruisers fought first, ' +
          'and three British ones blew up. The whole British fleet then came in sight of the Germans, who ' +
          'turned away and fought home in the dark.',
        consequence: 'Fourteen British ships and eleven German ones went down, and about 9,800 men were killed or wounded, more of them British. But the German fleet stayed in harbour for the rest of the war, and Britain kept control of the sea.',
      },
      secondary: {
        cause: 'Admiral Scheer’s plan was to send Hipper’s five battlecruisers north to lure Vice-Admiral Beatty’s battlecruiser squadrons onto the waiting German battle fleet, with U-boats stationed off the British anchorages. The Germans sailed on a plan changed from an attack on Sunderland to a patrol in the Skagerrak, and British signals intelligence had already put something in the way.',
        what: 'Beatty ran into Hipper earlier than either side expected and lost two battlecruisers before he saw the German battleships behind him; Jellicoe brought the Grand Fleet out of Scapa Flow in the late afternoon of 30 May, and on 31 May deployed it so as to cut the Germans off from their base. Scheer turned his fleet away twice under fire from both sides and, after sunset, broke through the British light forces in the darkness and reached home.',
        consequence: 'The British lost 14 ships and about 113,300 tons, with roughly 6,100 men killed and about 850 more wounded or captured; the Germans lost 11 ships and about 62,300 tons, with some 2,550 killed and 500 wounded. The result was recorded as inconclusive and both sides claimed victory, but the German High Seas Fleet made no further attempt to force an action in 1916.',
      },
      university: {
        cause: 'Jutland was fought inside a strategic position the Germans could not break by gunnery: the blockade, and the Grand Fleet’s numerical and gunnery advantages, which led Tirpitz to prefer survivability over gun size and to treat the fleet as a political instrument rather than a battle-winning one.',
        what: 'Operationally the German fleet did better than its tonnage allowed — better fire control, faster shells, less vulnerable magazines, and a battlecruiser design protected against the flash-fire that destroyed three British ships — while the British lost on safety doctrine rather than on construction. Jellicoe’s caution in the afternoon deployment, and Beatty’s handling of the battlecruiser squadrons, were litigated in public for a decade and are still litigated now.',
        consequence: 'The strategic verdict is the reason the battle is called inconclusive yet decisive: the German fleet’s return to port, and the decision in December 1916 to resume unrestricted submarine warfare, were both admissions that surface action had failed. That reversal turned a contested sea battle into the beginning of Germany’s defeat, and drew the United States into the war.',
      },
    },
  },
  {
    id: 'brusilov_offensive',
    date: '1916-06-04',
    precision: 'day',
    title: 'The Brusilov Offensive opens in Galicia',
    kind: 'offensive',
    fronts: ['eastern'],
    countries: ['Russia', 'Austria-Hungary', 'Germany'],
    figures: ['brusilov', 'alekseev_mikhail', 'nicholas_ii'],
    note: 'The offensive ran from 4 June 1916 — 22 May by the Julian calendar Russia then used — into September 1916. It was ordered by Tsar Nicholas II on 26 May, in response to Italian appeals for help after the Austro-Hungarian attack on the Asiago plateau, and the instruction was that Brusilov would attack on 4 June and the rest of the Russian army ten days later; General Alexei Evert, commanding the Western Front at Smolensk, refused supporting attacks, and Alexeyev told Brusilov that Evert’s front could not attack before 18 June. By mid-June Austro-Hungarian losses amounted to 205,000, of which 150,000 were prisoners, and Czernowitz fell on 17 June. Losses are given as 500,000 to 1,000,000 Russian, about 616,000 Austro-Hungarian and 148,000 to 350,000 German, and the article warns that the 500,000 figure covers only 28 May to 13 July, the first stage, for which the archives give 497,967 men of the Southwestern Front: 62,155 killed, 376,910 wounded and 59,802 missing. Graydon Tunstall called the offensive the worst crisis of the war for Austria-Hungary and the greatest victory of the Triple Entente.',
    levels: {
      primary: {
        cause: 'Russia’s allies were in trouble. Austria-Hungary had just attacked Italy, and the French and British were being bled at Verdun, so the Russian army was asked to attack early to make its enemies move troops elsewhere.',
        what: 'The attack began on 4 June 1916 in Galicia, now western Ukraine. Russian soldiers crept close ' +
          'to the enemy lines and dug tunnels under the wire, so nothing was given away. A short, precise ' +
          'bombardment covered small attacking groups, not long lines.',
        consequence: 'Austria-Hungary lost more men than it could replace, many of them prisoners, and had to be rescued by German divisions. The Russian army won its greatest victory of the war, but lost enormous numbers of men doing it.',
      },
      secondary: {
        cause: 'Nicholas II, who had taken personal command of the army in September 1915, ordered the summer offensive forward on 26 May to help the Italians and to satisfy the allies at a moment when French and British pressure was greatest. Brusilov’s plan depended on simultaneous attacks at several points to prevent the enemy from moving reserves, and on the neighbouring fronts under Evert and Kuropatkin attacking in support, which Stavka had refused and Evert opposed.',
        what: 'The Southwest Front attacked on 4 June along a broad front, so no sector could send reserves ' +
          'to another. Engineers tunnelled beneath the Russian barbed wire so that the entanglements ' +
          'stood intact to mask the assembly, and the infantry, having worked forward close to the German ' +
          'and Austro-Hungarian defences, attacked in scattered parties rather than the long lines that ' +
          'machine-guns and defensive artillery destroyed so easily. Lutsk and the Fourth Army’s supply ' +
          'dumps fell in the first week, Czernowitz on 17 June, and by mid-June Austro-Hungarian losses ' +
          'stood at 205,000 men, 150,000 of them prisoners.',
        consequence: 'The offensive stalled because Evert’s Western Front did not attack, because Brusilov had committed his reserves to the first day, and because Falkenhayn pulled German divisions out of other sectors to hold Kovel. Russian losses of 500,000 to 1,000,000 men, Austrian losses of about 616,000 and German losses variously put at 148,000 to 350,000 left the army too exhausted to repeat the success in 1917.',
      },
      university: {
        cause: 'The offensive is the high-water mark of Russian operational improvisation: mass was unavailable, so Brusilov substituted surprise, deception and the tactical breach, an approach that anticipated the storm-troop methods later credited to the German army, and that succeeded only against a multi-national army whose morale was already political in character.',
        what: 'Its scale is disputed by the way the returns were compiled. The figure of 500,000 Russian casualties covers 28 May to 13 July and the Southwestern Front alone, for which archival returns give 497,967; Austro-Hungarian losses of about 616,000 reflect an army that lost a quarter of them as prisoners, a rate that broke unit cohesion rather than merely reducing strength.',
        consequence: 'Tunstall’s judgement that this was Austria-Hungary’s worst crisis of the war and the Entente’s greatest victory sits alongside the deeper consequence: the offensive used up the reserve of trained men and officers that made the Russian army function, accelerated the demoralisation of a peasant army that had seen enough, and drew Romania into the war in August with results that ruined Russia’s own strategic position in 1917.',
      },
    },
  },
  {
    id: 'arab_revolt',
    date: '1916-06-10',
    precision: 'day',
    title: 'The Arab Revolt begins at Mecca',
    kind: 'resistance',
    fronts: ['middle_east', 'politics'],
    countries: ['Ottoman Empire', 'United Kingdom'],
    figures: ['husayn_mecca', 'feisal'],
    note: 'Hussein bin Ali’s forces attacked Medina on 5 June, but the revolt proper is dated to 10 June 1916, the day he ordered his supporters against the Ottoman garrison at Mecca. Hussein had about 50,000 men under arms, of whom fewer than 10,000 had rifles; the fighting in Mecca went on for more than a month of street fighting against outnumbered but far better armed Ottoman troops. The revolt’s flag was designed by Mark Sykes. Against the McMahon–Hussein correspondence of ten letters from July 1915 to March 1916, in which Britain agreed to recognise Arab independence after the war, stands the Sykes-Picot Agreement initialled the previous winter. In the background, the executions of Arab nationalist leaders in Damascus, following arrests and torture in Damascus and Beirut, had persuaded Hussein that he was next; Ottoman repression in Syria is one reason the revolt spread slowly there. On the wider front, the battle of Romani on 3–5 August 1916 was the last Central Powers ground attack on the Suez Canal, where the 52nd Lowland Division and the ANZAC Mounted Division defeated the Asia Corps and an Ottoman division, the ANZAC Mounted Division losing more than 300 men; the fall of Kut to the Ottomans in April had made the defence of Egypt look precarious, and by 1918 the rebels had taken Damascus.',
    levels: {
      primary: {
        cause: 'The Arabs of the Hejaz, ruled by the Ottoman Empire, had been punished for wanting to govern themselves, and their leader Hussein bin Ali feared he would be next. Britain promised to recognise Arab independence if the Arabs rose against the Ottomans.',
        what: 'On 10 June 1916 Hussein’s supporters attacked the Ottoman garrison in Mecca. Street fighting ' +
          'went on for more than a month. Only a few thousand of Hussein’s men had rifles, so most fought ' +
          'with what they had, and the Ottomans had machine-guns and artillery.',
        consequence: 'The Ottomans kept tens of thousands of soldiers in Arabia, guarding the railway and their ' +
          'garrisons instead of attacking the Suez Canal. The Arabs took Damascus at the end of the war, ' +
          'but Britain and France had already agreed how to divide the land.',
      },
      secondary: {
        cause: 'The executions of Arab nationalist leaders in Damascus after arrests and torture in Damascus and Beirut convinced Hussein that the Ottoman government meant to remove him, and rumours that he was to be replaced by Sharif Ali Haidar of the rival Zaʻid family made him decide to join the Allied side at once. He had asked McMahon in February 1916 for £50,000 in gold, weapons, ammunition and food, and McMahon’s reply of 10 March confirmed the British agreement.',
        what: 'Hussein’s sons ʻAli and Faisal opened the revolt on 5 June by attacking the Ottoman garrison at Medina and were beaten back by Fakhri Pasha’s defence; the rising proper began on 10 June at Mecca, where more than a month of street fighting followed. Hussein had about 50,000 men under arms but fewer than 10,000 rifles, and relied on tribal warriors, later supplied with rifles and machine-guns by Britain and France, whose agents also designed the revolt’s flag to encourage a sense of Arab nationhood.',
        consequence: 'The revolt’s chief military effect was to pin down tens of thousands of Ottoman troops in the Hejaz and along the railway, which helped the British defence of Egypt and their later advance into Palestine. Politically it left the sharif dependent on promises that Britain had already qualified in its agreement with France, and Damascus was proclaimed an Arab kingdom under Faisal only to be displaced by the French mandate.',
      },
      university: {
        cause: 'The revolt is best understood as a negotiation conducted by warfare: Hussein’s aim was a Hashemite state recognised by Britain, Britain’s was the immobilisation of Ottoman forces in a theatre where it could not commit divisions of its own, and the two calculations were never reconciled in writing, which is why the McMahon letters, Sykes-Picot and the Balfour Declaration could all be cited later as the governing commitment.',
        what: 'Militarily the revolt was a guerrilla campaign against a railway garrison rather than a field army: Fakhri Pasha held Medina throughout the war against a siege and repeated raids, while the main body of the revolt lay in attacks on the Hejaz railway and in the uprisings that followed Allenby’s advance. Casualty figures for the Arab side are poorly recorded, and the sources give strength in terms of rifles rather than men, which tells one everything about its character.',
        consequence: 'Historiography has moved from Lawrence’s romantic account towards a structural one, in which the revolt’s real significance was Ottoman overstretch in the Hejaz and the postwar settlement that cancelled the Arab expectations it had created. The bitterness dated from 1916, not from 1920, because the contradiction between British promises was already in existence when the first shot was fired at Mecca.',
      },
    },
  },
  {
    id: 'somme_opens',
    date: '1916-07-01',
    precision: 'day',
    title: 'The battle of the Somme begins',
    kind: 'offensive',
    fronts: ['western'],
    countries: ['United Kingdom', 'France', 'Germany'],
    figures: ['haig', 'french_john', 'gough', 'joffre'],
    note: 'The battle ran from 1 July to 18 November 1916. More than three million men fought in it and more than a million were killed or wounded. The first-day figures are compiled from formation returns and are quoted as follows in the sources: British Fourth Army casualties of 57,470, of which 19,240 were killed, the worst day in the history of the British Army; the French Sixth Army 1,590 casualties; the German Second Army 10,000 to 12,000 losses. Whole-battle totals are much more disputed: the Allied estimate made at the Chantilly Conference on 15 November 1916 claimed 630,000 German casualties against 485,000 British and French, whereas the Reichsarchiv tabulation gives 237,159 casualties of all types for the sixty-nine German divisions engaged, and modern historians regard the Allied figure as exaggerated. The last great battle of the offensive was the Ancre of 13–18 November 1916, fought by the British Fifth Army under Lieutenant-General Hubert Gough against the German First Army of General Fritz von Below; the Reserve Army had been renamed the Fifth Army on 30 October.',
    levels: {
      primary: {
        cause: 'Britain and France had agreed to attack together on the Somme, where their line was easiest to ' +
          'hold. The French had planned to do most of the fighting, but the German attack at Verdun took ' +
          'their soldiers away, so the British had to lead instead.',
        what: 'British guns shelled the German trenches from 24 June. On 1 July 1916 the infantry walked ' +
          'forward across open ground. In the north, machine-gunners safe in deep dugouts shot the ' +
          'attackers down; in the south, beside the French, the line went forward.',
        consequence: 'It was the bloodiest day the British army has ever had. The battle dragged on into November, and the idea of a great breakthrough was given up in favour of taking village after village.',
      },
      secondary: {
        cause: 'Allied strategy for 1916 had been settled at the Chantilly Conference of 6 to 8 December 1915, which assigned a joint Anglo-French offensive on the Somme to make a breach in the German front in France. The German attack on Verdun in February forced the French to divert divisions, so their contribution shrank to 13 divisions of the Sixth Army against 20 British divisions of Rawlinson’s Fourth Army, and the weight of the attack fell on a British army still learning its trade.',
        what: 'The bombardment began on 24 June, but rain spoiled observation and left wire uncut in places, ' +
          'while German machine-guns survived in deep dugouts on the reverse slopes. On the morning of 1 ' +
          'July the infantry went in over open, ploughed ground into machine-gun fire: a mine blown early ' +
          'beneath Hawthorn Ridge Redoubt had warned part of the German front, and intercepted orders and ' +
          'prisoner reports the rest. The Fourth Army lost 57,470 men, 19,240 killed, the French Sixth ' +
          'Army 1,590 and the German Second Army 10,000 to 12,000.',
        consequence: 'Haig drew the lesson that the attack must be made in stages, and from July to mid-November the offensive became a series of methodical battles for fortified villages and woods, at Albert, Bazentin Ridge, Guillemont and Morval. The Ancre of 13 to 18 November, fought by Gough’s Fifth Army against Below’s First Army, closed the battle; the army had taken its new name on 30 October.',
      },
      university: {
        cause: 'The Somme was the first great combined-arms battle of a citizen army, fought before the tools of coordination — sound-ranging, the creeping barrage controlled by ground and air observers, the tank, the infantry-platoon weapon set — had been mastered, and its cost reflects that sequence rather than any simple failure of generalship.',
        what: 'The compilation of the first-day figure is itself a historical problem: 57,470 is the Fourth Army total from divisional returns for a battle in which the objective was to break the German front, and it is not comparable with whole-battle totals, which the Allies put at 630,000 German casualties at Chantilly on 15 November while the Reichsarchiv returns 237,159 for the sixty-nine divisions engaged. Both figures coexist in the literature, and the disagreement defines the argument about what the battle achieved.',
        consequence: 'The German defensive revision of 1916–17 — the Hindenburg Line, the elastic defence, the dissolution of the rigid forward line — was the Somme’s most important result, together with the attrition of a seasoned German army that could no longer replace its trained men. The political consequence for Britain was that the Somme, not Ypres, became the war’s defining memory of the army’s price.',
      },
    },
  },
  {
    id: 'battle_of_romani',
    date: '1916-08-04',
    precision: 'day',
    title: 'The Ottoman attack at Romani fails',
    kind: 'battle',
    fronts: ['middle_east'],
    countries: ['United Kingdom', 'Australia', 'New Zealand', 'Ottoman Empire'],
    note: 'The National Army Museum dates Romani to 3 to 5 August 1916 and calls it a failed Ottoman attack. ' +
      'The Australian War Memorial dates the battle to the same three days and the main attack to early 4 ' +
      'August. NZ History dates the opening assault to the night of 3 August. This card is dated 4 ' +
      'August, the day of the main attack, and says the engagement runs 3 to 5 August. Casualty figures ' +
      'from the War Memorial’s schools page are not used.',
    levels: {
      primary: {
        cause: 'The Ottomans tried once more to threaten the Suez Canal, this time by attacking the railhead ' +
          'at Romani, east of the canal. British infantry held the position, with the Anzac Mounted ' +
          'Division, Australians and New Zealanders, beside them.',
        what: 'The fighting ran from 3 to 5 August 1916. The main attack came early on 4 August, which is the ' +
          'day this card uses. One account dates the opening assault to the night of 3 August. The ' +
          'Ottoman attack was beaten off.',
        consequence: 'Romani was the last Ottoman attempt to take the war to the canal on the ground. After it, the ' +
          'campaign in Sinai turned the other way, towards the Ottoman frontier, instead of towards Suez.',
      },
      secondary: {
        cause: 'Romani was a railhead on the desert line east of the Suez Canal, built so the Egyptian ' +
          'Expeditionary Force could move away from the waterway. An Ottoman force attacked it in the ' +
          'hope of reaching the canal again after the failure of February 1915. British infantry held the ' +
          'camp. The Anzac Mounted Division, Australian and New Zealand horsemen, was the mobile part of ' +
          'the defence. The National Army Museum calls the August repulse the end of the Ottoman campaign ' +
          'against the canal.',
        what: 'The engagement ran from 3 to 5 August 1916. The Australian War Memorial puts the main attack ' +
          'early on 4 August, and this card is dated that morning. NZ History dates the opening assault ' +
          'to the night of 3 August, so the first shots and the main effort are not the same hour. Both ' +
          'the Museum and the War Memorial record a failed Ottoman attack. Casualty figures are not ' +
          'copied from the War Memorial’s schools page. They are not confirmed by the Museum’s own entry.',
        consequence: 'The repulse ended Ottoman ground offensives against the canal. The British railway and ' +
          'pipeline could then be pushed east across Sinai without a fresh attack on the waterway hanging ' +
          'over them. Romani is named in later cards only as a victory already won. It is told here as ' +
          'the battle itself: a three-day engagement, a main effort on 4 August, and a change in the ' +
          'direction of the campaign.',
      },
      university: {
        cause: 'Romani is regularly reduced to a clause on the way to Gaza, which hides a change of strategic ' +
          'direction. Before it, Ottoman forces were still able to conceive an offensive against the ' +
          'canal. After it, the Egyptian Expeditionary Force was the side advancing, along a railway it ' +
          'controlled. The battle is small beside Gallipoli and beside the later Palestine offensive, and ' +
          'it is the hinge between them on this front. Mounted troops and infantry each have a lobby in ' +
          'the telling.',
        what: 'The three-day span is the fact the Museum and the War Memorial share. Dating the card to 4 ' +
          'August follows the War Memorial’s timing of the main attack and keeps the night of 3 August, ' +
          'recorded by NZ History, as the opening rather than as a rival battle. A schools-page casualty ' +
          'table is a teaching summary, not a confirmed return, and the Museum’s battle entry does not ' +
          'underwrite it. No figure is printed. The result both institutions state is enough: the attack ' +
          'failed, and the canal campaign was over.',
        consequence: 'Once the canal was no longer under threat, British policy in Egypt could treat Sinai as a road ' +
          'into Palestine rather than as a glacis. That is the operational consequence. The ' +
          'historiographical one is that Australian and New Zealand accounts, British infantry accounts ' +
          'and Ottoman accounts do not describe the same hours in the same order, which is why a single ' +
          'day would be false precision and a vague August date would throw away the main attack. The ' +
          'card keeps the span and the morning of the 4th, and leaves the body count to sources that ' +
          'agree.',
      },
    },
  },
  {
    id: 'romania_enters_war',
    date: '1916-08-27',
    precision: 'day',
    title: 'Romania enters the war and invades Transylvania',
    kind: 'alliance',
    fronts: ['balkans'],
    countries: ['Romania', 'Austria-Hungary', 'Germany', 'Bulgaria', 'Ottoman Empire', 'Russia'],
    figures: ['bratianu_ion', 'averescu'],
    note: 'The Romanian government signed a treaty with France, Britain, Italy and Russia on 17 August 1916 pledging to declare war on Austria-Hungary by 28 August, having concluded a military convention with General John Thomson on 13 August; three Romanian armies crossed the Carpathians on the night of 27 August new style, 14 August by the Julian calendar Romania still used. The dates of the Bulgarian and Ottoman declarations of war are disputed: Ian Beckett holds that Bulgaria declared war only after attacking on 31 August, other sources put the declaration on 30 August or 1 September, and the Ottoman declaration is placed on 29 August, 30 August or 1 September. Romania had to fight on two fronts of some 1,600 kilometres each, the longest in Europe. On 15 September the Romanian War Council suspended the Transylvania offensive to deal with Mackensen’s army group in the south, and Russian reinforcements under General Andrei Zaionchkovsky halted it before it cut the railway from Constanța to Bucharest; overall command on the German side passed to Erich von Falkenhayn, who began his own counterattack on 18 September. In the Balkans the Allied promise to attack Bulgaria was partly kept by the Monastir offensive: after the German Eleventh Army under Winckler was withdrawn, the town of Monastir (Bitola) was abandoned on 18 November and French and Russian troops entered it on 19 November, opening a route to Sofia that never exploited.',
    levels: {
      primary: {
        cause: 'Romania was neutral, but many Romanians wanted Transylvania, where over half the people spoke ' +
          'Romanian, to be part of their own country. The Allies promised it, and told Romania that ' +
          'Bulgaria and the Ottoman Empire would be attacked so that it would not fight alone.',
        what: 'On 27 August 1916 the Romanian army crossed the mountains into Transylvania and pushed against ' +
          'weak Austrian border guards. But the promised attacks on Bulgaria failed, and Germany sent ' +
          'divisions to help Austria-Hungary, while a German and Bulgarian army came at Romania from the ' +
          'south-east.',
        consequence: 'Within four months Romania had lost two thirds of its country, including its capital, and its ' +
          'government and army retreated north-east, protected by Russian troops. Romania stayed in the ' +
          'war to the end, but its army was broken and most of its land was occupied.',
      },
      secondary: {
        cause: 'The political elite and most of the public favoured the Entente because it promised Transylvania and the other Romanian-inhabited lands of Austria-Hungary; a treaty signed with France, Britain, Italy and Russia on 17 August 1916 gave written guarantees, and the military convention of 13 August promised an Allied offensive against Bulgaria and the Ottoman Empire no later than August 1916, Russian troops in Dobruja, and that the Romanian army would not be placed under Russian command.',
        what: 'Three Romanian armies, an army of more than 650,000 men in 23 divisions but poorly trained and equipped, moved into Transylvania on the night of 27 August under Hypothesis Z, the plan for an offensive in the north and a defence of southern Dobruja and Giurgiu against Bulgaria. Initial success followed against the weak frontier guards, then German divisions arrived under Erich von Falkenhayn, and August von Mackensen struck north from Dobruja; on 15 September the War Council gave up the Transylvania offensive, and Russian troops under Zaionchkovsky only just saved the railway to Constanța.',
        consequence: 'Bulgaria and the Ottoman Empire joined the war against Romania within days, though the exact dates of their declarations are disputed. Bucharest fell on 6 December 1916, two thirds of the country was occupied, and the campaign opened the argument, still argued today, over whether Ion Brătianu’s government was deceived by the Allies or deceived itself about its own army, with Alexandru Averescu’s rival influence inside the Romanian command part of the story.',
      },
      university: {
        cause: 'Romania’s decision is best explained as a small-state gamble on the timing of a war of exhaustion: the Entente’s offer of Transylvania was made in June and August 1916 when the Brusilov Offensive, the collapse of Austrian morale in Galicia and the promised Salonika blow seemed to make success cheap, and the Romanian leadership knew that the price of entry was a two-front war of 1,600 kilometres each.',
        what: 'The campaign’s failure was structural rather than a matter of one bad decision: the army lacked heavy artillery, machine-guns, transport and a cadre of trained reservists, the convention’s guarantees were not kept by either side — the Salonika offensive came late and Russian reinforcements in Dobruja were inadequate — and the Central Powers responded with a unified command under Falkenhayn that Romania had no equivalent of.',
        consequence: 'Historiography divides between a nationalist account of Allied betrayal, in which the 1916 campaign is a story of promises broken at Chantilly and Salonika, and a critical one, developed from the inter-war Averescu school onwards, which stresses Romanian operational failure and the political quarrel between the Brătianu government and the royal court. The campaign also matters as the reason the Central Powers occupied the food and oil of Wallachia in 1917 while failing to knock Romania off the list of belligerents.',
      },
    },
  },
  {
    id: 'flers_courcelette_tanks',
    date: '1916-09-15',
    precision: 'day',
    title: 'Flers-Courcelette and the first tanks in battle',
    kind: 'technology',
    fronts: ['western'],
    countries: ['United Kingdom', 'France', 'Germany'],
    figures: ['haig'],
    note: 'The battle was fought from 15 to 22 September 1916 by the British Fourth Army and Reserve Army and the French Sixth Army against the German First Army, as part of the Somme. The number of effective tanks is reported two ways: of the fifty tanks in France, 49 were assembled for the attack, 36 reached the British front line and 27 crossed no man’s land, but only six reached the third objective; the GHQ records state that by 15 September only 49 were ready and only 18 contributed to the battle, and in the XV Corps sector, where the attack on Flers was made, 14 of the 18 tanks in the area reached their jumping-off points. The capture of Flers, Courcelette and Martinpuich is described in the sources as a considerable tactical victory, with no breakthrough. Haig had ordered forty tanks after the 1916 trials, then increased the order to a hundred; despite the disappointing results of 15 September he ordered another 1,000. The Mark I was the first armoured tracked vehicle to go into battle; the “male” version carried a 6-pounder gun in each side sponson.',
    levels: {
      primary: {
        cause: 'The Western Front was full of trenches, machine-guns and wire, and infantry could not cross the open ground between the lines. Some people in Britain had invented a machine on tracks that could roll over wire and cross trenches.',
        what: 'On 15 September 1916, on the Somme, the first tanks went into battle near the villages of ' +
          'Flers and Courcelette. Most of them broke down, got stuck or lost their way, and a handful ' +
          'reached their goal. Where they came up, German soldiers ran away.',
        consequence: 'The villages were taken, but no great breakthrough happened. The tank had worked well enough that the commander-in-chief at once ordered a thousand more.',
      },
      secondary: {
        cause: 'Haig had learned of the tracked-vehicle experiments in 1915, sent observers to the trials in England in 1916 and ordered forty tanks, later a hundred; the machines were late, the crews had almost no training and the first great battle was already under way, so the tanks were committed to hold what had been gained rather than to win a decision.',
        what: 'The attack on 15 September was made by the Fourth and Reserve Armies, with the French Sixth ' +
          'Army on the right, against the German First Army. Of the fifty tanks in France, 49 were ' +
          'assembled and 36 reached the British front line, but GHQ counted only 18 that took part at all ' +
          'and only six reached the third objective. Tanks broke down, bogged, got lost or were knocked ' +
          'out, and infantry trained to follow a machine that never arrived were shot down in lanes the ' +
          'guns left uncut.',
        consequence: 'Flers, Courcelette and Martinpuich were captured, a considerable tactical success, and the German defence was stretched; but the offensive moved on to methodical fighting for ridge and village through October. The battle is remembered because it proved that the armoured vehicle could cross a battlefield, not because tanks won the battle of the Somme.',
      },
      university: {
        cause: 'The controversy about the first tank battle is a controversy about Haig. Terraine recorded in 1963 that Churchill later argued that the chance of a great victory with tanks en masse had been squandered by using them prematurely to capture “a few ruined villages”, while Wilfrid Miles wrote in 1938 that their use on 15 September was as mistaken as the German employment of gas at Ypres in 1915, wasting the surprise.',
        what: 'Sheffield wrote in 2003 that Miles’s verdict was sound, whereas Philpott in 2009 recorded German admissions that the defence nearly collapsed on the day, and pointed to mechanical unreliability as the cause of losses greater than those inflicted by German fire. The evidence on both sides rests on the same problem: 49, 36, 27, 18 and 6 are all correct counts of “tanks in action” depending on the definition used.',
        consequence: 'The battle’s real significance was institutional and doctrinal: the tanks survived the criticism, the order for 1,000 machines was placed, and the debate about concentration, training and mechanical recovery that the Somme had begun was settled at Cambrai in November 1917, when tanks were used in mass.',
      },
    },
  },
  {
    id: 'tabora_occupied',
    date: '1916-09-19',
    precision: 'day',
    title: 'Belgian troops occupy Tabora',
    kind: 'offensive',
    fronts: ['africa'],
    countries: ['Belgium', 'Germany', 'United Kingdom'],
    note: 'General Smuts’s despatch, printed in the London Gazette of 17 January 1917, says the ' +
      'Belgian forces occupied Tabora on 19 September after their operations had caused the enemy ' +
      'to retreat. The Belgian Defence centenary account says the civilian authorities ' +
      'surrendered to the Force Publique on 19 September 1916, once the last resistance at Usoke ' +
      'and Lulanguru had been broken. This card does not say the town was stormed.',
    levels: {
      primary: {
        cause: 'Tabora was the main inland town of German East Africa. Belgian colonial troops of the ' +
          'Force Publique were advancing on it, and the German force was falling back.',
        what: 'On 19 September 1916 the Belgian troops occupied Tabora after that force had left. A ' +
          'Belgian account says the civilian authorities surrendered once nearby resistance had ' +
          'been broken. The town was not stormed.',
        consequence: 'The Allies held the colony’s chief inland town. The German field force was not finished. ' +
          'It kept moving, and the East African campaign lasted another two years.',
      },
      secondary: {
        cause: 'In 1916 the war in German East Africa was no longer only a pursuit of Lettow-Vorbeck by ' +
          'British and South African troops. Belgian soldiers of the Force Publique advanced from ' +
          'the Congo side towards Tabora, the railway town of the interior. Smuts’s despatch, ' +
          'printed in the London Gazette, says their operations caused the enemy to retreat, and ' +
          'that they then occupied the town.',
        what: 'The occupation is dated 19 September in that despatch. The Belgian centenary account ' +
          'gives the same day for a surrender by the civilian authorities, after resistance at ' +
          'Usoke and Lulanguru had been broken. One wording is an occupation after a retreat. The ' +
          'other is a surrender by civilians. Neither is a storming, and this card does not call it ' +
          'one. No strength is stated.',
        consequence: 'Tabora gave the Allies the main inland town and did not give them the German field ' +
          'force, which was the part of the campaign that lasted into 1918. Treating the occupation ' +
          'as the conquest of German East Africa repeats a mistake already easy to make about ' +
          'Duala. The town changed hands. The column in the bush did not.',
      },
      university: {
        cause: 'The East African war between Tanga and the parade at Abercorn is often left blank, so ' +
          'that Lettow-Vorbeck’s reputation stands in for a campaign. Tabora is one of the events ' +
          'that blank hides. It was a Belgian occupation of the colony’s inland centre, achieved ' +
          'because the German force left, not because the town was carried by assault.',
        what: 'The London Gazette text is Smuts reporting that Belgian forces occupied Tabora on 19 ' +
          'September after the enemy retreated. The Belgian official centenary says the civilian ' +
          'authorities surrendered that day, the last resistance at Usoke and Lulanguru having been ' +
          'broken. Both sentences can be true, and they are not the same sentence. An occupation ' +
          'after a retreat, and a civic surrender, both stop short of a storm. This card keeps the ' +
          'day and refuses the stronger verb.',
        consequence: 'Restoring Tabora shows an Allied war, not only a British one, and a war of towns as well ' +
          'as of columns. The Force Publique’s entry is why a Belgian claim existed when the maps ' +
          'were redrawn. It is also why the occupation did not end the fighting. The force the ' +
          'despatch says had retreated was still an army, and it was still in the field when the ' +
          'European armistice was signed.',
      },
    },
  },
  {
    id: 'douaumont_recaptured',
    date: '1916-10-24',
    precision: 'day',
    title: 'Fort Douaumont is retaken by the French',
    kind: 'offensive',
    fronts: ['western'],
    countries: ['France', 'Germany'],
    figures: ['nivelle'],
    note: 'The French counter-offensive of October 1916 was planned by Pétain and Nivelle and commanded by General Charles Mangin, whose 5th Division had been ordered to plan the recapture of the fort in May; Mangin had wanted a preliminary attack on the ravines to block the routes of a German counter-attack, but more divisions were refused to preserve troops for the Somme, leaving him one division for the attack and one in reserve. The Germans had partly evacuated Douaumont, and it was recaptured on 24 October by French marines and colonial infantry; more than 6,000 prisoners and fifteen guns were taken by 25 October, but a simultaneous attempt on Fort Vaux failed. Pétain had been promoted to command the Groupe d’armées du centre at the beginning of May 1916 and Nivelle had taken over the Second Army at Verdun. Fort Vaux was recovered in December and the battle ended on 18 December 1916 with the French holding the ground they had defended.',
    levels: {
      primary: {
        cause: 'The Germans had taken the great fort of Douaumont at Verdun in February and had held it ever since, firing its guns at the French lines. After nine months the French army was ready to attack again, with more guns and better plans.',
        what: 'On 24 October 1916 French marines and colonial soldiers attacked up the slopes. The Germans ' +
          'had moved many of their men out of it, and the French were on top of it before the defenders ' +
          'could react. Thousands of German soldiers surrendered the next day.',
        consequence: 'Douaumont, the symbol of the French defeat in February, was back in French hands, and the fort ' +
          'of Vaux followed in December. The German army at Verdun had been fought to a standstill and ' +
          'the battle ended that month with the French holding the ground.',
      },
      secondary: {
        cause: 'General Philippe Pétain, who had stabilised Verdun in the spring, was moved to command an army group at the beginning of May 1916 and General Robert Nivelle took over the Second Army, bringing with him a more aggressive method of limited, firepower-heavy attacks. Nivelle ordered General Charles Mangin to plan the recapture of Douaumont; Stavka refused him the extra divisions he asked for in order to keep troops for the Somme.',
        what: 'The attack on 24 October was made by French marines and colonial infantry behind a heavy artillery preparation, against a fort the Germans had partly evacuated. The garrison was overwhelmed quickly; by 25 October the French had taken more than 6,000 prisoners and fifteen guns, though the parallel attack on Fort Vaux failed.',
        consequence: 'The fall of Douaumont reversed the most shocking single loss of the battle and gave the French army a morale victory of real weight; Mangin’s reply to German officers who complained about their captivity — that they regretted it, but had not expected so many of them — entered the history of the battle. The French recovered Vaux in December, and the battle closed on 18 December 1916 with the German army defeated in its object.',
      },
      university: {
        cause: 'The October success was the practical expression of a doctrinal argument inside the French army: Pétain’s elastic defence and artillery economy against Nivelle’s conviction that a methodically prepared attack could break the enemy’s morale as well as his positions. Joffre had already moved Pétain out of direct command at Verdun in favour of the more aggressive approach.',
        what: 'The attack was a set-piece of the new firepower system — heavy guns registered by aircraft and sound-ranging, an infantry advance tied to a lifting barrage, and objectives limited to what the guns could cover — and its scale of success, 6,000 prisoners, owed much to German dispersion and evacuation rather than to the storming of an intact fortress.',
        consequence: 'Nivelle’s credit from Douaumont and the December fighting led directly to his appointment to command the armies in France and to the Chemin des Dames offensive of April 1917, whose failure and the mutinies that followed it are part of the battle’s inheritance. The Verdun method was thus both the model for 1917 and, in its over-extension, one of the causes of the crisis of that year.',
      },
    },
  },
  {
    id: 'ali_dinar_killed',
    date: '1916-11-06',
    precision: 'day',
    title: 'Ali Dinar is killed near Giuba',
    kind: 'battle',
    fronts: ['africa'],
    countries: ['United Kingdom'],
    note: 'The Sudan despatch printed in the London Gazette of 29 May 1917 says Ali Dinar was ' +
      'surprised at dawn on 6 November near Giuba, and that his body was found about a mile from ' +
      'the camp. An article in the Royal Air Force Air Power Review says mounted troops caught ' +
      'his force on 6 November in the area of Jebel Juba, and that he was killed in the attack, ' +
      'which the article treats as the end of the campaign. Giuba and Jebel Juba are the two ' +
      'names for the place. This card does not repeat the despatch’s counts of rifles, camels or ' +
      'cattle, and it does not describe the wound.',
    levels: {
      primary: {
        cause: 'Ali Dinar, the sultan of Darfur, had risen against the government of the Sudan. A ' +
          'British-Egyptian column was sent in pursuit of him.',
        what: 'At dawn on 6 November 1916 the column caught his party. One account names the place ' +
          'Giuba and another Jebel Juba. Ali Dinar was killed. The wound is not described, and no ' +
          'count of animals or rifles is given.',
        consequence: 'His death ended the rising in Darfur. It was a side-campaign of the wider war, dated to ' +
          'the morning the column caught him, not a battle on a European front.',
      },
      secondary: {
        cause: 'Darfur had been pulled into the war by Ali Dinar’s rising against the Anglo-Egyptian ' +
          'administration of the Sudan. A pursuing column of British and Egyptian troops followed ' +
          'his party into the desert. The Sudan despatch, printed in the London Gazette, and a ' +
          'later study in the Royal Air Force Air Power Review, both treat 6 November 1916 as the ' +
          'day that pursuit ended.',
        what: 'The despatch says he was surprised at dawn near Giuba. The Air Power Review says the ' +
          'mounted troops caught his force in the area of Jebel Juba and that he was killed in the ' +
          'attack. The two names are kept, because the card will not pretend they are a settled ' +
          'spelling. Nothing is added from the despatch’s lists of rifles, camels and cattle, and ' +
          'the manner of the wound is not described. The shared facts are the day, the pursuit and ' +
          'the death.',
        consequence: 'The Air Power Review treats the action as the end of the campaign, which is the ' +
          'political point as well as the military one: Darfur’s rising did not continue after the ' +
          'sultan was killed. The episode sits far from the East African column and from the ' +
          'European fronts. It is still part of the war’s African map, and it has a morning the two ' +
          'accounts share.',
      },
      university: {
        cause: 'Darfur in 1916 is the sort of campaign imperial histories file as a frontier affair and ' +
          'then drop. It belongs on a card because it was a war government suppressing a sultan who ' +
          'had taken the war’s side against it, and because the end of that suppression can be ' +
          'dated from a despatch and from a later service study that do not depend on each other. ' +
          'The temptation is to decorate the death. The sources do not require that.',
        what: 'What they require is narrower. Dawn on 6 November, a surprise of Ali Dinar’s party, and ' +
          'his death. The place is Giuba in the Gazette and Jebel Juba in the Air Power Review, so ' +
          'the card carries both names and does not adjudicate them. The Gazette’s inventory of ' +
          'rifles, camels and cattle is one despatch’s accounting. It is not repeated. Nor is any ' +
          'description of how he was wounded. A death in a pursuit is not improved by those ' +
          'details, and the second house is not being used to confirm them.',
        consequence: 'Ending the rising at a single dawn action let the Sudan government treat Darfur as ' +
          'closed while the wider war went on. That is an administrative fact as much as a military ' +
          'one, which is why a Gazette despatch matters beside the fight. The card’s limit is also ' +
          'its point. A dated death, a disputed place-name, and no borrowed inventory: anything ' +
          'fuller would be choosing details only one of the two accounts is offering.',
      },
    },
  },
  {
    id: 'franz_joseph_death',
    date: '1916-11-21',
    precision: 'day',
    title: 'Franz Joseph dies and Karl I succeeds',
    kind: 'politics',
    fronts: ['politics'],
    countries: ['Austria-Hungary'],
    figures: ['franz_joseph', 'karl_i', 'bethmann_hollweg', 'wilson_us'],
    note: 'Franz Joseph died at the Schönbrunn Palace on the evening of 21 November 1916, aged 86, of pneumonia of the right lung contracted after catching a cold while walking in the Schönbrunn park with King Ludwig III of Bavaria; he had reigned from 2 December 1848. Karl succeeded to the thrones on the same day, took the title of Supreme Commander of the Austro-Hungarian Army on 2 December 1916, succeeding Archduke Friedrich, and was crowned King of Hungary on 30 December. The 2 December date sometimes given for the death is the anniversary of the 1848 accession and the day Karl assumed supreme command, and 30 December is the Hungarian coronation; neither 30 November nor 2 December is supported for the death by the sources used here. On 12 December 1916, once Romania was largely conquered, Chancellor Bethmann Hollweg proposed peace negotiations in the Reichstag on behalf of the Central Powers, and President Wilson sent a note to all the belligerents on 18 December.',
    levels: {
      primary: {
        cause: 'The emperor of Austria-Hungary had been on his throne for almost sixty-eight years, and he was the oldest ruling monarch in Europe. He caught a cold on a walk outside in late November 1916, and it turned into pneumonia.',
        what: 'Franz Joseph died at the Schönbrunn Palace in Vienna on the evening of 21 November 1916. He was eighty-six years old and had started the war in 1914. His young great-nephew Karl became emperor on the same day.',
        consequence: 'The man who held the many peoples of Austria-Hungary together was gone, and a ruler with no experience of governing took his place. A few weeks later the Central Powers asked their enemies to talk about peace.',
      },
      secondary: {
        cause: 'Franz Joseph had ruled since 2 December 1848 and gave the war its declaration of war against Serbia in 1914; his death removed the personal symbol that had kept the dual monarchy’s arguments bearable. His successor, born in 1887, had been kept out of independent commands during the war and came to the throne with no record of his own.',
        what: 'He died of pneumonia of the right lung at Schönbrunn on the evening of 21 November 1916, having caught a cold while walking in the park with King Ludwig III of Bavaria. Karl succeeded him that day, took over the supreme command of the army on 2 December from Archduke Friedrich, and was crowned King of Hungary on 30 December 1916.',
        consequence: 'The change of reign fed the peace feelers of December 1916: Bethmann Hollweg announced in the Reichstag on 12 December, with Romania all but conquered, that the Central Powers were ready to negotiate, and Wilson sent his own note to the belligerents on 18 December. Karl went further than his ally in private, using Prince Sixtus of Bourbon-Parma as an intermediary with the Allies, an attempt exposed in the Sixtus Affair of April 1918; he was the last Habsburg to rule.',
      },
      university: {
        cause: 'The succession matters to the historiography of the Dual Monarchy because legitimacy there was personal rather than constitutional: with the emperor of 1848 gone, the bond between dynasty and peoples became an explicit political bargain, at the moment when the war’s material strain made every nationality calculate its own future.',
        what: 'The peace initiative of December 1916 was made from apparent strength, immediately after the occupation of Bucharest, which is partly why the Entente answered it coolly and why the decision for unrestricted submarine warfare in January 1917 overrode Austrian wishes. Karl’s attempts to separate Vienna’s war aims from Berlin’s, and the trialist schemes pushed on him in October 1918, show a government negotiating from dependence on an ally it could not control.',
        consequence: 'Historians therefore date the end of the monarchy not to 1918 but to the winter of 1916, when its last universally recognised emperor died and his successor inherited a war he wanted to leave without the means to force the terms he needed. The confusion of the dates in popular timelines — 30 November, 2 December — is itself a measure of how little the event was allowed to mean at the time.',
      },
    },
  },
  {
    id: 'bucharest_falls',
    date: '1916-12-06',
    precision: 'day',
    title: 'Bucharest is occupied',
    kind: 'battle',
    fronts: ['balkans'],
    countries: ['Romania', 'Germany', 'Austria-Hungary', 'Bulgaria', 'Ottoman Empire', 'Russia'],
    figures: ['falkenhayn'],
    note: 'The battle of Bucharest, also called the Argeș–Neajlov Defensive Operation, was the last battle of the Romanian campaign of 1916. Romanian and Russian forces of roughly 150,000 men were commanded by General Constantin Prezan, who had been appointed to lead First Army with the task of organising the defence of the capital, and worked with General Henri Berthelot of the new French military mission; the Central Powers’ forces were led by August von Mackensen and Erich von Falkenhayn. Prezan attacked on 1 December into the 20-kilometre gap between the two enemy groups, and only the arrival of the Turkish 26th Infantry Division on 2 December saved Mackensen’s group from encirclement; on 4 December Mackensen’s Danube Army, containing German, Bulgarian, Ottoman and Austro-Hungarian troops, won the battle of the Argeș. Bucharest and the oil town of Ploiești were occupied on 6 December (21 November by the Julian calendar used in Romanian and Russian documents at the time), the government and the remnants of the army retreated into Moldavia and re-established the capital at Iași, and on 11 December German and Austro-Hungarian troops crossed the Ialomița. A Romanian holding action at Prunaru on 28 November had cost the attackers 700 prisoners and 20 guns.',
    levels: {
      primary: {
        cause: 'German, Austrian, Bulgarian and Ottoman armies had pushed into Romania from the north and the south-east since the summer. The Romanian army tried one last attack to keep them out of its capital.',
        what: 'The attack of 1 December broke in before the enemy could be surrounded, and by 4 December the ' +
          'armies under Mackensen and Falkenhayn had won the battle on the Argeș. German troops marched ' +
          'into Bucharest on 6 December 1916, and Ploiești, the oil town.',
        consequence: 'The Romanian government and what was left of its army fell back north-east into Moldavia and ' +
          'carried on the war from Iași, shielded by Russian troops. Most of Romania was now occupied, ' +
          'and its grain and oil were taken by the Central Powers.',
      },
      secondary: {
        cause: 'After the collapse in Dobruja and the loss of the Carpathian passes, the Romanian political authorities appointed General Constantin Prezan to command First Army with the immediate task of organising the defence of Bucharest, and with General Henri Berthelot of the French military mission he planned a surprise blow at the junction between Mackensen’s and Kühne’s forces.',
        what: 'Seven divisions attacked on 1 December against a 20-kilometre gap between Mackensen and Falkenhayn, pinning the Germans in front while the flanks closed in; the 26th Turkish Infantry Division arrived on 2 December and saved Mackensen’s group from encirclement. Mackensen’s Danube Army then won the battle of the Argeș on 4 December, and German troops entered Bucharest on 6 December, Ploiești falling at the same time.',
        consequence: 'The court, the government and the broken army withdrew to Iași in Moldavia and continued the campaign under Russian protection, while occupied Romania was exploited for grain and oil and Mackensen took charge of the military administration. Two thirds of the country was in enemy hands when the armistice of December 1917 left Romania alone and a crippling treaty was imposed.',
      },
      university: {
        cause: 'The loss of the capital was the operational outcome of the campaign’s structure: Romania fought on two fronts of some 1,600 kilometres each against a unified Central Powers command, without heavy artillery or enough trained reserves, and the Allied blows at Salonika and from Russia came too late to relieve Dobruja, where the fall of Giurgiu secured the Danube for the invaders.',
        what: 'The counter-battle of 1–5 December is worth study because it very nearly worked: the Romanian attack exploited the seam between two enemy groups and forced a reversal of Falkenhayn’s flank, and only Ottoman reinforcement and the arrival of fresh German divisions restored the situation. The sources note that the battle of Bucharest was a tactical defeat that failed in its strategic object, since the Central Powers did not eliminate Romania from the war.',
        consequence: 'The occupation created the facts of 1917: an administered Romania supplying German food and oil, a government-in-exile at Iași, and the political struggle between Brătianu, the court and Averescu over responsibility, which shaped Romanian inter-war politics and the historiography of the campaign. It also gave the Entente a case about small-state promises that the war’s settlement could not honour.',
      },
    },
  },
  {
    id: 'battle_of_magdhaba',
    date: '1916-12-23',
    precision: 'day',
    title: 'The Anzac mounted troops take Magdhaba',
    kind: 'battle',
    fronts: ['middle_east'],
    countries: ['United Kingdom', 'Australia', 'New Zealand', 'Ottoman Empire'],
    note: 'The National Army Museum dates the Battle of Magdhaba to 23 December 1916, a British, ' +
      'Australian and New Zealand victory in Sinai. The Australian War Memorial records the ' +
      'action on that day, fought by Major-General Chauvel’s Anzac Mounted Division with the ' +
      'Imperial Camel Corps. Its list of Australian engagements, drawn from the Battles ' +
      'Nomenclature Committee, gives the same day. No strength and no prisoner count are given. A ' +
      'clause in the later Gaza card names the action and does not narrate it.',
    levels: {
      primary: {
        cause: 'After the Ottoman attack at Romani failed, the army in Egypt was pushing east across ' +
          'Sinai. An Ottoman post at Magdhaba stood on the road beyond El Arish.',
        what: 'On 23 December 1916 the Anzac Mounted Division, with the Imperial Camel Corps, took the ' +
          'post. A London museum and the Australian War Memorial both date the action to that day. ' +
          'No strength and no prisoner count are given.',
        consequence: 'Magdhaba helped clear the Sinai road. A later card names it only as a victory already ' +
          'won. The fight itself is this one, and it is not the battle of Gaza.',
      },
      secondary: {
        cause: 'El Arish was behind the advance, and the railway was coming east. Magdhaba, an Ottoman ' +
          'post on the road beyond it, was the next obstacle in Sinai. Major-General Chauvel’s ' +
          'Anzac Mounted Division, Australians and New Zealanders, attacked it with the Imperial ' +
          'Camel Corps. The National Army Museum calls the result a British, Australian and New ' +
          'Zealand victory.',
        what: 'The Museum and the Australian War Memorial both date the battle to 23 December 1916. The ' +
          'War Memorial’s list of engagements, taken from the Battles Nomenclature Committee, gives ' +
          'the same day. That agreement is the card. A strength, or a count of prisoners, is not. A ' +
          'clause in the first Gaza card that lists Magdhaba with Romani and Rafa is a mention. It ' +
          'is not an account of this day.',
        consequence: 'The capture confirmed that the campaign had turned away from the canal and towards the ' +
          'frontier. Magdhaba is often pressed into a list of desert victories on the way to Gaza. ' +
          'The list is not the battle. This card is the battle: one day, a mounted attack on a ' +
          'post, and no borrowed total for anyone who was captured.',
      },
      university: {
        cause: 'Magdhaba is a victim of the sentence that clears Sinai in a clause. Romani, Magdhaba and ' +
          'Rafa are three actions in three different months, and for a long time only Romani had a ' +
          'card. The clause is not coverage. The day of this battle is not actually in dispute. ' +
          'What the sources will not be asked to settle is a number: how many men attacked, and how ' +
          'many prisoners were taken.',
        what: 'The day is well supported. A museum timeline, a War Memorial battle record and a ' +
          'nomenclature list used by that memorial all give 23 December 1916. Chauvel’s division ' +
          'and the Imperial Camel Corps are the formation the War Memorial names, and the card ' +
          'stops at that description. No strength is added. The Gaza card’s clause remains a ' +
          'pointer to a victory already won. It does not become a source for what happened at the ' +
          'post.',
        consequence: 'Giving Magdhaba its own day changes the Sinai campaign from a single clearance into a ' +
          'sequence: Romani in August, this post in December, Rafa in January, and Gaza in March. ' +
          'That is how an army walked off a defensive line at the canal and arrived in front of a ' +
          'town in Palestine. The December step is small. It is still a separate action, and it is ' +
          'dated.',
      },
    },
  },
  {
    id: 'rasputin_murdered',
    date: '1916-12-30',
    precision: 'day',
    title: 'Rasputin is murdered in Petrograd',
    kind: 'politics',
    fronts: ['politics', 'home'],
    countries: ['Russia'],
    figures: ['rasputin', 'nicholas_ii'],
    note: 'The murder took place in the early morning of 30 December 1916, which was 17 December in the calendar then used in Russia, in the courtyard of the Moika Palace in Petrograd. The conspirators were a group of nobles led by Vladimir Purishkevich, Grand Duke Dmitri Pavlovich and Prince Felix Yusupov, who believed Rasputin’s influence over Empress Alexandra threatened the empire. He died of three gunshot wounds, one of them a close-range shot to the forehead; the official autopsy report was lost, but the examining doctor later stated that the body showed severe trauma, including the three gunshot wounds, a slice wound on the left side and other injuries many of which he thought had been inflicted after death. The familiar story of poison, shootings that failed to kill and a body that revived comes from Yusupov’s memoir, and the sources stress that little about the killing is certain.',
    levels: {
      primary: {
        cause: 'A wandering holy man, Rasputin, had won the empress’s trust, because he seemed the only one ' +
          'who could ease the pain of the sick heir. Many in Russia thought he ruled the government ' +
          'through her, and nobles decided he must be stopped.',
        what: 'On the night of 29 and 30 December 1916, Prince Yusupov and his friends, among them a grand ' +
          'duke, lured Rasputin into their palace in Petrograd and shot him. Three gunshots killed him, ' +
          'one of them fired at him from close range in the forehead.',
        consequence: 'The murder did not save the monarchy. People went on talking about the emperor’s weakness and about corruption at the top, and within two months of the killing the emperor lost his throne.',
      },
      secondary: {
        cause: 'Rasputin’s influence over Alexandra, and the succession of unpopular ministers that came with it, had made the court the target of respectable opinion in Petrograd, and conspirators including Purishkevich, Grand Duke Dmitri Pavlovich and Yusupov decided that killing him was a patriotic act that might restore the credibility of the government.',
        what: 'Rasputin was lured to the Moika Palace in the early hours of 30 December 1916 and shot in the courtyard by Purishkevich, having first been shot in the palace; he died of three gunshot wounds, including a close-range shot to the forehead. The examination of the body recorded a slice wound to the left side and other injuries, which the doctor believed had been inflicted after death, and Purishkevich spoke openly about the killing to soldiers and a policeman within hours.',
        consequence: 'The killers were treated leniently, which confirmed the public’s sense that the regime was rotten at the top. Historians argue that Rasputin’s scandalous reputation helped discredit the tsarist government and so hastened the fall of the Romanov dynasty shortly after his death.',
      },
      university: {
        cause: 'The murder is usually interpreted as a defensive act by a ruling class that could see the dynasty discrediting itself and had no constitutional means of removing an influence it regarded as fatal; the failure of the conspirators to distinguish between curing the court and curing the regime is the political point of the story.',
        what: 'The evidential position is poor: Yusupov’s memoir, the source of the poisoning and resurrection narrative, is contradicted by the medical findings and by Purishkevich’s own frank account, and the official autopsy report has been lost, so the sources concede that little is certain about how Rasputin died. Historians such as Smith have reconstructed the killing from police and press material produced within hours of it.',
        consequence: 'Its significance is reputational rather than strategic. The Rasputin affair converted dynastic legitimacy into gossip among the educated classes, which is why the February Revolution that followed two months later met almost no defenders of the monarchy among people who had been loyal in 1914.',
      },
    },
  },

  {
    id: 'third_ohl_appointment',
    date: '1916-08-29',
    precision: 'day',
    title: 'Hindenburg and Ludendorff take command of Germany’s war effort',
    kind: 'politics',
    fronts: ['politics', 'western'],
    countries: ['Germany'],
    figures: ['hindenburg', 'luddendorff'],
    note: 'On 29 August 1916 Paul von Hindenburg became Chief of the General Staff and Erich Ludendorff First Quartermaster General, after Falkenhayn was removed following the failure at Verdun and the Romanian entry. The two men ran the army and much of the civilian war effort until 1918; historians call the arrangement a "silent dictatorship" because it was military power exercised through civilian institutions rather than a formal coup.',
    levels: {
      primary: {
        cause: 'Germany’s commander had failed to win the war, and the generals wanted more control over how it was fought.',
        what: 'In August 1916 two generals, Hindenburg and Ludendorff, were put in charge of the German army and its war plans.',
        consequence: 'They made most of the important decisions for the rest of the war, including about food, factories and peace talks.',
      },
      secondary: {
        cause: 'The stalemate at Verdun, the exhaustion of the army and Romania’s entry into the war destroyed Falkenhayn’s standing.',
        what: 'Hindenburg became Chief of Staff and Ludendorff his deputy, but the two shared decisions; Ludendorff drove the daylight submarine campaign, the unrestricted U-boat campaign of 1917, and the offensives of 1918.',
        consequence: 'Their authority reached beyond the army into labour policy, food supplies and diplomacy, and they forced the government to accept terms that civilians could not easily refuse.',
      },
      university: {
        cause: 'The appointment marks the shift from a war run by a chief of staff to one run by an army triumvirate that answered to itself and to the Kaiser only nominally.',
        what: 'Hindenburg supplied the prestige and Ludendorff the detail; the division of labour is why the period is sometimes called the dictatorship of Hindenburg and Ludendorff and sometimes simply Ludendorff’s dictatorship.',
        consequence: 'Their decision to resume unrestricted submarine warfare in 1917, taken against the wishes of the civilian government, brought the United States into the war — the clearest example of military authority overriding political judgement.',
      },
    },
  },
  {
    id: 'lloyd_george_premiership',
    date: '1916-12-07',
    precision: 'day',
    title: 'Lloyd George becomes British prime minister',
    kind: 'politics',
    fronts: ['politics'],
    countries: ['United Kingdom'],
    note: 'David Lloyd George replaced H. H. Asquith as prime minister on 7 December 1916, after disagreement over the conduct of the war and the formation of a small war cabinet. At the time Britain had suffered a year of heavy losses on the Somme and was short of men and munitions; Lloyd George promised a more vigorous prosecution of the war, but his authority was greatest in 1917-18 when he forced the creation of the Supreme War Council and drove the negotiations that ended the war.',
    levels: {
      primary: {
        cause: 'Many people in Britain thought the government was not running the war well enough.',
        what: 'In December 1916 David Lloyd George became prime minister and formed a small group of ministers to make the main decisions.',
        consequence: 'Britain’s war effort was now directed more tightly from the centre, though the fighting did not improve quickly.',
      },
      secondary: {
        cause: 'Asquith’s coalition had failed to agree on strategy or to impose civilian control over the generals, and the Somme campaign had cost a great deal for little ground.',
        what: 'Lloyd George formed a five-member War Cabinet and pressed for convoys, for a unified command on the Western Front and for better coordination with France and Italy.',
        consequence: 'He won the 1918 election and led the negotiations at Paris; his reputation as the man who won the war rests on the last year as much as on his earlier reforms.',
      },
      university: {
        cause: 'The change of government is part of the wider argument about whether the war was won by generals or by statesmen who organised industry, shipping and finance.',
        what: 'Lloyd George’s promise of a more vigorous war did not produce a quick victory: 1917 brought French mutinies, the U-boat crisis and the failure at Passchendaele.',
        consequence: 'His later claim to have directed the victory is contested by historians who emphasise the army’s recovery in 1918, but no British prime minister before him had built such a powerful peacetime state in so short a time.',
      },
    },
  },


  {
    id: 'portugal_enters_war',
    date: '1916-03-09',
    precision: 'day',
    title: 'Germany declares war on Portugal',
    kind: 'politics',
    fronts: ['politics', 'naval'],
    countries: ['Portugal', 'Germany'],
    note: 'Germany declared war on Portugal on 9 March 1916 after the Portuguese government, under Allied pressure, requisitioned German and Austro-Hungarian ships in its ports on 23 February. Portugal seized German shipping in reply, joined the Allied war effort and sent an expeditionary corps to France in 1917; fighting also continued between Portuguese and German forces in Angola and Mozambique. The change of colour on the map is dated to the declaration, not to the ship seizures.',
    levels: {
      primary: {
        cause: 'Portugal had been neutral, but its African colonies lay open to Germany, and both sides were ' +
          'trying to use its ports and its ships.',
        what: 'In February 1916 Portugal took over German ships in its harbours. Germany answered by ' +
          'declaring war on 9 March 1916.',
        consequence: 'Portugal joined the Allies and later sent soldiers to fight in France and in Africa, so the ' +
          'war was colonial as well as European.',
      },
      secondary: {
        cause: 'Britain wanted German shipping denied to Germany. Portugal depended on sea trade with Britain, ' +
          'and it was exposed to German attack in its African colonies, so the war reached it by sea and ' +
          'in Africa together.',
        what: 'The requisition of enemy shipping in February was followed by a German declaration of war on 9 ' +
          'March. Portugal then confiscated German ships and entered the war on the Allied side, ' +
          'committed in Africa and on the sea as well as in Europe.',
        consequence: 'The Portuguese Expeditionary Corps reached Flanders in 1917 and suffered heavy losses in the ' +
          'German Lys offensive of April 1918. Portugal was also fighting in its African colonies, and ' +
          'the war strained the young republic at home.',
      },
      university: {
        cause: 'Portugal shows how neutrality could be eroded by economic dependence and by the vulnerability ' +
          'of its African colonies, rather than by a decision about the central European balance of ' +
          'power.',
        what: 'The government’s choice was contested at the time and contributed to the political crisis that ' +
          'brought Sidónio Pais to power in December 1917. By then Portugal was at war in Flanders and in ' +
          'Africa.',
        consequence: 'The war did not solve Portugal’s colonial or financial problems. The map records a single ' +
          'colour change, while the real process ran through shipping law, the fighting in the African ' +
          'colonies, and domestic politics.',
      },
    },
  },

];
