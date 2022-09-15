import { Attendance } from "@/domain/models";

export interface GetAllAttendancesById  {
	get(params: GetAllAttendancesById.Params): Promise<GetAllAttendancesById.Result>;
}

export namespace GetAllAttendancesById {
	export type Params = {
		userId: string;
		patientId: string;
	};
	export type Result = Attendance[] | Error;
}
