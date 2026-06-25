"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ABOUT_IMAGE } from "@/lib/data";

const highlights = [
  "Family-owned with 10+ years in the industry",
  "Modern, well-maintained fleet",
  "Fully insured and OH&S compliant",
  "Transparent pricing — no hidden fees",
  "Residential, commercial & civil projects",
];

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
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <Image
              src={ABOUT_IMAGE}
              alt="Black Stone Excavation machinery on site"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-lg bg-black/60 px-4 py-2 backdrop-blur">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Our Fleet
              </span>
            </div>
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
              Built on Reliability.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Black Stone Excavation was founded on a simple promise: show up on time,
              do the job right, and leave every site better than we found it. What started
              as a single excavator operation has grown into a trusted name across
              Melbourne and regional Victoria.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our team of licensed operators brings decades of combined experience to
              every project — whether it&apos;s a backyard pool dig, a challenging rock
              removal, or a full subdivision earthworks package. We invest in modern
              equipment because your project deserves machinery that performs.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
