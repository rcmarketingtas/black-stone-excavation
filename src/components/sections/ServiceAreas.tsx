"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SERVICE_AREAS } from "@/lib/data";

export function ServiceAreas() {
  return (
    <section className="section-padding relative">
      <div className="container-wide mx-auto">
        <SectionHeading
          eyebrow="Where We Work"
          title="Service Areas"
          description="Serving Melbourne metro and regional Victoria — contact us to confirm coverage for your location."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {SERVICE_AREAS.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="glass-card-hover h-full p-5">
                  <CardContent className="p-0">
                    <MapPin className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="font-display font-semibold text-white">{area.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-border"
          >
            <div className="relative aspect-[4/3] bg-muted lg:aspect-auto lg:h-full lg:min-h-[400px]">
              <iframe
                title="Black Stone Excavation service area map"
                src="https://maps.google.com/maps?q=Melbourne+Victoria+Australia&output=embed"
                className="absolute inset-0 h-full w-full border-0 grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 bg-primary/5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
