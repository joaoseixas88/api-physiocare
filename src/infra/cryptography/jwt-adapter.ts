import { TokenGenerator } from "@/data/contracts/cryptography/token";
import { sign, verify as check, JwtPayload } from "jsonwebtoken";

export class JwtAdapter implements TokenGenerator{
	constructor(
		private readonly secret: string,
		private readonly expiresIn?: string
	) {}
	generate(payload: any): string {
		const token = sign(payload, this.secret, {
			expiresIn: this.expiresIn ?? "1d",
		});
		return token
	}

	verify(token: string): boolean  {
		return !!check(token, this.secret);
	}
}
