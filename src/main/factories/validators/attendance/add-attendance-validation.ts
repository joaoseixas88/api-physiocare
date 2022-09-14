import { Validation } from "@/validation/protocols";
import { AuthorizationValidation, MissingParamsValidation, ValidationComposite } from '@/validation/validators';


export const makeAddAttendanceValidation  = (): Validation => {
	const validations = []
	validations.push(new AuthorizationValidation())
	validations.push(new MissingParamsValidation('patientId'))
	return new ValidationComposite(validations)

}