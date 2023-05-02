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

export type PostData = Post & { content: string; next: Post | null; prev: Post | null };

export async function getPostContent(fileName: string): Promise<PostData> {
    const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
    const posts = await getAllPosts();
    const post = posts.find((post) => post.path === fileName);

    if (!post) throw new Error(`${fileName} is not found`);

    const index = posts.indexOf(post);

    const next = index > 0 ? posts[index - 1] : null;
    const prev = index < posts.length - 1 ? posts[index + 1] : null;

    const content = await readFile(filePath, 'utf-8');
    return { ...post, content, next, prev };
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
