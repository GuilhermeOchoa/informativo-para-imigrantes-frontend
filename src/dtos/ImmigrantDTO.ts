export type ImmigrantDTO = {
	email: string,
	name: string,
	countryOfOrigin?: string,
	password: string,
}

export type ImmigrantRequestDTO = {
	name: string,
	countryOfOrigin?: string,
	oldPassword: string,
	newPassword: string
}