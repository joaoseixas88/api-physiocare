import { GetAllAttendances } from "@/domain/features";
import { Validation } from "@/validation/protocols";
import { Controller } from "../";
import { badRequest, ok } from "../..";

type IRequest = {
	userId: string;
	patientId: string;
};

export class GetAllAttendancesController implements Controller {
	constructor(
		private readonly service: GetAllAttendances,
		private readonly validator: Validation
	) {}

	async handle(
		params: Controller.Params<IRequest>
	): Promise<Controller.Result> {
		const error = this.validator.validate(params);
		if (error) return badRequest(error);

		const attendances = await this.service.get(params);
		if (attendances instanceof Error) return badRequest(attendances);

		return ok(attendances);
	}
}
