import { createMailTransporter, getMailCredentials } from "./mailConfig";

export async function sendMail({ to, body }) {
    const { email } = getMailCredentials();
    const transport = createMailTransporter();

    try {
        const testResult = await transport.verify()
        console.log("testResult", testResult)
    } catch (error) {
        console.log("error", error);
        return
    }

    try {
        const sendResult = await transport.sendMail({
            from: email,
            to,
            subject: "Contact message(Fast Code AI Website)",
            html: body,
        })
        console.log("sendResult", sendResult)
    } catch (error) {
        console.log("error", error);
    }
}
