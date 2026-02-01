import Link from "next/link";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function AboutPage() {
    return (
        <div className="w-full text-left space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">about me</h1>
                <p className="text-neutral-400 leading-relaxed max-w-lg mx-auto">
                    I am Piyush Kumar, a Technical Analyst & Senior Software Engineer.
                    I specialize in fintech, trade finance, and automated banking solutions.
                </p>
            </div>

            <Skills />

            <Contact />
        </div>
    );
}
