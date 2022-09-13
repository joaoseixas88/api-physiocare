import { AddPatient } from "@/domain/features/patient/add-patient";
import { Patient } from "@/domain/models";
import { UuidGenerator } from "@/data/contracts/cryptography";
import { AddPatientRepository } from "../../contracts/repos/patient-repository";

export class DbAddPatient implements AddPatient {
	constructor(
		private readonly addPatientRepository: AddPatientRepository,
		private readonly uuidGenerator: UuidGenerator
	) {}
	async add(params: AddPatient.Params): Promise<boolean> {
		const { age, name, price, weekDays, userId } = params;
		const id = this.uuidGenerator.generate();
		const patient: AddPatientRepository.Params = {
			age,
			name,
			price,
			weekDays,
			created_at: new Date(),
			id,
			userId
		};
		const result = this.addPatientRepository.add(patient);
		return result;
	}
}
