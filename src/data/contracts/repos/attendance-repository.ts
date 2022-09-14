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


export interface DeleteAttendanceRepository {
	delete(params: DeleteAttendanceRepository.Params): Promise<DeleteAttendanceRepository.Result>
}
export namespace DeleteAttendanceRepository {
	export type Params = {
		id: string
	}
	export type Result = boolean 
}

