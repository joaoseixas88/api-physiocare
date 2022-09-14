import { GetAllAttendances, GetOnePatient } from "@/domain/features";

export class DbGetAllAttendances implements GetAllAttendances {
	constructor(
		private readonly getPatient: GetOnePatient
	) {}
	async get(
		params: GetAllAttendances.Params
	): Promise<GetAllAttendances.Result> {
		const patient = await this.getPatient.getOne(params);
		if (patient instanceof Error) return patient;		
		return patient.attendances;		
	}
}
