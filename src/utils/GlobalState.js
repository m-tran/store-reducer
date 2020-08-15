import React, { useReducer, useContext, createContext } from "react";

const TodoContext = createContext();

const { Provider } = TodoContext;

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return [
                ...state, 
                { id: state.length * Math.random(), name: action.name },
            ];

        case "remove":
            return state.filter((_, index) => {
                return index !== action.index;
            });

        case "prioritize":
            return state.map((item, index) => {
                if(index === action.index) {
                    return { ...item, priority: !item.priority };
                }
                return item;
            });

        default:
            return state;
    }
}

// lets us not write Provider.value
// custom Provider sends out state & dispatch
// makes store available to any nested components
function TodoProvider({ ...props}) {
    // dispatch is how we're going use the reducer 
    // in the state of our components
    const [state, dispatch] = useReducer(reducer, []);
    return <Provider value={[state, dispatch,]} {...props} />
}

function useTodoContext() {
    return useContext(TodoContext);
}

export { TodoProvider, useTodoContext };