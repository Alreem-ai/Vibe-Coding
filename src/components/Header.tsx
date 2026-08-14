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
        <Link
          href="/"
          className={`retro-btn font-pixel text-xs sm:text-sm px-3 sm:px-4 py-2 border-2 border-ink rounded-lg shadow-retro flex items-center gap-2 transition-transform hover:-translate-y-1 ${
            isGuideActive
              ? "bg-mustard text-ink"
              : "bg-cream-dark text-ink hover:bg-mustard/50"
          }`}
          dir="ltr"
        >
          <BookOpen size={16} className="sm:hidden" />
          <BookOpen size={18} className="hidden sm:block" />
          <span className="mt-1">{t.header.guide}</span>
        </Link>

        <Link
          href="/terminal"
          className={`retro-btn font-pixel text-xs sm:text-sm px-3 sm:px-4 py-2 border-2 border-ink rounded-lg shadow-retro flex items-center gap-2 transition-transform hover:-translate-y-1 ${
            isTerminalActive
              ? "bg-coral text-cream"
              : "bg-coral/20 text-coral hover:bg-coral hover:text-cream"
          }`}
          dir="ltr"
        >
          <Terminal size={16} className="sm:hidden" />
          <Terminal size={18} className="hidden sm:block" />
          <span className="mt-1">{t.header.askPixel}</span>
        </Link>

        <LocaleToggle />
      </div>
    </header>
  );
}
