const path = "src/infra/serverless/functions";

export const attendance = {
	newAttendance: {
		handler: `${path}/add-attendance.handle`,
		events: [
			{
				httpApi: {
					path: "/attendance/new/{patientId}",
					method: "POST",
				},
			},
		],
	},
	getAll: {
		handler: `${path}/get-attendances.handle`,
		events: [
			{
				httpApi: {
					path: "/attendance/{patientId}",
					method: "GET",
				},
			},
		],
	},
	delete: {
		handler: `${path}/delete-attendance.handle`,
		events: [
			{
				httpApi: {
					path: "/attendance/delete",
					method: "DELETE",
				},
			},
		],
	}
};
