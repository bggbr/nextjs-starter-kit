import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/next.svg";

export default function Hero() {
    return (
        <section>
            <div className='text-center space-y-1'>
                <Image className='rounded-full h-[250px] mx-auto' src={profileImage} alt='author' width={250} height={250} priority />
                <h1 className='text-3xl font-bold mt-2'>{"Hi, I'm BOB"}</h1>
                <p className='text-xl font-semibold'>{"Software Engineer"}</p>
                <Link href='/contact'>
                    <button className='rounded-xl bg-yellow-500 font-bold p-2 mt-2'>Contact me</button>
                </Link>
            </div>
        </section>
    );
}
