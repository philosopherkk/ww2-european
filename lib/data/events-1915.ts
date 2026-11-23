import type { WW1Event } from './types';

/**
 * 1915. One card in every month at least, dates and figures checked
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
    id: 'suez_canal_raid',
    date: '1915-02-03',
    precision: 'day',
    title: 'The Ottoman attempt on the Suez Canal',
    kind: 'raid',
    fronts: ['middle_east'],
    countries: ['Ottoman Empire', 'United Kingdom'],
    figures: ['djemal_pasha'],
    note: 'The Australian War Memorial dates the first Ottoman attack on the canal to 3 February 1915 and ' +
      'says it was repulsed. The National Army Museum dates the operation 28 January to 3 February 1915 ' +
      'and says the Ottomans failed to capture the canal. Broader accounts open the approach on 26 ' +
      'January. This card dates the crossing attempt to 3 February and gives no casualty figure, because ' +
      'the accounts do not agree and only one of them offers a number.',
    levels: {
      primary: {
        cause: 'Djemal Pasha led an Ottoman force across the Sinai towards the Suez Canal, which British ships ' +
          'needed. The march brought them to the canal bank near Ismailia. They meant to get across.',
        what: 'On 3 February 1915 they tried to lay pontoons across the canal and were driven off. Fighting ' +
          'on the approach began in late January. The crossing attempt itself is this day. No casualty ' +
          'figure is given, because the accounts do not agree.',
        consequence: 'The canal stayed open and British ships kept using it. The raid failed to break the defence of ' +
          'Egypt. It showed that an Ottoman army could cross Sinai, and that it could be stopped at the ' +
          'water.',
      },
      secondary: {
        cause: 'Control of the Suez Canal kept British sea routes to India and the dominions open. Djemal ' +
          'Pasha, the Ottoman commander in Syria, took a force across Sinai to close it. The approach ' +
          'fighting is dated from late January: the National Army Museum opens its window on 28 January, ' +
          'and broader accounts from 26 January. The force reached the canal near Ismailia with pontoons ' +
          'for a crossing.',
        what: 'On 3 February 1915 the Ottomans tried to put those pontoons across the canal and were driven ' +
          'off. The Australian War Memorial calls this the first Ottoman attack on the canal and says it ' +
          'was repulsed. The National Army Museum’s window runs from 28 January to 3 February and records ' +
          'a failure to capture the canal. This card uses 3 February for the crossing attempt, and it ' +
          'does not import a casualty figure.',
        consequence: 'The canal remained an Allied waterway, and the defence of Egypt held. The raid did not become ' +
          'an occupation of the east bank. It did fix the canal in Ottoman planning as a target that had ' +
          'been reached and missed, which is why later fighting in Sinai still pointed at Suez. The next ' +
          'Ottoman ground offensive against the canal came in 1916, at Romani, and that too failed.',
      },
      university: {
        cause: 'The February attempt is easy to skip because Gallipoli, later in the spring, dominates every ' +
          'account of the Ottoman war in 1915. Sinai was a separate idea: a march across desert to cut ' +
          'the imperial artery, run by Djemal’s command in Syria rather than by the army at the ' +
          'Dardanelles. Logistics, water above all, shaped it as much as the British defence on the west ' +
          'bank. The raid tests whether the canal was a real objective or a gesture.',
        what: 'The day that is firm is the crossing attempt. The War Memorial places the first attack on 3 ' +
          'February 1915 and records a repulse. The National Army Museum frames a failure to capture the ' +
          'canal across 28 January to 3 February. Opening the approach on 26 January, as broader accounts ' +
          'do, changes the length of the operation and not the day of the attempt on the water. Casualty ' +
          'figures are omitted: the published numbers do not match, and only one account supplies a ' +
          'figure at all.',
        consequence: 'A failed crossing left the canal open and left the Ottoman force with a desert line of supply ' +
          'it could not easily use again at once. Operational histories treat Romani in 1916 as the last ' +
          'ground offensive against the canal, which makes February 1915 the first of two attempts rather ' +
          'than a curiosity. Political histories of Egypt stress the opposite scale: a raid that never ' +
          'closed the waterway did not shake the British position in Cairo. Both readings can be true, ' +
          'and neither needs a body count to be told.',
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
    id: 'singapore_mutiny',
    date: '1915-02-15',
    precision: 'day',
    title: 'The 5th Light Infantry mutinies in Singapore',
    kind: 'politics',
    fronts: ['politics'],
    countries: ['United Kingdom', 'India'],
    note: 'The National Library Board of Singapore dates the revolt of the Right Wing of the 5th ' +
      'Light Infantry to 15 February 1915. Tim Harper, writing in Modern Asian Studies in 2013, ' +
      'dates the mutiny of the Indian 5th Light Infantry at Alexandra Barracks to the same day. ' +
      'An Imperial War Museum photograph caption uses that day as well, and it is not the second ' +
      'house. How many people were killed, and how many mutineers were later executed, is not ' +
      'stated. The Library Board’s own articles do not agree, and Harper’s count is a further ' +
      'figure.',
    levels: {
      primary: {
        cause: 'Indian soldiers of the 5th Light Infantry were stationed at Singapore, a British port, ' +
          'while the regiment waited to go on. Part of the unit turned against its officers.',
        what: 'On 15 February 1915 the Right Wing mutinied at Alexandra Barracks. European residents ' +
          'and officers were killed. Over the following days local volunteers and Allied ships in ' +
          'the port helped suppress the mutiny. No death count is given.',
        consequence: 'The port was brought back under control. The mutiny showed that Indian troops held far ' +
          'from Europe could become a crisis of their own. How many died, and how many were later ' +
          'executed, is left out because the accounts do not agree.',
      },
      secondary: {
        cause: 'The 5th Light Infantry was an Indian regiment in Singapore, on the sea route between ' +
          'India and the fronts further east. In February 1915 its Right Wing mutinied at Alexandra ' +
          'Barracks. The National Library Board of Singapore and a Cambridge University Press study ' +
          'both date the outbreak to 15 February. European residents and officers were killed ' +
          'before the mutiny was put down.',
        what: 'Control was restored over the following days, with help from local volunteers and from ' +
          'Allied ships then in the harbour. This card dates the outbreak, which the two houses ' +
          'share, and does not turn the suppression into a second dated event. It gives no figure ' +
          'for the dead and none for mutineers afterwards executed. The Library Board’s articles ' +
          'disagree, and the Cambridge count is another figure rather than a settlement.',
        consequence: 'The mutiny was a colonial break inside a world war: Indian soldiers, a British harbour, ' +
          'and ships that happened to be alongside. It did not decide a campaign in Europe or in ' +
          'Mesopotamia. What it shows is that manpower sent from India could fail suddenly, a long ' +
          'way from the enemy the regiment had been raised to fight.',
      },
      university: {
        cause: 'Singapore in 1915 is easy to leave out of the war, because it is neither a battle nor a ' +
          'European mutiny. Harper’s essay treats the outbreak as a moment in an Asian political ' +
          'underground, not only as a regimental crime. The Library Board tells it as a revolt of ' +
          'the Right Wing of the 5th Light Infantry. Those are different frames, and they fix the ' +
          'same day. That is enough to date a card. It is not enough to print a body count.',
        what: 'The shared facts are the date, the barracks and the regiment: 15 February 1915, ' +
          'Alexandra Barracks, the Indian 5th Light Infantry. A museum caption repeats the day and ' +
          'is not a second publisher. The second publisher is the Cambridge article. What the ' +
          'houses do not share is how many people were killed and how many men were later executed. ' +
          'Choosing either total would prefer one article to the other. This card does not choose.',
        consequence: 'The argument is where a colonial mutiny sits in a world war. It can be filed as a local ' +
          'disturbance, or inflated into a general rising of Indian troops. The sources used here ' +
          'support a narrower claim. One regiment’s Right Wing broke on a stated day, killed ' +
          'Europeans, and was suppressed with local and naval help. The arithmetic of death and of ' +
          'punishment remains in dispute between accounts that otherwise agree the outbreak.',
      },
    },
  },
  {
    id: 'reprisals_order_1915',
    date: '1915-03-11',
    precision: 'day',
    title: 'The reprisals order on German commerce',
    kind: 'diplomacy',
    fronts: ['naval', 'politics'],
    countries: ['United Kingdom', 'Germany', 'France'],
    note: 'Encyclopaedia Britannica’s article on blockade records the Allied announcement of 1 March 1915 and ' +
      'says the measure was in effect a blockade but was not legally one. The Order in Council of 11 ' +
      'March 1915, titled Reprisals Restricting German Commerce, is the instrument described in the ' +
      'Foreign Relations of the United States, 1916 Supplement, and in a UK National Archives file of ' +
      'that name. This card calls it a reprisals order and does not call it a declared blockade.',
    levels: {
      primary: {
        cause: 'Germany had told the world that submarines would attack shipping in a war zone around the ' +
          'British Isles. Britain and its allies looked for a way to stop goods that were going to ' +
          'Germany or coming from Germany, including on neutral ships.',
        what: 'On 1 March 1915 the Allies announced that intention. On 11 March a British Order in Council, a ' +
          'reprisals order, allowed such goods to be detained. Britain did not declare this a blockade. ' +
          'The order’s own title called it reprisals.',
        consequence: 'Cargo bound for a neutral port could be stopped if it was tied to the enemy. The economic war ' +
          'reached neutral trade, not only enemy ships. Arguments about hunger in Germany later in the ' +
          'war start from measures of this kind.',
      },
      secondary: {
        cause: 'In February 1915 Germany declared a submarine war zone around the British Isles. London ' +
          'treated that as a reason for reprisals against German commerce. On 1 March the Allies ' +
          'announced they would seize ships carrying goods of presumed enemy destination, ownership or ' +
          'origin. Encyclopaedia Britannica records that announcement and says the policy was in effect a ' +
          'blockade but was not legally one. The legal step in Britain was still to come.',
        what: 'The Order in Council of 11 March 1915 authorised the detention of goods with an enemy ' +
          'destination, origin or ownership, including on ships bound for neutral ports. Its official ' +
          'title was Reprisals Restricting German Commerce. The papers of the United States government ' +
          'describe the detention of non-contraband goods as enforced by that order. This card calls the ' +
          'measure a reprisals order, which is its name, and not a declared blockade.',
        consequence: 'Neutral cargoes became part of the economic war even when the ship itself was neutral and the ' +
          'port was neutral. That was a wider net than the contraband orders of 1914, which this timeline ' +
          'already records. Later arguments about blockade and hunger in Germany often begin as if a ' +
          'blockade had been proclaimed in March 1915. The documents of the month say reprisals, and the ' +
          'distinction was deliberate.',
      },
      university: {
        cause: 'The March order sits in a legal argument Britain did not want to lose. A formal blockade ' +
          'carries rules about effectiveness and about neutral ports that London was unwilling to meet in ' +
          'a war against trade through the North Sea. Reprisals, justified as an answer to the submarine ' +
          'zone, let the same practical pressure be applied under a different name. Britannica’s ' +
          'insistence that the measure was in effect a blockade but was not legally one is the ' +
          'distinction the order was written to keep.',
        what: 'Two acts are easy to collapse and should not be. The Allied announcement of 1 March stated the ' +
          'intention to seize goods of presumed enemy destination, ownership or origin. The Order in ' +
          'Council of 11 March, titled as reprisals, is the British instrument that put detention into ' +
          'practice, including against ships bound for neutral ports. American diplomatic papers and the ' +
          'National Archives file use that title. A history that calls 11 March the declaration of a ' +
          'blockade is using the word the British government avoided.',
        consequence: 'The order is the point at which the economic war plainly covered neutral commerce, and it is ' +
          'the missing step between the contraband proclamations of 1914 and the hunger debates of 1917 ' +
          'and 1918. Those later debates are often written as if the legal category did not matter. It ' +
          'mattered to neutrals, above all to the United States, which protested the detention of goods ' +
          'that were not contraband. The card keeps the category the documents use, and leaves the ' +
          'argument about effects on German food to the cards that actually discuss hunger.',
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
        cause: 'Britain and France wanted to force the narrow strait into the Sea of Marmara, knock the ' +
          'Ottoman Empire out of the war, and open a sea route to Russia.',
        what: 'On 18 March a fleet of British and French battleships pushed into the Dardanelles and fought ' +
          'the Ottoman forts. Minefields and shore guns sank three large warships and damaged others, and ' +
          'the fleet drew off.',
        consequence: 'The allies decided that soldiers would have to take the strait from the land instead, which ' +
          'began the Gallipoli campaign, still aimed at the route to Russia.',
      },
      secondary: {
        cause: 'With the western front deadlocked, the allies looked to the Ottoman Empire: a fleet alone, it ' +
          'was believed, could silence the forts, clear the strait and open a sea route to Russia.',
        what: 'The minesweepers failed the night before, so the battleships had to pass the narrows in daylight under fire. Turkish howitzers that shifted position kept the range on them; Bouvet struck a mine and sank within minutes, and Irresistible and Ocean, caught by mine and gun, were abandoned and lost, about 700 men drowning with them.',
        consequence: 'The naval commander refused to try again, and the operation passed to the army. It also showed that a modern fleet could be beaten in narrow water by mines and shore guns, a lesson both navies studied.',
      },
      university: {
        cause: 'The attack rested on a pre-war doctrine question — can a modern navy force a mine- and ' +
          'gun-defended strait — answered in part by German officers who rebuilt the Turkish defences ' +
          'after November 1914. The prize was a sea route to Russia.',
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
        what: 'On 22 April the Germans sent a cloud of chlorine gas over trenches held by French colonial ' +
          'troops. It killed and choked the men, and opened a wide gap. The Germans were not ready to ' +
          'pour through; Canadian and British troops filled it.',
        consequence: 'Both sides dug in again, with Germany holding slightly better ground. Gas became a normal weapon from then on, and every army started making masks and gas shells.',
      },
      secondary: {
        cause: 'At Chief of Staff Falkenhayn’s approval, the chemist Fritz Haber’s proposal to discharge chlorine from cylinders was put to use by the Fourth Army at Ypres, where the line was held by French colonial and new British territorial troops with no protection at all.',
        what: 'The cloud opened a wide gap on 22 April, but German reserves were too few and moved too slowly, partly because they too were affected by their own gas. A stand by the 1st Canadian Division and British reserves closed most of the breach, and fighting with local attacks and counter-attacks lasted until 25 May.',
        consequence: 'The salient was contracted on ground slightly better for Germany, and the war gained a new terror weapon. The allies answered in kind: the British first used gas themselves at Loos in September.',
      },
      university: {
        cause: 'Historians argue whether the gas discharge was a revolutionary break or an extension of ' +
          'existing shell practice — the frozen Bolimów experiment of 31 January shows the idea and the ' +
          'intent predated Ypres by weeks. The cloud fell on French colonial troops and new British ' +
          'territorials, who had no protection at all.',
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
        what: 'On 24 April 1915 police in Constantinople arrested hundreds of Armenian priests, teachers and ' +
          'elected members and sent them inland; most were killed. That summer Armenians were marched out ' +
          'of their towns towards the desert. Their guards beat and killed them; many starved.',
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
        cause: 'After the fleet failed to force the strait, the allies landed soldiers on the Gallipoli ' +
          'peninsula to knock the Ottoman Empire out of the war and open a sea route to Russia.',
        what: 'On 25 April troops from Britain, France, Australia, New Zealand and India came ashore on the beaches. Ottoman soldiers held the high ground above them, and an Ottoman colonel, Mustafa Kemal, drove the landing parties back to the shore. Nothing like a breakthrough happened.',
        consequence: 'The allies were stuck in their small beachheads for the rest of the year. Gallipoli became a founding story for Australia and New Zealand, and proved to the Ottomans that their capital could be defended.',
      },
      secondary: {
        cause: 'The landings were meant to do what the battleships had failed to do on 18 March: knock the Ottoman Empire out of the war and open a sea route to Russia.',
        what: 'The British 29th Division landed at Cape Helles, the Australians and New Zealanders came ' +
          'ashore in steep country north of Gaba Tepe, Indian troops came ashore with the landing, and ' +
          'the French held Ottoman reserves opposite at Kum Kale. Units landed beyond their objectives, ' +
          'objectives were undefined, and the men could not climb the ridges under fire from above.',
        consequence: 'A landing intended to end a campaign became a siege that consumed one. Frontal attacks in May and June gained ground only at terrible cost, and the deadlock set the pattern for the rest of the year.',
      },
      university: {
        cause: 'The historiography is a dispute about command failure: vague orders, inadequate intelligence on Ottoman strength, and raw Kitchener-armour divisions — or simply a plan conceived as a reconnaissance in force that outlived its purpose.',
        what: 'Order of battle is contested more than the totals: Turkish official histories count from divisional returns while British staff history counts by beach, and the numbers of Ottoman effectives present to the five divisions engaged differ accordingly.',
        consequence: 'Commemoration is the living argument: Australian and New Zealand writing made 25 April a ' +
          'national beginning, while Turkish historiography reads Kemal’s stand as the prelude to the ' +
          'republic founded in 1923. Troops from India landed too, beside the Australian and New Zealand ' +
          'forces.',
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
    id: 'twenty_one_demands_signed',
    date: '1915-05-25',
    precision: 'day',
    title: 'China signs the treaties after the Twenty-One Demands',
    kind: 'diplomacy',
    fronts: ['politics'],
    countries: ['China', 'Japan'],
    note: 'Encyclopaedia Britannica dates the Twenty-One Demands to 18 January 1915, the ultimatum to 7 May, ' +
      'and Yuan Shikai’s signing of the Sino-Japanese agreements to 25 May, accepting all but the last ' +
      'point. The Council on Foreign Relations dates Yuan’s acceptance of the ultimatum to 9 May and the ' +
      'signature of the final treaty to 25 May 1915.',
    levels: {
      primary: {
        cause: 'In January 1915 Japan gave China a long list of demands. They would confirm Japanese claims in ' +
          'Shandong, where Qingdao stood, and extend Japanese leases in Manchuria. One demand would have ' +
          'put Japanese advisers over the Chinese government.',
        what: 'Japan sent an ultimatum on 7 May. China accepted it on 9 May, and on 25 May signed the ' +
          'treaties that closed the list. The demand that Japanese advisers control the government was ' +
          'not accepted. The other main claims were.',
        consequence: 'Japan’s hold on the former German rights in Shandong, and on its position in Manchuria, was ' +
          'written into treaties. China had been forced to sign while still neutral. The rejected last ' +
          'demand showed there was a limit, and not much of one.',
      },
      secondary: {
        cause: 'Japan presented the Twenty-One Demands on 18 January 1915, after it had taken the German ' +
          'leasehold at Qingdao and while China was still neutral. The claims confirmed Japan’s position ' +
          'in Shandong and extended its leases in Manchuria. A final group would have placed Japanese ' +
          'advisers in control of China’s government. Yuan Shikai’s government delayed, and Tokyo then ' +
          'shortened the argument to an ultimatum.',
        what: 'The ultimatum was sent on 7 May. China accepted it on 9 May, and the treaties were signed on ' +
          '25 May 1915. Britannica and the Council on Foreign Relations agree on the signature. Yuan ' +
          'accepted all but the last point, so the adviser demand did not go into the treaties. What did ' +
          'go in confirmed the Shandong claims and the extended Manchurian leases. This card is the ' +
          'signature, not the January presentation alone.',
        consequence: 'The treaties turned a military occupation of a German port into a set of Chinese concessions ' +
          'on paper. They also showed the limit of Japanese pressure in 1915: control of the Chinese ' +
          'government by advisers was asked and was not signed. Chinese politics remembered the May days ' +
          'as a humiliation. Japan’s later claim that its position in Shandong was a treaty right, not ' +
          'only a conquest, rests on this signature.',
      },
      university: {
        cause: 'The demands are sometimes told as a sudden piece of bullying in a quiet theatre, and sometimes ' +
          'as the diplomatic sequel to the fall of Qingdao. Both belong. Japan had a new fact on the ' +
          'Shandong coast and used China’s neutrality, and the distraction of the European war, to ' +
          'convert it into leases and railway rights before any peace conference could reopen the ' +
          'question. The adviser group, the last of the demands, was the part that would have made China ' +
          'a protectorate in form as well as in leverage.',
        what: 'The chronology the two houses share is tight. Presentation on 18 January, ultimatum on 7 May, ' +
          'acceptance on 9 May, signature on 25 May. Britannica’s phrase is that Yuan capitulated by ' +
          'signing, and that he accepted all but the last point. The Council on Foreign Relations ' +
          'separates the 9 May acceptance of the ultimatum from the 25 May signature of the final text. ' +
          'Dating the event to the signature, rather than to the ultimatum, follows the day the treaties ' +
          'existed. The last point’s absence is part of the text, not a consolation added later.',
        consequence: 'The agreements shaped the East Asian peace argument for the rest of the war. China entered the ' +
          'war in 1917 in part to sit at a settlement where these treaties might be reopened, and Japan ' +
          'treated them as vested rights. Histories of Chinese nationalism use May 1915 as a founding ' +
          'humiliation. Histories of Japanese imperialism use it as a missed chance to have taken the ' +
          'adviser demand as well. The card records a signature with one group refused, which is the fact ' +
          'both of those stories have to start from.',
      },
    },
  },
  {
    id: 'amara_captured',
    date: '1915-06-03',
    precision: 'day',
    title: 'Townshend’s division captures Amara',
    kind: 'offensive',
    fronts: ['middle_east'],
    countries: ['United Kingdom', 'India', 'Ottoman Empire'],
    note: 'A principal-events chronology and The Long, Long Trail both date the capture of Amara by ' +
      'the 6th (Poona) Division to 3 June 1915. They agree with each other, so they are not two ' +
      'houses. The National Army Museum’s Mesopotamia essay dates the capture to 4 June 1915, and ' +
      'a soldier story it publishes gives that day as well. This card uses 3 June and names the ' +
      'Museum’s 4 June. It does not tell a story of a bluff, and it gives no strength.',
    levels: {
      primary: {
        cause: 'After the landing at Fao, General Townshend’s British and Indian division was advancing ' +
          'up the Tigris from Qurna. Amara was the next town on the river.',
        what: 'The division captured Amara in early June 1915. This card uses 3 June. The National Army ' +
          'Museum dates the capture to 4 June. Both days are in print, and the card names the ' +
          'disagreement.',
        consequence: 'Amara was a step up the river, not the end of the advance. The division later reached a ' +
          'different town, Kut. The siege of that town is a separate card, and it is not this ' +
          'capture.',
      },
      secondary: {
        cause: 'The 1915 advance in Mesopotamia ran up the Tigris from the base at Basra. Townshend’s ' +
          '6th (Poona) Division pushed past Qurna towards Amara. A chronology of principal events ' +
          'and The Long, Long Trail both enter the capture under 3 June 1915. They follow the same ' +
          'official narrative, so their agreement is one tradition, not two houses.',
        what: 'The National Army Museum’s campaign essay says the division captured Amara on 4 June ' +
          '1915, and a soldier story on the Museum’s site gives the same day. This card is dated 3 ' +
          'June and states the Museum’s 4 June. It leaves out the tale of a bluff that is sometimes ' +
          'attached to the capture, and it gives no strength. The capture of the town is the shared ' +
          'fact. The day is the disagreement.',
        consequence: 'Amara gave the river advance another town and another reason to continue. It is not Kut. ' +
          'The place later besieged lies further upstream, and the siege card begins with the ' +
          'retreat after Ctesiphon, not with this June capture. Reading the two towns as one event ' +
          'collapses a name.',
      },
      university: {
        cause: 'Amara is easy to mis-file because English maps print a later town as Kut-al-Amara. A ' +
          'reader can think the June capture and the famous siege are the same event. They are not. ' +
          'Amara was taken on the advance from Qurna. Kut was occupied in September, invested in ' +
          'December and surrendered the following spring. This card exists so the first of those ' +
          'towns has a date of its own.',
        what: 'The date is split by a day, and the split is real. The chronology and The Long, Long ' +
          'Trail give 3 June, and because they agree with each other they count as one tradition. ' +
          'The National Army Museum gives 4 June in its essay and again in a soldier’s story. This ' +
          'card follows 3 June and names 4 June. Dropping either day would hide a disagreement of ' +
          'twenty-four hours. No strength is printed, and the bluff story is not repeated.',
        consequence: 'The capture matters because it made the advance look easy, which is the reading that ' +
          'later made the siege look like a surprise. A town taken on the river in June is not ' +
          'evidence that every later town could be held. This card stops at Amara. The day remains ' +
          'in dispute between the 3rd and the 4th, and the siege is not borrowed to give the ' +
          'capture a weight the June sources do not claim.',
      },
    },
  },
  {
    id: 'third_battle_of_krithia',
    date: '1915-06-04',
    precision: 'day',
    title: 'The third attack towards Krithia is thrown back',
    kind: 'battle',
    fronts: ['middle_east'],
    countries: ['United Kingdom', 'France', 'Ottoman Empire'],
    note: 'The National Army Museum dates the Third Battle of Krithia to 4 June 1915 and says the ' +
      'attack failed to secure an Allied breakout. The Australian War Memorial records that the ' +
      'attack was made on 4 June and was thrown back, and that Ottoman counter-attempts followed ' +
      'over the next two days. The Anzac Portal of the Australian Department of Veterans’ Affairs ' +
      'dates the battle to 4 June. This card is dated to the day of the assault. No casualties ' +
      'are given.',
    levels: {
      primary: {
        cause: 'British and French troops at Cape Helles were still trying to break out of the April ' +
          'beachhead towards the village of Krithia. Two attempts had already failed. This was the ' +
          'third.',
        what: 'On 4 June 1915 they attacked along the Helles front and were thrown back. Ottoman ' +
          'counter-attempts followed over the next two days. The attack did not open a way off the ' +
          'beaches.',
        consequence: 'The June attack failed, as the earlier ones had. The force stayed on the Helles beaches. ' +
          'The next large attempt, in August, was a new landing, and it is a different card.',
      },
      secondary: {
        cause: 'The Helles front had failed twice to reach Krithia. On 4 June 1915 British and French ' +
          'troops attacked again, hoping to break out of the ground taken in April. The National ' +
          'Army Museum, the Australian War Memorial and the Anzac Portal all date that assault to 4 ' +
          'June. The Museum says it did not secure a breakout.',
        what: 'The War Memorial records that the attack was thrown back, and that Ottoman ' +
          'counter-attempts followed over the next two days. This card is dated to 4 June, the day ' +
          'of the assault, and it does not give those later days a separate battle. No casualty ' +
          'figure is stated. The claim these publishers share is the day and the failure, not a ' +
          'return of losses.',
        consequence: 'A third failure on the same Helles front showed that another push there would not open ' +
          'the peninsula. The campaign’s next large design was the August landing at Suvla, told on ' +
          'its own card. This one is only the June attack: a shared day, a repulse, and two further ' +
          'days of Ottoman counter-attempts that belong in the story and not in the date.',
      },
      university: {
        cause: 'The third battle of Krithia is the Helles attack that general histories pass over ' +
          'between the April landings and the August offensive. It was the last large attempt to ' +
          'break out along the original beachhead before the allies tried a new landing. The date ' +
          'is not the difficulty. A London museum, the Australian War Memorial and a veterans’ ' +
          'department all give 4 June. The difficulty is keeping the assault distinct from the ' +
          'counter-attacks that followed, and from August.',
        what: 'The day of the attack is what goes on the card. The War Memorial’s note of Ottoman ' +
          'counter-attempts over the next two days belongs in the narrative. It does not move the ' +
          'date. Casualty tables for Helles in June are easy to find and they are not used. A ' +
          'figure from one return would look more exact than the agreement among these publishers, ' +
          'which is about the day and the failure.',
        consequence: 'The June failure is part of why August was fought at all. The April line would not move. ' +
          'Histories that jump from the landings to the evacuation make the campaign look like a ' +
          'long wait. It was a series of attempts, and this was the June one, thrown back on the ' +
          'day it was made. August is the next attempt, not this attack under another name.',
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
    id: 'south_west_africa_surrenders',
    date: '1915-07-09',
    precision: 'day',
    title: 'German South-West Africa surrenders at Khorab',
    kind: 'invasion',
    fronts: ['africa'],
    countries: ['South Africa', 'United Kingdom', 'Germany'],
    note: 'The National Army Museum dates the surrender of the German forces at Khorab to 9 July 1915. South ' +
      'African History Online dates the same official surrender to Botha at the Khorab memorial, with the ' +
      'instrument signed by Botha, Governor Seitz and Victor Franke. This card does not call the ' +
      'surrender unconditional: the terms were negotiated, and they included parole for officers. No ' +
      'headcount is given, because the tallies differ.',
    levels: {
      primary: {
        cause: 'The Union of South Africa, fighting with the British Empire, had campaigned against German ' +
          'South-West Africa. An Afrikaner rebellion at home had delayed the advance. By July 1915 the ' +
          'German forces were ready to treat.',
        what: 'On 9 July 1915 the German forces surrendered to General Louis Botha at Khorab. The terms were ' +
          'negotiated. Officers were to be paroled. This card does not call the surrender unconditional, ' +
          'and it gives no headcount.',
        consequence: 'The campaign for the colony was over. Germany had lost South-West Africa. The troops South ' +
          'Africa had used there could be sent on to other fronts, and the colony’s future became a ' +
          'question for the peace.',
      },
      secondary: {
        cause: 'South Africa’s invasion of German South-West Africa stalled in late 1914, when an Afrikaner ' +
          'rebellion had to be put down and a reverse was suffered at Sandfontein. The National Army ' +
          'Museum dates the renewed advance to late February 1915. The aim was the German forces under ' +
          'Governor Seitz and the commander Victor Franke, not a single fortress. By July those forces ' +
          'had fallen back to the north of the colony.',
        what: 'On 9 July 1915 they surrendered to General Louis Botha at Khorab. The Museum and South African ' +
          'History Online both give that day and that place. The instrument was signed by Botha, Seitz ' +
          'and Franke. Accounts of it describe negotiated terms, including parole for officers. One South ' +
          'African account uses the word unconditional, and this card does not, because the terms show a ' +
          'negotiation. No headcount is stated: the tallies of men surrendered do not match.',
        consequence: 'The surrender ended the Union’s campaign and removed German rule from South-West Africa. It ' +
          'did not end the African war. German East Africa was still in the field, and South African ' +
          'troops would be drawn into that harder campaign. A sentence in another card, that the colony ' +
          'was conquered by February 1915, dates the restart of the advance and not this surrender. July ' +
          'is the end.',
      },
      university: {
        cause: 'South-West Africa is usually folded into a sentence about a quick colonial victory, and the ' +
          'dates get compressed. February 1915 is when the advance resumed after the rebellion, not when ' +
          'the German forces capitulated. The rebellion itself, and the reluctance of some Afrikaner ' +
          'soldiers to conquer a neighbouring German colony for London, belong in the cause. Botha had to ' +
          'win a campaign that part of his own political nation disliked.',
        what: 'The shared facts are the day and the place: 9 July 1915, at Khorab, Botha taking the surrender ' +
          'of Seitz and Franke. The word unconditional appears in one widely used South African account ' +
          'and is rejected here. Parole for officers is the kind of term a dictated surrender does not ' +
          'bother to write. Headcounts are omitted because British, South African and German totals of ' +
          'who laid down arms are not the same series. A card that prints one of them would be choosing a ' +
          'side’s return.',
        consequence: 'The capitulation cleared a colony and freed South African manpower, which is the military ' +
          'result. The political result was a precedent Botha could cite for taking German territory in ' +
          'the name of the Union, and a grievance other Afrikaners continued to nurse. East Africa, still ' +
          'open, absorbed much of that manpower and produced a very different kind of campaign. Treating ' +
          'July 1915 as the moment Germany’s African empire fell is the overstatement this surrender does ' +
          'not support.',
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
        cause: 'The German cruiser Königsberg had raided shipping in the Indian Ocean, then hid in the Rufiji ' +
          'delta in East Africa, sinking ships that came near.',
        what: 'The Royal Navy took two old, flat-bottomed gunboats apart, shipped them through the Suez Canal ' +
          'in pieces, and built them up again in Africa. On 11 July they shelled Königsberg in the Rufiji ' +
          'until she sank, with aircraft spotting the fall of shot.',
        consequence: 'Her sailors came ashore and joined von Lettow-Vorbeck’s force, fighting on in East Africa for ' +
          'the rest of the war. The sinking ended Germany’s surface-raider war in the Indian Ocean.',
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
    id: 'gallipoli_august_offensive',
    date: '1915-08-06',
    precision: 'day',
    title: 'The August offensive lands at Suvla Bay',
    kind: 'offensive',
    fronts: ['middle_east', 'naval'],
    countries: ['United Kingdom', 'France', 'Ottoman Empire', 'India', 'Australia', 'New Zealand'],
    figures: ['mustafa_kemal', 'liman_von_sanders'],
    note: 'The Australian War Memorial describes the Suvla landing of 6 to 7 August 1915 as part of the ' +
      'August offensive: the troops consolidated rather than advancing, and the actions at Scimitar Hill ' +
      'and Hill 60 on 21 August failed. The Anzac Portal dates the landing to the evening of 6 August, in ' +
      'support of the attack at Sari Bair. No casualty figure is given. The Anzac Portal’s figure and a ' +
      'War Memorial symposium paper’s wounded count are not the same series.',
    levels: {
      primary: {
        cause: 'The April landings at Gallipoli had left the Allies stuck on narrow beaches. In August they ' +
          'tried to break out. New troops were to land at Suvla Bay while other units attacked inland ' +
          'from the April positions.',
        what: 'On the evening of 6 August 1915 British troops landed at Suvla as part of that offensive. They ' +
          'dug in on the beach instead of pushing inland. Ottoman reinforcements closed the gap, and a ' +
          'last attack on 21 August failed.',
        consequence: 'The chance to break out of the beaches was gone. The campaign would not be won by another ' +
          'landing. In December the Allies began to leave Gallipoli, which is a different card.',
      },
      secondary: {
        cause: 'By August the April beachheads at Helles and Anzac had not opened the road to the straits. The ' +
          'August offensive was meant to break out, with a landing at Suvla Bay in support of an attack ' +
          'towards Sari Bair from the Anzac position. British troops were put ashore for Suvla. ' +
          'Australian and New Zealand units carried the inland attack the landing was meant to help. The ' +
          'Ottoman Fifth Army, under Liman von Sanders, still held the high ground.',
        what: 'The landing began on the evening of 6 August 1915. The Australian War Memorial and the Anzac ' +
          'Portal both place it then, as part of the August offensive. The troops at Suvla consolidated ' +
          'on the shore instead of advancing inland while the way was open. Ottoman reinforcements ' +
          'arrived and closed that chance. A last attack on 21 August, including the actions at Scimitar ' +
          'Hill and Hill 60, failed. No casualty figure is given: the published counts are not one ' +
          'series.',
        consequence: 'The offensive decided the campaign even though the evacuation came months later. Once Suvla ' +
          'had stalled and the August attacks had failed, there was no second plan for forcing the ' +
          'peninsula. The beaches remained what they had been in April, a lodgement without a breakout. ' +
          'Command arguments about the pause on the beach began at once and have not stopped. The ' +
          'evacuation in December is the end of the story, not the decision.',
      },
      university: {
        cause: 'August is the decision the April landings did not make. A further amphibious landing could ' +
          'still have turned the campaign if it had been used as a breakout rather than as another beach ' +
          'to entrench. The plan linked Suvla to the attack at Sari Bair, so a pause at the water ' +
          'cancelled the inland effort as well. Ottoman command, with Mustafa Kemal prominent on the high ' +
          'ground above Anzac, was quicker to move reserves than the landing force was to leave the ' +
          'shore.',
        what: 'The sources used here agree on the evening of 6 August and on the failure to push inland, and ' +
          'they agree that 21 August did not retrieve the offensive. The War Memorial stresses the ' +
          'consolidation at Suvla and the failed actions at Scimitar Hill and Hill 60. The Anzac Portal ' +
          'stresses that the landing supported Sari Bair. Casualty arithmetic is left out. A portal ' +
          'figure for the whole effort and a symposium paper’s count of wounded for 6 to 21 August are ' +
          'not the same series, and printing either would pretend they were.',
        consequence: 'Gallipoli historiography still argues whether the campaign was lost at the April landings or ' +
          'in the August pause. This card takes August as the point where a breakout was actually ' +
          'attempted and missed, which is a claim about decisions on the beach rather than about the idea ' +
          'of landing at all. The evacuation then becomes a consequence, already told on its own card, ' +
          'rather than the moment of failure. National memories that centre Anzac, and British memories ' +
          'that centre Suvla, are both inside this one offensive, which is why the card carries both.',
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
        what: 'On 25 September the British let chlorine gas drift towards the German lines near Loos and sent ' +
          'soldiers in behind it. The wind was too weak, and the cloud went astray. Where it worked, the ' +
          'men broke in, but the reserves were too far back.',
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
    id: 'capture_of_kut_1915',
    date: '1915-09-28',
    precision: 'day',
    title: 'Kut is occupied, before the siege',
    kind: 'battle',
    fronts: ['middle_east'],
    countries: ['United Kingdom', 'India', 'Ottoman Empire'],
    note: 'A principal-events chronology enters a Battle of Kut under 28 September 1915. The National ' +
      'Army Museum timeline separates a Battle of Es Sinn, a British-Indian victory on that day, ' +
      'from the capture of Kut the same day. Its Mesopotamia essay says the division entered the ' +
      'town on 28 September 1915. This card does not treat the later siege as a continuation of ' +
      'this day.',
    levels: {
      primary: {
        cause: 'Townshend’s British and Indian force was still advancing up the Tigris. An Ottoman ' +
          'position covered Kut, the next town before any march towards Baghdad.',
        what: 'On 28 September 1915 the force defeated that position and occupied the town. One ' +
          'chronology calls the day the Battle of Kut. The National Army Museum separates a fight ' +
          'at Es Sinn from the entry into Kut, and puts both on 28 September.',
        consequence: 'This was the furthest point of the 1915 advance before the march on Baghdad. The siege ' +
          'that began in December, after the retreat from Ctesiphon, is not this occupation. The ' +
          'town was taken in September and shut in later.',
      },
      secondary: {
        cause: 'By September 1915 the Mesopotamian advance had gathered its own momentum. Townshend’s ' +
          'division met the Ottoman position covering Kut and fought it on 28 September. The ' +
          'National Army Museum calls the fight the Battle of Es Sinn and calls the same day the ' +
          'capture of the town. A principal-events chronology uses one name, the Battle of Kut, for ' +
          'that date. The Museum’s campaign essay says the division entered Kut on 28 September.',
        what: 'The shared date is 28 September, for a British-Indian victory and for the occupation ' +
          'that followed. The chronology does not split the fight from the entry. The Museum does, ' +
          'and still keeps both on the one day. This card uses that day and both names, so the two ' +
          'wordings can be seen as one date told twice. It does not describe the later siege as the ' +
          'same afternoon continued.',
        consequence: 'September’s occupation was the high point of the advance before Baghdad was attempted. ' +
          'Ctesiphon checked that attempt in November, and the December investment is the siege. ' +
          'Folding the September capture into the surrender of the next year makes a town taken in ' +
          'a victory look like a town that was only ever a trap. The recapture in 1917 is a third ' +
          'event again.',
      },
      university: {
        cause: 'The name Kut does too much work. The siege of 1916 is so well known that the first ' +
          'occupation, the check at Ctesiphon and the recapture of 1917 disappear into it. The ' +
          'September day is when the advance still looked like a success. Without that day, the ' +
          'retreat from Ctesiphon has no town to fall back on, and the siege has no place that had ' +
          'already been won once.',
        what: 'Two institutional wordings share 28 September 1915 and do not share a label. The ' +
          'chronology’s Battle of Kut is a single entry. The Museum’s timeline has a battle at Es ' +
          'Sinn and a capture of the town, both that day, and the essay dates the entry to 28 ' +
          'September. This card will not pick the label and will not move the day. It also will not ' +
          'make December’s investment a continuation. A siege begins when an army is shut in, not ' +
          'when it first enters a town it has just taken.',
        consequence: 'The gain is a sequence instead of one story. Kut taken in September, the advance stopped ' +
          'in November, the garrison invested in December. Each of those was a decision. The ' +
          'September decision was to occupy and go on. Later decisions were to retreat and then to ' +
          'hold. This card is only the first of them, and it stops when the town was entered.',
      },
    },
  },
  {
    /* KK asked for a card that carries the Eleventh Army's stroke to Belgrade.
       Two publisher families now print the day of the fall: the Belgrade article
       ("9 October of the same year") and Cyril Falls, _Military Operations Macedonia_
       volume I (HMSO 1933, already in the site's bibliography), which prints "The
       bombardment began on the 6th October and the passage of the rivers next day"
       and the capture "Austrians on the 9th". Falls also refuted the first draft of
       this card on two points, and both are corrected here: the Eleventh Army was to
       cross the Danube between Smederevo and Ram, not at Zemun, and the passage of the
       rivers began the day after the bombardment, not on 6 October. The draft's claims
       that this was the largest amphibious operation of the war, that the city was
       declared an open city, and that motor gunboats covered the banks are printed in
       neither family and were removed. */
    id: 'fall_of_belgrade_1915',
    date: '1915-10-09',
    precision: 'day',
    kind: 'invasion',
    title: 'Belgrade falls to Mackensen’s three armies',
    fronts: ['balkans'],
    countries: ['Serbia', 'Austria-Hungary', 'Germany', 'Bulgaria'],
    levels: {
      primary: {
        cause: 'Serbia beat back two Austro-Hungarian invasions in 1914. In October 1915 ' +
          'Bulgaria joined the Central Powers, and a combined German and ' +
          'Austro-Hungarian force under Field Marshal von Mackensen moved south to ' +
          'finish Serbia off.',
        what: 'The bombardment of Belgrade began on 6 October 1915 and the Danube and ' +
          'Sava were crossed the next day. Austrian troops took the city on 9 October, ' +
          'and the Serbian army gave way rather than be trapped.',
        consequence: 'The Serbian army retreated through Montenegro and Albania and was ' +
          'evacuated to Greece. Belgrade remained under occupation until Serbian and ' +
          'French troops liberated it on 1 November 1918.',
      },
      secondary: {
        cause: 'The invasions of Serbia in 1914 had failed, and the Austro-Hungarian ' +
          'command could not find all the troops for a third, so Falkenhayn drew on his ' +
          'scanty reserves. Mackensen’s headquarters was at Temisoara from 20 September. ' +
          'The Austrian Third Army was to cross the Sava and Danube between Kupinova and ' +
          'Belgrade and advance on Kragujevac, the Serbian headquarters and arsenal; the ' +
          'German Eleventh Army was to cross the Danube between Smederevo and Ram and up ' +
          'the Morava valley; the Bulgarian First Army, under Mackensen’s orders, was to ' +
          'cross the frontier five days later and march on Niš.',
        what: 'Three small Serbian forces — the Third Army, the Belgrade Detachment and ' +
          'the First Army — held the Danube and Sava front. The bombardment began on the ' +
          '6th October and the passage of the rivers next day. The Danube is over a ' +
          'thousand yards across there, and the big islands helped the crossing. Some ' +
          'crossings failed, but small detachments got over, and on the 8th more troops ' +
          'were pushed across while the Serbian counter-attacks were broken up by the ' +
          'land artillery and the Austrian monitors. Belgrade was captured by the ' +
          'Austrians on the 9th.',
        consequence: 'Bulgaria declared war on 13 October and marched the next day, and ' +
          'its Second Army took Kumanovo by the 19th, cutting the Salonika–Niš railway ' +
          'behind the retreating Serbians. The Allied troops landed at Salonika in the ' +
          'first days of October and up the Vardar to Krivolak were too far off to help. ' +
          'Mackensen declared the campaign at an end on 24 November, and Serbia was ' +
          'occupied and divided between Austria-Hungary and Bulgaria. The Serbian army ' +
          'was re-formed on Corfu and returned to the war on the Salonika front.',
      },
      university: {
        cause: 'The 1915 campaign is the one clean strategic result the Central Powers ' +
          'achieved in the Balkans, and it was built on the thing Potiorek had lacked in ' +
          '1914: mass. Falkenhayn calculated the odds at “330,000 to 190,000 rifles”, and ' +
          'the official history says the superiority in artillery was far greater still, ' +
          'since “it was confidently expected that the Serbians would not be able to ' +
          'withstand the fire of massed heavy batteries and trench mortars”. The result ' +
          'turns on what the Serbian command declined to do: Mackensen hoped “to fight ' +
          'the decisive battle and destroy his opponent in front of Kragujevac”, and ' +
          'records that “The Serbians broke off the fight and blew up their arsenal ' +
          'before retiring”. The army survived the loss of the capital.',
        what: 'The day printed for the fall of Belgrade is carried by two families. The ' +
          'city’s own article dates the battle “starting on 6 October 1915” and says it ' +
          '“fell to German and Austro-Hungarian troops commanded by Field Marshal August ' +
          'von Mackensen on 9 October of the same year”; the Serbian campaign article ' +
          'gives the same 6 October for the opening of the second campaign. The British ' +
          'official history for the Allied side of the same operation prints “The ' +
          'bombardment began on the 6th October and the passage of the rivers next day” ' +
          'and the capture “Austrians on the 9th”. The two agree on the 9th, and differ ' +
          'only about the crossing, which the official history puts the day after the ' +
          'bombardment. The Bulgarian declaration is single-family here: the official ' +
          'history prints 13 October, and no second family was reached for that day.',
        consequence: 'For this map the campaign has two ends. The first is the colour of ' +
          'Belgrade, held by the Central Powers from 9 October 1915 until the city was ' +
          '“liberated by Serbian and French troops on 1 November 1918”, which is why the ' +
          'frontier line on this site runs through Belgrade again in the last months of ' +
          'the war. The second is that the occupation was administered as well as ' +
          'garrisoned — Serbia was “occupied and divided between the Austro-Hungarian ' +
          'Empire and Bulgaria”, and the Toplica Uprising of 1917 is the name under which ' +
          'that government is remembered. The Eleventh Army’s own stroke on this map ' +
          'therefore begins on the Danube above the Serbian frontier and ends at the city ' +
          'whose occupation the same volume dates.',
      },
    },
    note: 'Two families, which the first draft of this card did not have: the Belgrade ' +
      'article prints the bombardment “starting on 6 October 1915” and the fall on ' +
      '“9 October of the same year”, and Cyril Falls, _Military Operations Macedonia_, ' +
      'volume I (HMSO, 1933), prints “The bombardment began on the 6th October and the ' +
      'passage of the rivers next day” with the capture “Austrians on the 9th” — the scan ' +
      'of the volume carries the page furniture “1916. Oct.” inside that sentence, so the ' +
      'quotation is given in two runs. Falls also corrects two points this card first had ' +
      'wrong: the Eleventh Army was to cross the Danube between Smederevo and Ram, not at ' +
      'Zemun, and the crossing opened the day after the bombardment. Claims that were ' +
      'printed by neither family have been dropped rather than hedged: that the crossings ' +
      'were the largest amphibious operation of the war, that Belgrade was declared an ' +
      'open city, and that motor gunboats supported the banks. The Bulgarian declaration ' +
      'of war is given as 13 October on the official history alone, and is in the ' +
      'uncertainty list. No strength figures are printed on the card: Falls’s rifle ' +
      'calculation is a footnote total and the article’s infobox totals do not match the ' +
      'armies named in its own text. Sources checked: Wikipedia “Belgrade” and “Serbian ' +
      'campaign”; Cyril Falls, _Military Operations Macedonia_ volume I.',
    mapNote: 'Belgrade fell on 9 October 1915, two days after the crossing of the Danube ' +
      'and Sava opened.',
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
        what: 'On 14 October Bulgaria declared war on Serbia and invaded next day. In the north, German and ' +
          'Austro-Hungarian armies had crossed the rivers. A small British and French force landed at ' +
          'Salonika, inside Greece, to help Serbia — but it was too late and too small.',
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
    id: 'battle_of_ctesiphon',
    date: '1915-11-22',
    precision: 'month',
    title: 'The check at Ctesiphon',
    kind: 'battle',
    fronts: ['middle_east'],
    countries: ['United Kingdom', 'India', 'Ottoman Empire'],
    note: 'The opening day is not settled. The National Army Museum’s timeline gives 22 to 25 November 1915 ' +
      'and calls the battle inconclusive; its Mesopotamia essay dates the check to 21 to 23 November and ' +
      'the decision to retreat to Kut. The Imperial War Museum captions a photograph of the battle on 23 ' +
      'and 24 November, then the retirement to Kut. This card is placed on 22 November only as a day ' +
      'inside that argument. Month precision keeps that day off the date line, because it is not a ' +
      'settled opening. It gives no strengths or losses. The retreat towards Kut is the point the Museum ' +
      'and the War Museum share.',
    levels: {
      primary: {
        cause: 'A British and Indian force under General Townshend had pushed up the Tigris towards Baghdad. ' +
          'The Ottoman army stood at Ctesiphon, short of the city. Townshend attacked it.',
        what: 'The opening day is disputed: 22 to 25 November, 21 to 23, or 23 and 24 November. This card ' +
          'sits on the 22nd only inside that argument, not as a settled start. The attack did not break ' +
          'the Ottoman position.',
        consequence: 'Townshend’s force retreated down the Tigris towards Kut. That retreat, not any one opening ' +
          'day, is what the accounts share. The siege of Kut, which followed in December, is a separate ' +
          'card.',
      },
      secondary: {
        cause: 'After the landing at Fao and the occupation of Basra, the Mesopotamian advance was pointed at ' +
          'Baghdad. Townshend’s British-Indian force met the Ottoman position at Ctesiphon, still short ' +
          'of the city, and attacked it. The advance had already outrun a comfortable supply line. A ' +
          'victory at Ctesiphon was supposed to open the last step into Baghdad. It did not.',
        what: 'The opening day is not agreed, and this card does not pretend it is. The National Army ' +
          'Museum’s timeline gives 22 to 25 November and calls the result inconclusive. Its essay on the ' +
          'campaign dates the check to 21 to 23 November. The Imperial War Museum dates fighting to 23 ' +
          'and 24 November. Placing the card on 22 November only marks a day inside that spread. What the ' +
          'same accounts share is the failure to break the position and the retreat down the Tigris ' +
          'towards Kut. No strengths or losses are stated.',
        consequence: 'The retreat towards Kut turned an advance on Baghdad into a defence of a river bend. Within ' +
          'weeks the force was shut in, which is the siege told on the later card. Ctesiphon is the check ' +
          'that made that siege possible, and it is not the siege itself. Calling the battle a defeat, a ' +
          'draw, or a tactical success thrown away all appear in the literature. The shared operational ' +
          'fact is narrower: the road to Baghdad closed, and the army went back towards Kut.',
      },
      university: {
        cause: 'Ctesiphon is regularly swallowed by the siege that followed, so the decision to attack short ' +
          'of Baghdad disappears into the story of the surrender. The attack was the point of the ' +
          'advance: a battered division asked to break an Ottoman position and walk into the city. ' +
          'Supply, river transport and the chance of reinforcement were already poor. The battle is where ' +
          'that gamble was called, whether or not the first shot can be dated to a single morning.',
        what: 'Dating the opening is a genuine disagreement, not a quibble. A 22 to 25 November window, a 21 ' +
          'to 23 November check, and a 23 and 24 November battle are all in print from institutions that ' +
          'otherwise agree there was a battle and a retreat. This card is dated the 22nd because the ' +
          'timeline needs a day, and the reading text says that day is not settled. Strengths and losses ' +
          'are omitted on purpose. The returns do not match, and the catalogue of sources used here does ' +
          'not authorise a figure.',
        consequence: 'The consequence the National Army Museum and the Imperial War Museum both state is the ' +
          'retirement towards Kut. Everything argued about Townshend’s later surrender depends on that ' +
          'retreat having happened, and not on whether the first day was the 21st, the 22nd or the 23rd. ' +
          'Histories that narrate Kut from the investment in December are right about the siege and ' +
          'silent about the battle that produced it. This card is that battle, with the day left in ' +
          'dispute and the direction of the retreat not.',
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
        cause: 'After eight months the allies knew they could not take the Gallipoli peninsula from the ' +
          'Ottoman army. They decided to take the troops off Anzac and Suvla rather than send more in.',
        what: 'In the cold dark of December the soldiers at Anzac and Suvla slipped out by night, in small ' +
          'groups, leaving camps that still looked held. When the Ottoman soldiers came forward, they ' +
          'found the camps empty.',
        consequence: 'The evacuation worked, and almost no one was lost, which everyone had feared. For Australia ' +
          'and New Zealand it became a national story, and for the Ottomans the great victory of their ' +
          'war.',
      },
      secondary: {
        cause: 'The landing had become a costly siege of the Ottoman peninsula and sickness grew. A November ' +
          'visit by Kitchener turned policy towards evacuation from Anzac and Suvla, with Helles for the ' +
          'moment retained.',
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
  {
    id: 'salonika_landing_1915',
    date: '1915-10-05',
    precision: 'day',
    kind: 'landing',
    title: 'Allied troops land at Salonika, too late for Serbia',
    fronts: ['balkans'],
    countries: ['France', 'United Kingdom', 'Greece', 'Serbia', 'Bulgaria'],
    figures: ['sarrail', 'putnik'],
    note: 'The day of the landing is in both families; the detail of that first day is the official history’s, which prints that “French division from the Dardanelles, which was commanded by General Bailloud and was now to be numbered the 156th, began its landing at Salonika on the 5th October, all the fighting troops being ashore within 48 hours”. Wikipedia’s account of the same first day is “The developments finally forced the French and the British to decide upon sending a small expedition force of two divisions from Gallipoli ( 156th Infantry Division (France) [ 16 ] and 10th (Irish) Division respectively”, and the official history shows the British division of that pair being countermanded: the War Office cable of 6 October 1915 states “Venizelos, as you probably know, has resigned, and the whole question of landing troops at Salonika is very doubtful”, and “cancelled the move of the 10th Division, even directing that its commander, Lieut.-General Sir Bryan Mahon, should return to Mudros if he had already started”. “For reasons which have already been given, no other British troops arrived until the 5th November” is the official history alone, which is why the university level attributes the 5 November to it rather than stating it, and why the prose names no number of divisions. The name of the force is in both families but not as the same name: the Times history of the war writes of “compelled the Powers to demand fuller guarantees for the security of the army of the Orient (the Salonika force)” and the British official history of “The French Army of the East, after having had a share of the limelight in the early stages of the campaign, was thereafter shrouded in a similar fog of misconception and ignorance”; the prose uses the name the Times prints. The cutting-off of the Serbs from the French — “Veles and Kumanovo had fallen, and by the 24th the Bulgarian Second Army had completely cut off the main Serbian forces from the French” — is the official history’s, as are the days of the final retreat. The days of the attack on Serbia differ between the families and are recorded in the uncertainty rows, so the prose names no Austro-Hungarian formation and prints no day for Bulgaria’s entry. The map note above names both towns only to disclose a gap in the atlas: this line’s own summary names Krivolak for the Vardar crossing, while the line’s farthest vertex is 31 km from it, at the place now called Negotino; no waypoint was moved, and no card was built for Krivolak.',
    mapNote: 'The pin is on the Salonika waterfront, where the first troops came ashore on 5 October 1915. The line runs north up the Vardar valley; its farthest vertex is at Negotino, while the line’s own summary names Krivolak for the crossing, some 30 kilometres away.',
    levels: {
      primary: {
        cause: 'In October 1915 Austro-Hungarian and German armies attacked Serbia from the north, across the Danube and the Save, and the Bulgarian army attacked from the east and south. The help the Allies sent was two divisions taken from Gallipoli, and they went to Salonika.',
        what: 'French and British troops landed at Salonika on 5 October 1915, in a country whose prime minister and King stood on opposite sides over the war. The French and British force combined as the Army of the Orient, under the French general Sarrail.',
        consequence: 'The landing came too late to save Serbia. The Bulgarian army closed the road by which the Serbian army hoped to reach the Greek border and the port, and the expedition hardened into the front that took its name from the city.',
      },
      secondary: {
        cause: 'The blow fell in October 1915. Under Mackensen the German Eleventh Army began the attack across the Danube on 6 October, and the Bulgarian army attacked Serbia from the east and south; the Allies, who had promised help, were still sending a small force to Salonika. Serbia came into the war short of everything: its army had only just fought out the Balkan Wars and was still recovering, and it was short of rifles and munitions.',
        what: 'The first troops landed at the Greek port of Salonika on 5 October 1915. They came from the Dardanelles force, and more followed; the French and British troops combined as the Army of the Orient under the French general Maurice Sarrail. Greece was the complication: Venizelos fell from office in 1915, and the country divided between the King’s camp and his, so that the Allies landed in a neutral country that would not join them.',
        consequence: 'The landing came too late: the Bulgarian army cut the road to the Greek frontier by which the Serbian army hoped to reach the port, and the great majority of the Serbs escaped across the mountains to the Adriatic. The Allied force never joined them. What remained hardened into a standing front, the front that took its name from the city the pin is on.',
      },
      university: {
        cause: 'The two accounts do not name the same armies. Wikipedia dates the offensive under Mackensen to 6 October 1915 and gives it to the Austro-Hungarian Balkan Army, the German 11th Army and river flotillas on the Danube and the Sava. The British official history of the campaign names no Balkan Army: in its plan the German Eleventh Army was to cross the Danube between Smederevo and Ram and advance up the Morava, while the Bulgarian First Army, under Mackensen’s orders, marched on Niš and the independent Bulgarian Second Army invaded Macedonia and entered the Vardar valley. That history puts the bombardment on 6 October and the passage of the rivers next day, and dates the Bulgarian declaration of war to 13 October, the army marching next day; Wikipedia has her two armies attacking on 15 October.',
        what: 'The first troops came ashore on 5 October 1915, two divisions taken over from the Gallipoli force being followed by the rest; Sarrail commanded, and the French and British divisions which landed combined as the Army of the Orient. The landing went in through a neutral country divided over the war: Wikipedia gives a neutral Greece whose King was pro-German while the prime minister Venizelos, who had invited the Allies into Thessaloniki, was pro-Allied. The official history shows the quarrel at first hand: Venizelos found his policy at variance with that of the King and the General Staff, and on 6 October the War Office could cable that he had resigned and that the whole question of landing troops was doubtful. The force was a small one, and, on the official history’s word, no other British troops arrived until 5 November.',
        consequence: 'The expedition failed in the object it was sent on. The Bulgarian advance cut the road to the Greek frontier, and the Serbian army withdrew south-west across the mountains and Albania to the Adriatic coast, the British official history putting the men who reached it at 150,000; the Allied force stood in and about Salonika behind the line that took the city’s name. Falls enters a larger judgement in his preface, of the Austrian official history then in the press — “both text and maps point to the conclusion that the intervention of the Allies in Macedonia, tardy as it was, contributed even more to saving the remnant of the Serbian Armies than has been suggested in the account given here” — a reading of another state’s history, printed here as a judgement.',
      },
    },
  },
];
