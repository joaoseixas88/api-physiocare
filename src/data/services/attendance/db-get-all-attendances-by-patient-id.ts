import { GetAllAttendancesByPatientIdRepository } from "@/data/contracts";
import { DatesAdapter } from "@/data/contracts/dates/format-date";
import { GetAllAttendancesByPatientId, GetOnePatient } from "@/domain/features";
import { NotAuthorizedException, NotFoundException } from "@/presentation/errors";

export class DbGetAllAttendancesByPatientId implements GetAllAttendancesByPatientId {
	constructor(
		private readonly getAllByPatientRepo: GetAllAttendancesByPatientIdRepository,
		private readonly dayJsAdapter: DatesAdapter
	) {}
	async get(
		params: GetAllAttendancesByPatientId.Params
	): Promise<GetAllAttendancesByPatientId.Result> {

		const startDate = params.startDate ? this.dayJsAdapter.startOf(params.startDate) : undefined
		const endDate = params.endDate ? this.dayJsAdapter.startOf(params.endDate) : undefined
		if(startDate instanceof Error) return startDate
		if(endDate instanceof Error) return endDate

		const attendances = await this.getAllByPatientRepo.getAllByPatient({
			patientId: params.patientId,
			startDate,
			endDate
		})
		if(!attendances) return new NotFoundException('Attendance')
		for(const attendance of attendances){
			if(attendance.userId !== params.userId)
			return new NotAuthorizedException()
		}	
		return attendances;		
	}
}
