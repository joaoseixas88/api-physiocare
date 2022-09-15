import { JwtPayload } from "jsonwebtoken";

export interface Decrypter {
  decrypt(encrypted: string): Promise<JwtPayload>
}
