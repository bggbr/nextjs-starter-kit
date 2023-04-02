import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import os from "os";
import Counter from "@/components/Counter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    console.log("안녕 - 서버 컴포넌트");
    console.log(os.hostname());

    return (
        <>
            <h1>메인 홈페이지</h1>
            <Counter />
        </>
    );
}
