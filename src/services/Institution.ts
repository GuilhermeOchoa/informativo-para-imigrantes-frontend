import { api } from "@services/Api";
import { InstitutionDTO } from "@dtos/InstitutionDTO";

export function postInstitution(institutionDTO: InstitutionDTO) {
	console.log(institutionDTO)
	return api.post(`/institutions`, institutionDTO);
}

export function getmmigrant() {
	return api.get('/institutions');
}