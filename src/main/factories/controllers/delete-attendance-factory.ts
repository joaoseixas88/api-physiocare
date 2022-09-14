import { Controller } from '@/presentation/protocols';
import { PatientPrismaRepository, AttendancePrismaRepository } from '@/infra/repos';
import { DbGetOnePatient, DbDeleteAttendance } from '@/data/services';
import { DeleteAttendanceController } from '@/presentation/controllers'
import { makeDeleteAttendanceValidation } from '@/main/factories'



export const DeleteAttendanceFactory = (): Controller => {
	const patientRepo = new PatientPrismaRepository
	const attendanceRepository = new AttendancePrismaRepository()
	const getOnePatientService = new DbGetOnePatient(patientRepo)
	const service = new DbDeleteAttendance(attendanceRepository,getOnePatientService)
	return new DeleteAttendanceController(service, makeDeleteAttendanceValidation())
}