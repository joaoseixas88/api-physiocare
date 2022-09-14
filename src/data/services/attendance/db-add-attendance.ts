import { UuidGenerator } from "@/data/contracts/cryptography";
import { AddAttendanceRepository } from "@/data/contracts/repos/attendance-repository";
import { AddAttendance } from "@/domain/features/attendance/add-attendance";
import { GetOnePatient } from "@/domain/features/patient/get-one-patient";
import { AuthenticationException } from "@/presentation/errors";

export class DbAddAttendance implements AddAttendance {
	constructor(
		private readonly repository: AddAttendanceRepository,
		private readonly getPatientService: GetOnePatient,
		private readonly uuidGenerator: UuidGenerator
	) {}

	async add(params: AddAttendance.Params): Promise<AddAttendance.Result> {
		const patient = await this.getPatientService.getOne({
			patientId: params.patientId,
			userId: params.userId,
		});
		if (patient instanceof Error) return patient;

		const id = this.uuidGenerator.generate();

		const result = await this.repository.add({
			id,
			patientId: params.patientId,
			createdAt: new Date(),
		});

		if (result) return result;

		return new Error("something went wrong");
	}
}
