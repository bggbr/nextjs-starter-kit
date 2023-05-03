"use client";
import { Customer } from "@/service/customer";
import React, { useState, useEffect } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import TableModal from "./TableModal";
import TablePagination from "./TablePagination";
import TableSearch from "./TableSearch";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/reducers";

export default function Table() {
    const isModalOpen = useSelector((state: RootState) => state.table.isModalOpen);
    return (
        <>
            {isModalOpen && <TableModal />}
            <div className="min-w-[1120px] w-full mx-auto flex flex-col items-start mt-10 mb-2">
                <button className="px-4 py-2 mb-2 rounded-lg bg-aws cursor-pointer text-white font-semiBold">
                    Create Data
                </button>
                <TableSearch />
            </div>
            <table className="min-w-[1120px] w-full mx-auto table-fixed text-center overflow-hidden text-ellipsis">
                <TableHeader />
                <TableBody />
            </table>
            <TablePagination />
        </>
    );
}
