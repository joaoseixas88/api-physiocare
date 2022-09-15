import { JwtAdapter } from "@/infra/cryptography";
import { config } from "@/main/config";

type Response = {
	userId: string | undefined;
	response: string;
};

export const authorizer = async (authToken: string): Promise<Response | undefined> => {
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
		const id = await jwtAdapter.decrypt(token);

		if (id) {
			return {
				userId: id,
				response: "success",
			};
		}
	} catch (error) {
		return { response: "Invalid token", userId: undefined };
	}
};
