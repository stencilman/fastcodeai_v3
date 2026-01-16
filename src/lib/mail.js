import nodemailer from 'nodemailer';

export async function sendMail({ to, body }) {
    const { SMTP_PASSWORD, SMTP_EMAIL } = process.env

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD
        }
    });

    try {
        const testResult = await transport.verify()
        console.log("testResult", testResult)
    } catch (error) {
        console.log("error", error);
        return
    }

    try {
        const sendResult = await transport.sendMail({
            from: SMTP_EMAIL,
            to,
            subject: "Contact message(Fast Code AI Website)",
            html: body,
        })
        console.log("sendResult", sendResult)
    } catch (error) {
        console.log("error", error);
    }
}