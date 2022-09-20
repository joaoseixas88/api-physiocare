const path = "src/infra/serverless/functions/productivity";

export const productivity = {
	signup: {
		handler: `${path}/get-productivity.handle`,
		events: [
			{
				httpApi: {
					path: "/productivity",
					method: "GET",
				},
			},
		],
	},
};
