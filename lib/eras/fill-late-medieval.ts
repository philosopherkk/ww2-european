import type { EraEvent, EraFigure, EraLine, EraLink } from '@/lib/eras/types';

const ankara1402: EraEvent = {
  id: 'ankara_1402',
  date: '1402-07',
  precision: 'month',
  title: 'Battle of Ankara',
  kind: 'battle',
  fronts: ['anatolia_and_levant'],
  countries: ['Timurid Empire', 'Ottoman Empire'],
  figures: ['timur', 'bayezid_i'],
  note: 'The battle article and a life of Tamerlane date the fight to 28 July 1402. Another article dates it to 20 July 1402, and the battle article notes that other writers use that day. A life of Beyazid gives the year 1402 without a day. One account says he died about three months later. Another says his sons fought over the succession. The month used here is July 1402.',
  levels: {
    primary: {
      cause: 'Timur brought his army against the Ottoman sultan Bayezid I, and the two sides met at Ankara.',
      what: 'In July 1402 Timur’s army defeated the Ottoman force of Bayezid I at Ankara.',
      consequence: 'The Ottoman army was routed, Bayezid was taken, and he died as Timur’s prisoner.',
    },
    secondary: {
      cause: 'Ottoman growth under Bayezid I had carried his power into Anatolia and against other Turkish rulers there. That growth brought him into conflict with Timur, the conqueror whom one account also calls Tamerlane. Their armies met at Ankara. One account adds that many Turkish vassals and the Tatars had already deserted, leaving a thinner force. The other describes desertions during the fighting. The shared cause is the collision of the two rulers at Ankara, not a list of who abandoned whom.',
      what: 'In July 1402 the hosts fought at Ankara and Timur’s men broke the Ottoman line. One narrative calls the ground the Çubuk plain and the victory the opening of an interregnum. Those two details are not in the other narrative, which says the armies met at Ankara and that the sultan’s force was routed. A life of the conqueror dates a day inside July, and another article dates a different day. The shared event is Timur’s victory over Bayezid in July 1402.',
      consequence: 'Bayezid did not leave the field a free man. He was captured and died in Timur’s keeping. One account says the death came about three months later. The other says he died as the conqueror’s prisoner and that his sons then fought one another for the throne. The months and the sons’ quarrel are not in both accounts. What both state is the rout, the captivity, and his death while he was still a prisoner.',
    },
    university: {
      cause: 'Bayezid, also spelled Beyazid, had pushed Ottoman authority across Anatolia before this clash. Timur, called Tamerlane in one life, had built a separate dominion and turned west against him. Their rivalry is the background both narratives assume when they bring the two rulers to Ankara. Desertion is described on both sides of the evidence, but not in the same way: one says Tatars and most Turkish vassals had already gone, so that Serbs and Janissaries remained; the other says Black Tatars and sipahis from Anatolian beyliks changed sides during the battle. Those lists are not identical, and they are not repeated here as a shared order of battle. The cause that remains is Timur’s choice to fight the Ottoman sultan, and Bayezid’s choice to meet him at Ankara.',
      what: 'July 1402 is the month that survives comparison. A narrative of the battle and a life of Tamerlane both print 28 July. A different article prints 20 July, and the battle narrative itself notes that other writers use that earlier day. No single day is therefore given the weight of an agreed date. The place-name used here is Ankara. Fighting on the Çubuk plain, and the label Angora, belong to one narrative’s geography. The action both narratives support is a pitched battle in July 1402, won by Timur, with the Ottoman army driven from the field.',
      consequence: 'Defeat cost Bayezid his freedom. He died still a captive of Timur. One narrative times that death about three months after the battle and calls the political sequel an interregnum. The other says the sons fought on for years and that a later ruler won the contest, and it spells the father Beyazid. Neither the three months nor the sons’ war is copied into the result, because each belongs to a single narrative. The result they share is narrower: the Ottoman host was routed at Ankara in July 1402, and its sultan died a prisoner.',
    },
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Ankara', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/reference/encyclopedias-almanacs-transcripts-and-maps/beyazid-i', publisher: 'Encyclopedia.com' },
    { url: 'https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/empires-timurid', publisher: 'Encyclopedia.com' },
  ],
};

