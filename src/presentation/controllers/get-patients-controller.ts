import { GetPatients } from "@/domain/features/patient/get-patients";
import { Validation } from "@/validation/validation";
import { badRequest, ok } from "../helpers";
import { Controller } from "../protocols";

interface IRequest {
	userId: string;
}

export class GetPatientsController implements Controller {
	constructor(
		private readonly service: GetPatients,
		private readonly validator: Validation
	) {}
	async handle(
		params: Controller.Params<IRequest>
	): Promise<Controller.Result> {
		const error = this.validator.validate(params);
		if (error) return badRequest(error);
		const patients = await this.service.get(params);
		if (patients) return ok(patients);
		return badRequest();
	}
}
