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
        <span className="flex items-center gap-2">
          TUWAIQ CLUB 
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-coral transition-colors flex items-center justify-center bg-ink text-cream p-1 rounded-sm shadow-sm" title="X (Twitter)">
            <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          GDG ON CAMPUS
        </span>
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
