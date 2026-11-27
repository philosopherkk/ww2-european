'use client';

import { Globe2 } from 'lucide-react';
import { REGIONS, type Region } from '@/lib/regions';

/**
 * Segmented extent control shared by the two map browsers. Short labels on a phone
 * keep the buttons clear of the key; the full names appear from `sm` upwards.
 *
 * This site hides the extents whose box holds no shapes at all (see `hidden` in
 * lib/regions.ts), so it offers three buttons, not five: a control that only ever
 * showed empty ocean read as a defect rather than as a fact about the source.
 */
export default function RegionToggle({
  region,
  onChange,
}: {
  region: Region;
  onChange: (region: Region) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Map extent"
      className="absolute bottom-7 right-2 z-[450] flex max-w-[calc(100%-6rem)] overflow-hidden rounded-full border border-stone-300 bg-white/95 text-[11px] font-semibold text-stone-800 shadow-md backdrop-blur sm:bottom-8 sm:text-xs"
    >
      {REGIONS.filter((r) => !r.hidden).map((r) => (
        <button
          key={r.id}
          type="button"
          onClick={() => onChange(r.id)}
          aria-pressed={region === r.id}
          aria-label={r.label}
          className={`inline-flex min-h-11 items-center gap-1 px-2 sm:h-9 sm:min-h-9 sm:px-2.5 ${
            region === r.id ? 'bg-stone-800 text-white' : 'hover:bg-stone-100'
          }`}
        >
          {r.id === 'world' && <Globe2 size={13} aria-hidden />}
          <span className="sm:hidden">{r.short}</span>
          <span className="hidden sm:inline">{r.label}</span>
        </button>
      ))}
    </div>
  );
}
