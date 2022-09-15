import { Decrypter, Encrypter } from "@/data/contracts/cryptography";
import { sign, verify } from "jsonwebtoken";

export class JwtAdapter implements Encrypter, Decrypter {
	constructor(
		private readonly secret: string,
		private readonly expiresIn?: string
	) {}
	async decrypt(encrypted: string): Promise<string> {
		return verify(encrypted, this.secret) as any
	}
	async encrypt(plaintext: string): Promise<string> {
		const token = sign({ id: plaintext }, this.secret, {
			expiresIn: this.expiresIn ?? "1d",
		});
		return token;
	}
}
