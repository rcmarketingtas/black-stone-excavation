"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Shield, Award, Wrench, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/data";
import { useInView } from "@/hooks/use-in-view";

const statIcons = [Award, Wrench, Shield, Users];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const { ref, isInView } = useInView(0.5);
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [isInView, value, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${v}${suffix}`;
      }
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return (
    <span ref={ref}>
      <span ref={displayRef}>0{suffix}</span>
    </span>
  );
}

export function WhyChooseUs() {
  return (
    <section className="section-padding relative bg-card">
      <div className="container-wide mx-auto">
        <SectionHeading
          eyebrow="Why Blackstone"
          title="Why Choose Us"
          description="Licensed, insured, and ready when you need us."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((stat, index) => {
            const Icon = statIcons[index] ?? Award;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <Icon className="mx-auto mb-3 h-8 w-8 text-primary" aria-hidden="true" />
                <div className="font-display text-2xl font-bold text-white md:text-3xl">
                  {stat.animate ? (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span className="text-primary">✓</span>
                  )}
                </div>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
