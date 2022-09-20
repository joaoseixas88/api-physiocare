import { DbGetAllHomeCares } from "@/data/services/homecare";
import { HomeCarePrismaRepository } from "@/infra/repos";
import { makeGetAllHomeCaresValidation } from "@/main/factories/validators";
import { GetAllHomeCaresController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";

export const makeGetAllHomeCaresFactory = (): Controller => {
	const repo = new HomeCarePrismaRepository()
	const service = new DbGetAllHomeCares(repo)
	return new GetAllHomeCaresController(service, makeGetAllHomeCaresValidation())
}