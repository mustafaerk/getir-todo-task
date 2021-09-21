import { ActionTypes } from "../../constants/actionTypes";
import { getTodoList } from "../../service/TodoListServices";


export const getTodoListAction = () => async (dispatch) => {
    const response = await getTodoList();
    console.log(response)
    dispatch({
        type: ActionTypes.GET_TODO_LIST,
        payload: response
    })
}


export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};
export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};