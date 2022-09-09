import { FindUser } from "@/domain/features/find-user";
import { FindUserRepository } from "../contracts/repos";

export class FindUserService implements FindUser {
	constructor(private readonly repository: FindUserRepository) {}

	async find(params: FindUser.Params): Promise<FindUser.Result> {

		const user = await this.repository.find({
			email: params.email,
		});

		if (user !== undefined) {
			return {
				email: user.email,
				id: user.id,
				name: user.name,
			};
		}
		return undefined
	}
}
