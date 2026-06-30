"use server";

import { Resend } from "resend";

import { env, isEmailConfigured, isTurnstileConfigured } from "@/config/env";
import { SITE } from "@/config/site";
import { reviewRequestSchema } from "@/lib/contact/schema";

export interface SubmitState {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
}

async function verifyTurnstile(token: string | undefined): Promise<boolean> {
  if (!isTurnstileConfigured) return true; // not enforced until configured
  if (!token) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY!, response: token }),
    });
    const data = (await res.json()) as { success?: boolean };
    return Boolean(data.success);
  } catch {
    return false;
  }
}

export async function submitReviewRequest(
  _prev: SubmitState | null,
  formData: FormData,
): Promise<SubmitState> {
  const parsed = reviewRequestSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      fieldErrors[key] ??= issue.message;
    }
    return { ok: false, message: "Please check the highlighted fields.", fieldErrors };
  }

  const data = parsed.data;

  if (!(await verifyTurnstile(data.turnstileToken))) {
    return { ok: false, message: "Spam check failed — please try again." };
  }

  // No transport configured (e.g. local/preview): log and accept so the flow works.
  if (!isEmailConfigured) {
    console.info("[contact] (email not configured) enquiry:", {
      name: data.name,
      email: data.email,
      businessName: data.businessName,
      problemArea: data.problemArea,
      system: data.system,
      source: data.source,
    });
    return { ok: true, message: "Thanks — your request has been received. We'll be in touch." };
  }

  try {
    const resend = new Resend(env.RESEND_API_KEY!);
    await resend.emails.send({
      from: env.CONTACT_FROM_EMAIL ?? `MindWP <onboarding@resend.dev>`,
      to: env.CONTACT_EMAIL!,
      replyTo: data.email,
      subject: `Website review request — ${data.businessName}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Business/clinic: ${data.businessName}`,
        `Website: ${data.websiteUrl || "—"}`,
        `Industry: ${data.industry || "—"}`,
        `Service area: ${data.serviceArea || "—"}`,
        `Problem area: ${data.problemArea || "—"}`,
        `What happens after enquiries: ${data.afterEnquiry || "—"}`,
        `Preferred contact: ${data.contactMethod}`,
        `Attribution: system=${data.system || "—"} source=${data.source || "—"}`,
      ].join("\n"),
    });
    return { ok: true, message: `Thanks — your request is in. We'll reply via ${data.contactMethod}.` };
  } catch (err) {
    console.error("[contact] send failed:", err);
    return {
      ok: false,
      message: `Something went wrong sending your request. Email us directly at ${SITE.enquiryEmail}.`,
    };
  }
}
