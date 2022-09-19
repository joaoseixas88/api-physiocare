const path = "src/infra/serverless/functions/homecare";

export const homecare = {
	new: {
		handler: `${path}/create-homecare.handle`,
		events: [
			{
				httpApi: {
					path: "/homecare/new",
					method: "POST",
				},
			},
		],
	}
};
