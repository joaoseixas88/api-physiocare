import { Attendance } from "@/domain/models";

export interface AddAttendanceRepository {
	add(
		params: AddAttendanceRepository.Params
	): Promise<AddAttendanceRepository.Result>;
}

export namespace AddAttendanceRepository {
	export type Params = {
		id: string;
		patientId: string;
		userId: string;
		price: number;
	};

	export type Result = boolean;
}

export interface DeleteAttendanceRepository {
	delete(
		params: DeleteAttendanceRepository.Params
	): Promise<DeleteAttendanceRepository.Result>;
}
export namespace DeleteAttendanceRepository {
	export type Params = {
		id: string;
	};
	export type Result = boolean;
}

export interface GetOneAttendanceRepository {
	getOne(
		params: GetOneAttendanceRepository.Params
	): Promise<GetOneAttendanceRepository.Result>;
}
export namespace GetOneAttendanceRepository {
	export type Params = {
		id: string;
	};
	export type Result = Attendance | null;
}
export interface GetAllAttendancesByPatientIdRepository {
	getAllByPatient(
		params: GetAllAttendancesByPatientIdRepository.Params
	): Promise<GetAllAttendancesByPatientIdRepository.Result>;
}
export namespace GetAllAttendancesByPatientIdRepository {
	export type Params = {
		patientId: string;
		startDate?: Date;
		endDate?: Date;
	};
	export type Result = Attendance[] | null;
}

export interface GetAllAttendancesByUserIdRepository {
	getAllByUser(
		params: GetAllAttendancesByUserIdRepository.Params
	): Promise<GetAllAttendancesByUserIdRepository.Result>;
}
export namespace GetAllAttendancesByUserIdRepository {
	export type Params = {
		userId: string;
		startDate?: Date;
		endDate?: Date;
	};
	export type Result = Attendance[] | null;
}
