"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

export function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="container-wide relative mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold text-white md:text-5xl lg:text-6xl">
            Ready to Break Ground?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            Get a free, no-obligation quote for your excavation project. We&apos;ll
            inspect your site and provide transparent pricing within 48 hours.
          </p>
          <Button
            size="lg"
            className="mt-8"
            onClick={() => scrollToSection("contact")}
          >
            Request Your Free Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
