import type { Metadata } from "next";
import { Experience } from "@/components/sections/Experience";

export const metadata: Metadata = {
    title: "Experience · Piyush",
    description: "AU Small Finance Bank and Newgen Software: remittance, trade finance, SWIFT, compliance automation.",
    alternates: { canonical: "/experience" },
    openGraph: {
        title: "Experience · Piyush",
        description: "Banking & fintech engineering: TAT cuts, SWIFT integrations, RBI automation.",
        url: "/experience",
        images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    },
};

export default function ExperiencePage() {
    return (
        <div className="w-full text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10 text-center space-y-4">
                <p className="text-neutral-400">my professional journey.</p>
            </div>
            <Experience />
        </div>
    );
}
