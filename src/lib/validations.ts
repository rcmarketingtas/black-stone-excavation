import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number")
    .regex(/^[\d\s+()-]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  projectAddress: z.string().min(5, "Please enter your project address"),
  serviceRequired: z.string().min(1, "Please select a service"),
  projectDescription: z
    .string()
    .min(20, "Please provide at least 20 characters describing your project"),
  preferredContact: z.enum(["phone", "email", "either"], {
    required_error: "Please select a preferred contact method",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
