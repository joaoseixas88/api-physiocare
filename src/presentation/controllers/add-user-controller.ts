import { Authentication } from "@/data/services";
import { AddUser } from "@/domain/features/account/add-user";
import { AddUserDTO } from "@/domain/models";
import { badRequest, ok } from "@/presentation/helpers";
import { Validation } from "src/validation";
import { MissingParamsException } from "../errors";
import { InvalidParamsException } from "../errors/invalid-params-error";
import { HttpResponse } from "../protocols";
import { Controller } from "../protocols/controller";



interface IResponse {
	name: string;
	email: string;
}


export class AddUserController implements Controller {
	constructor(
		private readonly userService: AddUser,
		private readonly validation: Validation,
		private readonly authentication: Authentication
	) {}
	async handle({
		body,
	}: Controller.Params<AddUserDTO>): Promise<HttpResponse<IResponse>> {

		if(!body) return badRequest(new InvalidParamsException())
		
		const error = this.validation.validate(body)
		if (error){
			return badRequest(error)
		}

		const user = await this.userService.add({
			email: body.email,
			name: body.name,
			password: body.password,
		});

		if (user instanceof Error) {
			return badRequest(user)
		}

		const accessToken = await this.authentication.signIn({
			email: body.email,
			password: body.password
		})
		
		const responseUser = {
			name: body.name,
			email: body.email,
			accessToken
		};

		return ok(responseUser);
	}
}
