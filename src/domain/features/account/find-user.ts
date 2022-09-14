import { FindUserDTO, User } from "@/domain/models"

export interface FindUser {
	find(params: FindUser.Params): Promise<FindUser.Result>
}

export namespace FindUser {
	export type Params = FindUserDTO

	export type Result = Promise<User | undefined>
}