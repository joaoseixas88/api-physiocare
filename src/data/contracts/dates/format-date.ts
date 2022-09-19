export interface DatesAdapter {
	format(textDate: string): Date | Error
	startOf(textDate: string): Date | Error
	endOf(textDate: string): Date | Error
	isValid(textDate: string): boolean | Error
}

