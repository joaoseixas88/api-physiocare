
export interface AddUserRepository {
	add(params: AddUserRepository.Params): Promise<AddUserRepository.Result>
}


export namespace AddUserRepository {
	export type Params = AddUserModel

	export type Result = void
}