import { HomeCare } from "@/domain/models";

export interface GetAllHomeCares {
	getAll(params: GetAllHomeCares.Params): Promise<GetAllHomeCares.Result>;
}

export namespace GetAllHomeCares {
	export type Params = {
		userId: string;
	};
	export type Result = HomeCare[] | Error;
}
