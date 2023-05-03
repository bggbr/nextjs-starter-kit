"use client";
import React from "react";
import Button from "../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/reducers";
import { increment, decrement } from "@/redux/reducers/counterReducer";

export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter.count);
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="font-semiBold text-4xl mb-4">Counter: {count}</h1>
            <div className="grid grid-cols-2 grid-rows-1 gap-x-4 text-white font-bold mt-4">
                <Button name="Increment" onClick={() => dispatch(increment())} />
                <Button name="Decrement" onClick={() => dispatch(decrement())} />
            </div>
        </div>
    );
}
