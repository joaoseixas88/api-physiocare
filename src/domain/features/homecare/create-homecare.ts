export interface CreateHomeCare {
	create(params: CreateHomeCare.Params): Promise<CreateHomeCare.Result>
}

export namespace CreateHomeCare {
	export type Params = {
		userId: string
		name: string
		price?: number		
	}

	export type Result = boolean | Error
}