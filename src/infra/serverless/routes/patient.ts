const path = "src/infra/serverless/functions";

export const patient = {
	newPatient: {
		handler: `${path}/add-patient.handle`,
		events: [
			{
				httpApi: {
					path: "/patient/create",
					method: "POST",
				},
			},
		],
	},
	getPatients: {
		handler: `${path}/get-patients.handle`,
		events: [
			{
				httpApi: {
					path: "/patient",
					method: "GET",
				},
			},
		],
	},
};