import type { Metadata } from "next";
import Link from "next/link";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
    title: "About · Piyush",
    description: "Backend engineer in banking & fintech. Skills, education, certifications, contact.",
    alternates: { canonical: "/about" },
    openGraph: {
        title: "About · Piyush",
        description: "Skills, education, contact.",
        url: "/about",
        images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    },
};

export default function AboutPage() {
    return (
        <div className="w-full text-left space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-start space-y-4">
                <p className="text-white-400 leading-relaxed max-w-lg mx-auto">
                    I&#39;m Piyush, a Senior Software Engineer with a strong focus on building scalable, reliable backend systems that solve real business problems. Most of my work revolves around designing APIs, integrating complex systems, and improving performance and turnaround time in high-impact, production environments.
                </p>

                <p className="text-white-400 leading-relaxed max-w-lg mx-auto">
                    In my current role, I work on banking and financial systems, integrating core banking platforms with external applications, automating workflows, and reducing manual effort across operations. Previously, I spent several years building backend services for trade finance and remittance systems, working extensively with messaging protocols, batch processing, and microservice-based architectures.
                </p>

                <p className="text-white-400 leading-relaxed max-w-lg mx-auto">
                    Strong background in Java, Spring Boot, SQL, Kafka, MQ, and cloud infrastructure, with a focus on scalability, correctness, and long-term maintainability. I’ve worked on systems where performance issues, data inconsistency, or downtime have real financial impact—and I enjoy solving those problems.
                </p>
            </div>
            <Skills />
            <Education />
            <Contact />
        </div>
    );
}
