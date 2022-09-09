import {
	AddUserRepository,
	AuthenticateUserRepository,
	FindUserRepository,
} from "@/data/contracts/repos";
import { User } from "@/domain/models";
import { AuthenticationException } from "@/presentation/errors";

export class AddAccountInMemoryRepository
	implements AddUserRepository, FindUserRepository, AuthenticateUserRepository
{
	constructor(private readonly users: User[] = []) {}

	async add(params: User): Promise<boolean> {
		const user: User = params;
		this.users.push(user);
		return !!user;
	}

	async find(
		params: FindUserRepository.Params
	): Promise<FindUserRepository.Result> {
		const user = this.users.find((user) => user.email === params.email);
		return user;
	}

	async auth(
		params: AuthenticateUserRepository.Params
	): Promise<AuthenticateUserRepository.Result> {
		const user = this.users.find((user) => user.email === params.email);
		if (!user) return undefined;
		return { password: user.password };
	}
}
