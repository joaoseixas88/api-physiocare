import { Validation } from "@/validation/validation";
import { MissingParamsValidation, ValidationComposite } from "@/validation/validators";


export const makeSigninByEmailValidation = (): Validation => {
	const validations = []
	const requiredParams = ['email','password']
	for(let param of requiredParams){
		validations.push(new MissingParamsValidation(param))
	}
	return new ValidationComposite(validations)
}