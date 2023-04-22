"use client";
import { useState } from "react";
import { Customer } from "@/service/customer";

type Props = {
    selectedData: Customer;
    setTableData: (data: Customer[]) => void;
    setSelectedData: (data: Customer | null) => void;
    tableData: Customer[];
};

export default function TableModal({ selectedData, setTableModal, setTableData, tableData }: Props) {
    const [formState, setFormState] = useState(selectedData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        setFormState({ ...formState, [key]: e.target.value });
    };

    const hideModal = () => {
        setTableModal(false);
    };
    const editModal = () => {
        const newTableData = tableData.map((data) => (formState.id === data.id ? formState : data));
        setTableData(newTableData);
        setTableModal(false);
    };

    return (
        <div className='absolute top-1/3 left-1/4 shadow-lg bg-white w-1/2 h-2/5'>
            <p className='text-end px-4 py-2 text-2xl cursor-pointer' onClick={hideModal}>
                {"×"}
            </p>
            <div className='grid grid-rows-3 grid-cols-2'>
                {Object.entries(selectedData).map(([key, value]) => {
                    if (key === "id") return null;
                    return (
                        <div key={key} className='flex flex-col mx-2'>
                            <label className='text-left mb-1 font-bold'>{key}</label>
                            <input
                                className='border border-gray-300 p-1' //
                                type='text'
                                placeholder={`Enter ${key}`}
                                defaultValue={value}
                                onChange={(e) => handleChange(e, key)}
                            />
                        </div>
                    );
                })}
            </div>
            <div className='mt-8 text-center'>
                <button className='mr-3 px-4 py-2 rounded-full bg-turquoise cursor-pointer text-white font-bold' onClick={editModal}>
                    Edit
                </button>
                <button className='px-4 py-2 rounded-full bg-turquoise cursor-pointer text-white font-bold' onClick={hideModal}>
                    Cancel
                </button>
            </div>
        </div>
    );
}
