"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PROCESS_STEPS } from "@/lib/data";

export function Process() {
  return (
    <section className="section-padding relative bg-card">
      <div className="container-wide mx-auto">
        <SectionHeading
          eyebrow="How It Works"
          title="Our Process"
          description="From first contact to final clean-up — a straightforward path to getting your project done."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2 md:-translate-x-px" />

          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 flex items-start gap-6 md:mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden flex-1 md:block" />
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background font-display text-lg font-bold text-primary">
                {index + 1}
              </div>
              <div className="glass-card flex-1 rounded-xl p-6">
                <h3 className="font-display text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