const grunwald1410: EraEvent = {
  id: 'grunwald_1410',
  date: '1410-07-15',
  precision: 'day',
  title: 'Battle of Grunwald',
  kind: 'battle',
  fronts: ['eastern_europe'],
  countries: ['Poland', 'Lithuania', 'Teutonic Order'],
  figures: ['wladyslaw_ii_jagiello', 'vytautas', 'ulrich_von_jungingen'],
  note: 'One account spells the king Jagiello and the Lithuanian duke Vytautus, and dates Queen Jadwiga’s marriage to 1386. The other spells them Władysław II Jagiełło (Jogaila) and Vytautas, and dates the marriage agreement to 1385. Both place the battle on 15 July 1410. Troop numbers are printed in only one account.',
  levels: {
    primary: {
      cause: 'King Władysław II Jagiełło and Grand Duke Vytautas led Polish and Lithuanian armies against the Teutonic Order.',
      what: 'On 15 July 1410 they defeated Grand Master Ulrich von Jungingen at Grunwald.',
      consequence: 'The Polish and Lithuanian armies won, and Ulrich von Jungingen was killed on the field.',
    },
    secondary: {
      cause: 'The Teutonic Knights were a military order that had fought crusades. Queen Jadwiga’s marriage to the Lithuanian ruler joined Poland and Lithuania, and he became king there, though the accounts do not give one year for the wedding. The order kept up the struggle against the joined realms. The king and Grand Duke Vytautas then led their armies into the field together against that order.',
      what: 'The armies fought on 15 July 1410 at Grunwald, also called Tannenberg, and Zalgiris or Žalgiris in the Lithuanian form. Ulrich von Jungingen, grand master of the order, commanded the opposing host. One account sets the ground on plains beside the villages, in what that account calls northern Poland. The other names Grünfelde and Ludwigsdorf as well. The shared action is that day’s fight and the allies’ defeat of his army.',
      consequence: 'The Poles and Lithuanians won a major victory. Grand Master von Jungingen was killed, and most leaders of the order were killed or taken prisoner. Malbork was not captured in the campaign that followed. One account says the order withstood a siege of that castle and lost little land in the peace. The other says the allies could not take Malbork then. The fortress remaining in the order’s hands is the point both allow.',
    },
    university: {
      cause: 'By 1409 a major campaign against the Teutonic Order was under way, with the Polish king and the Lithuanian grand duke both committed to it. One narrative calls the king Jagiello and the duke Vytautus, and says they hoped to seize Malbork. The other calls him Władysław II Jagiełło, also Jogaila, and places Grand Duke Vytautas at the head of the Lithuanian host. A hope of taking the castle before the battle, and a formal declaration of war in August 1409, appear in single narratives, so they are not the cause given here. The cause both narratives support is the joint offensive itself: two allied armies, under those leaders, marching against the order.',
      what: 'Both narratives date the battle to 15 July 1410 and call it a defeat of the knight-brothers. Tannenberg is the other name they share. Zalgiris and Žalgiris are the Lithuanian forms, one in each narrative. Grünfelde and Ludwigsdorf appear in only one. Command of the order’s host belongs to Ulrich von Jungingen in each narrative. One of them describes a fight of about ten hours, with the Lithuanians driven off and later returning. The other follows a longer sequence of attacks and a return of the Lithuanian troops. The hours are not told in both, so they are left out. The action stated here is the day’s battle at Grunwald, the return of the Lithuanians, and the allied victory under the king and the grand duke.',
      consequence: 'Victory lay with the Polish and Lithuanian armies. Each narrative records that Grand Master Ulrich von Jungingen was killed. One says most of the order’s leaders died with him. The other says most of the leadership was killed or taken prisoner, which is why this result says killed or captured. Malbork stayed untaken. One narrative has the order withstand a later siege and suffer only small losses of land when peace came. The other says the allies failed to capture the castle during the campaign. Peace terms and any long decline of the order are left out, because they are not phrased alike. The shared result is the field victory, the grand master’s death, and Malbork still held by the order.',
    },
  },
  sources: [
    { url: 'https://www.medievalists.net/2011/07/the-battle-of-grunwald/', publisher: 'Medievalists.net' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Grunwald', publisher: 'Wikipedia' },
  ],
};

const granada1492: EraEvent = {
  id: 'granada_1492',
  date: '1492-01-02',
  precision: 'day',
  title: 'Surrender of Granada',
  kind: 'siege',
  fronts: ['iberia'],
  countries: ['Spain', 'Granada'],
  figures: ['ferdinand', 'isabella_i', 'muhammad_xi'],
  note: 'One account calls him King Ferdinand V and Queen Isabella I, and names King Boabdil on 2 January 1492. Another calls him Ferdinand II of Aragon and Isabella I of Castile. A life of the sultan calls him Muhammad XI, also Boabdil, and prints January 1492 without the day. Forced conversion in 1502, and a flight to Morocco, are each in only one account.',
  levels: {
    primary: {
      cause: 'Granada was the last refuge of the Moors in Spain, and the forces of Ferdinand and Isabella stood against it.',
      what: 'On 2 January 1492 King Boabdil, also called Muhammad XI, surrendered Granada to Ferdinand and Isabella.',
      consequence: 'The surrender ended Moorish rule in Spain, and Ferdinand and Isabella held Granada.',
    },
    secondary: {
      cause: 'For generations Granada had been the last Moorish kingdom left in Spain, a refuge while Christian realms grew around it. By the late fifteenth century Ferdinand and Isabella were strong enough to press that kingdom to a finish. One account speaks of internal feuds inside Granada as well as of their stronger monarchy. Another speaks of a Castilian siege opened in 1491. Those particulars are not in every account. The shared cause is the assault on this last Moorish refuge by Ferdinand and Isabella.',
      what: 'On 2 January 1492 the city was handed over. One account says King Boabdil surrendered Granada to the Spanish forces on that day. Another says Granada surrendered to Ferdinand and Isabella on 2 January 1492, without printing the sultan’s popular name in that sentence. A third calls him Muhammad XI, also Boabdil, and places the surrender in January 1492. The day, the monarchs, and the sultan’s yielding of the city are the action the accounts support together.',
      consequence: 'Moorish rule in Spain ended with the surrender. One account calls the loss the Moors’ last foothold. Another calls Granada their last refuge during the reconquest, and says the sultan’s surrender marked the end of that rule. Later orders of conversion, and a flight to Morocco, are each told in a single account, so they are not the result given here. The result is the fall of Granada on 2 January 1492 into the hands of Ferdinand and Isabella.',
    },
    university: {
      cause: 'Granada’s position as the final Moorish state in Spain is the setting both the short history and the reference articles use. Ferdinand and Isabella are the monarchs named against it. One narrative calls him King Ferdinand V and her Queen Isabella I, and speaks of a strengthened Spanish monarchy after internal feuds. Another uses Ferdinand and Isabella without regnal numbers and sets the city in the reconquest. A third, of the war as a whole, calls them Isabella I of Castile and Ferdinand II of Aragon. The numbers and the realm-titles are not one wording, so the cause does not depend on a numeral. It depends on their joint pressure against the last Moorish refuge, which every one of these accounts places before the surrender.',
      what: 'The handover is dated 2 January 1492 where a day is printed, and January 1492 where a life of the sultan gives only the month. King Boabdil and Muhammad XI are the same man: one page uses the Spanish name on the day itself, another glosses Muhammad XI as Boabdil and says he surrendered in January, and the war narrative uses both names together. Ferdinand and Isabella are the recipients in the day-dated sentences. A siege begun in April 1491, and the Alhambra as the palace given up, are richer details from single narratives. The course stated here is his surrender of Granada to those monarchs in January 1492, on the second day where the day is given.',
      consequence: 'The political result is the end of Moorish rule in Spain. One narrative says the Moors lost their last foothold and that, years later, Muslims were ordered to convert. Another says the surrender marked the end of Moorish rule, and that the sultan fled to Morocco. The war narrative says the defeat of Granada ended the last remnant of Islamic rule on the Iberian peninsula and that the emirate was annexed. Conversion, exile, and the peninsula’s wider map are not repeated as the result, because they are not in every narrative. The result they share is that Granada passed to Ferdinand and Isabella on 2 January 1492 and that Moorish rule in Spain was over.',
    },
  },
  sources: [
    { url: 'https://www.history.com/this-day-in-history/january-2/reconquest-of-spain', publisher: 'History.com' },
    { url: 'https://www.encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/granada-spain', publisher: 'Encyclopedia.com' },
    { url: 'https://www.encyclopedia.com/reference/encyclopedias-almanacs-transcripts-and-maps/muhammad-xi-sultan-granada', publisher: 'Encyclopedia.com' },
    { url: 'https://en.wikipedia.org/wiki/Granada_War', publisher: 'Wikipedia' },
  ],
};

const timur: EraFigure = {
  id: 'timur',
  name: 'Timur',
  role: 'ruler',
  country: 'Timurid Empire',
  allegiance: 'Timurid Empire',
  note: 'One account calls him Tamerlane. The day is printed as 28 July 1402 and as 20 July 1402. The month used here is July 1402.',
  bio: {
    primary: 'In July 1402 Timur defeated the Ottoman sultan Bayezid I at Ankara, and Bayezid died as his prisoner.',
    secondary: 'Timur, called Tamerlane in one account, defeated the Ottoman sultan Bayezid I at Ankara in July 1402. The sultan’s army was routed, and Bayezid died as Timur’s prisoner. One account dates the battle to 28 July and says the victory slowed the growth of Ottoman power. Another article dates the same battle to 20 July. The day is therefore not fixed in this life. The month, the place, the victory, and the sultan’s death in captivity are the points the accounts share.',
    university: 'Timur is the commander who broke Bayezid I at Ankara. One life of him, under the name Tamerlane, places that victory on 28 July 1402 and treats it as a check on the Ottoman empire. The battle narrative also prints 28 July, then notes that other writers prefer 20 July, and a separate article uses 20 July outright. Those days are recorded and not chosen between. July 1402 remains the agreed month. Both the battle narrative and the sultan’s life say Bayezid was defeated and died a prisoner. Desertions inside the Ottoman host are described, but not with the same list of troops, so they are not part of this life. Timur’s part is the victory at Ankara and the captivity in which the sultan died.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Ankara', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/empires-timurid', publisher: 'Encyclopedia.com' },
    { url: 'https://www.encyclopedia.com/reference/encyclopedias-almanacs-transcripts-and-maps/beyazid-i', publisher: 'Encyclopedia.com' },
  ],
};

const bayezidI: EraFigure = {
  id: 'bayezid_i',
  name: 'Bayezid I',
  role: 'ruler',
  country: 'Ottoman Empire',
  allegiance: 'Ottoman Empire',
  note: 'One account spells him Beyazid. One says he died about three months after the battle. Another says he died as Timur’s prisoner and that his sons then fought over the succession.',
  bio: {
    primary: 'In July 1402 the Ottoman sultan Bayezid I was defeated by Timur at Ankara and died as Timur’s prisoner.',
    secondary: 'Bayezid I, also spelled Beyazid, was the Ottoman sultan who fought Timur at Ankara in July 1402. His army was routed. He was captured and died as Timur’s prisoner. One account says Tatars and most of his Turkish vassals had deserted, and that his sons afterwards contended for the throne. Another describes the desertion in different words and dates a day the first account does not use. The life here keeps the defeat, the captivity, and the death, and leaves the troop list and the sons’ quarrel aside.',
    university: 'Bayezid I, spelled Beyazid in one account, was the Ottoman sultan who faced Timur at Ankara in July 1402. Timur is also called Tamerlane. The battle narrative and the sultan’s own life agree that his force was defeated and that he died in the victor’s hands. They do not agree on a single day inside July: 28 July and 20 July both appear in the pages read for this life. They also describe men leaving his army, but one places that loss before the battle and the other during it, and the kinds of soldiers named are not the same. Because those details differ, this life does not repeat a troop list or a calendar day. It keeps the sultan who met Timur at Ankara, lost, and died a prisoner.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Ankara', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/reference/encyclopedias-almanacs-transcripts-and-maps/beyazid-i', publisher: 'Encyclopedia.com' },
    { url: 'https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/empires-timurid', publisher: 'Encyclopedia.com' },
  ],
};

const wladyslawIiJagiello: EraFigure = {
  id: 'wladyslaw_ii_jagiello',
  name: 'Władysław II Jagiełło',
  role: 'ruler',
  country: 'Poland',
  allegiance: 'Poland',
  note: 'One account spells him Jagiello. The other spells him Władysław II Jagiełło and records the Lithuanian name Jogaila. They do not agree the year of his marriage to Queen Jadwiga.',
  bio: {
    primary: 'On 15 July 1410 King Władysław II Jagiełło led the Polish army that defeated the Teutonic Order at Grunwald.',
    secondary: 'Władysław II Jagiełło, called Jagiello in one account and Jogaila in the other, was king in Poland and led its host at Grunwald. On 15 July 1410 he and Grand Duke Vytautas faced the Teutonic Order under Ulrich von Jungingen. The allied armies defeated the order. One account spells the duke Vytautus. His marriage to Queen Jadwiga is in both accounts, but they do not agree on the year, so the year is not part of this life.',
    university: 'The Polish king at Grunwald is the same man under more than one name. One account, which spells him Jagiello, says that by 1409 he and the Lithuanian grand duke opened a major campaign against the Teutonic Order, and that on 15 July 1410 their armies won. The other account spells him Władysław II Jagiełło, records the Lithuanian name Jogaila, and calls him king of Poland at the head of the allied host beside Grand Duke Vytautas. Both make him a commander of the victory, not a bystander, and both leave the grand master of the order dead. Years given for his wedding to Jadwiga differ, so the wedding year is not part of this life. What the life keeps is his command on 15 July 1410 and the defeat of the order.',
  },
  sources: [
    { url: 'https://www.medievalists.net/2011/07/the-battle-of-grunwald/', publisher: 'Medievalists.net' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Grunwald', publisher: 'Wikipedia' },
  ],
};

const vytautas: EraFigure = {
  id: 'vytautas',
  name: 'Vytautas',
  role: 'ruler',
  country: 'Lithuania',
  allegiance: 'Lithuania',
  note: 'One account spells him Vytautus and calls him the king’s cousin. The other spells him Vytautas and does not call him cousin.',
  bio: {
    primary: 'On 15 July 1410 Grand Duke Vytautas led the Lithuanian army beside the Polish king at Grunwald, and the Teutonic Order was defeated.',
    secondary: 'Vytautas was grand duke of Lithuania. One account spells him Vytautus and calls him cousin of the king. The other spells him Vytautas and does not call him cousin. On 15 July 1410 he led the Lithuanian part of the allied army at Grunwald beside the Polish king. Together they defeated the Teutonic Order commanded by Ulrich von Jungingen. The grand master was killed. The spelling of the duke’s name, and the cousinship, are the points on which the accounts differ.',
    university: 'The Lithuanian leader at Grunwald is Grand Duke Vytautas. A shorter account spells that name Vytautus, describes him as the king’s cousin, and says the Lithuanians were routed early and later came back. The longer account spells him Vytautas, places him in command of the Lithuanian host beside King Władysław II Jagiełło, and records the same allied victory on 15 July 1410. The early rout and the cousinship are not in both, so they are not the life stated here. Both accounts do place him with the king against Grand Master Ulrich von Jungingen, and both treat the day as a defeat of the Teutonic Order in which the Lithuanian troops returned to the fight. His part is that joint command and that victory.',
  },
  sources: [
    { url: 'https://www.medievalists.net/2011/07/the-battle-of-grunwald/', publisher: 'Medievalists.net' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Grunwald', publisher: 'Wikipedia' },
  ],
};

const ulrichVonJungingen: EraFigure = {
  id: 'ulrich_von_jungingen',
  name: 'Ulrich von Jungingen',
  role: 'commander',
  country: 'Teutonic Order',
  allegiance: 'Teutonic Order',
  note: 'One account says most of the order’s leaders were killed with him. The other says most of the leadership was killed or taken prisoner.',
  bio: {
    primary: 'On 15 July 1410 Grand Master Ulrich von Jungingen led the Teutonic army at Grunwald, was defeated, and was killed.',
    secondary: 'Ulrich von Jungingen was grand master of the Teutonic Order and commanded its army at Grunwald. On 15 July 1410 he met the Polish and Lithuanian hosts led by King Władysław II Jagiełło and Grand Duke Vytautas. The allies defeated him. He was killed in the battle, and most of the order’s leaders were killed or taken prisoner. One account spells the king Jagiello and the duke Vytautus. The outcome for the grand master does not depend on those spellings.',
    university: 'Grand Master Ulrich von Jungingen led the Teutonic Order at the battle fought on 15 July 1410. One account says the knights were trapped and that he and most of their leaders were killed, after an early success against the Lithuanians. The other account marks him as killed, says most of the leadership was killed or taken prisoner, and names the opposing commanders as King Władysław II Jagiełło and Grand Duke Vytautas. The early success against the Lithuanians is not repeated as a shared fact, so the life does not rest on it. What both state is his command of the order, his defeat by the allied armies, and his death on that day. The castle of Malbork was not taken afterwards, which belongs to the campaign rather than to the manner of his death.',
  },
  sources: [
    { url: 'https://www.medievalists.net/2011/07/the-battle-of-grunwald/', publisher: 'Medievalists.net' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Grunwald', publisher: 'Wikipedia' },
  ],
};

const ferdinand: EraFigure = {
  id: 'ferdinand',
  name: 'Ferdinand',
  role: 'ruler',
  country: 'Spain',
  allegiance: 'Spain',
  note: 'One account calls him King Ferdinand V. Another calls him Ferdinand II of Aragon. A third gives the name Ferdinand without a number.',
  bio: {
    primary: 'On 2 January 1492 Ferdinand received the surrender of Granada from Boabdil, with Isabella, and Moorish rule in Spain ended.',
    secondary: 'Ferdinand was the king to whom Granada was surrendered on 2 January 1492, together with Isabella. One account calls him King Ferdinand V. Another calls him Ferdinand II of Aragon. A third gives the name Ferdinand without a number. Boabdil, also called Muhammad XI, was the sultan who yielded the city. The surrender ended Moorish rule in Spain and closed the last refuge of the Moors there. The numeral after Ferdinand’s name is not the same in every account, so this life uses the name alone.',
    university: 'Ferdinand stands, with Isabella, as a Christian monarch who received Granada. On 2 January 1492 the city was surrendered to them. One account gives him the style King Ferdinand V and names King Boabdil as the man who handed the city over, adding that the Moors then lost their last foothold in Spain. Another speaks of Ferdinand and Isabella without a regnal number and calls Granada the last refuge of the Moors. A further account calls him Ferdinand II of Aragon and the sultan Muhammad XI. Those titles are printed, and they are not forced into one form. What the accounts share is his place, beside Isabella, at the surrender of 2 January 1492, and the end of Moorish rule in Spain.',
  },
  sources: [
    { url: 'https://www.history.com/this-day-in-history/january-2/reconquest-of-spain', publisher: 'History.com' },
    { url: 'https://www.encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/granada-spain', publisher: 'Encyclopedia.com' },
    { url: 'https://en.wikipedia.org/wiki/Granada_War', publisher: 'Wikipedia' },
  ],
};

const isabellaI: EraFigure = {
  id: 'isabella_i',
  name: 'Isabella I',
  role: 'ruler',
  country: 'Spain',
  allegiance: 'Spain',
  note: 'One account calls her Queen Isabella I. Another calls her Isabella I of Castile.',
  bio: {
    primary: 'On 2 January 1492 Isabella, with Ferdinand, received Boabdil’s surrender of Granada, the last Moorish foothold in Spain.',
    secondary: 'Isabella was the queen beside Ferdinand when Granada surrendered on 2 January 1492. One account calls her Queen Isabella I. Another calls her Isabella I of Castile. Boabdil, also known as Muhammad XI, gave up the city to their forces. The act ended Moorish rule in Spain. One account speaks of a last foothold, and another of the last refuge of the Moors. Both treat Granada as the final Moorish possession, and as a city that passed to these monarchs on that day.',
    university: 'Isabella received Granada with Ferdinand. The day in the dated accounts is 2 January 1492. One account styles her Queen Isabella I and says King Boabdil surrendered the city to the Spanish forces, after which the Moors had lost their last foothold. Another names Isabella beside Ferdinand and calls Granada the last refuge of the Moors during the reconquest. A third calls her Isabella I of Castile and the sultan Muhammad XI, or King Boabdil. Castile as her particular crown is not the wording of every account, so the life does not hang on that realm-name. It hangs on her presence at the surrender and on the end of Moorish rule in Spain.',
  },
  sources: [
    { url: 'https://www.history.com/this-day-in-history/january-2/reconquest-of-spain', publisher: 'History.com' },
    { url: 'https://www.encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/granada-spain', publisher: 'Encyclopedia.com' },
    { url: 'https://en.wikipedia.org/wiki/Granada_War', publisher: 'Wikipedia' },
  ],
};

const muhammadXi: EraFigure = {
  id: 'muhammad_xi',
  name: 'Muhammad XI',
  role: 'ruler',
  country: 'Granada',
  allegiance: 'Granada',
  note: 'Also called Boabdil. One account dates his surrender to 2 January 1492. Another prints January 1492 and says he fled to Morocco.',
  bio: {
    primary: 'On 2 January 1492 Muhammad XI, called Boabdil, surrendered Granada to Ferdinand and Isabella, ending Moorish rule in Spain.',
    secondary: 'Muhammad XI, whom the Spanish called Boabdil, was the last sultan of Granada. He surrendered the city to Ferdinand and Isabella in January 1492. One account prints the full day, 2 January, with the name King Boabdil. Another prints January 1492 without that day’s number, and says he then fled to Morocco. The flight is not in every account, so the life stays with the surrender itself. That surrender ended Moorish rule in Spain.',
    university: 'The sultan who gave up Granada is Muhammad XI, called Boabdil. One account has King Boabdil surrender the city to Spanish forces on 2 January 1492, and names Ferdinand and Isabella as the monarchs who received it. Another, which uses Muhammad XI and the Spanish nickname together, says he surrendered in January 1492 after a siege begun the previous year, and that the act ended Moorish rule in Spain. A third calls him King Boabdil and Muhammad XI in one phrase and dates the handover to January 1492, while the war’s closing date on that same page is 2 January. The siege’s opening month and a flight to Morocco are not shared by every account. The life they do share is his surrender of Granada to Ferdinand and Isabella in January 1492, and the end of Moorish rule.',
  },
  sources: [
    { url: 'https://www.history.com/this-day-in-history/january-2/reconquest-of-spain', publisher: 'History.com' },
    { url: 'https://www.encyclopedia.com/reference/encyclopedias-almanacs-transcripts-and-maps/muhammad-xi-sultan-granada', publisher: 'Encyclopedia.com' },
    { url: 'https://en.wikipedia.org/wiki/Granada_War', publisher: 'Wikipedia' },
  ],
};

export const LATE_MEDIEVAL_FILL_EVENTS: EraEvent[] = [
  ankara1402,
  grunwald1410,
  granada1492,
];

export const LATE_MEDIEVAL_FILL_FIGURES: EraFigure[] = [
  timur,
  bayezidI,
  wladyslawIiJagiello,
  vytautas,
  ulrichVonJungingen,
  ferdinand,
  isabellaI,
  muhammadXi,
];


const poitiers1356: EraEvent = {
  id: 'poitiers_1356',
  date: '1356-09-19',
  precision: 'day',
  title: 'Battle of Poitiers',
  kind: 'battle',
  fronts: ['france_and_low_countries'],
  countries: ['England', 'France'],
  figures: ['edward_the_black_prince', 'john_ii_of_france'],
  note: 'One account sets the field five miles south of Poitiers and gives the French about 14,000 to 16,000 men against about 6,000 Anglo-Gascons. Another says western France and guesses a much larger French host, while recording Froissart’s higher figure. A third says a few miles southwest and that the armies were similar in size. All three date the battle 19 September 1356, name Edward the Black Prince and King John II, and record an English victory in which the French king was captured. His son Philip is named among the prisoners in two accounts.',
  levels: {
    primary: {
      cause: 'In the Hundred Years’ War, Edward the Black Prince led an English and Gascon army in western France, and King John II moved to fight him.',
      what: 'On 19 September 1356 the Black Prince’s men defeated King John II’s army near Poitiers.',
      consequence: 'The English and Gascons won the field, and King John II of France was taken prisoner.',
    },
    secondary: {
      cause: 'During the Hundred Years’ War, Edward, called the Black Prince, commanded the English and Gascon side. King John II commanded the French army that came up against him. One account has the prince marching from the south-west and then standing on the defensive near Poitiers after talks failed. Another has King John turning from a different English column to strike the prince as he moved towards the Loire. A third begins the raid earlier in August from Aquitaine. The cause is the prince’s campaign in western France and John II’s decision to give battle.',
      what: 'All three accounts date the fighting to 19 September 1356 and place it near Poitiers, in western France. The Black Prince’s English and Gascon force defeated the French army of King John II. One account follows several French attacks, all repulsed, until the French collapsed. Another calls the day a great victory and describes an early cavalry charge stopped by archers. The sequence of charges is not the same wording. The action they share is the prince’s victory over John II at Poitiers on that September day.',
      consequence: 'King John II did not leave the field a free man. He was captured, and the English and Gascons held the victory. One account says he surrendered with his young son Philip. A third says the king of France was captured and that a ransom was demanded and not paid. Philip is named beside his father in two accounts and not in the opening of the third. The result stated here is the one all three allow: an English victory at Poitiers, and King John II a prisoner.',
    },
    university: {
      cause: 'Edward the Black Prince and King John II are the commanders every narrative names, and the war every narrative names is the Hundred Years’ War. The prince led English and Gascon troops. One narrative calls the force Anglo-Gascon and traces a march from Bergerac towards the Loire that could not be crossed. Another has him already campaigning from Bordeaux, with King John breaking off a move against a second English column before turning on the prince. A further narrative starts the raid on 8 August from Aquitaine and has John II dismiss part of his infantry. None of those routes is copied into the cause, because the roads are not the same. What the narratives do share is a French king choosing to catch an English and Gascon army under the Black Prince in western France, and meeting it near Poitiers.',
      what: 'The calendar day is 19 September 1356 in each narrative, whether the month is written before the numeral or after it. The place-name they share is Poitiers, in western France. Five miles to the south, and a few miles to the southwest, cannot be collapsed into one measurement, so the distance is omitted. Strengths are likewise omitted: one narrative sets about 6,000 Anglo-Gascons against about 14,000 to 16,000 French; another guesses about 35,000 French, or 60,000 in Froissart; a third says the hosts had become similar in size. Those figures contradict one another. The fighting itself is a victory of the Black Prince over King John II. The action is the defeat of John II’s army near Poitiers on 19 September 1356.',
      consequence: 'Capture of the French king is the consequence all three narratives record. One says King John II was captured with his son Philip and thousands of men-at-arms. Another lists John II and Philip among the prisoners, with lords and knights, and offers a French death-toll the first narrative does not use. The third says the king of France was captured, that a ransom equal to twice a year’s income was asked, and that it was not paid. Philip’s name, the ransom, and every casualty figure fail the comparison and are left out. A treaty later in the war is not the result of this day in more than one of these narratives. The result they share is an English and Gascon victory and the captivity of King John II.',
    },
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Poitiers', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-poitiers/', publisher: 'British Battles' },
    { url: 'https://www.newworldencyclopedia.org/entry/Battle_of_Poitiers', publisher: 'New World Encyclopedia' },
  ],
};

const aljubarrota1385: EraEvent = {
  id: 'aljubarrota_1385',
  date: '1385-08-14',
  precision: 'day',
  title: 'Battle of Aljubarrota',
  kind: 'battle',
  fronts: ['iberia'],
  countries: ['Portugal', 'Castile'],
  figures: ['nuno_alvares_pereira', 'john_i_of_castile', 'john_i_of_portugal'],
  note: 'One account names King John I of Portugal and calls Nuno Álvares Pereira his constable, and it places the fighting at São Jorge between Leiria and Alcobaça. The other calls Aljubarrota a village in the Leiria district and does not name a Portuguese king. Both give 14 August 1385, King John I of Castile, English archers or longbowmen with the Portuguese, Nuno Álvares Pereira, and a victory that secured Portuguese independence. Troop numbers are in only one account.',
  levels: {
    primary: {
      cause: 'King John I of Castile marched against Portugal, and English archers joined the Portuguese near Leiria, at Aljubarrota.',
      what: 'On 14 August 1385 the Portuguese and those English archers defeated King John I of Castile at Aljubarrota.',
      consequence: 'The victory safeguarded Portuguese independence, and Nuno Álvares Pereira was the hero on the Portuguese side.',
    },
    secondary: {
      cause: 'King John I of Castile led his army to Aljubarrota, in Portugal. Both accounts name Aljubarrota, near Leiria. English bowmen served with the Portuguese. One account says they were aided by English archers. The other speaks of English allies and lists longbowmen in the Portuguese numbers. A Portuguese king is named only in that second account, so the cause here is the Castilian advance and the English help beside the Portuguese.',
      what: 'The day both accounts print is 14 August 1385. On that day the Portuguese defeated the forces of King John I of Castile. One account calls him the Spanish king. The other calls the realm he led the Crown of Castile and names Aragonese, French, and Genoese companions that the shorter account does not list. The fighting is also set at São Jorge, between Leiria and Alcobaça, in only one account. What both relate is the Portuguese defeat of John I of Castile at Aljubarrota, with English bowmen on the Portuguese side.',
      consequence: 'Portugal’s independence was the prize of the victory. One account says the battle assured it. The other says independence was safeguarded and that Castilian hopes of the Portuguese throne were ruled out. Nuno Álvares Pereira is the man both name on the winning side. One calls him the Portuguese hero. The other calls him constable and pairs him with a Portuguese king. The constable’s office and that king are left out of the result. The result they share is a Portuguese victory, independence kept, and Nuno Álvares Pereira as the hero of the day.',
    },
    university: {
      cause: 'Two narratives bring King John I of Castile against Portugal and place the collision at Aljubarrota. The shorter one describes a village in the Leiria district of west-central Portugal. The longer one says central Portugal and adds the ground of São Jorge, between Leiria and Alcobaça, so the shared geography is Aljubarrota and Leiria, not the hamlet named in a single narrative. English participation is also shared, though the wording differs: archers in one narrative, allies and longbowmen in the other. Those are the same kind of help, and this cause treats them as English bowmen with the Portuguese. The longer narrative alone names King John I of Portugal at the head of the defence. The cause that remains is Castile’s attack under John I, met by the Portuguese with English bowmen.',
      what: '14 August 1385 is the date printed in both narratives, one in the order of the month-name before the numeral and the other as the day before the month. The action is a Portuguese victory over the army of King John I of Castile. Companions from Aragon, France, and Genoa, and any count of lances or bowmen, appear in a single narrative and are not repeated as an order of battle. The shorter narrative’s word Spanish, set beside the title King of Castile, is likewise not required for the action. The longer narrative’s constable is a title, not a second event. The action stated here is the day’s defeat of John I of Castile at Aljubarrota by the Portuguese and the English bowmen who fought with them.',
      consequence: 'Independence is the political result both narratives allow. One says the victory assured Portuguese independence. The other says it was safeguarded, that the crisis of those years ended, and that a new royal house was established. The crisis and the house are not in both narratives, so they stay out of the result. Nuno Álvares Pereira is the shared Portuguese name. Hero is the shorter narrative’s word. Constable, and a pairing with King John I of Portugal, belong only to the longer one. Later border fighting until 1390 is also told once. The result that survives the comparison is narrower: Portugal defeated Castile at Aljubarrota on 14 August 1385, remained independent, and Nuno Álvares Pereira was the man both narratives single out on the winning side.',
    },
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Aljubarrota', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/reference/encyclopedias-almanacs-transcripts-and-maps/aljubarrota', publisher: 'Encyclopedia.com' },
  ],
};

const castillon1453: EraEvent = {
  id: 'castillon_1453',
  date: '1453-07-17',
  precision: 'day',
  title: 'Battle of Castillon',
  kind: 'battle',
  fronts: ['france_and_low_countries'],
  countries: ['England', 'France'],
  figures: ['john_talbot', 'jean_bureau', 'charles_vii_of_france'],
  note: 'One account says the French army was directed by a committee and that Jean Bureau, as ordnance officer, laid out the artillery. The other says Bureau commanded the artillery and, among several French commanders, exerted overall command. Both date the battle 17 July 1453, name John Talbot, Earl of Shrewsbury, record his death and his son’s, and tie the defeat to the loss of English Gascony. One spells the son Lisle and names the man who struck Talbot. The other spells the son L’Isle and does not name that man. One account calls this the first major European battle won by field artillery. Troop numbers differ.',
  levels: {
    primary: {
      cause: 'John Talbot, Earl of Shrewsbury, led an Anglo-Gascon army in Gascony against the French, whose artillery Jean Bureau directed.',
      what: 'On 17 July 1453 the French defeated Talbot at Castillon, and he was killed on the field.',
      consequence: 'The English lost Gascony, and the battle stands as the close of the Hundred Years’ War.',
    },
    secondary: {
      cause: 'The campaign was the last phase of the Hundred Years’ War in Gascony. John Talbot, Earl of Shrewsbury, commanded the Anglo-Gascon army that faced the French at Castillon, on the Dordogne. Jean Bureau is the French officer both accounts connect with the artillery. One says he laid out the camp to make the best use of the guns, while the army itself was directed by a committee. The other says he commanded the artillery and, among several French leaders, held the overall command. Those pictures of command differ, so Bureau stays with the guns.',
      what: 'The day is 17 July 1453. The place is Castillon, in Gascony, by the Dordogne. Talbot attacked a French position and was defeated. One account says he believed the enemy were retreating. The other describes his death in the rout after his horse was struck by a round of artillery. His son was killed with him. One spells that son Lisle. The other spells him L’Isle. The action both allow is the French defeat of Talbot’s army at Castillon, Talbot’s death, and the death of his son.',
      consequence: 'England’s hold on Gascony did not survive the defeat. One account says the English lost nearly all their remaining lands in France, especially Gascony, and that the battle is cited as the end of the Hundred Years’ War. The other says the battle ended English dominion over Gascony and brought that war to a close. Bordeaux’s later surrender is told with a day in one account and not as the same sentence in the other. The shared result is the loss of Gascony and the end of the Hundred Years’ War, after Talbot had been killed.',
    },
    university: {
      cause: 'Gascony was the province still at issue between England and France, and Castillon is the town both narratives give for the battle of 17 July 1453. John Talbot, Earl of Shrewsbury, led the Anglo-Gascon side. One narrative has him land near Bordeaux the year before and march to relieve a garrison. The other has King Charles VII turn to Gascony after Normandy, lose Bordeaux, and later face Talbot’s return. Jean Bureau is named with the French guns in both. One calls him an ordnance officer who sited an artillery park, under a command arranged as a committee. The other calls him the artillery general and gives him overall command among several French leaders. Overall command and a committee are not the same arrangement. The cause they still share is Talbot’s Anglo-Gascon army meeting a French army at Castillon whose artillery Bureau directed.',
      what: 'Both narratives date the defeat to 17 July 1453. Castillon-sur-Dordogne, later called Castillon-la-Bataille, is the town in one. The other places the field in France on the River Dordogne, thirty miles east of Bordeaux. The miles and the later town-name are single wordings, so the place stated here is Castillon, on that river, in the Gascon war. Talbot was killed, and his son died with him. One narrative says the horse was brought down by a cannon shot and that a French archer then killed Talbot with an axe. The other says an artillery round threw the horse and that Talbot was killed on the ground, naming a Frenchman the first narrative does not. The killer’s name stays out. The course that remains is a French victory at Castillon, won with artillery, in which Talbot and his son were killed.',
      consequence: 'The political result is the loss of English Gascony and the closing of the Hundred Years’ War. One narrative says the English lost nearly all that they still held in France, Gascony above all, a possession of three centuries, and that in hindsight the battle is cited as the period’s end. It also dates a French return to Bordeaux in October. The other says English dominion over Gascony ended and that the war between England and France was brought to a close, and it adds that Talbot was an iconic commander. The October date, the three centuries, and the word iconic are not in both. The result stated here is the one they do share: after Castillon, English rule in Gascony was finished, and the Hundred Years’ War is taken to have ended.',
    },
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Castillon', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-castillon/', publisher: 'British Battles' },
  ],
};

const edwardTheBlackPrince: EraFigure = {
  id: 'edward_the_black_prince',
  name: 'Edward the Black Prince',
  role: 'commander',
  country: 'England',
  allegiance: 'England',
  note: 'The distance from Poitiers and the size of each army differ from account to account. All three date his victory to 19 September 1356 and record the capture of King John II.',
  bio: {
    primary: 'On 19 September 1356 Edward the Black Prince defeated King John II of France near Poitiers and took the French king prisoner.',
    secondary: 'Edward the Black Prince commanded the English and Gascon army at Poitiers in the Hundred Years’ War. On 19 September 1356 he defeated King John II. One account has him stand on the defensive a few miles from the town after a march he could not push across the Loire. Another calls the day his great victory and has French cavalry break on his archers. A third has the raid begin from Aquitaine in August. What the three share is his command, the victory near Poitiers, and John II’s capture.',
    university: 'The English commander at Poitiers is Edward, the Black Prince, eldest son of the English king in one account and a veteran of Crécy in another. Every account gives him the victory of 19 September 1356 over King John II in the Hundred Years’ War, with English and Gascon troops, in western France near Poitiers. One account sets his strength near 6,000 and the French near twice that or more. Another puts his force near 7,000 and the French far higher, and quotes Froissart higher still. A third says the hosts were unusually close in size. The numbers are rejected because they clash. Marches from Bergerac, from Bordeaux, or from Aquitaine are likewise each told once. His part is the command of that army, the defeat of John II, and the captivity in which the French king left the field.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Poitiers', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-poitiers/', publisher: 'British Battles' },
    { url: 'https://www.newworldencyclopedia.org/entry/Battle_of_Poitiers', publisher: 'New World Encyclopedia' },
  ],
};

const johnIiOfFrance: EraFigure = {
  id: 'john_ii_of_france',
  name: 'John II of France',
  role: 'ruler',
  country: 'France',
  allegiance: 'France',
  note: 'One account says a ransom worth twice the kingdom’s yearly income was demanded and not paid. The other two name his son Philip among the prisoners and do not tell that ransom. Army sizes differ.',
  bio: {
    primary: 'On 19 September 1356 King John II of France was defeated near Poitiers by Edward the Black Prince and was taken prisoner.',
    secondary: 'John II was king of France and commanded the army that fought Edward the Black Prince at Poitiers on 19 September 1356, in the Hundred Years’ War. He was defeated and captured. One account says he surrendered with his son Philip. Another lists him among the French prisoners and calls the day a great English victory. A third says the king of France was captured and that the ransom asked of the kingdom was never paid. The life keeps the king who gave battle near Poitiers, lost, and passed into English hands.',
    university: 'King John II is the French commander each narrative of Poitiers names, and 19 September 1356 is the day each gives for his defeat by Edward the Black Prince. One narrative has him gather an unusually mobile army, pursue the prince towards Poitiers, and at the last attack in person until he was captured with his youngest son. Another has him refuse terms, demand the prince’s surrender, and then lose the battle, so that he and his son Philip were among the prisoners. A third names him John II of France, has him try to catch the prince’s raid, and says the king was captured with his immediate company, a ransom later going unpaid. The youngest son, the refused terms, and the unpaid ransom each belong to one narrative. What remains is the king who fought at Poitiers, was beaten, and was captured.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Poitiers', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-poitiers/', publisher: 'British Battles' },
    { url: 'https://www.newworldencyclopedia.org/entry/Battle_of_Poitiers', publisher: 'New World Encyclopedia' },
  ],
};

const nunoAlvaresPereira: EraFigure = {
  id: 'nuno_alvares_pereira',
  name: 'Nuno Álvares Pereira',
  role: 'commander',
  country: 'Portugal',
  allegiance: 'Portugal',
  note: 'One account calls him constable under King John I of Portugal. The other calls him the Portuguese hero and does not name that king.',
  bio: {
    primary: 'On 14 August 1385 Nuno Álvares Pereira was the Portuguese hero when his side defeated King John I of Castile at Aljubarrota and kept Portugal independent.',
    secondary: 'Nuno Álvares Pereira is the Portuguese name both accounts give for Aljubarrota. On 14 August 1385 the Portuguese, with English archers, defeated King John I of Castile, and the victory safeguarded Portugal’s independence. One account calls Nuno the hero of that battle. The other calls him constable and places him in command beside a Portuguese king, at São Jorge near Leiria. The office of constable and the Portuguese king’s name are not in both accounts. This life keeps the man both name, the victory over John I of Castile, and the independence that followed.',
    university: 'The Portuguese figure shared by the two accounts of Aljubarrota is Nuno Álvares Pereira. The shorter account, of the village in the Leiria district, calls him the hero of the battle in which the Portuguese and English archers defeated the Spanish king, John I of Castile, and thereby assured Portuguese independence. The longer account calls him constable, pairs him with King John I of Portugal, and says their force, with English allies, opposed John I of Castile on 14 August 1385 at São Jorge. Constable, the Portuguese king, and São Jorge occur once. English longbowmen are the longer account’s detail beside the shorter account’s archers. What remains, without those single titles, is his place on the winning side on 14 August 1385, the defeat of the Castilian king, and Portugal’s independence.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Aljubarrota', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/reference/encyclopedias-almanacs-transcripts-and-maps/aljubarrota', publisher: 'Encyclopedia.com' },
  ],
};

const johnIOfCastile: EraFigure = {
  id: 'john_i_of_castile',
  name: 'John I of Castile',
  role: 'ruler',
  country: 'Castile',
  allegiance: 'Castile',
  note: 'One account calls him the Spanish king. The other calls his realm the Crown of Castile and names Aragonese, French, and Genoese allies. Both record his defeat on 14 August 1385.',
  bio: {
    primary: 'On 14 August 1385 King John I of Castile was defeated at Aljubarrota by the Portuguese and English archers, and Portugal stayed independent.',
    secondary: 'John I of Castile was the king whose army the Portuguese defeated at Aljubarrota on 14 August 1385. English archers fought with the Portuguese. One account calls him the Spanish king and says the defeat assured Portuguese independence, naming Nuno Álvares Pereira as the hero of the other side. The other account calls the realm the Crown of Castile and adds allies from Aragon, France, and Genoa, plus a Portuguese king and a constable, none of which the shorter account lists. The life here is the king who lost at Aljubarrota.',
    university: 'King John I of Castile is named in both accounts as the leader who failed at Aljubarrota. The date they share is 14 August 1385. One account, describing a village in the Leiria district, calls him the Spanish king and says Portuguese fighters, aided by English archers, defeated his forces and so assured their independence. The other places his crown over Castile, sets the field at São Jorge between Leiria and Alcobaça, and gives him companions from Aragon, France, and Genoa. Spanish, as a word beside King of Castile, and the list of companions, are not both required. Nor is any figure for the size of his host, which is printed once. His part in the battle is the defeat: he brought his army against Portugal, lost it at Aljubarrota, and left Portuguese independence standing.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Aljubarrota', publisher: 'Wikipedia' },
    { url: 'https://www.encyclopedia.com/reference/encyclopedias-almanacs-transcripts-and-maps/aljubarrota', publisher: 'Encyclopedia.com' },
  ],
};

