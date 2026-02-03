"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const EXPERIENCE_DATA = [
    {
        company: "AU Small Finance Bank",
        role: "Technical Analyst",
        period: "Dec 2024 – Present",
        achievements: [
            "Integrated Core Banking System with Treasury Kondor for deal utilisation across Trade Finance modules.",
            "Developed Excel-based bulk upload for AD2 partners, reducing TAT by 80%.",
            "Collaborated on MT to MX SWIFT migration project.",
            "Integrated APIs for New-To-Bank customer outward remittance.",
            "Automated RBI compliance reports, saving 10+ hours weekly."
        ]
    },
    {
        company: "Newgen Software",
        role: "Senior Software Engineer",
        period: "Apr 2021 – Dec 2024",
        achievements: [
            "Built Tracer Service for SWIFT (MT799), improving BG closure by 80%.",
            "Developed unified module for various SWIFT message types.",
            "Integrated third-party bank apps via REST APIs, reducing TAT by 60%.",
            "Created Trade Memo Module with email approvals, cutting risk by 90%."
        ]
    }
];

export function Experience() {
    return (
        <section className="space-y-8 py-10">
            {/* Heading removed for page-based layout */}


            <div className="grid gap-6">
                {EXPERIENCE_DATA.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="border-neutral-800 bg-neutral-900/40 backdrop-blur-sm">
                            <CardHeader>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                    <div>
                                        <CardTitle className="text-lg text-white">{job.company}</CardTitle>
                                        <CardDescription className="text-neutral-400 font-medium">{job.role}</CardDescription>
                                    </div>
                                    <span className="text-sm text-neutral-500">{job.period}</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-neutral-300">
                                    {job.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
