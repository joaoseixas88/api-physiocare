import { DbAddUser } from "@/data/services";
import { BcryptAdapter, UuidAdapter } from "@/infra/cryptography";
import { AddAccountInMemoryRepository } from "@/infra/repos/in-memory/add-user";
import { AddUserController } from "@/presentation/controllers/add-user-controller";
import { makeAddUserValidation } from "@/main/factories";
import { makeAuthService } from "@/main/factories/auth-service-factory";




const makeSut = () => {
	const repository = new AddAccountInMemoryRepository();
	const uuidGenerator = new UuidAdapter()
	const crypto = new BcryptAdapter(10)
	const addUserService = new DbAddUser(repository,uuidGenerator,crypto);
	const validation = makeAddUserValidation()
	const auth = makeAuthService()
	const addUserController = new AddUserController(addUserService,validation,auth);

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
