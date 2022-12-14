import { GetOnePatientRepository } from "@/data/contracts/repos/patient-repository";
import { NotFoundException } from "@/presentation/errors";
import { NotAuthorizedException } from "@/presentation/errors/not-authorized-error";
import { GetOnePatient } from '@/domain/features';

export class DbGetOnePatient implements GetOnePatient {
	constructor(private readonly getOnePatientRepo: GetOnePatientRepository) {}
	async getOne(params: GetOnePatient.Params): Promise<GetOnePatient.Result> {
		const patient = await this.getOnePatientRepo.getOne(params)
		if(!patient){
			return new NotFoundException('patient')
		}
		
		if(patient.userId !== params.userId){
			return new NotAuthorizedException()
		}
		return patient
	}
}
