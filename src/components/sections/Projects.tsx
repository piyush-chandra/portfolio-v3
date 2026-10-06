"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, FlaskConical, ArrowRight } from "lucide-react";
import Link from "next/link";

type Project = {
    title: string;
    one_liner: string;
    outcome: string;
    tech_stack: string[];
    live?: string;
    github?: string;
    status: "Live" | "Code" | "Experiment";
    featured?: boolean;
    caseStudy?: string;
};

const FEATURED: Project = {
    title: "Diabetes Risk Check",
    one_liner: "Private, in-browser screening for early-diabetes symptom patterns — answer 16 questions, get scored locally. Nothing uploaded, no server inference.",
    outcome: "5-expert stacking ensemble · 10 algos honestly benchmarked · CTGAN augmentation study · JS/Python parity-verified artifact",
    tech_stack: ["Next.js", "TypeScript", "scikit-learn", "CTGAN", "Vercel"],
    live: "https://diabetes-site-three.vercel.app",
    github: "https://github.com/piyush-chandra/diabetes-risk-check",
    status: "Live",
    featured: true,
    caseStudy: "/projects/diabetes-risk-check",
};

const PROJECTS_DATA: Project[] = [
    {
        title: "URL Shortener",
        one_liner: "Shortening service with custom aliases — built for my own links (piyus.site).",
        outcome: "Custom slugs + click tracking · FastAPI + HTMX, Dockerized",
        tech_stack: ["Python", "FastAPI", "SQLAlchemy", "Docker", "HTMX"],
        live: "https://piyus.site",
        status: "Live",
        caseStudy: "/writing/my-own-bitly",
    },
    {
        title: "Group Chat",
        one_liner: "Group chat on plain REST + polling — timestamped log, paginated history, zero socket ops.",
        outcome: "FastAPI backend + React frontend, split repos (chat-b / chat-f) · polling beats sockets at this scale",
        tech_stack: ["Python", "FastAPI", "REST", "React", "Docker"],
        live: "https://pi-c.vercel.app/",
        github: "https://github.com/piyush-chandra/chat-f",
        status: "Live",
        caseStudy: "/writing/group-chat-rest-polling",
    },
    {
        title: "ToolChat — Gemini Wrapper",
        one_liner: "Corp-friendly chat over the Gemini API — simple interface when ChatGPT is blocked.",
        outcome: "Local history + bookmarked answers · basic auth · proxy-tunnel concept",
        tech_stack: ["Next.js", "TypeScript", "Gemini API", "Tailwind"],
        live: "https://pitools.vercel.app",
        status: "Live",
        caseStudy: "/writing/toolchat-blocked-chatgpt",
    },
    {
        title: "NeetCode Submissions",
        one_liner: "Ongoing DSA practice — data structures, algorithms, and design patterns with notes.",
        outcome: "Steady interview-readiness signal · Java-first solutions",
        tech_stack: ["Java", "Python", "DSA", "Design Patterns"],
        github: "https://github.com/piyush-chandra/neetcode-submissions",
        status: "Code",
    },
    {
        title: "Local-LLM Playground",
        one_liner: "Experiments running LLMs locally + thin Next.js front-ends over them.",
        outcome: "Where the diabetes-model export + prompt ideas get prototyped first",
        tech_stack: ["Next.js", "TypeScript", "Python", "LLMs"],
        github: "https://github.com/piyush-chandra/Local-LLM",
        status: "Experiment",
        caseStudy: "/writing/edge-llm-proxy",
    },
    {
        title: "Biometric Attendance System",
        one_liner: "Enterprise attendance on employees' own phones — dlib face match + GPS, auto-segregating genuine check-ins from spurious ones.",
        outcome: "Shipped org-wide Oct – Dec 2021 · camera + GPS sensor fusion",
        tech_stack: ["Python", "FastAPI", "dlib", ".NET", "Angular", "Docker"],
        live: "https://mlservices.vultech.in/docs",
        status: "Live",
    },
];

