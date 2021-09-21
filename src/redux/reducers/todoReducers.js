import { ActionTypes } from "../../constants/actionTypes";

const intialState = {
    todoList: [],
    currentTodo: {}
};

export const todosReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_TODO_LIST:
            return { ...state, todoList: payload };
        case ActionTypes.GET_TODO_INFO:
            return { ...state, currentTodo: payload };
        default:
            return state;
    }
};

