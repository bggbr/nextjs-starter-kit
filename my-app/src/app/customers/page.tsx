import Table from "@/components/Table";
import { getCustomers } from "@/service/customer";

export default async function page() {
    const customers = await getCustomers();

    return (
        <div>
            <Table customers={customers} />
        </div>
    );
}
