import Link from "next/link";
import { RefreshCcw, MessageCircle, Terminal } from "lucide-react";
import ModuleCard from "@/components/ModuleCard";
import Mascot from "@/components/Mascot";
import { curriculumData } from "@/data/curriculum";

export default function Home() {
  return (
    <>
      <main className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex flex-col gap-4 z-10">
            <div
              className="inline-self-start bg-sage text-ink font-pixel text-xs px-3 py-1 border-2 border-ink rounded shadow-retro-sm rotate-[-1deg] w-fit"
              dir="ltr"
            >
              SYSTEM STATUS: ONLINE
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
              تكلّمي... وخلّي{" "}
              <span className="bg-mustard px-2 border-2 border-ink inline-block rotate-1 shadow-retro-sm">
                الكود
              </span>{" "}
              يصير وحده
            </h2>

            <p className="font-body text-base md:text-lg text-ink font-semibold leading-relaxed bg-cream p-4 border-2 border-ink rounded-xl shadow-retro">
              مسار Vibe Coding يعلّمك تبنين تطبيقات حقيقية بالوصف الطبيعي، بمساعدة روبوتنا الصغير "بكسل" خطوة بخطوة. (توجيه وكلاء AI بدل الكتابة اليدوية).
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <a href="#curriculum" className="retro-btn bg-coral text-cream font-pixel text-sm px-5 py-3 border-3 border-ink rounded-xl shadow-retro flex items-center gap-2 hover:bg-coral-dark" dir="ltr">
                <RefreshCcw size={18} /> ESC / ENTR / SYNC
              </a>
              <a href="#behind-the-scenes" className="retro-btn bg-dusty-blue text-cream font-pixel text-sm px-4 py-3 border-3 border-ink rounded-xl shadow-retro flex items-center gap-2 hover:bg-dusty-blue-dark" dir="ltr">
                <MessageCircle size={18} /> TALK TO PIXEL
              </a>
            </div>

            <div
              className="bg-ink text-sage font-mono text-xs p-3 rounded-lg border-2 border-ink shadow-retro-sm flex flex-col gap-1"
              dir="ltr"
            >
              <div className="flex justify-between border-b border-sage/30 pb-1">
                <span>TERMINAL COMMAND</span>
                <span className="text-mustard">&gt; READY</span>
              </div>
              <div className="text-cream font-pixel text-[10px] mt-1">
                &gt; PROMPT + RUN // MODE: VIBE // TOOL: CURSOR
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

            <div
              className="absolute bottom-4 sm:bottom-10 left-6 sm:left-12 bg-sage text-ink p-2 rounded-2xl border-2 border-ink shadow-retro -rotate-6 z-20 flex items-center gap-1.5 animate-bounce"
              dir="ltr"
            >
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  fill="#A5C4B9"
                  stroke="#2B211B"
                  strokeWidth="2"
                />
                <circle cx="14" cy="18" r="2" fill="#2B211B" />
                <circle cx="26" cy="18" r="2" fill="#2B211B" />
                <path
                  d="M 16 25 Q 20 28 24 25"
                  stroke="#2B211B"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <span className="font-pixel text-[9px]">HELPER BLOB</span>
            </div>
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
              CATALOG & MODULES
            </span>
            <h3 className="font-heading text-3xl text-ink">مسار Vibe Coding</h3>
          </div>
          <div
            className="font-mono text-xs bg-cream p-2 border-2 border-ink rounded-lg shadow-retro-sm"
            dir="ltr"
          >
            SHOWING 5 CORE MODULES
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {curriculumData.map((module) => (
            <ModuleCard key={module.id} {...module} />
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
              BEHIND THE SCENES
            </span>
            <h3 className="font-heading text-3xl text-ink flex items-center gap-3">
              خلف الستار
              <span className="bg-mustard text-ink font-pixel text-xs px-2 py-1 border-2 border-ink shadow-retro-sm rotate-[-3deg] inline-block" dir="ltr">
                SOON
              </span>
            </h3>
          </div>
        </div>
        
        <div className="bg-ink/5 border-3 border-ink border-dashed rounded-xl p-8 flex items-center justify-center">
            <p className="font-body text-ink/60 text-center">
              قريباً ... سيتم إضافة معلومات المدربين وكواليس المعسكر هنا.
            </p>
        </div>
      </section>
    </>
  );
}
