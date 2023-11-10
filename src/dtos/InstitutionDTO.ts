export type InstitutionDTO = {
	institutionName?: string;
	email?: string;
	cnpj?: string;
	type?: string;
	registrantName?: string;
	registrantCpf?: string;
	registrantRole?: string;
	phone?: string;
	attachment?: string;
	password?: string;
	status?: Status;
};
export enum Status {
	PENDING = 'PENDING',
	APPROVED = 'APPROVED',
	REJECTED = 'REJECTED'
}