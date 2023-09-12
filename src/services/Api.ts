import { AppError } from "@utils/AppError";
import axios from "axios";

const api = axios.create({
    baseURL: "http://10.0.2.2:8080",
    timeout: 6000,
});

api.interceptors.response.use(response => response, error => {

    if (error.response && error.response.data && error.response.data.message) { //Quando tem exception tratada no backend que vai retonrar data e message
        console.log(error);
        return Promise.reject(new AppError(error.response.data.message));
    } else if (error.message) { //Erro do axios
        console.log(error.message)
        return Promise.reject(new AppError(error.message));
    } else { //Erro desconhecido
        console.log(error);
        return Promise.reject(new AppError("Erro desconhecido."));
    }

});

export { api };