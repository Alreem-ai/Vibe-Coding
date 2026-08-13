import Link from "next/link";
import { ArrowLeft, ArrowRight, Target, Cpu, MessageSquare, Terminal, CheckCircle2, XCircle, Zap, Code, AlertTriangle, Clock, Lightbulb, Brain, PlayCircle, FileText, Wrench, Globe, Link as LinkIcon, Download } from "lucide-react";

export default function Day2Page() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <style>{`
        body {
          background-color: #9cb4a7 !important;
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
                <span className="bg-ink text-cream font-pixel text-xs px-2 py-1 border-2 border-ink" dir="ltr">MODULE_02</span>
                <span className="font-pixel text-[10px] text-dusty-blue uppercase" dir="ltr">CONFIDENTIAL_DATA</span>
             </div>
             <h1 className="font-heading text-3xl md:text-4xl text-ink leading-tight mb-2">
               وثيقة المتطلبات (BRD) ووكلاء الذكاء الاصطناعي
             </h1>
             <p className="font-body text-xl text-dusty-blue font-bold">
               من هندسة الأوامر البسيطة إلى إدارة وكلاء الذكاء الاصطناعي (Agentic AI)
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
              <Target size={24} className="text-coral" /> الانتقال لمستوى أعلى
            </h2>
            <p className="font-body text-lg text-ink font-semibold leading-relaxed">
              في اليوم الأول تعلمنا كيف "نتحدث" مع الذكاء الاصطناعي. اليوم سننتقل لمستوى أعلى: كيف "نوجه" الذكاء الاصطناعي ليبني أنظمة كاملة. سنتعلم كيف نكتب وثيقة متطلبات أعمال (BRD) تعتمد على الهيكلة والمنطق بدلاً من السرد الإنشائي، وكيف نستخدمها لتوجيه وكلاء الذكاء الاصطناعي (AI Agents) في بيئات التطوير المتقدمة.
            </p>
          </div>
        </section>

        {/* Section 1 */}
        <section className="space-y-6">
          <div className="flex items-center gap-4 border-b-2 border-ink/10 pb-4 mb-2">
            <div className="bg-mustard text-ink w-10 h-10 flex items-center justify-center rounded-lg border-2 border-ink shadow-sm font-heading text-xl pt-1">
              <Clock size={20} />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-ink">
              مفهوم الـ Agentic AI ووثيقة المتطلبات
            </h2>
          </div>

          <p className="font-body text-lg font-bold text-ink mb-6">
            في هذا الجزء، سنغير طريقة تفكيرنا من "مستخدم يسأل شات بوت" إلى "مدير مشروع يوجه فريقاً من الوكلاء".
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream border-3 border-ink rounded-xl p-6 shadow-retro">
              <h3 className="font-heading text-xl text-ink mb-4 flex items-center gap-2">
                <Brain size={20} className="text-coral" /> 1. عقلية الوكلاء (Agentic Mindset)
              </h3>
              <p className="font-body text-ink mb-4 font-semibold leading-relaxed">
                الفرق الجوهري هنا هو الاستقلالية. عندما تسأل ChatGPT العادي، فهو يعطيك الإجابة وينتظر. لكن عندما تتعامل مع "وكيل ذكاء اصطناعي" (AI Agent)، فأنت تعطيه هدفاً، وهو يقوم <strong>بالتخطيط، كتابة الكود، اختباره، وتصحيح الأخطاء بنفسه!</strong>
              </p>
              <div className="bg-sage p-3 rounded-lg border-2 border-ink text-sm font-bold shadow-retro-sm text-center">
                أنت هنا لست مبرمجاً يدوياً، أنت "موجّه" (Director).
              </div>
            </div>

            <div className="bg-cream border-3 border-ink rounded-xl p-6 shadow-retro">
              <h3 className="font-heading text-xl text-ink mb-4 flex items-center gap-2">
                <FileText size={20} className="text-dusty-blue" /> 2. وثيقة المتطلبات (AI-Focused BRD)
              </h3>
              <p className="font-body text-ink mb-4 font-semibold leading-relaxed">
                الذكاء الاصطناعي يكره الحشو والسرد الإنشائي الطويل (Text Bloat). لكي توجه وكيلك بدقة، يجب أن تصيغ متطلباتك بـ "منطق هيكلي" (Structured Wireframe Logic).
              </p>
            </div>
          </div>

          {/* BRD Comparison */}
          <div className="space-y-6 mt-8">
            <div className="bg-coral/10 border-2 border-coral rounded-xl p-5 shadow-sm flex flex-col md:flex-row items-center gap-4">
              <div className="shrink-0 flex flex-col items-center justify-center md:border-l-2 md:border-coral/20 md:pl-5 text-coral-dark">
                <XCircle size={28} className="mb-1" />
                <h3 className="font-heading text-lg whitespace-nowrap">السرد الإنشائي</h3>
              </div>
              <div className="flex-grow w-full text-center md:text-right">
                <p className="font-body text-ink text-lg italic font-bold mb-2">
                  "أريد موقعاً جميلاً للطلاب يمكنهم من خلاله التحدث مع بعضهم ومشاركة الملفات بسهولة..."
                </p>
                <p className="font-body text-ink/70 text-sm font-semibold">
                  <span className="bg-coral/20 px-2 py-1 rounded text-coral-dark ml-2">خطأ:</span> 
                  حشو زائد يشتت الآلة عن المتطلبات التقنية الفعلية.
                </p>
              </div>
            </div>

            <div className="bg-sage/10 border-2 border-sage rounded-xl p-5 shadow-sm flex flex-col md:flex-row items-center gap-4">
              <div className="shrink-0 flex flex-col items-center justify-center md:border-l-2 md:border-sage/30 md:pl-5 text-sage">
                <CheckCircle2 size={32} className="mb-1" />
                <h3 className="font-heading text-xl whitespace-nowrap text-ink">المنطق الهيكلي</h3>
              </div>
              <div className="flex-grow w-full">
                <div className="bg-white/80 p-5 rounded-xl border border-ink/5 font-body font-semibold text-ink space-y-3 shadow-sm leading-relaxed">
                  <p><span className="highlight-ink font-bold ml-1">الهدف:</span> منصة تعاونية للطلاب.</p>
                  <p><span className="highlight-coral font-bold ml-1">الواجهة الأمامية:</span> React، تصميم يعتمد على المكونات (Components).</p>
                  <p><span className="highlight-mustard font-bold ml-1">العمليات الخلفية:</span> Node.js، قاعدة بيانات لحفظ المستخدمين والملفات.</p>
                  <p><span className="highlight-sage font-bold ml-1">الميزات الأساسية:</span> 1. تسجيل دخول | 2. رفع ملفات | 3. نظام محادثة (Chat).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-ink text-cream border-2 border-ink rounded-xl p-6 shadow-retro-sm flex flex-col md:flex-row items-center gap-6 mt-6">
            <Wrench className="text-mustard shrink-0" size={48} />
            <div className="text-center md:text-right">
              <h4 className="font-heading text-2xl text-mustard mb-2">تطبيق سريع</h4>
              <p className="font-body text-lg font-semibold text-cream/90">
                كتابة BRD مصغر لميزة محددة (مثال: تصميم وثيقة متطلبات لنظام "ربط الطلاب بالخبراء" وتحديد مهام الواجهة وقاعدة البيانات بشكل نقاط مهيكلة).
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-6 pt-8 border-t-4 border-dashed border-ink/20">
          <div className="flex items-center gap-4 border-b-2 border-ink/10 pb-4 mb-2">
             <div className="bg-sage text-ink w-10 h-10 flex items-center justify-center rounded-lg border-2 border-ink shadow-sm font-heading text-xl pt-1">
              <Terminal size={20} />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-ink">
              أداة Claude Code
            </h2>
          </div>

          <p className="font-body text-lg font-bold text-ink mb-6">
            هنا نبدأ بالجانب التقني. Claude Code هو مساعد ذكاء اصطناعي يعمل مباشرة من داخل الـ Terminal في بيئة التطوير الخاصة بك.
          </p>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border-2 border-ink/10 shadow-sm flex flex-col md:flex-row items-start gap-4 hover:shadow-retro-sm transition-shadow">
              <div className="bg-coral/20 text-coral-dark p-3 rounded-xl shrink-0 mt-1"><Zap size={24} /></div>
              <div>
                <h4 className="font-heading text-xl mb-2 text-ink">1. جولة سريعة</h4>
                <p className="font-body text-lg font-semibold text-ink/80 leading-relaxed">التعرف على كيفية عمل Claude Code. هو لا يكتب الكود لك لتنسخه فقط، بل يتصفح ملفاتك، يقرأها، ويعدلها مباشرة من الـ Terminal.</p>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-xl border-2 border-ink/10 shadow-sm flex flex-col md:flex-row items-start gap-4 hover:shadow-retro-sm transition-shadow">
              <div className="bg-mustard/30 text-mustard-dark p-3 rounded-xl shrink-0 mt-1"><Code size={24} /></div>
              <div>
                <h4 className="font-heading text-xl mb-2 text-ink">2. ملفات الـ Claude Skills</h4>
                <p className="font-body text-lg font-semibold text-ink/80 leading-relaxed">هذه ميزة جبارة. كيف نجهز تعليمات وقيود ثابتة في المشروع (مثلاً: "دائماً استخدم Tailwind CSS للتصميم"). بمجرد كتابة هذه الـ Skills، سيتبعها Claude تلقائياً في كل مرة يبرمج فيها دون الحاجة لتكرار الطلب.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border-2 border-ink/10 shadow-sm flex flex-col md:flex-row items-start gap-4 hover:shadow-retro-sm transition-shadow">
              <div className="bg-dusty-blue/20 text-dusty-blue-dark p-3 rounded-xl shrink-0 mt-1"><Cpu size={24} /></div>
              <div>
                <h4 className="font-heading text-xl mb-2 text-ink">3. أتمتة الـ Terminal</h4>
                <p className="font-body text-lg font-semibold text-ink/80 leading-relaxed">كيف نجعل Claude ينفذ أوامر التشغيل (مثل npm start أو Git commits) لبناء سير عمل (Workflows) متكامل وسريع.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-6 pt-8 border-t-4 border-dashed border-ink/20">
          <div className="flex items-center gap-4 border-b-2 border-ink/10 pb-4 mb-2">
             <div className="bg-dusty-blue text-cream w-10 h-10 flex items-center justify-center rounded-lg border-2 border-ink shadow-sm font-heading text-xl pt-1">
              <Globe size={20} />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-ink">
              بيئة Google Antigravity
            </h2>
          </div>

          <p className="font-body text-lg font-bold text-ink mb-6">
            إذا كان Claude Code يعمل داخل جهازك، فإن Google Antigravity هي بيئة متكاملة وسحابية صُممت خصيصاً لإدارة المشاريع التي تبنى بواسطة الذكاء الاصطناعي والوكلاء.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream border-3 border-ink rounded-xl p-6 shadow-retro flex flex-col h-full">
              <h3 className="font-heading text-xl text-ink mb-4 flex items-center gap-2">
                <Target size={24} className="text-coral shrink-0" /> 1. استكشاف المنصة
              </h3>
              <p className="font-body text-lg text-ink/80 font-semibold leading-relaxed flex-grow">
                جولة سريعة لفهم كيف تعمل هذه البيئة كمنصة إدارة مشاريع متكاملة، وكيف تختلف عن بيئات التطوير التقليدية.
              </p>
            </div>

            <div className="bg-cream border-3 border-ink rounded-xl p-6 shadow-retro flex flex-col h-full">
              <h3 className="font-heading text-xl text-ink mb-4 flex items-center gap-2">
                <MessageSquare size={24} className="text-mustard-dark shrink-0" /> 2. ربط النقاط (إدارة المهام)
              </h3>
              <p className="font-body text-lg text-ink/80 font-semibold leading-relaxed mb-4">
                هنا يظهر السحر! نأخذ وثيقة الـ BRD التي جهزناها، ونسلمها لبيئة Antigravity.
              </p>
              <ul className="space-y-3 font-body font-bold text-ink/90 flex-grow">
                <li className="flex items-start gap-2"><CheckCircle2 size={20} className="text-sage mt-0.5 shrink-0" /> <span className="highlight-sage">تقسيم العمل:</span> تعيين وكيل للواجهات (Frontend Agent) ووكيل للخلفية (Backend Agent).</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={20} className="text-sage mt-0.5 shrink-0" /> <span className="highlight-sage">بدء الشغل:</span> مراقبة الوكلاء وهم يبنون المشروع بناءً على الوثيقة.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-6 pt-8 border-t-4 border-dashed border-ink/20">
          <div className="flex items-center gap-4 border-b-2 border-ink/10 pb-4 mb-2">
             <div className="bg-coral text-cream w-10 h-10 flex items-center justify-center rounded-lg border-2 border-ink shadow-sm font-heading text-xl pt-1">
              <Code size={20} />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-ink">
              ورشة التطبيق العملي - بناء الموقع
            </h2>
          </div>

          <div className="bg-ink text-cream border-2 border-ink rounded-xl p-6 md:p-8 shadow-retro-sm">
            <h3 className="font-heading text-2xl md:text-3xl text-mustard mb-4 flex items-center gap-3"><Zap size={32} className="shrink-0" /> هذا هو وقت الـ Vibe Coding الحقيقي!</h3>
            <p className="font-body text-xl mb-8 font-semibold text-cream/90">
              كل متدرب سيبدأ ببناء منتج فعلي (مثل منصة أدوات تعاونية للطلاب، أو نظام أتمتة).
            </p>
            
            <div className="space-y-5 font-body">
              <div className="bg-black/20 p-5 rounded-xl border border-cream/10">
                <h4 className="font-bold text-coral text-xl mb-2 flex items-center gap-2"><span className="bg-coral text-ink rounded-full w-6 h-6 flex items-center justify-center text-sm pt-0.5 shrink-0">1</span> الانطلاق</h4>
                <p className="text-cream/90 text-lg font-semibold ml-8">يختار المتدرب الأداة التي تناسبه (Claude Code في جهازه، أو بيئة Google Antigravity).</p>
              </div>

              <div className="bg-black/20 p-5 rounded-xl border border-cream/10">
                <h4 className="font-bold text-mustard text-xl mb-3 flex items-center gap-2"><span className="bg-mustard text-ink rounded-full w-6 h-6 flex items-center justify-center text-sm pt-0.5 shrink-0">2</span> تفعيل الـ Vibe Coding</h4>
                <ul className="space-y-3 text-cream/90 text-lg font-semibold ml-8">
                  <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-mustard shrink-0" /> <strong>التسليم (Handoff):</strong> تسليم وثيقة الـ BRD للأداة.</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-mustard shrink-0" /> <strong>التخصيص:</strong> تفعيل ملفات الـ Skills لضبط جودة الكود.</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-mustard shrink-0" /> <strong>المشاهدة:</strong> ترك الآلة تبني الهيكل الأساسي للمشروع.</li>
                </ul>
              </div>

              <div className="bg-black/20 p-5 rounded-xl border border-cream/10">
                <h4 className="font-bold text-sage text-xl mb-3 flex items-center gap-2"><span className="bg-sage text-ink rounded-full w-6 h-6 flex items-center justify-center text-sm pt-0.5 shrink-0">3</span> المراقبة والتحقق (التصحيح)</h4>
                <div className="bg-coral/20 border-2 border-coral/50 p-4 rounded-lg text-cream mb-4 font-bold flex flex-col md:flex-row items-center gap-3 ml-8">
                  <AlertTriangle size={24} className="text-coral shrink-0" /> <span className="text-lg">قاعدة اليوم: ممنوع التعديل اليدوي على الكود!</span>
                </div>
                <p className="text-cream/90 text-lg font-semibold ml-8 leading-relaxed">إذا ظهر خطأ، نركز على: كيف "توجه الآلة" لاكتشاف الخطأ وتصحيحه من خلال الـ Prompting وتوفير رسائل الخطأ، بدلاً من كتابة الكود بيدك.</p>
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
                title: "كورس كلود كود من الصفر",
                desc: "شرح عربي عملي ومفصل لاستخدام Claude Code داخل بيئة التطوير (Terminal) خطوة بخطوة.",
                url: "https://www.youtube.com/watch?v=fjJ0iM-ft-0"
              },
              {
                title: "Agentic AI Explained",
                desc: "نظرة سريعة تشرح كيف يتخذ الذكاء الاصطناعي قرارات ويدير سير عمل كامل باستقلالية.",
                url: "https://www.youtube.com/watch?v=DsRNp3cmJm0"
              },
              {
                title: "بيئة Google Antigravity",
                desc: "الدليل الرسمي لفهم كيفية تقسيم المهام وإدارة وكلاء الذكاء الاصطناعي (Agents) المتعددين.",
                url: "https://www.youtube.com/@GoogleAntigravity"
              },
              {
                title: "قناة Matt Pocock",
                desc: "تطبيق من أرض الواقع لتعلم أسرار Claude Code وحيل الـ Vibe Coding المتقدمة.",
                url: "https://www.youtube.com/@mattpocockuk"
              }
            ].map((video, idx) => (
              <Link 
                key={idx} 
                href={video.url} 
                target="_blank" 
                className="bg-white/80 border-2 border-ink/10 rounded-xl p-5 shadow-sm hover:shadow-retro-sm hover:border-ink/30 transition-all hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-coral/10 text-coral p-2.5 rounded-lg group-hover:bg-coral group-hover:text-cream transition-colors shrink-0 mt-1">
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
              روابط وموارد اليوم الثاني
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Claude Docs */}
            <Link href="https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview" target="_blank" className="bg-white/80 border-2 border-ink/10 rounded-xl p-5 shadow-sm hover:shadow-retro-sm hover:border-ink/30 transition-all hover:-translate-y-1 group flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="bg-dusty-blue/10 text-dusty-blue-dark p-3 rounded-lg group-hover:bg-dusty-blue group-hover:text-cream transition-colors shrink-0 mt-1">
                  <FileText size={28} />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-ink mb-1 group-hover:text-dusty-blue-dark transition-colors">توثيق Claude Code</h4>
                  <p className="font-body text-sm text-ink/70 font-semibold leading-relaxed">المرجع الرسمي (Documentation) لأداة Claude Code.</p>
                </div>
              </div>
            </Link>

            {/* AI Studio */}
            <Link href="https://aistudio.google.com/?authuser=1" target="_blank" className="bg-white/80 border-2 border-ink/10 rounded-xl p-5 shadow-sm hover:shadow-retro-sm hover:border-ink/30 transition-all hover:-translate-y-1 group flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="bg-coral/10 text-coral p-3 rounded-lg group-hover:bg-coral group-hover:text-cream transition-colors shrink-0 mt-1">
                  <Globe size={28} />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-ink mb-1 group-hover:text-coral transition-colors">Google AI Studio</h4>
                  <p className="font-body text-sm text-ink/70 font-semibold leading-relaxed">تسجيل الدخول وإعداد بيئة Google Antigravity.</p>
                </div>
              </div>
            </Link>
            
            {/* Node JS */}
            <Link href="https://nodejs.org/" target="_blank" className="bg-white/80 border-2 border-ink/10 rounded-xl p-5 shadow-sm hover:shadow-retro-sm hover:border-ink/30 transition-all hover:-translate-y-1 group flex flex-col justify-between md:col-span-2 md:w-2/3 md:mx-auto">
              <div className="flex items-start gap-4">
                <div className="bg-sage/20 text-sage-dark p-3 rounded-lg group-hover:bg-sage group-hover:text-ink transition-colors shrink-0 mt-1">
                  <Download size={28} />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-ink mb-1 group-hover:text-sage-dark transition-colors">تحميل Node.js</h4>
                  <p className="font-body text-sm text-ink/70 font-semibold leading-relaxed">أساسي لعمل Claude Code والعديد من بيئات العمل.</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="bg-ink text-cream p-6 rounded-xl border-2 border-ink shadow-retro-sm font-mono text-center flex flex-col items-center justify-center gap-3">
             <div className="text-mustard font-bold text-sm">أمر تثبيت Claude Code السريع:</div>
             <code className="bg-black/30 px-6 py-3 rounded-lg block text-lg w-full max-w-xl text-coral-light border border-ink/50 shadow-inner" dir="ltr">npm install -g @anthropic-ai/claude-code</code>
          </div>
        </section>

      </div>

      <div className="flex justify-between items-center mt-12 border-t-2 border-ink/10 pt-6 max-w-4xl mx-auto flex-row-reverse">
        <Link href="/day/3" className="retro-btn bg-coral text-cream font-pixel text-xs py-3 px-6 border-2 border-ink rounded-xl shadow-retro-sm hover:bg-coral-dark flex items-center gap-2 transition-transform hover:-translate-y-1">
          <span className="mt-1">اليوم التالي</span> <ArrowLeft size={16} />
        </Link>
        
        <Link href="/day/1" className="retro-btn bg-cream-dark text-ink font-pixel text-xs py-3 px-6 border-2 border-ink rounded-xl shadow-retro-sm hover:bg-cream flex items-center gap-2 transition-transform hover:-translate-y-1">
           <ArrowRight size={16} /> <span className="mt-1">اليوم السابق</span> 
        </Link>
      </div>
    </div>
  );
}
