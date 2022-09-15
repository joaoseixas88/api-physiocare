import { GetAllAttendancesByUserIdRepository } from '@/data/contracts';
import { GetAllAttendancesByUserId, GetPatients } from '@/domain/features';
import { Attendance } from '@/domain/models';
import { NotAuthorizedException, NotFoundException } from '@/presentation/errors';

export class DbGetAllAttendancesByUserId implements GetAllAttendancesByUserId{
	constructor (
		private readonly getAttendancesByUserIdRepo: GetAllAttendancesByUserIdRepository
	) {}
	async getAllByUserId(params: GetAllAttendancesByUserId.Params): Promise<GetAllAttendancesByUserId.Result> {
		// if()
		
		const attendances = await this.getAttendancesByUserIdRepo.getAllByUser({
			userId: params.userId
		})
		if(!attendances) return new NotFoundException('Attendance')
		for(const attendance of attendances){
			if(attendance.userId !== params.userId){
				return new NotAuthorizedException()
			}
		}
		return attendances
		
	}
}