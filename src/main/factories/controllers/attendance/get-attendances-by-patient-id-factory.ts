import { Controller } from '@/presentation/controllers';
import { GetAllAttendancesByPatientIdController } from '@/presentation/controllers';
import { DbGetAllAttendancesByPatientId, DbGetOnePatient } from '@/data/services';
import { PatientPrismaRepository } from '@/infra/repos';
import { makeGetAttendancesValidation } from '@/main/factories';


export const makeGetAttendancesByPatientIdFactory = (): Controller => {
	const repo = new PatientPrismaRepository()
	const getPatientService = new DbGetOnePatient(repo)
	const service = new DbGetAllAttendancesByPatientId(getPatientService)
	return new GetAllAttendancesByPatientIdController(service, makeGetAttendancesValidation())
}