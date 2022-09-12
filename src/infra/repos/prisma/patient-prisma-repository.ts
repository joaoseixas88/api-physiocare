import { AddPatientRepository } from "@/data/contracts/repos/patient-repository";
import { dbClient } from "@/presentation/helpers";

export class PatientPrismaRepository implements AddPatientRepository {
	async add(params: AddPatientRepository.Params): Promise<boolean> {
		const { age, created_at, id, name, price, weekDays, userId } = params;
		const result = await dbClient.patient.create({
			data: {
				age,
				created_at,
				id,
				name,
				price,
				weekDays,
				userId,
			},
		});

		return !!result;
	}
}