const johnTalbot: EraFigure = {
  id: 'john_talbot',
  name: 'John Talbot',
  role: 'commander',
  country: 'England',
  allegiance: 'England',
  note: 'One account spells his son Lisle and names a Frenchman who struck Talbot after a cannon shot killed the horse. The other spells the son L’Isle and says an artillery round brought the horse down. Both say Talbot and his son were killed on 17 July 1453.',
  bio: {
    primary: 'On 17 July 1453 John Talbot, Earl of Shrewsbury, was defeated and killed at Castillon, and England’s hold on Gascony ended.',
    secondary: 'John Talbot, Earl of Shrewsbury, commanded the Anglo-Gascon army at Castillon on 17 July 1453, in the last phase of the Hundred Years’ War. The French, with artillery under Jean Bureau, defeated him. Talbot was killed, and his son died with him. One account says he mistook a French movement for a retreat and pressed the attack. The other describes the horse struck by artillery and the earl killed on the ground. The life is the commander who lost Castillon and died there, after which English Gascony was lost.',
    university: 'John Talbot, Earl of Shrewsbury, is the English commander both narratives place at Castillon on 17 July 1453. He led Anglo-Gascon troops in the war for Gascony and was killed when the French defeated that army. One narrative says he was old and famous, landed near Bordeaux in 1452, believed the French were drawing off, and died after a cannon shot killed his horse, an archer finishing him with an axe, his son dying too. The other calls him an iconic commander, says an artillery round threw the horse, and names a Frenchman as the killer, while spelling the dead son L’Isle rather than Lisle. Jean Bureau’s guns are the French arm both narratives give. After Talbot’s death, English dominion in Gascony ended, and the Hundred Years’ War is taken to have closed.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Castillon', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-castillon/', publisher: 'British Battles' },
  ],
};

