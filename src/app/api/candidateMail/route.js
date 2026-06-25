import { NextResponse } from "next/server";
import {
  createMailTransporter,
  getMailCredentials,
  MAIL_CONFIG_ERROR,
} from "../../../lib/mailConfig";

export const runtime = "nodejs";

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
    const { email: senderEmail } = getMailCredentials();
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

    const transporter = createMailTransporter();
    const mailOptions = {
      from: senderEmail,
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
    if (error.message === MAIL_CONFIG_ERROR) {
      console.error("Candidate mailer missing SMTP credentials");
      return NextResponse.json({ error: MAIL_CONFIG_ERROR }, { status: 503 });
    }

    console.error("Error sending candidate mail:", error);
    return NextResponse.json(
      { error: "Error sending email." },
      { status: 500 }
    );
  }
}
