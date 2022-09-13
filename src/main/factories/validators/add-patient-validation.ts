import { Validation } from "@/validation/validation";
import {
	MissingParamsValidation,
	ValidationComposite,
} from "@/validation/validators";
import { AuthorizationValidation } from "@/validation/validators/authorization";

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
