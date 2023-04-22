"use client";
import { Customer } from "@/service/customer";

type Props = {
    row: Customer;
    columns: string[];
};

export default function TableRow({ row, columns }: Props) {
    return (
        <>
            <tr className='min-h-20'>
                {columns.map((column: string) => (
                    <td className='p-3' key={column}>
                        {row[column]}
                    </td>
                ))}
                <td className='p-3 text-center'>
                    <a className='mr-3 px-4 py-2 rounded-lg bg-yellow-500 cursor-pointer text-white font-bold' key='edit'>
                        Edit
                    </a>
                    <a className='px-4 py-2 rounded-lg bg-yellow-500 cursor-pointer text-white font-bold' key='delete'>
                        Delete
                    </a>
                </td>
            </tr>
        </>
    );
}
