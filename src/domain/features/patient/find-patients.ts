import { Patient } from "@/domain/models"


export interface FindPatients {
	find(params: FindPatients.Params): Promise<FindPatients.Result>
}

export namespace FindPatients {

	export type Params = {
		userId: string
		name?: string
		age?: string
		price?: string
	}

	export type Result = Omit<Patient, "attendances">[]
}