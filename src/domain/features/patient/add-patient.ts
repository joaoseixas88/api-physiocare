import { AddPatientDTO, Patient } from '@/domain/models'

export interface AddPatient{
	add(params: AddPatient.Params): Promise<AddPatient.Result>
}

export namespace AddPatient{
	export type Params = AddPatientDTO
	export type Result = boolean
}


