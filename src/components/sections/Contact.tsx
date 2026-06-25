"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MAPS_EMBED_URL, SERVICE_OPTIONS, SERVICE_AREAS, SITE } from "@/lib/data";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

type FormState = "idle" | "loading" | "success" | "error";

const initialForm: ContactFormData = {
  fullName: "",
  phone: "",
  email: "",
  projectAddress: "",
  serviceRequired: "",
  projectDescription: "",
  preferredContact: "either",
};

export function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = <K extends keyof ContactFormData>(
    key: K,
    value: ContactFormData[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("idle");
    setErrorMessage("");

    const result = contactFormSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setFormState("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send enquiry");
      }

      setFormState("success");
      setForm(initialForm);
    } catch (err) {
      setFormState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section id="contact" className="section-padding relative bg-noise">
      <div className="container-wide mx-auto">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Us"
          description="Call us for the fastest response, or send your project details below and we'll get back to you within 24 hours."
        />

        <div className="mb-8 flex justify-center lg:justify-start">
          <Button size="lg" className="btn-glow w-full sm:w-auto" asChild>
            <a href={SITE.phoneHref} className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              Call Now — {SITE.phone}
            </a>
          </Button>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card space-y-5 rounded-2xl p-6 md:p-8 lg:col-span-3"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  aria-invalid={!!errors.fullName}
                  placeholder="John Smith"
                />
                {errors.fullName && (
                  <p className="text-xs text-red-400">{errors.fullName}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  aria-invalid={!!errors.phone}
                  placeholder="0400 000 000"
                />
                {errors.phone && (
                  <p className="text-xs text-red-400">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                aria-invalid={!!errors.email}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-xs text-red-400">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectAddress">Project Address *</Label>
              <Input
                id="projectAddress"
                value={form.projectAddress}
                onChange={(e) => updateField("projectAddress", e.target.value)}
                aria-invalid={!!errors.projectAddress}
                placeholder="123 Example St, Launceston TAS 7250"
              />
              {errors.projectAddress && (
                <p className="text-xs text-red-400">{errors.projectAddress}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="serviceRequired">Service Required *</Label>
              <Select
                value={form.serviceRequired}
                onValueChange={(v) => updateField("serviceRequired", v)}
              >
                <SelectTrigger id="serviceRequired" aria-invalid={!!errors.serviceRequired}>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICE_OPTIONS.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.serviceRequired && (
                <p className="text-xs text-red-400">{errors.serviceRequired}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectDescription">Project Description *</Label>
              <Textarea
                id="projectDescription"
                value={form.projectDescription}
                onChange={(e) => updateField("projectDescription", e.target.value)}
                aria-invalid={!!errors.projectDescription}
                placeholder="Describe your project — scope, access, timeline, etc."
                rows={5}
              />
              {errors.projectDescription && (
                <p className="text-xs text-red-400">{errors.projectDescription}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredContact">Preferred Contact Method *</Label>
              <Select
                value={form.preferredContact}
                onValueChange={(v) =>
                  updateField("preferredContact", v as ContactFormData["preferredContact"])
                }
              >
                <SelectTrigger id="preferredContact">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="either">Either</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formState === "success" && (
              <div className="flex items-center gap-3 rounded-lg bg-green-500/10 p-4 text-green-400">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <p className="text-sm">
                  Thank you! Your enquiry has been sent. We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            )}

            {formState === "error" && (
              <div className="flex items-center gap-3 rounded-lg bg-red-500/10 p-4 text-red-400">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <p className="text-sm">{errorMessage}</p>
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={formState === "loading"}
            >
              {formState === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Enquiry"
              )}
            </Button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-white">
                Contact Details
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href={SITE.phoneHref}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {SITE.hours}
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {SITE.address}
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-white">
                Service Areas
              </h3>
              <ul className="mt-4 space-y-2">
                {SERVICE_AREAS.map((area) => (
                  <li key={area.name} className="text-sm text-muted-foreground">
                    {area.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Blackstone Excavations location"
                src={MAPS_EMBED_URL}
                className="aspect-video w-full border-0 grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
