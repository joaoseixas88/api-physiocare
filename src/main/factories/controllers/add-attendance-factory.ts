import { DbGetOnePatient } from "@/data/services";
import { DbAddAttendance } from "@/data/services/attendance/db-add-attendance";
import { UuidAdapter } from "@/infra/cryptography";
import { AttendancePrismaRepository } from "@/infra/repos/prisma/attendance-prisma-repository";
import { PatientPrismaRepository } from "@/infra/repos/prisma/patient-prisma-repository";
import { AddAttendanceController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { makeAddAttendanceValidation } from "../validators/add-attendance-validation";

export const AddAttendanceFactory = ():Controller => {
	const getOnePatientRepo = new PatientPrismaRepository()
	const repo = new AttendancePrismaRepository()
	const getPatientService = new DbGetOnePatient(getOnePatientRepo)
	const uuidGenerator = new UuidAdapter()
	const service = new DbAddAttendance(repo,getPatientService,uuidGenerator)
	return new AddAttendanceController(service,makeAddAttendanceValidation())

}