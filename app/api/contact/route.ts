import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  location?: string;
  product?: string;
  requirement?: string;
  // honeypot
  website?: string;
};

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );

function buildHtml(p: Required<Omit<Payload, "website">>) {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
           <td style="padding:10px 14px;border-bottom:1px solid #eef0f3;width:170px;color:#64748b;font:500 12px/1.4 -apple-system,Segoe UI,Roboto,sans-serif;letter-spacing:.04em;text-transform:uppercase;vertical-align:top;">${label}</td>
           <td style="padding:10px 14px;border-bottom:1px solid #eef0f3;color:#0f172a;font:500 14px/1.55 -apple-system,Segoe UI,Roboto,sans-serif;white-space:pre-wrap;">${esc(value)}</td>
         </tr>`
      : "";

  return `<!doctype html>
<html><body style="margin:0;background:#f4f6fa;padding:32px 16px;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#0f172a;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 8px 32px rgba(15,23,42,0.08);">
    <tr>
      <td style="background:linear-gradient(135deg,#0b1e3a 0%,#1e3a5f 60%,#5b88b2 100%);padding:28px 28px 22px;color:#fbf9e4;">
        <div style="font:600 11px/1 -apple-system,Segoe UI,Roboto,sans-serif;letter-spacing:.22em;text-transform:uppercase;opacity:.72;">Broad X Overseas</div>
        <div style="font:600 22px/1.2 Georgia,serif;margin-top:8px;">New Enquiry Received</div>
        <div style="font:400 13px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;margin-top:6px;opacity:.78;">Submitted via broadxoverseas.com — respond within one business day.</div>
      </td>
    </tr>
    <tr><td style="padding:8px 14px 18px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
        ${row("Name", p.name)}
        ${row("Company", p.company)}
        ${row("Email", p.email)}
        ${row("Phone", p.phone)}
        ${row("Country", p.location)}
        ${row("Product", p.product)}
        ${row("Requirement", p.requirement)}
      </table>
    </td></tr>
    <tr>
      <td style="padding:14px 28px 22px;color:#94a3b8;font:400 11px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;border-top:1px solid #eef0f3;">
        This message was sent automatically from the Broad X Overseas website. Reply directly to ${esc(p.email)} to respond to the customer.
      </td>
    </tr>
  </table>
</body></html>`;
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (body.website) {
    // honeypot tripped — pretend success
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const requirement = (body.requirement ?? "").trim();
  if (!name || !email || !requirement) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const {
    SMTP_HOST,
    SMTP_PORT = "465",
    SMTP_SECURE = "true",
    SMTP_USER,
    SMTP_PASS,
    MAIL_FROM,
    MAIL_TO,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    console.error("[contact] SMTP env not configured");
    return NextResponse.json(
      { ok: false, error: "Mail service is not configured" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const filled = {
    name,
    company: (body.company ?? "").trim(),
    email,
    phone: (body.phone ?? "").trim(),
    location: (body.location ?? "").trim(),
    product: (body.product ?? "general").trim(),
    requirement,
  };

  const html = buildHtml(filled);
  const text =
    `New enquiry — Broad X Overseas\n\n` +
    `Name: ${filled.name}\n` +
    `Company: ${filled.company}\n` +
    `Email: ${filled.email}\n` +
    `Phone: ${filled.phone}\n` +
    `Country: ${filled.location}\n` +
    `Product: ${filled.product}\n\n` +
    `Requirement:\n${filled.requirement}\n`;

  try {
    await transporter.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: MAIL_TO,
      replyTo: `${filled.name} <${filled.email}>`,
      subject: `New enquiry — ${filled.name}${filled.company ? ` · ${filled.company}` : ""} (${filled.product})`,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] sendMail failed", err);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 502 });
  }
}
