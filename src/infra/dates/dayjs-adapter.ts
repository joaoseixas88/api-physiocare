import { DatesAdapter } from "@/data/contracts/dates/format-date";
import { Validation } from "@/validation/protocols";

import dayjs from "dayjs";
import customFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customFormat);

export class DayjsAdapter implements DatesAdapter {
	constructor(private readonly inputValidator: Validation) {}	

	format(textDate: string): Error | Date {
		const error = this.inputValidator.validate(textDate);

		if (error) return error;
		return dayjs(textDate, "DD/MM/YYYY", "br").toDate();
	}

	startOf(textDate: string): Date | Error {
		const error = this.inputValidator.validate(textDate);
		if (error) return error;

		return dayjs(textDate, "DD/MM/YYYY", "br").startOf('day').toDate();
	}
	endOf(textDate: string): Date | Error {
		const error = this.inputValidator.validate(textDate);
		if (error) return error;
		return dayjs(textDate, "DD/MM/YYYY", "br").endOf('day').toDate();
	}

	isValid(textDate: string): boolean | Error{
		const convertedDate = dayjs(textDate,"DD/MM/YYYY")
		const error = this.inputValidator.validate(textDate)
		if(error) return error
		return dayjs(convertedDate).isValid()
	}
}
