"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/reducers";

export default function TableModal() {
    const dispatch = useDispatch();
    const { selectedCustomer, isModalOpen } = useSelector((state: RootState) => state.table);
    const [formState, setFormState] = useState({});

    const hideModal = () => {
        dispatch({ type: "MODAL_STATE", payload: !isModalOpen });
    };

    const editModal = () => {
        const editedCustomer = { ...selectedCustomer };
        const keys = Object.keys(formState);

        Array.from(keys).map((key) => {
            editedCustomer[key] = formState[key];
        });

        dispatch({ type: "EDIT", payload: editedCustomer });
        hideModal();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        setFormState({ ...formState, [key]: e.target.value });
    };

    return (
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-xl bg-white w-[450px] h-80">
            <p className="text-end px-4 py-2 text-2xl cursor-pointer" onClick={hideModal}>
                {"×"}
            </p>
            <div className="grid grid-rows-3 grid-cols-2">
                {Object.entries(selectedCustomer).map(([key, value]) => {
                    if (key === "id") return null;
                    return (
                        <div key={key} className="flex flex-col mx-2">
                            <label className="text-left mb-1 font-bold">{key}</label>
                            <input
                                className="border border-gray-300 p-1" //
                                type="text"
                                placeholder={`Enter ${key}`}
                                defaultValue={value}
                                onChange={(e) => handleChange(e, key)}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="mt-8 text-center">
                <button
                    className="mr-3 px-4 py-2 rounded-lg bg-turquoise cursor-pointer text-white font-bold"
                    onClick={editModal}
                >
                    Edit
                </button>
                <button
                    className="px-4 py-2 rounded-lg bg-turquoise cursor-pointer text-white font-bold"
                    onClick={hideModal}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}
