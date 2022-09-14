import { AddAttendanceRepository } from "@/data/contracts/repos/attendance-repository";
import { dbClient } from "@/presentation/helpers";
import { DeleteAttendanceRepository, GetOneAttendanceRepository } from '@/data/contracts/repos';

export class AttendancePrismaRepository
	implements AddAttendanceRepository, DeleteAttendanceRepository, GetOneAttendanceRepository
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

	async getOne(params: GetOneAttendanceRepository.Params): Promise<GetOneAttendanceRepository.Result> {
		const attendance = await dbClient.attendances.findUnique({
			where: {
				id: params.id
			}
		})
		return attendance
	}
}
