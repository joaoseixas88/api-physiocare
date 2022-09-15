import { Hasher, HashComparer} from '@/data/contracts'
import bcrypt from 'bcrypt'

export class BcryptAdapter implements Hasher, HashComparer{
	salt: number;
	constructor(salt?: number) {
		this.salt = salt ?? 8;
	}
	async hash(plaintext: string): Promise<string> {
		return bcrypt.hash(plaintext,this.salt)
	}


	async compare(plaintext: string, encrypted: string): Promise<boolean> {
		return bcrypt.compare(plaintext,encrypted)
	}
	
}
