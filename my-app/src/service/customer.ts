import path from "path";
import { readFile } from "fs/promises";

export type Customer = {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    age: number;
};

export async function getCustomers(): Promise<Customer[]> {
    const filePath = path.join(process.cwd(), "data", "customers.json");
    const data = await readFile(filePath, { encoding: "utf-8" });
    const customers = await JSON.parse(data);
    return customers;
}

export async function getColumns(): Promise<string[]> {
    const customers: Customer[] = await getCustomers();
    const columns = customers.reduce<string[]>((prev, curr) => {
        Object.keys(curr).forEach((customerKey) => {
            if (!prev.includes(customerKey)) {
                prev.push(customerKey);
            }
        });
        return prev;
    }, []);
    return columns;
}
