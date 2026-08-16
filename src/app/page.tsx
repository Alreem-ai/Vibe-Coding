"use client";

import Link from "next/link";
import Image from "next/image";
import { RefreshCcw, MessageCircle } from "lucide-react";
import ModuleCard from "@/components/ModuleCard";
import Mascot from "@/components/Mascot";
import { curriculumData, localizeModule } from "@/data/curriculum";
import { useLocale } from "@/context/LocaleContext";

// lucide-react dropped brand icons, so LinkedIn is a small inline mark to match XIcon's sizing
function LinkedinMark(props: { size?: number; className?: string }) {
  const { size = 18, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function TwitterXMark(props: { size?: number; className?: string }) {
  const { size = 18, className } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

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
            <h3 className="font-heading text-3xl text-ink">
              {t.home.behindHeading}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Alreem Card */}
          <div className="bg-cream border-3 border-ink rounded-xl shadow-retro p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="shrink-0 border-4 border-ink rounded-2xl shadow-retro rotate-[-2deg] overflow-hidden w-32 h-32 bg-cream-dark">
              <Image
                src="/images/founder.jpg"
                alt={t.home.founderName}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-start gap-3">
              <h4 className="font-heading text-2xl text-ink">{t.home.founderName}</h4>
              <p className="font-body text-sm text-ink/80 leading-relaxed">
                {t.home.founderBio}
              </p>
              <div className="flex items-center gap-2 mt-1 flex-wrap justify-center md:justify-start" dir="ltr">
                <a
                  href="https://www.linkedin.com/in/alreem-r-aldossary-aa827030b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn bg-cream text-ink font-pixel text-[10px] px-3 py-2 border-2 border-ink rounded-lg shadow-retro-sm flex items-center gap-1.5 hover:bg-cream-dark"
                >
                  <LinkedinMark size={14} /> LinkedIn
                </a>
                <a
                  href="https://x.com/AlreemDoss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn bg-cream text-ink font-pixel text-[10px] px-3 py-2 border-2 border-ink rounded-lg shadow-retro-sm flex items-center gap-1.5 hover:bg-cream-dark"
                >
                  <TwitterXMark size={14} /> X
                </a>
              </div>
            </div>
          </div>

          {/* Danah Card */}
          <div className="bg-cream border-3 border-ink rounded-xl shadow-retro p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="shrink-0 border-4 border-ink rounded-2xl shadow-retro rotate-[2deg] overflow-hidden w-32 h-32 bg-cream-dark flex items-center justify-center p-2">
              <Image
                src="/images/danah.svg"
                alt={t.home.coFounderName}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-start gap-3">
              <h4 className="font-heading text-2xl text-ink">{t.home.coFounderName}</h4>
              <p className="font-body text-sm text-ink/80 leading-relaxed opacity-60">
                {t.home.coFounderBio}
              </p>
              <div className="flex items-center gap-2 mt-1 flex-wrap justify-center md:justify-start" dir="ltr">
                <a
                  href="https://www.linkedin.com/in/danah-saif-120699387?utm_source=share_via&utm_content=profile&utm_mediu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn bg-cream text-ink font-pixel text-[10px] px-3 py-2 border-2 border-ink rounded-lg shadow-retro-sm flex items-center gap-1.5 hover:bg-cream-dark"
                >
                  <LinkedinMark size={14} /> LinkedIn
                </a>
                <a
                  href="https://danah-saif-portfolio.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn bg-cream text-ink font-pixel text-[10px] px-3 py-2 border-2 border-ink rounded-lg shadow-retro-sm flex items-center gap-1.5 hover:bg-cream-dark"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
