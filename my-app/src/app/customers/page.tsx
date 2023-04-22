import Table from "@/components/Table";
import { Customer, getCustomers, getColumns } from "@/service/customer";

export default async function page() {
    const customers: Customer[] = await getCustomers();
    const columns = await getColumns();

    return (
        <div className='mx-auto'>
            <Table data={customers} columns={columns} />
        </div>
    );
}
