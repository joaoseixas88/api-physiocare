import { GetPatientsRepository } from "@/data/contracts/repos/patient-repository";
import { GetPatients } from "@/domain/features/patient/get-patients";

export class DbGetPatients implements GetPatients{

	constructor(
		private getPatientRepo: GetPatientsRepository
	){}
	async get(params: GetPatients.Params): Promise<GetPatients.Result> {
		const patients = await this.getPatientRepo.get(params)
		return patients
	}

}