const jeanBureau: EraFigure = {
  id: 'jean_bureau',
  name: 'Jean Bureau',
  role: 'commander',
  country: 'France',
  allegiance: 'France',
  note: 'One account calls him an ordnance officer under a committee and does not give him sole command. The other says he commanded the artillery and exerted overall command among several French leaders.',
  bio: {
    primary: 'On 17 July 1453 Jean Bureau’s French artillery defeated John Talbot’s Anglo-Gascon army at Castillon, and Talbot was killed.',
    secondary: 'Jean Bureau is the French officer both accounts name with the artillery at Castillon. On 17 July 1453 that artillery helped defeat John Talbot, Earl of Shrewsbury, who was killed, and his son with him. One account says Bureau laid out the camp for the guns, while command of the army sat with a committee. The other says he commanded the artillery and, among several French commanders, held the overall direction. The life is his direction of the guns in the victory that ended English Gascony and closed the Hundred Years’ War.',
    university: 'Jean Bureau’s part at Castillon is the French artillery, which both narratives credit in the defeat of John Talbot on 17 July 1453. One narrative calls Bureau Charles VII’s ordnance officer, says the army was run by a committee, and describes an artillery park built beyond the reach of the town’s own guns. It then has him keep firing at the castle the next day. The other calls him the artillery general and says that among several French commanders he exerted overall command. The committee, the next day’s siege, and the phrase overall command are not one description. What both narratives give him is direction of the artillery in a French victory at Castillon, Talbot’s death, the loss of English Gascony, and the close of the Hundred Years’ War.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Castillon', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-castillon/', publisher: 'British Battles' },
  ],
};

export const LATE_MEDIEVAL_ROUND2_EVENTS: EraEvent[] = [
  poitiers1356,
  aljubarrota1385,
  castillon1453,
];

const johnIOfPortugal: EraFigure = {
  id: 'john_i_of_portugal',
  name: 'John I of Portugal',
  role: 'ruler',
  country: 'Portugal',
  allegiance: 'Portugal',
  note: 'One account spells him João I and does not place him on the field. The other says the Portuguese force was commanded by King John I of Portugal. The August day is in the battle narrative only.',
  bio: {
    primary:
      'In 1385 John I of Portugal was king when the Portuguese defeated Castile at Aljubarrota and his rule was secured.',
    secondary:
      'John I of Portugal, written João in one account, was the Portuguese king at Aljubarrota. In 1385 his side defeated Castilian forces. One account says he commanded that host, with a constable beside him, and that the success assured his throne. The other says the victory helped him gather authority in the monarchy, and it prints the year without an August day. Only one account puts him at the head of the troops, so this life does not claim that he arrayed the line. It keeps the king and the victory that settled his reign.',
    university:
      'The Portuguese monarch tied to Aljubarrota is John I, whom a biographical account spells João and calls founder of a new royal house. A battle narrative says forces under King John I of Portugal, together with his constable, opposed King John I of Castile and won on a dated day in August 1385. The biography instead folds the battle into the year 1385 and says that, through the Portuguese defeat of Castilian forces, he drew power toward the crown. The constable, the Castilian king’s name, the August day, and the house he founded are each in a single account. So they are not part of the life stated here. What both accounts allow is his kingship in Portugal and a victory at Aljubarrota in 1385 that confirmed it.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Aljubarrota', publisher: 'Wikipedia' },
    {
      url: 'https://www.encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/joao-i-portugal-1357-1433',
      publisher: 'Encyclopedia.com',
    },
  ],
};

const charlesVii: EraFigure = {
  id: 'charles_vii_of_france',
  name: 'Charles VII',
  role: 'ruler',
  country: 'France',
  allegiance: 'France',
  note: 'One account has him turn to Gascony after Normandy. The other has his armies take Bordeaux and then move on that city again. Neither makes him the officer of the guns at Castillon.',
  bio: {
    primary:
      'Charles VII was king of France when the French defeated John Talbot at Castillon on 17 July 1453 and English Gascony was lost.',
    secondary:
      'Charles VII was the French king in the struggle for Gascony. One account says that once Normandy had been recovered he turned to Gascony, the broadest land England still held. The other says armies of his had taken Bordeaux and that he sent armies toward that city. On 17 July 1453 French troops defeated John Talbot at Castillon, and Talbot was killed. English authority over Gascony did not survive the defeat. Orders on the field that day are credited to other men, so this life stays with the king and the province that was lost.',
    university:
      'Charles VII’s reign is the French setting of Castillon. Both narratives name him as king while the war moved into Gascony, and both date the battle to 17 July 1453, when John Talbot’s army was destroyed and Talbot died. One narrative has him look to Gascony after Normandy was recovered, still England’s largest holding there. The other has his forces take Bordeaux, then prepare through a winter and send armies back toward the city. Neither page makes him the officer who sited the guns. One gives that work to Jean Bureau under a committee, and the other gives Bureau the artillery among several French captains. Those posts are not his. The life left to him is the crown, the campaign in Gascony, Talbot’s death, and the end of English rule there.',
  },
  sources: [
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-castillon/', publisher: 'British Battles' },
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Castillon', publisher: 'Wikipedia' },
  ],
};

export const LATE_MEDIEVAL_ROUND2_FIGURES: EraFigure[] = [
  edwardTheBlackPrince,
  johnIiOfFrance,
  nunoAlvaresPereira,
  johnIOfCastile,
  johnTalbot,
  jeanBureau,
  johnIOfPortugal,
  charlesVii,
];

