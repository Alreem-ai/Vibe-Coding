"use client";

import { useState } from "react";
import Link from "next/link";
import { LucideIcon, Lock, ShieldAlert, Undo2 } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

interface ModuleCardProps {
  id: number;
  shortTitle: string;
  goal: string;
  icon: LucideIcon;
  colorClass: string;
  tapeColor: string;
  isLocked?: boolean;
  lockedStyle?: "warning" | "encrypted" | "ghost";
}

export default function ModuleCard({
  id,
  shortTitle,
  goal,
  icon: Icon,
  colorClass,
  tapeColor,
  isLocked,
  lockedStyle,
}: ModuleCardProps) {
  const { t, locale } = useLocale();
  const lockedTitle = locale === "ar" ? "محتوى مقفل" : "Content Locked";
  const lockedDesc = locale === "ar" 
    ? "سيتم إتاحة هذا المحتوى تدريجياً مع تقدمك في البرنامج."
    : "This content will unlock gradually as you progress in the program.";
  const [isRevealed, setIsRevealed] = useState(false);

  // Mapping color class to Tailwind background/text classes for the icon container
  const colorMap: Record<string, { bg: string; text: string; button: string; buttonText: string }> = {
    "dusty-blue": { bg: "bg-dusty-blue/20", text: "text-dusty-blue", button: "bg-dusty-blue", buttonText: "text-cream" },
    sage: { bg: "bg-sage/20", text: "text-sage", button: "bg-sage", buttonText: "text-ink" },
    coral: { bg: "bg-coral/20", text: "text-coral", button: "bg-coral", buttonText: "text-cream" },
    mustard: { bg: "bg-mustard/20", text: "text-mustard", button: "bg-mustard", buttonText: "text-ink" },
    ink: { bg: "bg-ink/20", text: "text-ink", button: "bg-ink", buttonText: "text-cream" },
  };

  const colors = colorMap[colorClass] || colorMap["dusty-blue"];

  const handleLockClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsRevealed(true);
  };

  const renderNormalCard = (isInteractive: boolean) => (
    <div className={`group bg-cream rounded-xl p-4 shadow-retro relative flex flex-col justify-between transition-all duration-300 h-full ${isInteractive ? 'hover:-translate-y-1 hover:shadow-retro-lg' : ''}`}>
      <div>
        <div className={`${colors.bg} p-3 rounded-lg mb-3 flex items-center justify-center`}>
          <Icon size={40} className={`${colors.text} ${isInteractive ? 'group-hover:scale-110' : ''} transition-transform duration-300`} strokeWidth={1.5} />
        </div>
        <div className="font-pixel text-xs text-coral mb-1">
          {t.moduleCard.modulePrefix}
          {id}
        </div>
        <h4 className="font-heading text-xl text-ink mb-1">{shortTitle}</h4>
        <p className="font-body text-sm text-ink/80 mb-3">{goal}</p>
      </div>
      {isInteractive ? (
        <Link
          href={`/day/${id}`}
          className={`retro-btn ${colors.button} ${colors.buttonText} font-pixel text-xs py-2.5 border-2 border-ink rounded-lg shadow-retro-sm w-full text-center block uppercase hover:opacity-90 mt-4`}
          dir="ltr"
        >
          {t.moduleCard.viewSchematic}
        </Link>
      ) : (
        <button
          onClick={handleLockClick}
          className={`retro-btn ${colors.button} ${colors.buttonText} font-pixel text-xs py-2.5 border-2 border-ink rounded-lg shadow-retro-sm w-full text-center block uppercase hover:opacity-90 mt-4 cursor-pointer`}
          dir="ltr"
        >
          {t.moduleCard.viewSchematic}
        </button>
      )}
    </div>
  );

  const renderLockedFace = () => (
    <div className="bg-ink rounded-xl shadow-retro relative flex flex-col items-center justify-between h-full overflow-hidden border-2 border-ink p-5">
      {/* Subtle paper texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}></div>
      
      {/* Decorative corner accents */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-mustard/40 rounded-tl-sm"></div>
      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-mustard/40 rounded-tr-sm"></div>
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-mustard/40 rounded-bl-sm"></div>
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-mustard/40 rounded-br-sm"></div>

      {/* Top label */}
      <div className="relative z-10 font-pixel text-[10px] text-mustard/60 tracking-[0.25em] uppercase" dir="ltr">
        SEALED
      </div>

      {/* Gold lock icon */}
      <div className="relative z-10 flex flex-col items-center my-auto">
        <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ background: 'radial-gradient(circle, rgba(228,190,122,0.15) 0%, transparent 70%)' }}>
          <Lock size={48} className="text-mustard drop-shadow-md" strokeWidth={1.5} />
        </div>

        {/* Text below seal */}
        <h4 className="font-heading text-xl text-cream mt-4 mb-1">
          {locale === "ar" ? `اليوم ${id}` : `Day ${id}`}
        </h4>
        <div className="w-12 h-[1px] bg-mustard/40 mb-2"></div>
        <p className="font-body text-xs text-cream/40 max-w-[190px] leading-relaxed text-center">
          {locale === "ar" 
            ? "سيُفتح هذا المحتوى مع تقدّمك في البرنامج" 
            : "This content will unlock as you progress"}
        </p>
      </div>

      {/* Return button */}
      <button 
        onClick={(e) => { e.preventDefault(); setIsRevealed(false); }} 
        className="relative z-10 w-full py-2 bg-mustard/10 hover:bg-mustard/20 border border-mustard/30 rounded-lg font-pixel text-[11px] text-mustard/80 flex items-center justify-center gap-2 uppercase transition-colors cursor-pointer"
      >
        <Undo2 size={13} /> {locale === "ar" ? "عودة" : "BACK"}
      </button>
    </div>
  );

  if (isLocked) {
    return (
      <div className="relative w-full h-full [perspective:1000px]">
        <div className={`w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] ${isRevealed ? '[transform:rotateY(180deg)]' : ''}`}>
          <div className="w-full h-full [backface-visibility:hidden]">
            {renderNormalCard(false)}
          </div>
          <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
            {renderLockedFace()}
          </div>
        </div>
      </div>
    );
  }

  return renderNormalCard(true);
}
