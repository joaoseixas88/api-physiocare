const path = "src/infra/serverless/functions";

export const account = {
	signup: {
		handler: `${path}/add-account.handle`,
		events: [
			{
				httpApi: {
					path: "/account/signup",
					method: "POST",
				},
			},
		],
	},
	signIn: {
		handler: `${path}/signin-by-email.handle`,
		events: [
			{
				httpApi: {
					path: "/account/signin",
					method: "POST",
				},
			},
		],
	},
};
