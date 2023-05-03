import { MouseEvent } from "react";

type Props = {
    name: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ name, onClick }: Props) {
    return (
        <button
            className="min-w-[100px] p-4 bg-emerald-400 rounded-full text-center text-white font-bold"
            onClick={onClick}
        >
            {name}
        </button>
    );
}
