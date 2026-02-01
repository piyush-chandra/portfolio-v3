"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";

export function Hero() {
    return (
        <section className="flex flex-col items-start gap-8 py-10 md:py-16">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl"
            >
                <Image
                    src="/avatar-placeholder.png" // Placeholder, user can replace later
                    alt="Piyush Kumar"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="space-y-4"
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white/95">
                    hi, i&#39;m piyush kumar
                </h1>
                <p className="text-lg text-neutral-400 max-w-[600px] leading-relaxed">
                    Technical Analyst & Senior Software Engineer specialized in Fintech and
                    automated banking solutions. Building scalable systems with Spring Boot,
                    Python, and Modern Web Tech.
                </p>

                <div className="flex items-center gap-6 pt-2">
                    <Link
                        href="mailto:piyushchandra@duck.com"
                        className="text-neutral-400 hover:text-white transition-colors"
                    >
                        <Mail className="w-6 h-6" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/piyushclick/"
                        target="_blank"
                        className="text-neutral-400 hover:text-white transition-colors"
                    >
                        <Linkedin className="w-6 h-6" />
                    </Link>
                    <Link
                        href="https://github.com/piyush-chandra"
                        target="_blank"
                        className="text-neutral-400 hover:text-white transition-colors"
                    >
                        <Github className="w-6 h-6" />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
