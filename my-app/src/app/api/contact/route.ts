import * as yup from 'yup';
import nodemailer from 'nodemailer';

const bodySchema = yup.object().shape({
    from: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
});

export async function GET(request: Request) {
    return new Response('Hello, Next.js!');
}

export async function POST(req: Request) {
    const body = await req.json();
    if (bodySchema.isValidSync(body)) return new Response('not format', { status: 400 });
    const { from, subject, message } = body;

    // send email using nodemailer
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.AUTH_USER,
            pass: process.env.AUTH_PASS,
        },
    });

    let info = await transporter.sendMail({
        from,
        to: process.env.AUTH_USER,
        subject,
        text: message,
        html: '<b>Hello world?</b>', // html body
    });

    console.log('info =', info);

    return new Response('Hello, Next.js!');
}
