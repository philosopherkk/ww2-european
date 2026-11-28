'use client';

import { ChevronDown } from 'lucide-react';

const WW2_BASE = process.env.NEXT_PUBLIC_WW2_URL ?? 'https://ww2-european.vercel.app';

/**
 * The era pages live on the Second World War site. Labels match that site’s menu.
 * The 1914–1945 gap stays on the two war maps.
 */
const LINKS: { id: string; label: string; href: string; detail: string; gap?: boolean }[] = [
  {
    id: 'antiquity',
    label: 'Antiquity',
    href: `${WW2_BASE}/era/antiquity`,
    detail: '1 January of year 1 – 31 December 500',
  },
  {
    id: 'early-medieval',
    label: 'Early medieval',
    href: `${WW2_BASE}/era/early-medieval`,
    detail: '1 January 501 – 31 December 1000',
  },
  {
    id: 'high-medieval',
    label: 'High medieval',
    href: `${WW2_BASE}/era/high-medieval`,
    detail: '1 January 1001 – 31 December 1300',
  },
  {
    id: 'late-medieval',
    label: 'Late medieval',
    href: `${WW2_BASE}/era/late-medieval`,
    detail: '1 January 1301 – 31 December 1499',
  },
  {
    id: 'early-modern',
    label: 'Early modern',
    href: `${WW2_BASE}/era/early-modern`,
    detail: '1 January 1500 – 31 December 1788',
  },
  {
    id: 'long-nineteenth',
    label: 'Long nineteenth century',
    href: `${WW2_BASE}/era/long-nineteenth`,
    detail: '1 January 1789 – 27 July 1914',
  },
  {
    id: 'ww1',
    label: 'First World War',
    href: '/',
    detail: 'The 1914–1918 map',
    gap: true,
  },
  {
    id: 'ww2',
    label: 'Second World War',
    href: WW2_BASE,
    detail: 'The 1939–1945 map',
  },
  {
    id: 'since-1945',
    label: 'Since 1945',
    href: `${WW2_BASE}/era/since-1945`,
    detail: '3 September 1945 – 31 December 2026',
  },
];

export default function ErasMenu({
  current,
  grouped = false,
}: {
  current?: string;
  grouped?: boolean;
}) {
  const onEra = Boolean(current?.startsWith('/era/'));
  const summaryClass = grouped
    ? `flex h-full cursor-pointer list-none items-center gap-1 rounded-l-lg px-2 py-1.5 text-sm font-medium sm:px-2.5 [&::-webkit-details-marker]:hidden ${
        onEra ? 'bg-stone-50 text-stone-900' : 'text-stone-200 hover:bg-stone-800 hover:text-white'
      }`
    : 'flex cursor-pointer list-none items-center gap-1 rounded-lg border border-stone-600 px-2 py-1.5 text-sm font-medium text-stone-200 hover:bg-stone-800 hover:text-white sm:px-2.5 [&::-webkit-details-marker]:hidden';
  return (
    <details className={grouped ? 'relative flex' : 'relative'}>
      <summary className={summaryClass}>
        Eras
        <ChevronDown size={14} aria-hidden />
      </summary>
      <div className="absolute right-0 z-[800] mt-1 max-h-[70vh] w-72 overflow-auto rounded-lg border border-stone-600 bg-stone-900 py-1 text-left shadow-lg">
        {LINKS.map((item) => (
          <span key={item.id}>
            {item.gap && (
              <p className="px-3 pb-1 pt-2 text-[10px] font-medium uppercase tracking-wider text-stone-500">
                28 July 1914 – 2 September 1945
              </p>
            )}
            <a
              href={item.href}
              aria-current={current === item.href ? 'page' : undefined}
              className={`block px-3 py-1.5 hover:bg-stone-800 ${
                current === item.href ? 'bg-stone-800 text-white' : 'text-stone-200'
              }`}
            >
              <span className="block text-sm font-medium">{item.label}</span>
              <span className="block text-[11px] text-stone-500">{item.detail}</span>
            </a>
          </span>
        ))}
      </div>
    </details>
  );
}
