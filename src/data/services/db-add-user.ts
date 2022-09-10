import { AddUser } from "@/domain/features/account/add-user";
import { AuthenticationException } from "@/presentation/errors";
import { BcryptAdapter } from "../../infra/cryptography/bcrypt-adapter";
import { UuidGenerator } from "../contracts/cryptography/uuid-generator";
import { AddUserRepository, FindUserRepository } from "../contracts/repos";

export class DbAddUser implements AddUser {
	constructor(
		private readonly repository: AddUserRepository & FindUserRepository,
		private readonly uuidGenerator: UuidGenerator,
		private readonly crypto: BcryptAdapter
	) {}
	async add(params: AddUser.Params): Promise<AddUser.Result> {
		const userData = await this.repository.find({
			email: params.email,
		});
		if (userData) {
			return new AuthenticationException("User already exists");
		}

		const hashPassword = await this.crypto.encrypt(params.password)

		const id = this.uuidGenerator.generate()
		const user = await this.repository.add({
			...params,
			id,
			password: hashPassword,
			created_at: new Date()
		});
		return !!user;
	}
}
