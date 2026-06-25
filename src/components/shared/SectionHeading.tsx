"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
