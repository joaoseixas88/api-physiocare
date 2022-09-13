import { JwtAdapter } from "@/infra/cryptography";
import { config } from "@/main/config";

type Response = {
	userId: string | undefined;
	response: string;
};

export const authorizer = (authToken: string): Response | undefined => {
	const authArray = authToken.split(" ");
	const token = authArray[1];
	if (
		authArray[0] !== "Bearer" ||
		authArray.length !== 2 ||
		authArray[1].length === 0
	) {
		return {
			response: "Invalid token format",
			userId: undefined,
		};
	}
	const jwtAdapter = new JwtAdapter(config.jwt);
	try {
		const verified = jwtAdapter.verify(token);

		if (verified) {
			return {
				userId: verified.sub as string,
				response: "success",
			};
		}
	} catch (error) {
		return { response: "Invalid token", userId: undefined };
	}
};
