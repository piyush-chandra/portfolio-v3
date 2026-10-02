"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const CERTS = [
    "DeepLearning.AI — Neural Networks & Deep Learning",
    "DeepLearning.AI — Hyperparameter Tuning & Optimization",
    "DeepLearning.AI — Structuring ML Projects",
    "DeepLearning.AI — TensorFlow for AI/ML/DL",
    "NPTEL — Intro to Machine Learning",
    "NPTEL — Practical ML with TensorFlow",
];

export function Education() {
    return (
        <section className="space-y-8 py-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-3"
            >
                <div className="flex items-center gap-2 text-neutral-400">
                    <GraduationCap className="w-5 h-5" />
                    <h2 className="text-sm font-semibold uppercase tracking-widest">Education</h2>
                </div>
                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/30">
                    <h3 className="text-white font-semibold">B.Tech, Computer Science — Gurukula Kangri Vishwavidyalaya</h3>
                    <p className="text-sm text-neutral-500 font-mono mt-1">2017 – 2021 · 83.67% · Coding Club, Chess, Football</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-3"
            >
                <div className="flex items-center gap-2 text-neutral-400">
                    <Award className="w-5 h-5" />
                    <h2 className="text-sm font-semibold uppercase tracking-widest">Certifications</h2>
                </div>
                <ul className="grid gap-2">
                    {CERTS.map((c) => (
                        <li key={c} className="text-sm text-neutral-400 border border-white/5 rounded-lg px-4 py-2.5 bg-white/[0.02] hover:border-blue-500/25 hover:text-neutral-300 transition-colors">
                            {c}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
}
