import { Productivity } from "@/domain/models";

export interface GetProductivity {
	get(params: GetProductivity.Params): Promise<GetProductivity.Result>;
}

export namespace GetProductivity {
	export type Params = {
		userId: string;
		startDate: string;
		endDate: string;
	};

	export type Result = Productivity | Error;
}
