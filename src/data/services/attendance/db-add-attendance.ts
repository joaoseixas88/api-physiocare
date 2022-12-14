import { UuidGenerator } from "@/data/contracts/cryptography";
import { AddAttendanceRepository } from "@/data/contracts/repos/attendance-repository";
import { AddAttendance } from "@/domain/features/attendance/add-attendance";
import { GetOnePatient } from "@/domain/features/patient/get-one-patient";

export class DbAddAttendance implements AddAttendance {
	constructor(
		private readonly repository: AddAttendanceRepository,
		private readonly getPatientService: GetOnePatient,
		private readonly uuidGenerator: UuidGenerator
	) {}

	async add(params: AddAttendance.Params): Promise<AddAttendance.Result> {
		const patient = await this.getPatientService.getOne(params);
		console.log(params);
		if (patient instanceof Error) return patient;
		const id = this.uuidGenerator.generate();
		const result = await this.repository.add({
			...params,
			id,
			price: params.price ? +params.price : patient.price,
		});
		if (result) return result;
		return new Error("something went wrong");
	}
}
