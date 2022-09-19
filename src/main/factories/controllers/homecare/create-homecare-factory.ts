import { DbCreateHomeCare } from "@/data/services"
import { UuidAdapter } from "@/infra/cryptography"
import { HomeCarePrismaRepository } from "@/infra/repos"
import { makeCreateHomeCareValidations } from "@/main/factories/validators"
import { CreateHomeCareController } from "@/presentation/controllers"
import { Controller } from "@/presentation/protocols"

export const makeCreateHomeCareFactory = (): Controller => {
	const repo = new HomeCarePrismaRepository()
	const uuidGenerator = new UuidAdapter()
	const service = new DbCreateHomeCare(repo,uuidGenerator)
	return new CreateHomeCareController(service, makeCreateHomeCareValidations())
}