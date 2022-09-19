import { FindPatientsRepository } from "@/data/contracts";
import { FindPatients } from "@/domain/features";

export class DbFindPatients implements FindPatients {
	constructor(private readonly patientsRepo: FindPatientsRepository) {}
	async find(params: FindPatients.Params): Promise<FindPatients.Result> {
		const { userId, age, name, price } = params;
		const patients = this.patientsRepo.findMany({
			userId,
			name,
			age: age ? +age : undefined,
			price: price ? +price : undefined
		});
		return patients;
	}
}
