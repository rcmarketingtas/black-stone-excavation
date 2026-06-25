"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ABOUT_IMAGE } from "@/lib/data";

const highlights = [
  "10+ years experience",
  "Fully insured and OH&S compliant",
  "Licensed operators",
  "Residential and commercial projects",
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
              alt="Blackstone Excavations machinery on site"
              fill
              className="object-cover"
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
              Built on Reliability.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Blackstone Excavations delivers dependable excavation and earthmoving
              across Launceston and Tasmania. We show up on time, do the job right,
              and leave every site clean and ready for the next stage.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From backyard digs to challenging rock removal, our licensed operators
              bring modern equipment and attention to detail to every project.
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
