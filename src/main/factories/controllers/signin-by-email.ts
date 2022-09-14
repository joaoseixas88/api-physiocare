import { Authentication } from "@/data/services";
import { BcryptAdapter, JwtAdapter } from "@/infra/cryptography";
import { UserPrismaRepository } from "@/infra/repos";
import { config } from "@/main/config";
import { SignInByEmailController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeSigninByEmailValidation } from "../validators/account/signin-by-email-validation";

export const SigninByEmailFactory = (): Controller => {
	const authRepo = new UserPrismaRepository();
	const jwtAdapter = new JwtAdapter(config.jwt);
	const bcryptAdapter = new BcryptAdapter(10);
	const authService = new Authentication(bcryptAdapter, jwtAdapter, authRepo);
	return new SignInByEmailController(authService, makeSigninByEmailValidation());
};