const halidon1333: EraEvent = {
  id: 'halidon_hill_1333',
  date: '1333-07-19',
  precision: 'day',
  title: 'Battle of Halidon Hill',
  kind: 'battle',
  fronts: ['british_isles'],
  countries: ['England', 'Scotland'],
  figures: ['archibald_douglas'],
  note: 'One account calls the struggle the Second War of Scottish Independence. The other calls it the Scottish War of Independence and does not use Second. One says Douglas was killed. The other says he was mortally wounded and captured, and calls him Guardian and Lord of Galloway. One lists Edward Balliol among the commanders. The other has him lead a column from Carlisle while Edward III brought the main army. A next-day surrender of Berwick, a claim of early massed longbows, and the troop numbers are each in a single account.',
  levels: {
    primary: {
      cause: 'King Edward III led an English army near Berwick-upon-Tweed, and Sir Archibald Douglas brought a Scottish army to attack him.',
      what: 'On 19 July 1333 the English heavily defeated Douglas’s Scots at Halidon Hill.',
      consequence: 'The Scottish attack failed, Douglas died, and Edward III’s army held the field.',
    },
    secondary: {
      cause: 'Edward III, king of England, had an army beside the border town of Berwick-upon-Tweed. Sir Archibald Douglas led a Scottish army up to attack him. One account calls Douglas the Scottish commander and places the hill near that town. The other calls him Guardian and Lord of Galloway, and places the fight to the north of Berwick-upon-Tweed, outside Berwick. The cause they share is Douglas’s attack on the English army of Edward III by that town.',
      what: 'Both accounts date the battle to 19 July 1333 and call the ground Halidon Hill. The Scots advanced and were heavily defeated. English longbows are in both accounts: one says the arrows caused heavy losses as the Scots came on, and the other speaks of massed longbows. A claim that this was among the first such uses is in only one account, so it is not repeated. Strengths are printed and do not match, so no total is given. The action both describe is Edward III’s defeat of Douglas at Halidon Hill that day.',
      consequence: 'The English victory was heavy, and the Scottish attack failed. Douglas died. One account says the Scottish commander was killed, with many of the senior nobility. The other says Douglas was mortally wounded and captured, and that the pursuit killed many more. Capture, and a surrender of Berwick on the next day, are not in both accounts, so they are not the result stated here. What remains is the English victory and the death of Douglas.',
    },
    university: {
      cause: 'The narratives agree that King Edward III commanded the English at Halidon Hill and that Sir Archibald Douglas led the Scots who attacked, on ground by Berwick-upon-Tweed. They do not agree what to call the war. One says the Second War of Scottish Independence and treats the year before as its opening, with Edward Balliol seizing a crown and then being driven out. The other speaks of the Scottish War of Independence, calls Balliol a self-appointed king, and has two English columns, one of them Balliol’s from Carlisle and the main one Edward’s from Newcastle, meet at the siege of Berwick. The cause both narratives allow is Douglas’s decision to attack the army Edward III had outside the town.',
      what: '19 July 1333 is the date in each narrative, and Halidon Hill is the name of the field. One narrative describes a failed attempt to draw the English off, then an assault on a defensive position, with longbowmen hurting the Scots before the infantry fight, which it calls short, and a collapse into flight. The other describes the Scots’ attack, a decisive English win, and longbows as a weapon of the English army, adding a claim of early massed use that the first narrative does not make. Numbers for either host are unlike, and no number is kept. A mounted pursuit is vivid in one narrative and only implied by the rout in the other, so the pursuit is not the action stated. The action stated is the day’s battle, the English longbows, and the heavy defeat of the Scots under Douglas.',
      consequence: 'Both narratives end the battle as an English victory and a Scottish disaster. Douglas did not survive it. One narrative says he was killed. The other says he was mortally wounded and then captured, with named earls among the dead or the prisoners. Because the manner differs, this result says that he died, and it does not choose killed on the spot over a mortal wound after capture. A surrender of Berwick on the following day is in one narrative only. Homage paid by Balliol, and any grant of land, are not phrased alike, so they stay out. The consequence they share is narrower: the Scottish attack failed, Edward III’s army won, and Douglas died.',
    },
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Halidon_Hill', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/scottish-war-of-independence/battle-of-halidon-hill/', publisher: 'British Battles' },
  ],
};

const formigny1450: EraEvent = {
  id: 'formigny_1450',
  date: '1450-04-15',
  precision: 'day',
  title: 'Battle of Formigny',
  kind: 'battle',
  fronts: ['france_and_low_countries'],
  countries: ['England', 'France'],
  figures: ['thomas_kyriell', 'arthur_de_richemont', 'jean_de_clermont'],
  note: 'One account calls the French leader Jean de Clermont. The other calls him the Comte de Clermont, son of the Duc de Bourbon. One says the English set out to relieve Caen. The other says Kyriell’s orders were to reinforce Bayeux. Valognes is dated 27 March in one account and 18 April in the other. One has Richemont come from Saint-Lô. The other has him come up on the flank from St Lo. One calls the result French and Breton and speaks of an early use of field guns. The other calls it a French victory. Strengths differ.',
  levels: {
    primary: {
      cause: 'In the Hundred Years’ War, Sir Thomas Kyriell led an English army in Normandy against French forces under Clermont and Arthur de Richemont.',
      what: 'On 15 April 1450 those French forces defeated Kyriell’s army at Formigny and captured him.',
      consequence: 'The defeat destroyed the last English army in Normandy, and the French victory at Formigny stood.',
    },
    secondary: {
      cause: 'The Hundred Years’ War was in its late phase, and the fighting had moved into Normandy. Sir Thomas Kyriell commanded the English army. Clermont commanded the French who first stood against him, and Arthur de Richemont, Constable of France, brought a further French force. One account calls that French leader Jean de Clermont. The other calls him the Comte de Clermont, son of the Duc de Bourbon, and does not print the personal name. The shared cause is Kyriell’s English army in Normandy, met by those French commanders.',
      what: 'Both accounts date the battle to 15 April 1450 and place it at Formigny in Normandy. Kyriell had landed at Cherbourg on 15 March 1450, a day both accounts give, and he had taken Valognes while marching toward Bayeux. He reached Formigny, and the French defeated him there. One account puts the field near Bayeux. The other says he stopped near Formigny on the way toward that town. The action they share is the defeat at Formigny and Kyriell’s capture.',
      consequence: 'The French victory was decisive. Kyriell was taken. Each account says the defeat destroyed the last English army in Normandy. One adds the word significant, and calls the losers a field army. The other does not. Troop totals differ, and a Breton share in the victory is not in both. The result stated here is the French victory, Kyriell a prisoner, and English Normandy left without that army.',
    },
    university: {
      cause: 'Two narratives of Formigny set the battle late in the Hundred Years’ War, on ground in Normandy, with an English army under Sir Thomas Kyriell. The French officers they both name are Clermont, who met the English in the first part of the fighting, and Arthur de Richemont, constable of France, whose men joined the attack. The narratives do not style Clermont in one way. Jean is the given name in a single narrative. Comte, and son of the Duc de Bourbon, belong to the other. Richemont’s approach is also told twice and not alike: one has him come to Saint-Lô and then on toward the field, and the other has him come up on the English flank after reaching St Lo. The cause is the collision, in Normandy, of Kyriell’s army with the forces of Clermont and Richemont.',
      what: 'Each narrative dates a landing at Cherbourg to 15 March 1450 and the battle at Formigny to 15 April 1450, and each mentions a halt at Valognes on the way toward Bayeux. The calendar day of the halt is not shared, so it is left out. One narrative has him reach Carentan before turning toward Bayeux and stopping near Formigny on 14 April. The other has the constable at St Lo on 14 April and Kyriell camped that night in the village of Formigny, on the Bayeux road. The 14 April detail is not phrased as one itinerary, so the course stated is shorter. On 15 April the French beat the English at Formigny, and Kyriell was among the captured. That day, that place, and that capture are the action both narratives support.',
      consequence: 'The French won, and both narratives call the win decisive. Kyriell passed into French hands. His army did not survive as a force: one narrative says the vast majority were killed or captured, and the other says he was captured and the army killed or dispersed. Beyond his person, both say the defeat destroyed the last English army in Normandy. A Breton share in the victory, a claim that the guns were among the first on a European field, the fall of Caen weeks later, and every figure for the dead are each told in a single narrative. They are not the result given here. The result is the French victory at Formigny, the capture of Kyriell, and the end of that English army in Normandy.',
    },
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Formigny', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-formigny/', publisher: 'British Battles' },
  ],
};

const towton1461: EraEvent = {
  id: 'towton_1461',
  date: '1461-03-29',
  precision: 'day',
  title: 'Battle of Towton',
  kind: 'battle',
  fronts: ['british_isles'],
  countries: ['England'],
  figures: ['edward_iv', 'duke_of_somerset'],
  note: 'One account places the field near Towton in North Yorkshire. The other places it south of Tadcaster in Yorkshire. One says the victory secured the English throne. The other says it led to his coronation. One calls Fauconberg a baron and the other a lord. One prints the name Henry Beaufort for the Duke of Somerset. Troop numbers are not the same, and the clock times are in one account only. One says the Earl of Northumberland was killed. The other says he died of his wounds.',
  levels: {
    primary: {
      cause: 'During the Wars of the Roses, Edward, Earl of March, led the Yorkists against a Lancastrian army under the Duke of Somerset.',
      what: 'On 29 March 1461, Palm Sunday, those armies fought for ten hours in snow at Towton in Yorkshire, and the Yorkists won.',
      consequence: 'Somerset’s host was beaten. The victory left Edward IV king of England, and Sir Andrew Trollope was killed.',
    },
    secondary: {
      cause: 'England’s civil struggle, the Wars of the Roses, had already set York against Lancaster. Edward, Earl of March, commanded the Yorkist side, and both accounts afterwards speak of him as Edward IV. The Duke of Somerset commanded the Lancastrians. The Earl of Northumberland and Sir Andrew Trollope are named with Somerset in each account. One account sets the ground near Towton in North Yorkshire. The other sets it south of Tadcaster, still in Yorkshire. The quarrel they share is that meeting of the two factions on a Yorkshire field.',
      what: 'Both accounts date the fighting to 29 March 1461 and call the day Palm Sunday. Snow was falling. One account calls it a snowstorm. The other says snow began as the Yorkists came on, and that the struggle in those snowy fields lasted ten hours. The first account also gives ten hours. The clock times of the start and the finish appear in only one account, so they are not repeated. The action both describe is a long snow fight at Towton, closed by a decisive success for the Yorkists.',
      consequence: 'The Lancastrian army under Somerset lost. Sir Andrew Trollope was killed. The Earl of Northumberland died as well, though one account says he was killed and the other that he died of his wounds. Edward IV’s success is joined to the crown in different words. One account says the victory secured the English throne for him. The other says it led to his coronation. The ceremony itself is not in both. The shared result is the Yorkist win, those two deaths, and Edward IV as king of England.',
    },
    university: {
      cause: 'Readers of the two narratives meet this battle inside the Wars of the Roses, an English civil war of York against Lancaster. They name Edward, Earl of March, at the head of the Yorkist force, and the Duke of Somerset at the head of the Lancastrian force. Northumberland and Sir Andrew Trollope stand among Somerset’s officers in each narrative, beside other men the narratives do not list in the same way. Warwick, Fauconberg, and the Duke of Norfolk are named with Edward. One narrative styles Fauconberg a baron and the other a lord, so the rank-word is not fixed here. A personal name for Somerset is printed once, so the cause keeps the ducal title both narratives share. The cause stated is the armed meeting itself.',
      what: 'The day printed in each narrative is 29 March 1461. Each also gives the feast name Palm Sunday, winter weather, and a struggle measured at ten hours. One speaks of a snowstorm and of an estimated host on either side. The other speaks of wind, of snow on the fields, and of a fight from morning into evening, with the hours of the clock given only there. Strengths are not the same figure, so no total of men is stated. The place-name Towton is the battle’s own title in both. One adds North Yorkshire. The other says the ground lay south of Tadcaster in Yorkshire. What the narratives support together is the day, the snow, the length of the fighting, and a Yorkist success on that Yorkshire ground.',
      consequence: 'Victory belonged to the Yorkists, and it was decisive in both narratives. Sir Andrew Trollope’s death is explicit in each. Northumberland’s end is death in each, but one marks him killed and the other says he died of wounds, which is why the manner is not collapsed into a single verb. The political sequel is Edward on the English throne. One narrative says the victory secured that throne. The other says the same success led on to a coronation, and that he was soon to be crowned. A crowning rite, a count of the slain, and any later reign are omitted, because the narratives do not tell them alike. The result kept is the Yorkist victory, Trollope dead, Northumberland dead, and Edward IV king.',
    },
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Towton', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/wars-of-the-roses/battle-of-towton/', publisher: 'British Battles' },
  ],
};

const edwardIv: EraFigure = {
  id: 'edward_iv',
  name: 'Edward IV',
  role: 'ruler',
  country: 'England',
  allegiance: 'York',
  note: 'One account says the victory secured the English throne. The other says it led to his coronation. One calls Fauconberg a baron and the other a lord. Troop numbers differ.',
  bio: {
    primary: 'On 29 March 1461 Edward, Earl of March, commanded the Yorkists at Towton, defeated the Duke of Somerset, and was king of England as Edward IV.',
    secondary: 'Edward IV is the Yorkist king both accounts set at Towton, and each also calls him Earl of March. On 29 March 1461, Palm Sunday, he commanded the army that fought the Duke of Somerset’s Lancastrians for ten hours in the snow and beat them. One account says the victory secured the throne. The other says it led to his coronation, and that he was soon to be crowned. This life is his command that day and the crown that followed the victory.',
    university: 'The Yorkist commander at Towton is Edward, Earl of March, whom both narratives also call Edward IV. They date his battle to 29 March 1461, name it Palm Sunday, and give him the victory over the Duke of Somerset after ten hours in the snow. One narrative has him declared king and marching north before the fight, and says the result secured the English throne. The other has Parliament name him rightful king in place of Henry VI, and says the victory led to a coronation still ahead of him. No strength is repeated, because the figures differ. What remains is the earl who won at Towton and held the throne as Edward IV.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Towton', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/wars-of-the-roses/battle-of-towton/', publisher: 'British Battles' },
  ],
};

