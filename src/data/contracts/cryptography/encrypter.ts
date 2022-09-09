export interface Encrypter {
	encrypt(plaintext: string): Promise<string>
	verify(encrypted: string, plaintext: string): Promise<boolean>
}

