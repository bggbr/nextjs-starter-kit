import * as yup from 'yup';

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
    if (bodySchema.isValidSync(body)) return 'error';
    const { from, subject, message } = body;
    console.log(from, subject, message);

    return new Response('Hello, Next.js!');
}
