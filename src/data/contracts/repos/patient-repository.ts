import { Patient } from "@/domain/models";

export interface AddPatientRepository {
	add(
		params: AddPatientRepository.Params
	): Promise<AddPatientRepository.Result>;
}

export namespace AddPatientRepository {
	export type Params = Omit<Patient, "attendances"> & { userId: string };

	export type Result = boolean;
}
