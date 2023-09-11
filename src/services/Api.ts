import { AppError } from "@utils/AppError";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080"
})

api.interceptors.response.use(response => response, error => {
    //se tiver execption no banco entra no if
    if (error.response && error.response.data) {
        return Promise.reject(new AppError(error.response.data.message));
    } else {
        return Promise.reject(error);
    }
});

export { api };