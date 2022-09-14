import { Authentication } from "@/data/services";
import { AddUser } from "@/domain/features";
import { AddUserDTO } from "@/domain/models";
import { badRequest, created } from "@/presentation/helpers";
import { Controller } from '@/presentation/controllers';
import { Validation } from "@/validation/protocols";
import { HttpResponse } from "@/presentation/protocols";



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

		return created(responseUser);
	}
}
