import type { Metadata } from "next";
import { Books } from "@/components/sections/Books";

export const metadata: Metadata = {
    title: "Books · Piyush",
    description: "What I'm reading: DDIA, Atomic Habits, Psychology of Money, Clean Code.",
    alternates: { canonical: "/books" },
    openGraph: {
        title: "Books · Piyush",
        description: "Reading list and notes.",
        url: "/books",
    },
};

export default function BooksPage() {
    return (
        <div className="w-full text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10 text-center space-y-4">
                <p className="text-neutral-400">what i'm reading & thoughts.</p>
            </div>
            <Books />
        </div>
    );
}
