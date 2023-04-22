"use client";
import { Customer } from "@/service/customer";
import React, { useState } from "react";
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
    const [tableData, setTableData] = useState<Customer[]>(data);
    const [tableColumns, setTableColumns] = useState<string[]>(columns);
    return (
        <>
            <table className={`mx-auto table-fixed text-center`}>
                <TableHeader tableColumns={tableColumns} />
                <TableBody tableColumns={tableColumns} tableData={tableData} setTableData={setTableData} />
            </table>
        </>
    );
}
