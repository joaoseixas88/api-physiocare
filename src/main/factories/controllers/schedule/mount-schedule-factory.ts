import { DbFindPatients, DbGetPatients } from "@/data/services";
import { MountScheduleService } from "@/data/services/schedule/mount-schedule";
import { PatientPrismaRepository } from "@/infra/repos";
import { makeMountScheduleValidation } from "@/main/factories/validators";
import { MountScheduleController } from "@/presentation/controllers/schedule/mount-schedule-controller";
import { Controller } from "@/presentation/protocols";

export const makeMountScheduleFactory = (): Controller => {
	const repo = new PatientPrismaRepository()
	const getPatientsService = new DbGetPatients(repo)
	const service = new MountScheduleService(getPatientsService)
	return new MountScheduleController(service, makeMountScheduleValidation())
}