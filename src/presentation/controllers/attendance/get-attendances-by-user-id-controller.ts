import { GetAllAttendancesByUserId } from "@/domain/features";
import { badRequest, ok } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";
import { Validation } from "@/validation/protocols";

type IRequest = { userId: string };

export class GetAllAttendancesByUserIdController implements Controller {
	constructor(
		private readonly service: GetAllAttendancesByUserId,
		private readonly validator: Validation
	) {}
	async handle(params: IRequest): Promise<Controller.Result> {
		const error = this.validator.validate(params);
		if (error) return badRequest(error);

		const attendances = await this.service.getAllByUserId(params);
		if (attendances instanceof Error) return badRequest(attendances);
		return ok(attendances);
	}
}