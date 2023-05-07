import { fetchData } from '@/redux/reducers/tableReducer';
import { RootState } from '@/redux/store/reducers';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type FormState = {
    [key: string]: string;
};

export default function TableCreateModal() {
    const dispatch = useDispatch();
    const { columns, isCreateModalOpen } = useSelector((state: RootState) => state.table);
    const [formState, setFormState] = useState<FormState>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        setFormState({ ...formState, [key]: e.target.value });
    };

    const createData = () => {
        columns.map((col: keyof FormState) => {
            if (!formState[col]) {
                alert('Please fill all the fields');
                return;
            }
        });
        console.log('createButton =', formState);

        dispatch(fetchData(formState));
        dispatch({ type: 'CREATE_MODAL_STATE', payload: !isCreateModalOpen });
    };

    return (
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-xl w-[500px] h-96 bg-white">
            <p className="text-end px-4 py-2 text-2xl cursor-pointer">{'×'}</p>
            <h1 className="text-center font-bold text-2xl">TableCreateModal</h1>
            <div className="grid grid-rows-3 grid-cols-2">
                {columns.map((key: string) => {
                    return (
                        <div key={key} className="flex flex-col mx-2">
                            <label className="text-left mb-1 font-bold">{key}</label>
                            <input
                                className="border border-gray-300 p-1" //
                                type="text"
                                placeholder={`Enter ${key}`}
                                onChange={(e) => handleChange(e, key)}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="mt-8 text-center">
                <button className="mr-3 px-4 py-2 rounded-lg bg-turquoise cursor-pointer text-white font-bold" onClick={createData}>
                    Create
                </button>
                <button className="px-4 py-2 rounded-lg bg-turquoise cursor-pointer text-white font-bold" onClick={(e) => dispatch({ type: 'CREATE_MODAL_STATE', payload: !isCreateModalOpen })}>
                    Cancel
                </button>
            </div>
        </div>
    );
}
