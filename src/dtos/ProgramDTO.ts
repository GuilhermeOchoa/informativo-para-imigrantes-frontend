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
	programType?: ProgramType;
	institutionEmail?: string;
	status?: Status;
	tags?: string[];
};
enum Status {
	PENDING = 'PENDING',
	APPROVED = 'APPROVED',
	REJECTED = 'REJECTED'
   }
   
   enum ProgramType {
	SUPERIOR = 'Ensino Superior',
	BASIC = 'Ensino Basico',
	ASSISTANCE = 'Programas de auxílio'
   }
   