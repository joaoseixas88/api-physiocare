import { GetOnePatient } from "@/domain/features";
import { badRequest, ok } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";
import { Validation } from "@/validation/protocols";

export class GetOnePatientController implements Controller {
	constructor(
		private readonly validator: Validation,
		private readonly service: GetOnePatient
	) {}

	async handle(params: Controller.Params): Promise<Controller.Result> {
		const error = this.validator.validate(params);
		if (error) return badRequest(error);
		const patient = await this.service.getOne(params);
		if (patient instanceof Error) return badRequest(patient);
		return ok(patient);
	}
}
