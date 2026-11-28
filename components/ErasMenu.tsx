'use client';

import { ChevronDown } from 'lucide-react';
import { eraMenuLinks } from '@/lib/eras';

const WW1_BASE = process.env.NEXT_PUBLIC_WW1_URL ?? 'https://ww1-european.vercel.app';

export default function ErasMenu({
  current,
  grouped = false,
  className = '',
}: {
  current?: string;
  /** Sit in a shared control group, without a border of its own. */
  grouped?: boolean;
  className?: string;
}) {
  const links = eraMenuLinks(WW1_BASE);
  const onEra = Boolean(current?.startsWith('/era/'));
  const summaryClass = grouped
    ? `flex h-full cursor-pointer list-none items-center gap-1 rounded-l-lg px-2 py-1.5 text-sm font-medium sm:px-2.5 [&::-webkit-details-marker]:hidden ${
        onEra ? 'bg-stone-50 text-stone-900' : 'text-stone-200 hover:bg-stone-800 hover:text-white'
      }`
    : 'flex cursor-pointer list-none items-center gap-1 rounded-lg border border-stone-600 px-2 py-1.5 text-sm font-medium text-stone-200 hover:bg-stone-800 hover:text-white sm:px-2.5 [&::-webkit-details-marker]:hidden';
  return (
    <details className={`${grouped ? 'relative flex' : 'relative'} ${className}`}>
      <summary className={summaryClass}>
        Era
        <ChevronDown size={14} aria-hidden />
      </summary>
      <div className="absolute right-0 z-[800] mt-1 max-h-[70vh] w-[min(24rem,calc(100vw-1.5rem))] overflow-auto rounded-lg border border-stone-600 bg-stone-900 py-1 text-left shadow-lg">
        {links.map((item) => (
          <span key={item.id}>
            {item.id === 'ww1' && (
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
              <span className="block text-sm font-medium leading-snug">
                {item.label}
                {item.plain ? <span className="font-normal text-stone-400"> — {item.plain}</span> : null}
              </span>
              <span className="block text-[11px] text-stone-500">{item.detail}</span>
            </a>
          </span>
        ))}
      </div>
    </details>
  );
}
