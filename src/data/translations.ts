export interface Translations {
  langToggleLabel: string;
  header: {
    tagline: string;
    title: string;
    soundOff: string;
    guide: string;
    askPixel: string;
  };
  footer: {
    version: string;
    brand: string;
    syncState: string;
    mascotMood: string;
    mascotName: string;
  };
  mascot: {
    moods: string[];
  };
  moduleCard: {
    modulePrefix: string;
    viewSchematic: string;
  };
  home: {
    systemStatus: string;
    heroHeadingPrefix: string;
    heroHeadingHighlight: string;
    heroHeadingSuffix: string;
    heroParagraph: string;
    heroCta: string;
    talkToPixel: string;
    terminalCommand: string;
    terminalReady: string;
    terminalPrompt: string;
    helperBlob: string;
    catalogLabel: string;
    catalogHeading: string;
    showingModules: (count: number) => string;
    behindLabel: string;
    behindHeading: string;
    soon: string;
    behindText: string;
  };
  day: {
    dayLabel: (id: number) => string;
    moduleDetails: string;
    backToGuide: string;
    goal: string;
    keyPoints: string;
    slidePreview: string;
    schedule: string;
    toolsUsed: string;
    nextDay: string;
    prevDay: string;
  };
  terminalPage: {
    eyebrow: string;
    heading: string;
  };
  pixelTerminal: {
    poweredBy: string;
    systemReady: string;
    placeholder: string;
    thinking: string;
  };
}

const ar: Translations = {
  langToggleLabel: "EN / عربي",
  header: {
    tagline: "Vibe Coding Studio",
    title: "دليل البرمجة التوليدية",
    soundOff: "الصوت: مغلق",
    guide: "الدليل",
    askPixel: "اسألي بكسل",
  },
  footer: {
    version: "الإصدار: 1.0",
    brand: "فايب كودينج · GDG ON CAMPUS",
    syncState: "مزامنة الحالة",
    mascotMood: "مزاج الروبوت",
    mascotName: "الروبوت: بكسل",
  },
  mascot: {
    moods: [
      "بيب بوب! الأنظمة تعمل بشكل طبيعي!",
      "أوه! هل كتبتي للتو برومبت؟",
      "جاري الفحص... الكود يبدو نظيفًا.",
      "جارِ مزامنة مشروعك!",
    ],
  },
  moduleCard: {
    modulePrefix: "الوحدة #0",
    viewSchematic: "عرض التفاصيل",
  },
  home: {
    systemStatus: "حالة النظام: متصلة",
    heroHeadingPrefix: "تكلّمي... وخلّي",
    heroHeadingHighlight: "الكود",
    heroHeadingSuffix: "يصير وحده",
    heroParagraph:
      'أهلاً فيكم! برنامج البرمجة التوليدية برنامج تدريبي مكثف مدته 5 أيام، يعلّمكم تبنون تطبيقات حقيقية بالوصف الطبيعي بدل الكتابة اليدوية للكود.\n\nمن أساسيات الذكاء الاصطناعي التوليدي وهندسة الأوامر، مرورًا ببناء أنظمة وتطبيقات الويب وربط الذكاء الاصطناعي، وصولًا لاختبار المشاريع ونشرها فعليًا على الويب. روبوتنا الصغير "بكسل" بيرافقكم خطوة بخطوة.',
    heroCta: "ابدأ الآن",
    talkToPixel: "تكلمي مع بكسل",
    terminalCommand: "أمر الطرفية",
    terminalReady: "> جاهز",
    terminalPrompt: "> برومبت + تشغيل // الوضع: فايب // الأداة: جيميناي",
    helperBlob: "المساعد الصغير",
    catalogLabel: "الفهرس والوحدات",
    catalogHeading: "مسار Vibe Coding",
    showingModules: (count: number) => `عرض ${count} وحدات أساسية`,
    behindLabel: "خلف الكواليس",
    behindHeading: "خلف الستار",
    soon: "قريبًا",
    behindText: "قريباً ... سيتم إضافة معلومات المدربين وكواليس المعسكر هنا.",
  },
  day: {
    dayLabel: (id: number) => `اليوم 0${id}`,
    moduleDetails: "تفاصيل الوحدة",
    backToGuide: "الرجوع للدليل",
    goal: "الهدف",
    keyPoints: "النقاط الرئيسية",
    slidePreview: "معاينة الشرائح",
    schedule: "الجدول الزمني",
    toolsUsed: "الأدوات المستخدمة",
    nextDay: "اليوم التالي",
    prevDay: "اليوم السابق",
  },
  terminalPage: {
    eyebrow: "المساعد المباشر",
    heading: "اسألي بكسل",
  },
  pixelTerminal: {
    poweredBy: "[مدعوم بـ Gemini]",
    systemReady:
      "[النظام]: مساعد بكسل جاهز.\n[النظام]: اسألي عن صياغة البرومبت، Cursor، Replit، تصحيح الأخطاء، أو نشر مشروع Vibe Coding الخاص بك!",
    placeholder: "اكتبي سؤالك (مثال: 'كيف أكتب برومبت جيد؟')...",
    thinking: "[بكسل]: جاري التفكير...",
  },
};

