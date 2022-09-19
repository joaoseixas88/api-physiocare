export class InvalidDateFormatException extends Error{
	constructor(param?: string){
		super(param ? `${param} has invalid date format. The valid date format is DD-MM-YYYY` : 'Invalid date format')
		this.name = 'InvalidDateFormat'
	}
}