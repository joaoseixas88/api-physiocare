const path = "src/infra/serverless/functions/schedule";

export const schedule = {
	mount: {
		handler: `${path}/mount-schedule.handle`,
		events: [
			{
				httpApi: {
					path: "/schedule",
					method: "GET",
				},
			},
		],
	},
	
};
