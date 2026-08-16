"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Target, Cpu, MessageSquare, Terminal, CheckCircle2, XCircle, Zap, Code, AlertTriangle, Clock, Lightbulb, Brain, PlayCircle } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const content = {
  ar: {
    module: "MODULE_01",
    confidential: "CONFIDENTIAL_DATA",
    title: "مدخل إلى الذكاء الاصطناعي وهندسة الأوامر",
    subtitle: "من فهم نماذج اللغة إلى كتابة أوامر فعّالة للبرمجة",
    whatWeLearn: "ماذا سنتعلم اليوم؟",
    objectives: [
      "كيف تعمل نماذج الذكاء الاصطناعي التوليدي.",
      "ما المقصود بـ LLMs وكيف تتعامل مع النصوص.",
      "كيف تؤثر صياغة الأمر على جودة النتيجة.",
      "ما المقصود بـ Prompt Engineering.",
      "كيف نكتب أوامر واضحة ومحددة للذكاء الاصطناعي.",
      "كيف نستخدم الذكاء الاصطناعي كمساعد في البرمجة."
    ],
    hour1: {
      title: "كيف يفهم الذكاء الاصطناعي النص؟",
      whatIsGenAI: "ما هو الذكاء الاصطناعي التوليدي؟",
      genAIDesc: "هو نوع من الذكاء الاصطناعي يستطيع إنشاء محتوى جديد استنادًا إلى الأنماط التي تعلّمها من بيانات التدريب.",
      tags: ["نصوص", "أكواد برمجية", "صور", "أفكار"],
      genAiBadges: ["الذكاء التقليدي = يُصنّف", "الذكاء التوليدي = يُنتج ويبتكر"],
      llmsTitle: "نماذج اللغة الكبيرة (LLMs)",
      llmsDesc: "تستطيع فهم السياق وتوقع الكلمات القادمة، لكنها لا \"تفكر\" مثل الإنسان؛ بل تتعامل مع الأنماط والعلاقات.",
      examples: "أمثلة: ChatGPT, Gemini, Claude, GitHub Copilot",
      nextWordTitle: 'الكلمة القادمة المتوقعة بعد "I want to":',
      nextWordOptions: [
        { word: "learn", prob: "74%" },
        { word: "go", prob: "18%" },
        { word: "sleep", prob: "6%" },
        { word: "fly", prob: "2%" }
      ],
      tokenTitle: "ما هو الـ Token؟",
      tokenDesc: "قبل أن يعالج النموذج النص، يتم تقسيمه إلى وحدات تسمى Tokens. قد يكون التوكن كلمة كاملة، جزءًا من كلمة، أو علامة ترقيم.",
      tokenNote: "طول الـ Prompt والسياق المتاح للنموذج يرتبط بعدد الـ Tokens المسموح بها.",
      contextTip: "📌 نافذة السياق (Context Window): هي الذاكرة المؤقتة لنموذج الذكاء الاصطناعي في المحادثة الواحدة، وتُقاس بحد أقصى من الـ Tokens. إذا امتلأت هذه النافذة، يضطر النموذج لحذف الكلمات الأولى من المحادثة، مما يؤدي إلى فقدان السياق الأساسي والتعليمات (الهلوسة)."
    },
    hour2: {
      title: "هندسة الأوامر",
      equation: "معادلة الـ Prompt الشاملة والقوية",
      role: { title: "الدور (Role / Persona):", desc: "من تريدين أن يكون الذكاء الاصطناعي؟", example: "(مثال: تصرف كمهندس برمجيات خبير)." },
      task: { title: "المهمة (Task):", desc: "ماذا تريدين منه بالضبط؟", example: "(مثال: اكتب تطبيق Task Manager)." },
      context: { title: "السياق (Context):", desc: "ما هي المعلومات أو الخلفية التي يحتاجها لفهم طلبك؟", example: "" },
      constraints: { title: "القيود (Constraints):", desc: "ما هي الشروط التي يجب الالتزام بها أو تجنبها؟", example: "(مثال: لا تستخدم مكتبات خارجية)." },
      format: { title: "شكل النتيجة (Output Format):", desc: "كيف تريدين أن تظهر الإجابة؟", example: "(مثال: أعطني الكود مع شرح في نقاط)." },
      weakPromptTitle: "Prompt ضعيف",
      weakPrompt: "\"اكتب لي كود آلة حاسبة.\"",
      weakResultLabel: "النتيجة:",
      weakResult: "كود عشوائي، قد يكون بلغة لا تعرفينها، أو بطريقة معقدة جداً.",
      strongPromptTitle: "Prompt احترافي وشامل",
      strongChunks: [
        "تصرف كمهندس برمجيات خبير في لغة Java.",
        "اكتب برنامجًا بسيطًا لآلة حاسبة تدعم العمليات الأربع الأساسية (الجمع، الطرح، الضرب، والقسمة).",
        "أحتاج هذا الكود لعرضه في ورشة عمل لطلاب الجامعة كمدخل لفهم أساسيات البرمجة وكيفية التعامل مع مدخلات المستخدم.",
        "استخدم switch، وتأكد من إضافة شرط يمنع القسمة على صفر، ولا تستخدم أي مكتبات خارجية. اجعل الكود نظيفًا ومناسبًا لمبتدئ.",
        "ضع الكود النهائي داخل Code Block، واكتب تحته 3 نقاط مختصرة تشرح طريقة عمل الكود."
      ]
    },
    hour3: {
      title: "Vibe Coding والتطبيق العملي",
      vibeTitle: "ما هو Vibe Coding؟",
      vibeDesc: "هو أسلوب تطوير نستفيد فيه من أدوات الذكاء الاصطناعي لتوليد الكود وتعديله وشرحه بلغة طبيعية.",
      vibeNote: "ملاحظة هامة: Vibe Coding لا يعني أن نتوقف عن فهم الكود.",
      challengeTitle: "التحدي العملي",
      challengeDesc: "مهمتك: اكتبي Prompt يجعل الذكاء الاصطناعي يبني برنامجًا بسيطًا من اختيارك.",
      checklist: [
        "يجب أن يحتوي على Task واضحة.",
        "توفير الـ Context المناسب.",
        "إضافة Constraints للحد من التخمين.",
        "تحديد Output Format بدقة."
      ]
    },
    videos: {
      title: "مراجع إثرائية للمشاهدة",
      list: [
        { title: "لازم تفهم الفرق بين نموذج الذكاء الاصطناعي ووكيل الذكاء الاصطناعي", desc: "افهم الفرق الجوهري وكيف ينتقل الذكاء الاصطناعي من مجرد 'مُجيب' إلى 'وكيل يتخذ قرارات'.", url: "http://www.youtube.com/watch?v=qjEbjjSDLtg" },
        { title: "أساسيات هندسة أوامر الذكاء الاصطناعي", desc: "مقطع خفيف ولطيف تتابعه لمراجعة كيفية كتابة Prompt ذكي.", url: "http://www.youtube.com/watch?v=2_3WuekEg4s" },
        { title: "كورس هندسة التلقين المتعمق للمدربين", desc: "تعمق أكثر وشاهد كيف يبني المحترفون أوامرهم المعقدة.", url: "http://www.youtube.com/watch?v=gZv5hFW3OF8" },
        { title: "What Is Vibe Coding? Building Software with Agentic AI", desc: "نظرة شاملة توضح كيف أصبح الذكاء الاصطناعي يبرمج معنا كزميل عمل.", url: "http://www.youtube.com/watch?v=Y68FF_nUSWE" },
        { title: "Vibe Coding Full Tutorial for Beginners 2026", desc: "تتوريال تطبيقي خطوة بخطوة للبدء في بناء البرمجيات بأسلوب Vibe Coding.", url: "http://www.youtube.com/watch?v=BQxhJ5Nxooc" }
      ]
    },
    nav: { back: "العودة للرئيسية", next: "اليوم التالي" }
  },
  en: {
    module: "MODULE_01",
    confidential: "CONFIDENTIAL_DATA",
    title: "Introduction to AI and Prompt Engineering",
    subtitle: "From understanding LLMs to writing effective programming prompts",
    whatWeLearn: "What will we learn today?",
    objectives: [
      "How Generative AI models work.",
      "What LLMs are and how they process text.",
      "How prompt structure affects output quality.",
      "What Prompt Engineering is.",
      "How to write clear and specific prompts for AI.",
      "How to use AI as a programming assistant."
    ],
    hour1: {
      title: "How Does AI Understand Text?",
      whatIsGenAI: "What is Generative AI?",
      genAIDesc: "It's a type of AI that can create new content based on the patterns it learned from training data.",
      tags: ["Texts", "Code", "Images", "Ideas"],
      genAiBadges: ["Traditional AI = Classifies", "Generative AI = Creates & Innovates"],
      llmsTitle: "Large Language Models (LLMs)",
      llmsDesc: "They can understand context and predict the next words, but they do NOT \"think\" like a human; they deal with patterns and relationships.",
      examples: "Examples: ChatGPT, Gemini, Claude, GitHub Copilot",
      nextWordTitle: 'Next expected word after "I want to":',
      nextWordOptions: [
        { word: "learn", prob: "74%" },
        { word: "go", prob: "18%" },
        { word: "sleep", prob: "6%" },
        { word: "fly", prob: "2%" }
      ],
      tokenTitle: "What is a Token?",
      tokenDesc: "Before the model processes text, it is split into units called Tokens. A token can be a whole word, part of a word, or punctuation.",
      tokenNote: "The length of the Prompt and the available context for the model are tied to the allowed number of Tokens.",
      contextTip: "📌 Context Window: It is the temporary memory of the AI model in a single conversation, measured by a maximum number of Tokens. If this window fills up, the model is forced to delete the first words of the conversation, leading to the loss of basic context and instructions (hallucination)."
    },
    hour2: {
      title: "Prompt Engineering",
      equation: "The Comprehensive & Powerful Prompt Equation",
      role: { title: "Role / Persona:", desc: "Who do you want the AI to be?", example: "(Example: Act as an expert software engineer)." },
      task: { title: "Task:", desc: "What exactly do you want it to do?", example: "(Example: Write a Task Manager app)." },
      context: { title: "Context:", desc: "What information or background does it need to understand your request?", example: "" },
      constraints: { title: "Constraints:", desc: "What conditions must be met or avoided?", example: "(Example: Do not use external libraries)." },
      format: { title: "Output Format:", desc: "How do you want the answer to appear?", example: "(Example: Give me the code with bullet points)." },
      weakPromptTitle: "Weak Prompt",
      weakPrompt: "\"Write me calculator code.\"",
      weakResultLabel: "Result:",
      weakResult: "Random code, might be in a language you don't know, or overly complex.",
      strongPromptTitle: "Professional & Comprehensive Prompt",
      strongChunks: [
        "Act as an expert software engineer in Java.",
        "Write a simple calculator program supporting the four basic operations (add, subtract, multiply, and divide).",
        "I need this code to show in a university workshop as an intro to programming and handling user input.",
        "Use a switch statement, ensure you add a condition preventing division by zero, and do not use external libraries. Keep the code clean and beginner-friendly.",
        "Place the final code inside a Code Block, and write 3 brief bullet points explaining how the code works below it."
      ]
    },
    hour3: {
      title: "Vibe Coding & Hands-on Practice",
      vibeTitle: "What is Vibe Coding?",
      vibeDesc: "It's a development style where we leverage AI tools to generate, modify, and explain code using natural language.",
      vibeNote: "Important Note: Vibe Coding doesn't mean we stop understanding the code.",
      challengeTitle: "Practical Challenge",
      challengeDesc: "Your Task: Write a Prompt that makes the AI build a simple program of your choice.",
      checklist: [
        "Must have a clear Task.",
        "Provide the appropriate Context.",
        "Add Constraints to reduce guessing.",
        "Specify the Output Format accurately."
      ]
    },
    videos: {
      title: "Enrichment Videos to Watch",
      list: [
        { title: "You Must Understand the Difference Between AI Model and AI Agent", desc: "Understand the core difference and how AI goes from a mere 'responder' to a 'decision-making agent'.", url: "http://www.youtube.com/watch?v=qjEbjjSDLtg" },
        { title: "AI Prompt Engineering Basics", desc: "A light and nice video to review how to write a smart prompt.", url: "http://www.youtube.com/watch?v=2_3WuekEg4s" },
        { title: "In-depth Prompt Engineering Course for Instructors", desc: "Dive deeper and see how professionals build their complex prompts.", url: "http://www.youtube.com/watch?v=gZv5hFW3OF8" },
        { title: "What Is Vibe Coding? Building Software with Agentic AI", desc: "A comprehensive overview of how AI has become a co-programmer.", url: "http://www.youtube.com/watch?v=Y68FF_nUSWE" },
        { title: "Vibe Coding Full Tutorial for Beginners 2026", desc: "A step-by-step practical tutorial to start building software the Vibe Coding way.", url: "http://www.youtube.com/watch?v=BQxhJ5Nxooc" }
      ]
    },
    nav: { back: "Back to Home", next: "Next Day" }
  }
};

