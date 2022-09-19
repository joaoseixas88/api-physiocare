import { InvalidDateFormatException } from "@/presentation/errors";
import { Validation } from "@/validation/protocols";

export class InputDateValidation implements Validation {

	validate(input: string): Error | undefined {
		
		if (input.length !== 10) {
			return new InvalidDateFormatException(input);
		}
		const regExp = new RegExp(/\/|-|\./g)
		const datesArray = input.split(regExp)
		const day = +datesArray[0]
		const month = +datesArray[1]
		const year = +datesArray[2]
		if(day < 1 || day > 31) return new Error(`${input} is a invalid date. Date can not be higher than 31 or lesser than 1`)
		if (month < 1 || month > 12) return new Error(`${input} is a invalid date. Month can not be higher than 12 or lesser than 1`)

	}
}
