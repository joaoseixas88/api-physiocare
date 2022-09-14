import { MissingParamsValidation, ValidationComposite, AuthorizationValidation } from "@/validation/validators";
import { Validation } from '@/validation/protocols';

export const makeGetOnePatientValidation = (): Validation => {
	const validations = [];
	validations.push(new AuthorizationValidation());
	validations.push(new MissingParamsValidation('patientId'))
	const validator = new ValidationComposite(validations);
	return validator;
};
