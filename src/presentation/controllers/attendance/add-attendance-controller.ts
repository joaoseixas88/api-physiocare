import { AddAttendance } from "@/domain/features/attendance/add-attendance";
import { AddAttendanceDTO } from "@/domain/models";
import { badRequest, created } from "@/presentation/helpers";
import { Validation } from "@/validation/protocols";
import { Controller } from "..";

export class AddAttendanceController implements Controller {
	constructor(
		private readonly service: AddAttendance,
		private readonly validator: Validation
	) {}

	async handle(
		params: Controller.Params<AddAttendanceDTO>
	): Promise<Controller.Result> {
		const error = this.validator.validate(params);
		if (error) return badRequest(error);

		const result = await this.service.add(params);
		if (result instanceof Error) return badRequest(result);
		return created();
	}
}
