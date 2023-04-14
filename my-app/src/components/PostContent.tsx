import MarkdownViewer from './MarkdownViewer';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { PostData } from '@/service/posts';

export default function PostContent({ post }: { post: PostData }) {
    const { title, description, date, content } = post;
    return (
        <section className="flex flex-col p-5">
            <div className="flex self-end font-bold text-sky-600">
                <AiTwotoneCalendar className="h-[24px]" />
                <p className="font-semibold ml-2">{date.toString()}</p>
            </div>
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            <p className="text-xl font-bold mb-2 ">{description}</p>
            <div className="w-44 border-2 border-sky-600 mt-4 mb-8"></div>
            <MarkdownViewer content={content} />
        </section>
    );
}
