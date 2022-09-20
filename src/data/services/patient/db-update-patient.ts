import { UpdatePatientRepository } from "@/data/contracts";
import { UpdatePatient } from "@/domain/features";

export class DbUpdatePatient implements UpdatePatient {
	constructor(private readonly updatePatientRepo: UpdatePatientRepository) {}

	async update(params: UpdatePatient.Params): Promise<UpdatePatient.Result> {
		const result = await this.updatePatientRepo.update(params);
	}
}
