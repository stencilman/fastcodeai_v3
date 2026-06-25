import nodemailer from "nodemailer";

export const MAIL_CONFIG_ERROR =
  "Mail service is not configured. Set SMTP_EMAIL and SMTP_PASSWORD.";

export function getMailCredentials() {
  const email = process.env.SMTP_EMAIL;
  const password = process.env.SMTP_PASSWORD;

  if (!email || !password) {
    throw new Error(MAIL_CONFIG_ERROR);
  }

  return { email, password };
}

export function createMailTransporter() {
  const { email, password } = getMailCredentials();

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: password,
    },
  });
}
