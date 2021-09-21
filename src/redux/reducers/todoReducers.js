import { ActionTypes } from "../../constants/actionTypes";

const intialState = {
    todoList: [],
    currentTodo: {}
};

export const todosReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_TODO_LIST:
            console.log(payload)
            return { ...state, todoList: payload };
        default:
            return state;
    }
};

