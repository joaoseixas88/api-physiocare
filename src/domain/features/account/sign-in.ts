import { AccessToken } from "@/domain/models"
import { AuthenticationException } from '@/domain/errors';

export interface SignIn{
	signIn(params: SignIn.Params): Promise<SignIn.Result>
}

export namespace SignIn{

	export type Params = {
		email: string
		password: string
	}

	export type Result = AccessToken | AuthenticationException
}