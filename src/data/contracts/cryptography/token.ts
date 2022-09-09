export interface TokenGenerator {
	generate(payload: any): string
	verify(token: string, secret: string): boolean
}