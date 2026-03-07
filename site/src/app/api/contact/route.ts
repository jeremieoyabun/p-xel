import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { CONTACT } from "@/lib/constants";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

const contactSchema = z.object({
  nom: z.string().min(1, "Nom requis"),
  email: z.string().email("Email invalide"),
  projectType: z.string().min(1, "Type de projet requis"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(1, "Message requis"),
  website: z.string().max(0).optional(), // honeypot
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot: reject if filled
    if (body.website) {
      return NextResponse.json({ ok: true }); // Silent success for bots
    }

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { nom, email, projectType, budget, timeline, message } = result.data;

    await getResend().emails.send({
      from: "P-XEL Studio <noreply@p-xel.be>",
      to: CONTACT.email,
      replyTo: email,
      subject: `Nouveau brief - ${nom} - ${projectType}`,
      text: [
        `Nom: ${nom}`,
        `Email: ${email}`,
        `Type de projet: ${projectType}`,
        budget ? `Budget: ${budget}` : null,
        timeline ? `Delai: ${timeline}` : null,
        ``,
        `Message:`,
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
