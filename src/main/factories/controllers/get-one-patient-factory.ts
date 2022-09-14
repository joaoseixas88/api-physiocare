import { DbGetOnePatient } from "@/data/services";
import { PatientPrismaRepository } from "@/infra/repos/prisma/patient-prisma-repository";
import { GetOnePatientController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeGetOnePatientValidation } from "../validators/patient/get-one-patient-validation";

export const GetOnePatientFactory = (): Controller => {
	const validator = makeGetOnePatientValidation();
	const repo = new PatientPrismaRepository();
	const service = new DbGetOnePatient(repo);
	return new GetOnePatientController(validator, service);
};
