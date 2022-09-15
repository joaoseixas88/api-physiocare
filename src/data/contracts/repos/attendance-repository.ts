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
		userId: string
		createdAt: Date;
	};

	export type Result = boolean;
}

export interface DeleteAttendanceRepository {
	delete(params: DeleteAttendanceRepository.Params): Promise<DeleteAttendanceRepository.Result>
}
export namespace DeleteAttendanceRepository {
	export type Params = {
		id: string
	}
	export type Result = boolean 
}

export interface GetOneAttendanceRepository {
	getOne(params: GetOneAttendanceRepository.Params): Promise<GetOneAttendanceRepository.Result>
}
export namespace GetOneAttendanceRepository {
	export type Params = {
		id: string
	}
	export type Result = Attendance | null 
}
