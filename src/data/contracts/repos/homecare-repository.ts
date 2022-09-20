import { CreateHomeCare, GetOneHomeCare } from "@/domain/features";
import { HomeCare } from "@/domain/models";

export interface CreateHomeCareRepository {
	create(
		params: CreateHomeCareRepository.Params
	): Promise<CreateHomeCareRepository.Result>;
}

export namespace CreateHomeCareRepository {
	export type Params = CreateHomeCare.Params & {
		id: string;
	};
	export type Result = boolean | Error;
}

export interface GetAllHomeCaresRepository {
	getAll(
		params: GetAllHomeCaresRepository.Params
	): Promise<GetAllHomeCaresRepository.Result>;
}

export namespace GetAllHomeCaresRepository {
	export type Params = {
		userId: string;
	};
	export type Result = HomeCare[];
}

export interface GetOneHomeCareRepository {
	getOne(
		params: GetOneHomeCareRepository.Params
	): Promise<GetOneHomeCareRepository.Result>;
}

export namespace GetOneHomeCareRepository {
	export type Params = {
		id: string;
	};
	export type Result = HomeCare | undefined;
}
