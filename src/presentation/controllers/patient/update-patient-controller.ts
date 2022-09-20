import { UpdatePatient } from "@/domain/features";
import { badRequest, ok } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";
import { Validation } from "@/validation/protocols";

export class UpdatePatientController implements Controller {
	constructor(
		private readonly service: UpdatePatient,
		private readonly validator: Validation
	) {}

	async handle(params: UpdatePatient.Params): Promise<Controller.Result> {
		const error = this.validator.validate(params);
		if (error) return badRequest(error);

		const result = await this.service.update(params);
		if (result instanceof Error) return badRequest(result);
		return ok();
	}
}
