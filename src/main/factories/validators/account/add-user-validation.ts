import { Validation } from "@/validation/protocols";
import { CompareFieldValidation, MissingParamsValidation, ValidationComposite } from "@/validation/validators";




export const makeAddUserValidation = (): ValidationComposite => {
	const validations: Validation[] = []
	const requiredParams = [
		"name",
		"email",
		"password",
		"passwordConfirmation",
	];

	for(const param of requiredParams){
		validations.push(new MissingParamsValidation(param))
	}
	validations.push(new CompareFieldValidation('password','passwordConfirmation'))
	const validation = new ValidationComposite(validations)

	return validation
}