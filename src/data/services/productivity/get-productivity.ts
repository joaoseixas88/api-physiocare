import { GetAllAttendancesByUserId, GetProductivity } from "@/domain/features";
import { Productivity } from "@/domain/models";

export class GetProductivityService implements GetProductivity {
	constructor(private readonly getAttendances: GetAllAttendancesByUserId) {}

	async get(params: GetProductivity.Params): Promise<GetProductivity.Result> {
		const attendances = await this.getAttendances.getAllByUserId(params);
		if (attendances instanceof Error) return attendances;
		const productivity = attendances.reduce((acc, attendance) => {
			return acc + attendance.price;
		}, 0);
		return {
			productivity,
		};
	}
}
