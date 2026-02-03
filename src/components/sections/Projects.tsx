"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const PROJECTS_DATA = [
    {
        title: "URL Shortener",
        description: "Designed and developed a URL shortening service with custom alias generation.",
        tech_stack: ["Python", "FastAPI", "SQLAlchemy", "Docker", "HTMX"],
        link: "https://piyus.site" // Placeholder
    },
    {
        title: "Upload/Download File using ByteStream",
        description: "Upload/Download file using ByteStream",
        tech_stack: ["Python", "FastAPI", "Blob Storage", "Docker"],
        link: "https://archit-g.vercel.app/docs" // Placeholder
    },
    {
        title: "Group Chat",
        description: "Designed and developed a group chat application with real-time messaging.",
        tech_stack: ["Python", "FastAPI", "SQLAlchemy", "Docker"],
        link: "https://pi-c.vercel.app/" // Placeholder
    },
    {
        title: "Gemini Wrapper",
        description: "A wrapper around Gemini API to provide a simple and easy-to-use interface to chat with LLM in corporate environment.",
        tech_stack: ["Python", "FastAPI", "SQLAlchemy", "Docker", "HTMX"],
        link: "https://pitools.vercel.app" // Placeholder
    },
    {
        title: "Facial Recognition Attendance System",
        description: "Mobile-based attendance solution with facial recognition and GPS tracking using DLib and FastAPI.",
        tech_stack: ["Python", "FastAPI", ".NET", "Angular", "Docker"],
        link: "https://mlservices.vultech.in/docs" // Placeholder
    },
    {
        title: "Early Stage Diabetes Risk Prediction",
        description: "Machine Learning model to predict early-stage diabetes symptoms using classification algorithms.",
        tech_stack: ["Python", "Scikit-Learn", "TensorFlow", "ML"],
        link: "https://github.com/piyush-chandra/Early-stage-diabetes-risk-prediction" // Placeholder
    }
];

export function Projects() {
    return (
        <section className="space-y-8 py-10">
            {/* Heading removed for page-based layout */}


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
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
