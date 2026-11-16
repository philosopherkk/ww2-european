import type { HistoricalFigure } from './types';

/**
 * Russia, Poland and Finland: the imperial officers and ministers who carried
 * the war, the men who took it out of the war, and the two soldiers who built
 * new armies on the wreckage in 1918.
 */
export const FIGURES_EAST: HistoricalFigure[] = [
  {
    id: 'nicholas_ii',
    name: 'Nicholas II',
    birthDeath: '1868-1918',
    role: 'Emperor of Russia, 1894-1917; Supreme Commander-in-Chief, August 1915 to March 1917',
    country: 'Russia',
    bloc: 'entente',
    bio: {
      primary: 'Nicholas II was the last emperor of Russia, tsar from 1894 until he gave up the throne in March 1917. In 1915 he took personal command of the armies at the front, so that the defeats and the food shortages at home came to be blamed on him.',
      secondary: 'He became tsar in November 1894 and held on to autocratic power, granting an elected parliament, the Duma, only after the revolution of 1905 and then restricting its rights. From August 1915 he directed the war from the Stavka at Mogilev, some 600 kilometres from Petrograd, which left the empress to face the court, the Duma and the bread queues while the railways failed to keep the cities fed. In March 1917 his front commanders told him that the army would not fight for the dynasty; he abdicated in favour of his brother, and he and his family were shot at Yekaterinburg on 17 July 1918.',
      university: 'Interpretations of Nicholas have swung twice. Liberal and Soviet writing made his personality the cause of everything: weak, obstinate, “Bloody Nicholas”. Recent work pushes the explanation into the structure of the regime — an autocracy that could function only through his personal authority, a Duma conceded in 1905 and then hollowed out, and an alliance commitment that demanded a war no Russian plan was built to last — and historians such as Dominic Lieven ask whether any emperor could have conceded the Duma’s demand for a “government of public confidence” without ceasing to be an autocrat. His assumption of supreme command in 1915, long read as a blunder, was pressed on him by his ministers and by the grand dukes, so the sources point to a calculation about dynastic prestige rather than ignorance of the risk. Edward Radzinsky’s sympathetic biography has not closed the argument, because the evidence is fullest on his letters and thinnest on the decisions taken in consultation.',
    },
  },
  {
    id: 'sazonov',
    name: 'Sergey Sazonov',
    birthDeath: '1860-1927',
    role: 'Minister of Foreign Affairs, November 1910 to July 1916',
    country: 'Russia',
    bloc: 'entente',
    bio: {
      primary: 'Sazonov was Russia’s foreign minister from 1910 to 1916. He was the minister in charge in July 1914, when Russia moved to defend Serbia and the crisis turned into a general war.',
      secondary: 'He had served in the Balkans before taking the ministry, and his aim was to keep the Slavic states tied to Russia while his country recovered from the defeat of 1905. He read Austria-Hungary’s attack on Serbia on 28 July 1914 as part of a design to push Russia out of the Balkans; the partial mobilisation ordered on 25 July had no workable plan behind it, and on 30 July the tsar confirmed a general mobilisation, after which Germany declared war on 1 August. Sazonov stayed at his post through two years of war, won his allies’ agreement in March 1915 to Russian occupation of the Straits after victory, and was dismissed on 10 July 1916 after proposing autonomy for Poland.',
      university: 'Sazonov stands at the centre of the July Crisis argument. Christopher Clark treats the general mobilisation of 30 July 1914 as one of the most critical decisions of the crisis, which loads weight onto the Russian side of the ledger; the older German case, renewed by Fritz Fischer’s school, said the same thing in accusatory form, while the apologists — Sazonov first among them in Fateful Years 1909-1916, published in 1928 — insist that his object throughout was to reduce the temperature in the Balkans. The record will not settle it: the meetings in which the tsar changed his mind are documented at second hand, the army had no contingency for a partial mobilisation, and the minister’s own account was written in emigration by a man defending his reputation. What the sources do bear out is where policy moved after 1915, to the Stavka and the empress’s circle; his dismissal over a Polish autonomy scheme is the clearest evidence of that.',
    },
  },
  {
    id: 'ruzsky',
    name: 'Nikolai Ruzsky',
    birthDeath: '1854-1918',
    role: 'Commander of the Northwestern Front, September 1914 to March 1915; commander of the Northern Front, 1915-1917',
    country: 'Russia',
    bloc: 'entente',
    bio: {
      primary: 'Ruzsky was a Russian general who commanded the Northwestern Front, the armies facing Germany, during the first year of the war. He was at Pskov in March 1917, where the tsar’s train was stopped and the throne was given up.',
      secondary: 'He led the Third Army in Galicia in the opening weeks and then took the Northwestern Front from September 1914. The fighting on the Vistula and at Łódź went well until a German corps escaped the encirclement and he was ordered to fall back; he used that failure to have two of his own army commanders, Rennenkampf and Scheidemann, removed. Invalided out of the front in March 1915, he went on to command the Northern Front, where he avoided decisive action, and in March 1917 he accepted the generals’ judgement that the army would not defend the dynasty. The new government relieved him of command; he was arrested in 1918 and died that October.',
      university: 'The sources on Ruzsky are staff work, orders and memoirs, and they are thin on intention: the diary of the minister Frederiks, who was present at Pskov, accuses him of having forced a wavering tsar to sign the abdication manifesto, while his own apologists present a man merely reporting what the front commanders had said. Historians of the Eastern Front read his command as evidence in the argument about Russian generalship in 1914-15 — competent staff method, no capacity for exploitation, and a habit of attributing failure to subordinates, of which the removal of Rennenkampf and Scheidemann at Sedlets is the standard exhibit. The retreat after Łódź in November 1914 is the test case, described both as a thrown encirclement and as a necessary answer to a German breakout. His removal in 1917 matters in a different way: the front commanders whose advice ended the monarchy belonged to his generation, and the army’s democratisation swept most of them aside within months.',
    },
  },
  {
    id: 'brusilov',
    name: 'Alexei Brusilov',
    birthDeath: '1853-1926',
    role: 'Commander of the Eighth Army, 1914 to March 1916, and of the South-Western Front, 1916-1917; Supreme Commander-in-Chief, June to August 1917',
    country: 'Russia',
    bloc: 'entente',
    bio: {
      primary: 'Brusilov was the Russian general who led the great attack on the Austro-Hungarian armies in Galicia in June 1916, the biggest Russian victory of the war. He was briefly commander-in-chief of the whole Russian army in 1917.',
      secondary: 'His plan was to attack at several points along a very wide front at once, with troops assembled close to the enemy’s wire and rehearsing the assault in secret, so that the Austro-Hungarian defenders were overrun before their artillery could react. Lutsk fell within days, and by 11 June one Austro-Hungarian army had lost 205,000 men, of whom 150,000 were prisoners. Russian losses were also enormous, and the attack died away without a decisive breakthrough because the Stavka would not release reserves; as commander-in-chief from June 1917 Brusilov tried to make a revolutionary army attack again in July, and when it collapsed he was replaced by Kornilov. He later put his experience at the disposal of the Red Army until 1924.',
      university: 'Whether the offensive of 1916 “broke” Austria-Hungary is the live question. Graydon Tunstall calls it the worst crisis of the war for the Habsburg armies and the Entente’s greatest victory; against that, the Dual Monarchy’s units were rebuilt round German cadres and fought on until November 1918, so what the sources best support is irreparable loss rather than a knock-out blow — the Austro-Hungarian Seventh Army lost 76,200 of its 194,200 men by 8 June alone. The second argument concerns Russia: casualties given as between 500,000 and 1,000,000, and the fighting that consumed the reserves meant for 1917, are held by many historians to have prepared the army’s disintegration, while others object that the offensive of 1917 failed in the rear, in the soldiers’ committees, and not in the trench. Source criticism sits under both: Denikin’s memoirs made Brusilov a ditherer who broke down at the critical moment in 1916, and Soviet editing of Brusilov’s own text produced the more flattering figure that recent work is reading back against the archives.',
    },
  },
  {
    id: 'alekseev_mikhail',
    name: 'Mikhail Vasilyevich Alekseev',
    birthDeath: '1857-1918',
    role: 'Chief of staff of the South-Western Front, 1914; commander of the Northwestern Front, 1915; chief of staff of the Stavka, 1915-1917 and 1917; Supreme Commander-in-Chief, March to May 1917',
    country: 'Russia',
    bloc: 'entente',
    bio: {
      primary: 'Alekseev was the Russian general who ran the Stavka’s operations for most of the war, first as chief of staff to a front and then as chief of staff to the tsar. He became commander-in-chief in 1917, but he could not stop the army from falling apart.',
      secondary: 'He planned the offensive into Galicia in 1914 as chief of staff of the South-Western Front, commanded the Northwestern Front through 1915, and from September 1915 was chief of staff at the Stavka, which made him the effective author of Russian strategy and the man who moved reserves between the fronts. He advised Nicholas to abdicate in March 1917, and the Provisional Government kept him as commander-in-chief because it needed a general of standing who would go on fighting; but orders now had to pass through soldiers’ committees, the offensive of June 1917 failed, and he was replaced by Brusilov, returning later that summer as Kerensky’s chief of staff and arresting Kornilov when that affair collapsed. After the Bolsheviks took power he went south to the Don, where he began the Volunteer Army, and he died of heart failure at Yekaterinodar on 8 October 1918.',
      university: 'The identity of this entry has to be stated first, because the roster calls him Nikolai Vasilievich Alekseev (1856-1918) and no such Imperial general held these posts: the chief of staff at the Stavka under Grand Duke Nicholas from August 1914 to September 1915 was Nikolai Yanushkevich, and the man who succeeded him, who became commander-in-chief in 1917 and who also founded the Volunteer Army, is one person, Mikhail Vasilyevich Alekseev (1857-1918), who died at Yekaterinodar and not in Moscow. The argument that concerns him is the scale and meaning of the army’s disintegration in 1917. The officers’ memoir literature laid it on Petrograd Soviet Order No. 1 of March 1917 and on the soldiers’ committees that gutted their authority; work that reads soldiers’ resolutions and letters instead treats the disintegration as a strike by men who had already decided the war was not theirs, in which case no commander could have prevented it, whatever orders the Stavka issued. Order No. 1 repays the close reading this dispute requires: it put weapons at the disposal of unit committees and made obedience to the officers conditional on the Soviet’s countersign, while, as N. John Boyd showed, it did not in fact provide for the election of officers, a charge that later histories repeated for decades. What the records of his own office establish most securely is Alekseev’s purpose: he meant to keep the army at war for the Entente, which is why the Stavka undertook the offensive of 1916 and why he could not make terms with the committees in 1917.',
    },
  },
  {
    id: 'kerensky',
    name: 'Alexander Kerensky',
    birthDeath: '1881-1970',
    role: 'Minister of War from May 1917; Minister-Chairman of the Provisional Government, July to November 1917',
    country: 'Russia',
    bloc: 'entente',
    bio: {
      primary: 'Kerensky was a socialist lawyer who became the best-known minister in the Russian government after the tsar fell in 1917, and its head in the last three months before the Bolsheviks took power. He insisted that Russia should go on fighting the war.',
      secondary: 'He was vice-chairman of the Petrograd Soviet and a minister in every coalition cabinet from March 1917, taking the war ministry after the crisis of early May, when Russia’s allies were promised that the army would attack. He became head of government in July and launched the offensive of 1 July to prove that a free army would still fight; it broke up within days, and the retreat turned into a general refusal to obey. He then appointed himself supreme commander-in-chief, governed through a five-man directory, and was overthrown on 7 and 8 November almost without a shot being fired; he rode out to Pskov to gather loyal troops, failed, and left Russia in exile.',
      university: 'The charges against him are opposites, which is why he stays contested: that he was a vain dilettante who manufactured the Kornilov “plot” to save himself, put most sharply by Richard Pipes, or an honest democrat trapped between an army that would not attack and parties that would not compromise. A. J. P. Taylor’s older version had him first encouraging Kornilov and then losing his nerve; the careful reconstructions of the affair rest instead on telegrams sent at speed by men who already distrusted each other, with Kerensky writing his long defence decades afterwards and Kornilov’s partisans writing in emigration. What the sources do bear out is his aim, which was to carry the war on so that a revolutionary Russia could claim a place at the peace, and to hold the country together until a constituent assembly settled its government. Both plans were taken out of his hands: the army by its committees in July and August 1917, and the assembly by the Bolsheviks, who dissolved it in January 1918 when it refused to surrender its powers.',
    },
  },
  {
    id: 'kornilov',
    name: 'Lavr Kornilov',
    birthDeath: '1870-1918',
    role: 'Supreme Commander-in-Chief, August to September 1917; commander of the Eighth Army, April to August 1917',
    country: 'Russia',
    bloc: 'entente',
    bio: {
      primary: 'Kornilov was a Russian general who became commander-in-chief of the army in the summer of 1917 and whose march towards Petrograd collapsed in a few days. He was arrested, escaped, and was killed leading troops in the civil war of 1918.',
      secondary: 'He was famous for escaping from Austrian captivity in 1916, and as commander of the Eighth Army from April 1917 he demanded a single military authority over both the front and the capital. Made commander-in-chief after the failure of the June offensive, he pressed for the death penalty at the front and won support among officers and moderates who wanted the soviets broken; in late August he ordered a corps towards Petrograd, and Kerensky, convinced that this was a march on the government, dismissed him. The column was stopped without fighting by railway workers, soldiers’ committees and the Bolsheviks whom the government had just released and armed, and the affair left Kerensky with no army to back him in November and the Bolsheviks still holding the weapons they had been given.',
      university: 'Whether there was a Kornilov plot is the question the affair is used to test. The version Kerensky and liberal witnesses left made him a would-be dictator moving on the capital; Richard Pipes argued the opposite, that there was a “Kerensky plot” to destroy a general whom everyone expected to lead a counter-revolution, and A. J. P. Taylor that the prime minister encouraged the move until he saw that it would swallow him. The documents support neither case: both men claimed the other had authorised the plan, messages were carried personally by a minister who mistrusted both, and Kornilov advanced because he had come to believe that the Bolsheviks already held the government, which is how the most careful studies now describe it. Two things are not in dispute: the affair made the Bolsheviks the acknowledged defenders of Petrograd and put arms in their hands before October, and it convinced most officers that no government would defend military authority, a conclusion that shaped the civil war. His own account of events is a prisoner’s defence and has to be read as one; he was killed by a shell at Yekaterinodar on 13 April 1918.',
    },
  },
  {
    id: 'lenin',
    name: 'Vladimir Lenin',
    birthDeath: '1870-1924',
    role: 'Leader of the Bolshevik Party; Chairman of the Council of People’s Commissars from November 1917',
    country: 'Russia',
    bloc: 'opposition',
    bio: {
      primary: 'Lenin led the Bolshevik Party in 1917 and took Russia out of the war. His party seized power in Petrograd in November 1917, and he headed the new government until his death in 1924.',
      secondary: 'He reached Petrograd from exile in April 1917 and in his April Theses refused all support for the Provisional Government and called for the soviets to take the whole power, when almost nobody in his own party expected him to say it. After the failed July rising he went into hiding, and in October he argued the party leadership into an insurrection timed to coincide with the soviets’ own congress, which gave the seizure of power the look of a soviet act. His government’s first decrees offered peace and land; when the constituent assembly elected in November refused to give up its authority he had it dissolved in January 1918, and in March he accepted Germany’s harsh terms at Brest-Litovsk to buy the time his regime needed.',
      university: 'The argument over October is the argument about Lenin. One school, with Richard Pipes its most uncompromising version, sees a disciplined minority capturing state power at a moment when the majority wanted something different, and rests the case on the constituent assembly election, in which the Socialist-Revolutionaries took the peasant majority and the Bolsheviks were strong mainly in the cities and among the soldiers of the Western Front. The other, in different ways in Orlando Figes’s social history and in Alexander Rabinowitch’s studies of Petrograd, sees a revolution from below whose institutions — soviets, factory committees, soldiers’ delegations — the Bolsheviks led because they were the only party promising peace, land and workers’ control. The evidence supports neither case as neatly as either claims: some 47 million people voted in that election, yet the turnout is given as about 55 per cent by Radkey and about 64 per cent by Protasov, many distant districts voted late or not at all, and the party’s strength in the soviets and garrisons was concentrated exactly where power was decided. What the records do settle is the decision rather than the support: the Central Committee’s vote for an armed rising on 10 October 1917, carried against Zinoviev and Kamenev, and the near-bloodless seizure of the capital’s hubs by the soviet’s own Military Revolutionary Committee.',
    },
  },
  {
    id: 'trotsky',
    name: 'Leon Trotsky',
    birthDeath: '1879-1940',
    role: 'People’s Commissar for Foreign Affairs, November 1917 to March 1918; People’s Commissar for Military Affairs from 14 March 1918',
    country: 'Russia',
    bloc: 'opposition',
    bio: {
      primary: 'Trotsky was a revolutionary who helped Lenin’s party take power in Russia in 1917 and then negotiated the peace that took Russia out of the war. He also built the Red Army, the army of the new government.',
      secondary: 'As foreign commissar he replaced Joffe as head of the delegation at Brest-Litovsk on 22 December 1917, and when the Germans insisted on keeping Polish, Lithuanian and Courland territory he withdrew on 10 February 1918 with an announcement that the war was over for Russia without signing anything, betting that German workers would stop their own government. Germany answered by advancing for three days without a reply to the Soviet radiogram, and the government then accepted terms far worse than those it had refused, signed on 3 March 1918, after which Trotsky left the foreign ministry. He took charge of the army instead, and after the Czechoslovak Legions’ revolt in May–June 1918 he answered the loss of most of Russia’s territory with a full mobilisation which raised the Red Army from under 300,000 men to a million by October, using conscription, political commissars to countersign orders, and former imperial officers supervised as “military specialists”.',
      university: 'Whether October 1917 was a coup or a mass movement is argued through Trotsky twice over, because he is both a subject of the debate and one of its principal sources. He himself presented the rising as a precise technical act carried out by the Petrograd Soviet’s Military Revolutionary Committee under his chairmanship, and Stalin’s summary of Trotsky’s part, published in Pravda on 6 November 1918, credited him with winning the garrison before the party’s coup; Richard Pipes and other revisionists invert this into the case that a disciplined minority captured a state whose electorate had chosen somebody else, pointing to the constituent assembly returns in which the Bolsheviks were a minority nationally, while Alexander Rabinowitch’s studies of Petrograd show a party leading institutions — soviet, garrison, factory committees — in which a majority had already organised itself, so the coup and mass-movement readings are both flatter than the evidence. Source criticism decides much of the argument: his History of the Russian Revolution was written in exile as an argument with Stalin, and his 1918 practice of conscription, coerced specialists and party control shows a regime resting on claimed soviet majorities rather than on a vote. He kept the war commissariat until 1925.',
    },
  },
  {
    id: 'rasputin',
    name: 'Grigori Rasputin',
    birthDeath: '1869-1916',
    role: 'Mystic and faith healer in favour with the imperial family, from 1905 until his murder in December 1916',
    country: 'Russia',
    bloc: 'opposition',
    bio: {
      primary: 'Rasputin was a Siberian peasant who became a wandering religious man and won the friendship of the tsar’s family, because they believed he could ease the illness of their son Alexei. He stayed close to the empress for years, which made him many enemies, and a group of nobles killed him in Petrograd in December 1916.',
      secondary: 'He reached Saint Petersburg with a reputation as a starets and gained the family’s favour after 1905 on the strength of occasions when he appeared to stop the tsarevich’s bleeding. That hold over Alexandra protected him through police investigations, the hostility of ministers such as Stolypin, and a stabbing in 1914, and while the tsar was away at the front from 1915 it was widely said that he and the empress between them were deciding who got government posts. Prince Felix Yusupov, Vladimir Purishkevich and Grand Duke Dmitri Pavlovich, who believed that Rasputin’s influence over Alexandra endangered the monarchy, murdered him in the Yusupov palace on 17 December 1916 by the Russian calendar, 30 December by ours; his body was found under the ice of the Neva on 1 January, and after the tsar abdicated the Provisional Government had the body dug up and burned so that the grave could not become a rallying point.',
      university: 'The story that a mad monk and a German empress were running the Russian state rests on hostile testimony rather than on documents: its most forceful form is Purishkevich’s speech to the Duma in November 1916 that the tsar’s ministers had become marionettes whose strings Rasputin and Alexandra held, and Purishkevich was by then plotting to kill him. The recent biographical work treats the record with far more care — Douglas Smith calls Rasputin’s youth “a black hole about which we know almost nothing” while showing how many stories about it were invented after his rise, Joseph T. Fuhrmann finds the accusations of membership of the Khlyst sect unproven and dates the first request to pray for Alexei to October 1906 where Orlando Figes keeps the traditional November 1905 — and what can be established is influence over petitions, patronage and the empress’s feelings, not a traceable hand in policy; the one intervention of his own on the record is a telegram urging the tsar to stay out of war, sent in 1914. The same scepticism applies to the murder, which is known largely from Yusupov’s own account: the city autopsy surgeon Kosorotov found a single bullet, no trace of poison and no water in the lungs, so the man was already dead when he went into the river. Historians are on firmer ground on the effect than on the cause, since the consensus is that the scandal of Rasputin, whatever he actually did, discredited the dynasty in the eyes of the educated public, which was one reason so few stood up for it in February 1917.',
    },
  },
  {
    id: 'pilsudski_jozef',
    name: 'Józef Piłsudski',
    birthDeath: '1867-1935',
    role: 'Commander-in-Chief of the Polish forces from 11 November 1918; Provisional Chief of State, 1918-1922',
    country: 'Poland',
    bloc: 'co_belligerent',
    bio: {
      primary: 'Piłsudski was a Polish nationalist who believed that Poland’s independence had to be won by fighting, so in 1914 he raised Polish soldiers to fight alongside Austria-Hungary against Russia. In November 1918 he took power in Warsaw as Poland came back into existence after 123 years of partition.',
      secondary: 'He had predicted that a great war would destroy both the Russian Empire and the Central Powers, and he acted on it: on 27 August 1914 he formed the Polish Legions inside the Austro-Hungarian army and commanded their First Brigade himself, while the Polish Military Organisation he set up that August worked behind the Russian lines. After the Legions took over 2,000 casualties holding the line at Kostiuchnówka in mid-1916 he argued that Poles were fighting for a promise rather than a state, and the Central Powers answered with the proclamation of an independent Poland on 5 November 1916; he then became war minister in the Regency government, and when in July 1917 he refused to let his soldiers swear loyalty to the German kaiser he was arrested and taken to Magdeburg, his units were disbanded and his men handed to the Austro-Hungarian army. The Germans released him on 8 November 1918, hoping he would build a force friendly to them, and the Regency Council made him commander-in-chief on 11 November, the day he proclaimed a Polish state; he negotiated the orderly departure of more than 55,000 German soldiers who left their weapons behind, took the title Provisional Chief of State on 22 November, and issued his first orders on 12 November to support the Poles fighting in Lviv.',
      university: 'How to read his bargain with the Germans in 1918 is the awkward part of the Polish story, because the Entente recognised Poland through Roman Dmowski and Ignacy Paderewski at Paris, and to them a man whose Legions had fought for the Central Powers until 1917 was at best compromised. The sources make the exchange look deliberate rather than opportunistic: the 1914 prediction is documented, the demand for a Polish state after Kostiuchnówka was his own, and the July 1917 refusal of the oath, which cost him two years of imprisonment and gave him his standing, shows him treating the Central Powers as a means and then discarding them when they looked likely to lose, exactly as he had expected. His position in November was weak in ways the legend hides — he had no army to speak of, his authority rested on ex-Legionnaires and the Polish Military Organisation, he had been released by a collapsing Germany, and he heads off unrest by accepting a socialist-dominated cabinet that introduces the eight-hour day, free schooling and women’s suffrage. His forces repelled the Soviet army at Warsaw in August 1920.',
    },
  },
  {
    id: 'mannerheim_carl',
    name: 'Carl Gustaf Emil Mannerheim',
    birthDeath: '1867-1951',
    role: 'Military commander of the White Senate of Finland, January to May 1918',
    country: 'Finland',
    bloc: 'co_belligerent',
    bio: {
      primary: 'Mannerheim was a Finnish general who had spent his whole career in the Russian army, and early in 1918 he went home to lead the Whites in Finland’s civil war against the Reds. With German help he won, and his troops marched through Helsinki in May.',
      secondary: 'He was appointed commander of the White forces on 15 January 1918, when the Whites had little more than locally organised guards and the Reds held Helsinki, Tampere and most of southern Finland. He built a regular army out of the 1,450 battle-hardened Jägers who had been trained by Germany and the 84 Swedish volunteer officers on his staff, using their discipline to make ordinary White troops fight, and he chose to strike first at Tampere although it held nearly 15,000 armed Red Guards; the town fell after bitter fighting, German troops landed and took Helsinki in April, and the war ended on 15 May with his victory parade in Helsinki the next day. He resigned on 25 May 1918, having quarrelled with the Senate over German dominance in Finland and over his plan to march on Petrograd, though he later returned as the country’s regent and then as its field marshal and president.',
      university: 'The case that Mannerheim gave the Whites a regular army rather than a vengeful militia has to be read against his own staff’s orders, since in February 1918 the highest-ranking White staff set up a Desk of Securing Occupied Areas and issued the Instructions for Wartime Judicature, later called the Shoot on the Spot Declaration, which authorised field commanders to execute essentially anyone they thought dangerous, and since most of the White terror was centrally led whereas no comparable authorisation from the Red leadership has been found. The numbers are given in ranges because the records are uneven: roughly 9,000 Reds died from White terror against about 1,500 Whites from Red terror, with some 200 Reds shot per day between the end of April and the beginning of May, some 12,500 Red prisoners died of disease and starvation in the camps, and in total around 38,000 people died in a country of three million, which makes 1918 the deadliest civil conflict relative to population per month until Rwanda in 1994. Finnish writing about the war moved from a White account of a liberation to a more searching one in books published in 1960 by Veijo Meri, Paavo Haavikko and Paavo Rintala, and the arguments since have turned on whether the terror was the deliberate policy of the White leadership or the habit of unequipped troops who used political violence as a military weapon. The man himself is contested too, a lieutenant general of the Russian army who was distrusted for that past and for his poor Finnish, signed state papers as “Kustaa” to reassure doubters, and owed his victory in part to a German expeditionary force that left Finland temporarily a German protectorate.',
    },
  },
];
