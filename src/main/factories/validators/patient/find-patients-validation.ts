import { Validation } from "@/validation/protocols";
import { AuthorizationValidation, ValidationComposite } from "@/validation/validators";


export const makeFindPatientsValidation = (): Validation => {
	const validations: Validation[] = []
	validations.push(new AuthorizationValidation())
	return new ValidationComposite(validations)
}