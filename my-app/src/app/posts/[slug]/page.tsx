import AbjacentPostCard from '@/components/AbjacentPostCard';
import MarkdownViewer from '@/components/MarkdownViewer';
import PostContent from '@/components/PostContent';
import { getAllPosts, getPostContent } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import { AiTwotoneCalendar } from 'react-icons/ai';

type Props = {
    params: {
        slug: string;
    };
};

export default async function page({ params: { slug } }: Props) {
    const post = await getPostContent(slug);
    const { title, path, prev, next } = post;

    return (
        <article className="bg-gray-100 shadow-lg rounded-t-2xl overflow-hidden">
            <Image className="w-full h-1/5 max-h-[500px]" src={`/images/posts/${path}.png`} alt={title} width={760} height={420} />
            <PostContent post={post} />
            <section className="flex shadow-md">
                {prev && <AbjacentPostCard post={prev} type="prev" />}
                {next && <AbjacentPostCard post={next} type="next" />}
            </section>
        </article>
    );
}
