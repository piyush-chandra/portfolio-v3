"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ROLES = ["backend engineer", "fintech systems builder", "weekend shipper", "AI/LLM tinkerer"];
const STATS = [
    { value: "5+ yrs", label: "backend, prod systems" },
    { value: "80%", label: "TAT cut, best automation" },
    { value: "10+ hrs", label: "saved weekly on reports" },
];

function useTyping(words: string[], typeMs = 55, holdMs = 1600) {
    const [text, setText] = useState("");
    useEffect(() => {
        let w = 0, i = 0, deleting = false, timer: ReturnType<typeof setTimeout>;
        const tick = () => {
            const word = words[w];
            if (!deleting) {
                i++;
                setText(word.slice(0, i));
                if (i === word.length) {
                    deleting = true;
                    timer = setTimeout(tick, holdMs);
                    return;
                }
                timer = setTimeout(tick, typeMs);
            } else {
                i -= 2; // delete faster for snappier loop
                if (i <= 0) {
                    i = 0; deleting = false;
                    w = (w + 1) % words.length;
                }
                setText(words[w].slice(0, Math.max(0, i)));
                timer = setTimeout(tick, 28);
            }
        };
        timer = setTimeout(tick, 400);
        return () => clearTimeout(timer);
    }, [words, typeMs, holdMs]);
    return text;
}

function ISTClock() {
    const [time, setTime] = useState("");
    useEffect(() => {
        const fmt = new Intl.DateTimeFormat("en-IN", {
            hour: "2-digit", minute: "2-digit", second: "2-digit",
            hour12: true, timeZone: "Asia/Kolkata",
        });
        const update = () => setTime(fmt.format(new Date()));
        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, []);
    return <span className="tabular-nums">{time} IST</span>;
}

export default function Home() {
    const typed = useTyping(ROLES);
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="w-full text-left space-y-8"
        >
            {/* status line — the "alive" bit */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-mono text-neutral-500">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-300">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    open to new opportunities
                </span>
                <span className="inline-flex items-center gap-1.5">
                    <span className="text-neutral-600">●</span> Bengaluru, India · <ISTClock />
                </span>
            </div>

            {/* typing identity */}
            <div className="space-y-3">
                <p className="text-xl md:text-2xl text-white font-medium tracking-tight">
                    Piyush — <span className="text-blue-300">{typed}</span>
                    <span className="animate-blink text-blue-400">▍</span>
                </p>
                <p className="text-white/80 leading-relaxed text-base max-w-[560px]">
                    I&apos;m a backend engineer who likes problems around scalability, system design, and reliability.
                    Senior Software Engineer across banking &amp; fintech — core-banking ↔ treasury integrations,
                    SWIFT migrations, bulk-upload and compliance automations that actually move TAT.
                </p>
                <p className="text-neutral-400 leading-relaxed text-[15px] max-w-[560px]">
                    Right now: exploring AI/LLMs on backend-driven products. Latest ship →{" "}
                    <Link href="https://diabetes-site-three.vercel.app" target="_blank" className="text-neutral-200 underline decoration-blue-500/60 underline-offset-4 hover:text-white hover:decoration-blue-400 transition-colors">
                        Diabetes Risk Check
                    </Link>
                    {" "}— private in-browser screening with a 5-expert ensemble. No server inference.
                </p>
            </div>

            {/* stats strip */}
            <div className="grid grid-cols-3 gap-3 max-w-[560px]">
                {STATS.map((s, i) => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 + i * 0.1 }}
                        className="rounded-xl border border-white/5 bg-white/[0.02] px-3 py-3 text-center hover:border-blue-500/30 hover:bg-blue-500/[0.06] transition-colors"
                    >
                        <div className="text-lg font-bold text-white">{s.value}</div>
                        <div className="text-[11px] leading-tight text-neutral-500 mt-0.5">{s.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-blue-300 transition-colors group"
                >
                    see what i&apos;ve built
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-5 py-2.5 text-sm text-neutral-300 hover:text-white hover:border-white/25 transition-colors group"
                >
                    more about me
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
            </div>

            {/* now-line */}
            <p className="text-[13px] font-mono text-neutral-600">
                <span className="text-neutral-500">now:</span> shipping weekend builds · running half-marathons (2:09:50) · reading DDIA
            </p>
        </motion.div>
    );
}
