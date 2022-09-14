import { DbGetOnePatient,DbAddAttendance } from "@/data/services";
import { UuidAdapter } from "@/infra/cryptography";
import { AttendancePrismaRepository, PatientPrismaRepository } from "@/infra/repos";
import { AddAttendanceController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeAddAttendanceValidation } from '@/main/factories';

export const makeAddAttendanceFactory = ():Controller => {
	const getOnePatientRepo = new PatientPrismaRepository()
	const repo = new AttendancePrismaRepository()
	const getPatientService = new DbGetOnePatient(getOnePatientRepo)
	const uuidGenerator = new UuidAdapter()
	const service = new DbAddAttendance(repo,getPatientService,uuidGenerator)
	return new AddAttendanceController(service,makeAddAttendanceValidation())

}