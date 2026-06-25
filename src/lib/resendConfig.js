import { Resend } from "resend";

export const RESEND_CONFIG_ERROR =
  "Mail service is not configured. Set RESEND_API_KEY and RESEND_FROM_EMAIL.";

export function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    throw new Error(RESEND_CONFIG_ERROR);
  }

  return { apiKey, fromEmail };
}

export function createResendClient() {
  const { apiKey } = getResendConfig();

  return new Resend(apiKey);
}
