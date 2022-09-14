import { AddPatient } from "@/domain/features";
import { AddPatientDTO } from "@/domain/models";
import { badRequest, created, ok } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";
import { Validation } from '@/validation/protocols';

export class AddPatientController implements Controller {
	constructor(
		private readonly validation: Validation,
		private readonly service: AddPatient
	) {}

	async handle(
		params: Controller.Params<AddPatientDTO>
	): Promise<Controller.Result> {
		const error = this.validation.validate(params);
		if (error) {
			return badRequest(error);
		}
		const patient = await this.service.add(params);
		if (!patient) {
			return badRequest();
		}
		return created();
	}
}
