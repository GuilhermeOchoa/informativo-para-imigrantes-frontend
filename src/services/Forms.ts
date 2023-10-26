import { ProgramDTO } from "@dtos/ProgramDTO";
import { api } from "@services/Api";

export function postProgramForm(program: ProgramDTO) {
	return api.post(`/programs`, program);
};
