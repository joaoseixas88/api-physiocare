import { InvalidParamsException } from "@/presentation/errors/invalid-params-error";
import { Validation } from "../validation";

export class CompareFieldValidation implements Validation {
	constructor(
		private readonly field: string,
		private readonly fieldToCompare: string
	) {}

	validate(input: any): Error | undefined {
		
		if (input[this.field] !== input[this.fieldToCompare]) {
			return new InvalidParamsException(this.fieldToCompare);
		}
	}
}
