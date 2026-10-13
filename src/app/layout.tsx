import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { SocialFAB } from "@/components/ui/SocialFAB";
import { StickyCTA } from "@/components/ui/StickyCTA";
import { Spotlight, ScrollProgress } from "@/components/ui/Spotlight";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
};

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-v3-one-xi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-v3-one-xi.vercel.app"),
  title: "Piyush — Backend Engineer",
  description: "Piyush Chandra — Senior Software Engineer. Banking & fintech backends, weekend builds, AI/LLM tinkering. Latest: Diabetes Risk Check, private in-browser screening.",
  openGraph: {
    title: "Piyush — Backend Engineer",
    description: "Scalable backends, fintech systems, weekend ships. Latest: Diabetes Risk Check.",
    url: "./",
    siteName: "Piyush — Backend Engineer",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush — Backend Engineer",
    description: "Banking & fintech backends, weekend builds, AI/LLM tinkering.",
    images: ["/opengraph-image.png"],
  },
  alternates: { canonical: "./" },
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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black" />
        </div>
        <Spotlight />
        <main id="main" className="max-w-2xl mx-auto px-6 py-20 md:py-32 relative z-10 flex flex-col items-center text-center">
          <Header />
          {children}
          <footer className="mt-20 text-[12px] font-mono text-neutral-500 text-center space-y-1 pb-20 md:pb-0">
            <p>built with next.js · shipped most weekends</p>
            <p className="text-neutral-500">jaipur, india — {new Date().getFullYear()}</p>
          </footer>
        </main>
        <SocialFAB />
        <StickyCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Piyush Chandra",
              jobTitle: "Senior Software Engineer",
              address: { "@type": "PostalAddress", addressLocality: "Jaipur", addressCountry: "IN" },
              url: SITE,
              sameAs: [
                "https://github.com/piyush-chandra",
                "https://www.linkedin.com/in/piyushclick/",
                "https://x.com/piyushstwt",
              ],
              knowsAbout: ["Java", "Spring Boot", "Python", "FastAPI", "SWIFT", "Microservices", "Machine Learning"],
              worksFor: [{ "@type": "Organization", name: "AU Small Finance Bank" }],
              alumniOf: [{ "@type": "Organization", name: "Newgen Software" }],
            }),
          }}
        />
      </body>
    </html>
  );
}
