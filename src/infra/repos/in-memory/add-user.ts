import { UserModel } from "@domain/models/user-model";
import { AddUserRepository } from "src/data/repos/add-user-repository";
import { v4 as uuid } from "uuid";

export class AddAccountInMemoryRepository implements AddUserRepository {
	constructor(private readonly accounts: UserModel[] = []) {}
	async add(params: AddUserModel): Promise<void> {
		const id = uuid();
		const account: UserModel = {
			id,
			email: params.email,
			name: params.name,
			password: params.password
		};
		this.accounts.push(account)
	}
}