function StatusDot({ status }: { status: Project["status"] }) {
    const color =
        status === "Live"
            ? "bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.5)]"
            : status === "Code"
              ? "bg-sky-400 shadow-[0_0_8px_2px_rgba(56,189,248,0.4)]"
              : "bg-amber-400 shadow-[0_0_8px_2px_rgba(251,191,36,0.4)]";
    return (
        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-neutral-400">
            <span className={`relative flex h-2 w-2`}>
                <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${color}`} />
                <span className={`relative inline-flex h-2 w-2 rounded-full ${color}`} />
            </span>
            {status}
        </span>
    );
}

function ProjectCard({ project, index, big = false }: { project: Project; index: number; big?: boolean }) {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    function onMove(e: React.MouseEvent<HTMLDivElement>) {
        const r = e.currentTarget.getBoundingClientRect();
        setTilt({
            x: Math.round(((e.clientX - r.left) / r.width - 0.5) * 12),
            y: Math.round(((e.clientY - r.top) / r.height - 0.5) * 12),
        });
    }
    function reset() { setTilt({ x: 0, y: 0 }); }
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (index % 3) * 0.08, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className={big ? "lg:col-span-2" : ""}
        >
            <div
                onMouseMove={onMove}
                onMouseLeave={reset}
                className="h-full transition-transform duration-200 ease-out will-change-transform"
                style={{ transform: `translate(${tilt.x}px, ${tilt.y}px)` }}
            >
            <Card
                className={`h-full flex flex-col border-neutral-800 bg-neutral-900/40 backdrop-blur-sm group cursor-default overflow-hidden relative transition-colors duration-300 hover:border-blue-500/40 hover:bg-neutral-900/70 hover:shadow-[0_8px_40px_-12px_rgba(59,130,246,0.35)] ${big ? "border-blue-500/20 bg-gradient-to-b from-blue-950/30 to-neutral-900/40" : ""}`}
            >
                {big && <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />}
                <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1.5">
                            {big && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-blue-300">
                                    <Star className="w-3 h-3 fill-blue-300" /> Featured
                                </span>
                            )}
                            <CardTitle className="text-lg text-white group-hover:text-blue-300 transition-colors">
                                {project.title}
                            </CardTitle>
                        </div>
                        <StatusDot status={project.status} />
                    </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-2.5">
                    <CardDescription className={`leading-relaxed ${big ? "text-[15px] text-neutral-300" : "text-sm text-neutral-400"}`}>
                        {project.one_liner}
                    </CardDescription>
                    <p className="flex items-start gap-1.5 text-[13px] leading-relaxed text-neutral-500">
                        <FlaskConical className="w-3.5 h-3.5 mt-0.5 shrink-0 text-neutral-600 group-hover:text-blue-400/70 transition-colors" />
                        <span>{project.outcome}</span>
                    </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-3 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                        {project.tech_stack.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-neutral-800/80 text-[11px] text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
                        {project.live && (
                            <Link
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 py-2 text-neutral-300 hover:text-white font-medium transition-colors group/link"
                            >
                                <span className="underline decoration-neutral-600 underline-offset-4 group-hover/link:decoration-blue-400">Live demo</span>
                                <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover/link:text-blue-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                            </Link>
                        )}
                        {project.github && (
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 py-2 text-neutral-500 hover:text-white transition-colors group/link"
                            >
                                <Github className="w-4 h-4" />
                                <span className="underline decoration-neutral-700 underline-offset-4 group-hover/link:decoration-neutral-400">Code</span>
                            </Link>
                        )}
                        {project.caseStudy && (
                            <Link
                                href={project.caseStudy}
                                className="inline-flex items-center gap-1.5 text-blue-300/90 hover:text-blue-200 font-medium transition-colors group/link"
                            >
                                <span className="underline decoration-blue-500/50 underline-offset-4">Read the story</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                            </Link>
                        )}
                    </div>
                </CardFooter>
            </Card>
            </div>
        </motion.div>
    );
}

export function Projects() {
    return (
        <section className="space-y-8 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <ProjectCard project={FEATURED} index={0} big />
                {PROJECTS_DATA.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i + 1} />
                ))}
            </div>
            <p className="text-center text-sm text-neutral-600">
                + more experiments on{" "}
                <Link href="https://github.com/piyush-chandra?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-neutral-400 underline decoration-neutral-700 underline-offset-4 hover:text-white transition-colors">
                    GitHub
                </Link>
                {" "}— I ship most weekends.
            </p>
        </section>
    );
}
