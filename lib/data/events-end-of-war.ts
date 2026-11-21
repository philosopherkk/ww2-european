// The end of the war against Japan, 6 August to 8 September 1945, and the two
// months that show it. The dates on these cards are the dates the atlas’s map
// data uses for its colour changes, and each one is quoted from the source
// named in the card’s own note. Every card here rests on one source family
// (English Wikipedia) unless the note says otherwise; `audit/handoff-end-of-war-21nov.md`
// and the `end-sources` agent job track the second publishers.
import type { WW2Event } from './events-1938-1940';

export const EVENTS_END_OF_WAR: WW2Event[] = [
  {
    id: 'atomic_bombs_1945',
    date: '1945-08-06',
    precision: 'day',
    title: 'Hiroshima and Nagasaki: two atomic bombs',
    kind: 'battle',
    fronts: ['pacific'],
    countries: ['United States', 'Japan'],
    figures: [],
    mapNote:
      'Pins on Hiroshima and Nagasaki on the Inland Sea. The world layer still shows Japan and Manchukuo as Axis in this month: the colours mark the last months of fighting, not the settlement that followed.',
    note: 'The 6 and 9 August dates, the 509th Composite Group as the delivery unit, and the casualty ranges are from the English Wikipedia article on the bombings, and three publishers outside that article carry the same facts: the Radiation Effects Research Foundation, a joint Japanese–American research body in Hiroshima, prints the same two city ranges — deaths 90,000-166,000 and 60,000-80,000 “within two to four months after the bombings”; the Atomic Heritage Foundation dates the two raids 6 and 9 August 1945 and calls the 509th “the weapon delivery arm of the Manhattan Project”; and the documentary archive Atomic Bomb: Decision opens “On August 6 and 9, 1945, the cities of Hiroshima and Nagasaki were destroyed by the first atomic bombs used in warfare”. The width of the range is the Wikipedia source’s own, not this atlas’s: its casualty table gives Hiroshima 90,000-166,000 killed and Nagasaki 60,000-80,000, and totals them as 150,000-246,000 killed “by end of 1945”.',
    levels: {
      primary: {
        cause:
          'Japan had not accepted the terms demanded at Potsdam, and the allies were planning to invade the home islands.',
        what: 'On 6 and 9 August 1945 the United States detonated atomic bombs over Hiroshima and Nagasaki. Between 150,000 and 246,000 people were killed, most of them civilians.',
        consequence:
          'Japan’s government was divided over what the bombs meant. The war in the Pacific ended within days.',
      },
      secondary: {
        cause:
          'The Potsdam Declaration of 26 July had called for Japan’s unconditional surrender and warned of prompt and utter destruction; the government issued no clear answer.',
        what: 'Both missions were flown by the 509th Composite Group, the delivery unit of the Manhattan Project. The source’s own casualty table gives Hiroshima 90,000-166,000 killed and Nagasaki 60,000-80,000, its civilian and military dead counted in both, and totals them as 150,000-246,000 killed by the end of 1945.',
        consequence:
          'The Soviet Union declared war on Japan and invaded Manchuria on 9 August, the day of the second bombing.',
      },
      university: {
        cause:
          'The choice of targets, the warning leaflets and the demonstration options debated in May and June 1945 are the durable quarrel, alongside the decision to use the weapon at all.',
        what: 'The two attacks are the only use of nuclear weapons in war. The bombing of Hiroshima on 6 August and of Nagasaki on 9 August killed, on the published range, 150,000 to 246,000 people, most of them civilians; the source gives the two cities separately — 90,000-166,000 and 60,000-80,000 — and totals them as killed by the end of 1945.',
        consequence:
          'Historians weigh the bombs against the Soviet entry into the war in explaining acceptance, and the argument over the ethics has never closed. An atlas should keep the range: no single figure is printed by the sources with enough confidence to be drawn as fact.',
      },
    },
  },
  {
    id: 'manchuria_1945',
    date: '1945-08-09',
    precision: 'day',
    title: 'The Soviet Union invades Manchuria, and Manchukuo falls',
    kind: 'invasion',
    fronts: ['china_burma_india'],
    countries: ['Soviet Union', 'Japan', 'China'],
    figures: [],
    mapNote:
      'Manchukuo is drawn as the modern provinces of Liaoning, Jilin and Heilongjiang, coloured Axis until 20 August 1945, when this atlas shows it Soviet. The advance is not drawn as an arrow: the operation is dated 8 August to 2 September 1945.',
    note: 'Dates and the three-front simultaneity are from the English Wikipedia article on the Soviet invasion of Manchuria (“At one minute past midnight Trans-Baikal time on 9 August 1945 … the Soviets commenced their invasion simultaneously on three fronts to the east, west and north of Manchuria”), the Yalta promise from the same article (“the Soviet Union entered World War II’s Pacific Theatre within three months of the end of the war in Europe”), and the 20 August dissolution from the Manchukuo article’s infobox (“Soviet invasion 9 August 1945 · Dissolution 20 August 1945”, succeeded by “Soviet occupation of Manchuria”). The pledge itself is published outside Wikipedia: the State Department’s edition of the Malta conference papers prints “in two or three months after Germany has surrendered and the war in Europe has terminated the Soviet Union shall enter into the war against Japan on the side of the Allies”, so the “three months” on this card sits inside a promise of two or three, and the article’s own “exactly three months” counts from the German instrument taking effect at 00:43 Moscow time on 9 May — three months to the day before the invasion. No page outside Wikipedia has been found for the 00:01 start, the three fronts or the 20 August dissolution, so those three details stay one source family.',
    levels: {
      primary: {
        cause:
          'The Soviet Union had promised the other allies it would join the war against Japan three months after Germany gave in.',
        what: 'On 9 August 1945 the Soviet Union invaded Manchuria at the same moment on three fronts, from the east, the west and the north. The Japanese-backed state of Manchukuo collapsed within days.',
        consequence:
          'Manchuria, northern Korea, southern Sakhalin and the Kuril Islands came under Soviet control, and Japan lost the industrial base it had held since 1931.',
      },
      secondary: {
        cause:
          'The declaration of war followed the Potsdam terms of 26 July, which Japan had not accepted, and came between the bombing of Hiroshima on 6 August and that of Nagasaki on 9 August.',
        what: 'The invasion began at one minute past midnight Trans-Baikal time on 9 August, exactly three months after the German surrender. Its three attacks are named for the areas they took — the Mukden, Harbin–Kirin and Sungari areas — and the Manchukuo state, a Japanese creation of 1932, was dissolved on 20 August.',
        consequence:
          'Japan’s leaders had to face an enemy on the Asian mainland as well as the blockade and the bombing. The operation also fixed the front line from which Korea was divided weeks later.',
      },
      university: {
        cause:
          'The timing is the argument: the invasion and the second bomb fell within hours of each other, and every account of Japanese acceptance weighs one against the other.',
        what: 'The article’s own date field runs 8 August to 2 September 1945, and its location is Manchuria, Inner Mongolia and northern Korea. The three component attacks — the Khingan–Mukden, Harbin–Kirin and Sungari Offensive Operations — are each dated 9 August to 2 September 1945 in the same passage that gives the simultaneous start. Manchukuo’s emperor had reigned until 17 August; the state’s dissolution is given as 20 August.',
        consequence:
          'The campaign’s speed made it easy to understate in Western accounts and to overstate in Soviet ones. Its political results — a divided Korea, and Soviet forces in the industrial north of China — were settled by the fronts of August 1945 rather than by the treaties that followed.',
      },
    },
  },
  {
    id: 'japan_accepts_1945',
    date: '1945-08-15',
    precision: 'day',
    title: 'The broadcast few had heard: Japan accepts the terms',
    kind: 'politics',
    fronts: ['pacific'],
    countries: ['Japan', 'United States', 'United Kingdom', 'China', 'Soviet Union'],
    figures: [],
    mapNote:
      'August 1945 is the last month in which Japan and southern Korea are drawn Japanese-held. Manchukuo has just changed colour, and the northern half of Korea has gone Soviet; two colours change this month and two more follow in September, so the end of the war is visible here as four changes, not one.',
    note: 'The noon broadcast on 15 August, the failed coup of hardliners between 12 and 15 August, the Imperial conference of 9-10 August at which Hirohito broke the deadlock, and the occupation beginning on 28 August are all from the English Wikipedia article Surrender of Japan. The Potsdam terms are published outside Wikipedia: the State Department’s edition of the Potsdam papers prints “The alternative for Japan is prompt and utter destruction”, the phrase this card quotes, and its editors’ footnote to a dispatch of 14 August records the “rescript broadcast at noon, August 15 (Japan time)”, so the hour of the broadcast has a government publisher. No second publisher has been found for the coup or the Imperial conference. Not asserted anywhere on this card, because no fetched page prints it: the dates on which Japan’s acceptance reached the Allies through neutral diplomats.',
    levels: {
      primary: {
        cause:
          'Two atomic bombs, the Soviet invasion of Manchuria, and a government that could not agree left Japan split, not unified.',
        what: 'At noon on 15 August 1945 Japanese listeners heard Emperor Hirohito’s recorded voice announce that Japan had accepted the terms of the Potsdam Declaration.',
        consequence:
          'The fighting stopped. Japan’s formal surrender was signed weeks later, and the occupation of the islands began on 28 August.',
      },
      secondary: {
        cause:
          'The Potsdam terms of 26 July warned of “prompt and utter destruction” if Japan refused, and promised occupation until the powers that had led Japan to war were removed.',
        what: 'Hirohito’s recorded address, the Imperial Rescript on the Termination of the War, was broadcast at 12:00 noon Japan standard time on 15 August, after several days of argument inside the government and a failed coup by hardliners in the army. Asked to break the deadlock in the early hours of 10 August, he said continuing the war “can only mean destruction for the nation”, and that he could not “bear to see [his] innocent people suffer any longer”.',
        consequence:
          'This is the date most commonly called Victory over Japan Day, although the instrument of surrender was signed only on 2 September, so the end of the war has two anniversaries.',
      },
      university: {
        cause:
          'Whether the bombs or the Soviet entry decided the date, and whether the emperor’s intervention was decisive or a cover for a government that had already broken, remain the live questions in the literature.',
        what: 'The 15 August broadcast is the end of the war for Japan and the most contested of its dates. The Supreme Council reached no consensus, and at an Imperial conference in the early hours of 10 August the Emperor was asked to decide; hardliners in the army then attempted a coup between 12 and 15 August and failed; the rescript was recorded and broadcast at noon on 15 August Japan time, and occupation began on 28 August under the Supreme Commander for the Allied Powers. The formal instrument followed on 2 September and took effect at 09:25 Japan time that day.',
        consequence:
          'Two anniversaries, 15 August and 2 September, carry different weights: the first is the end of the killing for the people who lived through it, the second is the date of the document. An atlas whose last month is August 1945 is implicitly on the side of the first, and should say so; this one now runs to September, and can show both.',
      },
    },
  },
  {
    id: 'surrender_2_september_1945',
    date: '1945-09-02',
    precision: 'day',
    title: 'The instrument of surrender is signed, and the war ends',
    kind: 'politics',
    fronts: ['pacific'],
    countries: ['Japan', 'United States', 'United Kingdom', 'China', 'Soviet Union', 'Australia'],
    figures: [],
    mapNote:
      'Japan changes colour this month, from Axis to Allied occupation, on the day the instrument took effect. Korea south of the 38th parallel follows on 8 September. Southern Sakhalin and the Kuril Islands, taken in August, have no outline in this layer.',
    note: 'The signing after 09:00 Japan standard time, its effect at 09:25 on 2 September 1945, and the list of signatory states are from the English Wikipedia article Japanese Instrument of Surrender; the end of the state of war on 28 April 1952 is from Surrender of Japan. Outside Wikipedia, the State Department’s edition of the 1945 Far East papers prints “The instrument of surrender was signed aboard the U.S.S. Missouri, Tokyo Bay, September 2, 1945”, and its archived Milestones essay says the Treaty of San Francisco “ended the state of war between Japan and 47 of the Allies”. Neither gives the 09:25 moment or the effective date of 28 April 1952, so those two stay one source family, and the twenty-minute ceremony detail is omitted because no fetched page prints it.',
    levels: {
      primary: {
        cause:
          'Japan’s government had accepted the terms on 15 August, but the document that ended the war still had to be signed, and the fleet that received the signature lay in Tokyo Bay.',
        what: 'On 2 September 1945 the instrument of surrender was signed aboard USS Missouri in Tokyo Bay just after 09:00 Japan time, and took effect at 09:25. Japan signed with nine allied states.',
        consequence:
          'The fighting of the Second World War was over. The occupation of Japan was already under way, and the atlas’s last month has one fewer belligerent.',
      },
      secondary: {
        cause:
          'A coup by officers who refused to accept surrender had failed only in the middle of August, and Soviet troops were still landing in northern Korea when the fleet arrived.',
        what: 'Japan signed with the United States, China, the United Kingdom and the Soviet Union, and then with Australia, Canada, France, the Netherlands and New Zealand. The operations in Manchuria, northern Korea and the Kuril Islands run to that same day; southern Sakhalin had fallen on 25 August.',
        consequence:
          'Two dates carry the end: 15 August, the broadcast, and 2 September, the document. The state of war had not ended — between most of the Allies and Japan it ended only when the Treaty of San Francisco took effect on 28 April 1952.',
      },
      university: {
        cause:
          'Venue, order of signatures and the Soviet insistence on a second signing at Karlshorst for Germany in May belong to the same quarrel about who had defeated whom, which the ceremonies were meant to settle.',
        what: 'The signing on 2 September closed a fortnight in which the war ended four times over: the bombing of Nagasaki and the invasion of Manchuria on 9 August, the dissolution of Manchukuo on the 20th, the broadcast of 15 August, and the instrument, effective at 09:25 Japan time on 2 September. The operations in Manchuria, northern Korea and the Kuril Islands run to that same date, so the map’s last month shows the fronts of the final battle and the surrender at once; southern Sakhalin had already fallen, on 25 August. Occupation had begun on 28 August, before the signing.',
        consequence:
          'The date is a hinge in this atlas’s own design: it is why the timeline runs to September 1945, and why the last month draws an occupied country rather than a battlefield. The settlements that followed — the Paris treaties of 1947, San Francisco in 1952, the Soviet–Japanese declaration of 1956, the German final settlement of 1990 — lie outside the range of these maps, and the reader should treat September 1945 as the end of the fighting, not of the war’s legal consequences.',
      },
    },
  },
  {
    id: 'korea_divided_1945',
    date: '1945-09-08',
    precision: 'day',
    title: 'The 38th parallel: Korea is occupied in two halves',
    kind: 'politics',
    fronts: ['pacific'],
    countries: ['Korea', 'United States', 'Soviet Union'],
    figures: [],
    mapNote:
      'Korea is drawn as two halves because the modern outline is. The north turns Soviet on 24 August 1945 and the south is shown under Allied occupation from 8 September; between those dates the south keeps the colour of its Japanese garrison.',
    note: 'The 10 August proposal, General Order No. 1 of 17 August, Wonsan on 16 August, the northern cities by 24 August and the entry into Pyongyang on 24 August are from the English Wikipedia article Division of Korea; the American landing on 8 September 1945 and the military government from 9 September are from the article on the United States Army Military Government in Korea — one source family for those dates. Outside Wikipedia, the State Department’s archived Milestones essay records that “two U.S. army colonels (one of whom, Dean Rusk, would later become Secretary of State) proposed that the Soviet Union take responsibility for accepting the surrender of Japanese troops in the part of the Korean peninsula north of the 38th parallel, whereas U.S. troops would receive the surrender south of that line”, and The Canadian Encyclopedia has Soviet troops occupying “the country north of the 38th parallel, with the Americans to the south”.',
    levels: {
      primary: {
        cause:
          'Japan’s surrender came before anyone had planned what would replace its rule in Korea, which had been a Japanese colony since 1910.',
        what: 'Two American officers drew a line across Korea on 10 August 1945 to mark where the Soviet and American advances should meet. It became the dividing line of the surrender instructions on 17 August.',
        consequence:
          'Korea was occupied by two armies that had never fought each other, and the two halves have been separate ever since.',
      },
      secondary: {
        cause:
          'Washington feared the Soviets would occupy the whole peninsula, and the Soviets accepted the proposal of a division at once.',
        what: 'Soviet forces entered northern Korea on 10 August, began amphibious landings by 14 August and took Wonsan on the 16th, and most of the northern cities were in their hands by 24 August, the day they entered Pyongyang. In the south, Japanese administration ran on until American troops came ashore on 8 September 1945, three weeks after the broadcast; the American military government began the next day.',
        consequence:
          'Neither occupation had been agreed by Koreans, and the division was meant to be temporary: the Moscow Conference of Foreign Ministers in December 1945 agreed a five-year, four-power trusteeship in the lead-up to independence.',
      },
      university: {
        cause:
          'The line was drawn for the convenience of two general staffs, by two young officers working from a National Geographic map with no notice to prepare, and no experts on Korea were consulted.',
        what: 'Korea is the clearest case in this atlas of a border made by a surrender rather than a settlement. The dividing line was proposed on 10 August 1945 and written into General Order No. 1, approved on 17 August; Soviet troops took Wonsan on 16 August and most northern cities by 24 August; American troops landed on 8 September and their military government functioned from 9 September. The line was chosen because it divided the country approximately in half and put Seoul in the American zone. By 1948 two Korean states had been proclaimed on the parallel two officers drew on a map.',
        consequence:
          'The three-week gap is worth looking at, because it is the map admitting what the documents hide: the surrender stopped the fighting, but it took weeks for any authority to arrive. A Korean committee had already met in Seoul in mid-August, the last Japanese governor-general was offering Koreans a share in the hand-over of power, and the public did not learn there was a dividing line until the Soviets reached Pyongyang.',
      },
    },
  },
];
