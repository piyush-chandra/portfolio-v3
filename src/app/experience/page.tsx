import Link from "next/link";
import { Experience } from "@/components/sections/Experience";

export default function ExperiencePage() {
    return (
        <div className="w-full text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10 text-center space-y-4">
                <h1 className="text-3xl font-bold"></h1>
                <p className="text-neutral-400">my professional journey.</p>
            </div>
            <Experience />
        </div>
    );
}
