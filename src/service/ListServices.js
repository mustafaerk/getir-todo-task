import api from '../utils/api';

export const getTodoList = async () => {
    const response = await api.get('todo');
    return response.data;
};

export const getTodoInfo = async (id) => {
    const response = await api.get(`todo/${id}`);
    return response.data;
};

export const createTodo = async (payload) => {
    const response = await api.post('todo', payload);
    return response.data;
};

export const editTodo = async (id, payload) => {
    const response = await api.put(`todo/${id}`, payload);
    return response.data;
};
