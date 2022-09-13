import { Validation } from "@/validation/validation";
import { MissingParamsValidation, ValidationComposite } from "@/validation/validators";
import { AuthorizationValidation } from "@/validation/validators/authorization";

export const makeGetOnePatientValidation = (): Validation => {
	const validations = [];
	validations.push(new AuthorizationValidation());
	validations.push(new MissingParamsValidation('patientId'))
	const validator = new ValidationComposite(validations);
	return validator;
};
