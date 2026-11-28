'use client';

import { useEffect, useState } from 'react';
import { Volume2 } from 'lucide-react';

/** Speaks the text already on the card. Hidden when the browser has no speech synthesis. */
export default function ListenButton({ text }: { text: string }) {
  const [ready, setReady] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    setReady(typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis != null);
  }, []);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, []);

  if (!ready || !text.trim()) return null;

  function toggle() {
    const synth = window.speechSynthesis;
    if (synth.speaking) {
      synth.cancel();
      setSpeaking(false);
      return;
    }
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-GB';
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    setSpeaking(true);
    synth.speak(utter);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={speaking}
      className="inline-flex min-h-11 items-center gap-1.5 rounded-lg bg-amber-100 px-3 text-base font-semibold text-stone-900 hover:bg-amber-200"
    >
      <Volume2 size={18} aria-hidden />
      {speaking ? 'Stop' : 'Listen'}
    </button>
  );
}
