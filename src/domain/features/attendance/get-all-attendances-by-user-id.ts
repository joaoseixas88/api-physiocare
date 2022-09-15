import { Attendance } from "../../models/attendance";
export interface GetAllAttendancesByUserId {
	getAllByUserId(
		params: GetAllAttendancesByUserId.Params
	): Promise<GetAllAttendancesByUserId.Result>;
}

export namespace GetAllAttendancesByUserId {
	export type Params = {
		userId: string;
		startDate?: Date
		endDate?: Date
	};

	export type Result = Attendance[] | Error
}
