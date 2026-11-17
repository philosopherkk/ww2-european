import type { Portrait } from '../lib/data/portrait-types';

/**
 * Photograph of a historical figure, with the credit Wikimedia gives us for the file.
 * Pass the entry from PORTRAITS; when there is none (three people have no usable
 * photograph on Wikimedia) a letter block is drawn instead, so the layout never
 * depends on an image loading.
 *
 * The img is absolutely positioned, so the wrapper you give it must be relative and
 * have a size. That keeps the component usable at 18px in a chip and 96px in a header.
 */
export function FigurePortrait({
  portrait,
  name,
  className = '',
  rounded = true,
  showCredit = false,
}: {
  portrait?: Portrait;
  name: string;
  className?: string;
  rounded?: boolean;
  showCredit?: boolean;
}) {
  const shape = rounded ? 'rounded-full' : 'rounded-md';

  if (!portrait) {
    return (
      <span
        aria-hidden
        className={`grid h-full w-full place-items-center bg-stone-200 text-[0.7em] font-bold text-stone-600 ${shape} ${className}`}
      >
        {initials(name)}
      </span>
    );
  }

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element -- these are static files
          committed under public/data/portraits, nothing for the optimiser to do */}
      <img
        src={portrait.src}
        alt={`Photograph of ${name}`}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover ${shape} ${className}`}
      />
      {showCredit && (
        <span className="sr-only">
          {portrait.file} — {portrait.credit}
        </span>
      )}
    </>
  );
}

function initials(name: string) {
  return name
    .replace(/^(Sir|General|Field Marshal|Admiral|Marshal|Air Chief Marshal|Vice)\s+/i, '')
    .split(/\s+/)
    .filter((w) => /^[A-ZÀ-Þ]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}
