import { AddAttendanceRepository } from "@/data/contracts/repos/attendance-repository";
import { dbClient } from "@/presentation/helpers";

export class AttendancePrismaRepository implements AddAttendanceRepository {
	
	async add(params: AddAttendanceRepository.Params): Promise<boolean> {
		const attendance = await dbClient.attendances.create({
			data: {
				id: params.id,
				created_at: params.createdAt,
				patientId: params.patientId,
			},
		});

		return !!attendance;
	}


}
