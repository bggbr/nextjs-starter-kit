import Link from "next/link";
import React from "react";
import styles from "./layout.module.css";

export const metadata = {
    title: "Product Information",
    description: "Product Information",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className={styles.product}>
                <Link href='/products/women'>여성옷</Link>
                <Link href='/products/man'>남성옷</Link>
            </div>
            <div>{children}</div>
        </div>
    );
}
