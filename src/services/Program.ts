import { api } from "@services/Api";

export function getAllProgram(email: String) {
	console.log(email)
 return api.get(`/programs?institutionEmail=${email}`);
};

export function getProgramsByStatus(status: String){
    return api.get(`/programs?status=${status}`);
};
