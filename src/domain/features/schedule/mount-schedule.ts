import { Schedule } from "@/domain/models"


export interface MountSchedule {
	mount(params: MountSchedule.Params): Promise<MountSchedule.Result>
}

export namespace MountSchedule {
	export type Params = {
		userId: string
	}

	export type Result = Schedule
}