import { UuidGenerator } from "@/data/contracts/crypto/uuid-generator"
import { FindUserService } from "@/data/services/find-user-service"
import { UserPrismaRepository } from "@/infra/repos/prisma/user-prisma-repository"
import { Controller } from "@/presentation/controllers"
import { AddUserController } from "@/presentation/controllers/add-user-controller"
import { AddUserService } from "src/data/services/add-user-service"


export const AddUserFactory = (): Controller => {
	const repository = new UserPrismaRepository()
	const uuidGenerator = new UuidGenerator()
	const addUserService = new AddUserService(repository,uuidGenerator)
	// const findUserService = new FindUserService(repository)
	const addUserController = new AddUserController(addUserService)

	return addUserController
}