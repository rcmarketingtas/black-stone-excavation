"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MACHINERY } from "@/lib/data";

export function MachineryFleet() {
  return (
    <div className="space-y-8">
      {MACHINERY.map((machine, index) => (
        <motion.div
          key={machine.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
        >
          <Card className="glass-card-hover group overflow-hidden p-0">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-video overflow-hidden lg:aspect-auto lg:min-h-[320px]">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/40" />
              </div>

              <CardContent className="flex flex-col justify-center p-6 md:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {machine.subtitle}
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-bold text-white md:text-3xl">
                    {machine.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {machine.description}
                  </p>
                </div>

                <div className="mt-6 space-y-5">
                  {machine.features.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                        Equipped with
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {machine.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-sm text-white/90"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {machine.attachments.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                        Attachments
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {machine.attachments.map((attachment) => (
                          <li
                            key={attachment}
                            className="flex items-start gap-2.5 text-sm text-white/90"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {attachment}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {machine.capabilities.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                        Capable of
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {machine.capabilities.map((capability) => (
                          <li
                            key={capability}
                            className="flex items-start gap-2.5 text-sm text-white/90"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
