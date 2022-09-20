export interface AddAttendance {
	add(params: AddAttendance.Params): Promise<AddAttendance.Result>;
}

export namespace AddAttendance {
	export type Params = {
		userId: string;
		patientId: string;
		price?: number;
	};

	export type Result = Boolean | Error;
}
