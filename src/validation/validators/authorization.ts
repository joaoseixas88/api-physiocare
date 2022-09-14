import { NotAuthorizedException } from "@/presentation/errors/not-authorized-error";
import { Validation } from "../protocols/validation";

export class AuthorizationValidation implements Validation {
	userId: string = 'userId'
	constructor() {}
	validate(input: any): Error | undefined{
		if (!input[this.userId]) {
			return new NotAuthorizedException();
		}		
	}
}
