import { DeleteAttendance } from "../../../domain/features/attendance/delete-attendance";
import { DeleteAttendanceRepository } from "../../contracts/repos/attendance-repository";
import { GetOnePatient } from "../../../domain/features/patient/get-one-patient";

export class DbDeleteAttendance implements DeleteAttendance {
	constructor(
		private readonly repository: DeleteAttendanceRepository,
		private readonly getOnePatient: GetOnePatient
	) {}

	async delete(
		params: DeleteAttendance.Params
	): Promise<DeleteAttendance.Result> {
		const patient = await this.getOnePatient.getOne({
			patientId: params.patientId,
			userId: params.userId,
		});
		if (patient instanceof Error) return patient;
		return await this.repository.delete({
			id: params.attendanceId,
		});
	}
}
