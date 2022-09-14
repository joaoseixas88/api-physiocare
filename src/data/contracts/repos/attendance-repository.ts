import { Attendance } from "@/domain/models";

export interface AddAttendanceRepository {
	add(
		params: AddAttendanceRepository.Params
	): Promise<AddAttendanceRepository.Result>;
}

export namespace AddAttendanceRepository {
	export type Params = {
		id: string
		patientId: string;
		createdAt: Date;
	};

	export type Result = boolean;
}


// export interface GetAllAttendancesRepository {
// 	getAll(params: GetAllAttendancesRepository.Params): Promise<GetAllAttendancesRepository.Result>
// }
// export namespace GetAllAttendancesRepository {
// 	export type Params = {
// 		userId: string
// 		patientId: string
// 	}
// 	export type Result = Attendance[] | undefined
// }

