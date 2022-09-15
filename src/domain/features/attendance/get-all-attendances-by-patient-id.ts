import { Attendance } from "@/domain/models";

export interface GetAllAttendancesByPatientId  {
	get(params: GetAllAttendancesByPatientId.Params): Promise<GetAllAttendancesByPatientId.Result>;
}

export namespace GetAllAttendancesByPatientId {
	export type Params = {
		userId: string;
		patientId: string;
	};
	export type Result = Attendance[] | Error;
}
