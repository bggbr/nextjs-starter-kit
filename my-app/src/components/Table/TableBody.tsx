'use client';

import TableRow from './TableRow';
import { useEffect, useState } from 'react';
import { Customer } from '@/service/customer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/reducers';

type Props = {
    tableColumns: string[];
    setCurrPageNum: (data: number) => void;
    visibleRows: number;
    currPageNum: number;
    totalPageCount: number;
};

export default function TableRows() {
    const { customers, filteredCustomer, columns, currPageNumber, rowCountPerPage, totalPageCount } = useSelector((state: RootState) => state.table);
    const dispatch = useDispatch();

    const getStartIndex = (currPage: number, rowCount: number) => {
        const startIndex = (currPage - 1) * rowCount;
        return startIndex < 0 ? 0 : startIndex;
    };

    useEffect(() => {
        console.log('customers.length', customers.length);

        if (currPageNumber > totalPageCount) {
            dispatch({ type: 'SET_CURRENT_PAGE', payload: { pageNum: totalPageCount } });
        }

        const startIndex = getStartIndex(currPageNumber, rowCountPerPage);
        const endIndex = startIndex + rowCountPerPage;
        const visibleData = customers.slice(startIndex, endIndex);

        dispatch({ type: 'SET_FILTERED_CUSTOMER', payload: visibleData });
    }, [customers, rowCountPerPage, currPageNumber, totalPageCount, dispatch]);

    return (
        <tbody>
            {filteredCustomer.map((row: Customer) => {
                return (
                    <TableRow
                        key={row.id} //
                        row={row}
                        tableColumns={columns}
                    />
                );
            })}
        </tbody>
    );
}
