import { CreateHomeCare } from "@/domain/features";

export interface CreateHomeCareRepository {
	create(params: CreateHomeCareRepository.Params): Promise<CreateHomeCareRepository.Result>
}

export namespace CreateHomeCareRepository{
	export type Params = CreateHomeCare.Params & {
		id: string
	}
	export type Result = boolean | Error
}