import { Attendance } from "@/domain/models";

export interface GetAllAttendances {
	get(params: GetAllAttendances.Params): Promise<GetAllAttendances.Result>;
}

export namespace GetAllAttendances {
	export type Params = {
		userId: string;
		patientId: string;
	};
	export type Result = Attendance[] | Error;
}
