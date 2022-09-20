import { FindPatients } from "@/domain/features";
import { badRequest, ok } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";
import { Validation } from "@/validation/protocols";

export class FindPatientsController implements Controller {
	constructor(
		private readonly service: FindPatients,
		private readonly validator: Validation
	) {}
	async handle(
		params: Controller.Params<FindPatients.Params>
	): Promise<Controller.Result> {
		const error = this.validator.validate(params);
		if (error) return badRequest(error);

		const patients = await this.service.find(params);
		const response = patients.map((patient) => {
			return {
				id: patient.id,
				name: patient.name,
				age: patient.age,
				price: patient.price,
				weekDays: patient.weekDays,
			};
		});
		return ok(response);
	}
}
