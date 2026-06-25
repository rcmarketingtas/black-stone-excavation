"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FAQS } from "@/lib/data";

export function FAQ() {
  return (
    <section className="section-padding relative">
      <div className="container-wide mx-auto">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before breaking ground."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
