import { badRequest, ok } from "@/presentation/helpers";
import { HttpResponse } from "@/presentation/http";
import { AddUserService } from "src/data/services/add-user-service";
import { MissingParamsException, RegistrationException } from "../errors";
import { Controller } from "./controller";

interface IRequest {
	email: string;
	name: string;
	password: string;
	passwordConfirmation: string;
}

interface IResponse {
	name: string;
	email: string;
}

type Iterator = "name" | "email" | "password" | "passwordConfirmation";

export class AddUserController implements Controller {
	constructor(
		private readonly userService: AddUserService,
		// private readonly findUserService: FindUserService
	) {}
	async handle({
		body,
	}: Controller.Params<IRequest>): Promise<HttpResponse<IResponse>> {
		const requiredParams = [
			"name",
			"email",
			"password",
			"passwordConfirmation",
		];		
		if (!body) return badRequest();

		for (const param of requiredParams) {
			if (!body[param as Iterator]) {
				return badRequest(new MissingParamsException(param));
			}
		}

		if (body.password !== body.passwordConfirmation) return badRequest();
		
		const user = await this.userService.perform({
			email: body.email,
			name: body.name,
			password: body.password,
		});


		if (user instanceof Error) {
			return badRequest(user)
		}
		const responseUser = {
			name: body.name,
			email: body.email,
		};

		return ok(responseUser);
	}
}
