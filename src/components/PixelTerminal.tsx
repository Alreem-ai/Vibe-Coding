"use client";

import { useState } from "react";

interface KnowledgeItem {
  keys: string[];
  reply: string;
}

const knowledgeBase: KnowledgeItem[] = [
  {
    keys: ["prompt", "برومبت"],
    reply:
      "A good prompt has 3 parts: the GOAL (what you want), the CONTEXT (tech/library), and the CONSTRAINTS (style, behavior). Be specific — 'a product card with image, price, and buy button' beats just 'a card'.",
  },
  {
    keys: ["cursor"],
    reply:
      "Cursor is best for editing code inside an existing project. Select the file or function, describe the change, and review the diff before accepting.",
  },
  {
    keys: ["replit"],
    reply:
      "Replit gives you a full dev environment in the browser — great for building and running a whole small app from a single description.",
  },
  {
    keys: ["v0", "figma"],
    reply:
      "v0 and Figma AI turn a description or design into a working UI fast. Use them for the first draft of a screen, then refine by hand or with Cursor.",
  },
  {
    keys: ["debug", "error", "bug", "خطأ"],
    reply:
      "When something breaks: read the error message first, ask the AI to explain it in plain words, then ask for a fix ONE step at a time instead of a full rewrite.",
  },
  {
    keys: ["deploy", "نشر", "vercel", "netlify"],
    reply:
      "To deploy: push your project to GitHub, connect the repo to Vercel or Netlify, and it builds automatically. Always test the live link before sharing it.",
  },
  {
    keys: ["hello", "hi", "مرحبا", "هلا"],
    reply: "BEEP BOOP! Hi there. Ask me about prompting, Cursor, Replit, debugging, or deploying.",
  },
];

const fallbacks = [
  "Try being more specific: what's the goal, what tool are you using, and what should the result look like?",
  "I don't have a canned answer for that one yet — try asking about prompting, Cursor, Replit, debugging, or deploying!",
  "Good question! Break it into a smaller step and describe exactly what you want the AI to build first.",
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
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: logIdCounter++,
      role: "system",
      text: "[SYSTEM]: PIXEL ASSISTANT READY.\n[SYSTEM]: Ask about prompting, Cursor, Replit, debugging, or deploying your Vibe Coding project!",
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
        <span className="font-mono text-xs text-mustard hidden sm:inline">[GEMINI POWERED]</span>
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
        {thinking && <div className="text-coral animate-pulse">[PIXEL]: THINKING...</div>}
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <span className="font-mono text-mustard text-sm flex items-center">&gt;</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type your question (e.g. 'how do I write a good prompt?')..."
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
