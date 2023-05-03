import { createStore } from "redux";
import rootReducer from "./reducers.ts";

const store = createStore(rootReducer);

export default store;
