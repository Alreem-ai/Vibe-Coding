export default function Footer() {
  return (
    <footer
      className="mt-12 pt-6 border-t-2 border-dashed border-ink flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-ink"
      dir="ltr"
    >
      <div className="flex items-center gap-2">
        <span className="bg-mustard text-ink font-pixel text-[10px] px-2 py-0.5 border border-ink">
          VER: 1.0
        </span>
        <span>VIBE CODING · GDG ON CAMPUS</span>
      </div>
      <div className="flex gap-4 font-pixel text-[10px]">
        <span className="text-coral">SYNC STATE</span>
        <span>•</span>
        <span className="text-dusty-blue">MASCOT MOOD</span>
        <span>•</span>
        <span className="text-sage font-bold">MASCOT: PIXEL</span>
      </div>
    </footer>
  );
}
