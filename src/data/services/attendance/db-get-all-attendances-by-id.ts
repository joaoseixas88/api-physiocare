import { GetAllAttendancesByPatientId, GetOnePatient } from "@/domain/features";

export class DbGetAllAttendancesByPatientId implements GetAllAttendancesByPatientId {
	constructor(
		private readonly getPatient: GetOnePatient
	) {}
	async get(
		params: GetAllAttendancesByPatientId.Params
	): Promise<GetAllAttendancesByPatientId.Result> {
		const patient = await this.getPatient.getOne(params);
		if (patient instanceof Error) return patient;		
		return patient.attendances;		
	}
}
