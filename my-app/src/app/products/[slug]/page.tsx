import { getProduct, getProducts } from "@/service/products";
import { notFound } from "next/navigation";

type Props = {
    params: {
        slug: string;
    };
};

// export const metadata = {
//     title: "product slug",
//     description: "product slug",
// };

export function generateMetadata({ params }: Props) {
    return {
        title: `제품의 이름: ${params.slug}`,
    };
}

export default function Product({ params: { slug } }: Props) {
    const product = getProduct(slug);

    if (!product) {
        notFound();
    }

    return <h1>Product Pants ! {product}</h1>;
}

export function generateStaticParams() {
    const products = getProducts();
    return products.map((product) => ({
        slug: product,
    }));
}
