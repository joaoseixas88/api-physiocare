import { GetAllAttendancesByPatientId } from "@/domain/features";
import { Validation } from "@/validation/protocols";
import { Controller } from "@/presentation/protocols";
import { badRequest, ok } from "@/presentation/helpers";

type IRequest = {
	userId: string;
	patientId: string;
	startDate?: string
	endDate: string
};

export class GetAllAttendancesByPatientIdController implements Controller {
	constructor(
		private readonly service: GetAllAttendancesByPatientId,
		private readonly validator: Validation
	) {}

	async handle(
		params: Controller.Params<IRequest>
	): Promise<Controller.Result> {
		const error = this.validator.validate(params);
		if (error) return badRequest(error);


		const attendances = await this.service.get(params);
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
