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
      primary: 'Nicholas II was the last emperor of Russia, tsar from 1894 until he abdicated in March 1917. In ' +
        '1915 he took personal command of the armies at the front, so that the defeats and the food ' +
        'shortages at home came to be blamed on him.',
      secondary: 'He became tsar in November 1894 and kept autocratic power, granting the elected Duma only after ' +
        'the revolution of 1905 and then restricting its rights. From August 1915 he directed the war ' +
        'from the Stavka at Mogilev, 700 kilometres from Petrograd, leaving the empress to face the ' +
        'court, the Duma and the bread queues while the railways failed to feed the cities. In March 1917 ' +
        'front commanders told him the army would not fight for the dynasty; he abdicated in favour of ' +
        'his brother, and he and his family were shot at Yekaterinburg on 17 July 1918.',
      university: 'Interpretations of Nicholas have swung twice. Liberal and Soviet writing blamed his personality ' +
        'for everything: weak, obstinate, “Bloody Nicholas”. Recent work blames the regime: an autocracy ' +
        'that worked only through his personal authority, a Duma conceded in 1905 and then hollowed out, ' +
        'and an alliance that demanded a war no Russian plan could last. Dominic Lieven asks whether any ' +
        'emperor could have conceded the Duma’s demand for a “government of public confidence” without ' +
        'ceasing to be an autocrat. His assumption of supreme command in 1915, long read as a blunder, ' +
        'was pressed on him by ministers and grand dukes, so the sources show a calculation about ' +
        'dynastic prestige, not ignorance of the risk. Edward Radzinsky’s sympathetic biography has not ' +
        'closed the argument: the evidence is fullest on his letters and thinnest on decisions taken in ' +
        'consultation.',
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
      secondary: 'He had served in the Balkans, and meant to keep the Slavic states tied to Russia while it ' +
        'recovered from 1905. He read Austria-Hungary’s attack on Serbia on 28 July 1914 as a design to ' +
        'push Russia from the Balkans. The partial mobilisation of 25 July had no workable plan, and on ' +
        '30 July the tsar confirmed a general mobilisation. Germany declared war on 1 August. Sazonov won ' +
        'his allies’ agreement in March 1915 to a Russian occupation of the Straits after victory, and ' +
        'was dismissed on 10 July 1916 after proposing Polish autonomy.',
      university: 'Sazonov is central to the July Crisis argument. Christopher Clark treats the general ' +
        'mobilisation of 30 July 1914 as one of the crisis’s most critical decisions, which weights the ' +
        'Russian side; the older German case, renewed by Fritz Fischer’s school, said the same ' +
        'accusingly, while the apologists, Sazonov first among them in Fateful Years 1909-1916, published ' +
        'in 1928, insist his object was to cool the Balkans. The record will not settle it: the meetings ' +
        'in which the tsar changed his mind are second-hand, the army had no plan for a partial ' +
        'mobilisation, and his own account was written in emigration by a man defending his reputation. ' +
        'What the sources bear out is that policy moved after 1915, to the Stavka and the empress’s ' +
        'circle; his dismissal over a Polish autonomy scheme is the clearest evidence.',
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
      secondary: 'He led the Third Army in Galicia in the opening weeks, then took the Northwestern Front from ' +
        'September 1914. Fighting on the Vistula and at Łódź went well until a German corps escaped and ' +
        'he was ordered back; he used the failure to remove two army commanders, Rennenkampf and ' +
        'Scheidemann. Invalided in March 1915, he then commanded the Northern Front, avoiding decisive ' +
        'action, and in March 1917 accepted the generals’ judgement that the army would not defend the ' +
        'dynasty. The new government relieved him; he was arrested in 1918 and died that October.',
      university: 'The sources on Ruzsky are staff work, orders and memoirs, and thin on intention. The diary of ' +
        'the minister Frederiks, present at Pskov, accuses him of forcing a wavering tsar to sign the ' +
        'abdication, while his apologists present a man only reporting what the front commanders had ' +
        'said. Historians of the Eastern Front read his command as evidence on Russian generalship in ' +
        '1914-15: competent staff method, no capacity to exploit, and a habit of blaming subordinates, of ' +
        'which removing Rennenkampf and Scheidemann at Sedlets is the standard case. The retreat after ' +
        'Łódź in November 1914 is the test, described both as a thrown encirclement and as the necessary ' +
        'answer to a German breakout. His removal in 1917 matters differently: the front commanders whose ' +
        'advice ended the monarchy were of his generation, and the army’s democratisation swept most of ' +
        'them aside within months.',
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
      secondary: 'He attacked at several points on a wide front at once, troops close to the wire and rehearsed in ' +
        'secret, so the Austro-Hungarian defence was overrun before its artillery reacted. Lutsk fell ' +
        'within days, and by mid-June the armies facing him lost 205,000 men, about 150,000 of them ' +
        'prisoners. Russian losses were enormous, and the attack died without a breakthrough because the ' +
        'Stavka would not release reserves. As commander-in-chief from June 1917 he tried to make another ' +
        'attack in July, and when it collapsed Kornilov replaced him. He later served the Red Army until ' +
        '1924.',
      university: 'Whether the 1916 offensive “broke” Austria-Hungary remains open. Graydon Tunstall calls it the ' +
        'Habsburg crisis of the war and the Entente’s greatest victory. Against that, the Dual Monarchy’s ' +
        'units were rebuilt round German cadres and fought on until November 1918, so the sources support ' +
        'irreparable loss not a knock-out. The Seventh Army lost 76,200 of its 194,200 men by 8 June ' +
        'alone. On Russia, casualties put between 500,000 and 1,000,000, and the spending of the reserves ' +
        'meant for 1917, are held to have prepared the army’s collapse, while others say the 1917 ' +
        'offensive failed in the soldiers’ committees, not in the trench. Denikin’s memoirs made Brusilov ' +
        'a ditherer who broke down at the critical moment in 1916, and Soviet editing of his own text ' +
        'produced the flattering figure that recent work is reading back against the archives.',
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
      primary: 'Alekseev was the Russian general who ran the Stavka’s operations for most of the war, first as ' +
        'chief of staff to a front and then as chief of staff to the tsar. He became commander-in-chief ' +
        'in 1917, but could not stop the army falling apart.',
      secondary: 'He planned the 1914 offensive into Galicia as South-Western Front chief of staff, commanded the ' +
        'Northwestern Front through 1915, and from September 1915 ran strategy at the Stavka, moving ' +
        'reserves between the fronts. He advised Nicholas to abdicate in March 1917. Kept on as ' +
        'commander-in-chief, he had to pass orders through soldiers’ committees. The June offensive ' +
        'failed and Brusilov replaced him. Back that summer as Kerensky’s chief of staff, he arrested ' +
        'Kornilov. After the Bolsheviks took power he raised the Volunteer Army on the Don, and died of ' +
        'heart failure at Yekaterinodar on 8 October 1918.',
      university: 'The identity behind these posts has to be stated first, because the roster calls him Nikolai ' +
        'Vasilievich Alekseev (1856-1918) and no such Imperial general held these posts: the chief of ' +
        'staff at the Stavka under Grand Duke Nicholas from August 1914 to September 1915 was Nikolai ' +
        'Yanushkevich, and the man who succeeded him, who became commander-in-chief in 1917 and who also ' +
        'founded the Volunteer Army, is one person, Mikhail Vasilyevich Alekseev (1857-1918), who died at ' +
        'Yekaterinodar and not in Moscow. The argument that concerns him is the scale and meaning of the ' +
        'army’s disintegration in 1917. What the records of his own office establish most securely is ' +
        'Alekseev’s purpose: he meant to keep the army at war for the Entente.',
    },
    note: 'The officers’ memoir literature laid the disintegration on Petrograd Soviet Order No. 1 of March ' +
      '1917 and on the soldiers’ committees that gutted their authority; work that reads soldiers’ ' +
      'resolutions and letters instead treats it as a strike by men who had already decided the war was ' +
      'not theirs, in which case no commander could have prevented it, whatever orders the Stavka issued. ' +
      'Order No. 1 repays the close reading this dispute requires: it put weapons at the disposal of unit ' +
      'committees and made obedience to the officers conditional on the Soviet’s countersign, while, as ' +
      'N. John Boyd showed, it did not in fact provide for the election of officers, a charge that later ' +
      'histories repeated for decades. It is why the Stavka undertook the offensive of 1916 and why he ' +
      'could not make terms with the committees in 1917.',
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
      secondary: 'He was vice-chairman of the Petrograd Soviet and a minister in every cabinet from March 1917, ' +
        'taking the War Ministry in early May, when the Allies were promised an attack. He became head of ' +
        'government in July and launched the offensive of 1 July to prove a free army would still fight. ' +
        'It collapsed within days into a general refusal to obey. He made himself supreme commander, ' +
        'governed through a five-man directory, and was overthrown on 7 and 8 November almost without a ' +
        'shot. He rode to Pskov for loyal troops, failed, and left Russia in exile.',
      university: 'The charges against him are opposites, so he stays contested: a vain dilettante who manufactured ' +
        'the Kornilov “plot” to save himself, says Richard Pipes, or an honest democrat trapped between ' +
        'an army that would not attack and parties that would not compromise. A. J. P. Taylor had him ' +
        'encouraging Kornilov, then losing his nerve. Reconstructions rest on telegrams between men who ' +
        'already distrusted each other, Kerensky writing his defence decades later and Kornilov’s ' +
        'partisans writing in emigration. What the sources bear out is his aim: to carry the war on so a ' +
        'revolutionary Russia could claim a place at the peace, and to hold the country until a ' +
        'constituent assembly settled its government. Both were lost, the army by its committees in July ' +
        'and August 1917, and the assembly by the Bolsheviks, who dissolved it in January 1918 when it ' +
        'would not yield.',
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
      secondary: 'He escaped from Austrian captivity in 1916. Commanding the Eighth Army from April 1917, he ' +
        'demanded sole authority over the front and the capital. Made commander-in-chief after the June ' +
        'offensive failed, he pressed for the death penalty at the front and won officers and moderates ' +
        'who wanted the soviets broken. In late August he ordered a corps towards Petrograd. Kerensky, ' +
        'taking this as a march on the government, dismissed him. Railwaymen, soldiers’ committees and ' +
        'the newly armed Bolsheviks stopped the column without fighting. Kerensky had no army behind him ' +
        'in November, and the Bolsheviks kept those weapons.',
      university: 'Whether there was a Kornilov plot is the question the affair is used to test. The version ' +
        'Kerensky and liberal witnesses left made him a would-be dictator moving on the capital; Richard ' +
        'Pipes argued the opposite, that the affair was largely Kerensky’s own invention, a move to ' +
        'destroy a general whom everyone expected to lead a counter-revolution, and A. J. P. Taylor that ' +
        'the prime minister encouraged the move until he saw that it would swallow him. The documents ' +
        'support neither case: both men claimed the other had authorised the plan, and messages were ' +
        'carried personally by a minister who mistrusted both.',
    },
    note: 'Kornilov advanced because he had come to believe that the Bolsheviks already held the government, ' +
      'which is how the most careful studies now describe it. Two things are not in dispute: the affair ' +
      'made the Bolsheviks the acknowledged defenders of Petrograd and put arms in their hands before ' +
      'October, and it convinced most officers that no government would defend military authority, a ' +
      'conclusion that shaped the civil war. His own account of events is a prisoner’s defence and has to ' +
      'be read as one; he was killed by a shell at Yekaterinodar on 13 April 1918.',
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
      secondary: 'He reached Petrograd from exile in April 1917. His April Theses refused all support for the ' +
        'Provisional Government and called for the soviets to take power, which his party hardly ' +
        'expected. After the failed July rising he went into hiding, and in October he argued the ' +
        'leadership into an insurrection timed to the soviets’ congress, so it looked like a soviet act. ' +
        'The first decrees offered peace and land. When the constituent assembly elected in November ' +
        'would not yield, he dissolved it in January 1918, and in March he accepted Germany’s terms at ' +
        'Brest-Litovsk to buy time.',
      university: 'The argument over October is the argument about Lenin. One school, with Richard Pipes its most ' +
        'uncompromising version, sees a disciplined minority capturing state power at a moment when the ' +
        'majority wanted something different, and rests the case on the constituent assembly election, in ' +
        'which the Socialist-Revolutionaries took the peasant majority and the Bolsheviks were strong ' +
        'mainly in the cities and among the soldiers of the Western Front. The other, in different ways ' +
        'in Orlando Figes’s social history and in Alexander Rabinowitch’s studies of Petrograd, sees a ' +
        'revolution from below whose institutions — soviets, factory committees, soldiers’ delegations — ' +
        'the Bolsheviks led because they were the only party promising peace, land and workers’ control. ' +
        'What the records do settle is the decision rather than the support: the Central Committee’s vote ' +
        'for an armed rising on 10 October 1917, carried against Zinoviev and Kamenev.',
    },
    note: 'The evidence supports neither case as neatly as either claims. Some 47 million people voted in ' +
      'that election, yet the turnout is given as about 55 per cent by Radkey and about 64 per cent by ' +
      'Protasov, and many distant districts voted late or not at all; the party’s strength in the soviets ' +
      'and garrisons was concentrated exactly where power was decided. What the records do settle ' +
      'includes the near-bloodless seizure of the capital’s hubs by the soviet’s own Military ' +
      'Revolutionary Committee.',
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
      secondary: 'As foreign commissar he replaced Joffe as head of the delegation at Brest-Litovsk on 22 December ' +
        '1917, and when the Germans insisted on keeping Polish, Lithuanian and Courland territory he ' +
        'withdrew on 10 February 1918. Germany answered by advancing, and the government then accepted ' +
        'terms far worse than those it had refused, signed on 3 March 1918. He took charge of the army ' +
        'instead, and after the Czechoslovak Legions’ revolt in May–June 1918 he raised the Red Army from ' +
        'under 300,000 men to a million by October.',
      university: 'Whether October 1917 was a coup or a mass movement is argued through Trotsky twice over, because ' +
        'he is both a subject of the debate and one of its principal sources. He himself presented the ' +
        'rising as a precise technical act carried out by the Petrograd Soviet’s Military Revolutionary ' +
        'Committee under his chairmanship, and Stalin’s summary of Trotsky’s part, published in Pravda on ' +
        '6 November 1918, credited him with winning the garrison before the party’s coup. Source ' +
        'criticism decides much of the argument: his History of the Russian Revolution was written in ' +
        'exile as an argument with Stalin.',
    },
    note: 'Richard Pipes and other revisionists invert his account into the case that a disciplined minority ' +
      'captured a state whose electorate had chosen somebody else, pointing to the constituent assembly ' +
      'returns in which the Bolsheviks were a minority nationally, while Alexander Rabinowitch’s studies ' +
      'of Petrograd show a party leading institutions — soviet, garrison, factory committees — in which a ' +
      'majority had already organised itself, so the coup and mass-movement readings are both flatter ' +
      'than the evidence. His 1918 practice of conscription, coerced specialists and party control shows ' +
      'a regime resting on claimed soviet majorities rather than on a vote, and he kept the war ' +
      'commissariat until 1925. His announcement on withdrawing from Brest-Litovsk was that the war was ' +
      'over for Russia without signing anything, a bet that German workers would stop their own ' +
      'government; Germany answered by advancing for three days without a reply to the Soviet radiogram, ' +
      'and Trotsky left the foreign ministry after the terms were signed. He raised the army with ' +
      'conscription, political commissars to countersign orders, and former imperial officers supervised ' +
      'as “military specialists”.',
  },
  {
    id: 'rasputin',
    name: 'Grigori Rasputin',
    birthDeath: '1869-1916',
    role: 'Mystic and faith healer in favour with the imperial family, from 1905 until his murder in December 1916',
    country: 'Russia',
    bloc: 'opposition',
    bio: {
      primary: 'Rasputin was a Siberian peasant who became a holy man and won over the tsar’s family, because ' +
        'they believed he could ease their son Alexei’s illness. He stayed close to the empress and made ' +
        'many enemies, and nobles killed him in Petrograd in December 1916.',
      secondary: 'He reached Saint Petersburg with a reputation as a starets and gained the family’s favour after ' +
        '1905 on the strength of occasions when he appeared to stop the tsarevich’s bleeding. That hold ' +
        'over Alexandra protected him through police investigations, the hostility of ministers such as ' +
        'Stolypin, and a stabbing in 1914. Prince Felix Yusupov, Vladimir Purishkevich and Grand Duke ' +
        'Dmitri Pavlovich murdered him in the Yusupov palace on 17 December 1916 by the Russian calendar, ' +
        '30 December by ours.',
      university: 'The story that a mad monk and a German empress were running the Russian state rests on hostile ' +
        'testimony rather than on documents. What can be established is influence over petitions, ' +
        'patronage and the empress’s feelings, not a traceable hand in policy; the one intervention of ' +
        'his own on the record is a telegram urging the tsar to stay out of war, sent in 1914. Historians ' +
        'are on firmer ground on the effect than on the cause, since the consensus is that the scandal of ' +
        'Rasputin, whatever he actually did, discredited the dynasty in the eyes of the educated public, ' +
        'which was one reason so few stood up for it in February 1917.',
    },
    note: 'The most forceful form of that story is Purishkevich’s speech to the Duma in November 1916 that ' +
      'the tsar’s ministers had become marionettes whose strings Rasputin and Alexandra held, and ' +
      'Purishkevich was by then plotting to kill him. The recent biographical work treats the record with ' +
      'far more care: Douglas Smith calls Rasputin’s youth “a black hole about which we know almost ' +
      'nothing” while showing how many stories about it were invented after his rise; Joseph T. Fuhrmann ' +
      'finds the accusations of membership of the Khlyst sect unproven and dates the first request to ' +
      'pray for Alexei to October 1906, where Orlando Figes keeps the traditional November 1905. The same ' +
      'scepticism applies to the murder, which is known largely from Yusupov’s own account: the city ' +
      'autopsy surgeon Kosorotov found a single bullet, no trace of poison and no water in the lungs, so ' +
      'the man was already dead when he went into the river. While the tsar was away at the front from ' +
      '1915 it was widely said that Rasputin and the empress between them were deciding who got ' +
      'government posts, and the killers believed that his influence over Alexandra endangered the ' +
      'monarchy. His body was found under the ice of the Neva on 1 January, and after the tsar abdicated ' +
      'the Provisional Government had it dug up and burned so that the grave could not become a rallying ' +
      'point.',
  },
  {
    id: 'pilsudski_jozef',
    name: 'Józef Piłsudski',
    birthDeath: '1867-1935',
    role: 'Commander-in-Chief of the Polish forces from 11 November 1918; Provisional Chief of State, 1918-1922',
    country: 'Poland',
    bloc: 'co_belligerent',
    bio: {
      primary: 'Piłsudski was a Polish nationalist who believed Poland’s independence had to be won by fighting, ' +
        'so in 1914 he raised Polish soldiers to fight alongside Austria-Hungary against Russia. In ' +
        'November 1918 he took power in Warsaw as Poland was restored after 123 years of partition.',
      secondary: 'He raised the Polish Legions inside the Austro-Hungarian army on 27 August 1914. After over ' +
        '2,000 casualties at Kostiuchnówka in mid-1916 he demanded a state, and the Central Powers ' +
        'proclaimed an independent Poland on 5 November 1916. As war minister he refused the loyalty oath ' +
        'to the German kaiser in July 1917 and was jailed at Magdeburg. Released on 8 November 1918, he ' +
        'became commander-in-chief on 11 November and proclaimed a Polish state. He negotiated the exit ' +
        'of over 55,000 German soldiers and became Provisional Chief of State on 22 November.',
      university: 'His bargain with the Germans in 1918 is the awkward part, because Paris recognised Poland ' +
        'through Dmowski and Paderewski, and a man whose Legions had fought for the Central Powers until ' +
        '1917 looked compromised. The sources make the exchange look deliberate. The 1914 prediction is ' +
        'documented, the demand for a Polish state after Kostiuchnówka was his own, and the July 1917 ' +
        'refusal of the oath, which cost him two years in prison and gave him his standing, shows him ' +
        'using the Central Powers and then dropping them when they looked likely to lose. In November he ' +
        'was weaker than legend allows: little army, authority resting on ex-Legionnaires and the Polish ' +
        'Military Organisation, released by a collapsing Germany. He accepted a socialist cabinet that ' +
        'brought the eight-hour day, free schooling and women’s suffrage. His forces repelled the Soviet ' +
        'army at Warsaw in August 1920.',
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
      primary: 'Mannerheim was a Finnish general who had spent his career in the Russian army, and early in 1918 ' +
        'he went home to lead the Whites in Finland’s civil war against the Reds. With German help he ' +
        'won, and his troops marched through Helsinki in May.',
      secondary: 'He was appointed commander of the White forces on 15 January 1918, when the Whites had little ' +
        'more than locally organised guards and the Reds held Helsinki, Tampere and most of southern ' +
        'Finland. He built a regular army out of the 1,450 Jägers trained by Germany and the 84 Swedish ' +
        'volunteer officers on his staff, and chose to strike first at Tampere. The war ended on 15 May, ' +
        'and he resigned on 25 May 1918 after quarrelling with the Senate over German dominance in ' +
        'Finland and over his plan to march on Petrograd.',
      university: 'Mannerheim’s credit for giving the Whites a regular army, not a vengeful militia, sits uneasily ' +
        'with his own staff’s orders. In February 1918 the White senior staff issued the Shoot on the ' +
        'Spot Declaration, licensing field commanders to execute anyone they judged dangerous; most White ' +
        'terror was centrally led, and no Red equivalent has been found. Records are uneven, so figures ' +
        'come in ranges: roughly 9,000 Reds died from White terror against about 1,500 Whites from Red ' +
        'terror, and some 12,500 prisoners died of disease and starvation in camps — around 38,000 dead ' +
        'in a country of three million. Books of 1960 by Veijo Meri, Paavo Haavikko and Paavo Rintala ' +
        'displaced the White story of liberation; the argument since is whether the terror was policy or ' +
        'the habit of unequipped troops.',
    },
    note: 'Tampere held nearly 15,000 armed Red Guards and fell after bitter fighting; German troops landed ' +
      'and took Helsinki in April, and his victory parade through Helsinki came the day after the war ' +
      'ended. He later returned as the country’s regent and then as its field marshal and president.',
  },
];
