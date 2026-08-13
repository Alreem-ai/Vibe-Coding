import Link from "next/link";
import { ArrowLeft, ArrowRight, Target, Cpu, MessageSquare, Terminal, CheckCircle2, XCircle, Zap, Code, AlertTriangle, Clock, Lightbulb, Brain, PlayCircle } from "lucide-react";

export default function Day1Page() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <style>{`
        body {
          background-color: #9cadb4 !important; /* لونك الأزرق الخفيف */
        }
        .bg-texture {
          background-color: #F6F3E7 !important;
          background-image: none !important;
        }
      `}</style>
      
      {/* Restored Retro Header */}
      <div className="flex flex-col lg:flex-row gap-6 items-start justify-between mb-10">
        <div className="relative w-full">
          <div className="bg-cream border-3 border-ink rounded-lg p-6 shadow-retro w-full relative z-0">
             <div className="flex items-center gap-3 mb-3 border-b-2 border-ink/20 pb-2">
                <span className="bg-ink text-cream font-pixel text-xs px-2 py-1 border-2 border-ink" dir="ltr">MODULE_01</span>
                <span className="font-pixel text-[10px] text-dusty-blue uppercase" dir="ltr">CONFIDENTIAL_DATA</span>
             </div>
             <h1 className="font-heading text-3xl md:text-4xl text-ink leading-tight mb-2">
               مدخل إلى الذكاء الاصطناعي وهندسة الأوامر
             </h1>
             <p className="font-body text-xl text-dusty-blue font-bold">
               من فهم نماذج اللغة إلى كتابة أوامر فعّالة للبرمجة
             </p>
          </div>
        </div>
      </div>

      <div className="space-y-12 max-w-4xl mx-auto">
        
        {/* Restored Retro Objective Box */}
        <section className="relative">
          <div className="absolute -left-2 top-4 w-6 h-12 bg-coral border-2 border-ink rounded-l z-0"></div>
          <div className="bg-sage-light/30 border-3 border-ink rounded-xl p-6 shadow-retro relative z-10 ml-2">
            <h2 className="font-heading text-2xl text-ink mb-3 flex items-center gap-2">
              <Target size={24} className="text-coral" /> ماذا سنتعلم اليوم؟
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {[
                "كيف تعمل نماذج الذكاء الاصطناعي التوليدي.",
                "ما المقصود بـ LLMs وكيف تتعامل مع النصوص.",
                "كيف تؤثر صياغة الأمر على جودة النتيجة.",
                "ما المقصود بـ Prompt Engineering.",
                "كيف نكتب أوامر واضحة ومحددة للذكاء الاصطناعي.",
                "كيف نستخدم الذكاء الاصطناعي كمساعد في البرمجة."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-mustard mt-1 shrink-0" />
                  <p className="font-body text-lg text-ink font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hour 1 */}
        <section className="space-y-6">
          <div className="flex items-center gap-4 border-b-2 border-ink/10 pb-4 mb-2">
            <div className="bg-mustard text-ink w-10 h-10 flex items-center justify-center rounded-lg border-2 border-ink shadow-sm font-heading text-2xl pt-1">
              1
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-ink">
              كيف يفهم الذكاء الاصطناعي النص؟
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream border-3 border-ink rounded-xl p-6 shadow-retro">
              <h3 className="font-heading text-xl text-ink mb-4 flex items-center gap-2">
                <Zap size={20} className="text-coral" /> ما هو الذكاء الاصطناعي التوليدي؟
              </h3>
              <p className="font-body text-ink mb-4 font-semibold">
                <strong>Generative AI</strong> هو نوع من الذكاء الاصطناعي يستطيع إنشاء محتوى جديد استنادًا إلى الأنماط التي تعلّمها من بيانات التدريب.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["نصوص", "أكواد برمجية", "صور", "أفكار"].map(tag => (
                  <span key={tag} className="bg-sage text-ink border-2 border-ink px-3 py-1 rounded-sm text-sm font-bold shadow-retro-sm">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-cream border-3 border-ink rounded-xl p-6 shadow-retro">
              <h3 className="font-heading text-xl text-ink mb-4 flex items-center gap-2">
                <MessageSquare size={20} className="text-dusty-blue" /> نماذج اللغة الكبيرة (LLMs)
              </h3>
              <p className="font-body text-ink mb-4 font-semibold">
                تستطيع فهم السياق وتوقع الكلمات القادمة، لكنها <strong>لا "تفكر"</strong> مثل الإنسان؛ بل تتعامل مع الأنماط والعلاقات.
              </p>
              <div className="bg-mustard p-3 rounded-lg border-2 border-ink text-sm font-bold shadow-retro-sm">
                أمثلة: ChatGPT, Gemini, Claude, GitHub Copilot
              </div>
            </div>
          </div>

          <div className="bg-ink rounded-xl border-4 border-ink shadow-retro-lg overflow-hidden flex flex-col">
            <div className="bg-cream-dark border-b-4 border-ink p-2 flex items-center justify-between" dir="ltr">
               <div className="flex gap-2 pl-2">
                 <div className="w-3 h-3 rounded-full bg-ink/20 border border-ink/30"></div>
                 <div className="w-3 h-3 rounded-full bg-ink/20 border border-ink/30"></div>
                 <div className="w-3 h-3 rounded-full bg-ink/20 border border-ink/30"></div>
               </div>
               <div className="font-pixel text-[10px] text-ink/70 pr-2">WHAT_IS_A_TOKEN.EXE</div>
            </div>
            <div className="p-6 md:p-8 text-cream">
              <h3 className="font-heading text-2xl mb-4 text-cream">ما هو الـ Token؟</h3>
              <p className="font-body text-lg leading-relaxed mb-6 font-semibold text-cream/90">
                قبل أن يعالج النموذج النص، يتم تقسيمه إلى وحدات تسمى <strong>Tokens</strong>. قد يكون التوكن كلمة كاملة، جزءًا من كلمة، أو علامة ترقيم.
              </p>
              <div className="bg-black/20 p-4 rounded-lg font-mono text-cream mb-6 border-2 border-cream/10 text-center text-xl tracking-wider" dir="ltr">
                Write | a | Python | function
              </div>
              <p className="font-body text-cream/80 text-lg font-bold flex items-start gap-2">
                <Lightbulb className="shrink-0 mt-1 text-cream/80" size={24} /> طول الـ Prompt والسياق المتاح للنموذج يرتبط بعدد الـ Tokens المسموح بها.
              </p>
            </div>
          </div>


        </section>

        {/* Hour 2 */}
        <section className="space-y-6 pt-8 border-t-4 border-dashed border-ink/20">
          <div className="flex items-center gap-4 border-b-2 border-ink/10 pb-4 mb-2">
            <div className="bg-sage text-ink w-10 h-10 flex items-center justify-center rounded-lg border-2 border-ink shadow-sm font-heading text-2xl pt-1">
              2
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-ink">
              هندسة الأوامر
            </h2>
          </div>

          <div className="bg-cream border-2 border-ink rounded-xl p-6 shadow-retro-sm text-ink">
            <h3 className="font-heading text-2xl mb-6 text-center">معادلة الـ Prompt الشاملة والقوية</h3>
            
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 font-mono font-bold text-sm md:text-base mb-8" dir="ltr">
              <div className="bg-ink text-cream px-4 py-2 rounded-lg border-2 border-ink shadow-sm w-full md:w-auto text-center">Role</div>
              <span className="text-ink text-xl hidden md:inline">+</span>
              <div className="bg-coral text-cream px-4 py-2 rounded-lg border-2 border-ink shadow-sm w-full md:w-auto text-center">Task</div>
              <span className="text-ink text-xl hidden md:inline">+</span>
              <div className="bg-mustard text-ink px-4 py-2 rounded-lg border-2 border-ink shadow-sm w-full md:w-auto text-center">Context</div>
              <span className="text-ink text-xl hidden md:inline">+</span>
              <div className="bg-sage text-ink px-4 py-2 rounded-lg border-2 border-ink shadow-sm w-full md:w-auto text-center">Constraints</div>
              <span className="text-ink text-xl hidden md:inline">+</span>
              <div className="bg-dusty-blue text-cream px-4 py-2 rounded-lg border-2 border-ink shadow-sm w-full md:w-auto text-center">Output Format</div>
            </div>

            <div className="space-y-3 font-body text-right">
              <div className="bg-white p-4 rounded-lg border-2 border-ink/10 shadow-sm">
                <h4 className="font-bold text-ink text-lg mb-1">الدور (Role / Persona):</h4>
                <p className="text-ink/80 font-semibold">من تريدين أن يكون الذكاء الاصطناعي؟ <span className="text-dusty-blue font-bold">(مثال: تصرف كمهندس برمجيات خبير).</span></p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border-2 border-ink/10 shadow-sm">
                <h4 className="font-bold text-ink text-lg mb-1">المهمة (Task):</h4>
                <p className="text-ink/80 font-semibold">ماذا تريدين منه بالضبط؟ <span className="text-coral font-bold">(مثال: اكتب تطبيق Task Manager).</span></p>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-ink/10 shadow-sm">
                <h4 className="font-bold text-ink text-lg mb-1">السياق (Context):</h4>
                <p className="text-ink/80 font-semibold">ما هي المعلومات أو الخلفية التي يحتاجها لفهم طلبك؟</p>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-ink/10 shadow-sm">
                <h4 className="font-bold text-ink text-lg mb-1">القيود (Constraints):</h4>
                <p className="text-ink/80 font-semibold">ما هي الشروط التي يجب الالتزام بها أو تجنبها؟ <span className="text-mustard font-bold">(مثال: لا تستخدم مكتبات خارجية).</span></p>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-ink/10 shadow-sm">
                <h4 className="font-bold text-ink text-lg mb-1">شكل النتيجة (Output Format):</h4>
                <p className="text-ink/80 font-semibold">كيف تريدين أن تظهر الإجابة؟ <span className="text-sage font-bold">(مثال: أعطني الكود مع شرح في نقاط).</span></p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Weak Prompt - Top Row */}
            <div className="bg-coral/10 border-2 border-coral rounded-xl p-5 shadow-sm flex flex-col md:flex-row items-center gap-4">
              <div className="shrink-0 flex flex-col items-center justify-center md:border-l-2 md:border-coral/20 md:pl-5 text-coral-dark">
                <XCircle size={28} className="mb-1" />
                <h3 className="font-heading text-lg whitespace-nowrap">Prompt ضعيف</h3>
              </div>
              <div className="flex-grow w-full text-center md:text-right">
                <p className="font-body text-ink text-lg md:text-xl italic font-bold mb-2">
                  "اكتب لي كود آلة حاسبة."
                </p>
                <p className="font-body text-ink/70 text-xs md:text-sm font-semibold">
                  <span className="bg-coral/20 px-2 py-1 rounded text-coral-dark ml-2">النتيجة:</span> 
                  كود عشوائي، قد يكون بلغة لا تعرفينها، أو بطريقة معقدة جداً.
                </p>
              </div>
            </div>

            {/* Strong Prompt - Bottom Row */}
            <div className="bg-sage/10 border-2 border-sage rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-3 mb-5 border-b-2 border-sage/20 pb-4 text-sage">
                <CheckCircle2 size={32} className="shrink-0 text-sage" />
                <h3 className="font-heading text-xl md:text-2xl text-ink text-center md:text-right">Prompt احترافي وشامل</h3>
              </div>
              
              <div className="font-body text-ink text-base md:text-lg p-5 bg-white/80 rounded-xl border border-ink/5 shadow-sm leading-[2.2] font-semibold">
                <span className="highlight-ink">تصرف كمهندس برمجيات خبير في لغة Java.</span>{" "}
                <span className="highlight-coral">اكتب برنامجًا بسيطًا لآلة حاسبة تدعم العمليات الأربع الأساسية (الجمع، الطرح، الضرب، والقسمة).</span>{" "}
                <span className="highlight-mustard">أحتاج هذا الكود لعرضه في ورشة عمل لطلاب الجامعة كمدخل لفهم أساسيات البرمجة وكيفية التعامل مع مدخلات المستخدم.</span>{" "}
                <span className="highlight-sage">استخدم switch، وتأكد من إضافة شرط يمنع القسمة على صفر، ولا تستخدم أي مكتبات خارجية. اجعل الكود نظيفًا ومناسبًا لمبتدئ.</span>{" "}
                <span className="highlight-dusty-blue">ضع الكود النهائي داخل Code Block، واكتب تحته 3 نقاط مختصرة تشرح طريقة عمل الكود.</span>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-2 justify-center items-center mt-6">
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-ink/5 shadow-sm">
                  <div className="w-2.5 h-2.5 bg-ink/30 rounded-full"></div>
                  <span className="font-body text-xs md:text-sm font-bold text-ink/80">الدور (Role)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-ink/5 shadow-sm">
                  <div className="w-2.5 h-2.5 bg-coral/50 rounded-full"></div>
                  <span className="font-body text-xs md:text-sm font-bold text-ink/80">المهمة (Task)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-ink/5 shadow-sm">
                  <div className="w-2.5 h-2.5 bg-mustard/60 rounded-full"></div>
                  <span className="font-body text-xs md:text-sm font-bold text-ink/80">السياق (Context)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-ink/5 shadow-sm">
                  <div className="w-2.5 h-2.5 bg-sage/60 rounded-full"></div>
                  <span className="font-body text-xs md:text-sm font-bold text-ink/80">القيود (Constraints)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-ink/5 shadow-sm">
                  <div className="w-2.5 h-2.5 bg-dusty-blue/50 rounded-full"></div>
                  <span className="font-body text-xs md:text-sm font-bold text-ink/80">النتيجة (Format)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hour 3 */}
        <section className="space-y-6 pt-8 border-t-4 border-dashed border-ink/20">
          <div className="flex items-center gap-4 border-b-2 border-ink/10 pb-4 mb-2">
            <div className="bg-coral text-cream w-10 h-10 flex items-center justify-center rounded-lg border-2 border-ink shadow-sm font-heading text-2xl pt-1">
              3
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-ink">
              Vibe Coding والتطبيق العملي
            </h2>
          </div>

          <div className="bg-dusty-blue text-cream border-3 border-ink rounded-xl p-6 shadow-retro">
            <h3 className="font-heading text-2xl mb-4">ما هو Vibe Coding؟</h3>
            <p className="font-body text-lg leading-relaxed mb-6 font-semibold">
              هو أسلوب تطوير نستفيد فيه من أدوات الذكاء الاصطناعي لتوليد الكود وتعديله وشرحه بلغة طبيعية.
            </p>
            <div className="bg-cream text-ink p-4 border-2 border-ink rounded-lg flex items-center gap-3 shadow-retro-sm">
              <AlertTriangle className="shrink-0 text-coral" size={24} />
              <p className="font-body font-bold">ملاحظة هامة: Vibe Coding لا يعني أن نتوقف عن فهم الكود.</p>
            </div>
          </div>

          <div className="bg-ink text-cream border-2 border-ink rounded-xl p-6 md:p-8 shadow-retro-sm">
            <h3 className="font-heading text-3xl text-mustard mb-4 flex items-center gap-2"><Target size={32} /> التحدي العملي</h3>
            <p className="font-body text-lg mb-6 font-semibold text-cream/90">
              مهمتك: اكتبي Prompt يجعل الذكاء الاصطناعي يبني برنامجًا بسيطًا من اختيارك.
            </p>
            <div className="bg-black/20 p-5 rounded-lg border-2 border-cream/10 mb-6">
              <p className="font-mono text-cream/50 mb-4 text-sm" dir="ltr">// Requirements Checklist</p>
              <ul className="space-y-3 font-body font-bold text-cream/90">
                <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-mustard" /> يجب أن يحتوي على Task واضحة.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-mustard" /> توفير الـ Context المناسب.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-mustard" /> إضافة Constraints للحد من التخمين.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-mustard" /> تحديد Output Format بدقة.</li>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "لازم تفهم الفرق بين نموذج الذكاء الاصطناعي ووكيل الذكاء الاصطناعي",
                desc: "افهم الفرق الجوهري وكيف ينتقل الذكاء الاصطناعي من مجرد 'مُجيب' إلى 'وكيل يتخذ قرارات'.",
                url: "http://www.youtube.com/watch?v=qjEbjjSDLtg"
              },
              {
                title: "أساسيات هندسة أوامر الذكاء الاصطناعي",
                desc: "مقطع خفيف ولطيف تتابعه لمراجعة كيفية كتابة Prompt ذكي.",
                url: "http://www.youtube.com/watch?v=2_3WuekEg4s"
              },
              {
                title: "كورس هندسة التلقين المتعمق للمدربين",
                desc: "تعمق أكثر وشاهد كيف يبني المحترفون أوامرهم المعقدة.",
                url: "http://www.youtube.com/watch?v=gZv5hFW3OF8"
              },
              {
                title: "What Is Vibe Coding? Building Software with Agentic AI",
                desc: "نظرة شاملة توضح كيف أصبح الذكاء الاصطناعي يبرمج معنا كزميل عمل.",
                url: "http://www.youtube.com/watch?v=Y68FF_nUSWE"
              },
              {
                title: "Vibe Coding Full Tutorial for Beginners 2026",
                desc: "تتوريال تطبيقي خطوة بخطوة للبدء في بناء البرمجيات بأسلوب Vibe Coding.",
                url: "http://www.youtube.com/watch?v=BQxhJ5Nxooc"
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

      </div>

      <div className="flex justify-between items-center mt-12 border-t-2 border-ink/10 pt-6 max-w-4xl mx-auto">
        <Link href="/" className="retro-btn bg-cream-dark text-ink font-pixel text-xs py-3 px-6 border-2 border-ink rounded-xl shadow-retro-sm hover:bg-cream flex items-center gap-2 transition-transform hover:-translate-y-1">
           <ArrowRight size={16} /> <span className="mt-1">العودة للرئيسية</span>
        </Link>

        <Link href="/day/2" className="retro-btn bg-coral text-cream font-pixel text-xs py-3 px-6 border-2 border-ink rounded-xl shadow-retro-sm hover:bg-coral-dark flex items-center gap-2 transition-transform hover:-translate-y-1">
          <span className="mt-1">اليوم التالي</span> <ArrowLeft size={16} />
        </Link>
      </div>
    </div>
  );
}
