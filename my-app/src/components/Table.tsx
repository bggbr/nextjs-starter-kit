"use client";
import { Customer } from "@/service/customer";
import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

type Props = {
    customers: Customer[];
};

export default function Table({}: Props) {
    return (
        <div>
            <table className='table-fixed'>
                <TableHeader />
                <TableBody />
            </table>
        </div>
    );
}
