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
