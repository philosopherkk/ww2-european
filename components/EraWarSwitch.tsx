'use client';

import ErasMenu from '@/components/ErasMenu';

const WW1_BASE = process.env.NEXT_PUBLIC_WW1_URL ?? 'https://ww1-european.vercel.app';

/**
 * Eras, WW1, and WW2 as one control. The current site’s war is marked;
 * an era page marks Eras. Both war links stay.
 */
export default function EraWarSwitch({
  current,
  ww1Href,
  ww1Title,
  className = '',
}: {
  /** `/` on the Second World War map, or `/era/…` on an era page. */
  current: string;
  ww1Href?: string;
  ww1Title?: string;
  className?: string;
}) {
  const onWw2 = current === '/';
  const segment = 'px-2 py-1.5 text-sm font-medium sm:px-3';
  const link = `${segment} text-stone-300 hover:bg-stone-800 hover:text-white`;
  const here = `${segment} bg-stone-50 font-bold text-stone-900`;
  return (
    <div
      className={`shrink-0 items-stretch rounded-lg border border-stone-600 ${className}`}
      role="group"
      aria-label="Eras and wars"
    >
      <ErasMenu current={current} grouped />
      <a
        href={ww1Href ?? WW1_BASE}
        title={ww1Title}
        className={`${link} border-l border-stone-600`}
      >
        WW1
      </a>
      {onWw2 ? (
        <span aria-current="page" className={`${here} rounded-r-lg border-l border-stone-600`}>
          WW2
        </span>
      ) : (
        <a href="/" className={`${link} rounded-r-lg border-l border-stone-600`}>
          WW2
        </a>
      )}
    </div>
  );
}
