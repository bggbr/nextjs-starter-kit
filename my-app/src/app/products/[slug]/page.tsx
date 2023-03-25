type Props = {
    params: {
        slug: string;
    };
};

export default function Product({ params }: Props) {
    return <h1>Product Pants ! {params.slug}</h1>;
}

export function generateStaticParams() {
    const products = ["pants", "skirt"];
    return products.map((product) => ({
        slug: product,
    }));
}
