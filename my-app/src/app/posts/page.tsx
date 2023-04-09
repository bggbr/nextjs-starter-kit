import FilterablePosts from '@/components/FilterablePosts';
import { getAllPosts, getCategory } from '@/service/posts';

export default async function Posts() {
    const Posts = await getAllPosts();
    const categories = await getCategory();

    return (
        <div className="flex">
            <FilterablePosts Posts={Posts} categories={categories} />
        </div>
    );
}
