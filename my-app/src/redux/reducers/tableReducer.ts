import { Customer } from "@/service/customer";
import { produce } from "immer";

interface customerTable {
    customers: Customer[];
    filteredCustomer: Customer[];
    columns: string[];
    selectedCustomer: Customer | {};
    isModalOpen: boolean;
    currPageNumber: number;
    totalPageCount: number;
    rowCountPerPage: number;
}

const initialState: customerTable = {
    customers: [],
    filteredCustomer: [],
    columns: [],
    selectedCustomer: {},
    isModalOpen: false,
    currPageNumber: 1,
    totalPageCount: 1,
    rowCountPerPage: 4,
};

export type TableAction =
    | { type: "INIT"; payload: { customers: Customer[]; columns: string[] } }
    | { type: "ADD"; payload: Customer }
    | { type: "EDIT"; payload: Customer }
    | { type: "DELETE"; payload: Customer }
    | { type: "MODAL_STATE"; payload: boolean }
    | { type: "SELECTED_CUSTOMER"; payload: Customer }
    | { type: "SET_CURRENT_PAGE"; payload: number | any }
    | { type: "SET_TOTAL_PAGE_LENGTH"; payload: number | any }
    | { type: "SET_FILTERED_CUSTOMER"; payload: Customer[] };

const tableReducer = (state = initialState, action: TableAction): customerTable => {
    return produce(state, (draft: customerTable) => {
        const { type, payload } = action;
        switch (type) {
            case "INIT": {
                const { customers, columns } = payload;
                draft.customers = customers;
                draft.columns = columns;
                break;
            }
            case "ADD": {
                draft.customers.push(payload);
                break;
            }
            case "EDIT": {
                const index = draft.customers.findIndex((item) => item.id === payload.id);
                if (index !== -1) {
                    draft.customers[index] = { ...draft.customers[index], ...payload };
                }
                break;
            }
            case "DELETE": {
                draft.customers = draft.customers.filter((item) => item.id !== payload.id);
                break;
            }
            case "MODAL_STATE": {
                draft.isModalOpen = payload;
                break;
            }
            case "SELECTED_CUSTOMER": {
                draft.selectedCustomer = payload;
                break;
            }
            case "SET_TOTAL_PAGE_LENGTH": {
                const { totalLength, rowCountPerPage } = payload;
                draft.totalPageCount = Math.ceil(totalLength / rowCountPerPage);
                break;
            }
            case "SET_CURRENT_PAGE": {
                const { pageNum } = payload;
                draft.currPageNumber = pageNum;
                break;
            }
            case "SET_FILTERED_CUSTOMER": {
                draft.filteredCustomer = payload;
            }
            default:
                break;
        }
    });
};

export default tableReducer;
