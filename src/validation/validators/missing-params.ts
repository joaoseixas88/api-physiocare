import { MissingParamsException } from "@/presentation/errors";
import { Validation } from "../validation";

export class MissingParamsValidation implements Validation {
	constructor(private readonly fieldName: string) {}
	validate(input: any): Error | undefined{
		if (!input[this.fieldName]) {
			return new MissingParamsException(this.fieldName);
		}		
	}
}
