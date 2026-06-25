"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { REVIEWS } from "@/lib/data";

export function Reviews() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % REVIEWS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const review = REVIEWS[current];

  return (
    <section className="section-padding relative bg-card">
      <div className="container-wide mx-auto">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it — hear from homeowners and builders across Victoria."
        />

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-2xl p-8 md:p-12"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/40" aria-hidden="true" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed text-white/90 md:text-xl">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <footer className="mt-6">
                <cite className="not-italic">
                  <span className="font-display font-semibold text-white">
                    {review.name}
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {review.location}
                  </span>
                </cite>
              </footer>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-white hover:border-primary hover:text-primary"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-primary" : "w-2 bg-muted"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-white hover:border-primary hover:text-primary"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
