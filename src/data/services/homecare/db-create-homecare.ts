import { CreateHomeCareRepository } from "@/data/contracts";
import { CreateHomeCare } from "@/domain/features";
import { UuidAdapter } from "@/infra/cryptography";


export class DbCreateHomeCare implements CreateHomeCare{
	constructor(
		private readonly createHomecareRepo: CreateHomeCareRepository,
		private readonly UuidAdapter: UuidAdapter
	){}
	
	async create(params: CreateHomeCare.Params): Promise<CreateHomeCare.Result> {
		const id = this.UuidAdapter.generate()
		const result = await this.createHomecareRepo.create({
			...params,
			id
		})
		return result
	}

}