import { GetOnePatientRepository } from "@/data/contracts/repos/patient-repository";
import { GetOnePatient } from "@/domain/features/patient/get-one-patients";
import { Patient } from "@/domain/models";

export class DbGetOnePatient implements GetOnePatient {
	constructor(private readonly getOnePatientRepo: GetOnePatientRepository) {}
	async getOne(params: GetOnePatient.Params): Promise<Patient> {
		throw new Error("Method not implemented.");
	}
}
