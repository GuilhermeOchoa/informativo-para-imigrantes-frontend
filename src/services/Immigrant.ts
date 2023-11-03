import { api } from "@services/Api";
import { ImmigrantDTO } from "@dtos/ImmigrantDTO";

type immigrantRequestDTO = {
	name: string,
	countryOfOrigin?: string,
	password: string,
}

export function postImmigrant(immigrantsUser: ImmigrantDTO) {
	return api.post(`/immigrants`, immigrantsUser);
}

export function getImmigrant(email: string) {
	return api.get('/immigrants/' + email);
}

export function updateImmigrant(email: string, user: immigrantRequestDTO) {
	return api.patch('/immigrants/' + email, user);
}