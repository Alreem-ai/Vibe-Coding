import Link from "next/link";
import { ArrowLeft, ArrowRight, Target, Layout, Database, Bug, Cpu, Lightbulb, Image, Zap, CheckCircle2, MessageSquare, MonitorPlay, PlayCircle, Link as LinkIcon, Palette, Briefcase, Code2 } from "lucide-react";

export default function Day3Page() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <style>{`
        body {
          background-color: #deb1a5 !important;
        }
        .bg-texture {
          background-color: #F6F3E7 !important;
          background-image: none !important;
        }
      `}</style>
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-6 items-start justify-between mb-10">
        <div className="relative w-full">
          <div className="bg-cream border-3 border-ink rounded-lg p-6 shadow-retro w-full relative z-0">
             <div className="flex items-center gap-3 mb-3 border-b-2 border-ink/20 pb-2">
                <span className="bg-ink text-cream font-pixel text-xs px-2 py-1 border-2 border-ink" dir="ltr">MODULE_03</span>
                <span className="font-pixel text-[10px] text-dusty-blue uppercase" dir="ltr">CONFIDENTIAL_DATA</span>
             </div>
             <h1 className="font-heading text-3xl md:text-4xl text-ink leading-tight mb-2">
               تصحيح الأخطاء وربط الأنظمة
             </h1>
             <p className="font-body text-xl text-dusty-blue font-bold" dir="ltr">
               (APIs & AI Integration)
             </p>
          </div>
        </div>
      </div>

      <div className="space-y-12 max-w-4xl mx-auto">
        
        {/* Intro Box */}
        <section className="relative">
          <div className="absolute -left-2 top-4 w-6 h-12 bg-coral border-2 border-ink rounded-l z-0"></div>
          <div className="bg-sage-light/30 border-3 border-ink rounded-xl p-6 shadow-retro relative z-10 ml-2">
            <h2 className="font-heading text-2xl text-ink mb-3 flex items-center gap-2">
              <Target size={24} className="text-coral" /> الهدف من هذا اليوم
            </h2>
            <p className="font-body text-lg text-ink font-semibold leading-relaxed">
              التأكد من خلو المنصة من الأخطاء، وتوسيع قدراتها لتصبح احترافية عبر ربطها ببيانات خارجية ونماذج ذكاء اصطناعي.
            </p>
          </div>
        </section>

        {/* Section 1 */}
        <section className="space-y-6">
          <div className="flex items-center gap-4 border-b-2 border-ink/10 pb-4 mb-2">
            <div className="bg-mustard text-ink w-10 h-10 flex items-center justify-center rounded-lg border-2 border-ink shadow-sm font-heading text-xl pt-1">
              <Layout size={20} />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-ink">
              واجهات المستخدم وربط البيانات (UI/UX & APIs)
            </h2>
          </div>

          <p className="font-body text-lg font-bold text-ink mb-6">
            في هذه الساعة، سننتقل بالمشروع من مجرد واجهة ثابتة إلى تطبيق ديناميكي حي.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream border-3 border-ink rounded-xl p-6 shadow-retro flex flex-col h-full">
              <h3 className="font-heading text-xl text-ink mb-4 flex items-center gap-2">
                <Image size={24} className="text-coral shrink-0" /> 1. اختيار الـ UI/UX المناسب
              </h3>
              <p className="font-body text-ink mb-3 font-semibold leading-relaxed">
                <span className="highlight-coral font-bold ml-1">الفكرة:</span> كيف تختار تصميم واجهة مستخدم (UI) يخدم فكرة مشروعك ويوفر تجربة سلسة (UX).
              </p>
              <div className="bg-white/80 p-4 rounded-lg border border-ink/10 font-body text-ink/80 text-sm font-semibold leading-relaxed flex-grow">
                <strong>التطبيق باستخدام الذكاء الاصطناعي:</strong> كيف نوجه الوكيل (مثل Claude Code) لتوليد وبناء هذا التصميم. بدلاً من كتابة الكود من الصفر، سنطلب منه بناء مكونات واجهة مستخدم متكاملة (أزرار تفاعلية، قوائم، أو لوحة تحكم).
              </div>
            </div>

            <div className="bg-cream border-3 border-ink rounded-xl p-6 shadow-retro flex flex-col h-full">
              <h3 className="font-heading text-xl text-ink mb-4 flex items-center gap-2">
                <Database size={24} className="text-dusty-blue shrink-0" /> 2. دمج الـ APIs والبيانات
              </h3>
              <p className="font-body text-ink mb-3 font-semibold leading-relaxed">
                <span className="highlight-dusty-blue font-bold ml-1">الفكرة:</span> التطبيقات القوية لا تعتمد فقط على البيانات المحلية، تحتاج للاتصال بالعالم الخارجي.
              </p>
              <div className="bg-white/80 p-4 rounded-lg border border-ink/10 font-body text-ink/80 text-sm font-semibold leading-relaxed flex-grow">
                <strong>التطبيق:</strong> توجيه الذكاء الاصطناعي لربط التصميم بمصادر بيانات خارجية. مثل:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>جلب معلومات حية (كالطقس أو أسعار العملات).</li>
                  <li>ربط التطبيق بقواعد بيانات سحابية متقدمة لجعل التطبيق ديناميكياً.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-6 pt-8 border-t-4 border-dashed border-ink/20">
          <div className="flex items-center gap-4 border-b-2 border-ink/10 pb-4 mb-2">
             <div className="bg-sage text-ink w-10 h-10 flex items-center justify-center rounded-lg border-2 border-ink shadow-sm font-heading text-xl pt-1">
              <Cpu size={20} />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-ink">
              الميزات الذكية وتصحيح الأخطاء (AI in AI & Debugging)
            </h2>
          </div>

          <p className="font-body text-lg font-bold text-ink mb-6">
            هنا سنضيف "الذكاء" لتطبيقاتنا، ونتعلم كيف نتعامل مع الأخطاء التي تظهر عند ربط الأنظمة المعقدة.
          </p>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border-2 border-ink/10 shadow-sm flex flex-col md:flex-row items-start gap-4 hover:shadow-retro-sm transition-shadow">
              <div className="bg-mustard/30 text-mustard-dark p-3 rounded-xl shrink-0 mt-1"><Zap size={24} /></div>
              <div className="flex-grow">
                <h4 className="font-heading text-xl mb-3 text-ink">1. تكامل الذكاء الاصطناعي (AI in AI)</h4>
                <div className="space-y-3">
                  <p className="font-body text-lg font-semibold text-ink/90 leading-relaxed">
                    <span className="text-coral font-bold">الفكرة:</span> كيف نطلب من الوكيل (Agent) إضافة ميزات ذكية داخل تطبيقنا نفسه.
                  </p>
                  <p className="font-body text-lg font-semibold text-ink/90 leading-relaxed">
                    <span className="text-sage font-bold">التطبيق:</span> بدلاً من بناء تطبيق عادي، سنجعل التطبيق نفسه يستخدم الذكاء الاصطناعي. أمثلة:
                  </p>
                  <ul className="space-y-3 text-ink/80 font-semibold font-body text-base">
                    <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-mustard shrink-0" /> ربط التطبيق بخدمات التعرف على الصور.</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-mustard shrink-0" /> إضافة ميزة تحليل النصوص أو الترجمة الفورية داخل منصتك.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-xl border-2 border-ink/10 shadow-sm flex flex-col md:flex-row items-start gap-4 hover:shadow-retro-sm transition-shadow">
              <div className="bg-coral/20 text-coral-dark p-3 rounded-xl shrink-0 mt-1"><Bug size={24} /></div>
              <div>
                <h4 className="font-heading text-xl mb-3 text-ink">2. مراجعة المخرجات وإصلاح الأخطاء (Debugging)</h4>
                <div className="space-y-3">
                  <p className="font-body text-lg font-semibold text-ink/90 leading-relaxed">
                    <span className="text-mustard-dark font-bold">الفكرة:</span> عند ربط الـ APIs، من الطبيعي أن تظهر أخطاء (مثل فشل الاتصال بقاعدة البيانات أو بيانات غير متوافقة).
                  </p>
                  <p className="font-body text-lg font-semibold text-ink/90 leading-relaxed">
                    <span className="text-dusty-blue font-bold">التطبيق بأسلوب Vibe Coding:</span> كيف نكتشف الأخطاء في النظام ونوجه الوكيل لإصلاحها بنفسه من خلال الأوامر النصية والتوجيه الدقيق فقط (بدون التعديل اليدوي على الكود). سنتعلم كيف نقرأ رسائل الخطأ ونمررها للوكيل بشكل صحيح.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-6 pt-8 border-t-4 border-dashed border-ink/20">
          <div className="flex items-center gap-4 border-b-2 border-ink/10 pb-4 mb-2">
             <div className="bg-dusty-blue text-cream w-10 h-10 flex items-center justify-center rounded-lg border-2 border-ink shadow-sm font-heading text-xl pt-1">
              <Lightbulb size={20} />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-ink">
              عصف ذهني وانطلاق المشاريع
            </h2>
          </div>

          <p className="font-body text-lg font-bold text-ink mb-6">
            هذه الساعة مخصصة للإلهام وبدء التخطيط الفعلي للمشاريع النهائية.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream border-3 border-ink rounded-xl p-6 shadow-retro flex flex-col h-full">
              <h3 className="font-heading text-xl text-ink mb-4 flex items-center gap-2">
                <MonitorPlay size={24} className="text-coral shrink-0" /> 1. عرض المشاريع
              </h3>
              <p className="font-body text-lg text-ink/90 font-semibold leading-relaxed flex-grow">
                <span className="highlight-mustard font-bold ml-1">النشاط:</span> عرض نماذج سابقة وأفكار ملهمة تساعدك في تحديد مسار مشروعك وبناء تصور واضح قبل مرحلة التنفيذ.
              </p>
            </div>

            <div className="bg-ink border-3 border-ink rounded-xl p-6 shadow-retro flex flex-col h-full text-cream">
              <h3 className="font-heading text-xl text-cream mb-4 flex items-center gap-2">
                <MessageSquare size={24} className="text-sage shrink-0" /> 2. توليد أفكار المشروع النهائي
              </h3>
              <p className="font-body text-lg text-cream/90 font-semibold leading-relaxed mb-4">
                <span className="text-coral-light font-bold">النشاط:</span> جلسة عصف ذهني مفتوحة.
              </p>
              <ul className="space-y-3 font-body font-bold text-cream/80 flex-grow text-base">
                <li className="flex items-start gap-2"><div className="w-2 h-2 rounded-full bg-sage shrink-0 mt-2"></div> يبدأ كل متدرب بتحديد فكرة مشروعه النهائي.</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 rounded-full bg-sage shrink-0 mt-2"></div> التفكير في تجربة المستخدم والواجهة (UI/UX).</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 rounded-full bg-sage shrink-0 mt-2"></div> تحديد الـ APIs والخدمات الخارجية للمشروع.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Enrichment Videos */}
        <section className="space-y-6 pt-8 border-t-4 border-dashed border-ink/20">
          <div className="flex items-center gap-4 border-b-2 border-ink/10 pb-4 mb-2">
            <div className="bg-coral text-cream w-10 h-10 flex items-center justify-center rounded-lg border-2 border-ink shadow-sm font-heading pt-1">
              <PlayCircle size={20} />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-ink">
              مراجع إثرائية للمشاهدة
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "ما هو الـ API؟ (شرح مبسط)",
                desc: "مقطع قصير يشرح فكرة الواجهات البرمجية (APIs) وكيف تتخاطب التطبيقات مع بعضها.",
                url: "https://www.youtube.com/watch?v=s7wmiS2mSXY"
              },
              {
                title: "تصميم واجهات المستخدم بالـ AI",
                desc: "كيف تستلهم أفكاراً وتوجه الذكاء الاصطناعي لبناء واجهة (UI/UX) احترافية وعملية.",
                url: "https://www.youtube.com/watch?v=c9WGJW0BBAA"
              },
              {
                title: "دمج الذكاء الاصطناعي بتطبيقاتك",
                desc: "نظرة عملية على كيفية إضافة ميزات ذكية (تحليل نصوص وصور) داخل مشروعك الخاص.",
                url: "https://www.youtube.com/watch?v=R_QZtO6Dwtk"
              }
            ].map((video, idx) => (
              <Link 
                key={idx} 
                href={video.url} 
                target="_blank" 
                className="bg-white/80 border-2 border-ink/10 rounded-xl p-5 shadow-sm hover:shadow-retro-sm hover:border-ink/30 transition-all hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div className="flex flex-col gap-4">
                  <div className="bg-coral/10 text-coral p-2.5 rounded-lg group-hover:bg-coral group-hover:text-cream transition-colors w-fit">
                    <PlayCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-ink mb-2 group-hover:text-coral transition-colors leading-snug">{video.title}</h4>
                    <p className="font-body text-sm text-ink/70 font-semibold leading-relaxed">{video.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="space-y-6 pt-8 border-t-4 border-dashed border-ink/20">
          <div className="flex items-center gap-4 border-b-2 border-ink/10 pb-4 mb-4">
            <div className="bg-white text-ink w-10 h-10 flex items-center justify-center rounded-lg border-2 border-ink shadow-sm font-heading pt-1">
              <LinkIcon size={20} />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-ink">
              روابط وموارد اليوم الثالث 
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Behance */}
            <Link href="https://www.behance.net/" target="_blank" className="bg-white/80 border-2 border-ink/10 rounded-xl p-5 shadow-sm hover:shadow-retro-sm hover:border-ink/30 transition-all hover:-translate-y-1 group flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="bg-dusty-blue/10 text-dusty-blue-dark p-3 rounded-lg group-hover:bg-dusty-blue group-hover:text-cream transition-colors w-fit">
                  <Palette size={28} />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-ink mb-1 group-hover:text-dusty-blue-dark transition-colors">منصة Behance</h4>
                  <p className="font-body text-sm text-ink/70 font-semibold leading-relaxed">أكبر منصة عالمية لاستلهام أفكار التصميم (UI/UX) والتغذية البصرية قبل برمجة مشروعك.</p>
                </div>
              </div>
            </Link>

            {/* Dribbble */}
            <Link href="https://dribbble.com/" target="_blank" className="bg-white/80 border-2 border-ink/10 rounded-xl p-5 shadow-sm hover:shadow-retro-sm hover:border-ink/30 transition-all hover:-translate-y-1 group flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="bg-sage/20 text-sage-dark p-3 rounded-lg group-hover:bg-sage group-hover:text-ink transition-colors w-fit">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-ink mb-1 group-hover:text-sage-dark transition-colors">منصة Dribbble </h4>
                  <p className="font-body text-sm text-ink/70 font-semibold leading-relaxed">مصدر ممتاز وسريع للبحث عن تصاميم واجهات مبتكرة لأخذ الأفكار وبناء تصور واضح.</p>
                </div>
              </div>
            </Link>
            
            {/* APIs */}
            <Link href="https://github.com/public-apis/public-apis" target="_blank" className="bg-white/80 border-2 border-ink/10 rounded-xl p-5 shadow-sm hover:shadow-retro-sm hover:border-ink/30 transition-all hover:-translate-y-1 group flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="bg-mustard/20 text-mustard-dark p-3 rounded-lg group-hover:bg-mustard group-hover:text-ink transition-colors w-fit">
                  <Code2 size={28} />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-ink mb-1 group-hover:text-mustard-dark transition-colors">مكتبة Public APIs </h4>
                  <p className="font-body text-sm text-ink/70 font-semibold leading-relaxed">مستودع ضخم يضم واجهات مجانية (طقس، أخبار) لربطها بمشروعك وجعله ديناميكياً.</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

      </div>

      <div className="flex justify-between items-center mt-12 border-t-2 border-ink/10 pt-6 max-w-4xl mx-auto flex-row-reverse">
        <Link href="/day/4" className="retro-btn bg-coral text-cream font-pixel text-xs py-3 px-6 border-2 border-ink rounded-xl shadow-retro-sm hover:bg-coral-dark flex items-center gap-2 transition-transform hover:-translate-y-1">
          <span className="mt-1">اليوم التالي</span> <ArrowLeft size={16} />
        </Link>
        
        <Link href="/day/2" className="retro-btn bg-cream-dark text-ink font-pixel text-xs py-3 px-6 border-2 border-ink rounded-xl shadow-retro-sm hover:bg-cream flex items-center gap-2 transition-transform hover:-translate-y-1">
           <ArrowRight size={16} /> <span className="mt-1">اليوم السابق</span> 
        </Link>
      </div>
    </div>
  );
}
