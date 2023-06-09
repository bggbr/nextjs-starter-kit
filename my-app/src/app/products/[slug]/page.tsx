import { getProduct, getProducts } from "@/service/products";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import GoProductsButton from "@/components/GoProductsButton";

type Props = {
    params: {
        slug: string;
    };
};

export default async function Product({ params: { slug } }: Props) {
    const product = await getProduct(slug);

    if (!product) {
        redirect("/products");
        // notFound();
    }

    return (
        <>
            <h1>Product Pants ! {product.name}</h1>
            <Image src={`/images/${product.image}`} alt="products" width={400} height={400} />
            <GoProductsButton />
        </>
    );
}

// export const revalidate = 3;

// export const metadata = {
//     title: "product slug",
//     description: "product slug",
// };

export function generateMetadata({ params }: Props) {
    return {
        title: `제품의 이름: ${params.slug}`,
    };
}

export async function generateStaticParams() {
    const products = await getProducts();
    return products.map((product) => ({
        slug: product.id,
    }));
}
