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
	},
	getAll: {
		handler: `${path}/get-all.handle`,
		events: [
			{
				httpApi: {
					path: "/homecare",
					method: "GET",
				},
			},
		],
	},
	getOne: {
		handler: `${path}/get-one.handle`,
		events: [
			{
				httpApi: {
					path: "/homecare/{homecareId}",
					method: "GET",
				},
			},
		],
	},
};
