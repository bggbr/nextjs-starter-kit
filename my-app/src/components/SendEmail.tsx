'use client';
import React, { useState } from 'react';
import Banner from './Banner';

export default function SendEmail() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isButton, setIsButton] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateInputs()) return;

        const formData = { from: email, subject, message };

        setIsButton(!isButton);

        setTimeout(() => {
            setIsButton(false);
        }, 2000);

        console.log('formData = ', formData);

        fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData), headers: { 'Content-Type': 'application/json' } });
    };

    const validateInputs = () => (email.trim() && subject.trim() && message.trim() ? true : (alert('Please fill in all fields.'), false));
    return (
        <>
            <h3 className="text-3xl font-bold text-center mb-10">Or Send me an email</h3>
            <Banner isButton={isButton} />
            <form className="rounded-lg bg-slate-700 max-w-lg p-4 mx-auto" action="submit" onSubmit={sendEmail}>
                <p className="text-white font-bold my-2">Your Email</p>
                <input name="from" className="pl-1 w-full" type="text" placeholder="Your Email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <p className="text-white font-bold my-2">Subject</p>
                <input name="subject" className="pl-1 w-full" type="text" placeholder="Subject" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)} />
                <p className="text-white font-bold my-2">Message</p>
                <textarea name="message" className="pl-1 w-full" rows={10} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}></textarea>
                <button className="w-full font-bold h-10 bg-yellow-300 text-slate-700 my-2">Submit</button>
            </form>
        </>
    );
}
