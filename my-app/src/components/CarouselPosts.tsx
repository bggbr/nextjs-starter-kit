import { getNonFeaturedPosts } from "@/service/posts";
import MultiCarousel from "./MultiCarouseel";
import PostCard from "./PostCard";

export default async function CarouselPosts() {
    const posts = await getNonFeaturedPosts();
    return (
        <section className='mt-4'>
            <h2 className='text-2xl font-bold my-2'>You May Like</h2>
            <MultiCarousel>
                {posts.map((post) => (
                    <PostCard key={post.path} post={post} />
                ))}
            </MultiCarousel>
        </section>
    );
}
