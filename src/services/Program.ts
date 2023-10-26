import { api } from "@services/Api";

export function getAllProgram(email: String) {
 return api.get(`/program?=${email}`);
};
