import { DbGetOnePatient } from "@/data/services";
import { PatientPrismaRepository } from "@/infra/repos";
import { GetOnePatientController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeGetOnePatientValidation } from "@/main/factories";

export const GetOnePatientFactory = (): Controller => {
	const validator = makeGetOnePatientValidation();
	const repo = new PatientPrismaRepository();
	const service = new DbGetOnePatient(repo);
	return new GetOnePatientController(validator, service);
};
