"use client";

import { motion } from "framer-motion";

export function ExcavatorDivider() {
  return (
    <div className="relative flex w-full items-center justify-center py-8" aria-hidden="true">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <motion.svg
        viewBox="0 0 120 40"
        className="relative z-10 h-10 w-32 text-accent"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.path
          d="M5 30 L25 30 L30 20 L55 20 L60 15 L85 15 L90 20 L115 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.rect
          x="20"
          y="22"
          width="18"
          height="8"
          rx="1"
          fill="currentColor"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        />
        <motion.circle
          cx="35"
          cy="32"
          r="4"
          fill="currentColor"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        />
        <motion.circle
          cx="50"
          cy="32"
          r="4"
          fill="currentColor"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        />
        <motion.path
          d="M60 15 L75 5 L80 5 L85 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </motion.svg>
    </div>
  );
}
