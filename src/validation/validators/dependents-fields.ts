import { MissingParamsException } from "@/presentation/errors";

export class DependentFieldsValidation {
	constructor(private readonly fields: string[]) {}
	validate(input: any): Error | undefined {
		let count = 0;
		for (const param of this.fields) {
			if (input[param]) count++;
		}
		if (count !== 0 && count !== this.fields.length) {
			for (const param of this.fields) {
				if (!input[param]) {
					return new MissingParamsException(param);
				}
			}
		}
	}
}
