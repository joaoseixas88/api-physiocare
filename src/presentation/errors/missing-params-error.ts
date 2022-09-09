export class MissingParamsException extends Error {
	constructor(param?: string) {
		super(param ? `Missing param: ${param}` : "Missing params");
		this.name = 'MissingParamsError'
	}
}
