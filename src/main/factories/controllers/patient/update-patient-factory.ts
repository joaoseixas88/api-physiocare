import { DbUpdatePatient } from "@/data/services";
import { PatientPrismaRepository } from "@/infra/repos";
import { makeUpdatePatientValidation } from "@/main/factories/validators";
import { UpdatePatientController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";

export const makeUpdatePatientFactory = (): Controller => {
	const repo = new PatientPrismaRepository();
	const service = new DbUpdatePatient(repo);

	return new UpdatePatientController(service, makeUpdatePatientValidation());
};
