import { GetAllHomeCaresRepository } from "@/data/contracts";
import { GetAllHomeCares } from "@/domain/features";

export class DbGetAllHomeCares implements GetAllHomeCares {
	constructor(private readonly homeCareRepo: GetAllHomeCaresRepository) {}

	async getAll(
		params: GetAllHomeCares.Params
	): Promise<GetAllHomeCares.Result> {
		const homecares = await this.homeCareRepo.getAll(params);
		if (homecares instanceof Error) return homecares;
		return homecares;
	}
}
