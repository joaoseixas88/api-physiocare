import { HomeCare } from "@/domain/models";

export interface GetOneHomeCare {
	getOne(params: GetOneHomeCare.Params): Promise<GetOneHomeCare.Result>;
}

export namespace GetOneHomeCare {
	export type Params = {
		userId: string;
		homecareId: string;
	};
	export type Result = HomeCare | Error;
}
