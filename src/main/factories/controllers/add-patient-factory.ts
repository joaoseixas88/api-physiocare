import { DbAddPatient } from "@/data/services";
import { UuidAdapter } from "@/infra/cryptography";
import { PatientPrismaRepository } from "@/infra/repos/prisma/patient-prisma-repository";
import { AddPatientController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeAddPatientValidation } from "../validators/patient/add-patient-validation";

export const AddPatientFactory = (): Controller => {
	const patientRepository = new PatientPrismaRepository();
	const uuidGenerator = new UuidAdapter();
	const validations = makeAddPatientValidation();
	const service = new DbAddPatient(patientRepository, uuidGenerator);
	const addPatientController = new AddPatientController(validations, service);
	return addPatientController
};
