import { AuthenticateUserRepository } from "@/data/contracts/repos";
import { SignIn } from "@/domain/features/account/sign-in";
import { AccessToken } from "@/domain/models/access-token";
import { BcryptAdapter, JwtAdapter } from "@/infra/cryptography";
import {
	AuthenticationException
} from "@/presentation/errors";

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
		if (!user) return new AuthenticationException("Email or password incorrect");		
		const encryptedPassword = user.password;
		const verified = await this.bcryptAdapter.compare(
			params.password,
			encryptedPassword
		);
		if (verified) {
			const accessToken = this.jwtAdapter.encrypt(user.id);
			return accessToken;
		}
		return new AuthenticationException("Email or password incorrect");
	}
}
