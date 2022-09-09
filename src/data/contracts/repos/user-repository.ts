import { AddUserModel } from "@/domain/models/add-user-model";
import { UserModel } from "@/domain/models/user-model";

export interface AddUserRepository {
	add(params: AddUserRepository.Params): Promise<AddUserRepository.Result>
}

export namespace AddUserRepository {
	export type Params = {
		id: string,
		email: string;
    name: string;
    password: string;
		created_at: Date
	};

	export type Result = boolean
}

export interface FindUserRepository {
	find(params: FindUserRepository.Params): Promise<FindUserRepository.Result>;
}

export namespace FindUserRepository {
	export type Params = {
		email: string;
	};
	export type Result = UserModel | undefined
}
