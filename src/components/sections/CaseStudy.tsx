import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export function CaseHero({ kicker, title, lede, meta, live, github }: {
    kicker: string;
    title: string;
    lede: string;
    meta: string[];
    live?: string;
    github?: string;
}) {
    return (
        <div className="w-full text-left space-y-5">
            <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> all projects
            </Link>
            <p className="text-[12px] font-mono uppercase tracking-widest text-blue-400">{kicker}</p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{title}</h1>
            <p className="text-neutral-300 leading-relaxed text-[16px]">{lede}</p>
            <div className="flex flex-wrap gap-2">
                {meta.map((m) => (
                    <span key={m} className="text-[12px] font-mono rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-neutral-400">
                        {m}
                    </span>
                ))}
            </div>
            <div className="flex items-center gap-5 text-sm">
                {live && (
                    <a href={live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-neutral-200 font-medium underline decoration-blue-500/60 underline-offset-4 hover:text-white">
                        Live demo <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                )}
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors">
                        <Github className="w-4 h-4" /> Code
                    </a>
                )}
            </div>
        </div>
    );
}

export function CaseSection({ heading, children }: { heading: string; children: React.ReactNode }) {
    return (
        <section className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">{heading}</h2>
            <div className="space-y-3 text-[15px] leading-relaxed text-neutral-300">{children}</div>
        </section>
    );
}
