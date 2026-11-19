import type { WW1Event } from './types';

/**
 * July to December 1914.
 *
 * Every date, strength and casualty figure comes from the English Wikipedia
 * article named in `note`, or from its infobox. Where the sources disagree the card
 * gives a range and the note says who argues what. Fifteen cards, at least two in
 * each of the six months. The assassination of Jean Jaurès is here rather than in a
 * July card of its own because the card’s subject is what happened to French politics
 * in the last week of peace.
 *
 * Folded into other cards rather than given their own, because the set is capped at
 * fifteen: the Battle of Cer (in the note on the declaration of war on Serbia), the
 * First Battle of the Masurian Lakes (Tannenberg), the siege of Przemyśl (Galicia),
 * Liège and Dinant (Belgium), Heligoland Bight, Coronel, Cocos, the Emden, Cuxhaven,
 * Tsingtao and the blockade Orders in Council (the Falklands), the Bergmann Offensive
 * (Sarikamish), German South West Africa and Sandfontein (Tanga), and the Christmas
 * truce of 24–25 December, which is recorded in the note on the Yser and First Ypres
 * card. Japan’s entry and the siege of Tsingtao have no theatre of their own in the
 * `Front` list, so Tsingtao sits in the Falklands note.
 */
export const EVENTS_1914: WW1Event[] = [
  {
    id: 'july_ultimatum_serbia',
    date: '1914-07-23',
    precision: 'day',
    title: 'The ultimatum to Serbia',
    kind: 'diplomacy',
    fronts: ['politics', 'balkans'],
    countries: ['Austria-Hungary', 'Serbia', 'Germany', 'Russia', 'France', 'United Kingdom'],
    figures: ['franz_joseph', 'conrad_hoetzendorf', 'grey', 'bethmann_hollweg'],
    note: 'Austria-Hungary debated its course on 7 July and delivered the ultimatum on 23 July, some three ' +
      'weeks after the assassinations of 28 June; the deadline was 6 p.m. on 25 July and the Austrian ' +
      'minister Giesl left Belgrade that day. Berlin called the Serbian reply a suitable basis for ' +
      'negotiation, while Vienna said it was not enough. How far Germany pushed Austria-Hungary towards war ' +
      'is the central argument about the July Crisis, and much of the older literature rests on German ' +
      'documents published after 1918.',
    levels: {
      primary: {
        cause: 'In June 1914 the heir to the throne of Austria-Hungary and his wife were shot dead in the ' +
          'town of Sarajevo. Austria-Hungary blamed Serbia, a smaller country next door, and wanted to ' +
          'punish it. First it asked the German Empire to promise to stand by it.',
        what: 'On 23 July Austria-Hungary sent Serbia a list of harsh demands. Serbia had to answer by six ' +
          'o’clock that Saturday evening, or Austria-Hungary would fight.',
        consequence: 'Serbia agreed to most of the demands but not all of them. Austria-Hungary said that was ' +
          'not enough and broke off relations the next day. Serbia called up its army, and Russia began to ' +
          'get ready to help Serbia.',
      },
      secondary: {
        cause: 'Archduke Franz Ferdinand, heir to the Austro-Hungarian throne, was assassinated in Sarajevo ' +
          'on 28 June 1914. Austrian leaders wanted to use the murder to end Serbia’s power in the Balkans, ' +
          'but first needed certainty that Germany would support them even if Russia came to Serbia’s aid. ' +
          'The Council of Joint Ministers debated the question on 7 July and then delayed, and assured ' +
          'Berlin on 14 July that the ultimatum was written so that acceptance was practically excluded.',
        what: 'The ultimatum was delivered in Belgrade on 23 July by the Austro-Hungarian minister, Baron ' +
          'Wladimir Giesl von Gieslingen, with the answer due by 6 p.m. on 25 July. It demanded that ' +
          'Austrian officials be allowed to take part in the investigation inside Serbia, which would have ' +
          'cut across Serbian sovereignty. Serbia accepted nearly everything and offered arbitration on the ' +
          'rest.',
        consequence: 'Austria-Hungary broke off diplomatic relations on 24 July and Serbia mobilised. Russia ' +
          'put its army in a state of preparation on 25 July, which turned a quarrel between two Balkan ' +
          'states into a question for every great power. The British foreign secretary, Edward Grey, ' +
          'proposed mediation on the very day the ultimatum was delivered and was not taken up.',
      },
      university: {
        cause: 'The German backing for Vienna is usually called a blank cheque, but that reading rests on ' +
          'documents published in Germany after 1918, and the extent to which Berlin directed Austrian ' +
          'policy is still argued. The sixteen-day delay between the assassination and the ultimatum is ' +
          'evidence used both ways: as proof of a deliberate plan for war, and as proof that Vienna was ' +
          'hesitant and was talked into it.',
        what: 'Whether the ultimatum was drafted to be rejected is unresolved. The assurance of 14 July that ' +
          'acceptance was practically excluded points one way; Berlin’s welcome of the Serbian reply as a ' +
          'suitable basis for negotiation points the other. The army chief Conrad, who wanted a war against ' +
          'Serbia, weighs in most accounts against the foreign ministry’s attempt to keep the question ' +
          'limited.',
        consequence: 'The order of events is contested because the Russian state of preparation of 25 July ' +
          'was kept unpublished until 28 July, so contemporaries reacted to a mobilisation they could not ' +
          'see. Scholarship now gives more weight to Austro-Hungarian motives — the fear that the dual ' +
          'monarchy would decay unless Serbia was broken — than the interwar literature did.',
      },
    },
  },
  {
    id: 'war_on_serbia_1914',
    date: '1914-07-28',
    precision: 'day',
    title: 'Austria-Hungary declares war on Serbia',
    kind: 'politics',
    fronts: ['balkans'],
    countries: ['Austria-Hungary', 'Serbia', 'Russia', 'Germany'],
    figures: ['franz_joseph', 'potiorek', 'nicholas_ii', 'sazonov'],
    note: 'The declaration was made at 11 a.m. on 28 July; Serbia destroyed the Sava and Danube bridges that ' +
      'day and the Austro-Hungarian monitor SMS Bodrog shelled Belgrade on 29 July. The first invasion, the ' +
      'Battle of Cer, is dated 15–24 August in the infobox, with Neiberg at 16–23, Mitrović at 16–20 and ' +
      'Glenny at 15–18 August; losses are given as 18,000–20,000 Serbian and 40,500–44,500 ' +
      'Austro-Hungarian. Russian general mobilisation is dated 30 July by some accounts and 31 July by ' +
      'others.',
    levels: {
      primary: {
        cause: 'Austria-Hungary had sent Serbia a list of demands and said the answer was not enough. ' +
          'Serbia had already called up its army to get ready.',
        what: 'Austria-Hungary declared war on Serbia on the morning of 28 July. Serbian soldiers blew up the ' +
          'bridges over the rivers Sava and Danube that same day to keep the Austrians out. The first shells ' +
          'fell on the capital, Belgrade, on 29 July, fired from an Austro-Hungarian warship on the river.',
        consequence: 'Russia, which had promised to back Serbia, called up more soldiers, and within a week ' +
          'Germany and France were at war too. The first Austrian attack on Serbia was beaten back in the ' +
          'hills around Cer Mountain in mid-August.',
      },
      secondary: {
        cause: 'Franz Joseph had signed an order on 25 July for an eight-corps mobilisation, with operations ' +
          'to begin on 28 July, so the army was already moving before the declaration was made at eleven ' +
          'o’clock that morning. Austria-Hungary asked Germany to deliver the declaration in Belgrade, so ' +
          'that the step would not look like Austria-Hungary’s alone.',
        what: 'Serbian engineers destroyed the railway bridges over the Sava and Danube on 28 July, which ' +
          'delayed the crossing. Shells from the monitor SMS Bodrog fell on Belgrade on 29 July. The first ' +
          'invasion was driven back in fighting around Cer Mountain and the town of Šabac in mid-August, the ' +
          'first Allied victory of the war.',
        consequence: 'Russia ordered a partial mobilisation on 28 July and a general one on 30 or 31 July, ' +
          'and Germany answered with ultimatums of its own. Cer cost the two sides tens of thousands of men ' +
          'between them and left Austria-Hungary to invade Serbia twice more before the end of 1914.',
      },
      university: {
        cause: 'The timing of the Russian mobilisations is used as evidence in the argument about ' +
          'responsibility: whether they answered the Austrian declaration or caused Germany to act. General ' +
          'mobilisation is dated 30 July in one account and 31 July in another, and the state of ' +
          'preparation of 25 July was unpublished until 28 July, so the published record cannot fix the ' +
          'order of decisions on its own.',
        what: 'The Battle of Cer is dated four different ways in the standard accounts, from 15–24 August to ' +
          '15–18 August, and its casualty figures are given as ranges — 18,000–20,000 Serbian, of whom ' +
          '3,000–5,000 were killed, against 40,500–44,500 Austro-Hungarian. Serbian records were largely ' +
          'lost during the retreat of 1915, which is one reason the numbers cannot be closed.',
        consequence: 'Serbian losses for the whole war are given as more than 1,200,000 dead, or over 29 per ' +
          'cent of the population, in Serbian accounts; modern work puts military deaths nearer 177,000, and ' +
          'a 1924 Yugoslav estimate gave 265,164, or a quarter of those mobilised. The figure a historian ' +
          'chooses decides whether the Serbian campaign is written as a national catastrophe or as an army ' +
          'destroyed and rebuilt.',
      },
    },
  },
  {
    /* Two days before Germany declared war on Russia, and in the same fortnight as
       the ultimatum, because the attitude of the French labour movement in August
       cannot be explained without it. */
    id: 'jaures_assassinated',
    date: '1914-07-31',
    precision: 'day',
    title: 'Jean Jaurès is shot in a Paris café',
    kind: 'politics',
    fronts: ['politics', 'home'],
    countries: ['France'],
    figures: ['jaures'],
    note: 'English Wikipedia, “Assassination of Jean Jaurès” and “Jean Jaurès”. Jaurès was 54, deputy ' +
      'for the Tarn, leading figure of the SFIO and editor of L’Humanité. Villain was a 29-year-old ' +
      'archaeology student at the École du Louvre and a member of the Ligue des jeunes amis de ' +
      'l’Alsace-Lorraine, a pro-war student group close to Action Française; he was arrested at once, said ' +
      'he had acted alone to suppress an enemy of his country, and that account of an isolated act was ' +
      'repeated unchanged in the indictment of 22 October 1915. On 30 July Jaurès had persuaded the CGT’s ' +
      'Léon Jouhaux to postpone the demonstrations planned for 2 August until the 9th (Becker 2004, ' +
      'p. 104). Jouhaux spoke at the funeral, after which the body was taken by train to Albi for burial, ' +
      'vowing to drive back the aggressor (Albertini, Origins III, p. 225), and the Socialist deputies ' +
      'voted the military credits unanimously at the Palais Bourbon (Lacouture 1977, p. 132). Villain was ' +
      'tried after the war, acquitted in 1919, and killed by Republicans in Spain in 1936. The cry “they ' +
      'have killed Jaurès, it is war” is recorded by Lalouette (2014, p. 221) as a later nationalist ' +
      'version of events rather than anything contemporaries heard.',
    levels: {
      primary: {
        cause: 'Jean Jaurès was the most famous man in France who did not want a war. He thought that workers in France and in Germany could refuse to fight at the same time, and so make their leaders settle the quarrel instead.',
        what: 'On 31 July he was having dinner in a café in Paris, writing an article against the war for his newspaper. A young man who wanted the war walked up to the window and shot him twice in the back.',
        consequence: 'After that almost nobody on the French side kept protesting. The trade unions and the socialists came round to supporting the war against Germany, and Jaurès’s body was taken by train to Albi, in the part of France he represented, to be buried.',
      },
      secondary: {
        cause: 'Jaurès led the French Socialist Party, the SFIO, and edited its newspaper L’Humanité, and in 1913 he had campaigned against the law that lengthened military service to three years. His plan for preventing war was a strike begun at the same moment by the workers of France and Germany, which would leave every government unable to mobilise its army.',
        what: 'On the evening of 31 July he dined at the Café du Croissant, a few streets from his newspaper’s offices, preparing the anti-war article for the next day’s issue. Raoul Villain, an archaeology student who belonged to a pro-war league, fired two shots through the window; one passed through Jaurès’s skull and killed him almost at once.',
        consequence: 'The protest collapsed within days: the unions called off their demonstrations and the Socialist deputies voted the war credits alongside the other parties, in what was called the Sacred Union. Jaurès’s death is usually told as the end of French opposition to the war, although the movement had already begun moving that way before the shots.',
      },
      university: {
        cause: 'The notion that a single man stood between France and mobilisation rests on his fame rather than on the condition of the movement he led, and that condition is documented for 30 July: he persuaded Jouhaux to postpone the CGT demonstrations from 2 August to the 9th, which is the act of a leader watching his own plan give way.',
        what: 'The police record is unusually good — hour, weapon, path of the bullet — but the crowd is not. Lalouette traces the cry “they have killed Jaurès, it is war” to a later nationalist version of events, and Villain’s assertion that he acted alone was adopted unchanged by the indictment of October 1915 and has never been disproved, so whether his league encouraged him remains open.',
        consequence: 'The assassination settles nothing about August 1914 and a great deal about what followed: the Sacred Union came apart when Villain was acquitted in 1919, and the transfer of the ashes to the Panthéon in 1924 split socialists from communists. Jaurès is therefore used by historians chiefly as evidence of how the war was remembered and fought over afterwards, since the counterfactual cannot be tested against any source.',
      },
    },
  },
  {
    id: 'invasion_of_belgium_britain_enters',
    date: '1914-08-04',
    precision: 'day',
    title: 'The invasion of Belgium and Britain’s entry',
    kind: 'invasion',
    fronts: ['western', 'politics'],
    countries: ['Germany', 'Belgium', 'United Kingdom', 'France', 'Luxembourg'],
    figures: ['moltke_the_younger', 'bethmann_hollweg', 'grey'],
    note: 'Belgium refused passage on 2 August and the German army invaded on the morning of 4 August; ' +
      'Luxembourg was seized on 2 August. Liège is dated 5–16 August, the city itself taken on 7 August; ' +
      'German strength 28,900–31,200 men and 140 guns against 32,000 men and 280 Belgian guns, German ' +
      'losses 3,300 by 8 August (Zuber), Belgian losses 6,000–20,000 including 4,000 captured, which Herwig ' +
      'raises to 20,000. The sack of Dinant, about 674 civilians killed and two-thirds of the buildings ' +
      'destroyed, is dated 23 August in the text and 21–28 August in the infobox.',
    levels: {
      primary: {
        cause: 'Germany’s plan to beat France quickly meant marching its armies through Belgium, a small ' +
          'country that the great powers had all agreed in 1839 would stay neutral. Belgium was asked to let ' +
          'German troops pass and said no.',
        what: 'German troops crossed into Belgium on 4 August. The fortified town of Liège, ringed by forts, ' +
          'held out from 5 to 16 August, and the last fort was not taken until the sixteenth. Britain ' +
          'promised to protect Belgian neutrality and sent Germany an ultimatum the same evening.',
        consequence: 'Britain declared war on Germany on 4 August. Most of Belgium was overrun within weeks, ' +
          'but a Belgian army and government held on in a strip of land behind the Yser river for the whole ' +
          'war. Germany came to hold about 95 per cent of Belgian territory.',
      },
      secondary: {
        cause: 'Germany needed the flat roads of Belgian Flanders to turn the French frontier fortifications ' +
          'rather than attack them head on. Its ultimatum of 2 August demanded free passage; the Belgian ' +
          'government refused and ordered the field army towards the river Gete. Neutral Luxembourg was ' +
          'occupied the same day.',
        what: 'Germany declared war on Russia on 1 August, on France on 3 August and on Belgium on 4 August. ' +
          'The British ultimatum was delivered at 7 p.m. on 4 August and ran out at midnight; Britain ' +
          'declared war that day. At Liège about 32,000 Belgians with 280 guns held up between 28,900 and ' +
          '31,200 Germans, who lost 3,300 men by 8 August.',
        consequence: 'The invasion settled a question the British cabinet had been divided over, and gave the ' +
          'war a public reason that volunteers could understand. The siege put the German timetable four or ' +
          'five days behind, and Namur was not reached until 20 August. German troops, convinced that ' +
          'civilians were fighting as francs-tireurs, shot hostages and burned towns; at Dinant on 23 ' +
          'August about 674 men, women and children were killed and two-thirds of the buildings destroyed.',
      },
      university: {
        cause: 'The insistence on the Belgian route is usually read as the operational choice that made a ' +
          'short war impossible, and since the 1990s the Schlieffen Plan has been re-examined as a plan ' +
          'Moltke the Younger had already weakened, rather than one he betrayed. The argument that military ' +
          'necessity demanded the violation rests mainly on the memoirs of the German commanders who ' +
          'planned it, written after defeat.',
        what: 'The numbers for Liège are unstable. German strength and the 3,300 casualties by 8 August come ' +
          'from Zuber; Belgian losses are given as anything from 6,000 to 20,000 including 4,000 prisoners, ' +
          'and Herwig takes the high end, so the same siege can be written as a costly German effort or a ' +
          'brief one. Whether 32,000 defenders were part of the field army or of the fortress garrison ' +
          'changes what the delay means.',
        consequence: 'The delay at Liège is estimated at four or five days, which matters greatly to the ' +
          'argument about the Marne but rests on comparing German arrival dates with a plan that had already ' +
          'been altered. The killing of civilians is documented in Belgian testimony gathered during the war ' +
          'and in German orders, such as the instruction to treat civilians with the utmost rigour, and ' +
          'officers were announcing on 21 August that Dinant would be burned and its people killed.',
      },
    },
  },
  {
    id: 'battle_of_the_frontiers_mons',
    date: '1914-08-23',
    precision: 'day',
    title: 'The Battle of the Frontiers and Mons',
    kind: 'battle',
    fronts: ['western'],
    countries: ['France', 'Germany', 'Belgium', 'United Kingdom'],
    figures: ['joffre', 'french_john', 'moltke_the_younger'],
    note: 'Dated to 23 August, the day of Mons; the fighting in this card runs from 7 August to 6 September. ' +
      'The French total of 329,000 casualties covers 6 August to 5 September and the British 29,598 covers ' +
      '6 August to 30 September, so the two are not periods of the same length. Mons casualties are 1,638 ' +
      'British and an estimated 2,000–5,000 German.',
    levels: {
      primary: {
        cause: 'France attacked into the lost provinces of Alsace and Lorraine in August 1914, hoping to push ' +
          'the Germans back. A small British army, called the BEF, came to help and took up positions near ' +
          'the town of Mons in Belgium.',
        what: 'The fighting lasted about a month along the French frontier. The attacks in Lorraine and ' +
          'Alsace failed, and at Mons on 23 August the British army faced much larger German forces and had ' +
          'to fall back. The retreat went on southwards for weeks.',
        consequence: 'Both sides lost enormous numbers of men in a few weeks. The German armies were inside ' +
          'France and moving on Paris, which set up the great battle on the river Marne in September.',
      },
      secondary: {
        cause: 'French Plan XVII ordered an attack on Lorraine and on Mulhouse in Alsace, on the assumption ' +
          'that the main German blow would come south of Belgium. Mulhouse was taken on 8 August and lost ' +
          'again on 10 August. The British Expeditionary Force, about 80,000 men in two corps with 300 guns, ' +
          'concentrated at Mons on the left of the French line.',
        what: 'The engagements known as the Battle of the Frontiers ran from 7 August to 6 September. ' +
          'Mulhouse was entered a second time on 19 August, with 3,000 prisoners taken, and given up on 26 ' +
          'August. At Mons on 23 August about 80,000 British troops faced four German corps with roughly 600 ' +
          'guns, and the British fell back; a rearguard stand at Le Cateau on 26 August covered the ' +
          'retreat.',
        consequence: 'French casualties from 6 August to 5 September are counted at 329,000, and the BEF lost ' +
          '29,598 men between 6 August and 30 September. The retreat left the Germans within 40 km of Paris ' +
          'and forced the French commander Joffre to choose between falling back further and turning to ' +
          'fight.',
      },
      university: {
        cause: 'The size of the French losses in August is used to ask whether Plan XVII failed through its ' +
          'doctrine of the offensive, through its assumptions about the German right wing, or simply through ' +
          'the numbers the Germans could put in the field. Work on 1914 since the 2000s resists the idea ' +
          'that the German plan failed only because Moltke weakened the right wing; it failed on the ' +
          'frontier too.',
        what: 'The headline totals cover different spans — 329,000 French casualties between 6 August and 5 ' +
          'September, 29,598 British between 6 August and 30 September — and are often added together as ' +
          'though they measured one battle. The German losses at Mons, 2,000–5,000, are an estimate rather ' +
          'than a return, and German strength there is a reconstruction from corps establishments.',
        consequence: 'August 1914 was described by contemporaries as a German victory, and the Marne ' +
          'afterwards as a decisive one. Historians of 1914 now argue about whether either battle decided ' +
          'anything, since the front did not become a continuous trench line until November, and the ' +
          'retreat was not uniform on any part of the front.',
      },
    },
  },
  {
    id: 'galicia_lemberg_przemysl',
    date: '1914-08-23',
    precision: 'day',
    title: 'The Battle of Galicia and the siege of Przemyśl',
    kind: 'offensive',
    fronts: ['eastern'],
    countries: ['Russia', 'Austria-Hungary'],
    figures: ['conrad_hoetzendorf'],
    note: 'The Battle of Galicia is dated 23 August to 11 September 1914. Strength: 1,000,000–1,200,000 ' +
      'Russian against 950,000 Austro-Hungarian. Casualties are given as a range, 324,000–420,000 ' +
      'Austro-Hungarian and 200,000–300,000 Russian; Herwig gives 100,000 dead, 220,000 wounded and 100,000 ' +
      'captured, Buttar 324,000 including 130,000 prisoners against 225,000 Russian, and other accounts ' +
      'round 400,000 against 250,000. Przemyśl was invested from 16 September, the siege suspended 11 ' +
      'October, resumed 9 November, and the fortress fell on 22 March 1915 after 133 days; it is folded ' +
      'into this card rather than given its own.',
    levels: {
      primary: {
        cause: 'Russia had a very big army, and it was ready to fight sooner than Germany had expected. ' +
          'Russia sent armies into Galicia, the plain in the east of the Austro-Hungarian kingdom.',
        what: 'From 23 August the two armies fought each other all along the Galician frontier. The fighting ' +
          'lasted about three weeks, and the Austro-Hungarian armies were driven back with very heavy ' +
          'losses.',
        consequence: 'The Russian army took a large part of Galicia and pushed the front to the Carpathian ' +
          'mountains. The fortified city of Przemyśl was shut in by the Russians and held out until March ' +
          '1915.',
      },
      secondary: {
        cause: 'Austria-Hungary put its main effort against Serbia, which left Galicia defended by fewer ' +
          'armies than Russia could bring against it. Russia committed between a million and 1.2 million men ' +
          'to the offensive; Austria-Hungary had about 950,000, spread over a wide front with weak links ' +
          'between its armies.',
        what: 'The battle ran from 23 August to 11 September 1914. Austro-Hungarian counterattacks failed one ' +
          'after another and the army gave up about 160 km of ground on its way back to the Carpathians. ' +
          'Austro-Hungarian losses are put at between 324,000 and 420,000 men, many of them prisoners, and ' +
          'Russian losses at 200,000 to 300,000. The fortress of Przemyśl on the river San was surrounded ' +
          'from 16 September.',
        consequence: 'Austria-Hungary lost a large part of its trained army and of its professional officers ' +
          'in six weeks, and became more dependent on German troops and German direction for the rest of the ' +
          'war. Przemyśl, besieged again from 9 November, surrendered on 22 March 1915 after 133 days, ' +
          'together with its garrison.',
      },
      university: {
        cause: 'Galicia is usually offered as the proof that Austria-Hungary could not fight a war alone, and ' +
          'the strength of that claim depends on which casualty totals a historian accepts. The spread is ' +
          'wide: Herwig gives 100,000 dead, 220,000 wounded and 100,000 captured, Buttar 324,000 with 130,000 ' +
          'prisoners against 225,000 Russian, and other accounts about 400,000 against 250,000.',
        what: 'The infobox ranges of 324,000–420,000 and 200,000–300,000 hide contested subtotals, and the ' +
          'prisoner figures are the least reliable part, because men classed as missing often came back to ' +
          'their own lines weeks later. The same problem appears at Tannenberg and at the Masurian Lakes, ' +
          'where prisoner totals differ by tens of thousands between the victor’s returns and the loser’s.',
        consequence: 'Whether Galicia ended Austro-Hungarian command as an independent force in 1914, or only ' +
          'exposed faults already visible in mobilisation and manning, is still debated. The campaign is ' +
          'also a test case for the wider argument that the Central Powers lost the war in September 1914, ' +
          'since Galicia, the Marne and East Prussia all failed in the same month.',
      },
    },
  },
  {
    id: 'tannenberg',
    date: '1914-08-26',
    precision: 'day',
    title: 'The Battle of Tannenberg',
    kind: 'battle',
    fronts: ['eastern'],
    countries: ['Germany', 'Russia'],
    figures: ['hindenburg', 'luddendorff'],
    note: 'Fought 26–30 August near Allenstein and named by Hindenburg after Tannenberg, 30 km to the west. ' +
      'Russian Second Army losses: 92,000 prisoners and 50,000 killed in Hindenburg’s memoirs, no more than ' +
      '80,000 by Oleynikov, and 120,219 by unit reports (5,522 killed, 12,326 wounded, 75,435 missing, ' +
      '26,936 uncategorised). German losses are given as 12,000 of 150,000, with another estimate near ' +
      '30,000. The First Battle of the Masurian Lakes, which follows here, is dated 2–16 September by its ' +
      'infobox and 7–14 September by many accounts; the Russian First Army lost about 100,000 men, more ' +
      'than 30,000 of them prisoners, and 150 guns.',
    levels: {
      primary: {
        cause: 'Two Russian armies marched into East Prussia in August 1914. The Germans were far outnumbered ' +
          'and had to stop the two armies from joining together. The German commander there was replaced and ' +
          'two new commanders were sent, Hindenburg and Ludendorff.',
        what: 'The Russian Second Army marched into a trap. Between 26 and 30 August the German armies closed ' +
          'in around it near the town of Allenstein. The Russian commander, General Samsonov, killed himself ' +
          'when he saw that his army was lost.',
        consequence: 'Almost the whole Russian Second Army was destroyed. A few days later the other Russian ' +
          'army was driven out of East Prussia too. The victory made Hindenburg and Ludendorff famous in ' +
          'Germany.',
      },
      secondary: {
        cause: 'Germany kept only about a tenth of its mobilised army in East Prussia, meaning to defend ' +
          'there while it attacked France. After the battle of Gumbinnen the Germans fell back, and on 22 ' +
          'August Hindenburg and Ludendorff were sent out to replace the commander, with a plan to turn ' +
          'against the Russian Second Army while a small force kept the First Army busy.',
        what: 'The battle was fought from 26 to 30 August 1914 near Allenstein, though Hindenburg called it ' +
          'Tannenberg, after a village 30 km to the west, to avenge a German defeat of 500 years before. The ' +
          'Russians sent their daily marching orders by radio without coding them, so the Germans could read ' +
          'them and move without fear of being caught on the flank. The Russian Second Army lost about ' +
          '120,000 men.',
        consequence: 'Tannenberg gave Germany a national myth and gave Hindenburg and Ludendorff the prestige ' +
          'that made them the effective rulers of the country from 1916. Russian losses were so heavy that ' +
          'the armies in the north took months to recover, and the follow-up battle of the Masurian Lakes in ' +
          'September cost the Russian First Army about 100,000 more and cleared East Prussia.',
      },
      university: {
        cause: 'Tannenberg was made into a monument while it was still being fought, which is the chief ' +
          'source problem: the first accounts were written by the winners, to justify the sudden replacement ' +
          'of Prittwitz and to sell the image of a perfect encirclement. Recent work, Buttar’s in ' +
          'particular, has restored the staff officers who drew up the plan and questioned how much of the ' +
          'battle was designed and how much was a pursuit that happened to close.',
        what: 'Russian losses are given as 92,000 prisoners plus 50,000 killed in Hindenburg’s memoirs, no ' +
          'more than 80,000 by Oleynikov, and 120,219 in unit reports broken down into 5,522 killed, 12,326 ' +
          'wounded, 75,435 missing and 26,936 uncategorised. German losses are given as 12,000 out of ' +
          '150,000, with a competing estimate of about 30,000.',
        consequence: 'The 75,435 missing are the heart of the problem: a prisoner counted by the victor was ' +
          'often a man who reached home, which is why the totals for East Prussia differ by tens of ' +
          'thousands and why prisoner figures across 1914 should be treated as the least stable number in ' +
          'the campaign. The battle is now usually written as an encirclement completed by accident rather ' +
          'than the planned annihilation of the German accounts.',
      },
    },
  },
  {
    id: 'first_battle_of_the_marne',
    date: '1914-09-05',
    precision: 'day',
    title: 'The First Battle of the Marne',
    kind: 'battle',
    fronts: ['western'],
    countries: ['France', 'Germany', 'United Kingdom'],
    figures: ['joffre', 'gallieni', 'french_john'],
    note: 'Fought 5–12 September. Allied strength is given as 1,080,000 — 980,000 French and 100,000 British — while the German strength is given as ' +
      '750,000 to 900,000, so this card says about a million Allied troops. Casualties: 250,000 French, 12,733 ' +
      'British and 298,000 German, of whom 38,000 were captured. Gallieni, as military governor of Paris, ' +
      'reported the exposed German flank on 3 September and Joffre ordered the counter-offensive on 4 ' +
      'September.',
    levels: {
      primary: {
        cause: 'The German armies had marched hundreds of kilometres through Belgium and northern France and ' +
          'were close to Paris. They were exhausted, and two of them had left a gap between them.',
        what: 'The French army and the small British army stopped retreating and turned to fight between 5 ' +
          'and 12 September, along the river Marne. The French commander Joffre gave the order ' +
          'to attack on 4 September, after the governor of Paris noticed the gap between the German ' +
          'armies.',
        consequence: 'The German armies fell back to the river Aisne and dug in on the high ground. Any hope ' +
          'of a quick end to the war was gone, and for the next four years the soldiers on this front ' +
          'largely lived in trenches.',
      },
      secondary: {
        cause: 'The German advance had outrun its supplies. Kluck’s First Army had marched 500 km in a month, ' +
          'was 140 km beyond the railway that supplied it with most of its motor transport broken down, and ' +
          'had lost 20,000 men to fighting and sickness; Bülow’s Second Army had shrunk from 260,000 to ' +
          '154,000 men. Wheeling south-east behind Paris rather than covering the turn left their right ' +
          'flank exposed towards the city.',
        what: 'Gallieni, the military governor of Paris, saw the exposed flank on 3 September and persuaded ' +
          'Joffre, who ordered the general counter-offensive on 4 September. The battle ran from 5 to 12 ' +
          'September 1914 and involved about a million French and British troops. John French, who ' +
          'commanded the BEF and had been planning to fall back to the Channel ports, brought his little ' +
          'army into the attack.',
        consequence: 'German losses are estimated at 298,000 men, including 38,000 captured, against 250,000 ' +
          'French and 12,733 British. The retreat to the Aisne began the Race to the Sea, in which each side ' +
          'tried to turn the other’s western end and failed, and by November the front ran unbroken from the ' +
          'Channel to Switzerland.',
      },
      university: {
        cause: 'The claim that the Marne decided the war rests on a counterfactual, and Herwig’s judgement ' +
          'that it was the most important land battle of the twentieth century has been answered by ' +
          'historians of logistics who point out that the German armies were already spent before the ' +
          'fighting began: Kluck’s men were described in the sources as living scarecrows.',
        what: 'Strength figures vary by a third — 1,080,000 French and British in Herwig against German returns of 750,000 to ' +
          '900,000 Germans — and the casualty totals of 250,000 French, 12,733 British and 298,000 ' +
          'German are estimates compiled from divisional returns kept during a retreat, so no two accounts ' +
          'agree. Bülow’s 260,000 falling to 154,000 is the firmest figure in the battle, because it comes ' +
          'from army returns rather than from the battlefield.',
        consequence: 'The battle entered French memory as the miracle on the Marne, a version shaped by ' +
          'Joffre’s own account and by the quarrel over who first saw the German flank — Gallieni and his ' +
          'staff, Joffre, or the British. The priority dispute is unresolved because the claims were made in ' +
          'postwar memoirs by the men involved, and the miracle framing has been dropped in favour of ' +
          'exhaustion on the German side.',
      },
    },
  },
  {
    id: 'race_to_the_sea_first_aisne',
    date: '1914-09-13',
    precision: 'day',
    title: 'The Aisne and the Race to the Sea',
    kind: 'offensive',
    fronts: ['western'],
    countries: ['France', 'Germany', 'United Kingdom', 'Belgium'],
    figures: ['joffre', 'french_john'],
    note: 'The First Battle of the Aisne is dated 13–28 September, the Race to the Sea 17 September to 19 ' +
      'October, and the Siege of Antwerp 28 September to 10 October. The Race to the Sea article gives the ' +
      'end of the fighting on the Yser as 2 November, where the Yser article gives 31 October. These are ' +
      'editorial choices, not disagreements about facts, and they decide which month a timeline puts each ' +
      'engagement in.',
    levels: {
      primary: {
        cause: 'After the Marne the German armies pulled back to the river Aisne and held the high ground on ' +
          'the far bank. Neither side could get round the other’s end, because the line of trenches had no ' +
          'end yet.',
        what: 'Both armies sent troops north-west, each trying to reach the sea first and turn the other’s ' +
          'side. The fighting ran on through September and October, from the Aisne into Belgium, and the ' +
          'fortified city of Antwerp held out until 10 October.',
        consequence: 'Nobody got round anybody. The line grew longer and longer until it reached the sea, and ' +
          'the trenches that had been dug for a few days stayed for four years.',
      },
      secondary: {
        cause: 'Fighting on the Aisne from 13 to 28 September showed that attacking dug-in infantry armed ' +
          'with machine-guns was now ruinously expensive, so both commanders tried to pass the western end ' +
          'of the line instead of breaking through it. Joffre sent French divisions north to Flanders; the ' +
          'Germans got there first in places, and Antwerp, which had been besieged since 28 September, fell ' +
          'on 10 October.',
        what: 'The Race to the Sea is dated 17 September to 19 October 1914. It was not a race across open ' +
          'country but a series of meetings, as each side’s reinforcements arrived on the same roads and ' +
          'dug in where they stood. By the end the front ran from the Swiss frontier to Ypres, and the only ' +
          'open flank left was the low ground behind the Yser in Belgium.',
        consequence: 'The failure of both flanks made the war on the western frontier a static one, which was ' +
          'the outcome the German plan had been written to avoid. It also brought the fighting to the last ' +
          'piece of Belgium still in Belgian hands, where the battle of the Yser was fought in the second ' +
          'half of October.',
      },
      university: {
        cause: 'The Race to the Sea is a name given afterwards; no headquarters planned it as one operation, ' +
          'and the units concerned were sent to particular towns without knowing what the enemy was doing. ' +
          'That makes the campaign difficult to date, since its beginning and end depend on which sector is ' +
          'being described.',
        what: 'The span 17 September to 19 October is the usual one, but the Aisne is given as 13–28 ' +
          'September, the Siege of Antwerp as 28 September to 10 October, and the Yser as 16–31 October in ' +
          'one place and to 2 November in another. The differences are matters of where an editor chose to ' +
          'stop, which is a real problem for a site that must assign each event to one month.',
        consequence: 'The account of this phase rests heavily on the British official history of the 1920s, ' +
          'written partly to explain the loss of the old regular army, and the French and German official ' +
          'histories give different dates for the same moves. Antwerp is the best documented part of the ' +
          'phase, because a siege keeps records, while the open-country fighting is largely reconstructed ' +
          'from war diaries written as the units moved.',
      },
    },
  },
  {
    id: 'yser_and_first_ypres',
    date: '1914-10-19',
    precision: 'day',
    title: 'The Yser and the First Battle of Ypres',
    kind: 'battle',
    fronts: ['western'],
    countries: ['Belgium', 'France', 'Germany', 'United Kingdom'],
    note: 'The Yser is dated 16–31 October and First Ypres 19 October to 22 November, with phases at ' +
      'Langemarck 21–24 October, Gheluvelt 29–31 October and the Nonne Bosschen ridge on 11 November. The ' +
      'German figure of 76,250 covers 18 October to 30 November between Gheluvelt and the coast (Edmonds) ' +
      'and is not a Yser return. First Ypres is given an indecisive result. The Christmas truce of 24–25 ' +
      'December, which followed this fighting along the same front, is recorded here rather than as its own ' +
      'card: it was a series of unofficial ceasefires, and Smith-Dorrien of II Corps issued orders ' +
      'forbidding friendly communication with the Germans.',
    levels: {
      primary: {
        cause: 'Both armies tried to turn each other’s northern end, and they met in the flat country of ' +
          'Flanders, where there are ditches and canals instead of hills. The Belgians were holding the last ' +
          'bit of their own land, along the river Yser.',
        what: 'From 16 October the Germans attacked the Belgian line on the Yser. The Belgians opened the ' +
          'sluices and let the sea flood the land in front of them, which stopped the Germans crossing. ' +
          'Further south, round the town of Ypres, the fighting began on 19 October and went on until 22 ' +
          'November.',
        consequence: 'The Germans took almost all of Belgium but did not reach the ports on the Channel. Both ' +
          'sides were so short of men that they threw in reserves and lost them heavily. After this the ' +
          'western frontier was one line of trenches from the sea to Switzerland.',
      },
      secondary: {
        cause: 'The Yser line was held by about 52,000 Belgians, 6,600 French troops and three British ' +
          'monitors, small warships that could shell the banks, against 60,000 to 85,000 Germans. The ground ' +
          'was below sea level and could be flooded from the sluices at Nieuwpoort, which was the only ' +
          'natural obstacle left in the way of the German advance to the coast.',
        what: 'The battle on the Yser lasted from 16 to 31 October, and the flooding ended the German ' +
          'crossings; the Belgians lost 3,500 killed and 15,000 wounded. Round Ypres the fighting ran from ' +
          '19 October to 22 November in three main phases: Langemarck from 21 to 24 October, Gheluvelt on ' +
          '29–31 October and the Nonne Bosschen ridge on 11 November.',
        consequence: 'The Yser was an Allied victory in the sense that Belgium kept a strip of its own coast, ' +
          'though Germany held 95 per cent of Belgian territory. German losses between Gheluvelt and the ' +
          'coast from 18 October to 30 November are given at 76,250. Ypres itself is usually called ' +
          'indecisive: neither side broke through and neither was defeated.',
      },
      university: {
        cause: 'The Yser is remembered in Belgium as the beginning of a national story of heroic sacrifice, ' +
          'with King Albert as its symbol, and that memory shaped what was written about the battle for a ' +
          'century. Reading the military history means separating it from the commemoration, and from the ' +
          'postwar argument about how much Belgium owed to its allies.',
        what: 'Belgian strength of 52,000 and German strength of 60,000–85,000 come from Amez, the Belgian ' +
          'casualties from Schaepdrijver, and the German figure of 76,250 from the British official history ' +
          'of Edmonds. That last figure covers a different area and a longer period than the battle it is ' +
          'quoted against, and is often printed as though it were a Yser return. The end of the battle is ' +
          'dated 31 October in one article and 2 November in another.',
        consequence: 'First Ypres is called indecisive because it produced no breakthrough, but the phase ' +
          'fighting at Langemarck, Gheluvelt and the Nonne Bosschen has been re-examined for what it shows ' +
          'about German and British tactical learning, and for how far the units engaged were as ' +
          'untrained as the Langemarck legend later claimed. The Christmas ceasefires of 24–25 December, ' +
          'along this same front, are documented in soldiers’ letters rather than in records, which is why ' +
          'their extent is argued; the orders forbidding them, such as Smith-Dorrien’s, survive instead.',
      },
    },
  },
  {
    id: 'ottoman_empire_enters_the_war',
    date: '1914-10-29',
    precision: 'day',
    title: 'The Ottoman Empire enters the war',
    kind: 'alliance',
    fronts: ['middle_east', 'caucasus', 'naval', 'politics'],
    countries: ['Ottoman Empire', 'Germany', 'Russia', 'United Kingdom', 'France'],
    figures: ['enver_pasha'],
    note: 'The secret German–Ottoman alliance is dated 2 August 1914 by the article on the alliance and 30 ' +
      'July by the July Crisis article; 2 August is used here and the disagreement is noted. Goeben and ' +
      'Breslau reached the Dardanelles on 10 August and were transferred to the Ottoman navy on 16 August as ' +
      'Yavuz Sultan Selim and Midilli, with German crews. The Dardanelles were closed on 27 September. The ' +
      'Black Sea raid is dated 29 October, the Russian declaration of war 2 November and the British and ' +
      'French 5 November. The Bergmann Offensive, the first engagement in the Caucasus, ran from 2 to 21 ' +
      'November and is folded into the Sarikamish card.',
    levels: {
      primary: {
        cause: 'Germany and the Ottoman Empire signed a secret agreement on 2 August 1914. Two German ' +
          'warships, chased by the British navy, hid inside the straits that guard the Ottoman capital and ' +
          'were handed over to the Ottoman fleet, still with their German sailors aboard.',
        what: 'On 29 October those ships, sailing with Ottoman warships, crossed the Black Sea and shelled ' +
          'the Russian ports of Odessa, Feodosia, Novorossiysk and Sevastopol. The ships now flew the ' +
          'Ottoman flag but were still largely crewed by Germans.',
        consequence: 'Russia declared war on the Ottoman Empire on 2 November, and Britain and France on 5 ' +
          'November. The war now reached the Caucasus mountains and the Middle East, and Russia’s sea trade ' +
          'through the straits was shut off.',
      },
      secondary: {
        cause: 'The Ottoman–German alliance was signed and ratified on 2 August 1914, but the Ottoman ' +
          'government at first held back, especially after Britain requisitioned two battleships the ' +
          'Ottomans had paid for and its military mission left. The arrival of the German battlecruiser ' +
          'Goeben and the light cruiser Breslau in the Dardanelles on 10 August, and their transfer to the ' +
          'Ottoman navy on 16 August as Yavuz Sultan Selim and Midilli, gave the pro-war politicians a fleet ' +
          'they had not had to build, and their German commander, Souchon, took charge of the Ottoman fleet ' +
          'in September.',
        what: 'On 29 October Souchon took Goeben, Breslau and Ottoman warships into the Black Sea and ' +
          'bombarded Novorossiysk, Feodosia, Odessa and Sevastopol. Russia declared war on 2 November and ' +
          'Britain and France on 5 November. The Ottomans mobilised more than 3 million men from a pre-war ' +
          'army of about 210,000, and the Dardanelles, closed since 27 September, had carried over 90 per ' +
          'cent of Russia’s seaborne trade.',
        consequence: 'Fighting in the Caucasus began almost at once, when Russian troops crossed on 2 November ' +
          'and fought on to 21 November. The loss of the straits pushed Russian trade onto the Baltic and ' +
          'Arctic routes, and new fronts opened in the Middle East that the Ottoman Empire had to garrison ' +
          'for the rest of the war. Ottoman deaths reached 771,000, more than half of them from disease.',
      },
      university: {
        cause: 'Whether the entry was a coup by Enver Pasha and the Committee of Union and Progress or a ' +
          'rational alliance with the only power that would guarantee the empire is still argued, and the ' +
          'date a historian chooses shows which actor is being made decisive: the treaty of 2 August, the ' +
          'ships of 10 and 16 August, or the raid of 29 October. Two articles in the same encyclopaedia ' +
          'date the treaty to 30 July and 2 August.',
        what: 'Ottoman figures are quoted at three scales — a pre-war army of about 210,000, more than 3 ' +
          'million mobilised, and 771,000 dead, of which 325,000 killed in action and 466,700 died of disease ' +
          '— and a mortality in which disease kills more than half is not comparable with European totals ' +
          'without accounting for medical services, transport and the 1914–15 typhus and cholera epidemics. ' +
          'The first Caucasus fight is called the Köprüköy operation in Russian literature and the battles ' +
          'of Köprüköy and Azap in Turkish, which is one reason its dates differ.',
        consequence: 'Recent scholarship puts the entry in the context of the loss of the empire’s European ' +
          'provinces in 1912–13 and of a leadership that expected a short war with German help, rather than ' +
          'treating the empire as a German satellite. The blame placed on the Armenian population after the ' +
          'defeat at Sarikamish is usually traced to the decisions taken in these same weeks.',
      },
    },
  },
  {
    id: 'battle_of_kolubara',
    date: '1914-11-16',
    precision: 'day',
    title: 'The Battle of the Kolubara',
    kind: 'offensive',
    fronts: ['balkans'],
    countries: ['Serbia', 'Austria-Hungary'],
    figures: ['putnik', 'potiorek'],
    note: 'The battle ran from 16 November to 15 December 1914. Each side lost more than 20,000 dead; the ' +
      'infobox totals for the battle are 132,000 Serbian and 273,000 Austro-Hungarian casualties, which are ' +
      'broken down as 22,000 Serbian killed, 91,000 wounded and 19,000 missing or captured, and 30,000 Austro-Hungarian killed, 173,000 wounded and 70,000 captured. Potiorek and von Frank were relieved ' +
      'on 22 December, and the Austro-Hungarian 5th and 6th Armies were merged into a 5th Army of about ' +
      '95,000 men.',
    levels: {
      primary: {
        cause: 'Austria-Hungary had tried twice to take Serbia in 1914 and had been pushed back both times. ' +
          'In November it attacked again, and the Serbian army fell back across the river Kolubara to rest.',
        what: 'The Austro-Hungarians reached the Kolubara on 16 November and took the capital, Belgrade, at ' +
          'the end of the month. On 2 December the Serbs attacked by surprise along the whole front, in mud ' +
          'and rain, and the Austro-Hungarian armies came apart and withdrew.',
        consequence: 'The Serbs took back the towns of Valjevo and Užice on 8 December and their capital on ' +
          '15 December. Austria-Hungary had hoped to be finished with Serbia by the end of 1914 and had to ' +
          'try again in 1915.',
      },
      secondary: {
        cause: 'The third Austro-Hungarian invasion of 1914 had taken Valjevo and forced a string of Serbian ' +
          'retreats, and on 16 November the 5th and 6th Armies reached the Kolubara. The Serbian army was ' +
          'exhausted and short of ammunition, and its commander Putnik allowed a long withdrawal so that his ' +
          'men could rest and prepare a counterattack, a decision his own government found hard to accept.',
        what: 'Serbia withdrew from Belgrade on 29–30 November and the city was occupied. The counterattack ' +
          'of 2 December was launched on a narrow front, which let the Serbs beat the two Austro-Hungarian ' +
          'armies separately; Valjevo and Užice were retaken on 8 December, and the Austro-Hungarians ' +
          'abandoned Belgrade on 14–15 December as their commander von Frank judged it untenable.',
        consequence: 'More than 20,000 men were killed on each side, and the infobox gives 132,000 Serbian ' +
          'and 273,000 Austro-Hungarian casualties for the campaign as a whole. The defeat humiliated ' +
          'Austria-Hungary, which had expected Serbia to be occupied before the winter was out; Potiorek and ' +
          'von Frank were dismissed on 22 December and their two armies merged.',
      },
      university: {
        cause: 'Kolubara is the strongest case for arguing that the Serbian army of 1914 was a competent ' +
          'force rather than a brave one, because the withdrawal and the counterattack were planned and not ' +
          'spontaneous. That reading goes against the older Serbian account, in which the fighting is told ' +
          'as a popular rising, and against the Austro-Hungarian explanation that defeat came from the ' +
          'condition of the roads and the weather.',
        what: 'The totals are irreconcilable in the ordinary sources: more than 20,000 dead on each side, ' +
          'against infobox figures of 132,000 and 273,000 casualties, with no breakdown of wounded, ' +
          'prisoners and missing, and no way to separate the three invasions. Serbian records were largely ' +
          'destroyed in the retreat of 1915, so the Serbian side of the account is partly reconstructed from ' +
          'Austro-Hungarian returns and from pre-war mobilisation figures.',
        consequence: 'Serbian losses for the whole war are quoted either from the 1924 Yugoslav estimate of ' +
          '265,164 soldiers, or from Serbian accounts of more than 1,200,000 dead including civilians, or ' +
          'from modern work that puts military deaths nearer 177,000; a Serbian army of 420,000 men at its ' +
          'peak was down to 100,000 at the liberation. Which figure is used changes whether 1914 is written ' +
          'as a successful defensive campaign or as the first stage of a demographic disaster.',
      },
    },
  },
  {
    id: 'battle_of_tanga',
    date: '1914-11-03',
    precision: 'day',
    title: 'The Battle of Tanga',
    kind: 'battle',
    fronts: ['africa'],
    countries: ['United Kingdom', 'India', 'Germany'],
    note: 'Fought 3–5 November 1914. The Indian Expeditionary Force B numbered about 9,000 men against ' +
      'Lettow-Vorbeck’s roughly 1,000, and lost 360 killed, 487 wounded and 148 missing; the Germans had 16 ' +
      'Europeans and 55 Askaris killed and 76 wounded. The other campaign of 1914 in Africa, in German South ' +
      'West Africa, is not given its own card; the battle of Sandfontein there, 26 September 1914, left 237 ' +
      'Germans with two guns holding off 1,700 men, with German losses of 16 killed, 51 wounded and 205 ' +
      'captured.',
    levels: {
      primary: {
        cause: 'Britain and France had colonies in Africa next to Germany’s colony of German East Africa. ' +
          'Britain sent a force of soldiers from India by sea to take the port of Tanga, so that the Royal ' +
          'Navy could use the coast.',
        what: 'The landing at Tanga began on 3 November. The British force was about nine times bigger than ' +
          'the German one, but the Germans had machine-guns in the bushes near the beach and the troops ' +
          'landing could not get forward. Fighting went on for three days.',
        consequence: 'The Germans kept the port, and their small army stayed free to fight on in East Africa ' +
          'for the whole war. Very large numbers of soldiers from India, Britain and Africa were tied up ' +
          'there to fight a force of about a thousand men.',
      },
      secondary: {
        cause: 'Tanga was part of a plan to knock out German East Africa early by landing at the port, and the ' +
          'force sent was the Indian Expeditionary Force B, about 9,000 men under Aitken. Its opponent, ' +
          'Lettow-Vorbeck, had only about 1,000 men, mostly Askari soldiers under German officers and ' +
          'senior NCOs, and he had moved them into position as soon as the ships were sighted.',
        what: 'The attack began on 3 November 1914 and went on to the fifth. The Germans had machine-guns ' +
          'covering the coconut palms in front of the beach, the landing was made in the open without ' +
          'enough artillery support, and the force lost 360 killed, 487 wounded and 148 missing. German ' +
          'losses were 16 Europeans and 55 Askaris, the African soldiers in the German service, killed and ' +
          '76 wounded.',
        consequence: 'Tanga was the worst reverse for British arms anywhere in the world in 1914 and ended ' +
          'hopes of a quick conquest of East Africa. Lettow-Vorbeck’s force remained at large for four ' +
          'years, drawing onto itself British, Indian, South African and colonial troops far out of ' +
          'proportion to its size.',
      },
      university: {
        cause: 'The battle is usually explained by the competence of Lettow-Vorbeck; recent work puts more ' +
          'weight on the assumptions of the planners in London and India, who expected a colonial landing ' +
          'against a small force to succeed without a proper assault preparation, and by the reliability of ' +
          'the newly raised units. The Askari troops on both sides have only recently become subjects of the ' +
          'history rather than of the anecdote.',
        what: 'The strength figures — about 9,000 against about 1,000 — are rounded in the sources and ' +
          'include men ashore and afloat, and the 250/750 pair sometimes quoted for the garrison is its ' +
          'initial-and-reinforcement breakdown in the source, not a split between Europeans and Askaris. ' +
          'Casualty figures are given as 360 killed, 487 wounded and 148 missing British and Indian, ' +
          'against 71 killed and 76 wounded German; the missing are mostly men who were captured in the ' +
          'disorder on the beach.',
        consequence: 'The campaign in East Africa is written two ways: as a brilliant distraction by a small ' +
          'German force, which is how it was described in interwar German accounts, and as a failure of ' +
          'British planning that consumed resources the western front needed. Both readings lean on ' +
          'Lettow-Vorbeck’s own memoirs, which is a difficulty, and German South West Africa, conquered by ' +
          'February 1915 after fighting such as Sandfontein on 26 September 1914, is treated as a side ' +
          'matter in both.',
      },
    },
  },
  {
    id: 'falklands_cruiser_war',
    date: '1914-12-08',
    precision: 'day',
    title: 'The Battle of the Falkland Islands and the cruiser war',
    kind: 'battle',
    fronts: ['naval', 'air'],
    countries: ['United Kingdom', 'Germany'],
    note: 'The battle was fought on 8 December 1914, not 10 December. British losses were 10 killed and 19 ' +
      'wounded; German losses were 1,871 killed and 215 captured, with Scharnhorst, Gneisenau and two light ' +
      'cruisers sunk; only the light cruiser Dresden and the collier Seydlitz escaped. Folded into this card rather than given ' +
      'their own: Heligoland Bight, 28 August (British 35 killed and 55 wounded; German 712 killed, 149 ' +
      'wounded and 336 captured, three light cruisers and a torpedo boat sunk); Coronel, 1 November (British ' +
      '1,660 killed, German 3 wounded); the wrecking of the Emden at Cocos on 9 November, after 25 ' +
      'merchantmen raided and the shelling of Madras and of Penang on 28 October (Sydney 4 killed and 16 ' +
      'wounded; Emden 134 killed, 69 wounded and 157 captured); the Cuxhaven raid of 25 December, the first ' +
      'attack by ship-borne aircraft of the Royal Naval Air Service on the German coast, aimed at the ' +
      'Zeppelin sheds at Nordholz, the first Zeppelin raids on England coming in January 1915; and the fall ' +
      'of Tsingtao on 7 November, after a siege begun on 27 August, an Anglo-Japanese operation in which 98 ' +
      'Chinese civilians were killed.',
    levels: {
      primary: {
        cause: 'German warships had crossed the Pacific and, in November, beaten a British squadron off Chile ' +
          'with heavy loss. They sailed home round the south tip of South America, stopping at the ' +
          'Falkland Islands to destroy the British coal depot and radio station there.',
        what: 'The British had sent two big modern battlecruisers south to hunt the Germans down. On 8 ' +
          'December the German ships were too slow to get away and were sunk one by one. Very few of the ' +
          'German sailors were rescued.',
        consequence: 'Germany had no more large warships at sea, so its trade could not come home, while British ' +
          'ships kept sailing the world. The British public, frightened by the raider Emden, took heart. ' +
          '8 December is still a public holiday in the Falkland Islands.',
      },
      secondary: {
        cause: 'A German cruiser squadron under Spee, based in the Pacific, had beaten a British squadron at ' +
          'Coronel off Chile on 1 November, where 1,660 British seamen were killed and the Germans lost three ' +
          'wounded, and had then rounded Cape Horn. Spee meant to destroy the coaling and wireless station at ' +
          'Stanley and the ships there. The British had already taken two battlecruisers off the blockade of ' +
          'Germany and sent them to the South Atlantic to hunt him.',
        what: 'The Germans came into the bay off Stanley on 8 December 1914 and found the harbour defended and ' +
          'the British ships coaled and ready. The battlecruisers could both outsail and outgun the German ' +
          'armoured cruisers: Scharnhorst, Gneisenau and two light cruisers were sunk, the Germans lost 1,871 ' +
          'men killed and only 215 were taken prisoner, and the British lost 10 killed and 19 wounded.',
        consequence: 'German surface raiding in the South Atlantic was over, and the Royal Navy no longer had ' +
          'to detach large ships to hunt cruisers, which freed them for the North Sea. The economic blockade ' +
          'of Germany could be pressed harder, which was the strategy that actually told. In the same weeks ' +
          'came the first attack by ship-borne aircraft on the German coast, at Cuxhaven on 25 December.',
      },
      university: {
        cause: 'Coronel and the Falklands are used together to argue about the readiness of the Royal Navy: ' +
          'an armoured-cruiser squadron was sent against Spee’s modern ships and was beaten, and the answer ' +
          'was to weaken the North Sea blockade by moving battlecruisers south. The British official history, ' +
          'written to justify exactly those decisions, set the shape of the older literature on both ' +
          'actions.',
        what: 'German losses of 1,871 killed against 215 captured are given without a breakdown by ship and ' +
          'include men who died afterwards of wounds, so ships lost and men lost do not reconcile simply. The ' +
          'British total of 10 killed and 19 wounded is an infobox figure and excludes later deaths. The ' +
          'strength totals, two battlecruisers against two armoured cruisers and three light cruisers, leave ' +
          'out the three colliers that were part of Spee’s force and had to be destroyed separately.',
        consequence: 'The wider argument concerns raids against trade versus blockade. Germany’s cruisers in ' +
          '1914 caused alarm out of all proportion to the shipping they took, which is why the Falklands was ' +
          'written up as a turning point, while the pressure that mattered was legal and economic: the Order ' +
          'in Council of 20 August treated conditional contraband as absolute, the Contraband Proclamation of ' +
          '21 September widened the list, and the Order in Council of 29 October, after American protests, ' +
          'put the burden on neutral owners to prove that goods had no military destination.',
      },
    },
  },
  {
    /* The battle ran from this December day into January, so it has two cards:
       this one is the attack and the march into the mountains, the card dated
       January 1915 is the collapse. The id says which phase it owns. */
    id: 'sarikamish_offensive_begins',
    date: '1914-12-22',
    precision: 'day',
    title: 'The Ottoman winter offensive begins at Sarikamish',
    kind: 'offensive',
    fronts: ['caucasus', 'middle_east'],
    countries: ['Ottoman Empire', 'Russia'],
    figures: ['enver_pasha'],
    note: 'The battle ran from 22 December 1914 to 17 January 1915. Ottoman losses are given within a factor ' +
      'of eight: Hafız Hakkı 30,000 dead; Guse 11,000 dead and 3,500 prisoners, or 30,000 dead and 27,000 ' +
      'prisoners; Turkish memoirs about 80,000 in all, of which 30,000 killed and wounded, 25,000 lost to ' +
      'cold, 20,000 in hospital with typhus and 7,000 prisoners. Russian losses are put as high as 30,000, ' +
      'of which about 16,000 were killed and wounded and 12,000 sick or frostbitten. The Bergmann Offensive, ' +
      'the first engagement of the Caucasus campaign, is folded into this card: it ran from 2 to 21 November ' +
      '1914, with 45,000 Russian infantry, 4,000 cavalry and 120 guns against about 50,000 Ottomans with 128 ' +
      'guns by mid-November, Russian losses of about 7,000, and an Ottoman retreat on the night of 21 ' +
      'November in which hundreds died of hypothermia.',
    levels: {
      primary: {
        cause: 'The Ottoman Empire had just joined the war and wanted to take back land from Russia in the ' +
          'Caucasus mountains. Its soldiers had to cross high ground in the middle of winter, and they did ' +
          'not have warm clothing for it.',
        what: 'The attack began on 22 December. The Ottoman troops had been marching for days through snow and ' +
          'bitter cold, and very many froze before they even met the Russians. The fighting went on into ' +
          'January.',
        consequence: 'The Ottomans were beaten, and lost most of their men to cold rather than to bullets. The ' +
          'Russian army kept its frontier. After the defeat, the Ottoman commanders looked for someone to ' +
          'blame and pointed at the Armenians living in the empire.',
      },
      secondary: {
        cause: 'Enver Pasha wanted a victory in the Caucasus to win over the Muslim population of the Russian ' +
          'borderlands, and ordered a wide turning movement against the Russian positions at Sarikamish. The ' +
          'plan needed fast troops reaching fixed objectives at fixed times, and the Third Army had no ' +
          'winter equipment for the Allahuekber Mountains it had to cross. The Russians had struck first, ' +
          'crossing the border on 2 November and fighting towards Köprüköy until the Ottoman retreat on 21 ' +
          'November, in which hundreds of Ottoman soldiers died of cold.',
        what: 'The battle lasted from 22 December 1914 to 17 January 1915. About 25,000 Ottoman soldiers are ' +
          'estimated to have frozen to death before the main engagement began, and an attack order captured ' +
          'on 24 December told the Russian commanders which way the Ottoman corps were moving. The Russians ' +
          'were reinforced to about 130,000 men in the battle. When the army’s commander refused to carry on, ' +
          'Enver Pasha took direct command of the Third Army himself.',
        consequence: 'It was a decisive Russian victory, and the Ottoman Third Army was so weak that it could ' +
          'not attack again for months. Russian losses were put as high as 30,000 men, of which about 16,000 ' +
          'were killed and wounded and 12,000 were sick or frostbitten. The defeat was followed by a search ' +
          'for scapegoats among the Armenians of the border provinces.',
      },
      university: {
        cause: 'Sarikamish is normally told as Enver Pasha’s personal catastrophe, and the criticism of the ' +
          'plan rests on testimony from Ottoman staff officers who had to carry it out and wrote after both ' +
          'the war and the political downfall of the men they served. Enver’s standing inside the Committee ' +
          'of Union and Progress was contested, so the story of one reckless commander is also a piece of ' +
          'internal party argument.',
        what: 'The Ottoman totals differ by a factor of eight. Hafız Hakkı gave 30,000 dead; Guse gives ' +
          '11,000 dead and 3,500 prisoners in one version and 30,000 dead and 27,000 prisoners in another; ' +
          'Turkish memoirs give about 80,000, split into 30,000 killed and wounded, 25,000 lost to cold, ' +
          '20,000 in hospital with typhus and 7,000 prisoners. A total that counts typhus cases is measuring ' +
          'something different from a battle-casualty return, which is why the estimate of 25,000 frozen ' +
          'before the fighting is usually kept separate from all of them.',
        consequence: 'The battle is studied now as much for what followed as for the fighting, because the ' +
          'blame laid on the Armenian population after the defeat fed the events of 1915. That history makes ' +
          'the sourcing of numbers in this campaign especially delicate: Turkish and Russian totals for ' +
          '1914–15 were written in political circumstances, and the civilian losses of the same period are ' +
          'argued about more than any other figures of the war, which is why this card keeps to the military ' +
          'ones.',
      },
    },
  },
];
