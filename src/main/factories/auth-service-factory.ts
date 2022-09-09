import { Authentication } from "@/data/services";
import { JwtAdapter } from "@/infra/cryptography";
import { makeBcrypt } from "./bcrypt-factory";
import { config } from "@/main/config";
import { UserPrismaRepository } from "@/infra/repos";

export const makeAuthService = (): Authentication => {
	const bcrypt = makeBcrypt();
	const jwtAdapter = new JwtAdapter(config.jwt);
	const authRepo = new UserPrismaRepository();
	const service = new Authentication(bcrypt, jwtAdapter, authRepo);
	return service;
};
