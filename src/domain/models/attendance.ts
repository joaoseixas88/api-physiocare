export type Attendance = {
	id: string;
	date: Date;
	patientId: string;
	price: number;
	userId: string;
};

export type AddAttendanceDTO = {
	patientId: string;
	userId: string;
	price?: number;
};

export type DeleteAttendanceDTO = {
	patientId: string;
	userId: string;
	attendanceId: string;
};
