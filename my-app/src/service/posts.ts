import path from 'path';
import { readFile } from 'fs/promises';

export type Post = {
    title: string;
    description: string;
    date: Date;
    category: string;
    path: string;
    featured: boolean;
};

export type PostData = Post & { content: string };

export async function getPostContent(name: string): Promise<PostData> {
    const filePath = path.join(process.cwd(), 'data', 'posts', `${name}.md`);
    const metadata = await getAllPosts().then((posts) => posts.find((post) => post.path === name));
    if (!metadata) throw new Error(`${name} is not found`);
    const content = await readFile(filePath, 'utf-8');
    return { ...metadata, content };
}

export async function getCategory() {
    const categories = ['All Category'];
    return getAllPosts().then((posts) => [...categories, ...new Set(posts.map((post) => post.category))]);
}

export async function getFeaturedPosts(): Promise<Post[]> {
    return getAllPosts() //
        .then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
    return getAllPosts() //
        .then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
    const filePath = path.join(process.cwd(), 'data', 'posts.json');
    const data = await readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

export async function getPost(title: string): Promise<Post | undefined> {
    const posts = await getAllPosts();
    return posts.find((item) => item.title === title);
}
