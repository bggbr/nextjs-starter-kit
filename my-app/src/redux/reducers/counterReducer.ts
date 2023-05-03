interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0,
};

type CounterAction = { type: "INCREMENT" } | { type: "DECREMENT" };

const counterReducer = (state = initialState, action: CounterAction): CounterState => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1,
            };
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};

export const increment = () => ({ type: "INCREMENT" });
export const decrement = () => ({ type: "DECREMENT" });

export default counterReducer;
