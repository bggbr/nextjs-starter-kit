import { RootState } from "@/redux/store/reducers";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TablePagination() {
    const { customers, rowCountPerPage, totalPageCount } = useSelector(
        (state: RootState) => state.table
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: "SET_TOTAL_PAGE_LENGTH",
            payload: { totalLength: customers.length, rowCountPerPage },
        });
    }, [customers]);

    return (
        <div className="my-4">
            <ul className="flex justify-center gap-x-4">
                {Array.from({ length: totalPageCount }, (_, i) => (
                    <li
                        key={i}
                        onClick={() =>
                            dispatch({ type: "SET_CURRENT_PAGE", payload: { pageNum: i + 1 } })
                        }
                    >
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                            {i + 1}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
