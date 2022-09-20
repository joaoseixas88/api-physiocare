import {
	DeleteAttendanceRepository,
	GetOneAttendanceRepository,
} from "@/data/contracts/repos";
import {
	AddAttendanceRepository,
	GetAllAttendancesByPatientIdRepository,
	GetAllAttendancesByUserIdRepository,
} from "@/data/contracts/repos/attendance-repository";
import { dbClient } from "@/presentation/helpers";

export class AttendancePrismaRepository
	implements
		AddAttendanceRepository,
		DeleteAttendanceRepository,
		GetOneAttendanceRepository,
		GetAllAttendancesByPatientIdRepository,
		GetAllAttendancesByUserIdRepository
{
	async add(params: AddAttendanceRepository.Params): Promise<boolean> {
		const attendance = await dbClient.attendances.create({
			data: {
				id: params.id,
				patientId: params.patientId,
				userId: params.userId,
				price: params.price,
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

	async getOne(
		params: GetOneAttendanceRepository.Params
	): Promise<GetOneAttendanceRepository.Result> {
		const attendance = await dbClient.attendances.findUnique({
			where: {
				id: params.id,
			},
		});
		return attendance;
	}

	async getAllByUser(
		params: GetAllAttendancesByUserIdRepository.Params
	): Promise<GetAllAttendancesByUserIdRepository.Result> {
		return await dbClient.attendances.findMany({
			where: {
				userId: params.userId,
				date: {
					gte: params.startDate,
					lte: params.endDate,
				},
			},
		});
	}
	async getAllByPatient(
		params: GetAllAttendancesByPatientIdRepository.Params
	): Promise<GetAllAttendancesByPatientIdRepository.Result> {
		const attendances = await dbClient.attendances.findMany({
			where: {
				patientId: params.patientId,
				date: {
					gte: params.startDate,
					lte: params.endDate,
				},
			},
		});

		return attendances;
	}
}
