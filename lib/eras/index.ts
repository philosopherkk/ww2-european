import { ANTIQUITY } from '@/lib/eras/antiquity';
import { EARLY_MEDIEVAL } from '@/lib/eras/early-medieval';
import { EARLY_MODERN } from '@/lib/eras/early-modern';
import { eraLongDate } from '@/lib/eras/format';
import { HIGH_MEDIEVAL } from '@/lib/eras/high-medieval';
import { LATE_MEDIEVAL } from '@/lib/eras/late-medieval';
import { LONG_NINETEENTH } from '@/lib/eras/long-nineteenth';
import { SINCE_1945 } from '@/lib/eras/since-1945';
import type { EraPeriod, EraPeriodBound, EraPeriodId } from '@/lib/eras/types';

/**
 * Every period id the route can grow into. Episodes are added on the period,
 * not by copying a war into 1914–1918 or 1939–1945.
 */
export const ERA_PERIOD_CATALOGUE: Record<EraPeriodId, EraPeriodBound> = {
  antiquity: { id: 'antiquity', label: 'Antiquity', start: '0001-01-01', end: '0500-12-31' },
  'early-medieval': {
    id: 'early-medieval',
    label: 'Early medieval',
    start: '0501-01-01',
    end: '1000-12-31',
  },
  'high-medieval': {
    id: 'high-medieval',
    label: 'High medieval',
    start: '1001-01-01',
    end: '1300-12-31',
  },
  'late-medieval': {
    id: 'late-medieval',
    label: 'Late medieval',
    start: '1301-01-01',
    end: '1499-12-31',
  },
  'early-modern': {
    id: 'early-modern',
    label: 'Early modern',
    start: '1500-01-01',
    end: '1788-12-31',
  },
  'long-nineteenth': {
    id: 'long-nineteenth',
    label: 'Long nineteenth century',
    start: '1789-01-01',
    end: '1914-07-27',
  },
  'since-1945': {
    id: 'since-1945',
    label: 'Since 1945',
    start: '1945-09-03',
    end: '2026-12-31',
  },
};

/** Periods a reader can open. An empty episode list means the research is not filed yet. */
export const ERA_PERIODS: EraPeriod[] = [
  ANTIQUITY,
  EARLY_MEDIEVAL,
  HIGH_MEDIEVAL,
  LATE_MEDIEVAL,
  EARLY_MODERN,
  LONG_NINETEENTH,
  SINCE_1945,
];

const MENU_ORDER: EraPeriodId[] = [
  'antiquity',
  'early-medieval',
  'high-medieval',
  'late-medieval',
  'early-modern',
  'long-nineteenth',
  'since-1945',
];

export interface EraMenuLink {
  id: string;
  label: string;
  href: string;
  detail: string;
}

function periodDetail(id: EraPeriodId): string {
  if (id === 'antiquity') return '1 January of year 1 – 31 December 500';
  const bound = ERA_PERIOD_CATALOGUE[id];
  return `${eraLongDate(bound.start, 'day')} – ${eraLongDate(bound.end, 'day')}`;
}

/** One list for the eras control. The two war maps sit in the 1914–1945 gap. */
export function eraMenuLinks(ww1Base: string): EraMenuLink[] {
  const links: EraMenuLink[] = [];
  for (const id of MENU_ORDER) {
    if (id === 'since-1945') {
      links.push({
        id: 'ww1',
        label: 'First World War',
        href: ww1Base,
        detail: 'The 1914–1918 map',
      });
      links.push({
        id: 'ww2',
        label: 'Second World War',
        href: '/',
        detail: 'The 1939–1945 map',
      });
    }
    const bound = ERA_PERIOD_CATALOGUE[id];
    links.push({
      id,
      label: bound.label,
      href: `/era/${id}`,
      detail: periodDetail(id),
    });
  }
  return links;
}

export function isEraPeriodId(id: string): id is EraPeriodId {
  return Object.prototype.hasOwnProperty.call(ERA_PERIOD_CATALOGUE, id);
}

export function eraPeriodById(id: string): EraPeriod | undefined {
  if (!isEraPeriodId(id)) return undefined;
  return ERA_PERIODS.find((period) => period.id === id);
}
