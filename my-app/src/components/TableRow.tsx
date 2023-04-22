"use client";
import { Customer } from "@/service/customer";

type Props = {
    row: Customer;
    columns: string[];
};

export default function TableRow({ row, columns }: Props) {
    return (
        <>
            <tr>
                {columns.map((column: string) => (
                    <td className='p-3' key={column}>
                        {row[column]}
                    </td>
                ))}
            </tr>
        </>
    );
}
