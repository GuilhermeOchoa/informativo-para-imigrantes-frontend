export type ImmigrantDTO = {
	email: string,
	name: string,
	countryOfOrigin?: string,
	password: string,
}

export type ImmigrantRequestDTO = {
	name: string,
	countryOfOrigin?: string,
	passwordOld: string,
	passwordNew: string
}