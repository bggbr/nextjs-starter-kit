"use client";
import { Customer } from "@/service/customer";
import React, { useState, useEffect } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import TableModal from "./TableModal";
import TablePagination from "./TablePagination";
import TableSearch from "./TableSearch";

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
    visibleRowCount?: number;
};

export default function Table({ data, columns, visibleRowCount }: Props) {
    // table data and columns
    const [tableData, setTableData] = useState<Customer[]>(data);
    const [tableColumns, setTableColumns] = useState<string[]>(columns);
    // table modal state
    const [tableModal, setTableModal] = useState<boolean>(false);
    // selected data for modal
    const [selectedData, setSelectedData] = useState<Customer | null>(null);
    // visible row count
    const [visibleRows, setVisibleRows] = useState<number>(
        visibleRowCount || 0
    );
    // current page number
    const [currPageNum, setCurrPageNum] = useState<number>(1);
    // total page count
    const [totalPageCount, setTotalPageCount] = useState<number>(0);

    useEffect(() => {
        setTotalPageCount(Math.ceil(tableData.length / visibleRows));
    }, [tableData]);

    const handlePageClick = (pageNum: number) => {
        setCurrPageNum(pageNum);
    };

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
            <div className="max-w-5xl mx-auto flex justify-between mt-10 mb-2">
                <TableSearch />
                <button className="px-4 py-2 rounded-full bg-yellow-500 cursor-pointer text-white font-bold">
                    Create
                </button>
            </div>
            <table className="mx-auto table-fixed text-center">
                <TableHeader tableColumns={tableColumns} />
                <TableBody
                    tableColumns={tableColumns} //
                    tableData={tableData}
                    setTableData={setTableData}
                    setTableModal={setTableModal}
                    setSelectedData={setSelectedData}
                    visibleRows={visibleRows}
                    currPageNum={currPageNum}
                    totalPageCount={totalPageCount}
                    setCurrPageNum={setCurrPageNum}
                />
            </table>
            <TablePagination
                totalPageCount={totalPageCount}
                handlePageClick={handlePageClick}
            />
        </>
    );
}
