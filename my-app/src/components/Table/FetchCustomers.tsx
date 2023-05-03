import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function FetchCustomers() {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            const customers = await fetch("/api/customers");
            const customersData = await customers.json();
            const columns = await fetch("/api/customers/columns");
            const columnsData = await columns.json();
            dispatch({
                type: "INIT",
                payload: {
                    customers: customersData,
                    columns: columnsData,
                },
            });
        };
        fetchData();
    }, [dispatch]);
    return <div>FetchCustomers</div>;
}
