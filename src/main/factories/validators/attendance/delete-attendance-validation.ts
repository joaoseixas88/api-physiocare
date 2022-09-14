import { Validation } from "@/validation/protocols";
import {
	ValidationComposite,
	AuthorizationValidation,
	MissingParamsValidation
} from "@/validation/validators";

export const makeDeleteAttendanceValidation = (): Validation => {
	const validations = [];
	const requiredParams = ["patientId", "attendanceId"];
	validations.push(new AuthorizationValidation());
	for (const param of requiredParams) {
		validations.push(new MissingParamsValidation(param));
	}
	return new ValidationComposite(validations);
};
