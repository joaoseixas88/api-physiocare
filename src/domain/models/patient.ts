import { Attendance } from "./attendance"

export type Patient = {
	id: string
	name: string
	age: number
	price: number
	created_at: Date
	weekDays: WeekDay[]
	attendances: Attendance[]
}

export type AddPatientDTO = {
	userId: string
	homecareId: string
	name: string
	age: number
	price: number
	weekDays: WeekDay[]
}

export type WeekDay = 'sunday' | 'monday'| 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'


