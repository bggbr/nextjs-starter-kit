import React from "react";

type Props = {
    totalPageCount: number;
    handlePageClick: (pageNum: number) => void;
};

export default function TablePagination({ totalPageCount, handlePageClick }: Props) {
    return (
        <div className='my-4'>
            <ul className='flex justify-center gap-x-4'>
                {Array.from({ length: totalPageCount }, (_, i) => (
                    <li key={i} onClick={() => handlePageClick(i + 1)}>
                        <button className='bg-gray-200 text-gray-700 px-4 py-2 rounded-lg'>{i + 1}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
