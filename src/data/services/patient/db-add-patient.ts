import { UuidGenerator } from "@/data/contracts/cryptography";
import { AddPatient } from "@/domain/features/patient/add-patient";
import { WeekDay } from "@/domain/models";
import { AddPatientRepository } from "../../contracts/repos/patient-repository";

export class DbAddPatient implements AddPatient {
	constructor(
		private readonly addPatientRepository: AddPatientRepository,
		private readonly uuidGenerator: UuidGenerator
	) {}
	async add(params: AddPatient.Params): Promise<boolean> {
		const { age, name, price, weekDays, userId, homecareId } = params;
		const formattedWeekDays = weekDays.map((day: any) => day.toLowerCase());

		const id = this.uuidGenerator.generate();
		const patient: AddPatientRepository.Params = {
			age,
			name,
			price,
			weekDays: formattedWeekDays,
			id,
			userId,
			homecareId,
		};
		const result = this.addPatientRepository.add(patient);
		return result;
	}
}
