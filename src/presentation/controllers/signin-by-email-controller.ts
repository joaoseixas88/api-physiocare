import { Authentication } from "@/data/services";
import { Validation } from "@/validation/validation";
import { badRequest, ok } from "../helpers";
import { Controller } from "../protocols";

interface IRequest {
	email: string;
	password: string;
}
export class SignInByEmailController implements Controller {
	constructor(
		private readonly authentication: Authentication,
		private readonly validator: Validation
	) {}

	async handle(
		params: Controller.Params<IRequest>
	): Promise<Controller.Result> {
		const error = this.validator.validate(params)
		if (error) return badRequest(error)
		const { email, password } = params;
		const accessToken = await this.authentication.signIn({ email, password });
		console.log(accessToken)
		if (accessToken instanceof Error) return badRequest(accessToken);
		return ok(accessToken);
	}
}
