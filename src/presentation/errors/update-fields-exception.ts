export class UpdateFieldsMissingException extends Error {
	constructor(param?: string[]) {
		super(`At least one of those fields should be in the body: ${param}`);
		this.name = "UpdateFieldsMissingException";
	}
}
