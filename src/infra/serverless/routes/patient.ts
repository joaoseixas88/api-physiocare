const path = "src/infra/serverless/functions/patient";

export const patient = {
	newPatient: {
		handler: `${path}/add-patient.handle`,
		events: [
			{
				httpApi: {
					path: "/patient/new",
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
	getPatient: {
		handler: `${path}/get-one-patient.handle`,
		events: [
			{
				httpApi: {
					path: "/patient/{patientId}",
					method: "GET",
				},
			},
		],
	},
	findPatients: {
		handler: `${path}/find-patients.handle`,
		events: [
			{
				httpApi: {
					path: "/patients",
					method: "GET",
				},
			},
		],
	},
	updatePatient: {
		handler: `${path}/update-patient.handle`,
		events: [
			{
				httpApi: {
					path: "/patient/update/{patientId}",
					method: "PATCH",
				},
			},
		],
	},
};
