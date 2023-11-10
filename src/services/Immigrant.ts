import { api } from "@services/Api";
import { ImmigrantDTO, ImmigrantRequestDTO } from "@dtos/ImmigrantDTO";

export function postImmigrant(immigrantsUser: ImmigrantDTO) {
	return api.post(`/immigrants`, immigrantsUser);
}

export function getImmigrant(email: string) {
	return api.get('/immigrants/' + email);
}

export function updateImmigrant(email: string, user: ImmigrantRequestDTO) {
	console.log(email)
	console.log(user)
	return api.patch('/immigrants/' + email, user);
}

export function deleteImmigrant(email: string) {
	return api.delete('/immigrants/' + email);
}