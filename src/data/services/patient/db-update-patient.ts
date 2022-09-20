import {
	GetOnePatientRepository,
	UpdatePatientRepository,
} from "@/data/contracts";
import { UpdatePatient } from "@/domain/features";
import { NotFoundException } from "@/presentation/errors";

export class DbUpdatePatient implements UpdatePatient {
	constructor(
		private readonly patientRepo: UpdatePatientRepository &
			GetOnePatientRepository
	) {}

	async update(params: UpdatePatient.Params): Promise<UpdatePatient.Result> {
		const { patientId, userId, age, price, weekDays, name } = params;
		const patient = await this.patientRepo.getOne({
			patientId,
			userId,
		});
		if (!patient) return new NotFoundException("Patient");

		const result = await this.patientRepo.update({
			patientId,
			age,
			name,
			price,
			weekDays,
		});

		return result;
	}
}
