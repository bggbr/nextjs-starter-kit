import { getProducts } from "@/service/products";
import Link from "next/link";
import Image from "next/image";
import MeowArticle from "@/components/MeowArticle.jsx";
import testImage from "../../../public/images/bg_gate.webp";
// export const revalidate = 3;

// throw new Error();
export default async function Product() {
    const products = await getProducts();

    return (
        <>
            <h1>제품 설명 첫 페이지 !</h1>
            {/* local image */}
            <Image src={testImage} alt="test"></Image>
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
