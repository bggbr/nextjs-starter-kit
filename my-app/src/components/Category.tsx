'use client';
type Props = {
    categories: string[];
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
};

export default function Category({ categories, selected, setSelected }: Props) {
    return (
        <aside className="w-32 text-center mx-4 mb-4">
            <header className="font-bold text-2xl mb-2">Category</header>
            <ul>
                {categories.map((category) => (
                    <li key={category} className={`cursor-pointer mb-1 ${selected === category ? 'text-emerald-600 font-bold' : ''} hover:text-emerald-600`} onClick={() => setSelected(category)}>
                        {category}
                    </li>
                ))}
            </ul>
        </aside>
    );
}
