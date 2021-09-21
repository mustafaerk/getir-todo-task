import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/mustafaerk/getir-be/',
    responseType: "json"
});

export default api;

