import { Validation } from "@/validation/validation";
import { MissingParamsValidation, ValidationComposite } from "@/validation/validators";
import { AuthorizationValidation } from "@/validation/validators/authorization";


export const makeAddAttendanceValidation  = (): Validation => {
	const validations = []
	validations.push(new AuthorizationValidation())
	validations.push(new MissingParamsValidation('patientId'))
	return new ValidationComposite(validations)

}