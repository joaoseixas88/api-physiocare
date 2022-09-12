import { Patient } from "./patient"

export interface User{
	id: string
	name: string
	email: string
	password: string	
	created_at: Date
	patients: Patient[]
}

export interface FindUserDTO {
	email: string 
}

export type AddUserDTO = {
	email: string;
	name: string;
	password: string
	passwordConfirmation: string
	userId?: string
}



