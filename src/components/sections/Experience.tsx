"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EXPERIENCE_DATA = [
    {
        company: "AU Small Finance Bank",
        role: "Technical Analyst",
        period: "Dec 2024 – Present",
        location: "Jaipur",
        achievements: [
            "Excel-based bulk upload for AD2 partners (EbixCash, MakeMyTrip), cutting outward-remittance TAT by 70%.",
            "API integrations between customer portals and Core Banking for Remittance, LC, BG, and New-To-Bank outward remittance.",
            "Automated + scheduled mandatory RBI reports — on-time compliance at near-zero manual effort (previously 10+ hrs/week).",
            "Collaborated with the OFSS (Oracle) team on the MT-to-MX SWIFT migration.",
            "Scheduled risk-mitigation email alerts flagging potential transaction errors before they land.",
            "Production support across remittance and trade-finance modules.",
        ],
        tags: ["Core Banking", "REST APIs", "RBI Compliance", "SWIFT"],
    },
    {
        company: "Newgen Software",
        role: "Senior Software Engineer",
        period: "Jul 2023 – Dec 2024",
        location: "Noida",
        achievements: [
            "Built Tracer Service automating reminders in Bank Guarantee transactions via SWIFT MT799 — improving BG closure by 80%.",
            "Developed a unified module for SWIFT message types (MT103, MT202, MT202COV, MT110, MT760, MT767, N-series).",
            "Integrated a leading bank trade-platform frontend (Finastra) with Newgen Trade Finance via IBM MQ + REST for E2E flow.",
            "Integrated third-party bank apps via REST APIs, reducing transaction TAT by 60%.",
        ],
        tags: ["IBM MQ", "SWIFT", "Finastra", "Spring Batch"],
    },
    {
        company: "Newgen Software",
        role: "Software Engineer",
        period: "Jul 2021 – Jul 2023",
        location: "Noida",
        achievements: [
            "Contributed to the Import Bills flow; built the Trade Memo superstructure for approval-authority sign-offs, reusable across all Trade Finance processes.",
            "Built the Notification Service behind Trade Memo email approvals for AML and high-value transactions.",
            "Built Trade Intelligence superstructure summarizing customer risk rating from transaction history.",
            "Integrated SWIFT MT103 / MT202 / MT202COV / MT110 into the Outward Remittance module.",
            "Designed the Correspondence Event superstructure for sending/receiving N-series SWIFT messages.",
        ],
        tags: ["Java", "Spring Boot", "SWIFT", "Kafka"],
    },
    {
        company: "Newgen Software",
        role: "Software Engineer Intern",
        period: "Apr 2021 – Jun 2021",
        location: "Noida",
        achievements: [
            "BPM system for an insurance client to cut claim-processing time; built TAT-visualization reports.",
        ],
        tags: ["BPM", "Reporting"],
    },
];

export function Experience() {
    return (
        <section className="space-y-8 py-10">
            <div className="grid gap-6">
                {EXPERIENCE_DATA.map((job, index) => (
                    <motion.div
                        key={`${job.company}-${job.role}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                    >
                        <Card className="border-neutral-800 bg-neutral-900/40 backdrop-blur-sm hover:border-neutral-700 transition-colors">
                            <CardHeader>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                    <div>
                                        <CardTitle className="text-lg text-white">{job.company}</CardTitle>
                                        <CardDescription className="text-neutral-400 font-medium">
                                            {job.role} <span className="text-neutral-600">· {job.location}</span>
                                        </CardDescription>
                                    </div>
                                    <span className="text-sm text-neutral-500 font-mono whitespace-nowrap">{job.period}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-neutral-300 leading-relaxed">
                                    {job.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-1.5">
                                    {job.tags.map((t) => (
                                        <Badge key={t} variant="secondary" className="bg-neutral-800/70 text-[11px] text-neutral-400">
                                            {t}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
            <p className="text-center text-sm text-neutral-500 pt-2">
                deep dive:{" "}
                <Link href="/projects/ad2-bulk-upload" className="inline-flex items-center gap-1 text-neutral-300 underline decoration-blue-500/50 underline-offset-4 hover:text-white transition-colors group">
                    how the AD2 bulk upload cut TAT 70%
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
            </p>
        </section>
    );
}
