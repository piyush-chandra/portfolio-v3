"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const PROJECTS_DATA = [
    {
        title: "Facial Recognition Attendance System",
        description: "Mobile-based attendance solution with facial recognition and GPS tracking using DLib and FastAPI.",
        tech_stack: ["Python", "FastAPI", ".NET", "Angular", "Docker"],
        link: "#" // Placeholder
    },
    {
        title: "Early Stage Diabetes Risk Prediction",
        description: "Machine Learning model to predict early-stage diabetes symptoms using classification algorithms.",
        tech_stack: ["Python", "Scikit-Learn", "TensorFlow", "ML"],
        link: "#" // Placeholder
    }
];

export function Projects() {
    return (
        <section className="space-y-8 py-10">
            {/* Heading removed for page-based layout */}


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS_DATA.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col border-neutral-800 bg-neutral-900/40 backdrop-blur-sm group cursor-pointer hover:border-blue-500/30 transition-colors">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </CardTitle>
                                    <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition-colors" />
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription className="text-neutral-400">
                                    {project.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="flex flex-wrap gap-2 pt-4">
                                {project.tech_stack.map((tech) => (
                                    <Badge key={tech} variant="secondary" className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700">
                                        {tech}
                                    </Badge>
                                ))}
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
