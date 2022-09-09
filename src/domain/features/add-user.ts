import { RegistrationException } from "@/presentation/errors";

export interface AddUser {
	perform(params: AddUser.Params): Promise<AddUser.Result>;
}

export namespace AddUser {
	export type Params = {
		email: string;
		name: string;
		password: string;
	};
	export type Result = boolean | RegistrationException
}

