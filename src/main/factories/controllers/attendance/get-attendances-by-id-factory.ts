import { Controller } from '@/presentation/controllers';
import { GetAllAttendancesByIdController } from '@/presentation/controllers';
import { DbGetAllAttendancesById, DbGetOnePatient } from '@/data/services';
import { PatientPrismaRepository } from '@/infra/repos';
import { makeGetAttendancesValidation } from '@/main/factories';


export const makeGetAttendancesFactory = (): Controller => {
	const repo = new PatientPrismaRepository()
	const getPatientService = new DbGetOnePatient(repo)
	const service = new DbGetAllAttendancesById(getPatientService)
	return new GetAllAttendancesByIdController(service, makeGetAttendancesValidation())
}