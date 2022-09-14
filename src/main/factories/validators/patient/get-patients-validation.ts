import { Validation } from "@/validation/protocols";
import { ValidationComposite, AuthorizationValidation } from "@/validation/validators";

export const makeGetPatientsValidation = (): Validation => {
	const validations = [];
	validations.push(new AuthorizationValidation());
	return new ValidationComposite(validations);
};
