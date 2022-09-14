import {
	AddUserRepository,
	AuthenticateUserRepository,
	FindUserRepository
} from "@/data/contracts/repos";
import { dbClient } from "@/presentation/helpers";

export class UserPrismaRepository
	implements AddUserRepository, FindUserRepository, AuthenticateUserRepository
{
	async add(
		params: AddUserRepository.Params
	): Promise<AddUserRepository.Result> {
		const user = await dbClient.user.create({
			data: {
				...params,
			},
		});
		return !!user;
	}

	async find(
		params: FindUserRepository.Params
	): Promise<FindUserRepository.Result> {
		const user = await dbClient.user.findUnique({
			where: {
				email: params.email,
			},
			include: {
				patients: {
					include: {
						attendances: true,
					},
				},
			},
		});
		
		
		
		if (user) {
			return user
		}
		return undefined;
	}

	async auth(
		params: AuthenticateUserRepository.Params
	): Promise<AuthenticateUserRepository.Result> {
		const user = await dbClient.user.findUnique({
			where: {
				email: params.email,
			},
		});
		if (!user) {
			return undefined;
		}
		return { password: user.password, id: user.id };
	}
}
