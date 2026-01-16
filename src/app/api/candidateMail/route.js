import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const buildTransporter = () =>
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

const getAttachment = async (file) => {
  if (!file || typeof file !== "object" || !("arrayBuffer" in file)) {
    return null;
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  if (!buffer.length) {
    return null;
  }

  return {
    filename: file.name || "attachment.pdf",
    content: buffer,
    contentType: file.type || "application/octet-stream",
  };
};

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const file = formData.get("file");

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const attachment = await getAttachment(file);

    const transporter = buildTransporter();
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.CAREERS_EMAIL || "arjun@fastcode.ai",
      replyTo: email,
      subject: `New candidate submission from ${name}`,
      text: `Candidate details:\n\nName: ${name}\nEmail: ${email}`,
      attachments: attachment ? [attachment] : [],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Candidate details sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending candidate mail:", error);
    return NextResponse.json(
      { error: "Error sending email." },
      { status: 500 }
    );
  }
}