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
	}
};