const dukeOfSomerset: EraFigure = {
  id: 'duke_of_somerset',
  name: 'Duke of Somerset',
  role: 'commander',
  country: 'England',
  allegiance: 'Lancaster',
  note: 'One account prints the name Henry Beaufort. The other does not. One says the Earl of Northumberland was killed. The other says he died of his wounds. Neither account says the duke himself was killed.',
  bio: {
    primary: 'On 29 March 1461 the Duke of Somerset commanded the Lancastrian army at Towton and was defeated by Edward, Earl of March.',
    secondary: 'The Duke of Somerset is the Lancastrian commander both accounts name at Towton. On 29 March 1461 his army met Edward, Earl of March, later called Edward IV, and lost a fight of ten hours in the snow, on Palm Sunday. The Earl of Northumberland and Sir Andrew Trollope are recorded as officers of his. Trollope was killed, and Northumberland died, one account saying killed and the other dying of wounds. A given name, Henry Beaufort, appears for the duke in only one account. This life keeps the title, the command, and the defeat.',
    university: 'Both narratives give the Duke of Somerset command of the Lancastrian host at Towton on 29 March 1461. Edward, Earl of March, whom they also call Edward IV, beat that host. The day was Palm Sunday, the weather snow, and the fighting ten hours, in Yorkshire. One narrative places the field near Towton in North Yorkshire and calls Somerset Henry Beaufort, an experienced leader. The other places the field south of Tadcaster and does not print a personal name, while listing Northumberland, Sir Andrew Trollope, and Lord Dacre as immediate subordinates. Trollope’s death and Northumberland’s death are in both, with the manner of Northumberland’s death unsettled. Whether Somerset himself was killed is not a claim these narratives share, so this life does not end him on the field. It keeps the duke who led the Lancastrians and lost.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Towton', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/wars-of-the-roses/battle-of-towton/', publisher: 'British Battles' },
  ],
};

const thomasKyriell: EraFigure = {
  id: 'thomas_kyriell',
  name: 'Sir Thomas Kyriell',
  role: 'commander',
  country: 'England',
  allegiance: 'England',
  note: 'One account dates the fall of Valognes to 27 March and says the army set out to relieve Caen. The other dates Valognes to 18 April and says his orders were to reinforce Bayeux. Both date the landing at Cherbourg to 15 March 1450 and the battle to 15 April 1450.',
  bio: {
    primary: 'On 15 April 1450 Sir Thomas Kyriell commanded the English army at Formigny, was defeated by the French, and was captured.',
    secondary: 'Sir Thomas Kyriell commanded the English army in Normandy during the Hundred Years’ War. He landed at Cherbourg on 15 March 1450, took Valognes on the way toward Bayeux, and fought at Formigny on 15 April 1450. Clermont and Arthur de Richemont, Constable of France, were the French leaders against him. The French defeated his army and captured him. The life is his command, the defeat at Formigny, and his capture, after which the last English army in Normandy was destroyed.',
    university: 'Sir Thomas Kyriell is the English commander both narratives name at Formigny. Each dates his landing at Cherbourg to 15 March 1450 and the battle to 15 April 1450, and each has him take Valognes while moving toward Bayeux before the French beat him at Formigny. Clermont met him first. Arthur de Richemont, the constable, brought another force. One narrative calls Clermont Jean. The other calls him the Comte de Clermont and does not use Jean. Kyriell was captured. One narrative folds him into a majority killed or taken. The other says the French captured him and killed or dispersed the army. Numbers of his men are unlike and are omitted. His life here is the general who landed, lost at Formigny, and was taken, with the last English army in Normandy destroyed.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Formigny', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-formigny/', publisher: 'British Battles' },
  ],
};

const arthurDeRichemont: EraFigure = {
  id: 'arthur_de_richemont',
  name: 'Arthur de Richemont',
  role: 'commander',
  country: 'France',
  allegiance: 'France',
  note: 'One account has him arrive at Saint-Lô and move on to Formigny. The other says he came up on the English flank and spells the town St Lo. A Breton label for his men is in one account only.',
  bio: {
    primary: 'Arthur de Richemont, Constable of France, brought a force to Formigny, where the French defeated and captured Sir Thomas Kyriell on 15 April 1450.',
    secondary: 'Arthur de Richemont was Constable of France. Both accounts name him at Formigny beside Clermont, in the Hundred Years’ War. On 15 April 1450 the French defeated Sir Thomas Kyriell’s English army in Normandy and captured Kyriell. One account has Richemont arrive at Saint-Lô and move on to the field. The other says he came up on the English flank, and spells the town St Lo. The constable’s life here is that he brought a French force to the victory which destroyed the last English army in Normandy.',
    university: 'The constable of France in both narratives of Formigny is Arthur de Richemont. One narrative also styles him a count and says the men he commanded came up on the English flank after he had reached St Lo. The other calls him Constable of France, Arthur de Richemont, and has him come into Saint-Lô with a force before moving on Formigny. Clermont is the officer who first engaged Sir Thomas Kyriell. Richemont’s part is the force that joined the French attack. The day both narratives give the battle is 15 April 1450. Kyriell was captured, and the defeat destroyed the last English army in Normandy. A Breton label for Richemont’s men, and any total of their strength, belong to single narratives and are left out. What remains is the constable whose arrival helped the French win at Formigny.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Formigny', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-formigny/', publisher: 'British Battles' },
  ],
};

const jeanDeClermont: EraFigure = {
  id: 'jean_de_clermont',
  name: 'Jean de Clermont',
  role: 'commander',
  country: 'France',
  allegiance: 'France',
  note: 'One account calls him Jean de Clermont. The other calls him the Comte de Clermont, son of the Duc de Bourbon, and does not print the personal name.',
  bio: {
    primary: 'Clermont led the French who first fought Sir Thomas Kyriell at Formigny on 15 April 1450, and the English army was defeated and Kyriell captured.',
    secondary: 'Clermont is the French commander both accounts place against Sir Thomas Kyriell at the opening of Formigny. One account calls him Jean de Clermont. The other calls him the Comte de Clermont, son of the Duc de Bourbon, and does not print Jean. On 15 April 1450, in the Hundred Years’ War, his men and those of Arthur de Richemont, Constable of France, defeated Kyriell in Normandy. Kyriell was captured. This life is Clermont’s command in the first part of a French victory that destroyed the last English army in Normandy.',
    university: 'The French officer who confronted the English in the first part of Formigny is Clermont in both narratives. They do not share one style for him. Jean de Clermont is the form in a single narrative, which also links him onward to a ducal title. The Comte de Clermont, son of the Duc de Bourbon, is the form in the other, which gives him the army that halted before Kyriell and then attacked. Arthur de Richemont, constable of France, is the second French leader, whose force came up afterwards. Sir Thomas Kyriell, who commanded the English, was captured, and the last English army in Normandy was destroyed. His part is command of the French who first engaged Kyriell and shared in that victory.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Formigny', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-formigny/', publisher: 'British Battles' },
  ],
};

const archibaldDouglas: EraFigure = {
  id: 'archibald_douglas',
  name: 'Sir Archibald Douglas',
  role: 'commander',
  country: 'Scotland',
  allegiance: 'Scotland',
  note: 'One account says he was killed. The other says he was mortally wounded and captured, and calls him Guardian and Lord of Galloway. One uses Second for the war of independence. The other does not.',
  bio: {
    primary: 'On 19 July 1333 Sir Archibald Douglas led the Scottish army at Halidon Hill, was heavily defeated by King Edward III, and died.',
    secondary: 'Sir Archibald Douglas commanded the Scots at Halidon Hill, near Berwick-upon-Tweed. On 19 July 1333 he attacked the English army of King Edward III and was heavily defeated. He died. One account says the Scottish commander was killed. The other says the Guardian, Douglas, was mortally wounded and captured, and it calls him Lord of Galloway. One account names a Second War of Scottish Independence. The other does not use Second. English longbows are in both accounts. This life is his command of the attack, the defeat, and his death.',
    university: 'Two narratives name one Scottish captain for this border fight, Sir Archibald Douglas, opposite the English king. They print a single July day in 1333 and a single hill. They divide on his office and on the manner of his end. A shorter telling says the commander was slain and that many nobles fell with him. A longer telling adds a guardianship and a Galloway lordship, then says he was carried off mortally hurt and already a prisoner. Only the shorter telling numbers that war as Second. Archery is present in each, yet a claim of early massed use is not, and it is dropped. Balliol remains a marginal name, assigned no common post. Counts of soldiers clash and are discarded. Douglas is the man who delivered the attack, lost it to Edward III, and did not survive.',
  },
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Halidon_Hill', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/scottish-war-of-independence/battle-of-halidon-hill/', publisher: 'British Battles' },
  ],
};

const valognesFormigny1450: EraLine = {
  id: 'valognes_formigny_1450',
  name: 'English march from Valognes to Formigny',
  from: '1450-04-15',
  to: '1450-04-15',
  domain: 'land',
  mover: 'England',
  summary: 'Sir Thomas Kyriell’s English army took Valognes, then marched toward Bayeux and reached Formigny, where the French defeated it on 15 April 1450.',
  waypoints: [
    { name: 'Valognes', lat: 49.5090696, lng: -1.4706243 },
    { name: 'Formigny', lat: 49.3326678, lng: -0.8925427 },
  ],
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Formigny', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-formigny/', publisher: 'British Battles' },
  ],
};

const valognesFormignyLinks: EraLink[] = [
  { lineId: 'valognes_formigny_1450', eventId: 'formigny_1450', at: 0 },
  { lineId: 'valognes_formigny_1450', eventId: 'formigny_1450', at: 1 },
];

export const LATE_MEDIEVAL_ROUND3_EVENTS: EraEvent[] = [
  halidon1333, formigny1450, towton1461,
];

export const LATE_MEDIEVAL_ROUND3_FIGURES: EraFigure[] = [
  edwardIv, dukeOfSomerset, thomasKyriell, arthurDeRichemont, jeanDeClermont, archibaldDouglas,
];

const towton1461Place: EraLine = {
  id: 'towton_1461_place',
  name: 'Towton',
  from: '1461-03-29',
  to: '1461-03-29',
  domain: 'land',
  mover: 'England',
  summary: 'On 29 March 1461 the Yorkist army won the battle at Towton in Yorkshire.',
  waypoints: [{ name: 'Towton', lat: 53.8498331, lng: -1.26347 }],
  sources: towton1461.sources,
};

const towton1461Links: EraLink[] = [
  { lineId: 'towton_1461_place', eventId: 'towton_1461', at: 0 },
];

export const LATE_MEDIEVAL_ROUND3_LINES: EraLine[] = [valognesFormigny1450, towton1461Place];

export const LATE_MEDIEVAL_ROUND3_LINKS: EraLink[] = [...valognesFormignyLinks, ...towton1461Links];

const nevillesCross1346: EraEvent = {
  id: "nevilles_cross_1346",
  date: "1346-10-17",
  precision: "day",
  title: "Battle of Neville’s Cross",
  kind: "battle",
  fronts: ["british_isles"],
  countries: ["England", "Scotland"],
  figures: ["david_ii", "ralph_neville", "henry_percy"],
  note: "One account calls the struggle the Second War of Scottish Independence. The other does not use Second. One says Ralph Neville led the English. The other names him with Henry Percy and the archbishop of York. That archbishop is William Zouche in one account and Walter de la Zouche in the other. One account calls David II the son of Robert the Bruce. Strengths differ. A story that the king was found under a bridge is in one account.",
  levels: {
    primary: {
      cause: "King David II led a Scottish army into northern England, and Ralph Neville was among the English commanders who faced him near Durham.",
      what: "On 17 October 1346 the English defeated David II’s army at Neville’s Cross, and the king of Scots was captured.",
      consequence: "The Scottish attack failed. David II was a prisoner, and the English army of Ralph Neville held the field near Durham.",
    },
    secondary: {
      cause: "David II, king of Scots, invaded northern England and brought his army to Durham. The English commanders named against him include Ralph Neville. One page says the English army was led by Ralph Neville, Lord Neville. The other names Henry Percy and Ralph Neville together, with the archbishop of York. The archbishop’s personal name is not the same on the two pages, so it is not used here. The cause they share is David’s invasion and the English decision to fight him at Durham.",
      what: "Both pages date the battle to 17 October 1346 and place it at Durham in the north of England. One page calls the spot Neville’s Cross, half a mile west of the city. The other says Durham. David II’s Scots were defeated. He was captured. One page speaks of the capture of their king. The other speaks of David’s capture and of the loss of several Scottish leaders. Strengths are printed and do not match, so no total is given. The action both describe is the English victory and the capture of David II.",
      consequence: "The defeat was crushing for the Scots, and their king did not leave the field a free man. Ralph Neville’s side held the ground. One page says most of the Scottish leadership was killed or captured. The other says several military leaders were lost. The wider ransom and a long truce are in a single page, so they are not the result stated here. What remains is the English victory at Durham and David II a prisoner.",
    },
    university: {
      cause: "Two narratives bring King David II and a Scottish army against a northern English force in the autumn of 1346. They agree the ground was at Durham. They do not agree a single style for the English command. A shorter telling says Ralph Neville, Lord Neville, led the English. A longer list names Henry Percy, Ralph Neville, and the archbishop of York, whose personal name is William on one page and Walter on the other. That personal name is dropped. One telling calls the war a second war of Scottish independence and ties the invasion to a French request. The other does not use the numeral and does not tell that request in the same words. The cause that remains is David’s invasion of the north and the English stand under Neville near Durham.",
      what: "17 October 1346 is the date in each narrative. Neville’s Cross is the name one narrative gives the hill west of Durham, after an older stone cross. The other is content to say Durham in the north of England. A new cross raised after the victory is in a single narrative and is not the battle. Numbers for either host are unlike, and none is kept. The fighting itself is a Scottish defeat. David II was taken. One narrative later pictures him found beneath a bridge, a detail the other does not share, so the manner of the capture is not stated. The course they support is the day’s battle near Durham, the English victory, and the king of Scots made a prisoner.",
      consequence: "Both narratives treat the end of the day as a heavy Scottish defeat and the capture of David II. Leadership around him was also lost, though one narrative says most were killed or taken and the other says several leaders were lost, which is why no single verb is forced on every man. Ralph Neville remains the English commander both pages name, with Henry Percy beside him on both. Any ransom, a border truce of many years, and the claim that Scotland was left helpless are each fuller than the shared sentence. They stay out. The consequence kept is the failed invasion, David a captive, and the English holding the field at Durham.",
    },
  },
  sources: [
    {
      url: "https://en.wikipedia.org/wiki/Battle_of_Neville%27s_Cross",
      publisher: "Wikipedia",
    },
    {
      url: "https://www.britishbattles.com/scottish-war-of-independence/battle-of-nevilles-cross/",
      publisher: "British Battles",
    },
  ],
};

