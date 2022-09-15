import { DbGetPatients } from "@/data/services"
import { DbGetAllAttendancesByUserId } from "@/data/services"
import { PatientPrismaRepository } from "@/infra/repos"
import { makeGetAttendancesByUserIdValidation } from "@/main/factories/validators"
import { GetAllAttendancesByUserIdController } from "@/presentation/controllers"
import { Controller } from "@/presentation/protocols"


export const makeGetAttendancesByUserIdController = (): Controller => {
	const repo = new PatientPrismaRepository()
	const patientService = new DbGetPatients(repo)
	const service = new DbGetAllAttendancesByUserId(patientService)
	return new GetAllAttendancesByUserIdController(service, makeGetAttendancesByUserIdValidation())
}