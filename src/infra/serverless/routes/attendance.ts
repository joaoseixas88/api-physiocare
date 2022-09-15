const path = "src/infra/serverless/functions/attendance";

export const attendance = {
	newAttendance: {
		handler: `${path}/add.handle`,
		events: [
			{
				httpApi: {
					path: "/attendance/new/{patientId}",
					method: "POST",
				},
			},
		],
	},
	getAllByPatientId: {
		handler: `${path}/get-all-by-patient.handle`,
		events: [
			{
				httpApi: {
					path: "/attendance/patient/{patientId}",
					method: "GET",
				},
			},
		],
	},
	getAllByUserId: {
		handler: `${path}/get-all-by-user.handle`,
		events: [
			{
				httpApi: {
					path: "/attendance/user",
					method: "GET",
				},
			},
		],
	},
	delete: {
		handler: `${path}/delete-one.handle`,
		events: [
			{
				httpApi: {
					path: "/attendance/delete",
					method: "DELETE",
				},
			},
		],
	},
	
};
