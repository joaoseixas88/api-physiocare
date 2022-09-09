import { FindUserModel } from "../models/user-model"

export interface FindUser {
	find(params: FindUser.Params): Promise<FindUser.Result>
}


export namespace FindUser {
	export type Params = {
		email: string
	}

	export type Result = Promise<FindUserModel | undefined>
}