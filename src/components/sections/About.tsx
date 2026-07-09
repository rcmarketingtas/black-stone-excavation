"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ABOUT_CONTENT, ABOUT_IMAGE, ABOUT_IMAGE_ALT } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      <div className="container-wide relative mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src={ABOUT_IMAGE}
              alt={ABOUT_IMAGE_ALT}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Us
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Family-Owned. Built on Experience.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {ABOUT_CONTENT.paragraphs[0]} {ABOUT_CONTENT.paragraphs[1]}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {ABOUT_CONTENT.paragraphs[2]}
            </p>

            <ul className="mt-8 space-y-3">
              {ABOUT_CONTENT.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <Button className="mt-8" variant="outline" asChild>
              <Link href="/about" className="inline-flex items-center gap-2">
                Read our story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
