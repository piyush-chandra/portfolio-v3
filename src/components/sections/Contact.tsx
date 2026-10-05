"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, CheckCircle2, Send } from "lucide-react";

const EMAIL = "piyushchandra@duck.com";
const ENDPOINT = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
    ? "https://api.web3forms.com/submit"
    : null;

export function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!ENDPOINT) return;
        setStatus("sending");
        const data = Object.fromEntries(new FormData(e.currentTarget).entries());
        try {
            const res = await fetch(ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY, ...data }),
            });
            setStatus(res.ok ? "sent" : "error");
            if (res.ok) (e.target as HTMLFormElement).reset();
        } catch {
            setStatus("error");
        }
    }

    return (
        <section className="py-10 md:py-16">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-6 p-8 rounded-2xl bg-gradient-to-b from-blue-900/10 to-transparent border border-white/5"
            >
                <p className="text-neutral-400 max-w-md">
                    I&#39;m currently open to new opportunities. Whether you have a question or just want to say hi, I&#39;ll try my best to get back to you!
                </p>

                {ENDPOINT ? (
                    status === "sent" ? (
                        <p className="inline-flex items-center gap-2 text-emerald-300 font-medium">
                            <CheckCircle2 className="w-5 h-5" /> Message sent — I reply within 2 days.
                        </p>
                    ) : (
                        <form onSubmit={onSubmit} className="w-full max-w-md space-y-3 text-left">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <input required name="name" placeholder="your name" className="rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-blue-500/50 transition-colors" />
                                <input required name="email" type="email" placeholder="your email" className="rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-blue-500/50 transition-colors" />
                            </div>
                            <textarea required name="message" rows={4} placeholder="what's up?" className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-blue-500/50 transition-colors resize-none" />
                            <Button type="submit" size="lg" disabled={status === "sending"} className="w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white border-none">
                                <Send className="w-4 h-4" />
                                {status === "sending" ? "sending…" : "send message"}
                            </Button>
                            {status === "error" && (
                                <p className="text-sm text-red-400 text-center">
                                    failed to send — <a href={`mailto:${EMAIL}`} className="underline">email me directly</a> instead.
                                </p>
                            )}
                        </form>
                    )
                ) : (
                    <a
                        href={`mailto:${EMAIL}`}
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        Say Hello
                        <ArrowRight className="w-4 h-4" />
                    </a>
                )}

                <p className="text-[12px] font-mono text-neutral-600">
                    {ENDPOINT ? "replies within 2 days" : "prefer email"} · {EMAIL}
                </p>
            </motion.div>
        </section>
    );
}
