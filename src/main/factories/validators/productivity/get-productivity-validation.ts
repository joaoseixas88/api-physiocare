import { Validation } from "@/validation/protocols";
import {
	AuthorizationValidation,
	MissingParamsValidation,
	ValidationComposite,
} from "@/validation/validators";

export const makeGetProductivityValidation = (): Validation => {
	const validations: Validation[] = [];
	const requiredParams = ["startDate", "endDate"];
	validations.push(new AuthorizationValidation());
	for (const param of requiredParams) {
		validations.push(new MissingParamsValidation(param));
	}
	return new ValidationComposite(validations);
};
