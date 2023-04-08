import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";

export default function Home() {
    return (
        <>
            <section>
                <Hero />
                {/* @ts-expect-error Server Component */}
                <FeaturedPosts />
            </section>
        </>
    );
}
