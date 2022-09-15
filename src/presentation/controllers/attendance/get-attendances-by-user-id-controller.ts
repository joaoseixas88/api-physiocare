import { GetAllAttendancesByUserId } from "@/domain/features";
import { badRequest, ok } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";
import { Validation } from "@/validation/protocols";


export class GetAllAttendancesByUserIdController implements Controller {
	constructor(
		private readonly service: GetAllAttendancesByUserId,
		private readonly validator: Validation
	) {}
	async handle(
		params: GetAllAttendancesByUserId.Params
	): Promise<Controller.Result> {
		const error = this.validator.validate(params);
		if (error) return badRequest(error);
		const attendances = await this.service.getAllByUserId(params);
		if (attendances instanceof Error) return badRequest(attendances);
		const responseAttendances = attendances.map((attendance) => {
			return {
				id: attendance.id,
				created_at: attendance.created_at,
			};
		});
		return ok(responseAttendances);
	}
}
