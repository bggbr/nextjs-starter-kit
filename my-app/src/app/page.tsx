import Hero from "@/components/Hero";
import Card from "@/components/Card";

export default function Home() {
    return (
        <>
            <section>
                <Hero />
                {/* @ts-expect-error Server Component */}
                <Card />
            </section>
        </>
    );
}
