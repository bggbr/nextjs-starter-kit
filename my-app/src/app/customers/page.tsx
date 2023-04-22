import Table from "@/components/Table";
import { getCustomers, getColumns } from "@/service/customer";

export default async function page() {
    const customers = await getCustomers();
    const columns = await getColumns();

    return (
        <div>
            <Table customers={customers} />
        </div>
    );
}
