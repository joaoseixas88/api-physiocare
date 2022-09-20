import { GetOneHomeCareRepository } from "@/data/contracts";
import { GetOneHomeCare } from "@/domain/features";
import { NotFoundException } from "@/presentation/errors";

export class DbGetOneHomeCare implements GetOneHomeCare {
	constructor(private readonly getOneHomeCareRepo: GetOneHomeCareRepository) {}

	async getOne(params: GetOneHomeCare.Params): Promise<GetOneHomeCare.Result> {
		const homecare = await this.getOneHomeCareRepo.getOne({
			id: params.homecareId,
		});

		console.log(homecare);
		if (!homecare) return new NotFoundException("Homecare");
		if (homecare.userId !== params.userId)
			return new NotFoundException("Homecare");

		return homecare;
	}
}
