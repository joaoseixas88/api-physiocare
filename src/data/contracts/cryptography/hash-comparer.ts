export interface HashComparer {
	compare(encrypted: string, plaintext: string): Promise<boolean>
}