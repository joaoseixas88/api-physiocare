import { Controller } from '../../../presentation/protocols/controller';
import { GetAllAttendancesController } from '../../../presentation/controllers/attendance/get-attendances-controller';
import { DbGetAllAttendances } from '../../../data/services/attendance/db-get-all-attendances';
import { DbGetOnePatient } from '../../../data/services/patient/db-get-one-patient';
import { PatientPrismaRepository } from '../../../infra/repos/prisma/patient-prisma-repository';
import { makeGetAttendancesValidation } from '../validators/attendance/get-attendances-validation';


export const GetAttendancesFactory = (): Controller => {
	const repo = new PatientPrismaRepository()
	const getPatientService = new DbGetOnePatient(repo)
	const service = new DbGetAllAttendances(getPatientService)
	return new GetAllAttendancesController(service, makeGetAttendancesValidation())
}