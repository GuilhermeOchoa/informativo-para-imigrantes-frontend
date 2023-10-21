export type ProgramDTO = {
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
	programType?: number;
	institutionEmail?: number;
	status?: string;
	tags?: {label: string; value: string}[];
};
