import { getCustomers, addCustomer } from '@/service/customer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const customer = await request.json();
    const newCustomer = await addCustomer(customer);

    return NextResponse.json(newCustomer);
}

export async function GET(request: Request) {
    const customers = await getCustomers();

    return NextResponse.json(customers);
}
