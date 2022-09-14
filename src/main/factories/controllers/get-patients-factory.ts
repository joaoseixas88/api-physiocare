import { DbGetPatients } from "@/data/services"
import { PatientPrismaRepository } from "@/infra/repos/prisma/patient-prisma-repository"
import { GetPatientsController } from "@/presentation/controllers"
import { Controller } from "@/presentation/protocols"
import { makeGetPatientsValidation } from "../validators/patient/get-patients-validation"


export const GetPatientsFactory = (): Controller => {	
	const repository = new PatientPrismaRepository()
	const service = new DbGetPatients(repository)
	const validator = makeGetPatientsValidation()
	const addUserController = new GetPatientsController(service,validator)
	return addUserController
}