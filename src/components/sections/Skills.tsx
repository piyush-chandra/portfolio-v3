"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const SKILLS_DATA = {
    "Languages": ["Java", "Python", "JavaScript", "SQL", "MongoDB", "C/C++", "HTML/CSS"],
    "Frameworks & Tools": ["Spring Boot", "FastAPI", "Angular", "JUnit", "Maven", "Docker", "Kafka", "Git", "ELK", "AWS", "IBM MQ", "SVN"],
    "Methodologies": ["Agile", "Microservices", "CI/CD", "TDD"]
};

export function Skills() {
    return (
        <section className="space-y-8 py-10">
            {/* Heading removed for page-based layout */}


            <div className="space-y-6">
                {Object.entries(SKILLS_DATA).map(([category, skills], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-3"
                    >
                        <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="secondary"
                                    className="bg-neutral-800/50 text-neutral-300 border border-white/5 hover:bg-neutral-700 hover:border-white/10 transition-colors px-3 py-1"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
