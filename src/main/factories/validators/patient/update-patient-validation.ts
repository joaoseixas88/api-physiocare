import { Validation } from "@/validation/protocols";
import {
	AuthorizationValidation,
	MissingParamsValidation,
	ValidationComposite,
} from "@/validation/validators";
import { UpdateFieldsValidation } from "@/validation/validators/update-fields-validation";

export const makeUpdatePatientValidation = (): Validation => {
	const validations: Validation[] = [];
	const updateFields = ["name", "weekDays", "age", "price"];
	validations.push(new AuthorizationValidation());
	validations.push(new UpdateFieldsValidation(updateFields));

	validations.push(new MissingParamsValidation("patientId"));

	return new ValidationComposite(validations);
};
