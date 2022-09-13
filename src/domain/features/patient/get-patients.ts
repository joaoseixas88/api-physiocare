import { Patient } from "@/domain/models";

export interface GetPatients {
	get(params: GetPatients.Params): Promise<GetPatients.Result>
}


export namespace GetPatients{
	export type Params = {
		userId: string
	}
	export type Result = Patient[]
}