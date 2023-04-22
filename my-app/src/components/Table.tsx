"use client";
import { Customer } from "@/service/customer";
import React, { useState } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import TableModal from "./TableModal";

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
    const [tableModal, setTableModal] = useState<boolean>(false);
    const [selectedData, setSelectedData] = useState<Customer | null>(null);

    return (
        <>
            {tableModal && (
                <TableModal
                    selectedData={selectedData} //
                    setTableData={setTableData}
                    setTableModal={setTableModal}
                    tableData={tableData}
                />
            )}
            <table className={`mx-auto table-fixed text-center`}>
                <TableHeader tableColumns={tableColumns} />
                <TableBody
                    tableColumns={tableColumns} //
                    tableData={tableData}
                    setTableData={setTableData}
                    setTableModal={setTableModal}
                    setSelectedData={setSelectedData}
                />
            </table>
        </>
    );
}
