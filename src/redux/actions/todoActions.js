import { ActionTypes } from "../../constants/actionTypes";
import { getTodoList, getTodoInfo, createTodo, editTodo } from "../../service/TodoListServices";


export const getTodoListAction = () => async (dispatch) => {
    const response = await getTodoList();
    dispatch({
        type: ActionTypes.GET_TODO_LIST,
        payload: response
    })
}

export const getTodoInfoAction = (id) => async (dispatch) => {
    const response = await getTodoInfo(id);
    dispatch({
        type: ActionTypes.GET_TODO_INFO,
        payload: response
    })
}

export const createTodoAction = (id, handleCallback) => async (dispatch) => {
    const response = await createTodo(id);
    await dispatch({
        type: ActionTypes.CREATE_TODO,
        payload: response
    })
    handleCallback();
}

export const updateTodoAction = (id, payload, handleCallback) => async (dispatch) => {
    const response = await editTodo(id, payload);
    await dispatch({
        type: ActionTypes.UPDATE_TODO,
        payload: response
    })
    handleCallback();
}
