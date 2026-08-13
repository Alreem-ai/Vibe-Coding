import PixelTerminal from "@/components/PixelTerminal";

export const metadata = {
  title: "Ask Pixel | Vibe Coding Studio",
};

export default function TerminalPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-6 border-b-2 border-ink border-dashed pb-6">
        <span className="font-pixel text-[10px] text-dusty-blue tracking-widest uppercase" dir="ltr">
          OFFLINE ASSISTANT
        </span>
        <h2 className="font-heading text-3xl md:text-4xl text-ink">اسألي بكسل</h2>
      </div>

      <PixelTerminal />
    </div>
  );
}
