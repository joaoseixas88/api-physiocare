import {
	CreateHomeCareRepository,
	GetAllHomeCaresRepository,
	GetOneHomeCareRepository,
} from "@/data/contracts";
import { GetOneHomeCare } from "@/domain/features";
import { HomeCare } from "@/domain/models";
import { dbClient } from "@/presentation/helpers";

export class HomeCarePrismaRepository
	implements
		CreateHomeCareRepository,
		GetAllHomeCaresRepository,
		GetOneHomeCareRepository
{
	async create(
		params: CreateHomeCareRepository.Params
	): Promise<CreateHomeCareRepository.Result> {
		const homecare = await dbClient.homecare.create({
			data: {
				name: params.name,
				id: params.id,
				userId: params.userId,
				price: params.price,
			},
		});
		return !!homecare;
	}

	async getAll(
		params: GetAllHomeCaresRepository.Params
	): Promise<GetAllHomeCaresRepository.Result> {
		const homecares = await dbClient.homecare.findMany({
			where: params,
		});
		return homecares as any;
	}

	async getOne(
		params: GetOneHomeCareRepository.Params
	): Promise<GetOneHomeCareRepository.Result> {
		const homecare = await dbClient.homecare.findUnique({
			where: {
				id: params.id,
			},
			include: {
				patients: true,
			},
		});
		if (homecare) return homecare as any;
		return undefined;
	}
}
