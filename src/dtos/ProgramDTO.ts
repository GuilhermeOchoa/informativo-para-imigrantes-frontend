import { TagsDTO } from "./TagsDTO";

export type ProgramDTO = {
	id?: string;
	title?: string;
	description?: string;
	programInitialDate?: string;
	programEndDate?: string;
	language?: string;
	enrollmentInitialDate?: string;
	enrollmentEndDate?: string;
	location?: string;
	file?: string;
	link?: string;
	programType?: string;
	institutionEmail?: string;
	status?: Status;
	tags?: string[];
};

enum Status {
	PENDING = 'PENDING',
	APPROVED = 'APPROVED',
	REJECTED = 'REJECTED'
}

