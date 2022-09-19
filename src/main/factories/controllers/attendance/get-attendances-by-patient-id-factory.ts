import { DbGetAllAttendancesByPatientId } from '@/data/services';
import { AttendancePrismaRepository } from '@/infra/repos';
import { makeGetAttendancesValidation } from '@/main/factories';
import { makeDayJsAdapter } from '@/main/factories/dayJsFactory';
import { Controller, GetAllAttendancesByPatientIdController } from '@/presentation/controllers';


export const makeGetAttendancesByPatientIdFactory = (): Controller => {
	const repo = new AttendancePrismaRepository()
	const service = new DbGetAllAttendancesByPatientId(repo, makeDayJsAdapter())
	return new GetAllAttendancesByPatientIdController(service, makeGetAttendancesValidation())
}