"use client";
import { RootState } from "@/redux/store/reducers";
import { Customer } from "@/service/customer";
import { useDispatch, useSelector } from "react-redux";

type Props = {
    row: Customer;
    tableColumns: string[];
};

export default function TableRow({ row, tableColumns }: Props) {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.table.isModalOpen);
    const handleEdit = () => {
        dispatch({ type: "MODAL_STATE", payload: !isModalOpen });
        dispatch({ type: "SELECTED_CUSTOMER", payload: row });
    };

    const handleDelete = () => {
        dispatch({ type: "DELETE", payload: { id: row.id } });
    };

    return (
        <>
            <tr>
                {tableColumns.map((column: string) => (
                    <td
                        className="max-w-xs p-3 overflow-hidden whitespace-nowrap text-ellipsis hover:text-clip"
                        key={column}
                    >
                        {row[column]}
                    </td>
                ))}
                <td className="flex p-3 text-center">
                    <button
                        className="mr-3 px-4 py-2 rounded-lg bg-yellow-500 cursor-pointer text-white font-bold"
                        key="edit"
                        onClick={handleEdit}
                    >
                        Edit
                    </button>
                    <button
                        className="px-4 py-2 rounded-lg bg-yellow-500 cursor-pointer text-white font-bold"
                        key="delete"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
}
