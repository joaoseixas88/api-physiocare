import { Encrypter } from "@/data/contracts/cryptography";
import { hash, compare } from "bcrypt";

export class BcryptAdapter implements Encrypter{
	salt: number;
	constructor(salt?: number) {
		this.salt = salt ?? 8;
	}
	async encrypt(plaintext: string): Promise<string> {
		return await hash(plaintext, this.salt);
	}
	async verify(plaintext: string, encrypted: string): Promise<boolean> {
		return await compare(plaintext, encrypted);
	}
}
