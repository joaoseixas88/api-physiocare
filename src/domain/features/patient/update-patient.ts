import { WeekDay } from "@/domain/models";

export interface UpdatePatient {
	update(params: UpdatePatient.Params): Promise<UpdatePatient.Result>;
}

export namespace UpdatePatient {
	export type Params = {
		userId: string;
		patientId: string;
		price?: number;
		age?: number;
		weekDays?: WeekDay[];
	};

	export type Result = boolean | Error;
}
