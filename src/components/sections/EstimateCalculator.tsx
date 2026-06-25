"use client";

import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ESTIMATE_RATES } from "@/lib/data";

type JobType = "siteCut" | "trenching" | "general" | "rock";

export function EstimateCalculator() {
  const [jobType, setJobType] = useState<JobType>("general");
  const [quantity, setQuantity] = useState("8");

  const estimate = useMemo(() => {
    const qty = parseFloat(quantity) || 0;
    const rates = ESTIMATE_RATES[jobType];
    const low = qty * rates.min;
    const high = qty * rates.max;
    return { low, high, unit: rates.unit };
  }, [jobType, quantity]);

  const jobLabels: Record<JobType, string> = {
    siteCut: "Site Cut (m³)",
    trenching: "Trenching (linear metres)",
    general: "General Excavation (hours)",
    rock: "Rock Removal (hours)",
  };

  return (
    <section className="section-padding relative bg-card">
      <div className="container-wide mx-auto">
        <div className="mx-auto max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="border-b border-border bg-primary/5">
                <div className="flex items-center gap-3">
                  <Calculator className="h-6 w-6 text-primary" />
                  <CardTitle>Rough Price Estimate</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">
                  Get a ballpark figure — final pricing depends on site conditions.
                </p>
              </CardHeader>
              <CardContent className="space-y-5 p-6">
                <div className="space-y-2">
                  <Label htmlFor="job-type">Job Type</Label>
                  <Select
                    value={jobType}
                    onValueChange={(v) => setJobType(v as JobType)}
                  >
                    <SelectTrigger id="job-type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {(Object.keys(jobLabels) as JobType[]).map((key) => (
                        <SelectItem key={key} value={key}>
                          {jobLabels[key]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">
                    Quantity ({ESTIMATE_RATES[jobType].unit.replace("per ", "")})
                  </Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>

                <div className="rounded-lg bg-primary/10 p-5 text-center">
                  <p className="text-sm text-muted-foreground">Estimated Range</p>
                  <p className="mt-1 font-display text-3xl font-bold text-primary">
                    ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    *Indicative only. Request a free site inspection for an accurate quote.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
