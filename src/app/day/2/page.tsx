import Link from "next/link";
import { ArrowLeft, ArrowRight, Target } from "lucide-react";

export default function Day2Page() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col lg:flex-row gap-6 items-start justify-between mb-10">
        <div className="relative w-full">
          <div className="bg-cream border-3 border-ink rounded-lg p-6 shadow-retro w-full relative z-0">
             <div className="flex items-center gap-3 mb-3 border-b-2 border-ink/20 pb-2">
                <span className="bg-ink text-cream font-pixel text-xs px-2 py-1 border-2 border-ink" dir="ltr">MODULE_02</span>
                <span className="font-pixel text-[10px] text-dusty-blue uppercase" dir="ltr">CONFIDENTIAL_DATA</span>
             </div>
             <h1 className="font-heading text-3xl md:text-4xl text-ink leading-tight">
               هندسة برومبت متقدمة (لتوليد الكود)
             </h1>
          </div>
        </div>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        <section className="relative">
          <div className="absolute -left-2 top-4 w-6 h-12 bg-coral border-2 border-ink rounded-l z-0"></div>
          <div className="bg-sage-light/30 border-3 border-ink rounded-xl p-6 shadow-retro relative z-10 ml-2">
            <h2 className="font-heading text-2xl text-ink mb-3 flex items-center gap-2">
              <Target size={24} className="text-coral" /> الهدف الرئيسي
            </h2>
            <p className="font-body text-lg text-ink font-semibold leading-relaxed">
              تعلم هياكل البرومبت المتقدمة والتحكم في مخرجات الذكاء الاصطناعي.
            </p>
          </div>
        </section>

        <section className="bg-ink rounded-xl border-4 border-ink shadow-retro-lg overflow-hidden flex flex-col">
          <div className="bg-cream-dark border-b-4 border-ink p-2 flex items-center justify-between" dir="ltr">
             <div className="flex gap-2 pl-2">
               <div className="w-3 h-3 rounded-full bg-coral border border-ink"></div>
               <div className="w-3 h-3 rounded-full bg-mustard border border-ink"></div>
               <div className="w-3 h-3 rounded-full bg-sage border border-ink"></div>
             </div>
             <div className="font-pixel text-[10px] text-ink pr-2">CHECKPOINTS.EXE</div>
          </div>
          <div className="p-6 bg-ink text-sage font-mono text-sm sm:text-base leading-relaxed space-y-4">
            <div dir="ltr" className="text-dusty-blue mb-2">&gt; INIT MODULE_02...</div>
            
            <div className="flex items-start gap-3">
              <span className="text-mustard shrink-0 mt-1" dir="ltr">[1]</span>
              <p className="text-cream">هياكل البرومبت (سياق، قيود، أمثلة).</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-mustard shrink-0 mt-1" dir="ltr">[2]</span>
              <p className="text-cream">التفكير المتسلسل وتقسيم المهام.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-mustard shrink-0 mt-1" dir="ltr">[3]</span>
              <p className="text-cream">System prompts وقوالب قابلة لإعادة الاستخدام، وتوجيه قرارات العمارة عبر البرومبت.</p>
            </div>
            <div dir="ltr" className="text-coral mt-4 animate-pulse">&gt; _</div>
          </div>
        </section>
      </div>

      <div className="flex justify-between items-center mt-12 border-t-2 border-ink/20 pt-6">
        <Link href="/day/3" className="retro-btn bg-coral text-cream font-pixel text-xs py-3 px-6 border-3 border-ink rounded-xl shadow-retro hover:bg-coral-dark flex items-center gap-2 transition-transform hover:-translate-y-1">
          <ArrowRight size={16} /> <span className="mt-1">اليوم التالي</span>
        </Link>
        
        <Link href="/day/1" className="retro-btn bg-dusty-blue text-cream font-pixel text-xs py-3 px-6 border-3 border-ink rounded-xl shadow-retro hover:bg-dusty-blue-dark flex items-center gap-2 transition-transform hover:-translate-y-1">
           <span className="mt-1">اليوم السابق</span> <ArrowLeft size={16} />
        </Link>
      </div>
    </div>
  );
}
