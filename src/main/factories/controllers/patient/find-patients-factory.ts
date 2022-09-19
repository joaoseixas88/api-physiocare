import { DbFindPatients } from "@/data/services";
import { PatientPrismaRepository } from "@/infra/repos";
import { makeFindPatientsValidation } from "@/main/factories";
import { FindPatientsController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";

export const makeFindPatientsFactory = (): Controller => {
	const repo = new PatientPrismaRepository();
	const service = new DbFindPatients(repo);
	return new FindPatientsController(service, makeFindPatientsValidation());
};
