import { DbGetAllAttendancesByUserId } from "@/data/services"
import { AttendancePrismaRepository } from "@/infra/repos"
import { makeDayJsAdapter } from "@/main/factories/dayJsFactory"
import { makeGetAttendancesByUserIdValidation } from "@/main/factories/validators"
import { GetAllAttendancesByUserIdController } from "@/presentation/controllers"
import { Controller } from "@/presentation/protocols"


export const makeGetAttendancesByUserIdController = (): Controller => {
	const repo = new AttendancePrismaRepository()
	const service = new DbGetAllAttendancesByUserId(repo,makeDayJsAdapter())
	return new GetAllAttendancesByUserIdController(service, makeGetAttendancesByUserIdValidation())
}