const barnet1471: EraEvent = {
  id: "barnet_1471",
  date: "1471-04-14",
  precision: "day",
  title: "Battle of Barnet",
  kind: "battle",
  fronts: ["british_isles"],
  countries: ["England"],
  figures: ["earl_of_warwick"],
  note: "One account calls 14 April Easter Day. The other says Edward left London on Easter Saturday and reached Barnet that evening. One says Yorkist soldiers killed Warwick while he retreated. The other says he was killed trying to reach his horse. One calls him the kingmaker. Troop numbers differ, and Lord Montagu’s death is in one account.",
  levels: {
    primary: {
      cause: "In the Wars of the Roses the Earl of Warwick led a Lancastrian army against King Edward IV near Barnet.",
      what: "On 14 April 1471 the armies clashed in thick fog at Barnet, north of London, and Edward IV’s Yorkists defeated the Earl of Warwick.",
      consequence: "The Yorkists won decisively. The Earl of Warwick was killed, and Edward IV’s army held the field.",
    },
    secondary: {
      cause: "Warwick had stood with Edward IV and then turned to Lancaster during the Wars of the Roses. He brought an army against the king who had come back to England. One page calls him the kingmaker and a former ally. The other says he changed sides after the king’s secret marriage and his policy. Richard, Duke of Gloucester, was with Edward. The cause they share is Warwick’s Lancastrian army facing Edward IV near Barnet, north of London.",
      what: "Both pages date the fighting to 14 April 1471 and place it at Barnet in Hertfordshire, north of London. Edward IV commanded the Yorkists. The Earl of Warwick commanded the Lancastrians. Fog lay over the ground. One page says the hosts clashed in a thick fog at dawn. The other says guns fired in the night did little because of the fog, the Yorkist camp being closer than the gunners had reckoned. The shared action is that day’s battle in the fog, closed by Edward’s defeat of Warwick.",
      consequence: "The Yorkist success was decisive, and Warwick was killed. One page says Yorkist soldiers killed him while he retreated. The other says he died trying to reach his horse. The manner is not the same, so this result keeps the death and not a chosen blow. A further fight at Tewkesbury is used by one page to explain the throne, and it is not repeated as Barnet’s own result. What remains is the Yorkist victory and Warwick dead on the field.",
    },
    university: {
      cause: "Each narrative sets 14 April 1471 inside the Wars of the Roses, with Edward IV at the head of the Yorkist host and the Earl of Warwick at the head of the Lancastrian host. One narrative calls the Sunday Easter Day and the place a small Hertfordshire town north of London. The other has the king leave London on Easter Saturday and reach Barnet that evening, so the feast-word is not fixed to a single sentence. Richard, Duke of Gloucester, is named beside Edward in each narrative, and one adds that this brother later reigned as Richard III. Counts of men differ and are omitted. The cause the narratives allow is the armed meeting itself, Warwick against the king who had returned.",
      what: "Fog belongs to both narratives, but not to the same hour. One describes a dawn clash in thick fog after the armies had drawn close in the dark. The other describes a night bombardment that failed, the fog and a nearer Yorkist camp spoiling the aim. Oxford, Hastings, Somerset and Exeter are named in the arrays, yet the two lists are not the same roster, so no full order of battle is stated. Easter wording and any clock of the first shot stay out for the same reason. The course supported here is the fight at Barnet on 14 April 1471 and Edward IV’s defeat of Warwick’s army.",
      consequence: "Both narratives end the day as a decisive Yorkist victory and record Warwick’s death. They do not record it alike. Soldiers of the winning side, striking him in the retreat, are one version. A death while he tried to reach his horse, with Lord Montagu also slain, is the other. Montagu, the horse, and the retreat are therefore left out of the result, and only the killing of Warwick remains. One narrative then ties the throne to a later victory at Tewkesbury. That sequel is a different battle. The result stated for Barnet is narrower: the Yorkists won, and the earl who had led the Lancastrians was killed.",
    },
  },
  sources: [
    {
      url: "https://en.wikipedia.org/wiki/Battle_of_Barnet",
      publisher: "Wikipedia",
    },
    {
      url: "https://www.britishbattles.com/wars-of-the-roses/battle-of-barnet/",
      publisher: "British Battles",
    },
  ],
};

const tewkesbury1471: EraEvent = {
  id: "tewkesbury_1471",
  date: "1471-05-04",
  precision: "day",
  title: "Battle of Tewkesbury",
  kind: "battle",
  fronts: ["british_isles"],
  countries: ["England"],
  figures: ["edward_prince_of_wales", "margaret_of_anjou"],
  note: "The British Battles fact line prints 4 May 1461. The heading of that page, and the Wikipedia page, print 4 May 1471. One account says the prince was killed during the battle or executed afterwards. The other gives a tradition that he was captured and stabbed, and a report that he died in the fighting. One account calls Henry VI’s death murder in the Tower. The other says he was likely murdered, and that the official cause was melancholy. Margaret’s landing at Weymouth is in one account. Troop numbers differ.",
  levels: {
    primary: {
      cause: "In the Wars of the Roses King Edward IV led the Yorkists against a Lancastrian army that included Edward, Prince of Wales.",
      what: "On 4 May 1471 Edward IV’s army defeated the Lancastrians at Tewkesbury, and the Prince of Wales died.",
      consequence: "The Yorkist victory was decisive. Queen Margaret of Anjou was captured, and King Henry VI died soon afterwards in the Tower.",
    },
    secondary: {
      cause: "After Barnet, Queen Margaret of Anjou and the Lancastrian lords still had an army in the field, and Edward IV marched to meet it. The prince with that army was Edward, Prince of Wales, son of Henry VI. One page sets the ground at Tewkesbury in Gloucestershire on the Severn. The other sets it at Tewkesbury in Gloucestershire. The cause they share is Edward IV’s pursuit of that Lancastrian army to Tewkesbury in the Wars of the Roses.",
      what: "Both pages place a decisive battle at Tewkesbury on 4 May 1471, and both treat the year 1471 as the year of the heading and the narrative. Edward IV commanded the Yorkists and completely defeated the Lancastrians. Edward, Prince of Wales, died. One page says he was killed in the battle or executed afterwards. The other repeats a tradition that he was captured and stabbed, and also a report that he died in the fighting. The shared action is the Yorkist victory that day and the prince’s death.",
      consequence: "Margaret of Anjou was captured after the defeat. Henry VI, already a prisoner, died in the Tower soon afterwards. One page calls that death murder. The other says he was likely murdered, while an official account blamed melancholy, and it also names the Tower. The manner is not one agreed sentence, so the result keeps the death in the Tower and not a verdict. The shared result is the Yorkist win, the prince dead, Margaret a captive, and Henry VI dead in the Tower.",
    },
    university: {
      cause: "The campaign sits in the Wars of the Roses, after Warwick’s defeat, with Margaret of Anjou and a Lancastrian army still to be fought. Edward IV is the Yorkist king in each narrative. Edward, Prince of Wales, is named with the Lancastrian side, and one narrative calls his leadership nominal beside the Duke of Somerset, Lord Wenlock and the Earl of Devonshire. The other names those lords with him as well. A fact line on one page prints 4 May 1461, while the same page’s heading, and the other page throughout, print 4 May 1471. The stray year is recorded and not used. The cause kept is Edward’s march against that Lancastrian army at Tewkesbury.",
      what: "The day used here is 4 May 1471, the date on which the narratives agree once the single fact-line year is set aside. Tewkesbury in Gloucestershire is the place. One narrative adds the River Severn and the nearness of Wales. The other describes a position south of the town, with the Avon and the Severn in rear. Those river details are richer than the shared sentence, so the action stays with the town and the day. Edward IV’s army won. The Prince of Wales died, whether in the press of the fight or by execution after capture: the pages do not choose one manner between them. That death, and the Yorkist victory, are the action both support.",
      consequence: "Margaret of Anjou passed into Yorkist hands after the battle. One narrative shows her captured and names the picture of that capture. The other has the captive queen beside Edward when he entered London. The chariot and the day of that entry are in a single narrative, so they are not the result. Henry VI died in the Tower shortly after the field. One narrative states murder. The other says the death was likely murder, gives melancholy as the official cause, and in a later sentence has him die in the Tower that night. Because the manner is hedged on one side and plain on the other, this result says only that he died there soon afterwards. The result they share is the decisive Yorkist victory, the prince dead, Margaret captured, and Henry VI dead in the Tower.",
    },
  },
  sources: [
    {
      url: "https://en.wikipedia.org/wiki/Battle_of_Tewkesbury",
      publisher: "Wikipedia",
    },
    {
      url: "https://www.britishbattles.com/wars-of-the-roses/battle-of-tewkesbury/",
      publisher: "British Battles",
    },
  ],
};

const earlOfWarwick: EraFigure = {
  id: "earl_of_warwick",
  name: "Earl of Warwick",
  role: "commander",
  country: "England",
  allegiance: "Lancaster",
  note: "One account calls him Warwick the Kingmaker. The other calls him Richard Neville, Earl of Warwick. One says Yorkist soldiers killed him while he retreated. The other says he was killed trying to reach his horse.",
  bio: {
    primary: "On 14 April 1471 the Earl of Warwick led the Lancastrian army at Barnet, was defeated by Edward IV, and was killed.",
    secondary: "The Earl of Warwick commanded the Lancastrians at Barnet in the Wars of the Roses. One page calls him the kingmaker and Edward’s former ally. The other gives him the name Richard Neville and says he had left the Yorkist cause. On 14 April 1471 his army met Edward IV north of London, in fog, and was beaten. He was killed. One page says Yorkist soldiers killed him as he retreated. The other says he died trying to reach his horse. This life is his command that day, the defeat, and his death.",
    university: "Warwick is the Lancastrian commander both narratives set against Edward IV at Barnet on 14 April 1471. One styles him the kingmaker and a man who had once been the king’s ally. The other calls him Richard Neville, Earl of Warwick, and traces his breach with Edward to marriage and policy before the return from exile. Those paths into the battle are not one story, so the life does not pick a single motive. Fog is present in each narrative. The Yorkists won. Warwick was killed, either by soldiers in the retreat or while making for his horse, and the two manners are left unresolved. Richard, Duke of Gloucester, is named on the king’s side and is not this life. What remains is the earl who led the Lancastrians at Barnet and died in their defeat.",
  },
  sources: [
    {
      url: "https://en.wikipedia.org/wiki/Battle_of_Barnet",
      publisher: "Wikipedia",
    },
    {
      url: "https://www.britishbattles.com/wars-of-the-roses/battle-of-barnet/",
      publisher: "British Battles",
    },
  ],
};

const edwardPrinceOfWales: EraFigure = {
  id: "edward_prince_of_wales",
  name: "Edward, Prince of Wales",
  role: "commander",
  country: "England",
  allegiance: "Lancaster",
  note: "One account says he was killed during the battle or executed after it. The other gives a tradition that he was captured and stabbed, and a report that he died in the fighting. A fact line on one page prints 4 May 1461. The heading of that page, and the other page, print 4 May 1471.",
  bio: {
    primary: "On 4 May 1471 Edward, Prince of Wales, was with the Lancastrian army at Tewkesbury, and he died when Edward IV won.",
    secondary: "Edward, Prince of Wales, was the Lancastrian heir, son of Henry VI, at Tewkesbury in the Wars of the Roses. On 4 May 1471 King Edward IV defeated that army. The prince died. One page says he was killed during the battle or executed after it. The other tells a tradition that he was captured and stabbed, and another report that he died in the fighting. A fact line on one page prints 1461, while the narrative uses 1471. This life keeps 4 May 1471, his place with the Lancastrians, and his death.",
    university: "The prince named with the Lancastrian army at Tewkesbury is Edward, Prince of Wales, son of Henry VI and Margaret of Anjou. Both narratives put him at the battle that Edward IV won. One calls his command nominal and sets Somerset, Wenlock and Devonshire over the divisions. The other names him among the Lancastrian leaders who were killed in the battle or executed afterwards. A single fact line prints 4 May 1461, against 4 May 1471 in the heading of that same page and throughout the other. The life uses 1471. How he died is not a shared sentence: the press of battle, a later execution, or a stabbing after capture all appear. The life therefore says he died, and it does not choose the blow. His part is the heir who stood with Lancaster at Tewkesbury and did not survive the defeat.",
  },
  sources: [
    {
      url: "https://en.wikipedia.org/wiki/Battle_of_Tewkesbury",
      publisher: "Wikipedia",
    },
    {
      url: "https://www.britishbattles.com/wars-of-the-roses/battle-of-tewkesbury/",
      publisher: "British Battles",
    },
  ],
};

