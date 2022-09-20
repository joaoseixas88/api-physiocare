import {
	DbGetAllAttendancesByUserId,
	GetProductivityService,
} from "@/data/services";
import { AttendancePrismaRepository } from "@/infra/repos";
import { makeDayJsAdapter } from "@/main/factories/dayJsFactory";
import { makeGetProductivityValidation } from "@/main/factories/validators";
import { GetProductivityController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";

export const makeGetProductivityFactory = (): Controller => {
	const repo = new AttendancePrismaRepository();
	const getAttendancesService = new DbGetAllAttendancesByUserId(
		repo,
		makeDayJsAdapter()
	);
	const service = new GetProductivityService(getAttendancesService);
	return new GetProductivityController(
		service,
		makeGetProductivityValidation()
	);
};
