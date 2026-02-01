"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="max-w-[500px] text-neutral-400 leading-relaxed text-base md:text-lg text-center"
    >
      <p>
        Technical Analyst & Senior Software Engineer. Building scalable systems with Spring Boot, Python, and Modern Web Tech.
      </p>
    </motion.div>
  );
}
