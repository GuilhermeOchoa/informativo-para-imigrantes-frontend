import { api } from "@services/Api";
import { InstitutionDTO } from "@dtos/InstitutionDTO";

export function postInstitution(institutionDTO: InstitutionDTO) {
	console.log(institutionDTO)
	return api.post(`/institutions`, institutionDTO);
}

export function getmmigrant() {
	return api.get('/institutions');
}

export function getInstitutionsByStatus(status: String){
    return api.get(`/institutions?=${status}`);
}

export function getInstituitionByEmail( email: String){
	return api.get(`/instituitions/${email}`);
}