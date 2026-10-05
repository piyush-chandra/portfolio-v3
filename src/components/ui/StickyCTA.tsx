"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileDown, Mail } from "lucide-react";

/** High-conversion mobile pattern: thumb-reach CTA bar, shown after scrolling past the hero. */
export function StickyCTA() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 420);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    if (!visible) return null;
    return (
        <div className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-white/10 bg-black/85 backdrop-blur-md px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <div className="flex gap-3">
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black"
                >
                    <FileDown className="w-4 h-4" /> Résumé
                </a>
                <Link
                    href="/about"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
                >
                    <Mail className="w-4 h-4" /> Say hello
                </Link>
            </div>
        </div>
    );
}
