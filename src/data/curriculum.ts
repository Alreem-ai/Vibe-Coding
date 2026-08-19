import { MessageSquare, Wrench, Code, Rocket, PlayCircle, type LucideIcon } from "lucide-react";
import type { Locale } from "@/context/LocaleContext";

interface ScheduleItem {
  hour: string;
  title: string;
  details: string;
}

interface LocalizedModuleContent {
  title: string;
  shortTitle: string;
  goal: string;
  points: string[];
  schedule: ScheduleItem[];
  tools: string[];
}

export interface CurriculumModule {
  id: number;
  icon: LucideIcon;
  colorClass: string;
  tapeColor: string;
  isLocked?: boolean;
  lockedStyle?: "warning" | "encrypted" | "ghost";
  ar: LocalizedModuleContent;
  en: LocalizedModuleContent;
}

export const curriculumData: CurriculumModule[] = [
  {
    id: 1,
  
    icon: MessageSquare,
    colorClass: "dusty-blue",
    tapeColor: "tape-pink",
    ar: {
      title: "أساسيات هندسة الأوامر (Prompt Engineering)",
      shortTitle: "هندسة الأوامر",
      goal: "فهم الذكاء الاصطناعي التوليدي، وكتابة أوامر دقيقة ومدروسة ليقوم بالبرمجة نيابة عنك بشكل صحيح.",
      points: [
        "مقدمة في الذكاء الاصطناعي التوليدي وكيف تفهم النماذج والفرق بين البرمجة اليدوية وتوليد الأكواد.",
        "فن التحدث مع الآلة: صياغة الأوامر بناءً على قيود تقنية واضحة.",
        "تطبيق عملي: كتابة أوامر لتوليد مكونات برمجية سريعة ومراقبة الاستجابة.",
      ],
      schedule: [
        {
          hour: "الساعة الأولى",
          title: "كيف يفهم الذكاء الاصطناعي اللغة؟ (LLMs)",
          details: "المفهوم الأساسي للـ Tokens، كيف تشتغل نماذج الـ Transformers.",
        },
        {
          hour: "الساعة الثانية",
          title: "نقطة انطلاق Vibe Coding: كتابة الأوامر",
          details: "بنية الـ Prompt (نبرة، سياق، مهمة، مخرجات)، القيود التقنية، توجيه الأسلوب البرمجي.",
        },
        {
          hour: "الساعة الثالثة",
          title: "تطبيق عملي",
          details: "كتابة أمر لتوليد واجهة سريعة، التعديل التكراري (Iterative Refinement).",
        },
      ],
      tools: ["Claude Code", "Cursor / VS Code", "أساسيات Git والـ Terminal"],
    },
    en: {
      title: "Basics of Prompt Engineering",
      shortTitle: "Prompt Engineering",
      goal: "Understand generative AI, and write precise, thoughtful prompts to have it code on your behalf correctly.",
      points: [
        "Introduction to generative AI: understanding models and the difference between manual coding and code generation.",
        "The art of talking to the machine: crafting prompts based on clear technical constraints.",
        "Hands-on practice: writing prompts to generate quick software components and monitoring the response.",
      ],
      schedule: [
        {
          hour: "First Hour",
          title: "How Does AI Understand Language? (LLMs)",
          details: "The basic concept of Tokens, and how Transformer models work.",
        },
        {
          hour: "Second Hour",
          title: "The Starting Point of Vibe Coding: Writing Prompts",
          details: "Prompt structure (tone, context, task, outputs), technical constraints, and steering the coding style.",
        },
        {
          hour: "Third Hour",
          title: "Hands-on Practice",
          details: "Writing a prompt to generate a quick UI, and iterative refinement.",
        },
      ],
      tools: ["Claude Code", "Cursor / VS Code", "Git & Terminal Basics"],
    },
  },
  {
    id: 2,
    icon: Wrench,
    colorClass: "sage",
    tapeColor: "tape-sage",
    ar: {
      title: "وثيقة المتطلبات ووكلاء الذكاء الاصطناعي (Agentic AI)",
      shortTitle: "الوكلاء و BRD",
      goal: "كتابة وثيقة متطلبات أعمال (BRD) مهيكلة، وتوجيه الوكلاء (Agents) لبناء الأنظمة في بيئات التطوير.",
      points: [
        "هياكل البرومبت (سياق، قيود، أمثلة).",
        "التفكير المتسلسل وتقسيم المهام.",
        "System prompts وقوالب قابلة لإعادة الاستخدام، وتوجيه قرارات العمارة عبر البرومبت.",
      ],
      schedule: [],
      tools: ["Claude", "مكتبات برومبت", "Structured output / JSON mode"],
    },
    en: {
      title: "Business Requirements & Agentic AI",
      shortTitle: "Agents & BRD",
      goal: "Write a structured Business Requirements Document (BRD) and direct AI Agents to build systems in dev environments.",
      points: [
        "Prompt structures (context, constraints, examples).",
        "Chain-of-thought reasoning and breaking down tasks.",
        "System prompts, reusable templates, and steering architecture decisions via prompting.",
      ],
      schedule: [],
      tools: ["Claude", "Prompt Libraries", "Structured output / JSON mode"],
    },
  },
  {
    id: 3,
    icon: Code,
    colorClass: "coral",
    tapeColor: "tape-yellow",
    lockedStyle: "warning",
    ar: {
      title: "تصحيح الأخطاء وربط الأنظمة (APIs & Integration)",
      shortTitle: "ربط الأنظمة والأخطاء",
      goal: "توسيع قدرات التطبيق عبر ربطه ببيانات خارجية وواجهات برمجية، وتصحيح الأخطاء بأسلوب الوكلاء آلياً.",
      points: [
        "الفرق بين الوكيل والشات بوت، وتصميم سير عمل متعدد الوكلاء.",
        "استخدام الأدوات واستدعاء الدوال، وتنسيق ومراجعة وكلاء متوازيين.",
        "حواجز الأمان لمنع التصرفات العشوائية.",
      ],
      schedule: [],
      tools: ["Claude Agent SDK", "خوادم MCP", "وكلاء فرعية وتفويض مهام"],
    },
    en: {
      title: "Debugging & Systems Integration (APIs)",
      shortTitle: "APIs & Debugging",
      goal: "Expand app capabilities by connecting it to external data and APIs, and debug automatically using agentic workflows.",
      points: [
        "The difference between an agent and a chatbot, and designing multi-agent workflows.",
        "Using tools and function calling, and coordinating and reviewing parallel agents.",
        "Guardrails to prevent unpredictable behaviors.",
      ],
      schedule: [],
      tools: ["Claude Agent SDK", "MCP Servers", "Subagents & Task Delegation"],
    },
  },
  {
    id: 4,
    //djd
    //fghjkl;'cvbnm
    icon: Rocket,
    colorClass: "mustard",
    tapeColor: "tape-pink",
  
    lockedStyle: "encrypted",
    ar: {
      title: "النشر السحابي وتكامل النظام (Deployment & Integration)",
      shortTitle: "النشر السحابي",
      goal: "إنهاء دورة حياة المشروع (SDLC) ونقله من بيئة التطوير المحلية إلى منصات النشر الحية مثل Vercel.",
      points: [
        "توليد مجموعات اختبار، وتصحيح الأخطاء بمساعدة AI.",
        "سير عمل مراجعة الكود، والتحقق المستمر (linting/type-checking).",
        "بناء الثقة بالأدلة لا الافتراض.",
      ],
      schedule: [],
      tools: ["Vitest / Jest / Playwright", "خطوط CI", "وكلاء مراجعة الكود"],
    },
    en: {
      title: "Cloud Deployment & System Integration",
      shortTitle: "Cloud Deployment",
      goal: "Conclude the Software Development Life Cycle (SDLC) by moving from local dev to live platforms like Vercel.",
      points: [
        "Generating test suites, and AI-assisted debugging.",
        "Code review workflows, and continuous verification (linting/type-checking).",
        "Building confidence through evidence, not assumptions.",
      ],
      schedule: [],
      tools: ["Vitest / Jest / Playwright", "CI Pipelines", "Code Review Agents"],
    },
  },
  {
    id: 5,
    icon: PlayCircle,
    colorClass: "ink",
    tapeColor: "tape-sage",
    isLocked: true,
    lockedStyle: "ghost",
    ar: {
      title: "معرض المشاريع والتقييم (Project Showcase)",
      shortTitle: "العرض النهائي",
      goal: "استعراض المشاريع المنجزة، تبادل الخبرات والتجارب، والاحتفال بإطلاق التطبيقات للمستخدمين.",
      points: [
        "استراتيجيات النشر الحديثة، وتوجيه وكيل عبر خط نشر كامل.",
        "المراقبة والتراجع والتحسين بعد الإطلاق.",
        "تلخيص قصة المشروع، والعرض النهائي المباشر.",
      ],
      schedule: [],
      tools: ["Vercel / Netlify", "GitHub Actions", "العرض والتقديم"],
    },
    en: {
      title: "Project Showcase & Evaluation",
      shortTitle: "Final Demo",
      goal: "Showcase completed projects, share experiences, and celebrate launching applications to users.",
      points: [
        "Modern deployment strategies, and directing an agent through a full deployment pipeline.",
        "Monitoring, rollbacks, and post-launch improvements.",
        "Summarizing the project's story, and live final presentations.",
      ],
      schedule: [],
      tools: ["Vercel / Netlify", "GitHub Actions", "Presentation Skills"],
    },
  },
];

export function localizeModule(mod: CurriculumModule, locale: Locale) {
  return {
    id: mod.id,
    icon: mod.icon,
    colorClass: mod.colorClass,
    tapeColor: mod.tapeColor,
    isLocked: mod.isLocked,
    lockedStyle: mod.lockedStyle,
    ...mod[locale],
  };
}
