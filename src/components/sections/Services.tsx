"use client";

import { motion } from "framer-motion";
import {
  BrickWall,
  Car,
  CircleDot,
  Droplets,
  HardHat,
  Layers,
  Mountain,
  Pickaxe,
  Route,
  Shovel,
  Sparkles,
  Trees,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SERVICES } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Mountain,
  Shovel,
  Pickaxe,
  Route,
  Droplets,
  Trees,
  Car,
  BrickWall,
  CircleDot,
  Sparkles,
  HardHat,
};

export function Services() {
  return (
    <section id="services" className="section-padding relative bg-noise">
      <div className="container-wide mx-auto">
        <SectionHeading
          eyebrow="What We Do"
          title="Complete Excavation Services"
          description="From tight-access residential jobs to large-scale civil earthworks — we have the equipment and expertise to deliver."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Shovel;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="glass-card-hover group h-full p-6">
                  <CardContent className="p-0">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
