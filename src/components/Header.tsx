import Link from "next/link";
import { Cpu, VolumeX, BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center pb-6 mb-6 border-b-4 border-dashed border-ink gap-4 relative">
      <div className="flex items-center gap-3">
        <div className="bg-mustard border-3 border-ink p-2 rounded-lg shadow-retro text-ink rotate-[-3deg]">
          <Cpu size={24} strokeWidth={2.5} />
        </div>
        <div className="flex flex-col items-start">
          <span className="font-pixel text-xs tracking-widest text-dusty-blue uppercase block mb-1">
            Vibe Coding Studio
          </span>
          <h1 className="font-heading text-2xl md:text-3xl text-ink tracking-wide leading-none">
            دليل البرمجة التوليدية
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap justify-center">
        <button
          className="retro-btn bg-sage text-ink font-mono font-bold text-xs px-3 py-2 border-2 border-ink rounded-lg shadow-retro flex items-center gap-2 hover:bg-sage-light"
          dir="ltr"
        >
          <VolumeX size={16} /> <span>SOUND: OFF</span>
        </button>
        <Link
          href="/"
          className="retro-btn bg-mustard text-ink font-pixel text-xs px-3 py-2 border-2 border-ink rounded-lg shadow-retro hover:bg-mustard-light flex items-center"
          dir="ltr"
        >
          <BookOpen size={16} className="mr-1" /> GUIDE
        </Link>
      </div>
    </header>
  );
}
