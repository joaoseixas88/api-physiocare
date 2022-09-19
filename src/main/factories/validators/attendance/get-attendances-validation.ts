import { Validation } from '@/validation/protocols';
import { ValidationComposite, AuthorizationValidation, MissingParamsValidation } from '@/validation/validators';
import { DependentFieldsValidation } from '@/validation/validators/dependents-fields';


export const makeGetAttendancesValidation = (): Validation => {
	const validations = []
	validations.push(new AuthorizationValidation())
	validations.push(new MissingParamsValidation('patientId'))
	validations.push(new DependentFieldsValidation(['startDate','endDate']))
	return new ValidationComposite(validations)
}