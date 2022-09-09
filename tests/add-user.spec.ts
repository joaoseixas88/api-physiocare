import { AddUserService } from "@/data/services/add-user-service";
import { FindUserService } from "@/data/services/find-user-service";
import { AddAccountInMemoryRepository } from "@/infra/repos/in-memory/add-user";
import { mock, MockProxy } from "jest-mock-extended";
import { AddUserController } from "@/presentation/controllers/add-user-controller";
import { AddUserRepository, FindUserRepository } from "@/data/contracts/repos";
import { AddUserModel } from "@/domain/models/add-user-model";
import { UuidGenerator } from "@/data/contracts/crypto/uuid-generator";



const makeSut = () => {
	const repository = new AddAccountInMemoryRepository();
	const uuidGenerator = new UuidGenerator()
	const addUserService = new AddUserService(repository,uuidGenerator);
	const addUserController = new AddUserController(addUserService);

	return addUserController
}

describe("AddUserServ", () => {
	let sut: AddUserController
	let body: any

	beforeEach(() => {
		sut = makeSut()
		body = {
			email: "any_email",
			name: "any_name",
			password: "any_password",
			passwordConfirmation: "any_password",
		};
	});

	it("Should be able to add a user", async () => {
		const user = await sut.handle({ body });
		expect(user.statusCode).toBe(200);
	});

	it("Should return 400 if any params is missing ", async () => {
		body = {
			email: "",
			name: "any_name",
			password: "any_password",
			passwordConfirmation: "any_password",
		};

		const user = await sut.handle({ body });
		expect(user.statusCode).toBe(400);
	});

	it("Should return 400 if password is not equal to passwordConfirmation ", async () => {
		body = {
			email: "any_email",
			name: "any_name",
			password: "any_password",
			passwordConfirmation: "another_password",
		};

		const user = await sut.handle({ body });
		expect(user.statusCode).toBe(400);
	});

	it("Should return 400 if user already exists ", async () => {
		await sut.handle({ body })
		const user = await sut.handle({ body });
		expect(user.statusCode).toBe(400);
	});
});
