import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <header className="flex justify-between p-4 ">
            <Link href="/">
                <h1 className="font-bold text-3xl">{"MAKE TABLE"}</h1>
            </Link>
            <nav className="flex space-x-4 justify-center items-center">
                <Link href="/">Home</Link>
                <Link href="/customers">Customer</Link>
                <Link href="/counter">Counter</Link>
                <Link href="/todo">Todo</Link>
            </nav>
        </header>
    );
}
