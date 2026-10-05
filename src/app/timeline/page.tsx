import type { Metadata } from "next";
import { Timeline } from "@/components/sections/Timeline";

export const metadata: Metadata = {
    title: "Timeline · Piyush",
    description: "Life updates and milestones: shipping, running, reading.",
    alternates: { canonical: "/timeline" },
    openGraph: {
        title: "Timeline · Piyush",
        description: "Life updates and milestones.",
        url: "/timeline",
    },
};

export default function TimelinePage() {
    return (
        <div className="w-full text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10 text-center space-y-4">
                <p className="text-neutral-400">life updates & milestones.</p>
            </div>
            <Timeline />
        </div>
    );
}
