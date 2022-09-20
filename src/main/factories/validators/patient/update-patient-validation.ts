import { Validation } from "@/validation/protocols";
import {
	AuthorizationValidation,
	MissingParamsValidation,
	ValidationComposite,
} from "@/validation/validators";

export const makeUpdatePatientValidation = (): Validation => {
	const validations: Validation[] = [];
	validations.push(new AuthorizationValidation());
	validations.push(new MissingParamsValidation("patientId"));

	return new ValidationComposite(validations);
};
