"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import {
  Car,
  Droplets,
  Layers,
  Mountain,
  Pickaxe,
  Route,
  Shovel,
  Trees,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SERVICES, SITE } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Mountain,
  Shovel,
  Pickaxe,
  Route,
  Droplets,
  Trees,
  Car,
};

export function Services() {
  return (
    <section id="services" className="section-padding relative bg-noise">
      <div className="container-wide mx-auto">
        <SectionHeading
          eyebrow="What We Do"
          title="Excavation Services"
          description={
            <>
              Site cuts, earthmoving, trenching, and more across Launceston and Tasmania.{" "}
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
              >
                <Phone className="h-4 w-4" />
                Call {SITE.phone}
              </a>
            </>
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
