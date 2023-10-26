export type ProgramDTO = {
	id: string;
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
	tags?: {label: string; value: string}[];
};
enum Status {
	PENDENTE = 'PENDENTE',
	ACEITO = 'ACEITO',
	RECUSADO = 'RECUSADO'
   }
   
   enum ProgramType {
	SUPERIOR = 'Ensino Superior',
	BASIC = 'Ensino Basico',
	ASSISTANCE = 'Programas de auxílio'
   }
   