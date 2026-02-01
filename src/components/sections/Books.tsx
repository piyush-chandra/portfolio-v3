"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle2 } from "lucide-react";

const BOOKS_DATA = {
    reading: [
        {
            title: "Designing Data-Intensive Applications",
            author: "Martin Kleppmann",
            description: "Deep diving into the core principles of data systems."
        }
    ],
    completed: [
        {
            title: "Atomic Habits",
            author: "James Clear",
            rating: "5/5",
            thoughts: "A practical guide to breaking bad habits and building good ones."
        },
        {
            title: "The Psychology of Money",
            author: "Morgan Housel",
            rating: "4.5/5",
            thoughts: "Timeless lessons on wealth, greed, and happiness."
        },
        {
            title: "Clean Code",
            author: "Robert C. Martin",
            rating: "5/5",
            thoughts: "Essential reading for writing maintainable software."
        }
    ]
};

export function Books() {
    return (
        <section className="space-y-16">
            {/* Currently Reading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
            >
                <div className="flex items-center gap-2 text-blue-400">
                    <BookOpen className="w-5 h-5" />
                    <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-300">Currently Reading</h2>
                </div>

                <div className="grid gap-4">
                    {BOOKS_DATA.reading.map((book, i) => (
                        <div key={i} className="p-5 rounded-lg border border-neutral-800 bg-neutral-900/30 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-white">{book.title}</h3>
                            <p className="text-neutral-500 text-sm">by {book.author}</p>
                            <p className="mt-2 text-neutral-400 text-sm italic">"{book.description}"</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Completed */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
            >
                <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-300">Completed</h2>
                </div>

                <div className="grid gap-4">
                    {BOOKS_DATA.completed.map((book, i) => (
                        <div key={i} className="p-5 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors bg-neutral-900/30 backdrop-blur-sm">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{book.title}</h3>
                                    <p className="text-neutral-500 text-sm">by {book.author}</p>
                                </div>
                                <span className="text-xs font-mono text-neutral-600 border border-neutral-800 px-2 py-1 rounded">
                                    {book.rating}
                                </span>
                            </div>
                            <p className="mt-2 text-neutral-400 text-sm leading-relaxed">{book.thoughts}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
