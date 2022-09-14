import { DbAddPatient } from "@/data/services";
import { UuidAdapter } from "@/infra/cryptography";
import { PatientPrismaRepository } from "@/infra/repos";
import { AddPatientController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeAddPatientValidation } from "@/main/factories";

export const makeAddPatientFactory = (): Controller => {
	const patientRepository = new PatientPrismaRepository();
	const uuidGenerator = new UuidAdapter();
	const validations = makeAddPatientValidation();
	const service = new DbAddPatient(patientRepository, uuidGenerator);
	const addPatientController = new AddPatientController(validations, service);
	return addPatientController
};
