import { combineReducers } from "redux";
import counterReducer from "../reducers/counterReducer";
import todoReducer from "../reducers/todoReducer";
import tableReducer from "../reducers/tableReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    table: tableReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
