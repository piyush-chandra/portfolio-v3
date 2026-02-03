"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="max-w-[500px] text-white leading-relaxed text-base md:text-md text-start"
    >
      <p>
        I&#39;m a Backend Engineer who enjoys solving problems around scalability, system design, and reliability.
        As a Senior Software Engineer, I&#39;ve worked on large-scale banking and fintech systems, integrating multiple platforms and automating critical workflows. I love building side projects, experimenting with new ideas, and applying emerging tech to real production use cases.
        Right now, I&#39;m exploring AI / LLMs and backend-driven product ideas.
      </p>
    </motion.div>
  );
}
