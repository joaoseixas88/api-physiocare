import { Validation } from "@/validation/validation";
import { ValidationComposite } from "@/validation/validators";
import { AuthorizationValidation } from "@/validation/validators/authorization";

export const makeGetPatientsValidation = (): Validation => {
	const validations = [];
	validations.push(new AuthorizationValidation());
	return new ValidationComposite(validations);
};
