import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/data";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || SITE.email;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please set RESEND_API_KEY in your environment variables.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `Blackstone Excavations <${fromEmail}>`,
      to: [toEmail],
      replyTo: data.email,
      subject: `New Enquiry: ${data.serviceRequired} — ${data.fullName}`,
      html: `
        <h2>New Enquiry from Blackstone Excavations Website</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${data.fullName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${data.phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${data.email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Address</td><td style="padding:8px;">${data.projectAddress}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Service</td><td style="padding:8px;">${data.serviceRequired}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Preferred Contact</td><td style="padding:8px;">${data.preferredContact}</td></tr>
        </table>
        <h3>Project Description</h3>
        <p style="white-space:pre-wrap;">${data.projectDescription}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again or call us directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
