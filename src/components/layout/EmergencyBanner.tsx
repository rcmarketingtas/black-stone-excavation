"use client";

import { AlertTriangle, Phone, X } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/data";

export function EmergencyBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-[60] bg-primary px-4 py-2.5 text-primary-foreground">
      <div className="container-wide mx-auto flex items-center justify-center gap-3 text-sm">
        <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
        <p className="text-center">
          <span className="font-semibold">Emergency excavation?</span>{" "}
          Call{" "}
          <a
            href={`tel:${SITE.emergencyPhone.replace(/\s/g, "")}`}
            className="font-bold underline underline-offset-2"
          >
            {SITE.emergencyPhone}
          </a>{" "}
          — 24/7 response available
        </p>
        <button
          onClick={() => setVisible(false)}
          className="ml-2 shrink-0 rounded p-1 hover:bg-black/10"
          aria-label="Dismiss emergency banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function FloatingCallButton() {
  return (
    <a
      href={SITE.phoneHref}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg btn-glow md:hidden"
      aria-label={`Call ${SITE.phone}`}
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
