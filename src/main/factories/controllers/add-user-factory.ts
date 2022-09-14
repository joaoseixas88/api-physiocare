import { DbAddUser } from "@/data/services"
import { UuidAdapter } from "@/infra/cryptography"
import { UserPrismaRepository } from "@/infra/repos/prisma/user-prisma-repository"
import { AddUserController, Controller } from "@/presentation/controllers"
import { makeAuthService } from "../auth-service-factory"
import { makeBcrypt } from "../bcrypt-factory"
import { makeAddUserValidation } from "../validators/add-user-validation"


export const AddUserFactory = (): Controller => {
	const repository = new UserPrismaRepository()
	const uuidGenerator = new UuidAdapter()
	const crypto = makeBcrypt()
	const addUserService = new DbAddUser(repository,uuidGenerator,crypto)
	const validations = makeAddUserValidation()
	const auth = makeAuthService()
	const addUserController = new AddUserController(addUserService, validations,auth)

	return addUserController
}