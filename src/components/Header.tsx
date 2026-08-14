"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cpu, VolumeX, BookOpen, Terminal } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import LocaleToggle from "./LocaleToggle";

export default function Header() {
  const pathname = usePathname();
  const { t } = useLocale();
  const isGuideActive = pathname === "/";
  const isTerminalActive = pathname === "/terminal";

  return (
    <header className="flex flex-col md:flex-row justify-between items-center pb-6 mb-6 border-b-4 border-dashed border-ink gap-4 relative">
      <LocaleToggle />
      <div className="absolute -top-6 right-12 w-28 h-6 tape-pink z-20"></div>

      <div className="flex items-center gap-3">
        <div className="bg-mustard border-3 border-ink p-2 rounded-lg shadow-retro text-ink rotate-[-3deg]">
          <Cpu size={24} strokeWidth={2.5} />
        </div>
        <div>
          <span
            className="font-pixel text-xs tracking-widest text-dusty-blue uppercase block"
            dir="ltr"
          >
            {t.header.tagline}
          </span>
          <h1 className="font-heading text-2xl md:text-3xl text-ink tracking-wide leading-none">
            {t.header.title}
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-center">
        <button
          className="retro-btn bg-sage text-ink font-mono font-bold text-xs sm:text-sm px-3 sm:px-4 py-2 border-2 border-ink rounded-lg shadow-retro flex items-center gap-2 hover:bg-sage-light hover:-translate-y-1 transition-transform"
          dir="ltr"
        >
          <VolumeX size={16} /> <span>{t.header.soundOff}</span>
        </button>
        <Link
          href="/"
          data-nav="guide"
          className={`nav-btn retro-btn bg-mustard text-ink font-pixel text-xs sm:text-sm px-3 sm:px-4 py-2 border-2 border-ink rounded-lg shadow-retro hover:bg-mustard-light hover:-translate-y-1 transition-transform flex items-center ${
            isGuideActive ? "tab-active" : ""
          }`}
          dir="ltr"
        >
          <BookOpen size={16} className="mr-1.5" /> {t.header.guide}
        </Link>
        <Link
          href="/terminal"
          data-nav="terminal"
          className={`nav-btn retro-btn bg-coral text-cream font-pixel text-xs sm:text-sm px-3 sm:px-4 py-2 border-2 border-ink rounded-lg shadow-retro hover:bg-coral-dark hover:-translate-y-1 transition-transform flex items-center ${
            isTerminalActive ? "tab-active" : ""
          }`}
          dir="ltr"
        >
          <Terminal size={16} className="mr-1.5" /> {t.header.askPixel}
        </Link>
      </div>
    </header>
  );
}
