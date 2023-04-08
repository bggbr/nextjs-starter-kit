// "use client";
// import { useState, useEffect } from "react";

import { getPosts } from "@/service/posts";
import Image from "next/image";

export default async function Card() {
    async function getAllPosts() {
        const posts = await getPosts();
        // console.log(posts);
        return posts;
    }
    const posts = await getAllPosts();
    return (
        <section className=''>
            <h1 className='font-bold my-1'>Featured Posts</h1>
            <div className='flex flex-wrap'>
                {posts.map((v, i) =>
                    v.featured ? (
                        <div key={i} className='w-[24%] mr-3 cursor-pointer mb-3 shadow-md rounded-md'>
                            <Image
                                className='rounded-t-md'
                                src={`/images/posts/${v.path}.png`}
                                alt={`${v.title}`}
                                width={400}
                                height={200}
                            />
                            <div className='text-center pb-3'>
                                <time className='text-right m-2'>{v.date}</time>
                                <h3 className='font-bold'>{v.title}</h3>
                                <span>{v.description}</span>
                                <p className='bg-emerald-200 w-20 mx-auto rounded-xl'>{v.category}</p>
                            </div>
                        </div>
                    ) : (
                        ""
                    ),
                )}
            </div>
        </section>
    );
}
