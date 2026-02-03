import Link from "next/link";
import { Projects } from "@/components/sections/Projects";

export default function ProjectsPage() {
    return (
        <div className="w-full text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10 text-center space-y-4">
                <h1 className="text-3xl font-bold"></h1>
                <p className="text-neutral-400">here are some things i've built.</p>
            </div>
            <Projects />
        </div>
    );
}

