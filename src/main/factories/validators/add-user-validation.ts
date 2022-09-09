import { Validation } from "@/validation/validation";
import { MissingParamsValidation, ValidationComposite } from "@/validation/validators";
import { CompareFieldValidation } from "@/validation/validators/compare-fields";




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