import type { FigureBio, Level, LevelText } from '@/lib/data';

/** The control the reader picks. Story is optional on each card until a sourced story exists. */
export type ReadingLevel = 'story' | Level;

export const READING_LEVEL_STORAGE_KEY = 'ww-reading-level';

export const LEVELS: { id: ReadingLevel; label: string; short: string; hint: string }[] = [
  { id: 'story', label: 'Story', short: 'Story', hint: 'A few short sentences' },
  { id: 'primary', label: 'Primary', short: 'Primary', hint: 'Ages 7–11 · short sentences' },
  { id: 'secondary', label: 'Secondary', short: 'Secondary', hint: 'Ages 12–16 · names, dates and cause and effect' },
  { id: 'university', label: 'University', short: 'University', hint: 'Arguments over numbers, and sources' },
];

export function isReadingLevel(value: string | null): value is ReadingLevel {
  switch (value) {
    case 'story':
    case 'primary':
    case 'secondary':
    case 'university':
      return true;
    default:
      return false;
  }
}

export function readStoredReadingLevel(): ReadingLevel | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(READING_LEVEL_STORAGE_KEY);
    return isReadingLevel(value) ? value : null;
  } catch {
    return null;
  }
}

export function writeStoredReadingLevel(level: ReadingLevel): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(READING_LEVEL_STORAGE_KEY, level);
  } catch {
    /* Private mode can refuse storage. The URL still carries the choice. */
  }
}

export function nextReadingLevel(level: ReadingLevel): ReadingLevel {
  switch (level) {
    case 'story':
      return 'primary';
    case 'primary':
      return 'secondary';
    case 'secondary':
      return 'university';
    case 'university':
      return 'story';
    default: {
      const exhaustive: never = level;
      return exhaustive;
    }
  }
}

/** Story with no sourced text uses the primary wording. Other tiers are themselves. */
export function proseLevel(level: ReadingLevel): Level {
  switch (level) {
    case 'story':
      return 'primary';
    case 'primary':
    case 'secondary':
    case 'university':
      return level;
    default: {
      const exhaustive: never = level;
      return exhaustive;
    }
  }
}

export function textForLevel(
  levels: Record<Level, LevelText>,
  story: LevelText | undefined,
  level: ReadingLevel,
): LevelText {
  switch (level) {
    case 'story':
      if (story && story.cause.trim() && story.what.trim() && story.consequence.trim()) return story;
      return levels.primary;
    case 'primary':
    case 'secondary':
    case 'university':
      return levels[level];
    default: {
      const exhaustive: never = level;
      return exhaustive;
    }
  }
}

export function bioForLevel(bio: FigureBio, level: ReadingLevel): string {
  switch (level) {
    case 'story':
      return bio.story && bio.story.trim() ? bio.story : bio.primary;
    case 'primary':
      return bio.primary;
    case 'secondary':
      return bio.secondary;
    case 'university':
      return bio.university;
    default: {
      const exhaustive: never = level;
      return exhaustive;
    }
  }
}

export function speechText(text: LevelText): string {
  return [text.cause, text.what, text.consequence].filter((part) => part.trim()).join(' ');
}

/** Story uses the same short country note as primary. No new figures are written. */
export function showsSimpleNumbers(level: ReadingLevel): boolean {
  switch (level) {
    case 'story':
    case 'primary':
      return true;
    case 'secondary':
    case 'university':
      return false;
    default: {
      const exhaustive: never = level;
      return exhaustive;
    }
  }
}

export function levelUpLabel(level: ReadingLevel): string {
  switch (level) {
    case 'university':
      return 'Back to Story';
    case 'story':
    case 'primary':
    case 'secondary':
      return 'Level up';
    default: {
      const exhaustive: never = level;
      return exhaustive;
    }
  }
}
