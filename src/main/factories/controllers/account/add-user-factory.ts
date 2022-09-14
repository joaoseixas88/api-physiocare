import { DbAddUser } from "@/data/services"
import { UuidAdapter } from "@/infra/cryptography"
import { UserPrismaRepository } from "@/infra/repos"
import { AddUserController, Controller } from "@/presentation/controllers"
import { makeAddUserValidation,makeBcrypt, makeAuthService } from "@/main/factories"


export const makeAddUserFactory = (): Controller => {
	const repository = new UserPrismaRepository()
	const uuidGenerator = new UuidAdapter()
	const crypto = makeBcrypt()
	const addUserService = new DbAddUser(repository,uuidGenerator,crypto)
	const validations = makeAddUserValidation()
	const auth = makeAuthService()
	const addUserController = new AddUserController(addUserService, validations,auth)

	return addUserController
}