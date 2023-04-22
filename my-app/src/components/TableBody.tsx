"use client";
import TableRow from "./TableRow";
import { Customer } from "@/service/customer";

type Props = {
    tableColumns: string[];
    tableData: Customer[];
    setTableData: (data: Customer[]) => void;
};

export default function TableRows({ tableColumns, tableData, setTableData }: Props) {
    const handleEdit = (data: Customer) => {
        console.log(`Edit ${data.id}`);
    };
    const handleDelete = (data: Customer) => {
        const newTableData = tableData.filter((row: Customer) => row.id !== data.id);
        setTableData(newTableData);
    };
    return (
        <tbody>
            {tableData.map((row: Customer, index: number) => (
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
