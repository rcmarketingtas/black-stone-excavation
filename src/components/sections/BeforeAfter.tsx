"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BEFORE_AFTER } from "@/lib/data";

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => setIsDragging(false);

  return (
    <section className="section-padding relative">
      <div className="container-wide mx-auto">
        <SectionHeading
          eyebrow="Transformations"
          title="Before & After"
          description="Drag the slider to see the difference our excavation work makes."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <div
            ref={containerRef}
            className="relative aspect-[16/10] cursor-ew-resize overflow-hidden rounded-2xl select-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            role="slider"
            aria-label="Before and after comparison slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <Image
              src={BEFORE_AFTER.after}
              alt="After excavation"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              loading="lazy"
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={BEFORE_AFTER.before}
                alt="Before excavation"
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
                loading="lazy"
              />
            </div>

            <div
              className="absolute top-0 bottom-0 z-10 w-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.35)]"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-background shadow-lg">
                <div className="flex gap-0.5">
                  <div className="h-3 w-0.5 bg-primary" />
                  <div className="h-3 w-0.5 bg-primary" />
                </div>
              </div>
            </div>

            <span className="absolute top-4 left-4 rounded bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
              Before
            </span>
            <span className="absolute top-4 right-4 rounded bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-background">
              After
            </span>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {BEFORE_AFTER.label}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
