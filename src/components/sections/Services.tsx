"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SERVICES, SITE } from "@/lib/data";

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

        <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="glass-card-hover group h-full overflow-hidden p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <CardContent className="p-4 md:p-5">
                  <h3 className="font-display text-base font-semibold text-white md:text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:mt-2 md:text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
