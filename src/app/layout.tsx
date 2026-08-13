import type { Metadata } from "next";
import { Alexandria, Silkscreen, Space_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["arabic", "latin"],
  weight: ["500", "600", "700", "800", "900"],
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
  icons: {
    icon: "/Pixel.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${alexandria.variable} ${silkscreen.variable} ${spaceMono.variable} ${ibmPlex.variable} min-h-screen relative overflow-x-hidden font-body`}
      >
        <div className="paper-grain z-[-1]"></div>
        <div className="p-2 md:p-6">
          <div className="max-w-7xl mx-auto bg-texture rounded-3xl p-4 md:p-8 shadow-xl border border-ink/5 relative my-2 md:my-6 overflow-hidden">


            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
