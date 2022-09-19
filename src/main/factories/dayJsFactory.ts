import { DayjsAdapter } from "@/infra/dates/dayjs-adapter";
import { InputDateValidation } from "@/validation/validators/input-date-validation";

export const makeDayJsAdapter = (): DayjsAdapter => {
	const validator = new InputDateValidation();
	return new DayjsAdapter(validator);
};
