import { api } from "@services/Api";

export function getAllProgram(email: String) {
 return api.get(`/programs?=${email}`);
};

export function getProgramsByStatus(status: String){
    return api.get(`/programs?=${status}`);
};
   
