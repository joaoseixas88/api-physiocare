import { SignIn } from "@/domain/features/account/sign-in";
import { AccessToken } from "@/domain/models/access-token";
import { BcryptAdapter, JwtAdapter } from "@/infra/cryptography";
import {
	AuthenticationException,
	NotFoundException,
} from "@/presentation/errors";
import { captureRejectionSymbol } from "events";
import { AuthenticateUserRepository } from "../contracts/repos";

export class Authentication implements SignIn {
	constructor(
		private readonly bcryptAdapter: BcryptAdapter,
		private readonly jwtAdapter: JwtAdapter,
		private readonly authenticateUserRepo: AuthenticateUserRepository
	) {}
	async signIn(
		params: SignIn.Params
	): Promise<AccessToken | AuthenticationException> {
		const user = await this.authenticateUserRepo.auth({
			email: params.email,
		});
		if (!user) return new NotFoundException("User not found");
		const encryptedPassword = user?.password;
		const verified = await this.bcryptAdapter.verify(
			params.password,
			encryptedPassword
		);
		if (verified) {
			const accessToken = this.jwtAdapter.generate({ sub: user.id });
			return accessToken
			
		}
		return new AuthenticationException("Email or password incorrect");
	}
}
