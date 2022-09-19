import { MountSchedule } from "@/domain/features";
import { badRequest, ok } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";
import { Validation } from "@/validation/protocols";

export type IRequest = {
	userId: string
}

export class MountScheduleController implements Controller {

	constructor(
		private readonly service: MountSchedule,
		private readonly validator: Validation
	){}
	
	async handle(params: Controller.Params<IRequest>): Promise<Controller.Result> {
		const error = this.validator.validate(params)
		if(error) return badRequest(error)
		const schedule = await this.service.mount(params)
		return ok(schedule)
	}

}