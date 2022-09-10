import { AuthenticationException } from "@/domain/features/errors";
import { AddUserDTO } from "@/domain/models";

export interface AddUser {
	add(params: AddUser.Params): Promise<AddUser.Result>;
}

export namespace AddUser {
	export type Params = Omit<AddUserDTO, "passwordConfirmation">
	export type Result = boolean | AuthenticationException
}

