import api from '../utils/api';

export const getTodoList = async () => {
    const response = await api.get('todos');
    return response.data;
};

export const getTodoInfo = async (id) => {
    const response = await api.get(`todos/${id}`);
    return response.data;
};

export const createTodo = async (payload) => {
    const response = await api.post('todos', payload);
    return response.data;
};

export const editTodo = async (id, payload) => {
    const response = await api.put(`todos/${id}`, payload);
    return response.data;
};
