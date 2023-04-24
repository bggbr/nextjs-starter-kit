import path from "path";
import { promises as fs } from "fs";

export type Movie = {
    id: string;
    name: string;
    price: number;
    image: string;
};

export async function getMovies(): Promise<Movie[]> {
    const filePath = path.join(process.cwd(), "data", "movies.json");
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | undefined> {
    const movies = await getMovies();
    return movies.find((item) => item.id === id);
}
