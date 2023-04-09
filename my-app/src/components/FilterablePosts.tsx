'use client';

import PostsGrid from '@/components/PostsGrid';
import Category from '@/components/Category';
import { Post } from '@/service/posts';
import { useState } from 'react';

type Props = {
    Posts: Post[];
    categories: string[];
};

export default function FilterablePosts({ Posts, categories }: Props) {
    const [selected, setSelected] = useState('All Category');
    const filtered = selected === 'All Category' ? Posts : Posts.filter((post) => post.category === selected);

    return (
        <section className="flex my-10">
            <PostsGrid posts={filtered} />
            <Category categories={categories} selected={selected} setSelected={setSelected} />
        </section>
    );
}
