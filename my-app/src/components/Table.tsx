"use client";
import { Customer } from "@/service/customer";
import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

interface TableStyles {
    textPosition?: string;
    backgroundColor?: string;
    shadow?: string;
    cellSpacing?: string;
}

type Props = {
    data: Customer[];
    columns: string[];
    tableStyles?: TableStyles;
};

export default function Table({ data, columns }: Props) {
    return (
        <>
            <table className={`mx-auto table-fixed text-center`}>
                <TableHeader columns={columns} />
                <TableBody columns={columns} data={data} />
            </table>
        </>
    );
}
