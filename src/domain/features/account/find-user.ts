import { FindUserModel } from "@/domain/models"

export interface FindUser {
	find(params: FindUser.Params): Promise<FindUser.Result>
}


export namespace FindUser {
	export type Params = {
		email: string
	}

	export type Result = Promise<FindUserModel | undefined>
}