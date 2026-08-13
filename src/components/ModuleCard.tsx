import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ModuleCardProps {
  id: number;
  shortTitle: string;
  goal: string;
  icon: LucideIcon;
  colorClass: string;
  tapeColor: string;
}

export default function ModuleCard({
  id,
  shortTitle,
  goal,
  icon: Icon,
  colorClass,
  tapeColor,
}: ModuleCardProps) {
  // Mapping color class to Tailwind background/text classes for the icon container
  const colorMap: Record<string, { bg: string; text: string; button: string; buttonText: string }> = {
    "dusty-blue": { bg: "bg-dusty-blue/20", text: "text-dusty-blue", button: "bg-dusty-blue", buttonText: "text-cream" },
    sage: { bg: "bg-sage/20", text: "text-sage", button: "bg-sage", buttonText: "text-ink" },
    coral: { bg: "bg-coral/20", text: "text-coral", button: "bg-coral", buttonText: "text-cream" },
    mustard: { bg: "bg-mustard/20", text: "text-mustard", button: "bg-mustard", buttonText: "text-ink" },
    ink: { bg: "bg-ink/20", text: "text-ink", button: "bg-ink", buttonText: "text-cream" },
  };

  const colors = colorMap[colorClass] || colorMap["dusty-blue"];

  return (
    <div className="bg-cream border-3 border-ink rounded-xl p-4 shadow-retro relative flex flex-col justify-between hover:-translate-y-1 transition-transform">
      <div>
        <div className={`${colors.bg} p-3 rounded-lg border-2 border-ink mb-3 flex items-center justify-center`}>
          <Icon size={40} className={colors.text} strokeWidth={1.5} />
        </div>
        <div className="font-pixel text-[10px] text-coral mb-1" dir="ltr">
          MODULE #0{id}
        </div>
        <h4 className="font-heading text-xl text-ink mb-1">{shortTitle}</h4>
        <p className="font-body text-xs text-ink/80 mb-3">{goal}</p>
      </div>
      <Link
        href={`/day/${id}`}
        className={`retro-btn ${colors.button} ${colors.buttonText} font-pixel text-xs py-2 border-2 border-ink rounded-lg shadow-retro-sm w-full text-center block uppercase`}
        dir="ltr"
      >
        VIEW SCHEMATIC
      </Link>
    </div>
  );
}
