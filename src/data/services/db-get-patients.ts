import { GetPatients } from "@/domain/features/patient/get-patients";
import { GetPatientsRepository } from "../contracts/repos/patient-repository";

export class DbGetPatients implements GetPatients{

	constructor(
		private getPatientRepo: GetPatientsRepository
	){}
	async get(params: GetPatients.Params): Promise<GetPatients.Result> {
		const patients = await this.getPatientRepo.get(params)
		return patients
	}

}