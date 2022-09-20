import { GetProductivity } from "@/domain/features";
import { badRequest, ok } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";
import { Validation } from "@/validation/protocols";

export class GetProductivityController implements Controller {
	constructor(
		private readonly getProductivityService: GetProductivity,
		private readonly validator: Validation
	) {}
	async handle(params: GetProductivity.Params): Promise<Controller.Result> {
		const error = this.validator.validate(params);
		if (error) return badRequest(error);

		const prod = await this.getProductivityService.get(params);
		if (prod instanceof Error) return badRequest(prod);
		return ok(prod);
	}
}
