/**
 * Which events happened on which army-movement line.
 *
 * Events carry no coordinates of their own, and none are invented here: each
 * link pins an event to a waypoint already named in that campaign's `path`
 * (`at` is the index into it), so the pin always sits on a real place the line
 * runs through. Only incidents of that campaign are linked; conferences,
 * atrocities and fighting on other fronts that happen to share the dates are
 * not. The data check in the audit folder confirms every id, every waypoint
 * index and that each event falls within a few days of the campaign window.
 */
export interface CampaignEventLink {
  line: string;
  event: string;
  at: number;
}

export const CAMPAIGN_EVENT_LINKS: CampaignEventLink[] = [
  { line: 'poland_1939', event: 'invasion_poland', at: 0 },
  { line: 'poland_1939_south', event: 'invasion_poland', at: 0 },
  { line: 'soviet_poland_1939', event: 'soviet_invasion_poland', at: 0 },
  { line: 'winter_war', event: 'winter_war', at: 0 },
  { line: 'weserubung', event: 'weserubung', at: 2 },
  { line: 'norway_central_1940', event: 'weserubung', at: 0 },
  { line: 'fall_gelb', event: 'fall_gelb', at: 0 },
  { line: 'fall_gelb', event: 'sedan_1940', at: 2 },
  { line: 'dunkirk_evac', event: 'dunkirk', at: 0 },
  { line: 'marita', event: 'operation_marita', at: 0 },
  { line: 'crete_1941', event: 'crete_1941', at: 0 },
  { line: 'barbarossa_north', event: 'barbarossa', at: 0 },
  { line: 'barbarossa_north', event: 'siege_leningrad', at: 4 },
  { line: 'barbarossa_centre', event: 'barbarossa', at: 0 },
  { line: 'barbarossa_centre', event: 'minsk_encirclement', at: 1 },
  { line: 'barbarossa_centre', event: 'smolensk_1941', at: 2 },
  { line: 'barbarossa_centre', event: 'operation_typhoon', at: 3 },
  { line: 'barbarossa_south', event: 'barbarossa', at: 0 },
  { line: 'barbarossa_south', event: 'uman_pocket', at: 2 },
  { line: 'odessa_1941', event: 'odessa_siege', at: 3 },
  { line: 'moscow_1941', event: 'moscow_counteroffensive', at: 0 },
  { line: 'sevastopol_1942', event: 'siege_sevastopol', at: 2 },
  { line: 'blue_1942', event: 'operation_blue', at: 0 },
  { line: 'blue_1942', event: 'stalingrad_street_fighting', at: 3 },
  { line: 'uranus', event: 'operation_uranus', at: 0 },
  { line: 'wintergewitter', event: 'wintergewitter', at: 0 },
  { line: 'koltso_1943', event: 'stalingrad_surrender', at: 2 },
  { line: 'iskra_1943', event: 'operation_iskra', at: 1 },
  { line: 'third_kharkov_1943', event: 'kharkov_1943', at: 2 },
  { line: 'kursk_north_1943', event: 'kursk', at: 0 },
  { line: 'kursk_south_1943', event: 'kursk', at: 0 },
  { line: 'belgorod_kharkov_1943', event: 'orbel_salute', at: 0 },
  { line: 'orel_1943', event: 'orbel_salute', at: 1 },
  { line: 'korsun_1944', event: 'korsun_pocket', at: 2 },
  { line: 'leningrad_novgorod_1944', event: 'siege_leningrad_lifted', at: 2 },
  { line: 'crimea_1944', event: 'crimea_1944', at: 0 },
  { line: 'bagration', event: 'bagration', at: 0 },
  { line: 'vistula_oder', event: 'vistula_oder_opens', at: 0 },
  { line: 'berlin_1945', event: 'seelow_berlin', at: 1 },
  { line: 'prague_1945', event: 'prague', at: 2 },
  { line: 'compass_1940', event: 'sidi_barrani', at: 0 },
  { line: 'compass_1940', event: 'bardia_1941', at: 2 },
  { line: 'compass_1940', event: 'compass_tobruk', at: 3 },
  { line: 'afrikakorps_1941', event: 'siege_of_tobruk', at: 4 },
  { line: 'gazala_alamein_1942', event: 'el_alamein_1', at: 4 },
  { line: 'el_alamein_1942', event: 'second_el_alamein', at: 0 },
  { line: 'el_alamein_1942', event: 'medenine', at: 5 },
  { line: 'el_alamein_1942', event: 'tunisia_surrenders', at: 6 },
  { line: 'torch', event: 'operation_torch', at: 0 },
  { line: 'torch', event: 'tunisia_surrenders', at: 4 },
  { line: 'kasserine_1943', event: 'kasserine_pass', at: 2 },
  { line: 'husky', event: 'husky', at: 0 },
  { line: 'husky', event: 'sicily_campaign_ends', at: 3 },
  { line: 'cassino_1944', event: 'first_monte_cassino', at: 0 },
  { line: 'cassino_1944', event: 'monte_cassino_abbey', at: 0 },
  { line: 'cassino_1944', event: 'cassino', at: 0 },
  { line: 'anzio_1944', event: 'anzio', at: 0 },
  { line: 'dday_breakout', event: 'd_day', at: 1 },
  { line: 'dday_breakout', event: 'operation_cobra', at: 3 },
  { line: 'falaise_1944', event: 'falaise', at: 3 },
  { line: 'dragoon_1944', event: 'operation_dragoon', at: 0 },
  { line: 'market_garden', event: 'market_garden', at: 2 },
  { line: 'channel_dash_1942', event: 'channel_dash', at: 1 },
  { line: 'scheldt_1944', event: 'scheldt_campaign', at: 0 },
  { line: 'remagen_ruhr', event: 'remagen', at: 0 },
  { line: 'bulge', event: 'bulge', at: 0 },
];

export const LINKS_BY_LINE: Record<string, CampaignEventLink[]> = {};
export const LINKS_BY_EVENT: Record<string, CampaignEventLink[]> = {};
for (const l of CAMPAIGN_EVENT_LINKS) {
  (LINKS_BY_LINE[l.line] ??= []).push(l);
  (LINKS_BY_EVENT[l.event] ??= []).push(l);
}
