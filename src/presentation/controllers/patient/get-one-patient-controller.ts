import { GetOnePatient } from "@/domain/features";
import { Attendance, WeekDay } from "@/domain/models";
import { badRequest, ok } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";
import { Validation } from "@/validation/protocols";

type IResponse = {
	id: string;
	name: string;
	age: number;
	price: number;
	weekDays: WeekDay[];
	attendances: Attendance[];
};

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
		const response: IResponse = {
			id: patient.id,
			name: patient.name,
			age: patient.age,
			price: patient.price,
			weekDays: patient.weekDays,
			attendances: patient.attendances,
		};
		return ok(response);
	}
}
