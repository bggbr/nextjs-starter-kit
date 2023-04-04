import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import os from "os";
import Counter from "@/components/Counter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    console.log(os.hostname());

    return (
        <>
            <h1>메인 홈페이지</h1>
            <Counter />
            {/* 외부 이미지를 사용하고 싶은 경우 width, height을 지정 */}
            {/* next.config.js에 pattern과 protocol 및 hostname 등록 */}
            {/* Layout Shift가 발생하지 않는다. */}
            {/* priority 속성을 추가하면 최우선으로 받아진다. */}
            {/* <Image
                src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
                alt="fee"
                width={400}
                height={400}
            ></Image> */}
        </>
    );
}
