"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export function Contact() {
    return (
        <section className="py-10 md:py-16">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-6 p-8 rounded-2xl bg-gradient-to-b from-blue-900/10 to-transparent border border-white/5"
            >
                {/* Heading removed for page-based layout */}
                <p className="text-neutral-400 max-w-md">
                    I&#39;m currently open to new opportunities. Whether you have a question or just want to say hi, I&#39;ll try my best to get back to you!
                </p>
                <Link href="mailto:piyushchandra@duck.com">
                    <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white border-none">
                        <Mail className="w-4 h-4" />
                        Say Hello
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </Link>
            </motion.div>
        </section>
    );
}
