const path = "src/infra/serverless/adapters";

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
};
