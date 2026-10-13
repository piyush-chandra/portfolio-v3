import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
    title: "Projects · Piyush",
    description: "Things I've built: Diabetes Risk Check, URL shortener, group chat, Gemini wrapper, attendance system, DSA practice.",
    alternates: { canonical: "/projects" },
    openGraph: {
        title: "Projects · Piyush",
        description: "Side builds with live demos and honest outcomes.",
        url: "/projects",
        images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    },
};

export default function ProjectsPage() {
    return (
        <div className="w-full text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10 text-center space-y-4">
                <p className="text-neutral-400">here are some things i've built.</p>
            </div>
            <Projects />
        </div>
    );
}

