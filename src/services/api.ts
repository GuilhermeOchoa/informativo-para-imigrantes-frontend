import { AppError } from '@utils/AppError';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 6000,
});

api.interceptors.response.use(response => response, error => {

    if (error.response && error.response.data && error.response.data.message) {
        console.log(error);
        return Promise.reject(new AppError(error.response.data.message));
    } else if (error.message) {
        console.log(error.message);
        return Promise.reject(new AppError(error.message));
    } else {
        console.log(error);
        return Promise.reject(new AppError("Erro desconhecido."));
    }

});

export { api };