const margaretOfAnjou: EraFigure = {
  id: "margaret_of_anjou",
  name: "Margaret of Anjou",
  role: "ruler",
  country: "England",
  allegiance: "Lancaster",
  note: "One account has her land at Weymouth. The other has her sail from France and later enter London as a captive. Both say she was captured after the Yorkist victory.",
  bio: {
    primary: "Queen Margaret of Anjou was with the Lancastrian cause at Tewkesbury, and after Edward IV’s victory on 4 May 1471 she was captured.",
    secondary: "Margaret of Anjou was queen to Henry VI and with the Lancastrian army that Edward IV defeated at Tewkesbury on 4 May 1471. Her son, Edward, Prince of Wales, died there. She was captured after the battle. One page shows that capture in the account of the campaign. The other says the captive queen was beside Edward when he later passed through London. The port where she landed, and the day of the London entry, are not told in both. This life is her place with that army and her capture after the Yorkist victory.",
    university: "Margaret of Anjou is the Lancastrian queen both narratives attach to the Tewkesbury campaign. One has her land at Weymouth after Barnet, gather men, and march with Somerset. The other has her sail from France, hear of Barnet, and stay with the army that Edward IV then beat. A harbour and a night’s lodging appear in a single narrative, so they are not the life. On 4 May 1471 the Yorkists won at Tewkesbury and her son, the Prince of Wales, died. Margaret was taken. One narrative labels the capture itself. The other shows her a captive at Edward’s side in London, without making that procession the only proof. Henry VI’s death in the Tower is a separate end and is not retold as hers. Her part is the queen who stood with the Lancastrian army and was captured after its defeat.",
  },
  sources: [
    {
      url: "https://en.wikipedia.org/wiki/Battle_of_Tewkesbury",
      publisher: "Wikipedia",
    },
    {
      url: "https://www.britishbattles.com/wars-of-the-roses/battle-of-tewkesbury/",
      publisher: "British Battles",
    },
  ],
};

const davidIi: EraFigure = {
  id: "david_ii",
  name: "David II",
  role: "ruler",
  country: "Scotland",
  allegiance: "Scotland",
  note: "One account calls him the son of Robert the Bruce. The other does not. One calls the war the Second War of Scottish Independence. Troop numbers differ. A story that he was found under a bridge is in one account.",
  bio: {
    primary: "On 17 October 1346 King David II led a Scottish army to Durham, was defeated at Neville’s Cross, and was captured.",
    secondary: "David II was king of Scots. He invaded northern England and fought at Neville’s Cross, by Durham, on 17 October 1346. Ralph Neville was among the English commanders, with Henry Percy also named. The English defeated David’s army and captured him. One page calls him the son of Robert the Bruce. The other does not use that parentage in the same sentence. Troop numbers differ. This life is the king who invaded, lost at Durham, and was taken prisoner.",
    university: "The Scottish king at Neville’s Cross is David II. Both narratives date his defeat to 17 October 1346 and place it at Durham, and both say he was captured. One calls the field Neville’s Cross, just west of the city, and the war a second war of independence. The other says Durham in the north of England and calls him, in that telling alone, the son of Robert the Bruce. The numeral and the parentage are therefore not part of the life. Ralph Neville and Henry Percy are the English names the pages share. A story of the king found under a bridge, a long imprisonment, and a ransom belong to single narratives and are omitted. What remains is the king who led the invasion, lost the battle, and passed into English hands.",
  },
  sources: [
    {
      url: "https://en.wikipedia.org/wiki/Battle_of_Neville%27s_Cross",
      publisher: "Wikipedia",
    },
    {
      url: "https://www.britishbattles.com/scottish-war-of-independence/battle-of-nevilles-cross/",
      publisher: "British Battles",
    },
  ],
};

const ralphNeville: EraFigure = {
  id: "ralph_neville",
  name: "Ralph Neville",
  role: "commander",
  country: "England",
  allegiance: "England",
  note: "One account says he led the English army and calls him Lord Neville. The other names him with Henry Percy and the archbishop of York. The archbishop is William Zouche in one account and Walter de la Zouche in the other.",
  bio: {
    primary: "On 17 October 1346 Ralph Neville was an English commander at Neville’s Cross, where David II was defeated and captured.",
    secondary: "Ralph Neville commanded on the English side at Neville’s Cross, near Durham, on 17 October 1346. King David II had invaded with a Scottish army. One page says Neville led the English. The other names him with Henry Percy and the archbishop of York. The archbishop is not given the same personal name on both pages. The English won, and David was captured. This life is Neville’s command in that victory, not a list of every officer beside him.",
    university: "Ralph Neville is the English captain both narratives name at the fight by Durham on 17 October 1346. One narrative says he led the army and calls him Lord Neville. The other sets him with Henry Percy and with an archbishop of York, William in one spelling and Walter in the other, so the archbishop’s name is not fixed and is left out. David II, king of Scots, was defeated and captured. A cross built to mark the day is told once and is not this life. Nor is any total of men, the figures being unlike. Neville’s part is the command he held when the English broke David’s invasion and took the king.",
  },
  sources: [
    {
      url: "https://en.wikipedia.org/wiki/Battle_of_Neville%27s_Cross",
      publisher: "Wikipedia",
    },
    {
      url: "https://www.britishbattles.com/scottish-war-of-independence/battle-of-nevilles-cross/",
      publisher: "British Battles",
    },
  ],
};

const henryPercy: EraFigure = {
  id: "henry_percy",
  name: "Henry Percy",
  role: "commander",
  country: "England",
  allegiance: "England",
  note: "One account calls him Lord Henry Percy. The other says Henry Percy. Both name him with Ralph Neville among the English commanders.",
  bio: {
    primary: "Henry Percy was an English commander at Neville’s Cross on 17 October 1346, when David II was defeated and captured.",
    secondary: "Henry Percy is named with Ralph Neville among the English commanders at Neville’s Cross, by Durham, on 17 October 1346. One page calls him Lord Henry Percy. The other says Henry Percy. David II’s Scottish army was defeated and the king was captured. The archbishop of York is also listed, under personal names that do not match, so he is not part of this life. Percy’s life here is that shared command in the English victory.",
    university: "Both narratives of Neville’s Cross include Henry Percy on the English side with Ralph Neville. One styles him Lord Henry Percy in the list of captains. The other writes Henry Percy beside Neville and the archbishop of York. The battle they describe is 17 October 1346 at Durham, a defeat of King David II and his capture. Percy is not given a separate exploit that both pages tell, so this life does not invent one. It keeps the office they do share: he was one of the English commanders when the invasion failed and the king of Scots was taken. Strengths, the archbishop’s disputed personal name, and any later ransom stay out.",
  },
  sources: [
    {
      url: "https://en.wikipedia.org/wiki/Battle_of_Neville%27s_Cross",
      publisher: "Wikipedia",
    },
    {
      url: "https://www.britishbattles.com/scottish-war-of-independence/battle-of-nevilles-cross/",
      publisher: "British Battles",
    },
  ],
};

const saintLoFormigny1450: EraLine = {
  id: 'saint_lo_formigny_1450',
  name: 'French march from Saint-Lô to Formigny',
  from: '1450-04-14',
  to: '1450-04-15',
  domain: 'land',
  mover: 'France',
  summary: 'Arthur de Richemont, Constable of France, reached Saint-Lô and marched on to Formigny, where the French defeated Sir Thomas Kyriell on 15 April 1450.',
  waypoints: [
    { name: 'Saint-Lô', lat: 49.115808, lng: -1.0909278 },
    { name: 'Formigny', lat: 49.3326678, lng: -0.8925427 },
  ],
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Formigny', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-formigny/', publisher: 'British Battles' },
  ],
};

const saintVaastCrecy1346: EraLine = {
  id: 'saint_vaast_crecy_1346',
  name: 'English chevauchée from Saint-Vaast-la-Hougue to Crécy',
  from: '1346-08-26',
  to: '1346-08-26',
  domain: 'land',
  mover: 'England',
  summary: 'Edward III’s English army landed at Saint-Vaast-la-Hougue, took Caen, and fought at Crécy-en-Ponthieu, where it defeated the French on 26 August 1346.',
  waypoints: [
    { name: 'Saint-Vaast-la-Hougue', lat: 49.5877016, lng: -1.2662184 },
    { name: 'Caen', lat: 49.1813403, lng: -0.3635615 },
    { name: 'Crécy-en-Ponthieu', lat: 50.2521463, lng: 1.8840662 },
  ],
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Cr%C3%A9cy', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-crecy/', publisher: 'British Battles' },
  ],
};

const harfleurAzincourt1415: EraLine = {
  id: 'harfleur_azincourt_1415',
  name: 'English march from Harfleur to Azincourt',
  from: '1415-10-25',
  to: '1415-10-25',
  domain: 'land',
  mover: 'England',
  summary: 'Henry V’s English army marched from Harfleur towards Calais and on 25 October 1415 defeated the French at Azincourt.',
  waypoints: [
    { name: 'Harfleur', lat: 49.5075158, lng: 0.200141 },
    { name: 'Azincourt', lat: 50.4632937, lng: 2.1284519 },
  ],
  sources: [
    { url: 'https://en.wikipedia.org/wiki/Battle_of_Agincourt', publisher: 'Wikipedia' },
    { url: 'https://www.britishbattles.com/one-hundred-years-war/battle-of-agincourt/', publisher: 'British Battles' },
  ],
};

const round4Links: EraLink[] = [
  { lineId: 'saint_lo_formigny_1450', eventId: 'formigny_1450', at: 0 },
  { lineId: 'saint_lo_formigny_1450', eventId: 'formigny_1450', at: 1 },
  { lineId: 'saint_vaast_crecy_1346', eventId: 'crecy_1346', at: 0 },
  { lineId: 'saint_vaast_crecy_1346', eventId: 'crecy_1346', at: 1 },
  { lineId: 'saint_vaast_crecy_1346', eventId: 'crecy_1346', at: 2 },
  { lineId: 'harfleur_azincourt_1415', eventId: 'agincourt_1415', at: 0 },
  { lineId: 'harfleur_azincourt_1415', eventId: 'agincourt_1415', at: 1 },
];

export const LATE_MEDIEVAL_ROUND4_EVENTS: EraEvent[] = [
  nevillesCross1346, barnet1471, tewkesbury1471,
];

export const LATE_MEDIEVAL_ROUND4_FIGURES: EraFigure[] = [
  davidIi, ralphNeville, henryPercy, earlOfWarwick, edwardPrinceOfWales, margaretOfAnjou,
];

const tewkesbury1471Place: EraLine = {
  id: 'tewkesbury_1471_place',
  name: 'Tewkesbury',
  from: '1471-05-04',
  to: '1471-05-04',
  domain: 'land',
  mover: 'England',
  summary: 'On 4 May 1471 Edward IV’s army defeated the Lancastrians at Tewkesbury, and the Prince of Wales died.',
  waypoints: [{ name: 'Tewkesbury', lat: 51.9937857, lng: -2.1549574 }],
  sources: tewkesbury1471.sources,
};

const tewkesbury1471Links: EraLink[] = [
  { lineId: 'tewkesbury_1471_place', eventId: 'tewkesbury_1471', at: 0 },
];

export const LATE_MEDIEVAL_ROUND4_LINES: EraLine[] = [
  saintLoFormigny1450, saintVaastCrecy1346, harfleurAzincourt1415,
  tewkesbury1471Place,
];

export const LATE_MEDIEVAL_ROUND4_LINKS: EraLink[] = [...round4Links, ...tewkesbury1471Links];

export const ankara1402Place: EraLine = {
  id: 'ankara_1402_place',
  name: 'Ankara',
  from: '1402-07',
  to: '1402-07',
  domain: 'land',
  mover: 'Timurid Empire',
  summary: 'In July 1402 Timur’s army defeated the Ottoman force of Bayezid I at Ankara.',
  waypoints: [{ name: 'Ankara', lat: 39.9207759, lng: 32.8540497 }],
  sources: ankara1402.sources,
};

export const ankara1402Links: EraLink[] = [
  { lineId: 'ankara_1402_place', eventId: 'ankara_1402', at: 0 },
];

export const granada1492Place: EraLine = {
  id: 'granada_1492_place',
  name: 'Granada',
  from: '1492-01-02',
  to: '1492-01-02',
  domain: 'land',
  mover: 'Spain',
  summary: 'On 2 January 1492 King Boabdil surrendered Granada to Ferdinand and Isabella.',
  waypoints: [{ name: 'Granada', lat: 37.1734995, lng: -3.5995337 }],
  sources: granada1492.sources,
};

export const granada1492Links: EraLink[] = [
  { lineId: 'granada_1492_place', eventId: 'granada_1492', at: 0 },
];

export const poitiers1356Place: EraLine = {
  id: 'poitiers_1356_place',
  name: 'Poitiers',
  from: '1356-09-19',
  to: '1356-09-19',
  domain: 'land',
  mover: 'England',
  summary: 'On 19 September 1356 the Black Prince’s men defeated King John II’s army near Poitiers.',
  waypoints: [{ name: 'Poitiers', lat: 46.5802596, lng: 0.340196 }],
  sources: poitiers1356.sources,
};

export const poitiers1356Links: EraLink[] = [
  { lineId: 'poitiers_1356_place', eventId: 'poitiers_1356', at: 0 },
];

export const aljubarrota1385Place: EraLine = {
  id: 'aljubarrota_1385_place',
  name: 'Aljubarrota',
  from: '1385-08-14',
  to: '1385-08-14',
  domain: 'land',
  mover: 'Portugal',
  summary: 'On 14 August 1385 the Portuguese defeated King John I of Castile at Aljubarrota.',
  waypoints: [{ name: 'Aljubarrota', lat: 39.5663818, lng: -8.9305256 }],
  sources: aljubarrota1385.sources,
};

export const aljubarrota1385Links: EraLink[] = [
  { lineId: 'aljubarrota_1385_place', eventId: 'aljubarrota_1385', at: 0 },
];
