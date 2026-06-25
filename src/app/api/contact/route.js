import { NextResponse } from "next/server";
import {
  createResendClient,
  getResendConfig,
  RESEND_CONFIG_ERROR,
} from "../../../lib/resendConfig";

export const runtime = "nodejs";

const CONTACT_RECIPIENT = process.env.CONTACT_RECIPIENT || "arjun@fastcode.ai";

const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const getDisplayValue = (value) => {
  const normalized = String(value ?? "").trim();
  return normalized || "N/A";
};

const createContactEmailText = ({
  name,
  email,
  phone,
  companyName,
  country,
  linkedInUrl,
  services,
  message,
}) => `New website inquiry

Name: ${name}
Email: ${email}
Phone: ${phone}
Company Name: ${companyName}
Country: ${country}
LinkedIn URL: ${linkedInUrl}
Services: ${services || "N/A"}

Message:
${message}`;

const createContactEmailHtml = ({
  name,
  email,
  phone,
  companyName,
  country,
  linkedInUrl,
  // services,
  message,
}) => {
  const fields = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Company", companyName],
    ["Country", country],
    ["LinkedIn", linkedInUrl],
    // ["Services", services || "N/A"],
  ];

  const fieldRows = fields
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding: 0 0 14px;">
            <div style="font-size: 12px; line-height: 16px; letter-spacing: 0.08em; text-transform: uppercase; color: #7f8da8; font-family: Arial, Helvetica, sans-serif;">${escapeHtml(
              label
            )}</div>
            <div style="margin-top: 4px; font-size: 16px; line-height: 24px; color: #f8fbff; font-family: Arial, Helvetica, sans-serif; word-break: break-word;">${escapeHtml(
              value
            )}</div>
          </td>
        </tr>`
    )
    .join("");

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New website inquiry</title>
  </head>
  <body style="margin: 0; padding: 0; background: #eef3f8;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #eef3f8; margin: 0; padding: 32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 680px; overflow: hidden; border-radius: 24px; background: #071225; border: 1px solid #dce5ef;">
            <tr>
              <td style="padding: 34px 34px 28px; background: #071225;">
                <div style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 18px; color: #75e2e4; letter-spacing: 0.12em; text-transform: uppercase;">FastCodeAI Website</div>
                <h1 style="margin: 12px 0 0; font-family: Arial, Helvetica, sans-serif; font-size: 32px; line-height: 38px; color: #ffffff; font-weight: 700;">New contact inquiry</h1>
                <p style="margin: 14px 0 0; max-width: 560px; font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 25px; color: #b6c3d8;">${escapeHtml(
                  name
                )} submitted the contact form and is waiting for a response.</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 34px 34px; background: #071225;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding: 22px; border-radius: 18px; background: #0d1b33; border: 1px solid #1b3157;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                        ${fieldRows}
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 18px;">
                      <div style="padding: 22px; border-radius: 18px; background: #f8fbff;">
                        <div style="font-size: 12px; line-height: 16px; letter-spacing: 0.08em; text-transform: uppercase; color: #52627a; font-family: Arial, Helvetica, sans-serif;">Project note</div>
                        <div style="margin-top: 10px; font-size: 16px; line-height: 26px; color: #152238; font-family: Arial, Helvetica, sans-serif; white-space: pre-wrap; word-break: break-word;">${escapeHtml(
                          message
                        )}</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 22px;">
                      <a href="mailto:${escapeHtml(
                        email
                      )}" style="display: inline-block; padding: 13px 18px; border-radius: 10px; background: #2dc1c3; color: #02111f; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 20px; font-weight: 700; text-decoration: none;">Reply by email</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <div style="max-width: 680px; padding: 16px 8px 0; font-family: Arial, Helvetica, sans-serif; color: #718098; font-size: 12px; line-height: 18px; text-align: center;">This message was sent from the FastCodeAI contact form.</div>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

export async function POST(req) {
  try {
    const { fromEmail } = getResendConfig();
    const body = await req.json();
    const {
      name = "N/A",
      email = "N/A",
      phone = "N/A",
      companyName = "N/A",
      country = "N/A",
      linkedInUrl = "N/A",
      service = [],
      message = "N/A",
    } = body;

    const services = Array.isArray(service)
      ? service.join(", ")
      : String(service || "");
    const emailPayload = {
      name: getDisplayValue(name),
      email: getDisplayValue(email),
      phone: getDisplayValue(phone),
      companyName: getDisplayValue(companyName),
      country: getDisplayValue(country),
      linkedInUrl: getDisplayValue(linkedInUrl),
      // services: getDisplayValue(services),
      message: getDisplayValue(message),
    };

    const resend = createResendClient();

    const { error } = await resend.emails.send({
      from: fromEmail,
      replyTo: email,
      to: CONTACT_RECIPIENT,
      subject: `New website inquiry from ${emailPayload.name}`,
      text: createContactEmailText(emailPayload),
      html: createContactEmailHtml(emailPayload),
    });

    if (error) {
      console.error("Resend contact email failed", error);
      return NextResponse.json({ error: "Error sending email" }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error.message === RESEND_CONFIG_ERROR) {
      console.error("Contact form mailer missing Resend credentials");
      return NextResponse.json({ error: RESEND_CONFIG_ERROR }, { status: 503 });
    }

    console.error("Failed to send contact email", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
