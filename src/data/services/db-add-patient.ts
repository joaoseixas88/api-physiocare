import { AddPatient } from "@/domain/features/patient/add-patient";
import { Patient } from "@/domain/models";
import { UuidGenerator } from "@/data/contracts/cryptography";
import { AddPatientRepository } from "../contracts/repos/patient-repository";

export class DbAddPatient implements AddPatient {
	constructor(
		private readonly addPatientRepository: AddPatientRepository,
		private readonly uuidGenerator: UuidGenerator
	) {}
	async add(params: AddPatient.Params): Promise<boolean> {
		const { age, name, price, weekDays } = params;
		const id = this.uuidGenerator.generate();
		const patient: Patient = {
			age,
			name,
			price,
			weekDays,
			attendances: [],
			created_at: new Date(),
			id,
		};

		const result = this.addPatientRepository.add(patient);

		return result;
	}
}
