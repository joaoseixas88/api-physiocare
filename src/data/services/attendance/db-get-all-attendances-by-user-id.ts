import { GetAllAttendancesByUserId, GetPatients } from '@/domain/features';
import { Attendance } from '@/domain/models';

export class DbGetAllAttendancesByUserId implements GetAllAttendancesByUserId{
	constructor (
		private readonly getAllPatientsService: GetPatients
	) {}
	async getAllByUserId(params: GetAllAttendancesByUserId.Params): Promise<GetAllAttendancesByUserId.Result> {
		
		const patients = await this.getAllPatientsService.get({
			userId: params.userId
		})
		const attendances = patients.reduce((acc, patient) => {
			acc.push(...patient.attendances)
			return acc
		}, [] as Attendance[])
		
		return attendances
	}
}