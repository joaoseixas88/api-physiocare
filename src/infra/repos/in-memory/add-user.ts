import { AddUserRepository, FindUserRepository } from "@/data/contracts/repos";
import { AddUserModel } from "@/domain/models/add-user-model";
import { UserModel } from "@/domain/models/user-model";
import { v4 as uuid } from "uuid";

export class AddAccountInMemoryRepository implements AddUserRepository, FindUserRepository  {
	constructor(private readonly users: UserModel[] = []) {}
	
	async add(params: AddUserModel): Promise<boolean> {
		const id = uuid();
		const user: UserModel = {
			id,
			email: params.email,
			name: params.name,
			password: params.password
		};
		this.users.push(user)
		return !!user
	}


	async find(params: FindUserRepository.Params): Promise<FindUserRepository.Result> {
		const user = this.users.find(user => user.email === params.email)
		return user
	}
}
