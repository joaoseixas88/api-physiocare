export class NotAuthorizedException extends Error {
	constructor() {
		super("Not authorized");
		this.name = "NotAuthorizedException";
	}
}
