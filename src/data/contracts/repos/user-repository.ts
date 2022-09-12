import { User } from "@/domain/models";

export interface AddUserRepository {
	add(params: AddUserRepository.Params): Promise<AddUserRepository.Result>;
}

export namespace AddUserRepository {
	export type Params = Omit<User, "patients">;

	export type Result = boolean;
}

export interface FindUserRepository {
	find(params: FindUserRepository.Params): Promise<FindUserRepository.Result>;
}

export namespace FindUserRepository {
	export type Params = {
		email: string;
	};
	export type Result = User | undefined;
}

export interface AuthenticateUserRepository {
	auth(
		params: AuthenticateUserRepository.Params
	): Promise<AuthenticateUserRepository.Result>;
}

export namespace AuthenticateUserRepository {
	export type Params = {
		email: string;
	};

	export type Result =
		| {
				id: string;
				password: string;
		  }
		| undefined;
}
