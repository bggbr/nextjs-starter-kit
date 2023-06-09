"use client";

type Props = {
    tableColumns: string[];
};

export default function TableColumns({ tableColumns }: Props) {
    return (
        <thead className={`bg-turquoise text-white`}>
            <tr>
                {tableColumns.map((column, index) => (
                    <th className="py-4 px-10" key={index}>
                        {column.charAt(0).toUpperCase() + column.slice(1)}
                    </th>
                ))}
                <th className="py-4 px-10">Details</th>
            </tr>
        </thead>
    );
}
