import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
    title: "Writing · Piyush",
    description: "Short engineering notes: bulk-upload pipelines, honest ML benchmarks, SWIFT tracers.",
};

export default function WritingPage() {
    return (
        <div className="w-full text-left space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <h1 className="text-2xl font-bold text-white">writing</h1>
                <p className="text-neutral-400 text-[15px]">short notes on things I&apos;ve built and measured. No growth hacks.</p>
            </div>
            <div className="grid gap-4">
                {POSTS.map((p) => (
                    <Link
                        key={p.slug}
                        href={`/writing/${p.slug}`}
                        className="group block rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 hover:border-blue-500/40 hover:bg-neutral-900/70 transition-colors"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <h2 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                                {p.title}
                            </h2>
                            <ArrowUpRight className="w-4 h-4 mt-1 shrink-0 text-neutral-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>
                        <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{p.hook}</p>
                        <p className="mt-3 text-[12px] font-mono text-neutral-600">{p.date} · {p.minutes} min</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
