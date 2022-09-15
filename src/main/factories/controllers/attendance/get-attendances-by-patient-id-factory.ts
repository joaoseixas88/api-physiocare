import { DbGetAllAttendancesByPatientId } from '@/data/services';
import { AttendancePrismaRepository } from '@/infra/repos';
import { makeGetAttendancesValidation } from '@/main/factories';
import { Controller, GetAllAttendancesByPatientIdController } from '@/presentation/controllers';


export const makeGetAttendancesByPatientIdFactory = (): Controller => {
	const repo = new AttendancePrismaRepository()
	const service = new DbGetAllAttendancesByPatientId(repo)
	return new GetAllAttendancesByPatientIdController(service, makeGetAttendancesValidation())
}