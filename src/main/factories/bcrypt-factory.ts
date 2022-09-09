import { BcryptAdapter } from "@/infra/cryptography";

export const makeBcrypt = (): BcryptAdapter => {
	const bcrypt = new BcryptAdapter(10);
	return bcrypt;
};
