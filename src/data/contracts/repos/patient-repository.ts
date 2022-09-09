import { Patient } from "@/domain/models";

export interface AddPatientRepository {
	add(params: AddPatientRepository.Params): Promise<AddPatientRepository.Result>;
}

export namespace AddPatientRepository {
	export type Params = Patient;

	export type Result = boolean;
}
