import { UserModel } from "@domain/models/user-model";
import { ok } from "@presentation/helpers";
import { HttpRequest, HttpResponse } from "@presentation/http";
import { AddUserService } from "src/data/services/add-user-service";
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

export class AddAccountController implements Controller {
	constructor(private readonly service: AddUserService) {}
	async handle(params: HttpRequest<IRequest>): Promise<HttpResponse<IResponse>> {
		const user = await this.service.perform(params);
		return ok(user);
	}
}
