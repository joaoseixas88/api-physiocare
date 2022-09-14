import { DbGetPatients } from "@/data/services"
import { PatientPrismaRepository } from "@/infra/repos"
import { GetPatientsController } from "@/presentation/controllers"
import { Controller } from "@/presentation/protocols"
import { makeGetPatientsValidation } from "@/main/factories"


export const makeGetPatientsFactory = (): Controller => {	
	const repository = new PatientPrismaRepository()
	const service = new DbGetPatients(repository)
	const validator = makeGetPatientsValidation()
	const addUserController = new GetPatientsController(service,validator)
	return addUserController
}