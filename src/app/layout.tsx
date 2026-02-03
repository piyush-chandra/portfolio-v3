import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { SocialFAB } from "@/components/ui/SocialFAB";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Piyush 👋",
  description: "Portfolio of Piyush",
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
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black" />
        </div>
        <main className="max-w-2xl mx-auto px-6 py-20 md:py-32 relative z-10 flex flex-col items-center text-center">
          <Header />
          {children}
        </main>
        <SocialFAB />
      </body>
    </html>
  );
}
