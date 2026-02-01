"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

const TIMELINE_DATA = [
    {
        month: "Feb 2026",
        items: [
            {
                title: "Ran 1st Half Marathon",
                description: "Completed my first Half-Marathon run with a time of 2:09:00. A huge personal fitness milestone.",
                link: "piyus.site/HM" // Example link
            },
            // Add more items for Feb 2026 here
        ]
    },
    // {
    //     month: "Jan 2026",
    //     items: [
    //         {
    //             title: "Production Feature Launch",
    //             description: "Successfully deployed the new automated reconciliation module to production, reducing manual effort by 40%."
    //         }
    //     ]
    // },
    // {
    //     month: "Dec 2025",
    //     items: [
    //         {
    //             title: "Read 'Atomic Habits'",
    //             description: "Finished reading Atomic Habits. Implemented the '2-minute rule' into my daily routine."
    //         }
    //     ]
    // }
];

export function Timeline() {
    return (
        <section className="max-w-xl mx-auto space-y-8">
            <div className="relative border-l border-neutral-800 ml-3 md:ml-6 space-y-12 py-4">
                {TIMELINE_DATA.map((group, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Dot for the month */}
                        <div className="absolute top-1.5 left-[-5px] w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-black" />

                        <div className="flex flex-col gap-4">
                            <span className="text-sm font-mono text-blue-400">{group.month}</span>

                            <div className="space-y-6">
                                {group.items.map((item, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-lg font-bold text-white/90">
                                                {item.link ? (
                                                    <Link
                                                        href={item.link}
                                                        target="_blank"
                                                        className="hover:text-blue-400 transition-colors flex items-center gap-2"
                                                    >
                                                        {item.title}
                                                        <ExternalLink className="w-4 h-4 text-neutral-500" />
                                                    </Link>
                                                ) : (
                                                    item.title
                                                )}
                                            </h3>
                                        </div>
                                        <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
