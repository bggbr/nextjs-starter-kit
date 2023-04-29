import { useState } from "react";
import { AiOutlineSearch, AiFillCloseCircle } from "react-icons/ai";

export default function TableSearch() {
    const [filteredWords, setFilteredWords] = useState<string[]>([]);
    const [filterWord, setFilterWord] = useState<string>("");

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") return;
        if (filterWord === "") return;
        if (filteredWords.includes(filterWord)) return;
        setFilteredWords([...filteredWords, filterWord]);
        setFilterWord("");
    };

    const removeFilteredWord = (e: React.MouseEvent<SVGSVGElement>) => {
        const word = e.currentTarget.previousSibling?.textContent;
        if (!word) return;
        setFilteredWords(filteredWords.filter((w) => w !== word));
    };
    return (
        <div className="flex justify-center items-center rounded-lg border-solid border-2 border-gray-200">
            <AiOutlineSearch className="flex-none ml-2 mr-1 w-5 h-5 stroke-[50px] rounded-full cursor-pointer text-gray-600 font-bold" />{" "}
            {filteredWords.map((word, index) => (
                <span
                    key={index}
                    className="mx-1 bg-gray-200 p-1 rounded-lg text-sm"
                >
                    {word}
                    <AiFillCloseCircle
                        className="fill-gray-500 inline-block w-4 h-4 ml-1 cursor-pointer"
                        onClick={removeFilteredWord}
                    />
                </span>
            ))}
            <input
                placeholder="Search"
                type="text"
                className="flex-1 w-full h-full pl-1 focus:outline-none"
                value={filterWord}
                onChange={(e) => {
                    setFilterWord(e.target.value);
                }}
                onKeyDown={handleSearch}
            />
        </div>
    );
}
