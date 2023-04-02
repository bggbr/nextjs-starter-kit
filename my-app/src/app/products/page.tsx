import { getProducts } from "@/service/products";
import Link from "next/link";

export default function Product() {
    const products = getProducts();
    return (
        <>
            <h1>제품 설명 첫 페이지 !</h1>
            <ul>
                <li>
                    {products.map((product) => (
                        <Link href={`/products/${product}`}>{product}</Link>
                    ))}
                </li>
            </ul>
        </>
    );
}
