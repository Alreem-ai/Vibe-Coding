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
      title: "Introduction to AI and Prompt Engineering (Thinking Like an AI Tech Lead)",
      shortTitle: "The Art of Prompting",
      goal: "Understand the fundamentals of generative AI, and grasp that it needs precise, well-thought-out instructions to produce correct code.",
      points: [
        "Introduction to generative AI: how models actually work, and the difference between hand-writing code and generating it.",
        "The art of talking to the machine: crafting prompts around clear technical constraints.",
        "Hands-on practice: writing prompts to generate quick UI components and reviewing the model's output.",
      ],
      schedule: [
        {
          hour: "Hour 1",
          title: "How Does AI Understand Language? (LLMs)",
          details: "The basics of tokens, and how Transformer models work under the hood.",
        },
        {
          hour: "Hour 2",
          title: "The Starting Point of Vibe Coding: Writing Prompts",
          details: "Prompt structure (tone, context, task, output), technical constraints, and steering coding style.",
        },
        {
          hour: "Hour 3",
          title: "Hands-On Practice",
          details: "Writing a prompt to generate a quick interface, then iterative refinement.",
        },
      ],
      tools: ["Claude Code", "Cursor / VS Code", "Git & Terminal basics"],
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
      title: "Advanced Prompt Engineering (for Code Generation)",
      shortTitle: "Generation Tools",
      goal: "Learn advanced prompt structures and how to precisely control AI output.",
      points: [
        "Prompt structures (context, constraints, examples).",
        "Chain-of-thought reasoning and breaking tasks down into steps.",
        "System prompts and reusable templates, and steering architecture decisions through prompting.",
      ],
      schedule: [],
      tools: ["Claude", "Prompt libraries", "Structured output / JSON mode"],
    },
  },
  {
    id: 3,
    icon: Code,
    colorClass: "coral",
    tapeColor: "tape-yellow",
    isLocked: true,
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
      title: "Building with Agentic AI (AI Agent Workflows)",
      shortTitle: "Building the Project",
      goal: "Design and implement AI agent systems capable of handling complex, multi-step tasks.",
      points: [
        "The difference between an agent and a chatbot, and designing multi-agent workflows.",
        "Using tools and function calling, and coordinating and reviewing parallel agents.",
        "Guardrails to prevent unpredictable or unsafe agent behavior.",
      ],
      schedule: [],
      tools: ["Claude Agent SDK", "MCP servers", "Subagents & task delegation"],
    },
  },
  {
    id: 4,
    icon: Rocket,
    colorClass: "mustard",
    tapeColor: "tape-pink",
    isLocked: true,
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
      title: "Automated Testing and AI-Assisted Debugging",
      shortTitle: "Debugging & Deployment",
      goal: "Ensure the quality of AI-generated code, and learn to find and fix bugs systematically.",
      points: [
        "Generating test suites, and AI-assisted debugging.",
        "Code review workflows, and continuous verification (linting / type-checking).",
        "Building confidence through evidence, not assumptions.",
      ],
      schedule: [],
      tools: ["Vitest / Jest / Playwright", "CI pipelines", "Code review agents"],
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
      title: "Deployment and the Final Demo (Make It Actually Work)",
      shortTitle: "Launch & Demo",
      goal: "Ship the project to the world and showcase what it can do.",
      points: [
        "Modern deployment strategies, and directing an agent through a full deployment pipeline.",
        "Monitoring, rollbacks, and post-launch improvements.",
        "Telling the project's story, and delivering a live final demo.",
      ],
      schedule: [],
      tools: ["Vercel / Netlify", "GitHub Actions", "Presenting & storytelling"],
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
