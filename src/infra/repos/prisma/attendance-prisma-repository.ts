import { AddAttendanceRepository } from "@/data/contracts/repos/attendance-repository";
import { dbClient } from "@/presentation/helpers";
import { DeleteAttendanceRepository } from "../../../data/contracts/repos/attendance-repository";

export class AttendancePrismaRepository
	implements AddAttendanceRepository, DeleteAttendanceRepository
{
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

	async delete(params: DeleteAttendanceRepository.Params): Promise<boolean> {
		try {
			const result = await dbClient.attendances.delete({
				where: {
					id: params.id,
				},
			});
			return !!result;
		} catch (error: any) {
			return error;
		}
	}
}
