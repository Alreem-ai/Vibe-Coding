import type { Metadata } from "next";
import { Cairo, Silkscreen, Space_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocaleProvider } from "@/context/LocaleContext";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["700", "800", "900"],
});

const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ibmPlex = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vibe Coding | البرمجة التوليدية",
  description: "دليل البرمجة التوليدية - معسكر Vibe Coding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} ${silkscreen.variable} ${spaceMono.variable} ${ibmPlex.variable} min-h-screen relative overflow-x-hidden font-body`}
      >
        <LocaleProvider>
          <div className="paper-grain"></div>
          <div className="p-2 md:p-6">
            <div className="max-w-7xl mx-auto bg-cream-dark border-4 border-ink rounded-2xl p-4 md:p-8 shadow-retro-lg relative my-2 md:my-6 overflow-hidden">
              {/* Top Badges */}
              <div className="absolute top-3 left-4 flex items-center gap-2 z-10" dir="ltr">
                <div className="bg-coral text-cream font-pixel text-xs px-3 py-1.5 border-2 border-ink shadow-retro-sm rotate-3 flex items-center gap-1">
                  GDG · VIBE #01
                </div>
                <div className="hidden sm:flex bg-mustard text-ink font-pixel text-xs px-2 py-1 border-2 border-ink -rotate-2">
                  REF: 05/5
                </div>
              </div>

              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
