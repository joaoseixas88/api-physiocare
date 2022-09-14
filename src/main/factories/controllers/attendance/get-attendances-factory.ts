import { Controller } from '@/presentation/controllers';
import { GetAllAttendancesController } from '@/presentation/controllers';
import { DbGetAllAttendances, DbGetOnePatient } from '@/data/services';
import { PatientPrismaRepository } from '@/infra/repos';
import { makeGetAttendancesValidation } from '@/main/factories';


export const makeGetAttendancesFactory = (): Controller => {
	const repo = new PatientPrismaRepository()
	const getPatientService = new DbGetOnePatient(repo)
	const service = new DbGetAllAttendances(getPatientService)
	return new GetAllAttendancesController(service, makeGetAttendancesValidation())
}