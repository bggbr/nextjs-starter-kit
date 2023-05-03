import { v4 as uuidv4 } from "uuid";

interface Task {
    id: string;
    text: string;
    onCompleted: boolean;
}

const initialState: Task[] = [];

export type TodoAction =
    | { type: "ADD"; payload: { id: string; text: string; onCompleted: boolean } }
    | { type: "EDIT"; payload: { id: string; text: string; onCompleted: boolean } }
    | { type: "DELETE"; payload: { id: string; text: string; onCompleted: boolean } };

function createNewTodo(task: Task, payload: any): Task {
    return { ...task, ...payload };
}

const todoReducer = (state = initialState, action: TodoAction): Task[] => {
    const { type, payload } = action;

    switch (type) {
        case "ADD": {
            const task = {
                id: uuidv4(),
                text: payload.text,
                onCompleted: false,
            };
            const newTasks = [...state, task];
            return newTasks;
        }
        case "EDIT": {
            const todoIndex = state.findIndex((todo) => todo.id === payload.id);
            if (todoIndex >= 0) {
                const newTodo = createNewTodo(state[todoIndex], payload);
                const newTasks = [...state];
                newTasks[todoIndex] = newTodo;
                return newTasks;
            } else {
                return state;
            }
        }
        case "DELETE": {
            const { id } = payload;
            const filteredTasks = state.filter((todo) => todo.id !== id);
            return filteredTasks;
        }
        default:
            return state;
    }
};

export const addTask = () => {};

export default todoReducer;
