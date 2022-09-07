import { AddUser } from "@domain/features";

export class AddUserService implements AddUser {
	perform(params: AddUser.Params): Promise<AddUser.Result> {
		throw new Error("Method not implemented.");
	}
	
}
