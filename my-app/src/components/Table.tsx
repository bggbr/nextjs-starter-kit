"use client";
import { Customer } from "@/service/customer";
import React from "react";

type Props = {
    customers: Customer[];
};

export default function Table({ customers }: Props) {
    console.log(customers[0]);

    return (
        <div>
            <table className='table-fixed'>
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
