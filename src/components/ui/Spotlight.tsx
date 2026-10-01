"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function Spotlight() {
    const [pos, setPos] = useState({ x: -400, y: -400 });
    useEffect(() => {
        let raf = 0;
        const onMove = (e: MouseEvent) => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }));
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(raf);
        };
    }, []);
    return (
        <div className="pointer-events-none fixed inset-0 z-[1]" aria-hidden>
            <div
                className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-100"
                style={{
                    left: pos.x,
                    top: pos.y,
                    background:
                        "radial-gradient(circle, rgba(59,130,246,0.07) 0%, rgba(59,130,246,0.03) 35%, transparent 65%)",
                }}
            />
        </div>
    );
}

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.4 });
    return (
        <motion.div
            className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500"
            style={{ scaleX }}
        />
    );
}
