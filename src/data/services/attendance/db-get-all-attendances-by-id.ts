import { GetAllAttendancesById, GetOnePatient } from "@/domain/features";

export class DbGetAllAttendancesById implements GetAllAttendancesById {
	constructor(
		private readonly getPatient: GetOnePatient
	) {}
	async get(
		params: GetAllAttendancesById.Params
	): Promise<GetAllAttendancesById.Result> {
		const patient = await this.getPatient.getOne(params);
		if (patient instanceof Error) return patient;		
		return patient.attendances;		
	}
}
