import { getCustomers } from "@/service/customer";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
    const customers = await getCustomers();
    return NextResponse.json(customers);
}
