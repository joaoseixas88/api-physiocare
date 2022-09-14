import { Validation } from "@/validation/protocols";
import {
	MissingParamsValidation,
	ValidationComposite,
	AuthorizationValidation
} from "@/validation/validators";

export const makeAddPatientValidation = (): Validation => {
	const validations = [];
	const requiredParams = ["name", "age", "price", "weekDays"];
	validations.push(new AuthorizationValidation());
	for (const param of requiredParams) {
		validations.push(new MissingParamsValidation(param));
	}
	const validator = new ValidationComposite(validations);
	return validator;
};
