"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FLEET } from "@/lib/data";

export function Fleet() {
  return (
    <section className="section-padding relative">
      <div className="container-wide mx-auto">
        <SectionHeading
          eyebrow="Our Fleet"
          title="Modern Equipment for Every Job"
          description="The right machine for your site — from tight-access mini excavators to heavy-duty civil plant."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FLEET.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card-hover group overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-display text-xl font-bold text-white">
                    {item.name}
                  </h3>
                </div>
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.specs.map((spec) => (
                      <li
                        key={spec}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
