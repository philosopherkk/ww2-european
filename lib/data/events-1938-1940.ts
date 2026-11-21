// Historical events of the European theatre, 1938 to 1940 (plus the 1943 exposure of Katyn).
// Each event is written at three reading levels: primary (age ~7-11),
// secondary (~12-16), university. See lib/data/sources.ts for references.

export type Level = 'primary' | 'secondary' | 'university';

export type Front =
  | 'western'
  | 'eastern'
  | 'balkans'
  | 'mediterranean'
  | 'home'
  | 'arctic'
  | 'politics'
  | 'atlantic'
  | 'air_war';

export type Kind =
  | 'battle'
  | 'politics'
  | 'invasion'
  | 'war_crime'
  | 'conference'
  | 'liberation'
  | 'home_front'
  | 'resistance'
  | 'evacuation'
  | 'alliance';

export interface LevelText {
  cause: string;
  what: string;
  consequence: string;
}

export interface WW2Event {
  id: string;
  /** ISO date. For month-precision events the day is the best-documented day. */
  date: string;
  precision: 'day' | 'month';
  title: string;
  kind: Kind;
  fronts: Front[];
  countries: string[];
  levels: Record<Level, LevelText>;
  figures?: string[];
  /** Figures/scholarly note, most useful at university level. */
  note?: string;
  /** Explains what the marker sits on, for cards fought at sea, in the air or
   *  behind the front, where the map has nothing drawn under the pin. */
  mapNote?: string;
}