const en: Translations = {
  langToggleLabel: "EN / عربي",
  header: {
    tagline: "Vibe Coding Studio",
    title: "Generative Coding Guide",
    soundOff: "SOUND: OFF",
    guide: "GUIDE",
    askPixel: "ASK PIXEL",
  },
  footer: {
    version: "VER: 1.0",
    brand: "VIBE CODING · GDG ON CAMPUS",
    syncState: "SYNC STATE",
    mascotMood: "MASCOT MOOD",
    mascotName: "MASCOT: PIXEL",
  },
  mascot: {
    moods: [
      "BEEP BOOP! Systems normal!",
      "OH! Did you just write a prompt?",
      "SCANNING... code looks clean.",
      "SYNCING YOUR VIBE PROJECT!",
    ],
  },
  moduleCard: {
    modulePrefix: "MODULE #0",
    viewSchematic: "VIEW SCHEMATIC",
  },
  home: {
    systemStatus: "SYSTEM STATUS: ONLINE",
    heroHeadingPrefix: "Just talk... and let the",
    heroHeadingHighlight: "code",
    heroHeadingSuffix: "write itself.",
    heroParagraph:
      'Welcome! The Generative Coding Program is an intensive 5-day training program that teaches you to build real applications through natural language, instead of hand-writing code.\n\nFrom the fundamentals of generative AI and prompt engineering, through building systems, web apps, and AI integrations, all the way to testing projects and actually deploying them to the web. Our little robot "Pixel" will guide you every step of the way.',
    heroCta: "ESC / ENTR / SYNC",
    talkToPixel: "TALK TO PIXEL",
    terminalCommand: "TERMINAL COMMAND",
    terminalReady: "> READY",
    terminalPrompt: "> PROMPT + RUN // MODE: VIBE // TOOL: Gemini",
    helperBlob: "HELPER BLOB",
    catalogLabel: "CATALOG & MODULES",
    catalogHeading: "The Vibe Coding Path",
    showingModules: (count: number) => `SHOWING ${count} CORE MODULES`,
    behindLabel: "BEHIND THE SCENES",
    behindHeading: "Behind the Scenes",
    soon: "SOON",
    behindText: "Coming soon... instructor bios and camp behind-the-scenes will be added here.",
  },
  day: {
    dayLabel: (id: number) => `DAY 0${id}`,
    moduleDetails: "MODULE DETAILS",
    backToGuide: "BACK TO GUIDE",
    goal: "Goal",
    keyPoints: "Key Points",
    slidePreview: "Slide Preview",
    schedule: "Schedule",
    toolsUsed: "Tools Used",
    nextDay: "Next Day",
    prevDay: "Previous Day",
  },
  terminalPage: {
    eyebrow: "LIVE ASSISTANT",
    heading: "Ask Pixel",
  },
  pixelTerminal: {
    poweredBy: "[GEMINI POWERED]",
    systemReady:
      "[SYSTEM]: PIXEL ASSISTANT READY.\n[SYSTEM]: Ask about prompting, Cursor, Replit, debugging, or deploying your Vibe Coding project!",
    placeholder: "Type your question (e.g. 'how do I write a good prompt?')...",
    thinking: "[PIXEL]: THINKING...",
  },
};

export const translations = { ar, en };
