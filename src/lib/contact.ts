// English site "Book a Demo" leads.
//
// TODO: create a *separate* CRM (app.idealflow.ai) Workflow → Inbound Webhook Trigger for global (English)
// leads and paste its URL here. Do NOT reuse the Taiwan seminar webhook (src/lib/booking.ts),
// or English demo requests would be enrolled in the Taipei seminar workflow.
// While this is empty, submissions fall back to opening the visitor's email client.
export const CONTACT_ENDPOINT = "";
export const CONTACT_MAILTO = "arther.learn@gmail.com";

export type ContactInput = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidContact(d: ContactInput): boolean {
  return Boolean(d.name.trim() && EMAIL_RE.test(d.email.trim()));
}

export function buildContactPayload(d: ContactInput) {
  const name = d.name.trim();
  return {
    full_name: name,
    first_name: name,
    email: d.email.trim(),
    phone: d.phone.trim(),
    company_name: d.company.trim(),
    message: d.message.trim(),
    source: "Global site – Book a Demo",
    language: "en",
    page_url: typeof window !== "undefined" ? window.location.href : "",
    submitted_at: new Date().toISOString(),
  };
}

/** Returns "sent" when posted to the webhook, "mailto" when it fell back to email. */
export async function submitContact(d: ContactInput): Promise<"sent" | "mailto"> {
  if (CONTACT_ENDPOINT) {
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildContactPayload(d)),
      });
      if (res.ok) return "sent";
    } catch {
      // network error — fall through to the mailto fallback
    }
  }
  const body = [
    "Name: " + d.name,
    "Email: " + d.email,
    "Phone: " + d.phone,
    "Company: " + d.company,
    "",
    d.message,
  ].join("\n");
  window.location.href =
    "mailto:" +
    CONTACT_MAILTO +
    "?subject=" +
    encodeURIComponent("[Demo request] " + d.name.trim() + (d.company ? " – " + d.company : "")) +
    "&body=" +
    encodeURIComponent(body);
  return "mailto";
}
