'use client';

/** Back and Next through the events already on screen. */
export default function StorySteps({
  index,
  count,
  onBack,
  onNext,
}: {
  index: number;
  count: number;
  onBack: () => void;
  onNext: () => void;
}) {
  if (count < 1) return null;
  const atFirst = index <= 0;
  const atLast = index >= count - 1;
  const place = index < 0 ? 0 : index + 1;
  return (
    <div
      role="group"
      aria-label="Story steps"
      className="mb-3 flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-3 py-2"
    >
      <button
        type="button"
        onClick={onBack}
        disabled={atFirst}
        className="min-h-11 rounded-lg bg-stone-900 px-4 text-base font-semibold text-white disabled:opacity-35"
      >
        Back
      </button>
      <span className="flex-1 text-center text-sm font-medium text-stone-700">
        {place} of {count}
      </span>
      <button
        type="button"
        onClick={onNext}
        disabled={atLast}
        className="min-h-11 rounded-lg bg-stone-900 px-4 text-base font-semibold text-white disabled:opacity-35"
      >
        Next
      </button>
    </div>
  );
}
