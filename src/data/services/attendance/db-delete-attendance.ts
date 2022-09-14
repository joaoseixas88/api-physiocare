import { DeleteAttendance, GetOnePatient } from "@/domain/features";
import { NotAuthorizedException, NotFoundException } from '@/presentation/errors';
import {
	GetOneAttendanceRepository,
	DeleteAttendanceRepository,
} from "@/data/contracts/repos";

export class DbDeleteAttendance implements DeleteAttendance {
	constructor(
		private readonly repository: DeleteAttendanceRepository & GetOneAttendanceRepository,
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
		const attendance = await this.repository.getOne({
			id: params.attendanceId
		})	
		if(attendance && attendance.patientId !== params.patientId) {
			return new NotFoundException('Attendance')	
		}	
			
		return await this.repository.delete({
			id: params.attendanceId,
		});
	}
}
