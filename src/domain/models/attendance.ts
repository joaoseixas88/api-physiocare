export type Attendance = {
	id: string
  created_at: Date
	patientId: string
}

export type AddAttendanceDTO = {
	patientId: string
	userId: string
}

export type DeleteAttendanceDTO = {
	patientId: string
	userId: string
	attendanceId: string
}