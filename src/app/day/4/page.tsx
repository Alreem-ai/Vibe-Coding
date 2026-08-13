import Link from "next/link";
import { ArrowLeft, ArrowRight, Target, GitBranch, Cloud, Rocket, CheckCircle2, GitCommit, UploadCloud, MonitorPlay, Zap, Database, Server, GitMerge, PlayCircle, Link as LinkIcon } from "lucide-react";

export default function Day4Page() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <style>{`
        body {
          background-color: #e1c396 !important; /* Retro Sand */
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
                <span className="bg-ink text-cream font-pixel text-xs px-2 py-1 border-2 border-ink" dir="ltr">MODULE_04</span>
                <span className="font-pixel text-[10px] text-dusty-blue uppercase" dir="ltr">CONFIDENTIAL_DATA</span>
             </div>
             <h1 className="font-heading text-3xl md:text-4xl text-ink leading-tight mb-2">
               النشر السحابي وتكامل النظام
             </h1>
             <p className="font-body text-xl text-dusty-blue font-bold" dir="ltr">
               (Deployment & Integration)
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
              إنهاء دورة حياة البرمجيات (SDLC) ونقل المشروع من بيئة التطوير المحلية إلى بيئة الإنتاج الحية المتاحة للمستخدمين.
            </p>
          </div>
        </section>

        {/* Section 1 */}
        <section className="space-y-6">
          <div className="flex items-center gap-4 border-b-2 border-ink/10 pb-4 mb-2">
            <div className="bg-ink text-cream w-10 h-10 flex items-center justify-center rounded-lg border-2 border-ink shadow-sm font-heading pt-1">
              <GitBranch size={20} />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-ink">
              إدارة الأكواد والتحكم في الإصدارات
            </h2>
          </div>

          <div className="bg-cream border-3 border-ink rounded-xl p-6 md:p-8 shadow-retro flex flex-col md:flex-row gap-8 items-start">
             <div className="flex-grow space-y-5">
               <div>
                 <span className="bg-mustard text-ink font-pixel text-xs px-2 py-1 border-2 border-ink mb-3 inline-block">المحور التقني</span>
                 <p className="font-body text-xl text-ink font-bold">أنظمة التحكم في الإصدارات عبر بيئة (GitHub).</p>
               </div>
               
               <div>
                 <span className="bg-dusty-blue text-cream font-pixel text-xs px-2 py-1 border-2 border-ink mb-3 inline-block">المفهوم العلمي</span>
                 <p className="font-body text-ink font-semibold leading-relaxed">
                   في نماذج التطوير الموجهة بالذكاء الاصطناعي (Agentic Workflows)، تُنتج الآلة مئات الأسطر البرمجية بوقت قياسي. يعمل GitHub كـ <span className="highlight-mustard font-bold px-1">"مصدر وحيد للحقيقة" (Single Source of Truth)</span> لحفظ وتتبع هذه التغييرات بدقة، مما يمنع التعارض البرمجي ويسمح بالتراجع الفوري (Rollback) للنسخ المستقرة.
                 </p>
               </div>
               
               <div className="bg-white/80 p-5 rounded-xl border-2 border-ink/10 shadow-sm">
                 <h4 className="font-heading text-lg text-ink mb-4 border-b border-ink/10 pb-2">آلية العمل المنهجية:</h4>
                 <ul className="space-y-4 font-body text-ink/90 font-semibold text-base">
                   <li className="flex items-start gap-3"><GitCommit size={20} className="text-coral shrink-0 mt-0.5" /> <div><strong className="text-ink">المستودع (Repository):</strong> إنشاء بيئة مركزية آمنة لاستضافة ملفات المشروع.</div></li>
                   <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-sage shrink-0 mt-0.5" /> <div><strong className="text-ink">التوثيق (Commit):</strong> اعتماد التعديلات المحلية مع وصف فني لحالة النظام.</div></li>
                   <li className="flex items-start gap-3"><UploadCloud size={20} className="text-dusty-blue shrink-0 mt-0.5" /> <div><strong className="text-ink">المزامنة (Push):</strong> رفع الأكواد إلى الخوادم السحابية لتأمينها.</div></li>
                 </ul>
               </div>

               <div className="bg-sage/20 border-l-4 border-sage p-4 rounded-r-lg font-body font-bold text-ink flex items-center gap-3">
                 <Target className="text-sage-dark shrink-0" size={24} />
                 <span><span className="text-sage-dark">المخرج الفعلي:</span> مستودع سحابي موثق يحتوي على البنية التحتية للمشروع.</span>
               </div>
             </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-6 pt-8 border-t-4 border-dashed border-ink/20">
          <div className="flex items-center gap-4 border-b-2 border-ink/10 pb-4 mb-2">
             <div className="bg-dusty-blue text-cream w-10 h-10 flex items-center justify-center rounded-lg border-2 border-ink shadow-sm font-heading text-xl pt-1">
              <Cloud size={20} />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-ink">
              النشر السحابي والتكامل المستمر (CI/CD)
            </h2>
          </div>

          <div className="bg-cream border-3 border-ink rounded-xl p-6 md:p-8 shadow-retro flex flex-col md:flex-row gap-8 items-start">
             <div className="flex-grow space-y-5">
               <div>
                 <span className="bg-mustard text-ink font-pixel text-xs px-2 py-1 border-2 border-ink mb-3 inline-block">المحور التقني</span>
                 <p className="font-body text-xl text-ink font-bold">النشر السحابي وأتمتة التحديثات عبر منصة (Vercel).</p>
               </div>
               
               <div>
                 <span className="bg-dusty-blue text-cream font-pixel text-xs px-2 py-1 border-2 border-ink mb-3 inline-block">المفهوم العلمي</span>
                 <p className="font-body text-ink font-semibold leading-relaxed">
                   نقل النظام البرمجي من بيئة التطوير المحلية (Local Environment) إلى بيئة الإنتاج الحية (Production). نعتمد هنا على <span className="highlight-dusty-blue font-bold px-1">منهجية التكامل والنشر المستمر (CI/CD)</span> لضمان كفاءة التحديثات.
                 </p>
               </div>
               
               <div className="bg-white/80 p-5 rounded-xl border-2 border-ink/10 shadow-sm">
                 <h4 className="font-heading text-lg text-ink mb-4 border-b border-ink/10 pb-2">آلية العمل المنهجية:</h4>
                 <ul className="space-y-4 font-body text-ink/90 font-semibold text-base">
                   <li className="flex items-start gap-3"><GitMerge size={20} className="text-mustard-dark shrink-0 mt-0.5" /> <div><strong className="text-ink">الربط المعماري:</strong> دمج منصة الاستضافة (Vercel) مباشرة مع مستودع (GitHub).</div></li>
                   <li className="flex items-start gap-3"><Server size={20} className="text-dusty-blue shrink-0 mt-0.5" /> <div><strong className="text-ink">البناء الآلي (Automated Build):</strong> تهيئة الخوادم وتجميع الأكواد لإنتاج رابط النطاق (Domain).</div></li>
                   <li className="flex items-start gap-3"><Zap size={20} className="text-coral shrink-0 mt-0.5" /> <div><strong className="text-ink">التحديث التلقائي (Automation):</strong> رصد أي التزام (Commit) جديد في المستودع وتحديث الموقع الحي فورياً دون إيقاف الخدمة (Zero-Downtime Deployment).</div></li>
                 </ul>
               </div>

               <div className="bg-dusty-blue/20 border-l-4 border-dusty-blue p-4 rounded-r-lg font-body font-bold text-ink flex items-center gap-3">
                 <Target className="text-dusty-blue-dark shrink-0" size={24} />
                 <span><span className="text-dusty-blue-dark">المخرج الفعلي:</span> تطبيق ويب يعمل بكفاءة ومتاح للمستخدمين عبر رابط مباشر.</span>
               </div>
             </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-6 pt-8 border-t-4 border-dashed border-ink/20">
          <div className="flex items-center gap-4 border-b-2 border-ink/10 pb-4 mb-2">
             <div className="bg-coral text-cream w-10 h-10 flex items-center justify-center rounded-lg border-2 border-ink shadow-sm font-heading text-xl pt-1">
              <Rocket size={20} />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-ink">
              تكامل النظام والتسليم النهائي
            </h2>
          </div>

          <div className="bg-ink border-3 border-ink rounded-xl p-6 md:p-8 shadow-retro flex flex-col md:flex-row gap-8 items-start text-cream">
             <div className="flex-grow space-y-5">
               <div>
                 <span className="bg-mustard text-ink font-pixel text-xs px-2 py-1 border-2 border-ink mb-3 inline-block">المحور التقني</span>
                 <p className="font-body text-xl font-bold">تجميع المكونات، ضمان الجودة (QA)، وإطلاق المنتج.</p>
               </div>
               
               <div>
                 <span className="bg-dusty-blue text-cream font-pixel text-xs px-2 py-1 border-2 border-ink mb-3 inline-block">المفهوم العلمي</span>
                 <p className="font-body text-cream/90 font-semibold leading-relaxed">
                   إنهاء دورة حياة تطوير البرمجيات (SDLC). تتطلب هذه المرحلة اختبار ترابط أجزاء النظام (الواجهات، قواعد البيانات، والـ APIs)، ومعالجة أي شذوذ في البيانات أو أخطاء استجابة.
                 </p>
               </div>
               
               <div className="bg-black/30 p-5 rounded-xl border border-cream/20 shadow-sm">
                 <h4 className="font-heading text-lg text-cream mb-4 border-b border-cream/20 pb-2">آلية العمل المنهجية:</h4>
                 <ul className="space-y-4 font-body text-cream/90 font-semibold text-base">
                   <li className="flex items-start gap-3"><Database size={20} className="text-mustard shrink-0 mt-0.5" /> <div><strong className="text-mustard-light">التجميع (Integration):</strong> التأكد من توافقية جميع المكونات البرمجية.</div></li>
                   <li className="flex items-start gap-3"><MonitorPlay size={20} className="text-coral shrink-0 mt-0.5" /> <div><strong className="text-coral-light">التصحيح الموجه (Agentic Debugging):</strong> قراءة سجلات النظام (Logs) وتمرير رسائل الخطأ لوكلاء الذكاء الاصطناعي لحلها برمجياً (استبعاداً للتدخل اليدوي).</div></li>
                   <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-sage shrink-0 mt-0.5" /> <div><strong className="text-sage">الإطلاق (Showcase):</strong> استعراض النسخة النهائية المعتمدة (Production Build).</div></li>
                 </ul>
               </div>

               <div className="bg-sage/20 border-l-4 border-sage p-4 rounded-r-lg font-body font-bold text-cream flex items-center gap-3">
                 <Target className="text-sage shrink-0" size={24} />
                 <span><span className="text-sage">المخرج الفعلي:</span> جاهزية التطبيق كمنتج تقني متكامل وقابل للاستخدام الفعلي.</span>
               </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "ما هو GitHub باختصار؟",
                desc: "مقطع مبسط يشرح فكرة المستودعات والتحكم بالنسخ، ولماذا يعتبر GitHub الخزنة الآمنة لأكوادك.",
                url: "https://www.youtube.com/watch?v=8Dd7KRpKeaE"
              },
              {
                title: "النشر المجاني عبر Vercel",
                desc: "شرح عملي لكيفية ربط حسابك في GitHub بمنصة Vercel للحصول على رابط حي لموقعك في ثوانٍ.",
                url: "https://www.youtube.com/watch?v=Njs3UxaO_HA"
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
              روابط وموارد اليوم الرابع (الأدوات الأساسية)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* GitHub */}
            <Link href="https://github.com/" target="_blank" className="bg-white/80 border-2 border-ink/10 rounded-xl p-5 shadow-sm hover:shadow-retro-sm hover:border-ink/30 transition-all hover:-translate-y-1 group flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="bg-ink/10 text-ink p-3 rounded-lg group-hover:bg-ink group-hover:text-cream transition-colors w-fit">
                  <GitBranch size={28} />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-ink mb-1 group-hover:text-ink/80 transition-colors">منصة GitHub </h4>
                  <p className="font-body text-sm text-ink/70 font-semibold leading-relaxed">أنشئ حسابك المجاني الآن للبدء في حفظ وتوثيق أكواد مشروعك التي يولدها الذكاء الاصطناعي.</p>
                </div>
              </div>
            </Link>

            {/* Vercel */}
            <Link href="https://vercel.com/" target="_blank" className="bg-white/80 border-2 border-ink/10 rounded-xl p-5 shadow-sm hover:shadow-retro-sm hover:border-ink/30 transition-all hover:-translate-y-1 group flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="bg-mustard/20 text-mustard-dark p-3 rounded-lg group-hover:bg-mustard group-hover:text-ink transition-colors w-fit">
                  <Rocket size={28} />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-ink mb-1 group-hover:text-mustard-dark transition-colors">منصة Vercel </h4>
                  <p className="font-body text-sm text-ink/70 font-semibold leading-relaxed">الأداة الأسرع والأسهل لرفع مشاريع الويب. سجل دخولك باستخدام حساب GitHub لربط مشاريعك فوراً.</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

      </div>

      <div className="flex justify-between items-center mt-12 border-t-2 border-ink/10 pt-6 max-w-4xl mx-auto flex-row-reverse">
        <Link href="/day/5" className="retro-btn bg-coral text-cream font-pixel text-xs py-3 px-6 border-2 border-ink rounded-xl shadow-retro-sm hover:bg-coral-dark flex items-center gap-2 transition-transform hover:-translate-y-1">
          <span className="mt-1">اليوم التالي</span> <ArrowLeft size={16} />
        </Link>
        
        <Link href="/day/3" className="retro-btn bg-cream-dark text-ink font-pixel text-xs py-3 px-6 border-2 border-ink rounded-xl shadow-retro-sm hover:bg-cream flex items-center gap-2 transition-transform hover:-translate-y-1">
           <ArrowRight size={16} /> <span className="mt-1">اليوم السابق</span> 
        </Link>
      </div>
    </div>
  );
}
