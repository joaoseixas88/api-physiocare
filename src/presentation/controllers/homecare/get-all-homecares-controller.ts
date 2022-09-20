import { GetAllHomeCares } from "@/domain/features";
import { badRequest, ok } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";
import { Validation } from "@/validation/protocols";

export class GetAllHomeCaresController implements Controller {
	constructor(
		private readonly service: GetAllHomeCares,
		private readonly validator: Validation
	) {}

	async handle(
		params: Controller.Params<GetAllHomeCares.Params>
	): Promise<Controller.Result> {
		const error = this.validator.validate(params);
		if (error) return badRequest(error);
		const homecares = await this.service.getAll(params);
		if (homecares instanceof Error) return badRequest(homecares);

		const response = homecares.map((home) => {
			return {
				id: home.id,
				name: home.name,
				price: home.price,
			};
		});
		return ok(response);
	}
}
