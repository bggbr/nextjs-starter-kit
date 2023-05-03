import { getColumns } from "@/service/customer";
import { NextResponse } from "next/server";

export async function GET() {
    const columns = await getColumns();
    return NextResponse.json(columns);
}