export default function Day1Page() {
  const { locale } = useLocale();
  const t = content[locale as "ar" | "en"];
  const isAr = locale === "ar";
  const dir = isAr ? "rtl" : "ltr";
  const alignClass = isAr ? "text-right" : "text-left";
  const marginClass = isAr ? "mr-2" : "ml-2";
  const paddingClass = isAr ? "pr-5 border-r-2" : "pl-5 border-l-2";

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" dir={dir}>
      <style dangerouslySetInnerHTML={{ __html: `
        body { background-color: color-mix(in srgb, var(--color-dusty-blue) 35%, var(--color-cream-dark)) !important; }
      `}} />
      
      <div className="flex flex-col lg:flex-row gap-6 items-start justify-between mb-10">
        <div className="relative w-full">
          <div className="bg-cream border-3 border-ink rounded-lg p-6 shadow-retro w-full relative z-0">
             <div className="flex items-center gap-3 mb-3 border-b-2 border-ink/20 pb-2">
                <span className="bg-ink text-cream font-pixel text-xs px-2 py-1 border-2 border-ink" dir="ltr">{t.module}</span>
                <span className="font-pixel text-[10px] text-dusty-blue uppercase" dir="ltr">{t.confidential}</span>
             </div>
             <h1 className="font-heading text-3xl md:text-4xl text-ink leading-tight mb-2">
               {t.title}
             </h1>
             <p className="font-body text-xl text-dusty-blue font-bold">
               {t.subtitle}
             </p>
          </div>
        </div>
      </div>

      <div className="space-y-12 max-w-4xl mx-auto">
        
        <section className="relative">
          <div className={`absolute ${isAr ? '-right-2' : '-left-2'} top-4 w-6 h-12 bg-coral border-2 border-ink ${isAr ? 'rounded-r' : 'rounded-l'} z-0`}></div>
          <div className={`bg-sage-light/30 border-3 border-ink rounded-xl p-6 shadow-retro relative z-10 ${isAr ? 'mr-2' : 'ml-2'}`}>
            <h2 className="font-heading text-2xl text-ink mb-3 flex items-center gap-2">
              <Target size={24} className="text-coral" /> {t.whatWeLearn}
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {t.objectives.map((item, i) => (
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
              {t.hour1.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cream border-3 border-ink rounded-xl p-6 shadow-retro">
              <h3 className="font-heading text-xl text-ink mb-4 flex items-center gap-2">
                <Zap size={20} className="text-coral" /> {t.hour1.whatIsGenAI}
              </h3>
              <p className="font-body text-ink mb-5 font-semibold">
                <strong>Generative AI</strong> {t.hour1.genAIDesc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {t.hour1.tags.map(tag => (
                  <span key={tag} className="bg-sage text-ink border-2 border-ink px-3 py-1 rounded-sm text-sm font-bold shadow-retro-sm">{tag}</span>
                ))}
              </div>
              <div className="flex flex-col gap-2 pt-4 border-t-2 border-ink/5">
                {t.hour1.genAiBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2 font-body text-sm font-bold text-ink/80">
                    <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-dusty-blue' : 'bg-coral'}`}></div>
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cream border-3 border-ink rounded-xl p-6 shadow-retro">
              <h3 className="font-heading text-xl text-ink mb-4 flex items-center gap-2">
                <MessageSquare size={20} className="text-dusty-blue" /> {t.hour1.llmsTitle}
              </h3>
              <p className="font-body text-ink mb-4 font-semibold" dangerouslySetInnerHTML={{ __html: t.hour1.llmsDesc.replace('"تفكر"', '<strong>"تفكر"</strong>').replace('"think"', '<strong>"think"</strong>') }} />
              
              <div className="bg-mustard p-3 rounded-lg border-2 border-ink text-sm font-bold shadow-retro-sm" dir="ltr">
                {t.hour1.examples}
              </div>

              <div className="bg-mustard/10 rounded-lg p-3 border border-mustard/20 mt-4">
                <p className="font-body text-xs font-bold text-ink/70 mb-2 flex items-center gap-1.5"><Brain size={14} className="text-mustard" /> {t.hour1.nextWordTitle}</p>
                <div className="space-y-1.5" dir="ltr">
                  {t.hour1.nextWordOptions.map((opt, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <span className="font-mono font-bold text-ink w-8 text-right">{opt.word}</span>
                      <div className="flex-grow bg-white/50 h-2 rounded-full overflow-hidden flex border border-ink/5">
                        <div className={`h-full ${idx === 0 ? 'bg-sage' : idx === 1 ? 'bg-mustard' : idx === 2 ? 'bg-coral/80' : 'bg-dusty-blue/60'}`} style={{ width: opt.prob }}></div>
                      </div>
                      <span className="font-mono font-bold text-ink/60 w-6">{opt.prob}</span>
                    </div>
                  ))}
                </div>
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
              <h3 className="font-heading text-2xl mb-4 text-cream">{t.hour1.tokenTitle}</h3>
              <p className="font-body text-lg leading-relaxed mb-6 font-semibold text-cream/90" dangerouslySetInnerHTML={{ __html: t.hour1.tokenDesc.replace('Tokens', '<strong>Tokens</strong>') }} />
              <div className="bg-black/20 p-4 rounded-lg font-mono text-cream mb-6 border-2 border-cream/10 text-center text-xl tracking-wider" dir="ltr">
                Write | a | Python | function
              </div>
              <p className="font-body text-cream/80 text-lg font-bold flex items-start gap-2">
                <Lightbulb className="shrink-0 mt-1 text-cream/80" size={24} /> {t.hour1.tokenNote}
              </p>
            </div>
          </div>

          <div className="bg-mustard/20 border-2 border-mustard rounded-xl p-5 shadow-sm flex items-start gap-4">
            <div className="bg-mustard text-ink p-2 rounded-lg shrink-0 mt-1">
              <Lightbulb size={24} />
            </div>
            <p className="font-body text-ink font-semibold leading-relaxed" dangerouslySetInnerHTML={{ __html: t.hour1.contextTip.replace('📌 ', '') }} />
          </div>
        </section>

        {/* Hour 2 */}
        <section className="space-y-6 pt-8 border-t-4 border-dashed border-ink/20">
          <div className="flex items-center gap-4 border-b-2 border-ink/10 pb-4 mb-2">
            <div className="bg-sage text-ink w-10 h-10 flex items-center justify-center rounded-lg border-2 border-ink shadow-sm font-heading text-2xl pt-1">
              2
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-ink">
              {t.hour2.title}
            </h2>
          </div>

          <div className="bg-cream border-2 border-ink rounded-xl p-6 shadow-retro-sm text-ink">
            <h3 className="font-heading text-2xl mb-6 text-center">{t.hour2.equation}</h3>
            
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

            <div className={`space-y-3 font-body ${alignClass}`}>
              {[t.hour2.role, t.hour2.task, t.hour2.context, t.hour2.constraints, t.hour2.format].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border-2 border-ink/10 shadow-sm">
                  <h4 className="font-bold text-ink text-lg mb-1">{item.title}</h4>
                  <p className="text-ink/80 font-semibold">{item.desc} <span className="font-bold opacity-75">{item.example}</span></p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {/* Weak Prompt */}
            <div className="bg-coral/10 border-2 border-coral rounded-xl p-5 shadow-sm flex flex-col md:flex-row items-center gap-4">
              <div className={`shrink-0 flex flex-col items-center justify-center md:border-coral/20 text-coral-dark ${isAr ? 'md:border-l-2 md:pl-5' : 'md:border-r-2 md:pr-5'}`}>
                <XCircle size={28} className="mb-1" />
                <h3 className="font-heading text-lg whitespace-nowrap">{t.hour2.weakPromptTitle}</h3>
              </div>
              <div className={`flex-grow w-full text-center ${isAr ? 'md:text-right' : 'md:text-left'}`}>
                <p className="font-body text-ink text-lg md:text-xl italic font-bold mb-2">
                  {t.hour2.weakPrompt}
                </p>
                <p className="font-body text-ink/70 text-xs md:text-sm font-semibold">
                  <span className={`bg-coral/20 px-2 py-1 rounded text-coral-dark ${isAr ? 'ml-2' : 'mr-2'}`}>{t.hour2.weakResultLabel}</span> 
                  {t.hour2.weakResult}
                </p>
              </div>
            </div>

            {/* Strong Prompt */}
            <div className="bg-sage/10 border-2 border-sage rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-3 mb-5 border-b-2 border-sage/20 pb-4 text-sage">
                <CheckCircle2 size={32} className="shrink-0 text-sage" />
                <h3 className={`font-heading text-xl md:text-2xl text-ink text-center ${isAr ? 'md:text-right' : 'md:text-left'}`}>{t.hour2.strongPromptTitle}</h3>
              </div>
              
              <div className="font-body text-ink text-base md:text-lg p-5 bg-white/80 rounded-xl border border-ink/5 shadow-sm leading-[2.2] font-semibold">
                <span className="highlight-ink">{t.hour2.strongChunks[0]}</span>{" "}
                <span className="highlight-coral">{t.hour2.strongChunks[1]}</span>{" "}
                <span className="highlight-mustard">{t.hour2.strongChunks[2]}</span>{" "}
                <span className="highlight-sage">{t.hour2.strongChunks[3]}</span>{" "}
                <span className="highlight-dusty-blue">{t.hour2.strongChunks[4]}</span>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-2 justify-center items-center mt-6">
                {[
                  { label: isAr ? "الدور (Role)" : "Role", color: "bg-ink/30" },
                  { label: isAr ? "المهمة (Task)" : "Task", color: "bg-coral/50" },
                  { label: isAr ? "السياق (Context)" : "Context", color: "bg-mustard/60" },
                  { label: isAr ? "القيود (Constraints)" : "Constraints", color: "bg-sage/60" },
                  { label: isAr ? "النتيجة (Format)" : "Format", color: "bg-dusty-blue/50" },
                ].map((l, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-ink/5 shadow-sm">
                    <div className={`w-2.5 h-2.5 ${l.color} rounded-full`}></div>
                    <span className="font-body text-xs md:text-sm font-bold text-ink/80">{l.label}</span>
                  </div>
                ))}
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
              {t.hour3.title}
            </h2>
          </div>

          <div className="bg-dusty-blue text-cream border-3 border-ink rounded-xl p-6 shadow-retro">
            <h3 className="font-heading text-2xl mb-4">{t.hour3.vibeTitle}</h3>
            <p className="font-body text-lg leading-relaxed mb-6 font-semibold">
              {t.hour3.vibeDesc}
            </p>
            <div className="bg-cream text-ink p-4 border-2 border-ink rounded-lg flex items-center gap-3 shadow-retro-sm">
              <AlertTriangle className="shrink-0 text-coral" size={24} />
              <p className="font-body font-bold">{t.hour3.vibeNote}</p>
            </div>
          </div>

          <div className="bg-ink text-cream border-2 border-ink rounded-xl p-6 md:p-8 shadow-retro-sm">
            <h3 className="font-heading text-3xl text-mustard mb-4 flex items-center gap-2"><Target size={32} /> {t.hour3.challengeTitle}</h3>
            <p className="font-body text-lg mb-6 font-semibold text-cream/90">
              {t.hour3.challengeDesc}
            </p>
            <div className="bg-black/20 p-5 rounded-lg border-2 border-cream/10 mb-6">
              <p className="font-mono text-cream/50 mb-4 text-sm" dir="ltr">// Requirements Checklist</p>
              <ul className="space-y-3 font-body font-bold text-cream/90">
                {t.hour3.checklist.map((c, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle2 size={20} className="text-mustard" /> {c}</li>
                ))}
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
              {t.videos.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.videos.list.map((video, idx) => (
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
           {isAr ? <><ArrowRight size={16} /> <span className="mt-1">{t.nav.back}</span></> : <><ArrowLeft size={16} /> <span className="mt-1">{t.nav.back}</span></>}
        </Link>

        <Link href="/day/2" className="retro-btn bg-coral text-cream font-pixel text-xs py-3 px-6 border-2 border-ink rounded-xl shadow-retro-sm hover:bg-coral-dark flex items-center gap-2 transition-transform hover:-translate-y-1">
          {isAr ? <><span className="mt-1">{t.nav.next}</span> <ArrowLeft size={16} /></> : <><span className="mt-1">{t.nav.next}</span> <ArrowRight size={16} /></>}
        </Link>
      </div>
    </div>
  );
}
