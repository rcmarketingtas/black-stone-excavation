"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { DustParticles } from "@/components/shared/DustParticles";
import { HERO_IMAGE, SITE } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src={HERO_IMAGE}
          alt="Excavator at sunrise on construction site"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
      <div className="absolute inset-0 bg-noise opacity-50" />
      <DustParticles />

      <motion.div
        style={{ opacity }}
        className="relative z-10 container-wide mx-auto px-4 pt-32 pb-20 text-center md:px-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-primary"
        >
          Melbourne & Regional Victoria
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          {SITE.tagline.split(". ").map((part, i) => (
            <span key={part} className={i === 1 ? "text-gradient block mt-2" : "block"}>
              {part}{i === 0 ? "." : ""}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
        >
          From residential site cuts to commercial civil works — Black Stone delivers
          precision excavation with modern machinery, licensed operators, and
          uncompromising safety standards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" onClick={() => scrollToSection("contact")}>
            Request a Free Quote
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={SITE.phoneHref} className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={() => scrollToSection("services")}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float text-white/60 hover:text-primary"
        aria-label="Scroll to services"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
}
