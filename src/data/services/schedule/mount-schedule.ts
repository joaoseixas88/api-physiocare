import { GetPatients } from "@/domain/features";
import { MountSchedule } from "@/domain/features/schedule/mount-schedule";
import { Schedule, ScheduleDays } from "@/domain/models";

export class MountScheduleService implements MountSchedule {
	constructor(private readonly getPatientsService: GetPatients) {}
	async mount(params: MountSchedule.Params): Promise<Schedule> {
		const patients = await this.getPatientsService.get(params);
		const schedule: Schedule = patients.reduce(
			(acc, patient) => {
				for (let day of patient.weekDays) {
					console.log(acc);
					console.log(day);
					acc[day].push(patient.name);
				}
				return { ...acc };
			},
			{
				sunday: [],
				monday: [],
				tuesday: [],
				wednesday: [],
				thursday: [],
				friday: [],
				saturday: [],
			} as Schedule
		);
		return schedule;
	}
}
