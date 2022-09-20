import { Validation } from "@/validation/protocols";
import {
	MissingParamsValidation,
	ValidationComposite,
} from "@/validation/validators";

export const makeGetOneHomeCareValidation = (): Validation => {
	const validations: Validation[] = [];
	validations.push(new MissingParamsValidation("homecareId"));

	return new ValidationComposite(validations);
};
