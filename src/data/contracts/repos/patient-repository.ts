import { FindPatients } from "@/domain/features/patient/find-patients";
import { Patient } from "@/domain/models";

export interface AddPatientRepository {
	add(
		params: AddPatientRepository.Params
	): Promise<AddPatientRepository.Result>;
}

export namespace AddPatientRepository {
	export type Params = Omit<Patient, "attendances" | "created_at"> & {
		userId: string;
		homecareId: string;
	};

	export type Result = boolean;
}

export interface GetPatientsRepository {
	get(
		params: GetPatientsRepository.Params
	): Promise<GetPatientsRepository.Result>;
}
export namespace GetPatientsRepository {
	export type Params = {
		userId: string;
	};

	export type Result = Patient[];
}

export interface GetOnePatientRepository {
	getOne(
		params: GetOnePatientRepository.Params
	): Promise<GetOnePatientRepository.Result>;
}

export namespace GetOnePatientRepository {
	export type Params = {
		userId: string;
		patientId: string;
	};

	export type Result = (Patient & { userId: string }) | undefined;
}

export interface FindPatientsRepository {
	findMany(
		params: FindPatientsRepository.Params
	): Promise<FindPatientsRepository.Result>;
}

export namespace FindPatientsRepository {
	export type Params = {
		userId: string;
		name?: string;
		age?: number;
		price?: number;
	};
	export type Result = Omit<Patient, "attendances">[];
}

export interface UpdatePatientRepository {
	update(
		params: UpdatePatientRepository.Params
	): Promise<UpdatePatientRepository.Result>;
}

export namespace UpdatePatientRepository {
	export type Params = {
		patientId: string;
		name?: string;
		age?: number;
		price?: number;
	};
	export type Result = boolean;
}
