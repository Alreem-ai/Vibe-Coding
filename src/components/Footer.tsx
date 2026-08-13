"use client";

import { useLocale } from "@/context/LocaleContext";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="mt-12 pt-6 border-t-2 border-dashed border-ink flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-ink">
      <div className="flex items-center gap-2">
        <span className="bg-mustard text-ink font-pixel text-[10px] px-2 py-0.5 border border-ink" dir="ltr">
          {t.footer.version}
        </span>
        <span>{t.footer.brand}</span>
      </div>
      <div className="flex gap-4 font-pixel text-[10px]">
        <span className="text-coral">{t.footer.syncState}</span>
        <span>•</span>
        <span className="text-dusty-blue">{t.footer.mascotMood}</span>
        <span>•</span>
        <span className="text-sage font-bold">{t.footer.mascotName}</span>
      </div>
    </footer>
  );
}
