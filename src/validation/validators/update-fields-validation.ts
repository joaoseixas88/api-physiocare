import { UpdateFieldsMissingException } from "@/presentation/errors/update-fields-exception";
import { Validation } from "@/validation/protocols";

export class UpdateFieldsValidation implements Validation {
	constructor(private readonly fields: string[]) {}

	validate(input: any): Error | undefined {
		let count = 0;
		for (const field of this.fields) {
			if (input[field]) count++;
		}
		if (count === 0) return new UpdateFieldsMissingException(this.fields);
	}
}
