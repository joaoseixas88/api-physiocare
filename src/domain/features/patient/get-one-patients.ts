import { Patient } from "@/domain/models";

export interface GetOnePatient {
	getOne(params: GetOnePatient.Params): Promise<GetOnePatient.Result>;
}

export namespace GetOnePatient {
	export type Params = {
		userId: string;
		patientId: string;
	};
	export type Result = Patient;
}
