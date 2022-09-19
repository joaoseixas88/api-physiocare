import { GetAllAttendancesByUserIdRepository } from '@/data/contracts';
import { DatesAdapter } from '@/data/contracts/dates/format-date';
import { GetAllAttendancesByUserId } from '@/domain/features';
import { MissingParamsException, NotAuthorizedException, NotFoundException } from '@/presentation/errors';

export class DbGetAllAttendancesByUserId implements GetAllAttendancesByUserId{
	constructor (
		private readonly getAttendancesByUserIdRepo: GetAllAttendancesByUserIdRepository,
		private readonly dayjsAdapter: DatesAdapter
	) {}
	async getAllByUserId(params: GetAllAttendancesByUserId.Params): Promise<GetAllAttendancesByUserId.Result> {

		const startDate = params.startDate ? this.dayjsAdapter.startOf(params.startDate) : undefined
		const endDate = params.endDate ? this.dayjsAdapter.endOf(params.endDate) : undefined
		if(startDate instanceof Error) return startDate
		if(endDate instanceof Error) return endDate
		

		const attendances = await this.getAttendancesByUserIdRepo.getAllByUser({
			userId: params.userId,
			startDate,
			endDate
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