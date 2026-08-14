"use client";

import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";

interface KnowledgeItem {
  keys: string[];
  reply: string;
}

const knowledgeBase: KnowledgeItem[] = [
  {
    keys: ["prompt", "برومبت", "هندسة الأوامر", "أمر"],
    reply:
      "لكتابة أوامر (Prompts) فعالة، احرص على تضمين ثلاثة عناصر رئيسية: الهدف الواضح، السياق التقني (مثل المكتبات المستخدمة)، والقيود (مثل أسلوب التصميم أو الأداء). الوضوح والدقة هما مفتاح الحصول على نتائج احترافية.",
  },
  {
    keys: ["cursor", "كيرسور"],
    reply:
      "محرر Cursor يُعد خياراً ممتازاً لتعديل الأكواد ضمن مشاريع قائمة. يُنصح بتحديد الملف أو الدالة المستهدفة، ووصف التعديل المطلوب بدقة، ثم مراجعة التغييرات (Diff) قبل اعتمادها.",
  },
  {
    keys: ["replit", "ريبلت"],
    reply:
      "منصة Replit توفر بيئة تطوير متكاملة سحابياً، وهي مثالية لبناء واختبار تطبيقات كاملة بسرعة انطلاقاً من وصف أولي متكامل.",
  },
  {
    keys: ["v0", "figma", "تصميم", "واجهة"],
    reply:
      "أدوات مثل v0 و Figma AI تتيح تحويل الأوصاف النصية أو التصاميم إلى واجهات مستخدم تفاعلية بسرعة. يُفضل استخدامها لبناء النسخة الأولية، ثم تحسين الكود لاحقاً باستخدام أدوات مثل Cursor.",
  },
  {
    keys: ["debug", "error", "bug", "خطأ", "مشكلة"],
    reply:
      "عند مواجهة أخطاء برمجية: اقرأ رسالة الخطأ أولاً، واطلب من الذكاء الاصطناعي تحليلها وتوضيحها. بعد ذلك، قم بتطبيق الإصلاحات بخطوات متسلسلة بدلاً من إعادة كتابة الكود بالكامل.",
  },
  {
    keys: ["deploy", "نشر", "vercel", "netlify", "استضافة"],
    reply:
      "لنشر مشروعك: قم برفع الكود إلى GitHub، ثم اربط المستودع بمنصات مثل Vercel أو Netlify لتمكين البناء التلقائي (CI/CD). تأكد دائماً من اختبار الرابط الحي قبل اعتماده.",
  },
  {
    keys: ["hello", "hi", "مرحبا", "هلا", "السلام"],
    reply: "أهلاً بك. أنا المساعد الافتراضي بيكسل. يمكنك سؤالي عن هندسة الأوامر (Prompting)، استخدام أدوات مثل Cursor و Replit، آليات تصحيح الأخطاء (Debugging)، أو طرق النشر (Deployment).",
  },
];

const fallbacks = [
  "يُرجى توضيح سؤالك بمزيد من التفاصيل. حدد الهدف بوضوح والأداة التي تستخدمها ليتسنى لي تقديم الإجابة الأنسب.",
  "عذراً، لا أملك إجابة دقيقة على هذا الاستفسار حالياً. يمكنك سؤالي عن أساسيات البرمجة التوليدية، هندسة الأوامر، أو أدوات مثل Cursor و Replit.",
  "سؤال جيد. للحصول على أفضل نتيجة، حاول تقسيم المشكلة إلى خطوات أصغر ووصف ما تود إنجازه بشكل محدد.",
];

function getPixelReply(query: string): string {
  const q = query.toLowerCase();
  for (const item of knowledgeBase) {
    if (item.keys.some((k) => q.includes(k))) return item.reply;
  }
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

type LogEntry = {
  id: number;
  role: "user" | "pixel" | "system";
  text: string;
};

let logIdCounter = 0;

export default function PixelTerminal() {
  const { t } = useLocale();
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: logIdCounter++,
      role: "system",
      text: t.pixelTerminal.systemReady,
    },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = input.trim();
    if (!query) return;

    setLogs((prev) => [...prev, { id: logIdCounter++, role: "user", text: `> USER: ${query}` }]);
    setInput("");
    setThinking(true);

    let reply: string;
    try {
      const res = await fetch("/api/pixel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });
      if (!res.ok) throw new Error("bad response");
      const data = await res.json();
      reply = data.reply as string;
    } catch {
      reply = getPixelReply(query);
    }

    setThinking(false);
    setLogs((prev) => [...prev, { id: logIdCounter++, role: "pixel", text: `[PIXEL]: ${reply}` }]);
  };

  return (
    <div className="bg-ink text-sage p-6 rounded-2xl border-4 border-ink shadow-retro-lg relative" dir="ltr">
      <div className="flex justify-between items-center pb-4 border-b-2 border-sage/30 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-coral rounded-full border border-ink"></div>
          <div className="w-3 h-3 bg-mustard rounded-full border border-ink"></div>
          <div className="w-3 h-3 bg-sage rounded-full border border-ink"></div>
          <span className="font-pixel text-xs text-cream ml-2">PIXEL_ASSISTANT_V1.EXE</span>
        </div>
        <span className="font-mono text-xs text-mustard hidden sm:inline">{t.pixelTerminal.poweredBy}</span>
      </div>

      <div className="font-mono text-xs sm:text-sm h-64 overflow-y-auto space-y-3 p-2 border border-sage/20 rounded bg-black/40">
        {logs.map((log) => (
          <div
            key={log.id}
            className={
              log.role === "system"
                ? "text-sage whitespace-pre-line"
                : log.role === "user"
                ? "text-mustard"
                : "text-sage bg-black/30 p-2 rounded border border-sage/30"
            }
          >
            {log.text}
          </div>
        ))}
        {thinking && <div className="text-coral animate-pulse">{t.pixelTerminal.thinking}</div>}
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <span className="font-mono text-mustard text-sm flex items-center">&gt;</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={t.pixelTerminal.placeholder}
          className="flex-1 bg-black/60 border-2 border-sage/50 rounded px-3 py-2 font-mono text-xs sm:text-sm text-cream focus:outline-none focus:border-mustard"
        />
        <button
          type="submit"
          className="retro-btn bg-mustard text-ink font-pixel text-xs px-4 py-2 border-2 border-ink rounded shadow-retro-sm flex flex-col items-center leading-tight"
        >
          <span dir="ltr">TRANSMIT</span>
          <span className="text-[8px] font-body opacity-80" dir="rtl">إرسال</span>
        </button>
      </form>
    </div>
  );
}
