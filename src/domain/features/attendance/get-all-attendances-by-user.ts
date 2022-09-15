import { Attendance } from "../../models/attendance";
export interface GetAllAttendancesByUserId {
	getAllByUserId(
		params: GetAllAttendancesByUserId.Params
	): Promise<GetAllAttendancesByUserId.Result>;
}

export namespace GetAllAttendancesByUserId {
	export type Params = {
		userId: string;
	};

	export type Result = Attendance[];
}
