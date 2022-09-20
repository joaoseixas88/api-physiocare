import { DbGetOneHomeCare } from "@/data/services";
import { HomeCarePrismaRepository } from "@/infra/repos";
import { makeGetOneHomeCareValidation } from "@/main/factories/validators";
import { GetOneHomeCareController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";

export const makeGetOneHomeCareFactory = (): Controller => {
	const repo = new HomeCarePrismaRepository();
	const service = new DbGetOneHomeCare(repo);

	return new GetOneHomeCareController(service, makeGetOneHomeCareValidation());
};
