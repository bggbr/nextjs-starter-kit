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
    const { title, path } = post;
    const allPosts = await getAllPosts();
    const idx = allPosts.findIndex((post) => post.path === path);
    const prev = idx - 1;
    const next = idx + 1;

    return (
        <article className="bg-gray-100 shadow-lg rounded-t-2xl overflow-hidden">
            <Image className="w-full h-1/5 max-h-[500px]" src={`/images/posts/${path}.png`} alt={title} width={760} height={420} />
            <PostContent post={post} />
            {/* <div className="flex">
                {prev < 0 ? (
                    ''
                ) : (
                    <Link href={`/posts/${allPosts[prev].path}`}>
                        <div className="flex-1 relative h-[200px]">
                            <Image className="w-full" src={`/images/posts/${allPosts[prev].path}.png`} alt={`${allPosts[prev].path}`} width={500} height={350} />
                            <div className="absolute top-1/3 right-10 text-white">
                                <h1 className="text-3xl font-bold text-right">{allPosts[prev].title}</h1>
                                <p className="text-lg font-bold text-right">{allPosts[prev].description}</p>
                            </div>
                        </div>
                    </Link>
                )}
                {next >= allPosts.length ? (
                    ''
                ) : (
                    <Link href={`/posts/${allPosts[next].path}`}>
                        <div className="flex-1 relative h-[200px]">
                            <Image className="w-full" src={`/images/posts/${allPosts[next].path}.png`} alt={`${allPosts[prev].path}`} width={500} height={350} />
                            <div className="absolute top-1/3 left-10 text-white">
                                <h1 className="text-3xl font-bold text-left">{allPosts[next].title}</h1>
                                <p className="text-lg font-bold text-left">{allPosts[next].description}</p>
                            </div>
                        </div>
                    </Link>
                )}
            </div> */}
        </article>
    );
}
