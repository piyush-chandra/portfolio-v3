"use client";

import { useCallback, useEffect, useState } from "react";
import { Activity } from "lucide-react";

/** Backend-flavored proof of life: measures a real round-trip to our own API. */
export function LatencyBadge() {
    const [ms, setMs] = useState<number | null>(null);
    const ping = useCallback(async () => {
        try {
            const t0 = performance.now();
            const res = await fetch("/api/ping", { cache: "no-store" });
            if (!res.ok) throw new Error("bad");
            await res.json();
            setMs(Math.max(1, Math.round(performance.now() - t0)));
        } catch {
            setMs(null);
        }
    }, []);
    useEffect(() => { ping(); }, [ping]);

    return (
        <button
            onClick={ping}
            title="Round-trip to this site's own API — click to re-ping"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[12px] text-neutral-400 hover:text-neutral-200 hover:border-blue-500/30 transition-colors cursor-pointer"
        >
            <Activity className="w-3 h-3 text-blue-400" />
            {ms === null ? (
                <span>api: …</span>
            ) : (
                <span>api: <span className="text-neutral-200 font-semibold tabular-nums">{ms}ms</span></span>
            )}
        </button>
    );
}