export const EVENTS: WW2Event[] = [
  {
    id: 'anschluss',
    date: '1938-03-12',
    precision: 'day',
    title: 'Anschluss: Germany annexes Austria',
    kind: 'politics',
    fronts: ['politics'],
    countries: ['Germany', 'Austria'],
    figures: ['hitler', 'schuschnigg'],
    note: 'A plebiscite on 10 April 1938 reported 99.7% approval under conditions of open intimidation; the "independent Austria" clause of the 1919 treaties was thereby destroyed.',
    levels: {
      primary: {
        cause: 'Hitler was born in Austria and wanted German-speaking countries to be one country.',
        what: 'German troops marched into Austria and it was joined to Germany.',
        consequence: 'Austria stopped existing as its own country.',
      },
      secondary: {
        cause: 'Hitler wanted to unite all German speakers in one state, which the Treaty of Versailles had forbidden in 1919.',
        what: 'On 12 March 1938 German troops crossed the border while Austrian Nazis seized key buildings. Chancellor Schuschnigg was forced to resign and many crowds welcomed the soldiers.',
        consequence: 'Austria became a province of Germany, gaining Germany 7 million more people and its oil, iron and gold reserves.',
      },
      university: {
        cause: 'Long-standing Anschluss sentiment among German-Austrians, Nazi subversion since 1933, and the weakening of the Versailles order after the Anglo-French failure over Ethiopia and the Rhineland remilitarisation (March 1936).',
        what: 'After an ultimatum forced Schuschnigg to appoint Seyss-Inquart as interior minister, German troops entered on 12 March "to prevent chaos". A rigged plebiscite on 10 April returned 99.7%.',
        consequence: 'Germany encircled Czechoslovakia on three sides, acquired Austrian foreign-exchange reserves and the Zistersdorf oil fields of the Vienna Basin, and demonstrated that Britain and France would not use force — a decisive input into Czechoslovakia’s capitulation at Munich.',
      },
    },
  },
  {
    id: 'munich',
    date: '1938-09-30',
    precision: 'day',
    title: 'Munich Agreement: the Sudetenland is handed to Germany',
    kind: 'conference',
    fronts: ['politics'],
    countries: ['Germany', 'Czechoslovakia', 'United Kingdom', 'France'],
    figures: ['chamberlain', 'hitler', 'daladier', 'mussolini'],
    note: 'Czechoslovakia had a defensive alliance with France and an understanding with the USSR, neither of which was honoured. It was not invited to the conference.',
    levels: {
      primary: {
        cause: 'Hitler wanted the German-speaking part of Czechoslovakia, called the Sudetenland.',
        what: 'Leaders of Britain, France, Italy and Germany agreed to let Germany take that land. Czechoslovakia was not asked.',
        consequence: 'Britain and France hoped for peace, but Germany took the whole country six months later.',
      },
      secondary: {
        cause: 'Hitler pressed demands for self-determination for the 3 million ethnic Germans in the Sudetenland, while Chamberlain hoped concession would prevent a war nobody felt ready to fight.',
        what: 'On 29-30 September Chamberlain, Daladier, Mussolini and Hitler signed an agreement transferring the Sudetenland to Germany by 10 October. Chamberlain returned to London waving paper and claiming "peace for our time".',
        consequence: 'Czechoslovakia lost its mountain fortifications and most of its heavy industry, becoming indefensible. The failure of appeasement convinced Poland and Romania to refuse German demands, delaying rather than preventing war.',
      },
      university: {
        cause: 'Appeasement rested on military unpreparedness (RAF Fighter Command was not ready before 1939-40), public pacifism, and a genuine belief among elites that some Versailles revision was legitimate.',
        what: 'The four-power conference excluded Czechoslovakia and the USSR. Poland had already secured Teschen (note of 21 September, occupation on 2 October) and Hungary pressed for a Hungarian share.',
        consequence: 'Strategically Munich was a disaster for the Western powers: they forfeited a 35-division Czechoslovak army and the Skoda works. Hitler, by contrast, read Western caution as weakness, and in October 1938 ordered plans for the "destruction of the remainder of Czechoslovakia".',
      },
    },
  },
  {
    id: 'first_vienna_award',
    date: '1938-11-02',
    precision: 'day',
    title: 'First Vienna Award: Hungary receives southern Slovakia',
    kind: 'politics',
    fronts: ['politics'],
    countries: ['Hungary', 'Czechoslovakia'],
    figures: ['horthy'],
    levels: {
      primary: {
        cause: 'Hungary had lost two-thirds of its land in 1920 and wanted Hungarian-speaking areas back.',
        what: 'Germany and Italy told Czechoslovakia to give southern Slovakia to Hungary.',
        consequence: 'Hungary got back land and people, and became more dependent on Germany.',
      },
      secondary: {
        cause: 'The Treaty of Trianon (1920) left over 3 million Hungarians outside Hungary, making revision a central aim of the Horthy regime.',
        what: 'Germany and Italy imposed an arbitration in Vienna that transferred southern Slovakia and southern Carpathian Ruthenia, about 11,900 km2 and roughly 1 million people, to Hungary.',
        consequence: 'Czechoslovakia lost further territory and its rail links to Romania and Yugoslavia. Hungary’s reward pushed it into the German orbit without a formal alliance.',
      },
      university: {
        cause: 'German and Italian mediation served to dismantle Czechoslovakia from within while rewarding the revisionist states, splitting the Little Entente.',
        what: 'The award was imposed after failed Italo-German negotiations in Venice, exploiting Prague’s isolation after Munich.',
        consequence: 'It established arbitration as the mechanism for the destruction of the successor states and set the precedent for the Second Vienna Award (August 1940), while making Hungary’s post-1945 borders a permanent grievance.',
      },
    },
  },
  {
    id: 'kristallnacht',
    date: '1938-11-09',
    precision: 'day',
    title: 'Kristallnacht: the November Pogrom',
    kind: 'war_crime',
    fronts: ['home', 'politics'],
    countries: ['Germany', 'Austria'],
    figures: ['hitler', 'goebbels', 'goering'],
    note: 'At least 91 Jews were murdered, some 30,000 men were sent to Dachau, Buchenwald and Sachsenhausen, and 7,500 businesses were destroyed. The regime also fined the Jewish community one billion marks.',
    levels: {
      primary: {
        cause: 'The Nazis hated Jewish people and blamed them for things that went wrong in Germany.',
        what: 'In one night in November, Nazis smashed Jewish shops, homes and synagogues all over Germany and Austria.',
        consequence: 'Thousands of Jewish men were sent to concentration camps and many families fled the country.',
      },
      secondary: {
        cause: 'The shooting of a German diplomat in Paris by a Jewish teenager on 7 November gave Goebbels a pretext for long-planned violence.',
        what: 'Over two nights SA men and civilians burned or wrecked nearly 1,000 synagogues, some 1,400 counting prayer rooms, ransacked 7,500 shops and homes, and killed at least 91 Jews. Around 30,000 Jewish men were arrested and sent to camps.',
        consequence: 'It marked a turn from discrimination to open, coordinated violence and mass incarceration, and it convinced most remaining German Jews that they had to emigrate if they could.',
      },
      university: {
        cause: 'The pogrom served several purposes: consolidating the regime after the Sudeten crisis, satisfying radical party activists, and financing Aryanisation through the billion-mark "penalty fine" and the seizure of assets.',
        what: 'Historians debate whether Hitler initiated or merely authorised it, but Goebbels’s diaries and the contemporaneous US and British embassy reports establish central coordination.',
        consequence: 'Kristallnacht radicalised emigration policy, prompted the Evian-following intensification of refugee diplomacy, and is generally treated by functionalist historians as the decisive step toward the organised ghettoisation and deportation programme of 1939-41.',
      },
    },
  },
  {
    id: 'german_occupation_bohemia',
    date: '1939-03-15',
    precision: 'day',
    title: 'Germany occupies the Czech lands; Slovakia becomes a puppet state',
    kind: 'invasion',
    fronts: ['politics', 'eastern'],
    countries: ['Germany', 'Czechoslovakia', 'Slovakia', 'Hungary'],
    figures: ['hitler', 'hacha', 'tiso'],
    levels: {
      primary: {
        cause: 'Six months after Munich, Hitler broke his promise and took the rest of Czechoslovakia.',
        what: 'German troops entered Prague. Slovakia was made a separate state allied to Germany.',
        consequence: 'People in Britain and France realised that Hitler could not be trusted and began preparing seriously for war.',
      },
      secondary: {
        cause: 'Hitler exploited Slovak separatism and a Hungarian ultimatum to finish off the rump state, summoning President Hacha to Berlin and threatening to bomb Prague.',
        what: 'On 15 March German troops occupied Prague, and on the 16th Hitler proclaimed the "Protectorate of Bohemia and Moravia" from Prague Castle, while Tiso’s Slovak state became a German client and Hungary took Carpathian Ruthenia.',
        consequence: 'The breach of Munich ended appeasement. Britain guaranteed Poland on 30 March and France followed on 19 May, beginning the alliance system of 1939; France’s earlier treaty with Prague had been voided at Munich and was not honoured.',
      },
      university: {
        cause: 'Economic pressure was a central motive: Hermann Goering’s Four Year Plan needed Skoda and the Czech industrial base, which was placed under direct Reich control.',
        what: 'The Protectorate was administered by Reichsprotektor von Neurath under a nominal Czech government; Slovak independence was formalised on 14 March under German "protection".',
        consequence: 'Germany gained roughly a third of its pre-war machine-tool capacity and a large arms stockpile, which fed the 1939-40 campaigns. The event is usually taken as the point at which appeasement collapsed into containment.',
      },
    },
  },
  {
    id: 'memel',
    date: '1939-03-23',
    precision: 'day',
    title: 'Germany takes the Memel (Klaipeda) region from Lithuania',
    kind: 'politics',
    fronts: ['politics'],
    countries: ['Germany', 'Lithuania'],
    levels: {
      primary: {
        cause: 'The port of Memel had a mostly German-speaking population and Germany wanted it back.',
        what: 'Germany sent an ultimatum and Lithuania had to hand over the region.',
        consequence: 'Germany gained a naval base on the Baltic, close to the port of Gdynia in Poland.',
      },
      secondary: {
        cause: 'Since 1923 Lithuania had controlled the territory, which Germany had lost in 1919; after Prague fell, Lithuania could expect no help.',
        what: 'A German ultimatum on 22 March forced cession; Hitler sailed into the port the next day.',
        consequence: 'Germany now threatened Poland from the north-west and could base warships and aircraft directly opposite the Polish coast.',
      },
      university: {
        cause: 'Seizure of the Klaipeda region completed the revision of the eastern frontier set by the Treaty of Versailles and gave the Kriegsmarine ice-free Baltic ports that mattered to the planning of Operation Weserübung.',
        what: 'The annexation followed the establishment of the Protectorate by eight days, demonstrating the accelerating tempo of German expansion.',
        consequence: 'It sharpened Polish refusal to concede extraterritorial transit or return of the territory, and it became part of the German forward line for the 1941 campaign against the USSR.',
      },
    },
  },
  {
    id: 'molotov_ribbentrop',
    date: '1939-08-23',
    precision: 'day',
    title: 'Nazi-Soviet Non-Aggression Pact and its secret protocols',
    kind: 'politics',
    fronts: ['politics', 'eastern'],
    countries: ['Germany', 'Soviet Union', 'Poland'],
    figures: ['stalin', 'hitler', 'molotov', 'ribbentrop'],
    note: 'The secret protocol divided Poland, Finland, Estonia, Latvia and Bessarabia into German and Soviet "spheres of interest". A boundary and population-transfer agreement followed on 28 September 1939.',
    levels: {
      primary: {
        cause: 'Germany and the Soviet Union had been enemies, but both wanted time and land.',
        what: 'They signed a treaty promising not to attack each other, and secretly agreed to split Poland and the Baltic states between them.',
        consequence: 'Germany could attack Poland without fighting the Soviet Union, and the war began eleven days later.',
      },
      secondary: {
        cause: 'Britain and France had failed to reach an alliance with Stalin in August, and Stalin wanted to buy time and push the Soviet border westward. Hitler wanted to avoid a two-front war in 1939.',
        what: 'Ribbentrop and Molotov signed a ten-year non-aggression pact in Moscow, with a secret protocol splitting eastern Europe into German and Soviet spheres.',
        consequence: 'Britain and Poland had to face Germany alone. On 1 September Germany invaded Poland; on 17 September the USSR invaded from the east and both powers carved up the country.',
      },
      university: {
        cause: 'The pact was the culmination of a Soviet reorientation after Litvinov’s dismissal (3 May 1939), and of German commercial diplomacy that outbid the Anglo-French military mission.',
        what: 'Beyond the spheres clause, a secret addendum was modified in September 1939 to move Lithuania into the Soviet sphere in exchange for more Polish territory for Germany.',
        consequence: 'It gave the USSR twenty-two months of preparation, territorial depth of 200-300 km and some 22 to 23 million new subjects, while enabling the German-Soviet economic agreement that supplied the Reich with oil and grain through 1940-41 — and it discredited communist parties worldwide.',
      },
    },
  },
  {
    id: 'anglo_polish_alliance_1939',
    date: '1939-08-25',
    precision: 'day',
    title: 'Britain and Poland sign an alliance — and the invasion date slips by a week',
    kind: 'alliance',
    fronts: ['politics'],
    countries: ['Poland', 'United Kingdom', 'Germany'],
    figures: ['hitler'],
    note: 'The agreement of 25 August replaced the unilateral guarantee Britain had given on 30 March 1939, which had been extended to Greece and Romania on 13 April after the invasion of Albania. It promised mutual military assistance if either party were attacked by “a European power” — a form of words written with Germany in mind which deliberately did not name it. The German attack was due to start at four in the morning on 26 August. A German sabotage group that had not received the order to stand down struck the Mosty rail junction and the Jablunkov Pass in Silesia during the night of 25-26 August, and was repelled by Polish troops on the morning of the 26th; the German side described the whole affair as an incident “caused by an insane individual”. A day later Hitler was still trying to keep Britain out, pledging that Wehrmacht forces could be placed at the disposal of the British Empire.',
    mapNote: 'Look at the frontier drawn for April 1939: Danzig appears there as a polity of its own, the corridor and Katowice as Polish. By the snapshot of October 1939 Danzig and Bydgoszcz are inside Germany and Warsaw lies in the General Government — because the alliance did not hold.',
    levels: {
      primary: {
        cause: 'In the spring of 1939 Britain had promised to help Poland if Poland’s independence was threatened. After Germany and the Soviet Union agreed to divide eastern Europe between them, Britain and Poland turned that promise into a treaty both had to keep.',
        what: 'On 25 August 1939 Britain and Poland signed an agreement for mutual assistance: each would come to the other’s aid if either were attacked by a European power. The German invasion, due to start the next morning, was put back by a week.',
        consequence: 'Germany attacked Poland on 1 September, and Britain and France declared war two days later. This treaty is the reason the war in Europe was not a war of Poland and Germany alone.',
      },
      secondary: {
        cause: 'Britain’s guarantee of 30 March 1939 had been a one-sided promise, and Poland had little faith in it after the Western powers and the Soviet Union failed to agree a joint plan in Moscow that summer; Britain had refused to let Soviet troops enter Poland, which left no military plan that could work. Two days after the Nazi-Soviet pact, London and Warsaw replaced the guarantee with a treaty of mutual assistance, and the staff talks it required began at once.',
        what: 'The agreement bound each state to give military aid if the other were attacked by a European power, and a supplementary protocol worked out how. On the same day Hitler moved the invasion from 26 August to 1 September, having seen the British commitment and hints from London and Warsaw that Danzig might be negotiated. A German sabotage unit that had not been told to stop attacked the Mosty rail junction in Silesia on 26 August and was driven off by Polish troops.',
        consequence: 'The invasion went in a week later, along a frontier every map had already drawn, and the treaty did what it said: Britain and France were at war with Germany on 3 September. What it left unanswered was the question that mattered in 1939 and in 1944 — what help could physically arrive in Poland, and from which direction.',
      },
      university: {
        cause: 'The treaty sits in the argument about the guarantees of 1939: was Britain building a containment system it could not sustain, or making a commitment it never had the means to honour? The documentary record for August 1939 is unkind to the first reading. Britain did not answer the Soviet proposal of a joint defensive move on Germany, and Poland distrusted a guarantee with no army; the treaty fixed a political obligation while the operational one had already been refused by both sides in the Moscow talks.',
        what: 'The date matters more for German decisions than for British ones. The invasion directive had set four in the morning on 26 August; the British treaty, together with signals from London and Warsaw that Danzig could be settled by negotiation, produced a postponement of a week and an appeal on 26 August in which Hitler offered to place Wehrmacht forces at the disposal of the Empire. The Mosty sabotage attack, carried out by a unit that had not been recalled, shows the machinery of the original date still moving without orders. Polish planning assumed pressure in the west, not relief from the east.',
        consequence: 'Two conclusions follow. The guarantee did not deter, and the postponement shows Hitler reacting to Britain while assuming it would not fight — an assumption that made the invasion possible and the war general. The military supplementary protocol, negotiated too late to move an army, is the documentary basis for the later argument that Poland in 1939 was not betrayed but abandoned for reasons already visible in August, when the Red Army’s participation had been refused by everyone who might have wanted it.',
      },
    },
  },
  {
    id: 'invasion_poland',
    date: '1939-09-01',
    precision: 'day',
    title: 'Germany invades Poland',
    kind: 'invasion',
    fronts: ['eastern', 'western'],
    countries: ['Germany', 'Poland'],
    figures: ['hitler', 'rundstedt'],
    note: 'Germany committed about 1.5 million men, 2,000 tanks and 2,000 aircraft; Poland fielded roughly 1 million mobilised with almost no armoured counterpart. The Gleiwitz false-flag raid on 31 August provided the propaganda pretext.',
    levels: {
      primary: {
        cause: 'Hitler wanted Polish land and the port of Danzig, and he had secretly agreed with Stalin to divide Poland.',
        what: 'German armies, planes and warships attacked Poland from the west, north and south on 1 September 1939.',
        consequence: 'Britain and France declared war on Germany two days later, starting the Second World War.',
      },
      secondary: {
        cause: 'After Poland refused demands over Danzig and the Polish Corridor, Hitler used a staged Polish attack on a German radio station as a pretext.',
        what: 'Two German army groups attacked on a front of some 1,600 km. Fast armoured spearheads raced ahead while the Luftwaffe destroyed airfields, railways and roads.',
        consequence: 'Warsaw was surrounded by mid-September and surrendered on 28 September. Britain and France declared war on 3 September but did not attack in the west.',
      },
      university: {
        cause: 'The campaign tested combined-arms operational methods developed since 1935; the role of Guderian and the Reichswehr’s earlier co-operation with the Red Army at Kazan shaped German armour doctrine.',
        what: 'Wehrmacht losses were heavier than propaganda admitted (about 11,000 dead, 30,000 wounded, 600 tanks damaged or destroyed) and Polish field units fought effectively in several local counter-attacks, most seriously the Bzura counter-offensive of 9-22 September.',
        consequence: 'The campaign produced the myth of an unstoppable Blitzkrieg; in reality, most German divisions still depended on horse-drawn logistics. Soviet intervention on 17 September made Polish defeat irreversible and established the German-Soviet frontier that lasted until 1941.',
      },
    },
  },
  {
    id: 'declaration_of_war',
    date: '1939-09-03',
    precision: 'day',
    title: 'Britain and France declare war on Germany',
    kind: 'politics',
    fronts: ['politics', 'home'],
    countries: ['United Kingdom', 'France', 'Germany', 'Poland'],
    figures: ['chamberlain', 'daladier'],
    levels: {
      primary: {
        cause: 'Britain and France had promised to protect Poland.',
        what: 'When Germany did not withdraw its armies, Britain and France declared war on 3 September 1939.',
        consequence: 'The war that millions wanted to avoid had begun, but for months almost nothing happened on the Western Front.',
      },
      secondary: {
        cause: 'The Anglo-Polish treaty of 25 August 1939 obliged Britain to assist Poland if it were attacked; Hitler gambled that the Western powers would not fight.',
        what: 'Neville Chamberlain broadcast the news of the British declaration at 11 a.m.; France followed later the same day after its own ultimatum expired.',
        consequence: 'The French did launch a short probe into the Saar on 7 September but withdrew behind the Maginot Line on 4 October, beginning the "Phoney War" during which Germany finished off Poland.',
      },
      university: {
        cause: 'The declaration rested on a strategic calculation that a long war of economic strangling — naval blockade plus aerial bombing of German industry — would force collapse, an assumption that shaped French and British planning to 1940.',
        what: 'Britain and France declared war on 3 September, Australia and New Zealand the same day, South Africa on 4 September and Canada on 10 September, each dominion exercising the treaty power it had gained under the Statute of Westminster (1931); the United States, Italy and Japan remained neutral.',
        consequence: 'The failure to act in the west in September 1939, while the Luftwaffe and the bulk of the German field army were committed in Poland, is the most contested strategic "missed opportunity" of the war.',
      },
    },
  },
  {
    id: 'soviet_invasion_poland',
    date: '1939-09-17',
    precision: 'day',
    title: 'The Soviet Union invades eastern Poland',
    kind: 'invasion',
    fronts: ['eastern'],
    countries: ['Soviet Union', 'Poland'],
    figures: ['stalin', 'molotov'],
    note: 'The Soviet order of battle amounted to some 466,000 committed troops. Polish border units were ordered not to resist except in cases of attack; the government evacuated to Romania on 17-18 September.',
    levels: {
      primary: {
        cause: 'Stalin had secretly promised Hitler a share of Poland in August.',
        what: 'Soviet armies crossed into eastern Poland, saying the Polish state had collapsed.',
        consequence: 'Poland was divided between Germany and the Soviet Union.',
      },
      secondary: {
        cause: 'The secret protocol of the Nazi-Soviet pact assigned western Ukraine and western Belarus to a Soviet sphere.',
        what: 'On 17 September Molotov told the Polish ambassador that the Polish government had ceased to exist and that the Red Army would "protect" the Ukrainian and Belarusian population.',
        consequence: 'About 190,000 Polish soldiers were interned by the USSR; tens of thousands of officers, police and intelligentsia were later murdered, most notoriously at Katyn in April-May 1940.',
      },
      university: {
        cause: 'Soviet policy combined opportunistic territorial revision with genuine security motives: creating a demographic and buffer zone against Germany.',
        what: 'Annexation was legitimised by rigged elections of "Popular Assemblies" in October, followed by incorporation into the Ukrainian and Byelorussian SSRs and a mass programme of deportations to Central Asia and the Arctic between February 1940 and June 1941.',
        consequence: 'The 1939 frontier became the basis of the post-1945 Poland, with the 1944 Polish-Soviet agreement confirming the Curzon Line, and Katyn poisoned Polish-Soviet relations until 1990.',
      },
    },
  },
  {
    id: 'katyn',
    // The shooting order dates from March 1940; the event dated here is the
    // German announcement of the graves on 13 April 1943.
    date: '1943-04-13',
    precision: 'day',
    title: 'Katyn forest massacre exposed',
    kind: 'war_crime',
    fronts: ['eastern', 'politics'],
    countries: ['Soviet Union', 'Poland'],
    figures: ['stalin', 'beria'],
    note: 'NKVD records show 21,768 Polish citizens shot in April-May 1940 on Stalin’s signature; 4,421 of them at Katyn, taken from the Kozelsk camp. The USSR blamed Germany until it admitted responsibility in April 1990.',
    levels: {
      primary: {
        cause: 'The Soviet Union wanted to get rid of Polish army officers and leaders it saw as enemies.',
        what: 'In a forest at Katyn, the Soviets secretly killed thousands of Polish prisoners. Germany announced the graves in 1943.',
        consequence: 'Poland and the Soviet Union stopped co-operating, and the truth was hidden for fifty years.',
      },
      secondary: {
        cause: 'After occupying eastern Poland in 1939, the NKVD held tens of thousands of Polish prisoners of war. Stalin and Beria approved their execution in March 1940.',
        what: 'German forces found the graves in April 1943 and publicised them. The Soviet Union broke off diplomatic relations with the Polish government-in-exile, claiming the Nazis had done it.',
        consequence: 'Polish postwar communist governments were imposed by Moscow, so Katyn could not be openly discussed in Poland until 1989-90.',
      },
      university: {
        cause: 'The killing was a deliberate act of social decapitation targeting the reserve officer corps, police, teachers and clergy, consistent with the concurrent deportations of spring 1940.',
        what: 'Executions were carried out in the Kalinin, Kharkov and Bykivnia sites as well as Katyn, by NKVD teams shooting prisoners in the back of the head.',
        consequence: 'The cover-up became a central instrument of Cold War legitimation in the Polish People’s Republic, and its admission in 1990 was a key test case for post-communist truth commissions; Russian courts have refused to classify it as genocide.',
      },
    },
  },
  {
    id: 'winter_war',
    date: '1939-11-30',
    precision: 'day',
    title: 'Soviet Union attacks Finland (Winter War)',
    kind: 'invasion',
    fronts: ['eastern', 'arctic'],
    countries: ['Soviet Union', 'Finland'],
    figures: ['stalin', 'mannerheim'],
    note: 'The USSR committed about 450,000 men in November 1939 against a Finnish field army of roughly 330,000. Soviet losses were around 126,000 dead and missing, Finnish about 26,700.',
    levels: {
      primary: {
        cause: 'The Soviet Union wanted more land near its border with Finland, close to the city of Leningrad.',
        what: 'The huge Soviet army attacked Finland, but the small Finnish army fought back hard in the snow and forest.',
        consequence: 'Finland lost some land but stayed free, and other countries saw how weak the Soviet army was.',
      },
      secondary: {
        cause: 'After using the pact with Germany to take the Baltic states, Stalin demanded Finnish islands, the Karelian isthmus and a naval base, claiming Leningrad was too exposed.',
        what: 'When Finland refused, the USSR invaded on 30 November. Finnish troops used skis and knew the forests, inflicting terrible losses on Soviet columns confined to roads.',
        consequence: 'The March 1940 Treaty of Moscow cost Finland 11% of its area and 20% of its industry but preserved independence. The poor Soviet performance convinced Hitler the Red Army would collapse quickly.',
      },
      university: {
        cause: 'Soviet operational failures reflected the aftermath of the 1937-38 officer purges, inadequate combined-arms training and the doctrine of deep battle being applied without the necessary mobility.',
        what: 'The Red Army’s first offensive by 7th Army against the Mannerheim Line was repulsed, forcing a reorganisation under Timoshenko and a deliberate artillery breakthrough on 13-15 February 1940.',
        consequence: 'Expulsion from the League of Nations (14 December), the rearmament debate in Germany, and the decision to invade Norway and Denmark, since Britain and France were planning to land in Finland via Norway — the pretext for Weserübung.',
      },
    },
  },
  {
    id: 'weserubung',
    date: '1940-04-09',
    precision: 'day',
    title: 'Germany invades Denmark and Norway',
    kind: 'invasion',
    fronts: ['arctic', 'western'],
    countries: ['Germany', 'Denmark', 'Norway', 'United Kingdom'],
    figures: ['hitler', 'raeder', 'haakon'],
    note: 'Denmark capitulated after about six hours. In Norway, German losses included the heavy cruiser Blücher, the light cruisers Karlsruhe and Königsberg, ten destroyers, six U-boats and some 5,300 casualties — a serious dent in Kriegsmarine surface strength.',
    levels: {
      primary: {
        cause: 'Germany needed a Norwegian coast for its warships and the iron ore it bought from Sweden.',
        what: 'On 9 April Germany attacked Denmark and Norway. Norway fought for two months with British help.',
        consequence: 'Germany got the ports it wanted, but lost many warships.',
      },
      secondary: {
        cause: 'Hitler feared Britain and France would mine Norwegian waters and land troops there to cut the Swedish iron-ore shipments that Germany depended on and to threaten Germany from the north.',
        what: 'Denmark was overrun in hours. In Norway the Germans seized Oslo, Bergen, Trondheim, Kristiansand and Stavanger by air and sea, while the British landed at Namsos and Andalsnes.',
        consequence: 'Norway capitulated on 10 June as France collapsed. Britain evacuated its own forces. Germany now had bases for U-boats and surface raiders against the Atlantic convoys, and airfields that threatened Britain’s north.',
      },
      university: {
        cause: 'The operation was a strategic gamble that combined a preventive occupation with improvised joint-service planning, and it was conducted while an Anglo-French expedition to Finland was genuinely under discussion.',
        what: 'The loss of Blücher and Königsberg and of ten destroyers — eight of them sunk in the two battles of Narvik — plus the damage from Norwegian coastal artillery at Oscarsborg, curtailed Kriegsmarine surface operations for the rest of the war.',
        consequence: 'It forced Britain to divert thousands of troops at the moment of maximum crisis in May-June 1940 and led to the Norway Debate in the Commons, which brought down Chamberlain’s government on 10 May 1940.',
      },
    },
  },
  {
    id: 'fall_gelb',
    date: '1940-05-10',
    precision: 'day',
    title: 'Germany attacks France and the Low Countries',
    kind: 'invasion',
    fronts: ['western'],
    countries: ['Germany', 'France', 'Belgium', 'Netherlands', 'Luxembourg'],
    figures: ['hitler', 'guderian', 'rundstedt', 'manstein', 'winkelman', 'chamberlain'],
    note: 'Germany committed 136 divisions, including 10 panzer and 4 motorised, against the French-British-Belgian-Dutch deployment of some 135 divisions. The French high command counted on repeating the 1914-18 frontal attrition model.',
    levels: {
      primary: {
        cause: 'After Poland, Germany turned west and planned to knock France out of the war quickly.',
        what: 'On 10 May German armies swept through Belgium and the Netherlands and, most surprisingly, through the Ardennes forest, which the French thought was safe for tanks.',
        consequence: 'The best Allied armies were cut off and pushed to the sea at Dunkirk.',
      },
      secondary: {
        cause: 'German planners abandoned a repeat of the 1914 Schlieffen thrust and adopted Manstein’s plan: let the Allies rush into Belgium, then cut through their rear at Sedan.',
        what: 'Paratroopers and glider-borne assault parties seized the bridges and the Eben Emael fortress, while Kleist’s panzer corps crossed the Meuse at Sedan on 13-15 May and then raced to the Channel, reaching Abbeville on 20 May.',
        consequence: 'The Belgian army capitulated on 28 May and the Dutch on 15 May. France had to fight on alone, and the British Expeditionary Force had to be evacuated.',
      },
      university: {
        cause: 'French defeat rested on doctrinal failure: a defensive, methodical-battle concept (manoeuvre par la masse), poor radio-equipped command, and dispersion of armour into light divisions, rather than simple numerical inferiority.',
        what: 'The operational tempo of the panzer corridor produced what the French called the "breakthrough at Sedan" and the collapse of the French Second Army, while French and British counter-strokes at Arras (21 May) and on the Aisne failed for lack of coordination.',
        consequence: 'The fall of the Third Republic followed within six weeks; the campaign reshaped operational thinking worldwide, and the halt order of 24 May to the armoured spearheads, together with Göring’s assurance that the Luftwaffe could destroy the trapped armies, is often credited — controversially — with saving the BEF.',
      },
    },
  },
  {
    id: 'churchill_government',
    date: '1940-05-10',
    precision: 'day',
    title: 'Churchill becomes British Prime Minister',
    kind: 'politics',
    fronts: ['home', 'politics'],
    countries: ['United Kingdom'],
    figures: ['churchill', 'chamberlain', 'attlee'],
    levels: {
      primary: {
        cause: 'Many people in Britain were angry that the war had gone badly, especially the loss in Norway.',
        what: 'Neville Chamberlain resigned and Winston Churchill became Prime Minister.',
        consequence: 'Churchill promised to fight on and never give in, which cheered people up.',
      },
      secondary: {
        cause: 'The Norway Debate of 7-9 May 1940 turned into a vote of no confidence in Chamberlain’s government, and it became impossible to govern with the Labour Party outside it.',
        what: 'Chamberlain recommended Churchill over Lord Halifax as his successor because a peer could not lead the Commons effectively. Churchill formed a coalition with Labour and the Liberals.',
        consequence: 'Halifax became foreign secretary and Attlee entered the war cabinet as Lord Privy Seal; he became deputy prime minister only in February 1942. The war cabinet split over Italian mediation in late May, and Churchill’s refusal to open talks settled the issue of fighting on.',
      },
      university: {
        cause: 'The ministry change is best read as a political realignment forced by the failure of the "Phoney War" strategy, not simply as the arrival of a hero.',
        what: 'The crisis of 26-28 May, in which Halifax pressed for exploratory peace terms through Mussolini, produced the war-cabinet minutes of 27-28 May, in which Halifax’s proposal to explore terms through Mussolini was set aside.',
        consequence: 'Churchill’s control of the language of the war — the "We shall fight on the beaches" speech of 4 June — turned the evacuation of Dunkirk into a political asset and established the rhetorical framework of Allied legitimacy.',
      },
    },
  },
  {
    id: 'dunkirk',
    date: '1940-05-26',
    precision: 'day',
    title: 'Evacuation of the British Expeditionary Force at Dunkirk',
    kind: 'evacuation',
    fronts: ['western', 'home'],
    countries: ['United Kingdom', 'France', 'Belgium', 'Germany'],
    figures: ['gort', 'churchill', 'hitler', 'kluge'],
    note: 'Operation Dynamo evacuated 338,226 men between 26 May and 4 June 1940. The BEF abandoned some 2,400 guns, 64,000 vehicles and vast stocks; about 68,000 Allied troops were killed, captured or left behind.',
    levels: {
      primary: {
        cause: 'German armies had trapped the British and French armies against the sea at Dunkirk.',
        what: 'Hundreds of ships and small private boats crossed the Channel and rescued more than 330,000 soldiers.',
        consequence: 'Britain kept an army to fight on, though it lost almost all its equipment.',
      },
      secondary: {
        cause: 'Hitler’s "halt order" to the panzer divisions on 24 May, and Hermann Goering’s promise that the Luftwaffe could destroy the trapped armies, gave the Allies time to organise a beachhead.',
        what: 'Under constant air attack, destroyers, merchant ships and hundreds of little vessels shuttled from Dover, taking off 338,226 men in nine days.',
        consequence: 'Churchill warned that "wars are not won by evacuations", but the rescue preserved the trained core of the British army. Belgium capitulated on 28 May.',
      },
      university: {
        cause: 'The halt order was multi-causal: Guderian’s Corps needed refit, Kleist’s armour was exhausted, terrain favoured defence, and Brauchitsch’s army-group command wanted infantry to hold the encirclement.',
        what: 'The evacuation depended on the Royal Navy’s destroyers and on RAF patrols from Fighter Command, which flew some 2,700 sorties over the last week of May and the first days of June at a cost of 106 fighters, though the troops on the beach rarely saw it and resented its absence.',
        consequence: 'The loss of heavy equipment made 1940-41 a period of desperate rearmament in Britain and drove the emphasis on anti-invasion defences, minefields and mass-produced weapons that lasted until 1942.',
      },
    },
  },
  {
    id: 'italy_enters_war',
    date: '1940-06-10',
    precision: 'day',
    title: 'Italy declares war on Britain and France',
    kind: 'politics',
    fronts: ['mediterranean'],
    countries: ['Italy', 'France', 'United Kingdom'],
    figures: ['mussolini', 'grandi', 'badoglio'],
    note: 'Mussolini mobilised 1.4 million men, but far fewer than half the army’s divisions were fit for modern operations; the Italian offensive of 21-25 June gained 832 km2 at a cost of about 6,000 Italian casualties.',
    levels: {
      primary: {
        cause: 'Mussolini wanted Italy to win land and colonies in a war that looked nearly over.',
        what: 'Italy attacked France on 10 June, even though its army was not ready.',
        consequence: 'The war spread to the Mediterranean and to Africa, where Italy later lost its colonies.',
      },
      secondary: {
        cause: 'Mussolini believed France would collapse within days and feared Italy would gain nothing if it entered too late, having declared non-belligerence in September 1939.',
        what: 'Italian troops attacked in the Alps, in Libya towards Egypt and in East Africa. The Alpine offensive gained a few towns before the armistice.',
        consequence: 'Italy became an active belligerent with inadequate equipment, forcing Germany to bail it out in Greece and North Africa and stretching the whole Axis war effort.',
      },
      university: {
        cause: 'The decision is generally read as the moment Mussolini chose a war of prestige over the realistic option of armed neutrality, despite the protests of his chiefs of staff and of the King, who had been promised a "non-belligerence" period for rearmament.',
        what: 'Italian strategic incompetence in 1940-41, above all the unforced invasion of Greece on 28 October, turned the Mediterranean into a secondary theatre that nonetheless consumed German air and armour before Barbarossa.',
        consequence: 'Entry into war also led to the loss of Libya, Ethiopia, Eritrea and Somalia by 1941-43 and to the political collapse of the regime in July 1943.',
      },
    },
  },
  {
    id: 'french_armistice',
    date: '1940-06-22',
    precision: 'day',
    title: 'Franco-German armistice at Compiègne',
    kind: 'politics',
    fronts: ['western', 'home'],
    countries: ['France', 'Germany', 'Italy'],
    figures: ['petain', 'hitler', 'weygand', 'mussolini'],
    note: 'The armistice left Vichy France with an unoccupied zone, its navy, its merchant fleet and its empire, plus an obligation under Article 18 to pay the costs of the German occupation, a figure fixed after the armistice, from August 1940, at 400 million francs a day.',
    levels: {
      primary: {
        cause: 'The French army had been defeated and its government wanted the fighting to stop.',
        what: 'France signed an armistice on 22 June in the same railway carriage where Germany had surrendered in 1918. Germany occupied northern and western France.',
        consequence: 'The old Marshal Petain governed the unoccupied south from the town of Vichy.',
      },
      secondary: {
        cause: 'The French government, now headed by Marshal Petain, asked for terms after the army disintegrated and refugees filled the roads.',
        what: 'Hitler chose the Compiègne site deliberately as an act of symbolism. France was divided into occupied and unoccupied zones, its army cut to 100,000 men.',
        consequence: 'Petain’s regime pursued a "National Revolution" and collaborated with Germany, while de Gaulle, from London, called on the French to keep fighting on 18 June.',
      },
      university: {
        cause: 'Armistice rather than surrender preserved French sovereignty, the fleet and the empire — a calculation that mattered enormously, since the Kriegsmarine never had to face the Marine Nationale, and since Vichy’s administrative machinery later enabled both deportation and, eventually, the recruitment of a mass labour force for the Reich.',
        what: 'The armistice terms were harsher than Italy’s had been, and Mussolini’s demands for Nice, Savoy and the fleet were largely refused by Hitler.',
        consequence: 'Britain’s destruction of part of the French fleet at Mers el-Kebir on 3 July 1940 killed nearly 1,300 French sailors and permanently poisoned Anglo-French relations while demonstrating British resolve.',
      },
    },
  },
  {
    id: 'battle_of_britain',
    date: '1940-07-10',
    precision: 'day',
    title: 'The Battle of Britain begins',
    kind: 'battle',
    fronts: ['home', 'western'],
    countries: ['United Kingdom', 'Germany'],
    figures: ['dowding', 'park', 'hitler'],
    note: 'From July to October 1940 the Luftwaffe lost about 1,733 aircraft destroyed against 915 British; 544 Allied aircrew were killed, and from 24 August to 6 September Fighter Command lost 103 pilots killed or missing and 128 badly wounded. On 7 September London became the main target, giving Fighter Command time to rebuild.',
    levels: {
      primary: {
        cause: 'Germany needed control of the air before it could send an army across the sea to invade Britain.',
        what: 'The Royal Air Force fought the German Luftwaffe over southern England all summer and autumn of 1940.',
        consequence: 'The Germans lost and gave up invading, the first big check on Hitler.',
      },
      secondary: {
        cause: 'Hitler’s Directive 16 ordered invasion preparations (Operation Sealion), which required air superiority over the Channel and the south coast.',
        what: 'The Luftwaffe attacked shipping, then airfields and radar stations, then — after a British raid on Berlin — London itself. RAF pilots with Hurricanes and Spitfires, guided by radar and Dowding’s sector control system, fought them off.',
        consequence: 'The invasion was postponed on 17 September and later shelved. Hitler turned east, and Britain remained a base from which to strike at Germany.',
      },
      university: {
        cause: 'The Luftwaffe’s failure is attributed less to "The Few" than to the British integrated air-defence system, the failure of German intelligence to identify the true target set, and the structural limitation of the Bf 109’s range.',
        what: 'The shift to night bombing (the Blitz, from 7 September) abandoned the counter-air campaign at the moment Fighter Command’s forward airfields and Sector Stations were near breaking point.',
        consequence: 'The battle made the British Isles an unsinkable aircraft carrier for the eventual Combined Bomber Offensive and for the 1944 cross-Channel operation, and it fixed German air strength in the west at a time when the eastern front consumed it.',
      },
    },
  },
  {
    id: 'tripartite_pact',
    date: '1940-09-27',
    precision: 'day',
    title: 'The Tripartite Pact is signed',
    kind: 'politics',
    fronts: ['politics'],
    countries: ['Germany', 'Italy', 'Japan'],
    figures: ['hitler', 'mussolini'],
    levels: {
      primary: {
        cause: 'Germany, Italy and Japan each had enemies and wanted to discourage other countries from joining in.',
        what: 'The three countries signed a pact promising to help one another if any was attacked by a country not already in the war.',
        consequence: 'The alliance was called the Axis. It raised fears in the United States.',
      },
      secondary: {
        cause: 'Germany wanted to deter the United States from entering the war and to bind Japan in case the USSR intervened.',
        what: 'The pact named the United States implicitly as the target, and Hungary, Romania, Slovakia and Bulgaria later joined it.',
        consequence: 'Rather than deterring America, the pact strengthened the belief in Washington that a global coalition had to be opposed, and helped push Roosevelt towards aid for Britain and China.',
      },
      university: {
        cause: 'The pact papered over radically divergent strategic interests: Japan’s southward advance (Nanshin-ron) and Germany’s continental aims were never reconciled, and there was no joint planning machinery.',
        what: 'German naval pressure for a military annex and Japanese refusal to promise entry into a war against Britain produced only a defensive-sounding text.',
        consequence: 'The absence of strategic co-ordination is a central explanation for Axis defeat: Japan attacked Pearl Harbor without consulting Germany, and Germany declared war on the US on 11 December 1941 without obligation.',
      },
    },
  },
  {
    id: 'greek_italian_war',
    date: '1940-10-28',
    precision: 'day',
    title: 'Italy invades Greece',
    kind: 'invasion',
    fronts: ['balkans', 'mediterranean'],
    countries: ['Italy', 'Greece'],
    figures: ['mussolini', 'metaxas', 'guzzoni'],
    note: 'Italy committed about 140,000 men initially in the Pindus and Epirus sectors against a Greek covering force outnumbered roughly two to one. By March 1941 Greek counter-offensives had pushed into Albania and held much of its south; Italian losses to March 1941 exceeded 53,000.',
    levels: {
      primary: {
        cause: 'Mussolini wanted to show he could win an empire like Hitler, and Italy already controlled Albania next door.',
        what: 'Italy attacked Greece from Albania. The Greeks not only held on but pushed back into Albania.',
        consequence: 'Germany had to send its own armies to help Italy in the spring of 1941. Some historians say that delayed the attack on the Soviet Union.',
      },
      secondary: {
        cause: 'Mussolini was jealous of German successes and hoped to take Greece before Britain could help; the pretext was a propaganda campaign over staged border incidents and the sinking of the Greek cruiser Elli at Tinos on 15 August 1940.',
        what: 'When the Greek premier Metaxas refused the ultimatum ("Then it will be war" — "Alors, c’est la guerre"), the Italian army advanced into the Pindus mountains and was stopped and driven back.',
        consequence: 'Britain sent air and later expeditionary forces to Greece. The need to rescue Italy in the Balkans led to Operation Marita in April 1941. Whether it also delayed Barbarossa is disputed: some historians hold that the start date was fixed by the weather, others that the Balkans fighting cost Germany the weeks it needed before Moscow.',
      },
      university: {
        cause: 'The decision was taken against the advice of the Italian general staff, on the assumption of Greek collapse; it also reflects Mussolini’s dependence on prestige as a source of regime legitimacy.',
        what: 'The Greek victory invalidated German assumptions about Balkan passivity and drew Yugoslavia into a coup against the regent (27 March 1941), which Hitler treated as a personal affront.',
        consequence: 'The thesis that the Greek campaign delayed Barbarossa by up to six weeks — with decisive consequences for the Moscow offensive — remains debated, but the diversion of Luftflotte 4 and the 12th Army from the preparations is not.',
      },
    },
  },
  {
    id: 'treaty_moscow_finland',
    date: '1940-03-12',
    precision: 'day',
    title: 'Treaty of Moscow ends the Winter War',
    kind: 'politics',
    fronts: ['eastern'],
    countries: ['Soviet Union', 'Finland'],
    figures: ['stalin', 'mannerheim'],
    levels: {
      primary: {
        cause: 'Finland could not keep fighting the huge Soviet army for ever, and help from Sweden and the West never came.',
        what: 'Finland signed a peace treaty, giving up the Karelian isthmus, including the city of Vyborg.',
        consequence: 'Finland lost 11% of its land and many industries but stayed independent.',
      },
      secondary: {
        cause: 'Soviet forces finally broke the Mannerheim Line in February 1940 after a massive artillery preparation, and the Finnish isthmus defence was exhausted.',
        what: 'Finland ceded Karelia, the islands in the Gulf of Finland, the Hanko peninsula and the Salla and Rybachy areas.',
        consequence: 'About 420,000 of the ceded area’s 450,000 inhabitants were evacuated to Finnish territory. Finland’s search for a great-power backer led it into co-belligerency with Germany in June 1941.',
      },
      university: {
        cause: 'For the USSR the war delivered the strategic buffer sought in April 1939 but at enormous reputational cost, while exposing the operational confusion of the post-purge officer corps.',
        what: 'The pre-war frontier had stood 32 km from Leningrad’s suburbs; the new one ran some 120-150 km north-west of it, and set the line from which the Finnish siege axis advanced in 1941.',
        consequence: 'Finland’s survival as a non-communist state adjacent to the USSR became a permanent anomaly in Stalin’s postwar security system, and Finnish rearmament in 1940-41 was financed largely by foreign purchases.',
      },
    },
  },

  /* ---- Months the timeline would otherwise show empty ---- */
  {
    id: 'karlsbad_programme',
    date: '1938-04-24',
    precision: 'day',
    title: 'The Sudeten Germans demand autonomy: the Karlsbad Programme',
    kind: 'politics',
    fronts: ['politics'],
    countries: ['Czechoslovakia', 'Germany'],
    figures: ['hitler'],
    note: 'Konrad Henlein’s Sudetendeutsche Partei took 88 per cent of the ethnic-German vote in the communal elections of 22 and 29 May 1938 and counted some 1.35 million members, and was funded and directed from Berlin. The Karlsbad Programme of 24 April demanded autonomy, the right to use German in public life, and compensation for years of alleged discrimination - demands Prague could not accept without ending the state as a nation-state. Hitler told Henlein on 28 May - as Henlein testified after the war - to demand so much that Prague could never agree.',
    levels: {
      primary: {
        cause: 'Germany wanted an excuse to take parts of Czechoslovakia, so it encouraged the Germans who lived there to complain and ask for self-government.',
        what: 'In April 1938 the Sudeten German leaders published eight demands, including the right to run their own schools and local government.',
        consequence: 'The Czech government could not say yes without breaking up its own country, and could not say no without being called an oppressor - which is exactly the position Germany wanted.',
      },
      secondary: {
        cause: 'After the Anschluss, the German minority inside Czechoslovakia - about three million people in the border districts - came under pressure from Berlin to make the country ungovernable. Henlein visited Hitler and came back with instructions to negotiate for the impossible.',
        what: 'The Karlsbad Programme of 24 April 1938 demanded full autonomy for the Sudetenland. Prague offered a minority-rights statute in September, which was more than any East European state had offered, but by then Henlein had orders to reject anything.',
        consequence: 'The crisis set the timetable for Munich. It also shows how a minority question can be used as a lever: the grievances were real, and the direction came from outside.',
      },
      university: {
        cause: 'The historiographical argument is whether Henlein was an instrument of Berlin or an opportunist who used Berlin for his own aims - Isabel Heinrich’s biography of him leans to the second, and the Sudeten German Party’s own finances, printed from Berlin through the German Office for Foreign Policy, make the dependence concrete.',
        what: 'What matters structurally is the timing: the programme was published two weeks after Prague had begun discussing a minority statute, and Henlein’s instruction to make demands "sufficient to swallow" comes from Hitler’s conversation with him on 28 May, of which the German record was lost; the claim rests on Henlein’s own postwar testimony, though the party’s dependence on Berlin is documented independently.',
        consequence: 'May 1938 also exposed the assumption that did most of the real damage: no one in London or Paris believed Czechoslovakia could be defended, so the debate was about how to press Prague to concede, not whether German demands were lawful.',
      },
    },
  },
  {
    id: 'may_crisis',
    date: '1938-05-21',
    precision: 'day',
    title: 'The May Crisis: Czechoslovakia mobilises',
    kind: 'politics',
    fronts: ['politics', 'home'],
    countries: ['Czechoslovakia', 'Germany', 'United Kingdom', 'France'],
    figures: ['hitler'],
    note: 'The alarm was raised by a false report, almost certainly started by the German embassy in Prague, that a Sudeten German murder on 20 May had been followed by German troop movements. Prague called up some border battalions on 21 May; Henlein fled to Germany on 22 May. On 30 May Hitler signed Directive Case Green with a deadline of 1 October 1938. The British and French governments, to their credit, told Prague they would not abandon it - which the German generals who were then plotting against Hitler took as a reason to postpone their coup.',
    levels: {
      primary: {
        cause: 'There was a rumour, which turned out to be wrong, that Germany was about to attack Czechoslovakia.',
        what: 'On 21 May 1938 the Czechs called up their border soldiers. Britain and France said they would stand by Czechoslovakia. No one attacked.',
        consequence: 'Everyone saw how close Europe had come to a war over a false rumour - and Hitler decided to be ready to destroy the Czech state by autumn.',
      },
      secondary: {
        cause: 'Sudeten German separatism had made the Czech border districts unworkable, and a false rumour of German troop movements on 20 May exposed how little time the democracy had left.',
        what: 'Czechoslovakia mobilised the frontier fortifications on 21 May, and Britain and France - unexpectedly - made clear they would back Prague. Henlein escaped into Germany and British mediation under Lord Runciman began in August.',
        consequence: 'The crisis did not produce a settlement. It produced Hitler’s Directive Case Green of 30 May, ordering the army to be ready to crush Czechoslovakia by 1 October, and it discouraged the German officers who were then considering a coup.',
      },
      university: {
        cause: 'The May Crisis is the strongest evidence against the simple Munich story of inevitable concession: for a few days in May 1938 the British and French governments backed Prague, the Czech army was intact and partially mobilised behind concrete fortifications, and German preparations were nowhere near complete.',
        what: 'It is also the moment when the German opposition’s calculations became visible - the conspirators around Oster and Gisevius needed proof of Allied resolve to move against Hitler, and Runciman’s mission from August served partly to prevent a settlement while the German timetable was completed.',
        consequence: 'The lesson drawn in Berlin was not that pressure had failed but that the Western democracies needed to be given a settlement they could not refuse, which is the function Munich performed in September.',
      },
    },
  },
  {
    id: 'benes_resigns',
    date: '1938-10-05',
    precision: 'day',
    title: 'After Munich: Beneš resigns, Slovakia is autonomous',
    kind: 'politics',
    fronts: ['politics'],
    countries: ['Czechoslovakia', 'Germany', 'Hungary', 'Poland'],
    figures: [],
    note: 'Beneš handed over to General Jan Syrovy on 5 October and left for the United States on 22 October; he was never formally deposed and remained the recognised president of the government-in-exile after 1941. Slovakia received autonomy on 7 October under Jozef Tiso’s Hlinka Party; Carpatho-Ukraine was proclaimed autonomous in October and was occupied by Hungary only on 15 March 1939; the First Vienna Award of 2 November had given Hungary southern Slovakia and the southern strip of Carpathian Ruthenia. Poland had taken Teschen Silesia on 2 October 1938.',
    levels: {
      primary: {
        cause: 'A few days after Munich, the Czech president went away, and the parts of the country that Germany, Poland and Hungary had been promised were taken.',
        what: 'In October 1938 Slovakia was allowed to govern itself, Poland took a strip of land in the north-east, and Hungary took the south of Slovakia.',
        consequence: 'The Czechoslovak state that had existed since 1918 stopped existing in anything but name, and there was nothing left to defend.',
      },
      secondary: {
        cause: 'Munich had cost Czechoslovakia its fortifications, its industry and 3 million people; the rump state could not function as a unitary republic once the Germans and Hungarians had been given what they wanted.',
        what: 'Beneš resigned on 5 October and left for America on the 22nd. Autonomy for Slovakia was granted on 7 October under Tiso; Poles took Teschen; the First Vienna Award of 2 November transferred southern Slovakia and Ruthenia to Hungary.',
        consequence: 'What was left - the "Second Republic" - depended on Germany to exist, which is why March 1939 produced a rump Slovakia as a German state rather than resistance.',
      },
      university: {
        cause: 'The October 1938 settlement is usually treated as a footnote to Munich, but it is where the internal Czech and Slovak argument was settled by force: Slovak autonomy was granted by Prague in a week, having been refused for twenty years, because German pressure had made central government impossible.',
        what: 'The legal niceties matter for the postwar state: Beneš resigned but never abdicated, and the postwar constitution accordingly treated the wartime Slovak state and the "Second Republic" as illegal interruptions of legal continuity rather than successor states.',
        consequence: 'It also fixed the borders problem that the Allies inherited in 1945: with no Austria and no reliable frontier in the west, the postwar frontier of Czechoslovakia - and later of Poland - could only be settled by moving populations.',
      },
    },
  },
  {
    id: 'italy_albania',
    date: '1939-04-07',
    precision: 'day',
    title: 'Italy invades Albania',
    kind: 'invasion',
    fronts: ['balkans', 'mediterranean'],
    countries: ['Italy', 'Albania', 'United Kingdom', 'Greece'],
    figures: ['mussolini'],
    note: 'Some 22,000 Italians landed with 500 tanks against a country with no regular army worth the name; King Zog went into exile with about 200 followers and 200 trucks of gold and treasure, and resistance collapsed in five days, though it took a month to pacify the north. Albania provided 20,000 soldiers and eight divisions for Italy’s war in Greece in October 1940 - and a front which Italy could not manage on its own.',
    levels: {
      primary: {
        cause: 'Italy wanted to control the narrow sea route between Italy and Greece, and its leader Mussolini wanted a conquest to match Germany’s.',
        what: 'In April 1939 Italian troops landed all along the Albanian coast and took the country in five days.',
        consequence: 'Albania became part of Mussolini’s empire, and Italy gained the ground from which it attacked Greece - and failed - in 1940.',
      },
      secondary: {
        cause: 'Italy had been Germany’s junior partner since Munich and had taken nothing; Albania had been drifting into Italian economic control since 1934, and after Germany took Bohemia on 15 March 1939 Mussolini did not want to be left out of the partition of a neighbour.',
        what: 'Italian forces landed on 7 April 1939 and King Zog fled to Yugoslavia. Victor Emmanuel III was offered the Albanian crown on 16 April, and Italian settlers, gendarmes and a puppet government took over.',
        consequence: 'Albania supplied a starting line for the attack on Greece in October 1940, and it created the pattern that repeated in the Balkans: a weak state destroyed, then a guerrilla war in the mountains, then a postwar communist movement that took power on its own.',
      },
      university: {
        cause: 'Albania is the clearest test of Mussolini’s claim that Italian expansion had economic logic rather than prestige: the 1939 invasion cost more than Italian interests in Albania were worth, and Italy never got oil, chrome or grain out of the country at a useful rate.',
        what: 'Italian policy also shows the internal weakness of the regime, since the king and the Foreign Ministry objected and Ciano pushed the operation through - a pattern of personal diplomacy that recurs over Greece in 1940.',
        consequence: 'The British guarantee to Greece and Romania of 13 April 1939 was a direct response to Albania, which is a good illustration of the wider point: Italian adventurism, not German strength, widened the war in the Balkans.',
      },
    },
  },
  {
    id: 'poland_refuses_germany',
    date: '1939-04-28',
    precision: 'day',
    title: 'Germany denounces the Polish-German pact; Poland refuses Danzig',
    kind: 'politics',
    fronts: ['politics', 'eastern'],
    countries: ['Germany', 'Poland', 'United Kingdom'],
    figures: ['hitler'],
    note: 'Hitler had told the Polish foreign minister Jozef Beck on 19 October 1938 that Poland must accept the return of Danzig and an extraterritorial road - and, in private, that Poland would be dealt with "at the first suitable opportunity". On 28 April 1939 Germany denounced the 1934 non-aggression declaration; on 23 May Hitler told his commanders that Danzig was not the object but the free hand for the east. Beck’s reply came on 26 March, five days before - not after - the British guarantee of 31 March, and was that Poland would fight.',
    levels: {
      primary: {
        cause: 'Germany wanted the port of Danzig back, and a road and railway across the strip of land that gave Poland its sea coast.',
        what: 'In April 1939 Germany cancelled its non-aggression agreement with Poland and demanded Danzig. Poland, now backed by Britain and France, said no.',
        consequence: 'Hitler decided to invade, and told his generals to be ready - which is why the war began in September 1939.',
      },
      secondary: {
        cause: 'Germany wanted Danzig and the Polish Corridor back, and more importantly wanted Poland neutral or destroyed before it attacked the west. Poland’s leaders had seen Czechoslovakia destroyed after accepting pressure, so they refused, calculating that being attacked in alliance with Britain and France was better than being partitioned quietly.',
        what: 'Germany denounced the German-Polish declaration of 1934 on 28 April. Britain guaranteed Polish independence on 31 March, extended to Greece and Romania on 13 April, and France confirmed its alliance obligations.',
        consequence: 'The guarantee made the Polish question a European one. It also removed the option Poland had kept between 1934 and 1939 of balancing Germany and the Soviet Union, which is the central criticism of Beck’s policy.',
      },
      university: {
        cause: 'The Polish refusal has been re-argued since 1990: the case that Beck chose a militarily hopeless war in 1939 for reasons of honour has been replaced by work showing that a Polish-German condominium was never on offer, and that the German demands of October 1938 and 1939 were a first stage, not a final one.',
        what: 'German records make the sequence explicit, from the Danzig conversation of 1938 through the directive of 31 August, and Poland’s calculation rested on the known fact that Germany could not fight on two fronts - a calculation the Soviet Union then cancelled.',
        consequence: 'The failure of the 1939 guarantee is the empirical base for every later argument about deterrence and appeasement, and for the specifically East European distrust of Western security promises that survived 1945.',
      },
    },
  },
  {
    id: 'pact_of_steel',
    date: '1939-05-22',
    precision: 'day',
    title: 'The Pact of Steel',
    kind: 'alliance',
    fronts: ['politics'],
    countries: ['Germany', 'Italy'],
    figures: ['hitler', 'mussolini'],
    note: 'Ciano and Ribbentrop negotiated the ten-year alliance; Article II required each partner to come to the other’s aid "without hesitation" if war broke out even if the other was the aggressor. Italy added a secret protocol assuming no war before 1942 - which is why, in August 1939, Mussolini declared Italy not ready and stayed out, an outcome the Germans had not planned for and which the Italian press presented as a victory for prudence.',
    levels: {
      primary: {
        cause: 'Germany and Italy had become close, so their leaders signed a promise to help each other if there was a war.',
        what: 'In May 1939 the two countries signed the "Pact of Steel", promising to fight together with weapons and money.',
        consequence: 'When Germany attacked Poland three months later, Italy did not join in, because its army was not ready - and the promise became an embarrassment.',
      },
      secondary: {
        cause: 'After the Spanish Civil War, Munich and the anti-Comintern pact of November 1937, the two dictatorships formalised their partnership. Italy wanted the alliance as security for its own war in Albania; Germany wanted to keep Italy out of any settlement with the West.',
        what: 'The treaty of 22 May 1939 obliged both states to fight with all military and economic resources. A secret annex assumed war would not come before 1942, when Italian rearmament was supposed to be finished.',
        consequence: 'Italy’s non belligerence in September 1939 was a breach of the spirit if not the letter, and it forced Germany to fight the war in the west alone - which is why Hitler waited until 1940 to attack, and why Mussolini entered the war in June 1940 when he thought it was already over.',
      },
      university: {
        cause: 'The Pact of Steel is the standard case study in the difference between an alliance and a security community: the two states made a binding commitment without any joint planning, and neither informed the other of the operation it was about to launch - Germany of Poland, Italy of Albania.',
        what: 'The Italian excuse of August 1939 was factually accurate; Italian industry could not supply a modern war, and the 1939 mobilisation exposed it.',
        consequence: 'The result was a decade of asymmetric alliance politics in which Germany repeatedly rescued Italy - Greece, North Africa, Sicily - while Italy’s contributions to German strategy were negative in the Balkans and positive only in holding down southern France.',
      },
    },
  },
  {
    id: 'general_government',
    date: '1939-10-12',
    precision: 'day',
    title: 'The General Government is created in occupied Poland',
    kind: 'politics',
    fronts: ['eastern', 'politics'],
    countries: ['Germany', 'Poland'],
    figures: ['hitler'],
    note: 'The decree of 12 October 1939 placed the unannexed 94,000 square kilometres with 10 million people under Hans Frank as Governor-General, formally outside the Reich and under the Führer rather than the Reich government. The annexed provinces - Wartheland, Danzig-West Prussia, East Upper Silesia - were placed under Gauleiters with instructions to Germanise them "within ten years". By 1941 the General Government held some 2 million Jews; the extermination camps of Belzec, Sobibor, Treblinka and Majdanek were all built inside its borders, and the SS and police, not Frank, ran them.',
    levels: {
      primary: {
        cause: 'Germany had conquered Poland, and its leaders decided to keep part of the country for themselves and rule the rest as a colony.',
        what: 'In October 1939 Germany set up a territory called the General Government, with its capital in Krakow, and put a German lawyer, Hans Frank, in charge.',
        consequence: 'Polish people lost their jobs, their property and eventually their lives under this administration; the killing centres of Treblinka, Belzec and Sobibor were built inside it.',
      },
      secondary: {
        cause: 'Poland was divided: the west was annexed into the Reich and the centre was made a separate territory. The decision shows what Germany planned, because the annexed lands were to be Germanised while the General Government was to be a source of cheap labour and food.',
        what: 'Hans Frank ran the General Government from Krakow. Poles were excluded from the universities and the professions, Jewish people were shut in ghettos, and the territory became the site of the largest killing centres of the Holocaust.',
        consequence: 'Frank was hanged at Nuremberg in 1946. The General Government is the clearest example on this map of a territory that was not a country and was not simply occupied territory, but a colonial administration with its own law.',
      },
      university: {
        cause: 'The administrative history matters for the intentionalism-functionalist debate: the General Government was deliberately kept outside the Reich and outside the jurisdiction of the Reich ministries, which is why Himmler and Heydrich could build an apparatus there that German law never formally permitted.',
        what: 'The tension between Frank’s attempt to run a functioning administration and the SS’s claim to unlimited authority is documented in Frank’s own diaries, published and used at Nuremberg, and the same conflict recurs in every German-occupied territory with a civilian administration.',
        consequence: 'The postwar argument about "colonial" methods in the east - whether Polish policy was continuity with German colonial practice in the west or a distinct racial project - turns on how this administration and the annexation programme are read together.',
      },
    },
  },
  {
    id: 'river_plate',
    date: '1939-12-13',
    precision: 'day',
    title: 'The Battle of the River Plate: the Graf Spee is scuttled',
    kind: 'battle',
    fronts: ['atlantic'],
    countries: ['United Kingdom', 'Germany'],
    figures: ['raeder'],
    note: 'The pocket battleship Admiral Graf Spee had sunk nine merchantmen totalling 50,000 tons in the South Atlantic. Commodore Harwood’s division of three cruisers - Exeter, Ajax and Achilles - fought her at close range off Montevideo; Exeter was crippled with 61 killed and the Germans lost 36. Limited by the 24-hour rule of neutral ports, Langsdorff scuttled the ship on 17 December after believing a large force was waiting, and shot himself in Buenos Aires on 20 December.',
    levels: {
      primary: {
        cause: 'A German warship was sinking merchant ships in the South Atlantic, so three smaller British warships hunted for it.',
        what: 'Off the coast of Uruguay in December 1939 the British cruisers fought the battleship Graf Spee, damaged her, and drove her into a neutral harbour, where her captain blew her up instead of fighting.',
        consequence: 'It was the first British naval victory of the war and a great morale boost, but it also showed how few ships Germany had to risk and how many places they could strike.',
      },
      secondary: {
        cause: 'Germany’s surface fleet was far too weak to fight the Royal Navy, so its plan was to use fast warships as commerce raiders on the trade routes. The Graf Spee was one of three "pocket battleships" built to exploit the League’s limits on German tonnage.',
        what: 'Harwood forced the engagement at close range on 13 December 1939, which cancelled the Graf Spee’s advantage in heavy guns and damaged her fuel system. Uruguay was obliged by neutrality law to let her leave within 72 hours, and British agents spread rumours that heavy units were waiting offshore.',
        consequence: 'Langsdorff scuttled his ship. The loss removed one of Germany’s strongest surface raiders before the trade war had really begun, and the remaining raiders of 1940 - Admiral Scheer, Kormoran, Pinguin - did more damage with less risk.',
      },
      university: {
        cause: 'River Plate is often read as a morale event, but its strategic significance was in the decision it confirmed: after the surface raiders were driven home in December 1939 and June 1940, Raeder conceded the initiative in the Atlantic to the U-boats, which is the single most consequential naval decision of the war.',
        what: 'The case is also a clean illustration of how neutrality law constrains belligerents, and how misinformation and diplomacy - not gunnery - decided the outcome.',
        consequence: 'Arguably the wider lesson the German navy failed to draw: the commerce war needed mass, not quality, and Germany entered 1940 with the wrong surface fleet and too few U-boats, a mistake Dönitz spent the war arguing against.',
      },
    },
  },
  {
    id: 'mechelen_incident',
    date: '1940-01-10',
    precision: 'day',
    title: 'A German plane with the invasion plans lands in Belgium',
    kind: 'politics',
    fronts: ['western', 'politics'],
    countries: ['Germany', 'Belgium', 'Netherlands', 'France'],
    figures: [],
    note: 'A Luftwaffe officer carrying the Fall Gelb situation map crashed at Maasmechelen and was captured with part of the document before he could burn it. Belgian intelligence passed it to Paris and London, where it was read as confirming the old assumption of an attack through central Belgium towards Paris; the German change of plan towards the Ardennes and Sedan, adopted on 17 February 1940 after Manstein’s arguments and Hitler’s insistence, was never detected.',
    levels: {
      primary: {
        cause: 'A German aircraft got lost in bad weather and had to land in Belgium, and the officer on board was carrying secret papers.',
        what: 'In January 1940 the Allies therefore got hold of Germany’s outline plan for attacking western Europe - a plan that said the main blow would come through the middle of Belgium.',
        consequence: 'The Allies prepared for exactly that. By the time Germany actually attacked in May it had changed the plan to come through the Ardennes instead, and the papers misled the Allies in the new plan’s favour.',
      },
      secondary: {
        cause: 'The original Fall Gelb plan of October 1939 was essentially a repeat of 1914: a strong right wing through Belgium to the Channel coast. Manstein thought it would merely push the British back into the sea, and argued for a decisive blow through the Ardennes at Sedan, which the French considered impassable for armour.',
        what: 'The Mechelen papers reached Allied intelligence on 10 January 1940 and matched everything they expected, so no one looked harder. Hitler settled on the Sedan version in February, and German deception made sure the Allies kept looking at Belgium.',
        consequence: 'The episode is the strongest single argument that intelligence fails when it confirms expectations. The Allies moved their best armies into Belgium in May 1940 and were cut off behind them.',
      },
      university: {
        cause: 'Mechelen is a cautionary case for the historiography of signals intelligence: the French Deuxieme Bureau produced assessments of German armour concentration in the Eifel that were essentially correct and were ignored at the operational level, a pattern repeated at Sedan on 13 May and in the Ardennes in December 1944.',
        what: 'The counterfactual - that the Germans would have changed the plan again had the papers been taken seriously - is untestable, but the German reaction is documented: the OKW investigated the leak and concluded the Allies had learned nothing.',
        consequence: 'The incident also shows the cost of the Allied decision to fight forward in Belgium: the choice was made for political and economic reasons - the Belgian plain held the ports and the coal - and it made the encirclement of 1940 possible.',
      },
    },
  },
  {
    id: 'altmark_incident',
    date: '1940-02-16',
    precision: 'day',
    title: 'The Altmark incident: Britain boards a German ship in Norwegian water',
    kind: 'battle',
    fronts: ['atlantic', 'arctic', 'politics'],
    countries: ['United Kingdom', 'Germany', 'Norway'],
    figures: ['raeder', 'haakon'],
    note: 'The destroyer HMS Cossack entered the Jossingfjord, boarded the German tanker Altmark over the protest of two Norwegian torpedo boats, and freed 299 prisoners from the commerce raider Admiral Spee. Norway’s government was humiliated and divided; in Berlin the incident was used as proof that Norwegian neutrality was worthless and that Allied mining of the Leads was imminent - which the Allies, after the Cadogan meeting of 28 March, had in fact decided to do.',
    levels: {
      primary: {
        cause: 'A German supply ship was holding captured British sailors inside neutral Norwegian waters, and Britain decided to take them out.',
        what: 'In February 1940 a British warship went into a Norwegian fjord, boarded the German ship Altmark and freed nearly 300 prisoners.',
        consequence: 'Germany said this proved Norway could not be trusted to stay neutral - and used it as one reason to invade Norway in April.',
      },
      secondary: {
        cause: 'German ore from Narvik travelled south through Norwegian territorial waters all winter, where the Royal Navy could not touch it. Britain wanted the ore stopped and wanted minefields laid in the "Leads", the sheltered channel inside the Norwegian shore.',
        what: 'On 16 February 1940 HMS Cossack boarded the Altmark in Norwegian water and took the prisoners. Norway protested but did nothing further, and the British Cabinet decided in March to mine the Leads and, if Germany responded, to land at Narvik, Trondheim and Bergen.',
        consequence: 'Hitler invaded on 9 April, pre-empting an Allied operation that was not ready. Norway was occupied, and the ore route stayed open until the U-boat campaign and air attacks on shipping closed it in 1944.',
      },
      university: {
        cause: 'The incident is a textbook case in the law of neutrality and in the politics of small-state appeasement: Norway’s government refused to intern the Altmark in January because it feared provoking Germany, which is precisely the calculation the British boarding exposed as untenable.',
        what: 'German and British decision-making in March 1940 has been worked over repeatedly, with the key finding that British mining - Wilfred, 8 April - was a response to a German move already in progress rather than its cause.',
        consequence: 'The Norwegian episode is the empirical basis for the small-state lesson that still shapes Norwegian and Nordic security policy: neutrality that depends on the forbearance of a neighbour is not neutrality.',
      },
    },
  },
  {
    id: 'london_bombed_first',
    date: '1940-08-24',
    precision: 'day',
    title: 'The first German raids on London, 24 August 1940',
    kind: 'battle',
    fronts: ['air_war', 'home'],
    countries: ['United Kingdom', 'Germany'],
    figures: ['goering', 'churchill', 'dowding', 'park'],
    note: 'Some bombs fell on the City and on Cripplegate on the night of 24-25 August, killing about 60 people; Churchill retaliated with 81 bombers on Berlin on the night of 25-26 August, which did little damage and decisive strategic effects. Goering’s directive of 31 August switched the main effort to bombing London by day and night, and from 7 September the Blitz ran for 57 consecutive nights. British civilian deaths in the Blitz came to about 40,000.',
    levels: {
      primary: {
        cause: 'German planes had been attacking airfields, and by mistake some of them dropped bombs on London. Britain then bombed Berlin, and Germany decided to attack British cities instead.',
        what: 'From late August 1940 Germany bombed London and other British cities at night, night after night, for months.',
        consequence: 'Tens of thousands of civilians were killed and much of London was damaged - but the plan did not break British morale or destroy the Royal Air Force.',
      },
      secondary: {
        cause: 'The Luftwaffe had spent August attacking radar stations, airfields and fighter factories, and was beginning to starve No. 11 Group of pilots. The accidental bombing of London on 24 August, and Churchill’s raid on Berlin two nights later, gave Goering a target that suited his propaganda and rested his crews.',
        what: 'From 7 September 1940 London was attacked in force by day and then nightly. The British fighters had time to rebuild, the airfields were largely left alone, and the Germans never found a way to destroy the radar early-warning system or control the night sky.',
        consequence: 'The Blitz killed about 14,000 Londoners and destroyed or damaged a million homes, but it did not stop aircraft production, which rose year on year until it peaked in 1944. Britain gained time, and Germany lost the only air campaign of the war in which it chose its target for political rather than military reasons.',
      },
      university: {
        cause: 'The switch of 24 August is the pivot of the Battle of Britain narrative, and the counter-argument - that Fighter Command was near collapse but not past recovery, and that the Germans would have lost anyway - rests on the postwar reconstruction of losses and pilot strength by Wood, Dempster and Richards.',
        what: 'The bombing of cities also raises the question that strategic bombing has always raised: whether violence against civilians produces surrender. Rotational and morale surveys, Mass Observation and Home Intelligence reports show morale falling but not breaking, and no measurable effect on output.',
        consequence: 'The failure of 1940 is the reason Bomber Command scaled up rather than rethought its theory, and it is the empirical starting point for every later argument - Dresden, Hanoi, Belgrade - about whether air power can coerce a society.',
      },
    },
  },
  {
    id: 'taranto',
    date: '1940-11-11',
    precision: 'day',
    title: 'Taranto: twenty-one obsolete aircraft cripple the Italian battle fleet',
    kind: 'battle',
    fronts: ['mediterranean', 'air_war'],
    countries: ['United Kingdom', 'Italy'],
    figures: [],
    note: 'Twenty-one Swordfish from Illustrious attacked in two waves at low level with torpedoes, in moonlight, against a fleet at anchor in shallow water protected by nets. Battleships Littorio and Caio Duilio were torpedoed and Conte di Cavour sank at her moorings; three of six battleships were out of action for months for the loss of two aircraft and four men. Cunningham had planned a fleet action; the Japanese naval attache in Rome studied the results, and the attack on Pearl Harbor is usually read with Taranto in mind.',
    levels: {
      primary: {
        cause: 'The Italian navy was strong and sat in its big harbour at Taranto, which made it hard for Britain to move supplies across the Mediterranean.',
        what: 'In November 1940 the British sent old slow aeroplanes with torpedoes from a carrier at night and hit three big Italian battleships.',
        consequence: 'For months the Italian fleet dared not put to sea, and convoys to Malta and North Africa had a better chance.',
      },
      secondary: {
        cause: 'The Italian battleship fleet outnumbered the Mediterranean Fleet in capital ships, and Italy had refused to attack convoys decisively - a pattern of using the fleet as a "fleet in being" rather than fighting.',
        what: 'Admiral Cunningham and the air commander Lyster sent 21 Swordfish in two waves at 15-minute intervals against a harbour protected by nets. Shallow-water torpedoes with modified motors ran under the moored ships.',
        consequence: 'Italy lost half its battleships for two aircraft; the Mediterranean was contested rather than denied until mid-1941, and the value of the carrier was demonstrated to every navy in the world.',
      },
      university: {
        cause: 'Taranto is the standard example of asymmetric innovation under material constraint: the aircraft were obsolete in every other role, and the operation depended on reconnaissance photographs, night navigation practice and a torpedo modified to run in 25 metres of water.',
        what: 'Its place in operational history also depends on what did not happen: Italy’s failure to fight a decisive action in the Mediterranean in 1940-41, and Italian fuel shortages from 1942, meant the battle was never followed up by a real fleet engagement - the war at sea in these waters was decided by air power, submarines and supply, not by gunnery duels.',
        consequence: 'The Japanese study of Taranto is documented and matters for Pearl Harbor, which makes this one of the few battles in the European theatre with a direct causal line into the Pacific war - noted here only because the Japanese copied the technique; no Pacific material is treated on this site.',
      },
    },
  },
  {
    id: 'directive_21',
    date: '1940-12-18',
    precision: 'day',
    title: 'Directive No. 21: Germany begins planning the invasion of the Soviet Union',
    kind: 'politics',
    fronts: ['eastern', 'politics'],
    countries: ['Germany', 'Soviet Union'],
    figures: ['hitler', 'stalin', 'brauchitsch', 'zhukov'],
    note: 'Barbarossa Directive No. 21, issued 18 December 1940, told the army to be ready "in a rapid campaign" before Britain was defeated - the assumption being that Britain’s last hope lay in Soviet reserves and that crushing the USSR would end British resistance. The Wehrmacht moved 3.3 million men east between February and June 1941. At the Berghof conference of 31 July 1940 with his service chiefs, Hitler said the sooner Russia was crushed the better, and the decision dates from the summer of 1940, not from the failure of the air war.',
    levels: {
      primary: {
        cause: 'Britain had not surrendered, and Hitler thought that if he destroyed the Soviet Union, Britain would lose its last hope and give up.',
        what: 'In December 1940 Hitler ordered his generals to prepare to invade the Soviet Union, to be ready by the spring of 1941.',
        consequence: 'Germany opened the biggest land war in history in June 1941 while it was still fighting Britain, and in the end had to fight on two fronts.',
      },
      secondary: {
        cause: 'Hitler had always wanted territory in the east and saw the Nazi-Soviet pact as temporary. Britain’s survival, the Royal Navy’s strength and the failure to invade in 1940 pushed him towards a decision he was already inclined to take: knock out the Soviet Union and hope Japan would finish Britain in the east.',
        what: 'The directive of 18 December assumed three army groups advancing to the Archangel-Astrakhan line in one short campaign, before Britain was defeated. It was issued to a general staff that was already working on the problem since July, and to an army that had not finished fighting in the west.',
        consequence: 'The decision committed Germany to a war of the kind it had lost before, over distances it could not supply, while the Luftwaffe was still engaged over Britain and the U-boat war was at its height - a choice the German naval command formally objected to.',
      },
      university: {
        cause: 'The chronology of the decision is the central question of the field. The orthodox account, built from the Halder diaries and Directive 21, makes the decision of July 1940 the pivot; the "continuity" school of Hillgruber sees Barbarossa as the real war, while Wehler and others place the initiative in the logic of the German economy’s need for imported food and oil.',
        what: 'What is not in dispute is that the decision preceded any Soviet threat and that the German leadership concealed its aims even from allies: Romania, Finland and Hungary were told they were fighting a preventive war, which is why the postwar history of each of them is so different.',
        consequence: 'The failure of Barbarossa, not the entry of America, is what decided the war in Europe in military terms, and the debate about whether it was ever winnable - the "lost because of the weather" versus "never had the logistics" arguments - is still the most argued question of the entire war.',
      },
    },
  },

  /* ---- Months the timeline would otherwise show empty ---- */
  {
    id: 'rearmament_finance_crisis',
    date: '1938-01-21',
    precision: 'day',
    title: "Germany’s rearmament bill comes due: Schacht loses the Economics Ministry",
    kind: 'home_front',
    fronts: ['politics', 'home'],
    countries: ['Germany'],
    figures: ['goering', 'hitler'],
    note: 'Rearmament had been financed by deferred-payment credit - the Mefo bills of 1934-38 - which matured just as the Reich ran out of foreign currency to buy the oil, iron ore and food it could not produce. Hjalmar Schacht was pushed out of the Economics Ministry in January 1938 and out of the Reichsbank presidency in January 1939, with Walther Funk taking the two posts in turn, while Goering’s Four-Year Plan authority, created in 1936, took charge of raw materials, prices and foreign exchange. The regime could import less, cut civilian consumption further, or take what it needed from other countries. In March 1938 Austria’s gold, foreign exchange and industrial assets were the first large prize, and the same method was applied to Bohemia in 1939 and to every occupied country after 1940.',
    levels: {
      primary: {
        cause: 'Germany was building weapons very fast, and building weapons costs money and raw materials that Germany did not have enough of.',
        what: 'In January 1938 the man in charge of German money, Schacht, was pushed out of his job, and the regime put a harder-line official in charge of economic affairs.',
        consequence: 'Germany kept arming by taking other countries’ money, gold and factories - which is one reason it went on attacking neighbours.',
      },
      secondary: {
        cause: 'Hitler had told his government in 1936 that Germany must be ready to fight within four years, but rearmament was outrunning the economy: the state could not pay for imported oil and ore without exporting, and armaments had crowded out the goods Germany sold abroad.',
        what: 'The dispute inside the government in 1937-38 was between those who wanted to slow rearmament and restore normal trade - Schacht - and those who wanted autarky and, if necessary, seizure of foreign assets - Goering. The second group won.',
        consequence: 'Germany’s economy was organised for plunder as well as production, which made further aggression more attractive, not less. The Anschluss of March 1938 paid for rearmament immediately, and the occupation of Czechoslovakia in March 1939 added the Skoda arms complex.',
      },
      university: {
        cause: 'The "rearmament crisis" of 1938 is a live historiographical question: Martin Broszat and Avraham Barkai documented the foreign-exchange shortage and the disputes inside the economic leadership, while Adam Tooze’s "The Wages of Destruction" (2006) made the chronic shortage of hard currency central to the whole Nazi war economy and to its willingness to loot.',
        what: 'What can be shown is that the deferral mechanism came under strain in 1937-38, that Schacht’s memoranda of January 1939 were an admission of it, and that the Four-Year Plan bodies acquired coercive powers over investment, prices and labour.',
        consequence: 'The argument matters for the biggest question in the field. If the German economy could not pay for rearmament, then 1938-39 was not only a series of diplomatic triumphs but a flight forward into a war economy - which is how Tooze reads the timing of 1939, against the older view that Germany was economically unprepared and therefore deterred.',
      },
    },
  },
  {
    id: 'blomberg_fritsch',
    date: '1938-02-04',
    precision: 'day',
    title: 'The Blomberg-Fritsch affair: Hitler takes personal command of the army',
    kind: 'politics',
    fronts: ['politics'],
    countries: ['Germany'],
    figures: ['hitler', 'brauchitsch', 'keitel'],
    note: 'War Minister Field Marshal Werner von Blomberg was forced out on 27 January 1938 over his marriage to a woman with a police record; Colonel-General Werner von Fritsch, the Army Commander-in-Chief, was removed on 4 February on a homosexual charge that was false and that became the subject of a set-piece trial in September 1938 at which General Ludwig Beck, the former Chief of the General Staff, testified for the defence. On the same day Hitler issued a decree assuming "personal and direct command" of the whole Wehrmacht, abolished the Reich War Ministry and created the Oberkommando der Wehrmacht under General Wilhelm Keitel, with Colonel-General Walther von Brauchitsch commanding the army. Some sixty senior officers were retired, moved or sidelined. Fritsch was the figurehead of the officers who thought Hitler was leading Germany to ruin, and his removal ended any practical prospect of a coup in 1938.',
    levels: {
      primary: {
        cause: 'Two of the most senior German soldiers were pushed out of their jobs on false or embarrassing charges, and Hitler used the moment to seize direct control of the armed forces.',
        what: 'In February 1938 Hitler made himself the commander of Germany’s army, navy and air force, and created a new headquarters staff loyal to him.',
        consequence: 'After this no general could give Hitler orders, only advice - which mattered greatly in the wars that followed.',
      },
      secondary: {
        cause: 'The regular German officer corps had regarded Hitler as vulgar and dangerous, and had kept their distance from the Nazi Party. Blomberg had been the link between the party and the army, and Fritsch the senior officer most willing to resist him.',
        what: 'The police file on Fritsch was old, had been shelved by Hitler himself in 1937, and was produced again by Himmler and Heydrich at exactly the right moment. The subsequent trial in September 1938 humiliated the accusers but did not restore Fritsch, and Hitler had already taken the command posts.',
        consequence: 'Command of the Wehrmacht passed to a head of government with no operational experience and no colleague he could not dismiss. The rivalry between Keitel’s OKW and Brauchitsch’s OKH, and Hitler’s habit of interfering in operational detail from 1941, have their origin here.',
      },
      university: {
        cause: 'The affair is central to the debate about whether a conservative coup against Hitler was ever realistic. The conspirators around Oster and Gisevius needed the army leadership intact and needed to know that Britain would fight; the "Oster papers" describe planning in August-September 1938, and historians have argued for decades about how far those papers can be trusted.',
        what: 'Two points are secure: removing Fritsch decapitated the conspiracy’s military wing, and the British and French failure to warn Berlin in September 1938 that a war of aggression would be resisted removed its political case.',
        consequence: 'The episode also set the pattern for the regime’s relations with the elite - compromise on the surface, control underneath - and it is the empirical basis for the argument that the regime consolidated its power in 1938, not in 1933.',
      },
    },
  },
  {
    id: 'berchtesgaden_ultimatum',
    date: '1938-02-12',
    precision: 'day',
    title: 'Berchtesgaden: Schuschnigg is handed terms for Austria',
    kind: 'politics',
    fronts: ['politics'],
    countries: ['Germany', 'Austria'],
    figures: ['hitler', 'schuschnigg'],
    note: 'Chancellor Kurt Schuschnigg was taken to the Berghof above Berchtesgaden on 12 February 1938 and told that Germany would settle the "Austrian question" one way or another. His terms, brought into effect at Vienna on 16 February, gave Arthur Seyss-Inquart and other Austrian National Socialists cabinet posts, control of the police, and amnesty for imprisoned Nazis. Schuschnigg tried to break the impasse by calling a plebiscite on Austrian independence for 13 March 1938; Hitler demanded it be cancelled on 11 March, forced his resignation, and German troops crossed the frontier that night. Britain and France offered protest only.',
    levels: {
      primary: {
        cause: 'Germany wanted to take over Austria, and its leader invited the Austrian chancellor to his mountain house and told him to hand power to Austrian Nazis or expect an invasion.',
        what: 'In February 1938 the Austrian chancellor was forced to let Nazi politicians into his government and to give them control of the police.',
        consequence: 'Austria lost its independence a month later, in March 1938, without a shot being fired.',
      },
      secondary: {
        cause: 'Austrian Nazis had been terrorising the country with German money since 1933-34, and Mussolini, who had guaranteed Austrian independence in 1934, had moved closer to Germany after the conquest of Ethiopia and the intervention in Spain. A rump Austria could not be defended.',
        what: 'The Berchtesgaden agreement of 12 February, implemented on 16 February, turned Austria into a German client state from the inside. Seyss-Inquart, inside the cabinet, then invited German troops in on 12 March.',
        consequence: 'The absorption of Austria brought the Reich a new frontier with Czechoslovakia, 7 million more people, Austria’s gold reserves and its foreign exchange, and it showed every neighbouring state that the Western democracies would not act.',
      },
      university: {
        cause: 'The February ultimatum sits inside the argument about how far Vienna’s destruction was improvised or scheduled: German documents from autumn 1937 instruct the Berlin embassy to treat Austria as a matter to be "settled", and Papen’s reports from Vienna show a deliberate strategy of infiltration rather than a spontaneous outburst.',
        what: 'The "February pacts" also illustrate a pattern repeated in Czechoslovakia and Poland - the use of an ethnic or political minority as a lever, with the demand for minority rights as the wedge and annexation as the result.',
        consequence: 'For Austria the interpretative problem has lasted decades: whether Austrians were perpetrators or the first victim. The postwar "victim theory" made amends only slowly, and the 1988-89 Waldheim affair and the 2000 debate over restitution forced a public reckoning with the extent of Austrian participation.',
      },
    },
  },
  {
    id: 'arbeitsscheu_reich',
    date: '1938-06-20',
    precision: 'day',
    title: '"Workshy" and "asocial": the June arrests of 1938',
    kind: 'war_crime',
    fronts: ['home'],
    countries: ['Germany'],
    figures: ['heydrich'],
    note: 'The "Aktion Arbeitsscheu Reich" ran in two waves in 1938, in early June and again from about 20 to 27 June. Police and SD units arrested roughly 10,000 men classified as "asocial" or "workshy" and sent them to Sachsenhausen and Buchenwald; in Hamburg alone more than 3,000 people were rounded up in a few days, most of them homeless men, alcoholics, and people with a record of petty offences. The categories had no legal definition. That is the point: "asocial" was an administrative label that the police could apply to anyone, and it was used thereafter for the homeless, for Sinti and Roma, for homosexuals, for people who avoided work in war industry, and for Jews.',
    levels: {
      primary: {
        cause: 'The Nazi government decided that people it called lazy or "asocial" were a problem, and told the police to catch them.',
        what: 'In June 1938 the police in many German cities arrested thousands of homeless and poor men and sent them to concentration camps.',
        consequence: 'It showed that in Nazi Germany you could be sent to a camp without being guilty of any crime, just because an official labelled you "asocial".',
      },
      secondary: {
        cause: 'The regime promised to end unemployment and to discipline those who would not work, and from 1935-36 the labour authorities kept registers of "asocials". By 1938, with the arms programme needing every worker, pressure on the unregistered and the unemployable grew.',
        what: 'The June action was organised by the security police under Reinhard Heydrich, and the prisoners were classed as "asocials" in the camps, marked with a black triangle. Some died in the camps within months, many from beatings and from the punishment company.',
        consequence: 'The camps changed purpose with this wave: from instruments of political terror in 1933-34 they became instruments of social policy, holding tens of thousands of people who had broken no law.',
      },
      university: {
        cause: 'The historiography of "asocial" policy - associated with the work of Michael Burleigh and Wolfgang Wippermann, and with the camp studies of Jane Caplan and Nikolaus Wachsmann - treats the June action as evidence that the camp system was driven by a programme of national "regeneration" and not only by politics.',
        what: 'The administrative mechanics matter: the definition of the category sat with the security police rather than with any court, so the "asocial" designation was a form of protective custody that could not be appealed. The same mechanism recurs in the 1942 labour-deployment decrees.',
        consequence: 'Postwar recognition of these prisoners was the slowest of all camp categories: "asocials" and Sinti and Roma received no compensation and, in West Germany, sometimes carried their wartime convictions into the 1950s. The categories are still contested in memory politics today.',
      },
    },
  },
  {
    id: 'first_citizenship_regulation',
    date: '1938-07-25',
    precision: 'day',
    title: 'Summer 1938: the professions and the economy close to Jews',
    kind: 'war_crime',
    fronts: ['home', 'politics'],
    countries: ['Germany'],
    figures: [],
    note: 'The legal exclusion of Jews from German economic and professional life was completed in the summer of 1938, regulation by regulation. A decree of 26 April 1938 forced every Jew to register domestic and foreign property above 5,000 Reichsmarks. The Third Regulation of the Reich Citizenship Law, of 14 June 1938, put Jewish-owned enterprises on a register for closure and "Arisation". The Fourth Regulation, issued on 25 July 1938, cancelled the medical licences of Jewish doctors from 30 September 1938, leaving those with special permission to treat Jewish patients only; on 23 July a compulsory identity card marked with a "J" was introduced, and on 27 July streets named after Jews were renamed. In August 1938 Jews were required to take the additional names Israel or Sara from 1 January 1939, and their passports were stamped with a "J" on 5 October 1938. All of this ran on definitions settled years before: the First Regulation of 14 November 1935 had made a Jew anyone with three or four Jewish grandparents or anyone who had belonged to the Jewish religious community, whatever that person believed, spoke or had served. Because the exclusion was bureaucratic, it travelled: in every country Germany occupied, officials asked the same question of the civil register.',
    levels: {
      primary: {
        cause: 'The Nazi government wanted Jews out of German business and jobs, and in 1938 it wrote that demand into a string of new laws.',
        what: 'In the summer of 1938 Jewish doctors were banned from most medical practice, Jewish-owned shops and firms were closed down, and everyone had to carry an identity card marked with the letter J.',
        consequence: 'Families who had lived in Germany for centuries lost their work and their savings, which made it harder to get out - and easier for neighbours to take what was left.',
      },
      secondary: {
        cause: 'The Nuremberg Laws of 1935 had made Jews subjects rather than citizens, and their First Regulation of 14 November 1935 had settled who counted as a Jew - three or four Jewish grandparents, whatever the person believed or had done in the war. The regulations of 1938 applied that definition to the whole economy.',
        what: 'In a single summer the last openings closed: property was registered in April, businesses put on a closure list in June, doctors’ licences were cancelled on 25 July, and from 1 January 1939 Jews had to carry the additional names Israel and Sara. The regime called its theft by another name - "Arisation" - and kept the proceeds.',
        consequence: 'Poverty made flight harder, so the decrees both expelled Jews and trapped them; and the grey categories they created - the "Mischling", the mixed marriage, the "privileged" Jew - were still being argued over in German offices in 1945.',
      },
      university: {
        cause: 'The legal history matters because it undermines the "ordinary antisemitism without a plan" reading: the definitions and registrations were drafted in the Interior Ministry with Wilhelm Stuckart playing a leading part, and their sequence - registration, closure, professional exclusion - was applied in turn in Germany, the annexed territories, the Protectorate and France.',
        what: 'The summer of 1938 is the administrative version of "working towards the regime": party offices and local officials demanded harsher measures and rival ministries competed to enact them, while the "Mischling" and mixed-marriage cases produced prolonged conflict between the RSHA, the Interior Ministry and the churches.',
        consequence: 'The postwar consequences are still visible: the Federal Republic had to decide who was a victim under the same categories, and litigation over the status of "Mischlinge" and of converts ran into the 1960s.',
      },
    },
  },
  {
    id: 'runciman_mission',
    date: '1938-08-08',
    precision: 'day',
    title: 'Lord Runciman goes to Prague: Britain pressures the victim, not the aggressor',
    kind: 'politics',
    fronts: ['politics'],
    countries: ['Czechoslovakia', 'Germany', 'United Kingdom'],
    figures: ['hitler'],
    note: 'Lord Runciman, a Liberal peer with no diplomatic experience, arrived in Prague on 8 August 1938 on an "informal" mission with a small staff that included Sir Joseph Ball of the Conservative Research Department. Its practical effect was to urge Prague to concede autonomy to the Sudeten Germans while German rearmament continued unchecked and while Berlin’s intentions were passed over in silence. Henlein’s speech at Maffersdorf on 24 August hardened the Sudeten German terms. Prague’s "Fourth Plan" of 5 September - the most generous minority statute offered by any East European state between the wars - came too late, and Czech-German relations reached the edge of war on 21 and 23 September.',
    levels: {
      primary: {
        cause: 'Britain wanted the crisis in Czechoslovakia settled without a war, and sent a nobleman to persuade the Czechs to give the German minority what Germany demanded.',
        what: 'In August 1938 Lord Runciman spent a month in Prague telling the Czech government to give way, while Germany armed and threatened.',
        consequence: 'The Czechs made generous concessions too late, and Britain’s policy taught Hitler that threats worked.',
      },
      secondary: {
        cause: 'The British government did not believe Czechoslovakia could be defended and did not want a war in 1938 over what many ministers thought was a legitimate minority grievance. Pressure was therefore applied to Prague, which had no British guarantee, rather than to Berlin, which did.',
        what: 'Runciman’s mission was not a negotiation but a lever: he reported to London rather than mediating, and his team argued that the frontier was indefensible without the Sudeten fortifications - which was true, and which was Berlin’s own argument.',
        consequence: 'The mission bought time for Germany’s timetable, and it left the Czechs with a settled conviction that Western security promises were unreliable - a belief that shaped Czech policy after 1945 as much as Soviet occupation did.',
      },
      university: {
        cause: 'The episode is a case study in the appeasement debate: the "guilt of Munich" school sees Runciman as an instrument of a government determined to dismember Czechoslovakia, while the "moral equivalence" and "misperception" schools point to British military weakness, the dominions’ refusal to fight, and the genuine difficulty of the minority question.',
        what: 'What the records show clearly is the asymmetry of pressure - concessions demanded of a state that had done nothing, no sanction contemplated against a state that was arming - and the indifference of the British negotiators to the argument that autonomy for the Sudetenland ended Czechoslovakia as a functioning state.',
        consequence: 'Its longest consequence is not diplomatic but historiographical: Munich became the standard reference for every later crisis in which appeasement was alleged, which is why the episode is still argued about in the language of 1938.',
      },
    },
  },
  {
    id: 'second_republic_election',
    date: '1938-12-18',
    precision: 'day',
    title: 'The rump republic holds a one-list Slovak election and calls itself Czecho-Slovakia',
    kind: 'politics',
    fronts: ['politics'],
    countries: ['Czechoslovakia', 'Germany', 'Hungary', 'Poland'],
    figures: ['hacha'],
    note: 'Emil Hácha, former president of the Constitutional Court, was elected president of the rump state on 30 November 1938, and Rudolf Beran formed the government on 1 December. There was no general election: the National Assembly authorised rule by presidential decree on 15 December 1938 and never met again, and the only ballot of the winter was for the new Slovak Diet on 18 December 1938, held on a single "Party of National Unity" list with the Communists banned; the state had taken the hyphenated name Czecho-Slovakia under the autonomy constitution of 22 November. The Second Republic had no army to speak of, no fortifications, and no possibility of acting against Germany. Hácha, ill and threatened in Berlin on 14-15 March 1939, signed the declaration creating the Protectorate; he lived through the war in internal exile, was tried and convicted in October 1945 and sentenced to life imprisonment, and died in Prague’s Pankrác prison on 26 June 1946 in circumstances still debated.',
    levels: {
      primary: {
        cause: 'After Munich, what was left of Czechoslovakia held an election - but only one list of candidates was allowed, and some parties were banned.',
        what: 'In December 1938 Slovakia, the one part of the country allowed a vote, chose a single national list, and the rump state renamed itself to give the Slovaks a say.',
        consequence: 'The country that had been the only democracy in central Europe had become a weakened authoritarian state, which is why it could not resist when Germany took the rest in March 1939.',
      },
      secondary: {
        cause: 'Munich had taken the border fortifications, most of the heavy industry and three million people. The remaining parties, fearing internal division as the cause of the defeat, joined a single national list and banned the left.',
        what: 'Hácha, a non-political judge, was chosen president to stand above the quarrel. Slovak autonomy under Jozef Tiso’s Hlinka Party was a fact of German power rather than a settlement, and Prague spent the winter of 1938-39 unable to pay for the refugees and the army it still had to maintain.',
        consequence: 'The experiment in authoritarian national unity bought nothing. In March 1939 Slovakia became a German state and the Czech lands became a Protectorate, and the interwar republic was treated after 1945 as legally continuous - which is why Beneš returned rather than a new state being founded.',
      },
      university: {
        cause: 'The Second Republic is under-studied in English and important for two arguments: the collapse of Czechoslovak democracy, which cannot be dated only to Munich, and the question of legal continuity, on which the postwar constitution and the Beneš decrees rest.',
        what: 'The Beran regime’s anti-Jewish measures in late 1938 and 1939, and its participation in the exclusion of Jews from universities and professions before the occupation, are documented and complicate the national narrative of unblemished victimhood - a subject reopened in Czech historiography after 1989.',
        consequence: 'Hácha’s signature in March 1939 is the central case in the ethics of collaboration under duress: the postwar National Court rejected the duress defence in October 1945 and sentenced him to life imprisonment, leaving an unresolved argument about the limits of coerced consent.',
      },
    },
  },
  {
    id: 'prophecy_speech',
    date: '1939-01-30',
    precision: 'day',
    title: 'Hitler’s "prophecy" to the Reichstag, 30 January 1939',
    kind: 'politics',
    fronts: ['politics', 'home'],
    countries: ['Germany'],
    figures: ['hitler', 'goebbels'],
    note: 'In the Reichstag on the sixth anniversary of the seizure of power, Hitler declared that if "international finance Judaism" succeeded in plunging the nations into a world war, the consequence would be "the annihilation of the Jewish race in Europe". On 28 April 1939 he renounced the Anglo-German naval agreement of 1935. The sentence appears in slightly different wording in the version published in the Völkischer Beobachter and in the parliamentary record, a discrepancy seized on by postwar apologists; that Hitler delivered something of the kind, to the Reichstag, in public, is not in doubt. He repeated the formula on 30 January 1941, on 30 January 1942 and on 30 January 1943, by which time the mass deportations to the extermination camps had begun and had been under way for months.',
    levels: {
      primary: {
        cause: 'As Europe moved closer to war, Germany’s dictator spoke in public about what he said would happen to Jewish people if there was a war.',
        what: 'In January 1939 Hitler told the German parliament that a world war would end with the destruction of the Jews of Europe.',
        consequence: 'It was said openly, in a broadcast speech, years before the killing began - so people who later said they had not known had at least been told.',
      },
      secondary: {
        cause: 'The speech was partly foreign policy - a threat aimed at Britain and at what the regime called the "Jewish-dominated" democracies - and partly domestic, an escalation of the language of persecution after the anti-Jewish measures of November 1938.',
        what: 'The wording was deliberately violent and deliberately public. Propaganda did not stop at the borders; the regime broadcast its intentions and expected them to be believed.',
        consequence: 'The speech is a central piece of evidence in the argument that the Holocaust was planned rather than improvised, and it was cited as such at Nuremberg and in every serious history since.',
      },
      university: {
        cause: 'The "prophecy" formula is the strongest single text in the intentionalist case, and functionalists answer that public threats do not establish an administrative decision; the recent treatment of the question by Saul Friedländer and Peter Longerich, and the documentary work of the German historians’ institute, has shifted weight towards the view that Hitler drove the policy personally.',
        what: 'The philological detail matters: the different published texts, the date of the speech, and the three wartime repetitions are documented, and the repetitions are made at moments of decision and near-decision - December 1941, January 1942, and in the middle of the deportations.',
        consequence: 'It is also a methodological warning: the regime’s language was not mere propaganda but a programme with a public audit trail, which is why the "they did not know" defence fails in so many postwar trials, and why historians read the speeches alongside the Reichsbahn transport timetables rather than instead of them.',
      },
    },
  },
  {
    id: 'second_republic_economy',
    date: '1939-02-15',
    precision: 'month',
    title: 'Winter 1938-39: Bohemia’s industry is taken over, 200,000 Czechs are made refugees',
    kind: 'home_front',
    fronts: ['politics', 'home'],
    countries: ['Czechoslovakia', 'Germany'],
    figures: ['hacha'],
    note: 'By the spring of 1939 something like 200,000 Czechs had left or been driven out of the annexed borderlands and were crowded into the rump state, which had lost its fortifications, its heavy industry and its exports. The customs and currency arrangements fixed the Reichsmark at ten koruna, which made Czech assets cheap for German buyers and Czech exports dear; the Skoda works, the largest arms complex in Europe outside the Reich, had its orders from Romania, Yugoslavia and Poland diverted into German hands, and a supervisory apparatus in Berlin controlled credit. What was left of the National Bank’s gold was already largely abroad when the occupation came: the roughly 23 tonnes held in London were handed to the Reichsbank in 1939 after Germany forced the order through the Bank for International Settlements, and the remainder in the Prague vaults followed to Berlin only in June 1940.',
    levels: {
      primary: {
        cause: 'Germany had taken the border districts of Czechoslovakia, so hundreds of thousands of Czech people left their homes and moved into what was left of the country.',
        what: 'In the winter of 1938-39 the rump state had to feed and house refugees, while German buyers, on very favourable terms, took over Czech factories.',
        consequence: 'When Germany occupied the rest in March 1939 it gained one of Europe’s greatest arms industries, ready to work for the German war effort.',
      },
      secondary: {
        cause: 'Munich made the rump economy dependent on Germany by geography and by exchange rate: with the frontier moved and the currency tied at ten koruna to the Reichsmark, German industry could buy Czech plants for a fraction of their worth.',
        what: 'Czech arms exports - a major source of foreign currency since 1918 - were taken over, and German banks took control of credit. The Beran government had no way to resist, because it had no army and no market except the German one.',
        consequence: 'The occupation of March 1939 completed an economic takeover that was already two-thirds done. Bohemia and Moravia then supplied machine tools, trucks, small arms and aircraft components to Germany throughout the war, which is one reason the Luftwaffe stayed in the field after 1943.',
      },
      university: {
        cause: 'The Czech case is the strongest evidence for the "plunder" reading of Nazi economic practice - that conquest was used to solve the currency and capital problems described in the January 1938 crisis - and it has been worked over in Czech and German economic history since the 1990s.',
        what: 'The mechanics are worth knowing: the ten-to-one rate, the "Treuhander" system of trustees who took over Jewish-owned and "economically useless" enterprises, and the transfer of the Nationalbank’s gold, all set the template for the occupied countries after 1940.',
        consequence: 'The postwar settlement had to unwind all of it - the Beneš decrees on German and Hungarian property, the nationalisation of the Czech industrial banks in 1945, and the refusal to treat the wartime transfers as valid sales - which is one root of the postwar communist economy in Czechoslovakia.',
      },
    },
  },
  {
    id: 'soviet_german_talks',
    date: '1939-06-15',
    precision: 'month',
    title: 'Moscow and Berlin begin talking: the road to August 1939',
    kind: 'alliance',
    fronts: ['politics', 'eastern'],
    countries: ['Soviet Union', 'Germany', 'United Kingdom', 'France'],
    figures: ['stalin', 'molotov', 'ribbentrop'],
    note: 'Stalin had signalled a change of direction in March 1939, when his report to the 18th Party Congress dropped the language of collective security, and on 3 May 1939 the Jewish and Western-facing Foreign Commissar Maxim Litvinov was replaced by Vyacheslav Molotov. German-Soviet trade and credit conversations, running since the spring, continued through the summer, with Soviet oil, grain and cotton on one side and German machinery, plant and technical expertise on the other. Meanwhile a British and French military mission travelled to Moscow by a slow ship and arrived with no authority to conclude anything. A German-Soviet trade and credit agreement was signed on 19 August 1939; on the night of 23-24 August Molotov and Ribbentrop signed the non-aggression pact, with secret protocols dividing eastern Europe.',
    levels: {
      primary: {
        cause: 'The Soviet Union did not trust Britain and France, and Germany did not want to fight a war in the west while worrying about the east, so the two began talking.',
        what: 'In the summer of 1939 Soviet and German officials negotiated trade deals and then a non-aggression pact, surprising the whole world.',
        consequence: 'With the pact signed, Germany could attack Poland without fearing the Soviet Union - and the secret agreement let the Soviet Union take eastern Poland and the Baltic states.',
      },
      secondary: {
        cause: 'The Moscow negotiations of spring-summer 1939 had gone badly: Britain and France would not give the Soviet Union a military convention with teeth, and Poland refused to let the Red Army cross its territory. Stalin therefore looked for the other offer on the table.',
        what: 'Berlin had more to give - a pact, a sphere of influence in eastern Europe, and economic supplies - and Stalin could take the deal while rearming and while the Western powers fought Germany. The propaganda switch was abrupt and required the communist parties everywhere to reverse their line overnight.',
        consequence: 'The pact gave Germany a free hand in September 1939 and the Soviet Union two years of preparation, territory, and the destruction of the Polish state. It also discredited collective security in Eastern Europe for a generation.',
      },
      university: {
        cause: 'The interpretation is sharply contested: the orthodox Soviet-postwar reading of "peaceful coexistence sought in vain", the Western reading of cynical opportunism, and the argument associated with A.J.P. Taylor that the pact was the ordinary diplomacy of a balance-of-power state, against work since 1989 showing how much Stalin gained territorially and how far his calculations assumed a long war between the West.',
        what: 'The opening of Soviet archives after 1989, and the public acknowledgement in 1989 by the Congress of People’s Deputies that the secret protocols existed and had been implemented, changed the evidence base decisively; the German records had been available since the Nuremberg documents were published.',
        consequence: 'The summer of 1939 is also the empirical starting point for the postwar history of the Baltic states, western Ukraine and Bessarabia, whose annexation under the protocols is the core grievance of those societies to this day, and for the Soviet Union’s own post-1991 argument about the pact.',
      },
    },
  },
  {
    id: 'reichszentrale',
    date: '1939-01-24',
    precision: 'day',
    title: 'A central office for expelling Jews is created in Berlin',
    kind: 'war_crime',
    fronts: ['home', 'politics'],
    countries: ['Germany', 'Austria', 'Czechoslovakia'],
    figures: ['heydrich'],
    note: 'Hermann Göring’s decree of 24 January 1939 created a Reich Central Office for Jewish Emigration under Reinhard Heydrich, modelled on the Central Office Adolf Eichmann had set up in Vienna in 1938; the Berlin office took over buildings on Kurfürstenstraße in February, began work in March 1939, and a Prague branch followed in July 1939. Its method was terror plus paperwork: emigration was possible only for Jews who surrendered their property, paid the Reich flight tax, and cleared a queue of competing agencies, and the newly created Reich Association of the Jews in Germany, formed on 4 July 1939, was forced to act as the office’s implementing arm. When the war closed the frontiers and the British blocked emigration from 1940, the same offices, the same files and the same officials were turned to deportation; Eichmann’s section became RSHA Referent IV B 4.',
    levels: {
      primary: {
        cause: 'For years the Nazi government tried to force Jewish people to leave Germany. In 1939 it set up one big office to organise it.',
        what: 'The office made Jewish people give up their homes, money and businesses before it would let them go, and forced Jewish organisations to do the paperwork.',
        consequence: 'When war made leaving impossible, the same office and the same records were used to organise deportations instead.',
      },
      secondary: {
        cause: 'After November 1938 the regime wanted Jews out of the economy and out of the country, and emigration had in fact increased - some 130,000 people left Germany, Austria and the Protectorate in 1938-39 - but the countries that would receive them were few and wanted no capital, no competition, and no refugees.',
        what: 'The Berlin office combined the coercion first tried in Vienna with the machinery of confiscation. It is also the moment when the word "evacuation" began to acquire its murderous meaning in German official language.',
        consequence: 'The bureaucratic continuity is the point: deportation was not improvised by different men in 1941. It was run out of the same registry offices, with the same transport contacts in the Reichsbahn, by officials who had spent three years learning exactly where the Jews were.',
      },
      university: {
        cause: 'The office is a cornerstone of the bureaucracy-and-murder literature: Christopher R. Browning’s work on the German administration of the Jewish question, and the studies of the Eichmann Referat and of the Reich Association as a coerced instrument, rest on these files.',
        what: 'The Emigration Office also forces the question of alternatives. The Madagascar plan and the Nisko reservation of 1939-40 were not fantasies of the radical fringe but proposals worked up by the same desks; they failed for logistical and inter-agency reasons, and the failure narrowed the options to murder.',
        consequence: 'The institutional history also has a postwar afterlife: several of these officials resumed senior careers in the Federal administration, which is one reason West German trials over deportations took so long and produced such light sentences.',
      },
    },
  },
  {
    id: 'moscow_military_talks',
    date: '1939-07-25',
    precision: 'month',
    title: 'Three-power staff talks open in Moscow - and the West travels by slow ship',
    kind: 'politics',
    fronts: ['politics'],
    countries: ['Soviet Union', 'United Kingdom', 'France'],
    figures: ['stalin', 'molotov'],
    note: 'The political conversations between Britain, France and the Soviet Union, running in Moscow since April 1939, gave way to naval and military staff talks at the end of July. The measure of intent was travel: the British military mission under Admiral Sir Reginald Drax crossed to the Black Sea by slow merchant ship rather than by air, arriving only on 5 August, and the French general at its head, Joseph Doumenc, went by plane and carried no more authority than his colleagues. The question the talks foundered on was structural and was raised from the first session: Soviet help against Germany meant the Red Army crossing Poland and Romania, and Warsaw and Bucharest refused flatly, doubting - as events proved - whether they would ever get their countries back afterwards. The Western governments would not press them, and their delegations had no plenipotentiary powers. While the staffs argued, Moscow kept the German channel open - the trade and credit talks of June ran on, and the German-Soviet credit agreement was signed on 19 August 1939. By the time the Western missions were abandoned at the end of August, Stalin had the Molotov-Ribbentrop Pact before him.',
    levels: {
      primary: {
        cause: 'Britain and France wanted to know whether the Soviet Union would fight with them if Germany attacked, so they sent their soldiers and sailors to talk to Soviet officers in Moscow.',
        what: 'In July 1939 the three countries began military talks about how they would fight Germany together. But the British delegation travelled by slow ship, and Poland refused to let Soviet troops cross its land.',
        consequence: 'Stalin decided the Western powers were not serious. A month later he signed an agreement with Hitler instead, and Britain and France got the war they had failed to avert.',
      },
      secondary: {
        cause: 'France and Britain had promised to help the Soviet Union negotiate, but Poland and Romania - the only countries a Soviet army could march through to reach Germany - refused transit rights and believed, correctly, that Soviet troops might never leave. The Western democracies refused to force the issue.',
        what: 'The military talks that opened at the end of July 1939 therefore deadlocked almost at once: the Soviet commanders asked for transit and got nothing, while the British and French missions travelled slowly and negotiated without real authority. At the same time Moscow was bargaining with Berlin for credits and raw materials.',
        consequence: 'When the talks were recalled in late August, the Western democracies had spent three months proving to Stalin that they were weak, slow and unreliable; the pact with Ribbentrop was the answer, and Poland paid the price of the transit question first.',
      },
      university: {
        cause: 'The staff talks are central to the historiography of collective security’s failure: A. J. P. Taylor located responsibility in Western hesitancy, the transit question was argued into the 1980s on Polish and Romanian documents, and the Soviet archives opened after 1991 show Stalin negotiating on two tracks simultaneously and taking the offer that paid sooner and more.',
        what: 'The records also show that the failure was structural rather than personal: Soviet strategy against Germany ran through Poland and Romania, states whose governments judged - and the next two years proved them half-right - that Soviet occupation could outlast the Wehrmacht. British and French planners knew the transit demand was unanswerable and preferred to keep negotiating rather than settle it.',
        consequence: 'The episode underwrites the central counterfactual of 1939: an August 1939 Western-Soviet military convention would not have cancelled Hitler’s decision for war, but it would have raised its risks and changed its date - and after 1941 it fed the Soviet charge, repeated from wartime propaganda into Cold War historiography, that the West had meant the Wehrmacht and the Red Army to bleed each other white.',
      },
    },
  },

  {
    id: 'british_guarantee_poland',
    date: '1939-04-06',
    precision: 'day',
    title: 'Britain guarantees Poland',
    kind: 'politics',
    fronts: ['politics'],
    countries: ['United Kingdom', 'Poland', 'Germany'],
    figures: ['chamberlain', 'hitler'],
    note: 'The guarantee of 6 April 1939, announced by Chamberlain on 31 March after German demands for Danzig and the Corridor, extended to Greece and Romania on 13 April. It was deliberately general: it named no mechanism for assisting Poland, which is why the declarations of 3 September 1939 followed rather than automatic intervention in March.',
    levels: {
      primary: {
        cause: 'Germany was demanding the free city of Danzig and a road across Poland, and Poland refused.',
        what: 'Britain promised on 6 April 1939 that it would help Poland if its independence was threatened.',
        consequence: 'Germany now had to reckon with Britain if it attacked Poland, but the promise did not say how Britain would help.',
      },
      secondary: {
        cause: 'After the occupation of the Czech lands in March 1939, Britain abandoned appeasement and tried to deter further German expansion by drawing a line at Poland.',
        what: 'Chamberlain announced the guarantee on 31 March and signed the Anglo-Polish agreement on 6 April; France reaffirmed its own commitments to Poland in the days that followed.',
        consequence: 'Poland gained a diplomatic shield but no immediate military help; the guarantee became the stated reason Britain declared war on 3 September 1939.',
      },
      university: {
        cause: 'The guarantee was both a deterrent and a signal to the Soviet Union that Britain would resist further German expansion eastward — which is why Moscow drew a different conclusion and opened talks with Berlin that summer.',
        what: 'The terms were deliberately vague about the form of assistance, and Britain kept pressing Poland to negotiate with Germany rather than treating the guarantee as a blank cheque.',
        consequence: 'Whether the declaration strengthened deterrence or made war more likely by removing Poland’s room to concede is a genuine argument; what is certain is that it tied British credibility to Poland and made the crisis of August 1939 European rather than local.',
      },
    },
  },
  {
    id: 'suomussalmi',
    date: '1939-12-08',
    precision: 'day',
    title: 'The Battle of Suomussalmi: Finland stops one Soviet army',
    kind: 'battle',
    fronts: ['arctic'],
    countries: ['Finland', 'Soviet Union'],
    note: 'The fighting of 8 December 1939 to 8 January 1940 ended in the destruction of much of the Soviet 163rd Rifle Division on the road through Suomussalmi. Soviet strength and loss figures for the Winter War vary widely between Finnish and Russian accounts; the battle is described here without a claimed exact total.',
    levels: {
      primary: {
        cause: 'The Soviet Union had invaded Finland, and one army was pushing through forests towards the centre of the country.',
        what: 'Finnish troops cut the road, split the advancing force into pockets and attacked the separated columns in deep snow.',
        consequence: 'A much smaller Finnish force stopped that advance and destroyed its supplies, which surprised the Soviet command.',
      },
      secondary: {
        cause: 'The Soviet plan for a quick invasion assumed the Finnish army would collapse; the terrain, the cold and poor Soviet logistics made a road-bound advance extremely vulnerable.',
        what: 'Finnish ski troops blocked the two columns at Suomussalmi, cut the supply route at the Raate road and destroyed the stranded units in successive attacks through December and early January.',
        consequence: 'The battle did not win the war — the Soviet Union eventually broke through with overwhelming force — but it destroyed the myth of an easy victory and shaped Soviet operational reforms before 1941.',
      },
      university: {
        cause: 'Suomussalmi is the classic case of an operational success achieved by a smaller force through interior lines, interdiction of a single road and the exploitation of an enemy who had not prepared for winter warfare.',
        what: 'Finnish accounts emphasise the annihilation of the 163rd Division; Russian accounts stress the broader strategic outcome, in which the Red Army massed sufficient forces elsewhere to compel Finland to negotiate in March 1940.',
        consequence: 'The campaign made a deep impression in Berlin and is often cited, with caution, as one influence on German expectations in 1941 — though the Wehrmacht that invaded the Soviet Union was far larger and better equipped than the forces defeated in the Finnish forests.',
      },
    },
  },
  {
    id: 'sedan_1940',
    date: '1940-05-13',
    precision: 'day',
    title: 'German armour crosses the Meuse at Sedan',
    kind: 'battle',
    fronts: ['western'],
    countries: ['Germany', 'France'],
    figures: ['guderian'],
    note: 'The crossing of 13 May was followed by an armoured thrust through a weakly held sector towards the Channel coast; the French 55th Division, a reserve formation, collapsed under the attack. German panzer losses in the breakthrough were small compared with the operational effect, but the figure should always be read as an estimate.',
    levels: {
      primary: {
        cause: 'Germany attacked France through the Ardennes, where the French defences were weak.',
        what: 'On 13 May German armour crossed the River Meuse at Sedan and broke through the French line.',
        consequence: 'Within days the German tanks were racing towards the sea, cutting off the best Allied armies in the north.',
      },
      secondary: {
        cause: 'The main Allied armies had advanced into Belgium to meet the German feint, leaving the Ardennes sector to reserve divisions with little artillery and no experience.',
        what: 'After aerial bombardment, German infantry crossed the Meuse on the evening of 13 May and panzer divisions poured through the gap, supported by dive-bombers rather than by infantry following on foot.',
        consequence: 'The breakthrough separated the Allied armies in Belgium from France, forced the evacuation at Dunkirk and made the fall of France a matter of weeks.',
      },
      university: {
        cause: 'Sedan worked because German operational doctrine concentrated armour and air support at a single Schwerpunkt while France distributed its armour among infantry formations — a difference in doctrine as much as in numbers.',
        what: 'The collapse was not instantaneous: French counter-attacks were attempted, and the German bridgehead was vulnerable for a time, but communications and command failed faster than the defenders could organise.',
        consequence: 'Postwar accounts turned Sedan into a simple story of German brilliance and French incompetence; the archival literature is more careful, pointing to French force allocation, the effects of the air offensive and the speed of German exploitation as separate causes.',
      },
    },
  },
  {
    id: 'bessarabia_baltic_1940',
    date: '1940-06-28',
    precision: 'day',
    title: 'The Soviet Union occupies the Baltic states and Bessarabia',
    kind: 'invasion',
    fronts: ['eastern', 'politics'],
    countries: ['Soviet Union', 'Estonia', 'Latvia', 'Lithuania', 'Romania'],
    note: 'Soviet ultimatums to Estonia, Latvia and Lithuania were delivered in mid-June, and Soviet troops occupied the three capitals on 14-17 June; an ultimatum to Romania followed on 26 June, with Soviet forces entering Bessarabia and northern Bukovina from 28 June. The map has no June 1940 border state, so this map cannot draw these changes.',
    levels: {
      primary: {
        cause: 'The Soviet Union wanted land it had lost after the First World War and used the weakness of its neighbours after France fell.',
        what: 'In June 1940 Soviet troops took over Estonia, Latvia and Lithuania, then occupied Bessarabia and northern Bukovina from Romania.',
        consequence: 'Millions of people came under Soviet rule, and the map in this site still shows April 1940 borders — it cannot show this enlargement.',
      },
      secondary: {
        cause: 'The 1939 secret protocol had placed these territories in the Soviet sphere; the German victory in the west removed the only power that might have objected.',
        what: 'The Baltic governments received ultimatums and accepted them under military pressure; new pro-Soviet governments then requested admission to the USSR. Romania accepted the Soviet ultimatum of 26 June after consulting Germany, and Soviet troops occupied the disputed provinces from 28 June.',
        consequence: 'The annexations were followed by rapid sovietisation, arrests and mass deportations in 1940-41, and they remain disputed in international law because they were imposed by force.',
      },
      university: {
        cause: 'The sequence is a direct consequence of the Molotov-Ribbentrop protocol, and it shows how the pact divided eastern Europe into German and Soviet spheres rather than merely keeping the two states at peace.',
        what: 'Moscow presented each step as a lawful request accepted by a sovereign government, which is the language still used in Russian accounts; the Baltic states and Romania treated the ultimatums as occupation.',
        consequence: 'The annexations changed borders but not loyalty: when Germany attacked in June 1941, many people in the newly occupied regions welcomed it, before German occupation proved equally destructive.',
      },
    },
  },
  {
    id: 'mers_el_kebir',
    date: '1940-07-03',
    precision: 'day',
    title: 'Britain attacks the French fleet at Mers-el-Kébir',
    kind: 'battle',
    fronts: ['atlantic', 'mediterranean'],
    countries: ['United Kingdom', 'France'],
    figures: ['churchill'],
    note: 'The attack of 3 July 1940, intended to prevent the French fleet from joining Germany, killed more than a thousand French sailors and poisoned Anglo-French relations for months. The subsequent landing at Dakar in September failed; the fleet at Alexandria was later demobilised by agreement with the British commander.',
    levels: {
      primary: {
        cause: 'After France surrendered, Britain feared the French navy might be used against it.',
        what: 'British warships opened fire on French ships in the Algerian harbour of Mers-el-Kébir when their commander refused British terms.',
        consequence: 'Many French sailors were killed, and France was angry with its former ally — but Germany did not get the fleet.',
      },
      secondary: {
        cause: 'The armistice left Vichy in control of a modern fleet; Churchill could not accept the risk that Germany would seize it, despite the French assurance that it would not.',
        what: 'A British squadron attacked the main French base at Oran and Mers-el-Kébir on 3 July after negotiations failed; one battleship was sunk and others were damaged.',
        consequence: 'Britain demonstrated that it would act alone, and Vichy retaliated politically, but Germany never obtained the French battle fleet.',
      },
      university: {
        cause: 'The decision is one of the clearest examples of Churchill calculating that long-term sea control outweighed the immediate diplomatic cost; the French fleet was the one asset that could have shifted the naval balance in the Mediterranean.',
        what: 'The attack was legally controversial, and the losses among French sailors remain disputed in detail; what is not in doubt is that the order came from the British War Cabinet and that the French admiral had no authority to accept the terms without his government.',
        consequence: 'It convinced Vichy that Britain was an enemy and hardened French collaboration, while proving to Washington and the Dominions that Britain intended to continue the war by any means available.',
      },
    },
  },
  {
    id: 'battle_of_britain_day',
    date: '1940-09-15',
    precision: 'day',
    title: 'Battle of Britain Day: 15 September 1940',
    kind: 'battle',
    fronts: ['air_war'],
    countries: ['United Kingdom', 'Germany'],
    note: '15 September is commemorated in Britain as Battle of Britain Day: large German raids were met by concentrated fighter interception, and the Luftwaffe withdrew from the daylight offensive. The RAF’s official commemoration uses 10 July 1940 as the campaign’s start, the date already carried by the battle_of_britain card; German chronologies divide the campaign differently. Fighter Command’s claims of enemy aircraft destroyed that day were higher than German losses recorded after the war, so no exact loss figure is given here.',
    levels: {
      primary: {
        cause: 'Germany was trying to defeat British aircraft so it could invade Britain.',
        what: 'On 15 September large formations of German bombers were met by British fighters, and the raids were driven off with heavy losses.',
        consequence: 'Hitler put off the invasion; Britain was not conquered in 1940.',
      },
      secondary: {
        cause: 'After failing to destroy the RAF on the ground and switching to attacks on London, the Luftwaffe needed a decisive daylight victory before an invasion could be attempted.',
        what: 'On 15 September two large German attacks were intercepted in tightly controlled formations over south-east England; the bombers suffered heavily and the fighter force was not destroyed.',
        consequence: 'The invasion was postponed and then abandoned. Britain kept control of its own air space, which made a cross-Channel invasion impossible for as long as the RAF remained intact.',
      },
      university: {
        cause: 'The battle was decided as much by the system — radar, the operations rooms, sector control and the earlier decision not to waste fighters in France — as by the courage or skill of individual pilots.',
        what: 'Claims of German aircraft shot down on 15 September were greatly inflated in wartime reporting; post-war study of German records gives much lower losses, though still enough to make the daylight campaign unsustainable.',
        consequence: 'The RAF dates the campaign from 10 July and the Luftwaffe uses other boundaries, so 15 September is a British commemoration rather than a universal military date. What it marks is real: the end of the attempt to win air superiority by day.',
      },
    },
  },
  {
    id: 'greece_albania_1940',
    date: '1940-11-14',
    precision: 'day',
    title: 'November 1940: the Greeks counter into Albania, the first Axis setback of the war',
    kind: 'battle',
    fronts: ['balkans'],
    countries: ['Greece', 'Italy', 'Albania'],
    figures: ['metaxas'],
    note: 'The counter-offensive ran from 14 November 1940 to 6 January 1941, and took Korçë between 14 and 23 November, Sarandë on 6 December, Delvinë on 5 and Gjirokastër on 8 December, before culminating at Klisura Pass in January 1941, a few dozen kilometres inside the Albanian border. By February the front had stabilised, the Italians having reinforced the Albanian front to 28 divisions. Italian combat losses in the war came to 58,578, with perhaps 25,000 cases of frostbite. Across the Strait of Otranto Italian ships made 3,305 voyages, landing 487,089 men and 584,392 tons for the loss of seven merchant ships and one escort. The occupation politics were delicate: a new municipal council at Korçë had eleven Greeks and four Albanians, and the military governor at Gjirokastër forbade the celebration of Albanian independence day on 28 November, while his counterpart at Korçë allowed it and was reprimanded. Mark Mazower calls the invasion’s defeat and the counter-offensive of 1940 the first Axis setback of the entire war.',
    mapNote: 'The fighting sits inside Albania, whose frontier this site draws unchanged for April 1940 and April 1941 — Korçë, Gjirokastër and Vlorë Albanian, Ioannina Greek. No line marks the Greek bridgehead; at April 1941 the map does show Corfu in Italian hands.',
    levels: {
      primary: {
        cause: 'Italy attacked Greece from occupied Albania on 28 October 1940, expecting a short victory. The Greeks fought back, and by mid-November the Italian army had been pushed out of Greece again.',
        what: 'From 14 November 1940 the Greek army did not stop at its own border. It went into Albania, taking the town of Korçë within ten days, and over the next weeks took Sarandë and Gjirokastër on the way towards the coast at Vlorë.',
        consequence: 'For six months the war in the Balkans was fought on Albanian ground, and Albania’s ports carried an army. Greece had won the first clear victory over the Axis — and had to hold ground it never meant to keep.',
      },
      secondary: {
        cause: 'The Italian invasion of 28 October 1940 was made with forces too weak for the mountains and against a state that had mobilised fully and had British air and material support. By 13 November the Greeks had re-occupied the Grammos and Smolikas ranges and the Italian commander had been recalled; the Italians reorganised into a Ninth Army in the Korçë sector the next day. The Greek government then decided to attack, both for military reasons and because it wanted a bargaining position.',
        what: 'The Greek counter-offensive began on 14 November 1940 and ran until 6 January 1941. Korçë fell between 14 and 23 November, and the next phase drove towards Valona, the port the Italians needed: Sarandë was taken on 6 December, Delvinë on 5 and Gjirokastër on 8 December. The advance culminated at Klisura Pass in January 1941, a few dozen kilometres inside the Albanian frontier, and then stalled in winter conditions.',
        consequence: 'The defeat of the Italian invasion and the Greek counter-offensive of 1940 have been called the first Axis setback of the whole war. Italy kept an army in Albania all winter, reinforced to twenty-eight divisions; Germany had to enter the Balkans in April 1941 to clear it, one of the debates about whether that delayed Barbarossa.',
      },
      university: {
        cause: 'Two arguments run through the campaign. The first is whether the Greek advance was a strategic opportunity missed or a necessary exploitation of a broken enemy: the army reached Klisura Pass in January 1941 only after weeks of frontal attacks in snow, and the front stabilised in February with the Italians reinforced to twenty-eight divisions. The second concerns occupation: official proclamations spoke of liberating Albania, but Greek claims to Northern Epirus were well known, and Albanian suspicion was confirmed by an eleven-to-four Greek municipal council at Korçë and by the banning of Albanian independence day at Gjirokastër.',
        what: 'The campaign’s logistics decide the reading of it. Italy kept the army across the Strait of Otranto, 3,305 voyages carrying 487,089 men and 584,392 tons with the loss of only seven merchant ships and one escort, so the Italian position in Albania never collapsed at sea even after Taranto on 11-12 November. The Greek army, by contrast, had no transport system and no fuel reserve; its advance ran out at the pass rather than being defeated there, and the Greek occupation regime — which followed the regulations of international law, and ignored offers of Albanian volunteers — was administering ground it could not hold.',
        consequence: 'The campaign is remembered in Greece as the war’s only unambiguous national triumph, and that memory has done work in later Greek politics. Militarily its consequence is German: the need to clear Albania and Greece in April 1941 fixed the Balkans as a theatre, brought Yugoslavia and Greece into the occupation system, and gave the Wehrmacht a front it had to garrison for four years — while Albania’s frontier, which the occupying power had drawn in 1939, survived the war intact.',
      },
    },
  },
  {
    id: 'sidi_barrani',
    date: '1940-12-09',
    precision: 'day',
    title: 'Operation Compass opens with the attack at Sidi Barrani',
    kind: 'battle',
    fronts: ['mediterranean'],
    countries: ['United Kingdom', 'Italy'],
    note: 'The assault of 9-11 December 1940 by the Western Desert Force was intended as a short raid against the Italian advanced positions. Its success led to a much larger operation that reached Tobruk in January 1941, in which many thousands of Italian soldiers were taken prisoner; totals differ between British and Italian records.',
    levels: {
      primary: {
        cause: 'The Italian army in Egypt had advanced and then stopped, and the British had a small but better-equipped force ready.',
        what: 'On 9 December British and Commonwealth troops attacked the Italian camp at Sidi Barrani and broke through.',
        consequence: 'A raid meant to last days turned into a campaign that pushed the Italians back across Libya.',
      },
      secondary: {
        cause: 'Mussolini’s invasion of Egypt in September 1940 had outrun its supplies, and the Italian army had fortified a series of isolated camps rather than a continuous front.',
        what: 'The Western Desert Force passed between the camps, attacked Sidi Barrani from the rear and captured thousands of prisoners in three days of fast-moving operations.',
        consequence: 'The campaign showed that Italian forces in North Africa could not hold against armoured and artillery tactics, and it forced Germany to send the Afrika Korps in February 1941.',
      },
      university: {
        cause: 'Compass succeeded because British planning exploited the gaps between Italian camps and because the Italian command had no mobile reserve able to intervene — an early demonstration that logistics and mobility, not a continuous front, decided desert war.',
        what: 'The operation was planned as a five-day raid and then expanded as the Italian position collapsed; the pursuit continued along the coast road towards Tobruk and beyond.',
        consequence: 'The British victory created a new strategic problem: the troops used for the advance were needed in Greece, which is why the force sent to halt the German relief soon after was small and untried.',
      },
    },
  },


  {
    id: 'polish_government_in_exile',
    date: '1939-09-30',
    precision: 'day',
    title: 'Poland’s government-in-exile is formed',
    kind: 'politics',
    fronts: ['politics'],
    countries: ['Poland', 'United Kingdom', 'France'],
    note: 'General Władysław Sikorski formed a government in Paris on 30 September 1939, with representatives of the main parties; it moved to London in 1940 after France fell. Britain and France recognised it, and it carried Poland’s legal personality through the war, which is why the Polish underground state claimed to act in its name. The recognition did not give Poland a seat at the major Allied conferences of 1943-45.',
    levels: {
      primary: {
        cause: 'Poland had been defeated and occupied, but its soldiers and leaders were still fighting outside the country.',
        what: 'A Polish government was formed in Paris in September 1939 and was recognised by Britain and France.',
        consequence: 'Poland still had a government that other countries accepted, and Polish soldiers kept fighting under its authority.',
      },
      secondary: {
        cause: 'The occupation destroyed Poland’s institutions at home, while the Allied powers still needed a Polish state to fight for.',
        what: 'Sikorski headed a coalition government abroad; after the fall of France it moved to London, where it directed the underground state and the Polish forces in the west.',
        consequence: 'It preserved legal continuity but had little bargaining power: Poland’s frontiers were settled at Yalta and Potsdam without its government’s agreement.',
      },
      university: {
        cause: 'The government-in-exile is the clearest case of the distinction between a state’s legal existence and its territory: Poland never ceased to be recognised, even though its borders were redrawn by two victorious neighbours.',
        what: 'Its authority rested on Allied recognition and on the underground administration at home, not on control of Polish soil, and that weakness mattered when Soviet-backed institutions were set up in 1944.',
        consequence: 'The dispute over which Polish government represented the country was one of the first open breaches in the wartime alliance, and it remains a central subject of Polish postwar memory.',
      },
    },
  },
  {
    id: 'atlantic_charter',
    date: '1941-08-14',
    precision: 'day',
    title: 'The Atlantic Charter is issued',
    kind: 'politics',
    fronts: ['politics', 'atlantic'],
    countries: ['United Kingdom', 'United States'],
    figures: ['churchill', 'roosevelt'],
    note: 'Roosevelt and Churchill met in Placentia Bay, Newfoundland, aboard USS Augusta and HMS Prince of Wales, and issued a joint declaration of eight principles on 14 August 1941. It was a statement of common purpose, not a treaty, and deliberately left the question of how far its promises of self-determination applied to the British and French empires to later argument.',
    levels: {
      primary: {
        cause: 'Britain was fighting Germany and wanted the United States openly on its side, even before America entered the war.',
        what: 'The British and American leaders met at sea and issued a list of eight aims for the world after the war.',
        consequence: 'The two countries now said publicly what they wanted, and other Allied countries later signed up to the same aims.',
      },
      secondary: {
        cause: 'Lend-Lease and the Atlantic naval war had already made the United States a partner in all but name; the declaration put that partnership into words.',
        what: 'The eight points promised no territorial gain, self-determination, economic cooperation, disarmament and a general system of security after the war.',
        consequence: 'The Charter fed into the Declaration by United Nations of January 1942 and ultimately into the United Nations Charter; it also raised expectations among colonial peoples that Britain could not satisfy.',
      },
      university: {
        cause: 'The Charter was a coalition document with two audiences: it reassured the British public that America was committed, and it reassured Washington that Britain was not fighting for imperial restoration.',
        what: 'Churchill later argued that self-determination applied only to states occupied by Germany, while Roosevelt read it more widely; the ambiguity was present in the text from the start.',
        consequence: 'Whether the Charter created postwar obligations or merely stated aspirations is still argued, but its language was used by independence movements from India to Africa within a year.',
      },
    },
  },
  {
    id: 'declaration_by_united_nations',
    date: '1942-01-01',
    precision: 'day',
    title: 'Twenty-six states sign the Declaration by United Nations',
    kind: 'alliance',
    fronts: ['politics'],
    countries: ['United Kingdom', 'United States', 'Soviet Union', 'Poland', 'France'],
    figures: ['roosevelt', 'churchill'],
    note: 'Signed in Washington on 1 January 1942 by twenty-six states, the declaration bound them to the Atlantic Charter’s purposes, to use their full resources against the Axis, and not to conclude a separate peace. The name "United Nations" was used here for the first time in its wartime sense; the organisation founded in 1945 grew out of this coalition.',
    levels: {
      primary: {
        cause: 'The countries fighting Germany, Italy and Japan needed one public promise that they would stay together.',
        what: 'On 1 January 1942 twenty-six countries signed a declaration promising not to make a separate peace.',
        consequence: 'They called themselves the United Nations, the name the postwar organisation later took.',
      },
      secondary: {
        cause: 'After Pearl Harbor and Germany’s declaration of war on the United States, the coalition needed a formal statement of common war aims.',
        what: 'The declaration tied the signatories to the Atlantic Charter and to fighting until the Axis was defeated, with no separate negotiations.',
        consequence: 'It turned a set of bilateral alliances into a named coalition and provided the language and membership base for the United Nations after the war.',
      },
      university: {
        cause: 'The declaration was as much about preventing a repeat of 1918, when separate settlements and withdrawn commitments shaped the peace, as about winning the war.',
        what: 'The signatories ranged from the great powers to states in exile, and later governments joined as the war widened; the wording bound governments rather than parliaments.',
        consequence: 'The coalition’s unity should not be overstated — disagreements over Poland, the Mediterranean and the timing of the second front were constant — but the no-separate-peace pledge held, which mattered for the settlement that followed.',
      },
    },
  },


  {
    id: 'aktion_t4',
    date: '1939-10-01',
    precision: 'month',
    title: 'The “euthanasia” programme begins its main phase',
    kind: 'war_crime',
    fronts: ['home'],
    countries: ['Germany', 'Austria'],
    note: 'Hitler authorised the killing of disabled patients in October 1939, in a document backdated to 1 September, and the programme took its name from the Berlin address of its headquarters, Tiergartenstraße 4. The killing centres and the personnel who staffed them supplied the gas vans and the method later used at Chełmno; an official halt was ordered on 24 August 1941, though killings continued in other forms. Historians dispute how far the programme was a direct rehearsal for the extermination of the Jews and how far an independent enterprise in Nazi racial policy.',
    levels: {
      primary: {
        cause: 'The Nazi regime believed that disabled people were a burden and had promoted the idea that some lives were not worth living.',
        what: 'From October 1939 doctors and nurses in Germany killed thousands of patients in specially set up centres, using gas.',
        consequence: 'The same methods and some of the same staff were later used to kill Jews in occupied Poland.',
      },
      secondary: {
        cause: 'The regime’s racial ideology and its wish to free resources for the war drove a programme that began with children and then extended to adults.',
        what: 'Six killing centres operated in Germany and Austria; patients were transferred from hospitals under deception and killed in gas chambers disguised as showers.',
        consequence: 'A formal stop in August 1941 did not end the practice, and the technical and organisational experience passed directly into the killing centres of Operation Reinhard.',
      },
      university: {
        cause: 'T4 is central to the argument about how the Holocaust was made possible: the machinery of killing was created in Germany against German victims before it was turned on Jews in the occupied east.',
        what: 'The programme was never a secret from the relevant ministries or from local clergy, and protests did reach the regime; the August 1941 halt was a response to publicity and public unease rather than a change of principle.',
        consequence: 'The debate is over continuity, not chronology: T4 did not itself decide the Final Solution, but without its staff, transport arrangements and deception methods the later camps would have had to invent them.',
      },
    },
  },
  {
    id: 'second_vienna_award',
    date: '1940-08-30',
    precision: 'day',
    title: 'The Second Vienna Award transfers northern Transylvania',
    kind: 'politics',
    fronts: ['politics', 'balkans'],
    countries: ['Romania', 'Hungary', 'Germany', 'Italy'],
    note: 'Germany and Italy arbitrated the disputed frontier between Romania and Hungary at Vienna on 30 August 1940, awarding northern Transylvania, with a substantial Hungarian and Jewish population, to Hungary. Romania had no practical means of refusal after the Soviet annexation of Bessarabia in June; the grievance drove Romanian politics towards the German alliance and helps explain the switch of 23 August 1944.',
    levels: {
      primary: {
        cause: 'Hungary wanted back land it had lost after the First World War, and Germany and Italy wanted to keep both countries on their side.',
        what: 'The German and Italian foreign ministers met in Vienna and gave northern Transylvania to Hungary on 30 August 1940.',
        consequence: 'Romania lost a large region and never forgave the decision, even while it stayed allied to Germany.',
      },
      secondary: {
        cause: 'The First Vienna Award of 1938 had already returned Slovak territory to Hungary; the Romanian defeat of 1940 left Bucharest unable to resist a second arbitration.',
        what: 'A roughly defined zone of northern Transylvania was transferred, followed by population exchanges, influxes of refugees and acts of violence against Jews in the transferred area.',
        consequence: 'The award did not settle the frontier question, it stored it up: recovering the lost territory became a Romanian war aim, achieved in 1944 only through a change of alliance.',
      },
      university: {
        cause: 'The award is an example of Axis "arbitration" as an instrument of empire: the two dictatorships settled a dispute between smaller states by depriving one of them.',
        what: 'The boundary was drawn with little regard for local economic connections, and both states treated the decision as temporary; minorities on both sides were expelled or killed.',
        consequence: 'Because the settlement was imposed rather than negotiated, it weakened Romanian commitment to the Axis. Any account of Romania’s 1944 switch that ignores the Vienna awards misses a durable cause.',
      },
    },
  },
  {
    id: 'vichy_jewish_statute',
    date: '1940-10-03',
    precision: 'day',
    title: 'Vichy enacts its first Jewish Statute',
    kind: 'politics',
    fronts: ['home'],
    countries: ['France'],
    figures: ['petain'],
    note: 'The law of 3 October 1940, promulgated by the Vichy government, defined who counted as a Jew and excluded Jews from public office, the professions, the press and the army; a second statute followed in June 1941. It was French legislation, not a German order, and it made the later deportations administratively possible. See Paxton, Vichy France: Old Guard and New Order, and Marrus and Paxton, Vichy France and the Jews.',
    levels: {
      primary: {
        cause: 'The new French government wanted to show Germany that it was building a new order of its own.',
        what: 'On 3 October 1940 Vichy passed a law that removed Jewish people from many jobs and public life.',
        consequence: 'French officials now had a legal definition of who was a Jew, which made later exclusion and deportation easier.',
      },
      secondary: {
        cause: 'Vichy’s "National Revolution" sought to reshape French society, and antisemitic legislation was presented as a domestic initiative rather than a concession to the occupier.',
        what: 'The statute excluded Jews from the civil service, the armed forces, teaching, journalism and other professions, and required a census of Jewish populations.',
        consequence: 'The law created the registers and categories used in the round-ups of 1942 and 1943; Vichy thus bears direct responsibility for the machinery of persecution.',
      },
      university: {
        cause: 'The statute is the decisive evidence against the old claim that Vichy merely shielded France from worse German demands: the initiative for this law was French.',
        what: 'Its definition was racial rather than religious and was more sweeping than the rules applied in the occupied zone at first; a second statute in June 1941 widened it further.',
        consequence: 'The argument among historians is about motive — opportunistic collaboration, ideological conviction or a mixture — not about authorship. What is not in doubt is that French administration carried it out.',
      },
    },
  },


  {
    id: 'italian_racial_laws',
    date: '1938-11-17',
    precision: 'day',
    title: 'Italy’s racial laws are enacted',
    kind: 'politics',
    fronts: ['home'],
    countries: ['Italy'],
    figures: ['mussolini'],
    note: 'Decrees of 17-18 November 1938, usually called the Leggi Razziali, removed Italian Jews from public office, teaching, the professions and many forms of economic life, and prohibited intermarriage; a census and a body of racial doctrine accompanied them. The laws were enacted by the Fascist regime before Italy entered the war and were enforced with varying enthusiasm; after the armistice some Jews were protected by Italians, while the German occupiers and the Italian Social Republic resumed deportations.',
    levels: {
      primary: {
        cause: 'Mussolini’s government wanted to copy Nazi Germany’s racial policies and blame Jews for its problems.',
        what: 'In November 1938 new laws took away Italian Jews’ jobs, rights and property.',
        consequence: 'Thousands of Italian Jews were driven from public life and had to hide or leave the country.',
      },
      secondary: {
        cause: 'The alliance with Germany and Mussolini’s wish to present Fascism as a revolutionary movement pushed the regime towards a policy it had not previously needed.',
        what: 'The decrees excluded Jews from schools, universities, government and the professions, restricted property and marriage, and required registration.',
        consequence: 'Italian Jews lost their livelihoods and some fled; when Germany occupied northern Italy in 1943 the deportations began from a community that had already been registered and impoverished.',
      },
      university: {
        cause: 'The suddenness of the laws in 1938, after two decades in which many Italian Jews had been integrated into Fascist society, makes them a case study in how a regime can manufacture a racial policy for strategic ends.',
        what: 'Italian antisemitism was never identical to the German version — the regime’s own racial doctrine was inconsistent, and enforcement varied — but the practical effect of exclusion and registration was the same.',
        consequence: 'Postwar Italian accounts long stressed that many Italians sheltered Jews, which is true; the laws of 1938 and the collaboration of the Italian Social Republic are the other half of the same history.',
      },
    },
  },
  {
    id: 'de_gaulle_appeal',
    date: '1940-06-18',
    precision: 'day',
    title: 'De Gaulle’s appeal from London',
    kind: 'politics',
    fronts: ['politics', 'home'],
    countries: ['France', 'United Kingdom'],
    figures: ['de_gaulle'],
    note: 'On 18 June 1940, the day after Pétain’s armistice broadcast, Charles de Gaulle spoke on the BBC in London and told the French not to accept defeat; only a small minority heard the broadcast at the time. He was not yet the recognised leader of Free France — that position was built over the following years and confirmed in 1944 — and the appeal mattered first as a claim that France could continue the war from abroad.',
    levels: {
      primary: {
        cause: 'France had signed an armistice and its government told the French people to stop fighting.',
        what: 'A French general in London, Charles de Gaulle, spoke on the radio and told the French not to give up.',
        consequence: 'A few people heard him at first, but his appeal became the beginning of Free France.',
      },
      secondary: {
        cause: 'De Gaulle had been a junior minister in the French government and had flown to London rather than accept the armistice; Britain needed a French political figure around which to build a resistance force.',
        what: 'His broadcast of 18 June argued that France had lost a battle, not the war, and called on soldiers and civilians to continue the fight.',
        consequence: 'Free France grew slowly and was weakened by quarrels with other French factions, but de Gaulle’s claim to speak for France was eventually accepted by the Allies in 1944.',
      },
      university: {
        cause: 'The appeal is a founding act of political legitimacy as much as a military event: it asserted that a government that had signed an armistice no longer represented the French Republic.',
        what: 'The speech was poorly transmitted and little heard; its importance was created afterwards, through the institutions of Free France, the Resistance and the liberation of Paris in August 1944.',
        consequence: 'Historians disagree about how much de Gaulle represented French opinion in 1940 and how much he imposed himself with Allied backing; both are needed to explain why his claim eventually prevailed.',
      },
    },
  },


  {
    id: 'neutrality_act_1939',
    date: '1939-11-04',
    precision: 'day',
    title: 'The 1939 Neutrality Act permits “cash and carry”',
    kind: 'politics',
    fronts: ['politics', 'atlantic'],
    countries: ['United States', 'United Kingdom', 'France', 'Germany'],
    note: 'Roosevelt signed the Neutrality Act of 4 November 1939 after Congress debated the earlier embargo for months. It repealed the arms embargo and allowed belligerents to buy American war materiel if they paid in cash and carried it in their own ships — a rule that favoured Britain and France, whose navies controlled the Atlantic. The 1935-37 Acts had been intended to keep the United States out of foreign wars; the 1939 revision moved American policy towards open support short of belligerency.',
    levels: {
      primary: {
        cause: 'American law had forbidden arms sales to countries at war, but Britain and France needed American supplies.',
        what: 'In November 1939 President Roosevelt signed a law allowing countries to buy American weapons if they paid cash and carried them away themselves.',
        consequence: 'Britain and France could now buy war supplies from the United States, while America still said it was neutral.',
      },
      secondary: {
        cause: 'The arms embargo of the 1930s had treated aggressor and victim alike, which many in the United States came to think favoured Germany.',
        what: 'The new act removed the embargo but kept the formal machinery of neutrality: cash payment and transport in the buyer’s ships kept American vessels and credit out of the war.',
        consequence: 'It helped Britain and France in the first winter of the war and prepared the way for Lend-Lease in March 1941; American neutrality was narrowing by stages.',
      },
      university: {
        cause: 'The revision is best read as the point at which neutrality became a device for managing involvement rather than avoiding it.',
        what: 'Congressional support was built on the promise that no American ships or soldiers would be at risk, which is why the cash-and-carry formula mattered as much as the repeal of the embargo.',
        consequence: 'The change favoured the side that held the sea, and could not have helped Germany; its practical effect was to make the Atlantic campaign and the later Lend-Lease debates part of American domestic politics.',
      },
    },
  },
  {
    id: 'destroyers_for_bases',
    date: '1940-09-03',
    precision: 'day',
    title: 'Fifty American destroyers go to Britain',
    kind: 'alliance',
    fronts: ['politics', 'atlantic'],
    countries: ['United States', 'United Kingdom'],
    figures: ['roosevelt', 'churchill'],
    note: 'On 3 September 1940 the United States transferred fifty First World War-era destroyers to the Royal Navy in exchange for ninety-nine-year leases on bases in the Caribbean and Newfoundland. The destroyers were old and several needed extensive refit, but the deal gave Britain escort capacity at a critical moment and gave Roosevelt basing rights in the western Atlantic. It was an executive agreement rather than a treaty, which raised constitutional objections in the United States.',
    levels: {
      primary: {
        cause: 'Britain urgently needed ships to protect its supply lines, and the United States wanted to help without joining the war.',
        what: 'America gave Britain fifty old destroyers in exchange for the use of naval bases in the Atlantic.',
        consequence: 'Britain gained escorts for its convoys, and the United States gained bases closer to the Atlantic shipping routes.',
      },
      secondary: {
        cause: 'After the fall of France, the Royal Navy was short of escorts while German submarines were ranging further west.',
        what: 'Roosevelt used an executive agreement to exchange the ships for base leases, bypassing a Congress that was still reluctant to aid belligerents openly.',
        consequence: 'The deal alarmed Germany and drew the United States further into the Atlantic war; within months Congress passed Lend-Lease.',
      },
      university: {
        cause: 'The destroyers were of limited military value and the bases were the real prize: they let the United States Navy plan convoy escort and air patrols in waters previously beyond its reach.',
        what: 'The legal device mattered as much as the ships; using an executive agreement avoided the treaty clause and set a pattern for later presidential initiatives.',
        consequence: 'German declarations that the transaction made the United States a belligerent were propaganda, but the undeclared naval war in the Atlantic was real by the autumn of 1941.',
      },
    },
  },

];
