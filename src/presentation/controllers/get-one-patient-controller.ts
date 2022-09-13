import { DbGetOnePatient } from "@/data/services";
import { GetOnePatient } from "@/domain/features/patient/get-one-patients";
import { Validation } from "@/validation/validation";
import { badRequest, ok } from "../helpers";
import { Controller } from "../protocols";

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
