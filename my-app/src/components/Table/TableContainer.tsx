"use client";
import { RootState } from "@/redux/store/reducers";
import { Customer } from "@/service/customer";
import { useDispatch, useSelector } from "react-redux";
import Table from "./Table";
import FetchCustomers from "./FetchCustomers";

export default function TableContainer() {
    FetchCustomers();
    return (
        <>
            <Table />
        </>
    );
}
