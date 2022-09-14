import { DeleteAttendance } from '../../../domain/features/attendance/delete-attendance';


export class DbDeleteAttendance implements DeleteAttendance {

	async delete(params: DeleteAttendance.Params): Promise<DeleteAttendance.Result> {
		throw new Error('Method not implemented.');
	}

}