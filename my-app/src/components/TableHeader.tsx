"use client";

export default function TableColumns({ columns }: { columns: string[] }) {
    return (
        <thead className={`bg-turquoise text-white`}>
            <tr>
                {columns.map((column, index) => (
                    <th className='py-4 px-10' key={index}>
                        {column.charAt(0).toUpperCase() + column.slice(1)}
                    </th>
                ))}
                <th className='py-4 px-10'>Details</th>
            </tr>
        </thead>
    );
}
