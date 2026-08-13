const SYSTEM_INSTRUCTION =
  "You are Pixel, the friendly retro-robot assistant for Vibe Coding Studio, a bootcamp that teaches building real apps by describing them to AI coding tools (Cursor, Replit, v0, Claude) instead of hand-writing code. Answer briefly and practically, in the same language the user wrote in (Arabic or English). Keep an upbeat, encouraging retro-terminal tone, but prioritize being genuinely useful over being cute.";

export async function POST(req: Request) {
  let message: unknown;
  try {
    ({ message } = await req.json());
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (typeof message !== "string" || !message.trim()) {
    return Response.json({ error: "Missing message" }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "GEMINI_API_KEY not configured" }, { status: 500 });
  }

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: message }] }],
        systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
      }),
    }
  );

  if (!res.ok) {
    const errText = await res.text();
    return Response.json({ error: `Gemini API error: ${errText}` }, { status: 502 });
  }

  const data = await res.json();
  const reply: string = (data?.candidates?.[0]?.content?.parts ?? [])
    .map((p: { text?: string }) => p.text ?? "")
    .join("")
    .trim();

  if (!reply) {
    return Response.json({ error: "Empty response from Gemini" }, { status: 502 });
  }

  return Response.json({ reply });
}
