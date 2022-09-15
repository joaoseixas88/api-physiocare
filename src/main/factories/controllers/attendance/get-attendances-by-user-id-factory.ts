import { DbGetPatients } from "@/data/services"
import { DbGetAllAttendancesByUserId } from "@/data/services"
import { AttendancePrismaRepository, PatientPrismaRepository } from "@/infra/repos"
import { makeGetAttendancesByUserIdValidation } from "@/main/factories/validators"
import { GetAllAttendancesByUserIdController } from "@/presentation/controllers"
import { Controller } from "@/presentation/protocols"


export const makeGetAttendancesByUserIdController = (): Controller => {
	const repo = new AttendancePrismaRepository()
	const service = new DbGetAllAttendancesByUserId(repo)
	return new GetAllAttendancesByUserIdController(service, makeGetAttendancesByUserIdValidation())
}