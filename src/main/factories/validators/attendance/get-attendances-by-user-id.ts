import { makeDayJsAdapter } from "@/main/factories/dayJsFactory";
import { Validation } from "@/validation/protocols";
import { AuthorizationValidation, ValidationComposite } from "@/validation/validators";
import { DatesValidation } from "@/validation/validators/dates-validation";
import { DependentFieldsValidation } from "@/validation/validators/dependents-fields";

export const makeGetAttendancesByUserIdValidation = (): Validation => {
	const validations: Validation[] = []
	const dependentParams = ['startDate','endDate']
	
	validations.push(new AuthorizationValidation())
	validations.push(new DependentFieldsValidation(dependentParams))
	validations.push(new DatesValidation(makeDayJsAdapter()))
	return new ValidationComposite(validations)
}