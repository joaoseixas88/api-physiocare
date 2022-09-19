import { Validation } from "@/validation/protocols";
import { AuthorizationValidation, MissingParamsValidation, ValidationComposite } from "@/validation/validators";

export const makeCreateHomeCareValidations = (): Validation => {
	const validations: Validation[] = []
	validations.push(new AuthorizationValidation())
	validations.push(new MissingParamsValidation('name'))
	return new ValidationComposite(validations)
}