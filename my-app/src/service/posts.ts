import path from "path";
import { promises as fs } from "fs";

export type Post = {
    title: string;
    description: string;
    date: Date;
    category: string;
    path: string;
    featured: boolean;
};

export async function getFeaturedPosts(): Promise<Post[]> {
    return getAllPosts() //
        .then((posts) => posts.filter((post) => post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
    const filePath = path.join(process.cwd(), "data", "posts.json");
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
}

export async function getPost(title: string): Promise<Post | undefined> {
    const posts = await getAllPosts();
    return posts.find((item) => item.title === title);
}
