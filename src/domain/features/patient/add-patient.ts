import { Patient } from '@/domain/models'

export interface AddPatient{
	add(params: AddPatient.Params): Promise<AddPatient.Result>
}

export namespace AddPatient{
	export type Params = Omit<Patient, "id" | "created_at" | "attendances">
	export type Result = boolean
}


