
export interface DeleteAttendance {
	delete(params: DeleteAttendance.Params): Promise<DeleteAttendance.Result>
}

export namespace DeleteAttendance {
	export type Params = {
		patientId: string
		userId: string
		attendanceId: string
	}
	export type Result = boolean | Error
}