import { DbGetPatients } from "@/data/services/db-get-patients"
import { PatientPrismaRepository } from "@/infra/repos/prisma/patient-prisma-repository"
import { GetPatientsController } from "@/presentation/controllers/get-patients-controller"
import { Controller } from "@/presentation/protocols"
import { makeGetPatientsValidation } from "../validators/get-patients-validation"


export const GetPatientsFactory = (): Controller => {	
	const repository = new PatientPrismaRepository()
	const service = new DbGetPatients(repository)
	const validator = makeGetPatientsValidation()
	const addUserController = new GetPatientsController(service,validator)
	return addUserController
}