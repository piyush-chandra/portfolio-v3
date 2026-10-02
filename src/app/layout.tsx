import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/layout/Header";
import { SocialFAB } from "@/components/ui/SocialFAB";
import { Spotlight, ScrollProgress } from "@/components/ui/Spotlight";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Piyush — Backend Engineer",
  description: "Piyush Chandra — Senior Software Engineer. Banking & fintech backends, weekend builds, AI/LLM tinkering. Latest: Diabetes Risk Check, private in-browser screening.",
  openGraph: {
    title: "Piyush — Backend Engineer",
    description: "Scalable backends, fintech systems, weekend ships. Latest: Diabetes Risk Check.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans`}
      >
        <ScrollProgress />
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black" />
        </div>
        <Spotlight />
        <main className="max-w-2xl mx-auto px-6 py-20 md:py-32 relative z-10 flex flex-col items-center text-center">
          <Header />
          {children}
          <footer className="mt-20 text-[12px] font-mono text-neutral-600 text-center space-y-1">
            <p>built with next.js · shipped most weekends</p>
            <p className="text-neutral-700">jaipur, india — {new Date().getFullYear()}</p>
          </footer>
        </main>
        <SocialFAB />
        <Analytics />
      </body>
    </html>
  );
}
