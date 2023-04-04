import { getProducts } from "@/service/products";
import Link from "next/link";
import MeowArticle from "@/components/MeowArticle.jsx";

// export const revalidate = 3;

// throw new Error();
export default async function Product() {
    const products = await getProducts();

    return (
        <>
            <h1>제품 설명 첫 페이지 !</h1>
            <ul>
                <li>
                    {products.map((product) => (
                        <Link key={product.id} href={`/products/${product.id}`}>
                            {product.name}
                        </Link>
                    ))}
                </li>
            </ul>
            <MeowArticle />
        </>
    );
}
