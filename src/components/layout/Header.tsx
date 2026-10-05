"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { href: "/about", label: "about" },
    { href: "/experience", label: "experience" },
    { href: "/projects", label: "projects" },
    { href: "/writing", label: "writing" },
    { href: "https://github.com/piyush-chandra", label: "github", external: true },
    { href: "https://piyus.site/resume", label: "resume", external: true },
    { href: "/timeline", label: "timeline" },
    // { href: "/books", label: "books" },
];

export function Header() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col items-start gap-6 mb-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-full overflow-hidden transition-all duration-500 ease-in-out"
            >
                <Image
                    src="/20250301_152606.jpeg"
                    alt="Piyush 👋"
                    width={128}
                    height={128}
                    className="object-cover w-32 h-32"
                    priority
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="space-y-6 text-left"
            >
                <Link href="/">
                    <h1 className="text-3xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors cursor-pointer">
                        hi, i&#39;m piyush 👋
                    </h1>
                </Link>

                <div className="h-8" />

                <nav className="flex flex-wrap justify-start gap-x-6 gap-y-2 text-lg text-neutral-400">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            className={cn(
                                "underline decoration-neutral-600 underline-offset-4 transition-all hover:text-white hover:-translate-y-1",
                                pathname === link.href && "text-white"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </motion.div>
        </div >
    );
}
