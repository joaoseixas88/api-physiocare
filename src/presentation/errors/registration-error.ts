export class RegistrationException extends Error {
	constructor(message?: string){
		super(message ?? 'Registration failed')
		this.name = 'RegistrationError'
	}
}
