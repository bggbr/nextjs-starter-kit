"use client";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    console.log("안녕 - 클라이언트");

    const increaseNumber = () => {
        setCount(count + 1);
    };
    const decreaseNumber = () => {
        setCount(count - 1);
    };

    return (
        <>
            <p>{count}</p>
            <button onClick={increaseNumber}>숫자 증가 시키기</button>
            <button onClick={decreaseNumber}>숫자 감소 시키기</button>
        </>
    );
}
