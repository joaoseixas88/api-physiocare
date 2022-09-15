import { GetAllAttendancesByPatientIdRepository } from "@/data/contracts";
import { GetAllAttendancesByPatientId, GetOnePatient } from "@/domain/features";
import { NotAuthorizedException, NotFoundException } from "@/presentation/errors";

export class DbGetAllAttendancesByPatientId implements GetAllAttendancesByPatientId {
	constructor(
		private readonly getAllByPatientRepo: GetAllAttendancesByPatientIdRepository
	) {}
	async get(
		params: GetAllAttendancesByPatientId.Params
	): Promise<GetAllAttendancesByPatientId.Result> {

		const attendances = await this.getAllByPatientRepo.getAllByPatient({
			patientId: params.patientId
		})
		if(!attendances) return new NotFoundException('Attendance')
		for(const attendance of attendances){
			if(attendance.userId !== params.userId)
			return new NotAuthorizedException()
		}	
		return attendances;		
	}
}
