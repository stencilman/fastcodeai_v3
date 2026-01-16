import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_RECIPIENT = process.env.CONTACT_RECIPIENT || "arjun@fastcode.ai";

export async function POST(req) {
  if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
    console.error("Contact form mailer missing SMTP credentials");
    return NextResponse.json(
      { error: "Mail service not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const {
      name = "N/A",
      email = "N/A",
      phone = "N/A",
      companyName = "N/A",
      linkedInUrl = "N/A",
      service = [],
      message = "N/A",
    } = body;

    const services = Array.isArray(service)
      ? service.join(", ")
      : String(service || "");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      replyTo: email,
      to: CONTACT_RECIPIENT,
      subject: "Contact message (Fast Code AI Website)",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company Name: ${companyName}
        LinkedIn URL: ${linkedInUrl}
        Services: ${services}
        Message: ${message}
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
