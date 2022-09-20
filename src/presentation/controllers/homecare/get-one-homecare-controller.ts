import { GetOneHomeCare } from "@/domain/features";
import { badRequest, ok } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";
import { Validation } from "@/validation/protocols";

export class GetOneHomeCareController implements Controller {
	constructor(
		private readonly getOneHomeCare: GetOneHomeCare,
		private readonly validator: Validation
	) {}
	async handle(params: GetOneHomeCare.Params): Promise<Controller.Result> {
		const error = this.validator.validate(params);
		if (error) return badRequest(error);

		const homecare = await this.getOneHomeCare.getOne(params);
		if (homecare instanceof Error) return badRequest(homecare);

		const response = {
			id: homecare.id,
			name: homecare.name,
			price: homecare.price,
		};

		return ok(response);
	}
}
