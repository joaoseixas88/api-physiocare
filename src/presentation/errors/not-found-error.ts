export class NotFoundException extends Error{
	constructor(param?:string){
		super(param? `${param} not found` : 'Not found')
		this.name = 'NotFoundError'
	}
}