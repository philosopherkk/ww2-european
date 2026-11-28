'use client';

import { levelUpLabel, nextReadingLevel, type ReadingLevel } from '@/lib/reading-level';

/** Moves the whole page one tier, and returns to Story from University. */
export default function LevelUpButton({
  level,
  onChange,
  large = false,
}: {
  level: ReadingLevel;
  onChange: (level: ReadingLevel) => void;
  large?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(nextReadingLevel(level))}
      className={`inline-flex items-center rounded-lg border border-stone-300 font-semibold text-stone-800 hover:bg-stone-100 ${
        large ? 'min-h-11 px-4 text-base' : 'min-h-9 px-3 text-sm'
      }`}
    >
      {levelUpLabel(level)}
    </button>
  );
}
