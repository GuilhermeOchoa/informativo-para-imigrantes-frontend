import { api } from "@services/Api";

export function login(email: string, password: string) {
    console.log(email, password)
    return api.post(`/auth/login`, { email, password });
}
