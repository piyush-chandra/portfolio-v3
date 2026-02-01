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
    { href: "https://github.com/piyush-chandra", label: "github", external: true },
    { href: "https://piyus.site/resume", label: "resume", external: true },
    { href: "/timeline", label: "timeline" },
    // { href: "/books", label: "books" },
];

export function Header() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col items-center gap-6 mb-12">
            <Link href="/">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-32 h-32 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer"
                >
                    <Image
                        src="https://ui-avatars.com/api/?name=Piyush+Kumar&background=0D8ABC&color=fff&size=128"
                        // src="https://photos.app.goo.gl/JaNmHESbZY9QCBXYA"
                        alt="Piyush 👋"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-center space-y-6"
            >
                <Link href="/">
                    <h1 className="text-3xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors cursor-pointer">
                        hi, i&#39;m piyush kumar
                    </h1>
                </Link>

                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg text-neutral-400">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            className={cn(
                                "hover:text-white hover:underline decoration-neutral-600 underline-offset-4 transition-all",
                                pathname === link.href && "text-white underline"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </motion.div>
        </div>
    );
}
