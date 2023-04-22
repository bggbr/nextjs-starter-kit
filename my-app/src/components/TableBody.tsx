"use client";
import TableRow from "./TableRow";
import { Customer } from "@/service/customer";

type Props = {
    columns: string[];
    data: Customer[];
};

export default function TableRows({ columns, data }: Props) {
    return (
        <tbody>
            {data.map((row: Customer, index: number) => (
                <TableRow key={row.id || index} row={row} columns={columns} />
            ))}
        </tbody>
    );
}
