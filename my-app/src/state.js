import { createContext } from "react";
import { produce } from "immer";

export const StateContext = createContext();
export const initialState = {
    todos: [
        {
            id: 1,
            text: "Learn about React",
            isCompleted: true,
        },
    ],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return produce(state, (draft) => {
                draft.todos.push({
                    id: Date.now(),
                    text: action.payload,
                    isCompleted: false,
                });
            });
        case "TOGGLE_TODO":
            return produce(state, (draft) => {
                const todo = draft.todos.find((todo) => todo.id === action.payload);
                todo.isCompleted = !todo.isCompleted;
            });
        case "DELETE_TODO":
            return produce(state, (draft) => {
                const index = draft.todos.findIndex((todo) => todo.id === action.payload);
                draft.todos.splice(index, 1);
            });
        default:
            return state;
    }
};
