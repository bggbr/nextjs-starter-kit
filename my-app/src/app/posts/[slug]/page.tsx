import { headers } from 'next/headers';
import { getPostContent } from '@/service/posts';

type Props = {
    params: {
        slug: string;
    };
};
export default async function page({ params: { slug } }: Props) {
    const post = await getPostContent(slug);
    console.log(post);

    return (
        <section>
            <h1>{post.title}</h1>
            <pre>{post.content}</pre>
        </section>
    );
}
