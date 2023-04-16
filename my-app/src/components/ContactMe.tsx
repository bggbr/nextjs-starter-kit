import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function ContactMe() {
    return (
        <div className='text-center'>
            <h3 className='text-3xl font-bold mb-2'>Contact Me</h3>
            <p className='mb-4'>jaejung603@gmail.com</p>
            <div className='flex gap-4 justify-center mb-10'>
                <FaGithub className='text-5xl' />
                <FaInstagram className='text-5xl' />
                <FaYoutube className='text-5xl' />
            </div>
        </div>
    );
}
