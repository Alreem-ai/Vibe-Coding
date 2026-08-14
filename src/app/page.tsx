"use client";

import Link from "next/link";
import { RefreshCcw, MessageCircle } from "lucide-react";
import ModuleCard from "@/components/ModuleCard";
import Mascot from "@/components/Mascot";
import { curriculumData, localizeModule } from "@/data/curriculum";
import { useLocale } from "@/context/LocaleContext";

export default function Home() {
  const { locale, t } = useLocale();

  return (
    <>
      <main className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex flex-col gap-4 z-10">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-ink leading-tight">
              {t.home.heroHeadingPrefix}{" "}
              <span className="relative inline-block px-2">
                <span className="relative z-10">{t.home.heroHeadingHighlight}</span>
                <span className="absolute bottom-1.5 left-0 w-full h-[55%] bg-[#F2D296] -z-10 rounded-sm"></span>
              </span>{" "}
              {t.home.heroHeadingSuffix}
            </h2>

            <p className="font-body text-base md:text-lg text-ink font-semibold leading-relaxed bg-cream p-4 border-2 border-ink rounded-xl shadow-retro whitespace-pre-line">
              {t.home.heroParagraph}
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <a href="#curriculum" className="retro-btn bg-coral text-cream font-pixel text-sm px-6 py-4 border-3 border-ink rounded-xl shadow-retro flex items-center gap-2 hover:bg-coral-dark hover:-translate-y-1 transition-transform" dir="ltr">
                <RefreshCcw size={18} /> {t.home.heroCta}
              </a>
              <Link href="/terminal" className="retro-btn bg-dusty-blue text-cream font-pixel text-sm px-5 py-4 border-3 border-ink rounded-xl shadow-retro flex items-center gap-2 hover:bg-dusty-blue-dark hover:-translate-y-1 transition-transform" dir="ltr">
                <MessageCircle size={18} /> {t.home.talkToPixel}
              </Link>
            </div>

            <div
              className="bg-ink text-sage font-mono text-xs p-3 rounded-lg border-2 border-ink shadow-retro-sm flex flex-col gap-1"
              dir="ltr"
            >
              <div className="flex justify-between border-b border-sage/30 pb-1">
                <span>{t.home.terminalCommand}</span>
                <span className="text-mustard">{t.home.terminalReady}</span>
              </div>
              <div className="text-cream font-pixel text-[10px] mt-1">
                {t.home.terminalPrompt}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative flex justify-center items-center py-12 min-h-[500px]">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 600 400"
              fill="none"
            >
              <path
                className="wire-svg"
                d="M 80,100 C 120,20 200,220 260,150 C 320,80 380,280 480,120"
                stroke="#E06D53"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                className="wire-svg"
                d="M 50,300 C 150,380 220,100 340,320 C 420,400 520,250 560,300"
                stroke="#E09F3E"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                className="wire-svg"
                d="M 200,50 C 250,180 100,280 300,380"
                stroke="#4D7C8A"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute w-[85%] h-[90%] bg-cream border-3 border-ink rounded-2xl shadow-retro rotate-2 z-0"></div>
            <div className="absolute w-[80%] h-[85%] bg-sage-light/40 border-2 border-dashed border-ink rounded-xl -rotate-2 z-0"></div>



            <Mascot />


          </div>
        </div>
      </main>

      <section id="curriculum" className="mt-12 pt-8 border-t-4 border-ink">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2">
          <div>
            <span
              className="font-pixel text-xs text-coral tracking-widest uppercase"
              dir="ltr"
            >
              {t.home.catalogLabel}
            </span>
            <h3 className="font-heading text-3xl text-ink">{t.home.catalogHeading}</h3>
          </div>
          <div
            className="font-mono text-xs bg-cream p-2 border-2 border-ink rounded-lg shadow-retro-sm"
            dir="ltr"
          >
            {t.home.showingModules(curriculumData.length)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {curriculumData.map((module) => (
            <ModuleCard key={module.id} {...localizeModule(module, locale)} />
          ))}
        </div>
      </section>

      <section id="behind-the-scenes" className="mt-12 pt-8 border-t-4 border-ink">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2">
          <div>
            <span
              className="font-pixel text-xs text-dusty-blue tracking-widest uppercase"
              dir="ltr"
            >
              {t.home.behindLabel}
            </span>
            <h3 className="font-heading text-3xl text-ink flex items-center gap-3">
              {t.home.behindHeading}
              <span className="bg-mustard text-ink font-pixel text-xs px-2 py-1 border-2 border-ink shadow-retro-sm rotate-[-3deg] inline-block" dir="ltr">
                {t.home.soon}
              </span>
            </h3>
          </div>
        </div>

        <div className="bg-ink/5 border-3 border-ink border-dashed rounded-xl p-8 flex items-center justify-center">
            <p className="font-body text-ink/60 text-center">
              {t.home.behindText}
            </p>
        </div>
      </section>
    </>
  );
}
