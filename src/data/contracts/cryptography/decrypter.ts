export interface Decrypter {
  decrypt(encrypted: string): Promise<string>
}
