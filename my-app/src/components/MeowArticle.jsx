"use client";

import { useEffect, useState } from "react";
import styles from "./MeowArticle.module.css";

const MeowArticle = () => {
    const [text, setText] = useState("데이터 준비중");

    useEffect(() => {
        fetchText();
    }, []);

    const fetchText = async () => {
        const res = await fetch("https://meowfacts.herokuapp.com", {
            cache: "reload",
            next: { revalidate: 3 },
        });
        const data = await res.json();
        setText(data.data[0]);
    };

    return (
        <div>
            <article className={styles.article}>{text}</article>
        </div>
    );
};

export default MeowArticle;
