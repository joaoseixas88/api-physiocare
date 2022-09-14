import { Controller } from '@/presentation/protocols';
import { DeleteAttendance } from '@/domain/features';
import { DeleteAttendanceDTO } from '@/domain/models';
import { Validation } from '@/validation/protocols';
import { badRequest, ok } from '@/presentation/helpers'



export class DeleteAttendanceController implements Controller{

	constructor(
		private readonly service: DeleteAttendance,
		private readonly validator: Validation
	){}

	async handle(params: Controller.Params<DeleteAttendanceDTO>): Promise<Controller.Result> {
		const error = this.validator.validate(params)
		if(error) return badRequest(error)
		const result = await this.service.delete(params)
		if(result instanceof Error) return badRequest(result)
		return ok()
	}

}