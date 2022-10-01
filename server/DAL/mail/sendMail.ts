import { RequestType } from '../../model/Request';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_ADDRESS,
    port: 587,
    auth: {
        user: process.env.SMTP_FROM,
        pass: process.env.SMTP_PASS,
    },
});

export const sendMail = async (request: RequestType) => {
    await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: process.env.SMTP_TO,
        subject: 'פנייה חדשה מהאתר!',
        html: `
        <div dir="rtl">
            <p>פנייה חדשה!</p>
            <p>שם: ${request.fullName}</p>
            <p>ת.ז: ${request.idNumber}</p>
        </div>
        `,
    });
};
