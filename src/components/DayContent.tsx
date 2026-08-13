"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft, Home, Clock, PenTool } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { curriculumData, localizeModule } from "@/data/curriculum";
import { notFound } from "next/navigation";

interface DayContentProps {
  dayId: number;
  prevDay: number | null;
  nextDay: number | null;
}

export default function DayContent({ dayId, prevDay, nextDay }: DayContentProps) {
  const { locale, t } = useLocale();
  const dayData = curriculumData.find((d) => d.id === dayId);
  if (!dayData) notFound();
  const day = localizeModule(dayData, locale);
  const Icon = day.icon;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b-2 border-ink border-dashed pb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span
              className="bg-coral text-cream font-pixel text-xs px-2 py-1 border-2 border-ink shadow-retro-sm rotate-[-2deg]"
              dir="ltr"
            >
              {t.day.dayLabel(day.id)}
            </span>
            <span
              className="font-pixel text-[10px] text-dusty-blue tracking-widest uppercase"
              dir="ltr"
            >
              {t.day.moduleDetails}
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-ink">{day.title}</h2>
        </div>
        <Link
          href="/"
          className="retro-btn bg-cream text-ink font-pixel text-xs px-4 py-2 border-2 border-ink rounded-lg shadow-retro-sm flex items-center gap-2 hover:bg-cream-dark"
          dir="ltr"
        >
          <Home size={16} /> {t.day.backToGuide}
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h3 className="font-heading text-2xl text-ink mb-4 flex items-center gap-2">
              <Icon className="text-sage" size={24} /> {t.day.goal}
            </h3>
            <p className="font-body text-lg text-ink font-medium bg-cream p-5 border-3 border-ink rounded-xl shadow-retro">
              {day.goal}
            </p>
          </section>

          <section>
            <h3 className="font-heading text-2xl text-ink mb-4">{t.day.keyPoints}</h3>
            <ul className="space-y-4">
              {day.points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-cream-dark/50 p-4 border-2 border-ink rounded-lg shadow-retro-sm"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-mustard text-ink font-pixel text-xs flex items-center justify-center border-2 border-ink rounded-full mt-0.5">
                    0{index + 1}
                  </span>
                  <span className="font-body text-base text-ink/90 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-2xl text-ink mb-4">{t.day.slidePreview}</h3>
            <div className="crt-screen aspect-video flex items-center justify-center">
              <span className="font-pixel text-xs text-sage/70" dir="ltr">
                SLIDE EMBED — DAY {day.id}
              </span>
            </div>
          </section>

          {day.schedule && day.schedule.length > 0 && (
            <section>
              <h3 className="font-heading text-2xl text-ink mb-4 flex items-center gap-2">
                <Clock className="text-coral" size={24} /> {t.day.schedule}
              </h3>
              <div className="space-y-4 relative before:absolute before:inset-0 before:ms-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-ink before:border-r before:border-dashed before:border-cream-dark">
                {day.schedule.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-ink bg-mustard text-ink shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-retro-sm z-10 font-pixel text-xs">
                      {index + 1}
                    </div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl border-2 border-ink bg-cream shadow-retro-sm">
                      <div className="font-pixel text-[10px] text-coral mb-1">
                        {item.hour}
                      </div>
                      <h4 className="font-heading text-lg text-ink mb-2">
                        {item.title}
                      </h4>
                      <p className="font-body text-sm text-ink/80">
                        {item.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-dusty-blue/10 border-3 border-ink rounded-2xl p-6 shadow-retro sticky top-6">
            <h3 className="font-heading text-xl text-ink mb-4 flex items-center gap-2 border-b-2 border-ink pb-3 border-dashed">
              <PenTool className="text-dusty-blue" size={20} /> {t.day.toolsUsed}
            </h3>
            <ul className="space-y-3">
              {day.tools.map((tool, index) => (
                <li
                  key={index}
                  className="bg-cream border-2 border-ink px-3 py-2 rounded-lg font-mono text-sm text-ink flex items-center gap-2 shadow-retro-sm"
                  dir="ltr"
                >
                  <span className="w-2 h-2 bg-coral rounded-full border border-ink"></span>
                  {tool}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              {nextDay && (
                <Link
                  href={`/day/${nextDay}`}
                  className="retro-btn bg-sage text-ink font-pixel text-xs py-3 px-4 border-2 border-ink rounded-lg shadow-retro-sm w-full flex items-center justify-between hover:bg-sage-light"
                >
                  <ArrowRight size={16} /> <span>{t.day.nextDay}</span>
                </Link>
              )}
              {prevDay && (
                <Link
                  href={`/day/${prevDay}`}
                  className="retro-btn bg-cream text-ink font-pixel text-xs py-3 px-4 border-2 border-ink rounded-lg shadow-retro-sm w-full flex items-center justify-between hover:bg-cream-dark"
                >
                  <span>{t.day.prevDay}</span> <ArrowLeft size={16} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
