import { Authentication } from "@/data/services";
import { AddUser } from "@/domain/features/account/add-user";
import { AddUserDTO } from "@/domain/models";
import { badRequest, notAuthorized, ok } from "@/presentation/helpers";
import { Validation } from "src/validation";
import { MissingParamsException } from "../errors";
import { InvalidParamsException } from "../errors/invalid-params-error";
import { HttpResponse } from "../protocols";
import { Controller } from "../protocols/controller";



interface IResponse {
	name: string;
	email: string;
	accessToken: string
}


export class AddUserController implements Controller {
	constructor(
		private readonly userService: AddUser,
		private readonly validation: Validation,
		private readonly authentication: Authentication
	) {}
	async handle(params: Controller.Params<AddUserDTO>): Promise<HttpResponse<IResponse>> {
		
		
		const error = this.validation.validate(params)
		if (error){
			return badRequest(error)
		}

		const user = await this.userService.add({
			email: params.email,
			name: params.name,
			password: params.password,
		});

		if (user instanceof Error) {
			return badRequest(user)
		}

		const accessToken = await this.authentication.signIn({
			email: params.email,
			password: params.password
		})
		
		const responseUser = {
			name: params.name,
			email: params.email,
			accessToken
		};

		return ok(responseUser);
	}
}
