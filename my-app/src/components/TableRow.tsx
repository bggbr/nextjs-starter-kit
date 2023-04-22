"use client";
import { Customer } from "@/service/customer";

type Props = {
    row: Customer;
    tableColumns: string[];
    handleEdit: (data: Customer) => void;
    handleDelete: (data: Customer) => void;
};

export default function TableRow({ row, tableColumns, handleEdit, handleDelete }: Props) {
    return (
        <>
            <tr className='min-h-20'>
                {tableColumns.map((column: string) => (
                    <td className='p-3' key={column}>
                        {row[column]}
                    </td>
                ))}
                <td className='p-3 text-center'>
                    <button
                        className='mr-3 px-4 py-2 rounded-lg bg-yellow-500 cursor-pointer text-white font-bold'
                        key='edit'
                        onClick={() => handleEdit(row)}
                    >
                        Edit
                    </button>
                    <button
                        className='px-4 py-2 rounded-lg bg-yellow-500 cursor-pointer text-white font-bold'
                        key='delete'
                        onClick={() => handleDelete(row)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
}
