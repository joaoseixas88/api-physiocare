import { AddUser } from "@/domain/features";
import { AddUserRepository, FindUserRepository } from "../contracts/repos";
import { RegistrationException } from "@/presentation/errors";
import { UuidGenerator } from "../contracts/crypto/uuid-generator";

export class AddUserService implements AddUser {
	constructor(
		private readonly repository: AddUserRepository & FindUserRepository,
		private readonly uuidGenerator: UuidGenerator
	) {}
	async perform(params: AddUser.Params): Promise<AddUser.Result> {
		const userData = await this.repository.find({
			email: params.email,
		});
		if (userData) {
			return new RegistrationException("User already exists");
		}

		const id = this.uuidGenerator.generate()
		const user = await this.repository.add({
			...params,
			id,
			created_at: new Date(),
		});
		return !!user;
	}
}
