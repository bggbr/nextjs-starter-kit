"use client";

import TableRow from "./TableRow";
import { useEffect, useState } from "react";
import { Customer } from "@/service/customer";

type Props = {
    tableColumns: string[];
    tableData: Customer[];
    setTableData: (data: Customer[]) => void;
    setTableModal: (data: boolean) => void;
    setSelectedData: (data: Customer | null) => void;
    setCurrPageNum: (data: number) => void;
    visibleRows: number;
    currPageNum: number;
    totalPageCount: number;
};

export default function TableRows({
    tableColumns,
    tableData,
    setTableData,
    setTableModal,
    setSelectedData,
    visibleRows,
    currPageNum,
    totalPageCount,
    setCurrPageNum,
}: Props) {
    const [visibleData, setVisibleData] = useState<Customer[]>([]);

    const getStartIndex = (currPage: number, rowCount: number) => {
        const startIndex = (currPage - 1) * rowCount;
        return startIndex;
    };

    const handleEdit = (data: Customer) => {
        setTableModal(true);
        setSelectedData(data);
    };

    const handleDelete = (data: Customer) => {
        const newTableData = tableData.filter((row: Customer) => row.id !== data.id);
        setTableData(newTableData);
    };

    useEffect(() => {
        let currentPage = currPageNum;

        if (currentPage > totalPageCount) {
            currentPage = totalPageCount;
        }

        const startIndex = getStartIndex(currentPage, visibleRows);
        const endIndex = startIndex + visibleRows;
        const visibleData = tableData.slice(startIndex, endIndex);

        setVisibleData(visibleData);
    }, [currPageNum, tableData, totalPageCount]);

    return (
        <tbody>
            {visibleData.map((row: Customer, index: number) => {
                return (
                    <TableRow
                        key={row.id || index} //
                        row={row}
                        tableColumns={tableColumns}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                );
            })}
        </tbody>
    );
}
