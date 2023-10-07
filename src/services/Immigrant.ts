import { api } from "@services/Api";
import { ImmigrantDTO } from "@dtos/ImmigrantDTO";

export function postImmigrant(immigrantsUser: ImmigrantDTO) {
	return api.post(`/immigrants`, immigrantsUser);
}

export function getmmigrant() {
	return api.get('/immigrants');
}