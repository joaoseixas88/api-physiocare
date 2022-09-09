import { Attendance } from "./attendance"

export type Patient = {
	id: string
	name: string
	age: number
	price: number
	created_at: Date
	weekDays: string[]
	attendances: Attendance[]
}

export type AddPatientDTO = {
	name: string
	age: number
	price: number
	weekDays: string[]
}




