import { Decrypter, Encrypter } from "@/data/contracts/cryptography";
import { sign, verify, JwtPayload } from 'jsonwebtoken';

export class JwtAdapter implements Encrypter, Decrypter {
	constructor(
		private readonly secret: string,
		private readonly expiresIn?: string
	) {}
	async encrypt(plaintext: string): Promise<string> {
		const token = sign({ id: plaintext }, this.secret, {
			expiresIn: this.expiresIn ?? "1d",
		});
		return token;
	}
	async decrypt(encrypted: string): Promise<JwtPayload> {
		return verify(encrypted, this.secret) as any
	}
}
