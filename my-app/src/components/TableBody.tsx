"use client";
import TableRow from "./TableRow";
import { useState } from "react";
import { Customer } from "@/service/customer";
import TableModal from "./TableModal";

type Props = {
    tableColumns: string[];
    tableData: Customer[];
    setTableData: (data: Customer[]) => void;
    setTableModal: (data: boolean) => void;
    setSelectedData: (data: Customer | null) => void;
};

export default function TableRows({ tableColumns, tableData, setTableData, setTableModal, setSelectedData }: Props) {
    const handleEdit = (data: Customer) => {
        setTableModal(true);
        setSelectedData(data);
    };
    const handleDelete = (data: Customer) => {
        const newTableData = tableData.filter((row: Customer) => row.id !== data.id);
        setTableData(newTableData);
    };
    return (
        <tbody>
            {tableData.map((row: Customer, index: number) => (
                <TableRow
                    key={row.id || index} //
                    row={row}
                    tableColumns={tableColumns}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            ))}
        </tbody>
    );
}
