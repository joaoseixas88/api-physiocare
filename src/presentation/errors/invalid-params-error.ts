export class InvalidParamsException extends Error{
	constructor(param?: string){
		super(param ? `Invalid param: ${param}` : 'Invalid params request')
		this.name = 'InvalidParamsException'
	}
}