"use client";

import { Languages } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function LocaleToggle() {
  const { toggleLocale, t } = useLocale();

  return (
    <button
      onClick={toggleLocale}
      className="retro-btn bg-cream text-ink font-pixel text-xs px-3 py-2 border-2 border-ink rounded-lg shadow-retro flex items-center gap-2 hover:bg-cream-dark transition-transform hover:-translate-y-1"
      dir="ltr"
      aria-label="Toggle language"
    >
      <Languages size={16} /> {t.langToggleLabel}
    </button>
  );
}
