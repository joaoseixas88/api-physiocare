import { CreateHomeCareRepository } from "@/data/contracts";
import { dbClient } from "@/presentation/helpers";

export class HomeCarePrismaRepository implements CreateHomeCareRepository {
	async create(
		params: CreateHomeCareRepository.Params
	): Promise<CreateHomeCareRepository.Result> {
		const homecare = await dbClient.homecare.create({
			data: {
				id: params.id,
				userId: params.userId,
				price: params.price

			}
		});
		return !!homecare;
	}
}
