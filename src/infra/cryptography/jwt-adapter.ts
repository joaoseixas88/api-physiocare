import { TokenGenerator } from "@/data/contracts/cryptography/token";
import { JwtPayload, sign, verify as check } from "jsonwebtoken";

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

	verify(token: string): TokenGenerator.Result  {
		return check(token, this.secret);
	}
}
