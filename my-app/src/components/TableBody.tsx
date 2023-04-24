"use client";
import TableRow from "./TableRow";
import { useState } from "react";
import { Customer, getTotalPageCount, getStartIndex } from "@/service/customer";
import TableModal from "./TableModal";

type Props = {
    tableColumns: string[];
    tableData: Customer[];
    setTableData: (data: Customer[]) => void;
    setTableModal: (data: boolean) => void;
    setSelectedData: (data: Customer | null) => void;
    visibleRows: number;
    currPageNum: number;
};

export default function TableRows({
    tableColumns,
    tableData,
    setTableData,
    setTableModal,
    setSelectedData,
    visibleRows,
    currPageNum,
}: Props) {
    const [currPage, setCurrPage] = useState<number>(currPageNum);

    console.log(currPage);

    // test
    function getTotalPageCount(totalLength: number, rowCount: number): number {
        const pageCount = Math.ceil(totalLength / rowCount);
        return pageCount;
    }

    function getStartIndex(currPage: number, rowCount: number) {
        const startIndex = (currPage - 1) * rowCount;
        return startIndex;
    }
    const totalPageCount = getTotalPageCount(tableData.length, visibleRows);
    const startIndex = getStartIndex(currPage, visibleRows);

    console.log("totalPageCount", totalPageCount);
    console.log("startIndex", startIndex);

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
            {tableData.slice(startIndex, visibleRows).map((row: Customer, index: number) => (
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
