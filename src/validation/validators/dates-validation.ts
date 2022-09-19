import { DatesAdapter } from "@/data/contracts/dates/format-date";
import { InvalidDateFormatException } from "@/presentation/errors";
import { Validation } from "@/validation/protocols";

export class DatesValidation implements Validation{
	
	constructor(
		private readonly dayJsAdapter: DatesAdapter
	){
		
	}	
	validate(input: any): Error | undefined {
		if(Object.keys(input).includes('startDate') && Object.keys(input).includes('endDate')){
			const startDate = this.dayJsAdapter.startOf(input['startDate'])
			const endDate = this.dayJsAdapter.startOf(input['endDate'])
			if (startDate instanceof Error) return
			if (endDate instanceof Error) return
			if(startDate.getTime() > endDate.getTime()) return new Error('startDate can not be bigger than endDate') 
			if(!this.dayJsAdapter.isValid(input['startDate'])) return new Error(`${input['startDate']} is a invalid date`)
			if(!this.dayJsAdapter.isValid(input['endDate'])) return new Error(`${input['endDate']} is a invalid date`)
		}		
	}
}