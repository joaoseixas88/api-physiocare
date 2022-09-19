import { CreateHomeCare } from "@/domain/features";
import { badRequest, ok } from "@/presentation/helpers";
import { Controller } from "@/presentation/protocols";
import { Validation } from "@/validation/protocols";


export class CreateHomeCareController implements Controller{
	constructor(
		private readonly service: CreateHomeCare,
		private readonly validator: Validation
	){}
	
	async handle(params: any): Promise<Controller.Result> {
		const error = this.validator.validate(params)
		if(error) return badRequest(error)

		const homecare = await this.service.create(params)
		if(homecare instanceof Error) return badRequest(homecare)
		return ok()
	}
}