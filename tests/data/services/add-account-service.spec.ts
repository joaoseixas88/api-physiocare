import { AddAccount } from "@domain/features/add-account";

class AddAccountService implements AddAccount {
	perform(params: AddAccount.Params): Promise<AddAccount.Result> {
		throw new Error("Method not implemented.");
	}
}

const makeSut = () => {
	const sut = new AddAccountService();
	return sut;
};

describe("AddAccountService", () => {
	it("", () => {
		const sut = makeSut();

		const user = sut.perform({
			email: 'any_email',
			name: 'any_name',
			password: 'any_password',
			passwordConfirmation: 'any_password'
		});

	});
});
