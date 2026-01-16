"use server"
import { sendMail } from "../../../lib/mail";
const submitMail = ({ formData }) => {
    console.log("formData", formData)
    sendMail({ to: "abdul@fastcode.ai", body: `<h1>${formData}</h1>` })

};

export default submitMail