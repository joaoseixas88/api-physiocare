import { AddUser } from "@/domain/features/account/add-user";
import { AuthenticationException } from "@/presentation/errors";
import { AddUserRepository, FindUserRepository } from "@/data/contracts/repos";
import { Encrypter, UuidGenerator } from '@/data/contracts/cryptography';
import { Hasher } from '../../contracts/cryptography/hasher';

export class DbAddUser implements AddUser {
	constructor(
		private readonly repository: AddUserRepository & FindUserRepository,
		private readonly uidAdapter: UuidGenerator,
		private readonly hasher: Hasher
	) {}
	async add(params: AddUser.Params): Promise<AddUser.Result> {
		const userData = await this.repository.find({
			email: params.email,
		});
		if (userData) {
			return new AuthenticationException("User already exists");
		}

		const hashPassword = await this.hasher.hash(params.password)

		const id = this.uidAdapter.generate()
		const user = await this.repository.add({
			...params,
			id,
			password: hashPassword,
			created_at: new Date()
		});
		return !!user;
	}
}
