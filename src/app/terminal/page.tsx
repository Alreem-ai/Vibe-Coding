import PixelTerminal from "@/components/PixelTerminal";
import TerminalHeading from "@/components/TerminalHeading";

export const metadata = {
  title: "Ask Pixel | Vibe Coding Studio",
};

export default function TerminalPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <TerminalHeading />
      <PixelTerminal />
    </div>
  );
}
