import { AddUserRepository, FindUserRepository } from "@/data/contracts/repos";
import { dbClient } from "@/presentation/helpers/prisma-client";

export class UserPrismaRepository
	implements AddUserRepository, FindUserRepository
{
	async add(params: AddUserRepository.Params): Promise<AddUserRepository.Result> {
	
		const addUser = await dbClient.user.create({
			data: {
				...params,				
			},
		});

		return !!addUser
	}
	async find(
		params: FindUserRepository.Params
	): Promise<FindUserRepository.Result> {
		const findUser = await dbClient.user.findUnique({
			where: {
				email: params.email,
			},
		});

		if (findUser !== null) {
			return {
				email: findUser.email,
				id: findUser.id,
				name: findUser.name,
				password: findUser.password,
			};
		}
		return undefined
	}
}
