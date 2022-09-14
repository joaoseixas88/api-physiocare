import { Validation } from '@/validation/protocols';
import { ValidationComposite, AuthorizationValidation, MissingParamsValidation } from '@/validation/validators';


export const makeGetAttendancesValidation = (): Validation => {
	const validations = []
	validations.push(new AuthorizationValidation())
	validations.push(new MissingParamsValidation('patientId'))
	return new ValidationComposite(validations)
}