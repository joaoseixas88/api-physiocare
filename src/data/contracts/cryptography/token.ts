import { JwtPayload } from "jsonwebtoken"

export interface TokenGenerator {
	generate(payload: any): string
	verify(token: string, secret: string): TokenGenerator.Result
}


export namespace TokenGenerator {
	export type Result = JwtPayload | string
}