"use client";

import { useLocale } from "@/context/LocaleContext";

export default function TerminalHeading() {
  const { t } = useLocale();

  return (
    <div className="mb-6 border-b-2 border-ink border-dashed pb-6">
      <span className="font-pixel text-[10px] text-dusty-blue tracking-widest uppercase" dir="ltr">
        {t.terminalPage.eyebrow}
      </span>
      <h2 className="font-heading text-3xl md:text-4xl text-ink">{t.terminalPage.heading}</h2>
    </div>
  );
}
